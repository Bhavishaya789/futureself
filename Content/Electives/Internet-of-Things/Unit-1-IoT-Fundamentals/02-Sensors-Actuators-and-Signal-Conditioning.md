# Sensors, actuators, ADC and signal conditioning
minutes: 40
yt: iot sensors types DHT11 LDR PIR ultrasonic soil moisture
yt: ADC analog to digital conversion voltage divider
@study
## Sensors
A sensor turns a physical quantity into an electrical signal.
| Quantity | Sensor | Output |
| --- | --- | --- |
| Temperature/humidity | DHT11, DHT22, DS18B20, LM35 | digital / analog |
| Light | LDR, BH1750 | analog / I2C |
| Motion | PIR HC-SR501 | digital |
| Distance | Ultrasonic HC-SR04 | pulse width |
| Gas/air quality | MQ-2, MQ-135, MH-Z19 | analog |
| Soil moisture | Capacitive soil sensor | analog |
| Motion/orientation | MPU6050 (accelerometer + gyro) | I2C |
| Pressure | BMP280 | I2C |
| Heart rate | MAX30102 | I2C |
| Position | GPS NEO-6M | UART |
Specifications: range, **resolution**, accuracy, precision, sensitivity, response time, power use.

## Analog and digital signals
A microcontroller pin reads either a digital level (0 or 1) or, through an **ADC (Analog-to-Digital Converter)**, a number proportional to the voltage.
**ADC resolution:** an n-bit ADC has 2^n levels. ESP32 has 12-bit ADCs (0–4095) for 0–3.3 V, so one step is 3.3/4095 ≈ **0.806 mV**. Arduino Uno: 10-bit, 0–1023 over 5 V ≈ 4.88 mV per step.
Voltage from reading: V = reading × Vref / (2^n − 1).
LM35 gives 10 mV per °C, so 0.25 V means **25 °C**.

## Voltage divider
Vout = Vin × R2/(R1 + R2). With Vin = 5 V, R1 = 10 kΩ, R2 = 20 kΩ: Vout = 5 × 20/30 = **3.33 V**. It is used to read an LDR or to **level-shift 5 V signals to 3.3 V** for the ESP32 (whose pins are not 5 V tolerant).

## Sensor reading in code (simulated)
```python
def adc_to_volts(raw, bits=12, vref=3.3):
    return raw * vref / (2 ** bits - 1)
def lm35_celsius(volts):
    return volts / 0.010
raw = 310
v = adc_to_volts(raw)
print(round(v, 3), round(lm35_celsius(v), 1))
```
Output:
```
0.25 25.0
```

## Noise and filtering
Real readings jump. Common fixes: take the **average** of N samples, **moving average**, **median filter** (removes spikes), and add a capacitor across the sensor supply. Calibrate against a reference.

## Actuators
- **LED/buzzer:** digital output with a current-limiting resistor. For a 5 V supply, 2 V LED and 20 mA: R = (5 − 2)/0.02 = **150 Ω**.
- **Relay module:** lets a low-voltage pin switch mains loads safely (fans, pumps). Mains voltage is dangerous; use isolation and proper enclosures.
- **DC motor:** driven through a transistor or motor driver (L298N, L293D).
- **Servo:** angle control by a PWM signal.
- **Stepper:** precise steps.
- **Display:** OLED (I2C), LCD.
**PWM (Pulse Width Modulation)** simulates analog output by switching quickly; duty cycle 25% on an 8-bit scale is 64/255.

## Pull-ups and debouncing
Buttons use pull-up/pull-down resistors so the pin never floats; mechanical contacts bounce and need a small delay or capacitor.

> A microcontroller only understands voltages; the ADC and a little maths turn them into meaning.
@qa
Q: What is the resolution of a 12-bit ADC with 3.3 V reference?
A: 3.3 V / 4095 ≈ 0.806 mV per step.
Q: Why use a voltage divider with an ESP32?
A: To scale 5 V signals down to 3.3 V, since ESP32 GPIO pins are not 5 V tolerant, or to convert a resistive sensor such as an LDR into a voltage.
Q: How do you compute the series resistor for an LED?
A: R = (supply voltage − LED forward voltage)/desired current, for example (5 − 2)/0.02 = 150 Ω.
Q: What is PWM used for?
A: Controlling average power by varying duty cycle, such as LED brightness, motor speed and servo angle.
Q: How can sensor noise be reduced?
A: By averaging multiple samples, using moving-average or median filters, adding decoupling capacitors and calibrating.
@quiz
? LM35 outputs 10 mV per °C. At 0.25 V the temperature is
- 2.5 °C
+ 25 °C
- 250 °C
- 0.25 °C
! 0.25 / 0.010 = 25.
? ESP32 ADC is
- 8-bit
- 10-bit
+ 12-bit
- 16-bit
! Values from 0 to 4095.
? Vout of a divider with 10k and 20k (output across 20k) from 5 V
- 1.67 V
+ 3.33 V
- 2.5 V
- 5 V
! 5 x 20/30 = 3.33.
? A relay is used to
- store data
+ switch high-power loads from a low-voltage pin
- measure humidity
- amplify sound
! It isolates the control and load circuits.
? A median filter is good at removing
- slow drift
+ sudden spikes
- all noise
- power loss
! The median ignores outliers.

@visual
flow | The sensor signal chain | Physical quantity such as heat > Sensor turns it into a voltage > Signal conditioning amplifies and filters > ADC converts it to a number > Microcontroller uses the number

@problems
## Moderate
P: Differentiate between a sensor and an actuator with two examples of each.
A: A sensor converts a physical quantity into an electrical signal (temperature sensor LM35, soil moisture sensor, PIR motion sensor). An actuator converts an electrical signal into physical action (relay, servo motor, buzzer, water pump).
R: 2 | Sensor and examples
R: 2 | Actuator and examples
## High
P: A 10-bit ADC has a 5 V reference. Find the voltage step (resolution) and the voltage for a reading of 512. An LM35 gives 10 mV per degree Celsius: what temperature is a voltage of 0.25 V?
A: A 10-bit ADC has 2^10 = 1024 levels. Step = 5 / 1024 = 4.88 mV. A reading of 512 corresponds to 512 x 5 / 1024 = 2.5 V. LM35: 0.25 V / 0.01 V per degree = 25 degrees Celsius.
R: 2 | Step 4.88 mV
R: 1 | 2.5 V for 512
R: 2 | 25 degrees Celsius
## Advanced
P: A voltage divider uses R1 = 10 kilo-ohm and R2 = 10 kilo-ohm on 5 V. Find the output. Find the series resistor for a red LED (2 V, 20 mA) on a 5 V supply. Why is signal conditioning (filtering) needed?
A: Vout = Vin x R2 / (R1 + R2) = 5 x 10 / 20 = 2.5 V. Resistor = (5 - 2) / 0.02 = 150 ohm.
Sensor signals are small and noisy; amplification brings them to the ADC range and filtering removes noise, so readings are stable and accurate.
R: 2 | 2.5 V
R: 2 | 150 ohm
R: 1 | Purpose of conditioning
