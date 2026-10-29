# IoT connectivity: Wi-Fi, Bluetooth, Zigbee, LoRaWAN, NB-IoT and cellular
minutes: 35
yt: iot communication technologies lora zigbee ble wifi comparison
yt: LoRaWAN architecture gateway network server
@study
Choosing a link means trading **range, data rate, power, cost and infrastructure**.

## Short range
- **Wi-Fi (802.11):** high data rate (tens–hundreds of Mbps), ~50 m indoors, high power. Good for mains-powered devices and cameras.
- **Bluetooth / BLE:** ~10–100 m, low power, phones and wearables, beacons. BLE uses the GATT profile (services and characteristics).
- **Zigbee (802.15.4):** ~10–100 m, 250 kbps, **mesh** network, low power, used in smart homes; a hub/coordinator is needed.
- **Thread/Matter:** IP-based smart home standards.
- **RFID / NFC:** very short range identification (NFC ≈ 4 cm): payments, access cards, inventory.

## Low-Power Wide-Area Networks (LPWAN)
- **LoRa / LoRaWAN:** long range (2–5 km urban, 10+ km rural), very low power, low data rate (0.3–50 kbps), unlicensed ISM band (865–867 MHz in India). Star-of-stars architecture: **end devices → gateways → network server → application server**. Great for agriculture, metering, tracking. Small payloads, limited messages per day.
- **NB-IoT / LTE-M:** cellular LPWAN using licensed spectrum; good indoor penetration; needs a SIM and operator support.
- **Sigfox:** ultra-narrowband (very small messages).

## Cellular
2G/3G/4G/5G for mobile assets (vehicle tracking) and high bandwidth (video). 5G adds low latency (URLLC) and massive IoT (mMTC).

## Comparison
| Technology | Range | Data rate | Power | Typical use |
| --- | --- | --- | --- | --- |
| BLE | ~10–100 m | up to 2 Mbps | very low | wearables |
| Zigbee | ~10–100 m (mesh) | 250 kbps | low | smart home |
| Wi-Fi | ~50 m | high | high | cameras, hubs |
| LoRaWAN | km | low | very low | farms, meters |
| NB-IoT | km (operator) | ~100 kbps | low | utilities |
| 5G | km | very high | high | vehicles, industry |

## Data volume example
One reading of 20 bytes every 10 seconds is 8,640 readings a day = 172,800 bytes ≈ **169 KB per day** — tiny, so LoRa or NB-IoT is enough. A video camera needs Wi-Fi or 4G/5G.

## Network topologies
Star (BLE, Wi-Fi, LoRaWAN), mesh (Zigbee, Thread: devices relay for each other, extending range and resilience), tree, and point-to-point.

## Addressing: IPv6
IPv4 (4.3 billion addresses) cannot name billions of devices; **IPv6** (128-bit) can. **6LoWPAN** compresses IPv6 headers for tiny 802.15.4 devices. NAT is used behind routers.

## Choosing
Mains power + high rate → Wi-Fi; battery + phone → BLE; mesh in a building → Zigbee/Thread; battery + kilometres → LoRaWAN/NB-IoT.

> Range, rate and power form a triangle: you can optimise only two.
@qa
Q: Why is LoRaWAN suited to agriculture?
A: It has long range (kilometres), very low power use so sensors run on batteries for years, and uses unlicensed spectrum, though only for small, infrequent messages.
Q: What is a mesh network?
A: A network in which nodes relay data for one another, extending range and providing alternative paths if a node fails; Zigbee and Thread use it.
Q: Compare BLE and Wi-Fi.
A: BLE has low data rate, very low power and works with phones; Wi-Fi has high data rate but much higher power consumption.
Q: What is the role of a LoRaWAN gateway?
A: It receives LoRa radio messages from end devices and forwards them over IP to the network server.
Q: Why is IPv6 important for IoT?
A: Its 128-bit addresses provide enough unique addresses for billions of devices, which IPv4 cannot.
@quiz
? Technology with the longest range among these
- BLE
- Zigbee
+ LoRaWAN
- NFC
! Kilometres of range.
? Zigbee networks are usually
- bus
+ mesh
- ring
- point-to-point only
! Nodes relay for each other.
? 6LoWPAN is used to
- encrypt Wi-Fi traffic
+ carry compressed IPv6 over small low-power 802.15.4 devices
- measure temperature
- charge batteries
! It adapts IPv6 to low-power networks.
? NFC range is about
+ a few centimetres
- 100 m
- 10 km
- 1 km
! Used for tap payments.
? A battery sensor sending small data over kilometres should use
- Wi-Fi
+ LoRaWAN
- Ethernet
- HDMI
! Low power and long range.

@visual
compare | Choosing a wireless technology | Short range (BLE, Zigbee)=Rooms and buildings~Very low power~Wearables, home sensors; Wi-Fi=Homes and offices~High data rate, higher power~Cameras, hubs; LoRaWAN and NB-IoT=Kilometres of range~Very low data rate and power~Farms, meters, city sensors

@problems
## Moderate
P: Name four wireless technologies used in IoT and say what each is best suited for.
A: Bluetooth Low Energy: short range, low power wearables and beacons. Zigbee: low-power mesh networks for home automation. Wi-Fi: high data rate for cameras and hubs. LoRaWAN: long range, low data rate sensors in fields or cities. NB-IoT (cellular): metering and tracking using the mobile network.
R: 2 | Four technologies
R: 2 | Suitable use for each
## High
P: Compare LoRaWAN and Wi-Fi for a soil sensor in a farm 3 km from the house. Which is better and why?
A: LoRaWAN is better: it reaches kilometres, needs very little power so a battery lasts for years, and the small soil data packets fit its low data rate. Wi-Fi reaches only tens of metres, uses more power and needs a router coverage over the whole farm.
R: 2 | LoRaWAN chosen
R: 3 | Range, power and data-rate reasoning
## Advanced
P: A sensor sends 100 bytes every 10 seconds. How many bytes per day? A node uses 20 mA for 2 s every minute and 0.01 mA while sleeping for the other 58 s. Find the average current and the life of a 2000 mAh battery.
A: Messages per day = 86400 / 10 = 8640, so 8640 x 100 = 864,000 bytes (864 KB). Average current = (20 x 2 + 0.01 x 58) / 60 = (40 + 0.58) / 60 = 0.676 mA. Battery life = 2000 / 0.676 = about 2957 hours, about 123 days.
R: 2 | 864 KB per day
R: 2 | Average current 0.676 mA
R: 1 | About 123 days
