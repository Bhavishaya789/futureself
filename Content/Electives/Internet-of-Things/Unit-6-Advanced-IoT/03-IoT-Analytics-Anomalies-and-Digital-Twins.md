# IoT analytics, anomaly detection and digital twins
minutes: 25
yt: digital twin industrial iot predictive maintenance
@study
IoT data is a **time series**: store it in a time-series database, then **clean** (missing readings, sensor drift), **aggregate** (hourly means), and **analyse**.
- **Anomaly detection:** z-score = (x - mean)/sd. If a machine's temperature averages 25 C with sd 2 C, a reading of 33 C has z = **4**, a strong anomaly. Also rolling averages, thresholds with hysteresis, Isolation Forest and autoencoders.
- **Predictive maintenance:** predict failures from vibration, temperature and current before they happen, which reduces downtime.
- **Edge vs cloud:** run quick checks on the device (edge) and heavy training in the cloud; **TinyML** runs small models on microcontrollers.
- **Digital twin:** a live virtual copy of a physical asset (a motor, a building, a farm) updated with sensor data, used to monitor, simulate "what if" and plan maintenance. **Industrial IoT (IIoT)** applies this in factories (Industry 4.0), with protocols such as OPC UA and MQTT.
```python
import statistics as s
data = [24, 25, 26, 25, 24, 26, 25, 33]
m = s.mean(data[:-1]); sd = s.pstdev(data[:-1])
print(round((data[-1] - m) / sd, 1))   # a large z-score flags 33
```
The last reading is many standard deviations above the earlier ones, so it is flagged.
## Hindi saransh
IoT data time series hota hai. Z-score = (x - mean)/sd; 25 C mean, sd 2 par 33 C ka z = 4 (anomaly). Predictive maintenance kharabi se pehle chetavani deta hai. Digital twin kisi mashin ki live virtual prati hai.
> Do cheap checks on the edge and heavy learning in the cloud.
@qa
Q: What is an anomaly?
A: A reading that differs strongly from normal behaviour.
Q: What is predictive maintenance?
A: Predicting equipment failure from sensor data so repairs happen before breakdown.
Q: What is a digital twin?
A: A live virtual model of a physical asset updated with its sensor data.
Q: What does TinyML do?
A: Runs small machine-learning models on microcontrollers.
@quiz
? The z-score for 33 with mean 25 and sd 2 is
- 2
- 3
+ 4
- 8
! (33 - 25)/2.
? A digital twin is
+ a live virtual copy of a physical asset
- a second battery
- a backup disk
- a router
! Used to simulate and monitor.
? Predictive maintenance aims to
- increase downtime
+ fix equipment before it fails
- delete data
- replace sensors
! Plan repairs.
? Heavy model training is usually done in the
- sensor
+ cloud
- LED
- antenna
! Edge does quick checks.
@visual
flow | IoT analytics pipeline | Sensors > Edge filtering > Gateway > Cloud storage > Analytics and ML > Alerts and digital twin
@problems
## Moderate
P: Compute the z-score of 33 when the mean is 25 and sd is 2.
A: (33 - 25)/2 = 4.
R: 1 | Formula
R: 1 | 4
## High
P: Explain predictive maintenance for a water pump.
A: Track vibration, temperature and current; a model flags unusual patterns early, so the pump is repaired before it fails.
R: 2 | Signals
R: 1 | Benefit
## Advanced
P: Design a digital twin of a greenhouse. Name its inputs and uses.
A: Inputs: temperature, humidity, soil moisture, light and valve status. Uses: monitor, simulate watering plans, alert on faults and optimise energy.
R: 2 | Inputs
R: 2 | Uses
