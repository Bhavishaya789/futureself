# IoT application protocols: MQTT, HTTP/REST, CoAP
minutes: 40
yt: mqtt protocol explained publish subscribe qos topics broker
yt: coap vs mqtt vs http iot protocols
@study
## HTTP / REST
Request–response over TCP. Simple and universal (`GET /sensors/12`, `POST /readings` with JSON), but heavy headers and no server push, so poor for tiny battery devices. Use HTTPS.

## MQTT (Message Queuing Telemetry Transport)
The most popular IoT protocol: lightweight **publish/subscribe** over TCP (port 1883, 8883 with TLS).
- **Broker:** central server (Mosquitto, EMQX, HiveMQ) that routes messages.
- **Clients** publish messages to **topics** and subscribe to topics. Publishers and subscribers never talk directly (decoupled).
- **Topic:** a hierarchy like `home/kitchen/temperature`.
- **Wildcards:** `+` matches one level (`home/+/temperature`), `#` matches all remaining levels (`home/#`) (subscribe only).

### Quality of Service
| QoS | Meaning | Messages |
| --- | --- | --- |
| 0 | at most once ("fire and forget") | may be lost |
| 1 | at least once | may duplicate |
| 2 | exactly once | slowest, 4-way handshake |

### Other features
- **Retained message:** broker stores the last message for new subscribers.
- **Last Will and Testament (LWT):** message the broker publishes if a client disconnects unexpectedly (device offline alert).
- **Keep-alive** ping, **persistent sessions**, small 2-byte minimum header.

### Topic matching (simulated and verified)
```python
def match(flt, topic):
    f, t = flt.split('/'), topic.split('/')
    for i, part in enumerate(f):
        if part == '#': return True
        if i >= len(t): return False
        if part != '+' and part != t[i]: return False
    return len(f) == len(t)
print(match('home/+/temp', 'home/kitchen/temp'))
print(match('home/#', 'home/a/b/c'))
print(match('home/+/temp', 'home/a/b/temp'))
```
Output:
```
True
True
False
```

### Publishing from Python (needs a broker and the paho-mqtt library)
```text
import json, paho.mqtt.client as mqtt
c = mqtt.Client()
c.connect("broker.example.com", 1883)
c.publish("farm/field1/soil", json.dumps({"moisture": 41, "unit": "%"}), qos=1)
```

## CoAP (Constrained Application Protocol)
REST-like (GET/POST/PUT/DELETE) but over **UDP** with tiny binary headers, designed for constrained devices; supports **observe** (subscribe to changes), multicast and optional reliability (confirmable messages). Secured with DTLS.

## Comparison
| Feature | HTTP | MQTT | CoAP |
| --- | --- | --- | --- |
| Model | request/response | publish/subscribe | request/response (+observe) |
| Transport | TCP | TCP | UDP |
| Overhead | high | low | very low |
| Best for | web APIs | telemetry, many devices | very constrained nodes |

## Others
AMQP (enterprise queues), XMPP, WebSocket, DDS (robotics/industrial), OPC UA (industrial), LwM2M (device management).

## Data format
Payloads are usually **JSON** (human readable) or CBOR/Protobuf (compact). Example: `{"id":"node1","t":28.4,"h":61}`.

> MQTT: devices talk to a broker, not to each other.
@qa
Q: What is MQTT and why is it popular in IoT?
A: A lightweight publish/subscribe protocol over TCP with a central broker. Its small overhead, simple API and QoS levels suit constrained devices and unreliable networks.
Q: Explain the three MQTT QoS levels.
A: QoS 0 delivers at most once with no acknowledgement; QoS 1 delivers at least once, possibly duplicated; QoS 2 delivers exactly once using a four-step handshake.
Q: What are the wildcards in MQTT?
A: + matches exactly one topic level and # matches any number of remaining levels.
Q: What is the Last Will and Testament?
A: A message registered by a client at connect time which the broker publishes if the client disconnects unexpectedly, often used for offline status.
Q: Why is CoAP preferred over HTTP for very small devices?
A: It runs over UDP with a compact binary header, so it needs less memory, energy and bandwidth, while still giving REST-style operations.
@quiz
? MQTT uses which model?
- Client-server only
+ Publish/subscribe via broker
- Peer-to-peer broadcast
- Email
! Clients publish to topics and subscribe through a broker.
? MQTT QoS 2 means
- at most once
- at least once
+ exactly once
- never
! The slowest but most reliable level.
? CoAP runs over
- TCP
+ UDP
- ICMP
- FTP
! Its transport is UDP.
? Topic filter home/+/temp matches
+ home/kitchen/temp
- home/a/b/temp
- home/temp
- hall/kitchen/temp
! + stands for one level.
? Default MQTT port without TLS
- 80
- 443
+ 1883
- 5683
! 8883 is used with TLS.

@visual
sequence | MQTT publish and subscribe | Sensor > Broker : publish 25 to home/room1/temp; Phone app > Broker : subscribe to home/room1/#; Broker > Phone app : deliver 25 on home/room1/temp

@problems
## Moderate
P: Explain the publish-subscribe model of MQTT with the roles of publisher, subscriber, broker and topic.
A: Publishers send messages to a topic on a broker; subscribers register interest in topics with the broker; the broker delivers each message to every matching subscriber. Publishers and subscribers do not know each other, which decouples them. A topic is a hierarchical name such as home/room1/temp.
R: 2 | Roles of publisher, subscriber and broker
R: 2 | Topic and decoupling
## High
P: Explain MQTT QoS 0, 1 and 2, and the wildcards + and # with an example.
A: QoS 0: at most once (no acknowledgement, may be lost). QoS 1: at least once (acknowledged, may be duplicated). QoS 2: exactly once (four-step handshake, slowest). Wildcards: + matches one level (home/+/temp matches home/room1/temp), # matches all remaining levels (home/room1/# matches every topic below room1).
R: 3 | Three QoS levels
R: 2 | Wildcards with examples
## Advanced
P: Compare MQTT, HTTP and CoAP on transport, pattern and best use. What are retained messages and the last will message?
A: MQTT: TCP, publish-subscribe, small overhead, good for many devices pushing telemetry. HTTP: TCP, request-response, heavy headers, good for web APIs. CoAP: UDP, request-response similar to HTTP but lightweight, good for constrained devices.
A retained message is stored by the broker so a new subscriber gets the last value immediately. A last will message is sent by the broker if a client disconnects unexpectedly, so others know it is offline.
R: 3 | Three protocols compared
R: 2 | Retained and last will
