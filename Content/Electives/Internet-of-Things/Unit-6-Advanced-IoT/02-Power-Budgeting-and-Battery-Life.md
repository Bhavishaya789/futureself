# Power budgeting and battery life
minutes: 20
yt: iot battery life calculation deep sleep
@study
Battery life = capacity / average current. Devices spend most of the time in **deep sleep** and wake briefly to measure and transmit.
Example: a 2400 mAh battery; the device draws 50 mA for 1 s and 0.01 mA (10 microamps) asleep for the other 599 s of every 10 minutes.
Average current = (50 x 1 + 0.01 x 599) / 600 = **0.0933 mA**. Life = 2400 / 0.0933 = about **25,700 hours = 2.9 years** (ignoring battery self-discharge and temperature).
Ways to extend life: sleep deeper, transmit less often, shorten active time, lower radio power, batch readings, use energy-efficient protocols (MQTT-SN, CoAP) and energy harvesting (solar).
```python
avg = (50 * 1 + 0.01 * 599) / 600
print(round(avg, 4), round(2400 / avg), round(2400 / avg / 24 / 365, 1))   # 0.0933 25719 2.9
```
## Hindi saransh
Battery ki umar = battery kshamata / aushat dhara. Zyada samay deep sleep mein rakho. Example mein aushat dhara 0.0933 mA aur umar lagbhag 2.9 saal.
> The radio is usually the biggest consumer: every transmission you skip saves battery.
@qa
Q: Formula for battery life?
A: Capacity (mAh) divided by average current (mA).
Q: Why use deep sleep?
A: Sleep current is thousands of times lower than active current.
Q: What usually uses the most power in an IoT node?
A: The radio during transmission.
Q: Name two ways to extend battery life.
A: Send less often and sleep deeper (also batching and energy harvesting).
@quiz
? Average current in the example is about
- 50 mA
+ 0.0933 mA
- 1 mA
- 0.01 mA
! Weighted average.
? Life of a 2400 mAh battery at 0.0933 mA is about
- 2 weeks
- 6 months
+ 2.9 years
- 29 years
! 2400/0.0933 hours.
? Which saves more battery?
- transmitting every second
+ transmitting every 10 minutes
- never sleeping
- full radio power always
! Fewer active periods.
? Deep sleep current is typically
- a few amps
+ microamps
- 1 A
- 100 mA
! Very small.
@visual
formula | Battery life | life (hours) = capacity (mAh) / average current (mA)
@problems
## Moderate
P: A 1000 mAh battery drives a 10 mA load. How long does it last?
A: 1000/10 = 100 hours.
R: 1 | Formula
R: 1 | 100 h
## High
P: A node draws 20 mA for 2 s and 0.01 mA asleep for 598 s in each 10 minutes. Find the average current.
A: (20 x 2 + 0.01 x 598)/600 = (40 + 5.98)/600 = 0.0766 mA.
R: 2 | Weighted average
R: 1 | 0.0766
## Advanced
P: Suggest three design changes to double battery life.
A: Halve transmissions, shorten active time by processing less, and use deeper sleep modes; consider a solar panel.
R: 3 | Three ideas
R: 1 | Justification
