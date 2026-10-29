# Mini project: smart irrigation and environment monitor
minutes: 45
yt: esp32 soil moisture irrigation project mqtt
yt: iot project ideas for engineering students
@study
Build a complete system and apply everything from this module.

## Problem
Farmers waste water and time. We want a node that measures soil moisture, temperature and humidity, switches a water pump automatically, and reports to a phone dashboard.

## Hardware (approximate)
ESP32 board, capacitive soil-moisture sensor, DHT22 (temperature and humidity), 5 V relay module, small submersible pump with separate power supply, jumper wires, breadboard, optional OLED. Power the pump from its own supply and share only ground.

## Block diagram
Sensors → ESP32 (decision + Wi-Fi) → MQTT broker → Node-RED / cloud database → dashboard. Dashboard commands (manual ON/OFF) return to ESP32 through an MQTT topic.

## Topics
- `farm/field1/soil` (published JSON: moisture %, temperature, humidity)
- `farm/field1/pump/set` (subscribed: "ON"/"OFF")
- `farm/field1/status` (retained; LWT "offline")

## Control logic with hysteresis
Switching exactly at one threshold makes the pump chatter. Use two thresholds:
- Turn the pump **ON** when moisture < 30 %.
- Turn it **OFF** when moisture > 45 %.
Also add a maximum run time (for example 5 minutes) as a safety cut-off in case the sensor fails.
```python
def pump_controller(readings, low=30, high=45):
    pump, log = False, []
    for m in readings:
        if m < low: pump = True
        elif m > high: pump = False
        log.append((m, "ON" if pump else "OFF"))
    return log
for row in pump_controller([50, 40, 29, 33, 40, 46, 44]):
    print(row)
```
Output:
```
(50, 'OFF')
(40, 'OFF')
(29, 'ON')
(33, 'ON')
(40, 'ON')
(46, 'OFF')
(44, 'OFF')
```
Between 30 and 45 the pump keeps its previous state, so it does not chatter.

## Calibrating the soil sensor
Record the raw ADC value in dry air (e.g. 3000) and in water (e.g. 1300); then moisture % = (dry − raw)/(dry − wet) × 100. The numbers differ for each sensor, so calibrate yours.

## Firmware outline (ESP32)
1. Connect to Wi-Fi; connect to the MQTT broker with TLS and a unique client ID; set Last Will.
2. Every 60 s: read sensors, average 10 ADC samples, build JSON, publish with QoS 1.
3. In the MQTT callback, handle manual pump commands.
4. Apply hysteresis control and safety timer.
5. Use deep sleep between cycles if on battery or solar.

## Dashboard
Node-RED gauge for moisture, line chart of temperature, switch for the pump, and an alert (message to phone) when the tank is empty or the node goes offline.

## Extensions
Weather API to skip watering if rain is forecast; solar panel and battery; LoRa link for a remote field; TinyML to predict irrigation needs.

## Testing and report
Test with dry/wet soil, simulated network loss, sensor unplugged (should fail safe: pump OFF), and measure power. Report sections: objective, block diagram, circuit, code, results, cost, limitations, future work.

## Safety
Keep mains voltage away from the breadboard, use a fuse, waterproof the enclosure, and never power a pump from the ESP32 pin.

> Sense, decide with hysteresis, act, report, and always fail safe.
@qa
Q: Why use hysteresis in the pump controller?
A: Two thresholds prevent rapid on-off switching around a single threshold, protecting the pump and relay.
Q: How is a soil moisture sensor calibrated?
A: Record the raw reading in dry air and in water and convert readings to a percentage: (dry − raw)/(dry − wet) × 100.
Q: Why add a maximum pump run time?
A: As a safety measure if the sensor fails or the soil never reads wet, preventing flooding and pump damage.
Q: How does the dashboard control the pump?
A: It publishes ON/OFF to an MQTT command topic to which the ESP32 is subscribed, and the ESP32 acts on it.
Q: What should happen if the sensor is disconnected?
A: The system should fail safe: switch the pump off, raise an alert and publish an error status.
@quiz
? With thresholds ON below 30 and OFF above 45, a reading of 40 while the pump is ON
- turns it OFF
+ keeps it ON
- resets the node
- sends a blank
! Between thresholds the state is kept.
? The pump should be powered
- from an ESP32 GPIO pin
+ from a separate supply via the relay
- from the sensor
- without ground
! GPIO pins cannot supply pump current.
? Last Will message is used to report
- sensor value
+ unexpected disconnection
- pump power
- calibration
! The broker publishes it for an offline device.
? Averaging 10 ADC samples helps to
- add noise
+ reduce noise
- slow Wi-Fi
- increase voltage
! Averaging smooths random errors.
? A retained status message lets a new subscriber
+ immediately see the last status
- reset the device
- delete topics
- change QoS
! The broker stores the last retained message.

@visual
flow | Smart irrigation logic | Read soil moisture > Is it below 30 percent? > Check the rain forecast > Run the pump for 5 minutes > Log the event to the cloud

@problems
## Moderate
P: List the components of a smart irrigation system and what each does.
A: Soil moisture sensor (measures wetness), microcontroller such as ESP32 (reads sensor and decides), relay (switches the pump), water pump or valve (waters the plants), power supply, and Wi-Fi or LoRa link to a cloud dashboard or phone app.
R: 2 | Sensor, controller and relay or pump
R: 2 | Communication and app
## High
P: Write the control rule (pseudo-code) for the irrigation system: water for 5 minutes if soil moisture is below 30% and rain is not expected. Why add a minimum gap between waterings?
A: if moisture < 30 and not rain_expected and minutes_since_last_watering > 60: relay on; wait 5 minutes; relay off; log the event.
A minimum gap prevents over-watering because water takes time to soak in and the reading may still be low right after watering, and it avoids repeated rapid switching of the pump.
R: 3 | Correct rule with both conditions
R: 2 | Reason for the gap
## Advanced
P: The pump delivers 2 litres per minute and runs 5 minutes per watering, 4 times a day. Find the daily water use. Suggest two ways to test the project and one way to make it more reliable.
A: One watering uses 2 x 5 = 10 litres, so 4 waterings use 40 litres per day.
Testing: calibrate the sensor in dry soil and in a glass of water to map readings to percentages; run the pump with a flow-measuring jug; test Wi-Fi failure to check the device still waters using its local rule.
Reliability: add a maximum run time (fail-safe) and a watchdog timer, so a stuck relay or crashed program cannot flood the plants.
R: 2 | 40 litres per day
R: 2 | Two valid tests
R: 1 | A reliability measure
