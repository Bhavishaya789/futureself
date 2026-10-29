# IoT cloud platforms, dashboards and the data pipeline
minutes: 35
yt: iot cloud platform aws iot core thingspeak blynk
yt: iot data pipeline time series database grafana
@study
## Why a cloud?
Devices have limited storage and compute. The cloud provides **storage, analytics, dashboards, device management, scalability and remote access**.

## Platform examples
- **ThingSpeak:** simple, free tier, HTTP/MQTT, MATLAB charts. Good for learning.
- **Blynk, Adafruit IO:** easy mobile dashboards.
- **AWS IoT Core, Azure IoT Hub, Google Cloud IoT alternatives:** device registry, authentication with certificates, rules engine, integration with storage and ML.
- **Open source:** Mosquitto + Node-RED + InfluxDB + Grafana; ThingsBoard; Home Assistant.

## Typical pipeline
1. **Device** reads sensor and publishes JSON.
2. **Broker/Ingestion** (MQTT broker or cloud endpoint).
3. **Stream processing / rules**: validate, filter, convert units, trigger alerts.
4. **Storage:** time-series database (InfluxDB, TimescaleDB) or object storage for raw logs.
5. **Analytics/ML:** trends, anomaly detection, prediction.
6. **Visualisation and alerts:** Grafana dashboard, SMS/email/push.
7. **Control path back:** commands/shadow updates to devices.

## Device shadow / digital twin
A cloud copy of a device's state (reported and desired). The app writes the *desired* state ("fan = ON"); when the device reconnects it syncs, which handles intermittent connections.

## Data handling in code (simulated)
```python
import json, statistics
messages = ['{"id":"n1","t":28.1}', '{"id":"n1","t":28.4}', '{"id":"n1","t":35.9}', '{"id":"n1","t":28.2}']
temps = [json.loads(m)["t"] for m in messages]
mean = statistics.mean(temps)
alerts = [t for t in temps if t > 33]
print(round(mean, 2), alerts)
```
Output:
```
30.15 [35.9]
```
Rules like this (`temperature > 33 → send alert`) run in the cloud's rules engine or in Node-RED.

## Over-the-air (OTA) updates
Update firmware remotely, with signed images and rollback if the new version fails.

## Interoperability and APIs
REST APIs, webhooks, and standards (oneM2M, Matter) connect platforms.

## Cost and scale
Pay per message/device; sending data every second from 1,000 devices is 86.4 million messages a day, so batch, compress and send only changes (report by exception).

## Time-series data tips
Timestamp in UTC, include device ID and units, keep raw data for a short time and aggregate for long-term storage (hourly averages).

> Edge collects, broker routes, database stores, dashboard shows, rules act.
@qa
Q: List the stages of an IoT data pipeline.
A: Device sensing, ingestion through a broker or endpoint, processing and rules, storage in a database, analytics, visualisation and alerts, and control commands back to devices.
Q: What is a device shadow?
A: A cloud-held representation of a device's reported and desired state, allowing applications to interact even when the device is offline.
Q: Why use a time-series database for sensor data?
A: It is optimised for timestamped data, fast writes, range queries and downsampling over time.
Q: What is an OTA update?
A: Remotely sending new firmware to a deployed device over the network, ideally signed and with rollback capability.
Q: How can message cost be reduced?
A: By batching readings, compressing payloads, reporting only significant changes and lowering the sampling frequency.
@quiz
? A good open-source dashboard tool is
- Photoshop
+ Grafana
- Excel macro
- Notepad
! Often paired with InfluxDB.
? Time-series databases store
- images only
+ timestamped measurements
- source code
- emails
! Each record has a time.
? A device shadow stores
- the battery
- passwords in plain text
+ reported and desired state
- hardware design
! Syncs when the device reconnects.
? Rules engines can
- design PCBs
+ trigger alerts or actions based on conditions
- replace sensors
- compile firmware
! For example, temperature above a threshold sends SMS.
? Messages per day from 1,000 devices sending every second
- 1 million
- 8.64 million
+ 86.4 million
- 864 million
! 1000 x 86400 = 86,400,000.

@visual
flow | An IoT data pipeline | Devices send readings > Gateway collects and forwards them > Cloud ingests with MQTT or HTTP > Database stores time-series data > Dashboard and alerts show results

@problems
## Moderate
P: List the stages of an IoT data pipeline and name one tool or service for each.
A: Ingestion (MQTT broker, AWS IoT Core, Azure IoT Hub), storage (time-series database such as InfluxDB, or a cloud database), processing (rules engine, stream processing, Python), visualisation (Grafana, ThingsBoard) and alerting (email, SMS, push notifications).
R: 2 | Stages
R: 2 | A tool for each
## High
P: What is a time-series database and why is it better than a plain table for sensor data? Design the fields for temperature readings.
A: A time-series database stores values with timestamps and is optimised for fast writes, time-range queries, downsampling and automatic retention of old data. Fields: timestamp, device_id, location, temperature, battery (optionally humidity). A plain table can store this but becomes slow and large without these optimisations.
R: 2 | Time-series definition and advantages
R: 2 | Sensible fields with a timestamp
R: 1 | Comparison with a plain table
## Advanced
P: A cloud rule says: if temperature is above 40 for 3 consecutive readings send an alert. Explain why 3 readings are required and describe the storage cost of 1000 sensors sending 100 bytes every 10 seconds for one day.
A: Requiring 3 readings filters out a single noisy spike or glitch and reduces false alarms. Storage per day = 1000 sensors x 8640 messages x 100 bytes = 864,000,000 bytes = about 864 MB (before indexing and compression).
R: 2 | Reason for consecutive readings
R: 2 | 864 MB per day
R: 1 | Mentions indexing or compression or retention
