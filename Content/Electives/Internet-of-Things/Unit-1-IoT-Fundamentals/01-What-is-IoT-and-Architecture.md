# What is the Internet of Things? Definition and architecture
minutes: 30
yt: internet of things introduction architecture layers
yt: IoT applications smart home smart agriculture industry 4.0
@study
The **Internet of Things (IoT)** is a network of physical objects ("things") with sensors, processing ability and connectivity that collect and exchange data over the internet, often acting on it with little human input.

## Why now?
Cheap sensors and microcontrollers (an ESP32 costs a few hundred rupees), ubiquitous Wi-Fi/4G/5G, cloud computing, and better analytics and AI.

## Basic building blocks
1. **Things / devices:** sensors (measure), actuators (act), a microcontroller or small computer.
2. **Connectivity:** Wi-Fi, Bluetooth, Zigbee, LoRaWAN, NB-IoT, cellular.
3. **Data processing:** at the device (edge), a gateway (fog) or the cloud.
4. **User interface / application:** mobile app, dashboard, alerts.

## Layered architectures
**Three-layer:** Perception (sensors, actuators) → Network (transport) → Application (services).
**Five-layer:** Perception → Transport → Processing (middleware, storage, analytics) → Application → Business (policies, revenue, privacy).
**Cloud-edge view:** Device → Gateway → Cloud, with decisions made at the most suitable level.

## Characteristics
Connectivity, sensing, intelligence, scalability (billions of devices), low power, heterogeneity (many vendors and protocols), and security/privacy needs.

## Examples
- **Smart home:** lights, thermostat, door locks.
- **Smart agriculture:** soil-moisture sensors control irrigation pumps.
- **Healthcare:** wearables monitor heart rate and SpO2.
- **Industry 4.0 / IIoT:** predictive maintenance of machines.
- **Smart city:** street lights, waste bins, traffic and air-quality monitoring.
- **Logistics:** GPS and temperature tracking of cold-chain goods.
India: Smart Cities Mission, smart electricity meters, FASTag, agriculture sensors.

## IoT versus M2M
M2M is direct machine-to-machine communication, often over closed cellular networks. IoT adds internet-scale connectivity, cloud services and analytics.

## IoT data flow example
Temperature sensor → ESP32 reads and averages → sends JSON over MQTT → broker → cloud database → dashboard graph → rule triggers a fan relay.

## Challenges
Security, privacy, interoperability, power consumption, scalability, reliability in harsh environments, and data volume.

> Sense → connect → process → act.
@qa
Q: Define the Internet of Things.
A: A network of physical objects embedded with sensors, software and connectivity that collect and exchange data over the internet and can act on it.
Q: Describe the three-layer IoT architecture.
A: The perception layer senses and acts on the physical world, the network layer carries the data, and the application layer delivers services to users.
Q: Difference between a sensor and an actuator?
A: A sensor converts a physical quantity into an electrical signal; an actuator converts an electrical signal into physical action such as motion or light.
Q: Give three IoT application areas.
A: Smart agriculture, healthcare wearables, smart cities, smart homes and industrial predictive maintenance.
Q: Name key challenges in IoT.
A: Security and privacy, interoperability, limited power, scalability and handling large volumes of data.
@quiz
? The layer that contains sensors is the
+ perception layer
- application layer
- business layer
- network layer only
! The perception layer senses the environment.
? An actuator
- measures temperature
+ converts a signal into physical action
- stores data
- routes packets
! Examples are motors, relays and LEDs.
? Which is an example of IIoT?
- A smart bulb
+ Predictive maintenance of factory machines
- A video game
- A web page
! Industrial IoT focuses on industry.
? Processing close to the device is called
- cloud computing
+ edge computing
- batch only
- mainframe
! It reduces latency and bandwidth.
? Which is NOT an IoT connectivity option?
- Wi-Fi
- LoRaWAN
- Zigbee
+ Floppy disk
! It is not a network technology.

@visual
layers | A four-layer IoT architecture | Application layer: apps, dashboards and alerts; Network layer: Wi-Fi, LoRa, cellular and the protocols on them; Processing layer: edge, cloud, databases and analytics; Perception layer: sensors and actuators in the physical world

@problems
## Moderate
P: Define the Internet of Things and name the four layers of a typical IoT architecture from bottom to top.
A: The Internet of Things is a network of physical objects fitted with sensors, software and connectivity so they can collect and exchange data and act on it. Layers from bottom to top: perception (sensors and actuators), network (connectivity), processing (edge, cloud, storage, analytics) and application (apps and dashboards).
R: 2 | Definition
R: 2 | Four layers in order
## High
P: Explain the data flow of a smart home temperature system from the sensor to the user's phone and back to a fan.
A: A temperature sensor in the room (perception) reads the value, a microcontroller sends it over Wi-Fi using MQTT (network) to the cloud (processing) where it is stored and checked against a rule. The mobile app (application) shows the value. If the temperature is above the limit, a command goes back through the cloud to the device and the actuator (relay) switches the fan on.
R: 2 | Sensor to network to cloud
R: 2 | App shows the data
R: 1 | Command returns to an actuator
## Advanced
P: Differentiate IoT and M2M. Give three challenges of IoT with one example each.
A: M2M is direct device-to-device communication over a point-to-point link, often with cellular or wired networks and proprietary solutions. IoT connects devices to the internet and cloud platforms with open protocols, analytics and applications, so it scales to many services.
Challenges: security (default passwords on cameras), interoperability (devices from different vendors with different protocols), power and battery life (a sensor must run for months), scalability and privacy of collected data.
R: 2 | IoT versus M2M
R: 3 | Three challenges with examples
