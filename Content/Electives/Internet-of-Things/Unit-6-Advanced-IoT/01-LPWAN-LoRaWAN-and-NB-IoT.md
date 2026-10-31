# LPWAN: LoRaWAN and NB-IoT
minutes: 20
yt: lorawan nb-iot lpwan explained
@study
**Low-power wide-area networks (LPWAN)** connect battery devices over kilometres with small, infrequent messages (soil moisture, meters, trackers).
- **LoRaWAN:** unlicensed sub-GHz spectrum (865-867 MHz in India), long range (several km in open areas), very low power, low data rate, you can run your own gateways. Device classes: **A** (receive only after sending, lowest power), **B** (scheduled receive slots), **C** (almost always listening, mains power).
- **NB-IoT / LTE-M:** run on licensed cellular networks, with better indoor coverage and operator support but a subscription cost.
- **Choosing:** LoRaWAN for private farm or campus networks; NB-IoT for utilities and nationwide coverage; Wi-Fi/BLE for short range; cellular LTE for high data.
- **Trade-offs:** longer range means lower data rate. Duty-cycle rules limit how often a device may transmit, so send small payloads (a few bytes) and only when needed.
## Hindi saransh
LPWAN kam bijli mein door tak chhote sandesh bhejta hai. LoRaWAN bina license ke spectrum par chalta hai (Class A sabse kam power); NB-IoT mobile network par. Range badhane par data rate ghatta hai.
> Send few bytes, rarely: that is how LPWAN devices live for years on a battery.
@qa
Q: What is LPWAN good for?
A: Battery-powered devices sending small data over long distances.
Q: Which LoRaWAN class uses the least power?
A: Class A.
Q: Difference between LoRaWAN and NB-IoT?
A: LoRaWAN uses unlicensed spectrum and your own gateways; NB-IoT uses licensed cellular networks and an operator.
Q: What is the trade-off of longer range?
A: A lower data rate.
@quiz
? Lowest-power LoRaWAN device class is
+ A
- B
- C
- D
! Receives only after it transmits.
? NB-IoT runs on
- unlicensed Wi-Fi
+ licensed cellular networks
- Bluetooth
- infrared
! Operator network.
? A private farm sensor network with its own gateways suits
+ LoRaWAN
- 5G only
- wired Ethernet
- satellite TV
! Own infrastructure.
? LPWAN messages are typically
- large video
+ small and infrequent
- continuous audio
- gigabytes
! Low data rate.
@visual
compare | LoRaWAN versus NB-IoT | LoRaWAN=Unlicensed band~Own gateways~Low power; NB-IoT=Licensed cellular~Operator network~Indoor coverage
@problems
## Moderate
P: Name two LPWAN technologies.
A: LoRaWAN and NB-IoT (also Sigfox, LTE-M).
R: 1 | First
R: 1 | Second
## High
P: Choose a network for 200 soil sensors on a private farm and justify it.
A: LoRaWAN: long range, very low power, no subscription per device, and the farm can run its own gateway.
R: 2 | Choice
R: 1 | Reason
## Advanced
P: Explain why LPWAN devices must send tiny payloads.
A: Low data rate and duty-cycle limits mean long messages take long airtime, waste battery and break regulations.
R: 2 | Airtime
R: 2 | Battery and rules
