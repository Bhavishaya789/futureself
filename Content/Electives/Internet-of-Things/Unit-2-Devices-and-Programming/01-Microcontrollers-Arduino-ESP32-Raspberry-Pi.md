# Microcontrollers and boards: Arduino, ESP32, Raspberry Pi
minutes: 35
yt: arduino vs esp32 vs raspberry pi difference
yt: ESP32 pinout GPIO deep sleep
@study
## Microcontroller vs microprocessor
A **microcontroller (MCU)** puts CPU, RAM, flash memory and peripherals (GPIO, ADC, timers, UART, I2C, SPI) on one chip: cheap, low power, runs one program with no OS. A **microprocessor** (as in a PC or Raspberry Pi) needs external memory and runs an OS.

## Popular boards
| Board | Chip | Clock | Connectivity | Typical use |
| --- | --- | --- | --- | --- |
| Arduino Uno | ATmega328P (8-bit) | 16 MHz | none | learning, simple control |
| **ESP8266 (NodeMCU)** | 32-bit | 80 MHz | Wi-Fi | cheap Wi-Fi nodes |
| **ESP32** | dual-core 32-bit | up to 240 MHz | Wi-Fi + Bluetooth LE | main IoT board |
| Raspberry Pi Pico (RP2040) | dual Cortex-M0+ | 133 MHz | (Pico W adds Wi-Fi) | low-cost MCU |
| **Raspberry Pi 4/5** | quad-core ARM, Linux | 1.5–2.4 GHz | Wi-Fi, Ethernet, BT | gateway, vision, servers |
| STM32 | ARM Cortex-M | 48–480 MHz | varies | industrial |

## ESP32 features
GPIO pins (3.3 V logic), 12-bit ADC, 2 DAC, touch sensors, PWM, UART/I2C/SPI, Wi-Fi 802.11 b/g/n, Bluetooth, **deep-sleep** mode (microamp current), RTC memory, and OTA (over-the-air) updates. Some GPIOs are input-only (34–39) and ADC2 pins cannot be used while Wi-Fi is on.

## Communication buses
- **UART:** two wires TX/RX, asynchronous (GPS, serial monitor).
- **I2C:** two wires SDA/SCL, many devices by address (OLED, BMP280).
- **SPI:** four wires (MOSI, MISO, SCK, CS), fast (SD cards, displays).
- **1-Wire:** one data line (DS18B20).

## Programming
- **Arduino IDE / PlatformIO** (C/C++): `setup()` runs once, `loop()` runs forever.
- **MicroPython** on ESP32: Python on the board.
- **ESP-IDF** (professional C framework with FreeRTOS).

### Blink and sensor sketch (ESP32 Arduino, shown for reference)
```cpp
const int LED = 2;       // on-board LED on many ESP32 boards
const int SENSOR = 34;   // ADC1 channel
void setup() {
  Serial.begin(115200);
  pinMode(LED, OUTPUT);
}
void loop() {
  int raw = analogRead(SENSOR);          // 0..4095
  float volts = raw * 3.3 / 4095.0;
  Serial.printf("raw=%d volts=%.3f\n", raw, volts);
  digitalWrite(LED, volts > 1.5 ? HIGH : LOW);
  delay(1000);
}
```
Avoid long `delay()` in real products; use timers or non-blocking code with `millis()`.

## Power management
Battery life = capacity / average current. A 2000 mAh battery with a constant 20 mA lasts **100 hours**. Wake for 5 s at 80 mA once a minute and deep sleep at 10 µA the rest of the time: average ≈ 6.7 mA, so about **300 hours (12.5 days)**. Sleeping is the key to battery IoT.

## Choosing a board
Need Wi-Fi/BLE and low cost → ESP32. Heavy processing, camera AI, Linux → Raspberry Pi. Ultra-low power for years → special low-power MCUs with LoRa.

> MCU = tiny computer for one job; Raspberry Pi = small Linux computer.
@qa
Q: Difference between a microcontroller and a microprocessor?
A: A microcontroller integrates CPU, memory and peripherals on one chip for dedicated control tasks; a microprocessor is a CPU needing external memory and peripherals, typically running a full OS.
Q: Why is ESP32 popular for IoT?
A: It combines a fast dual-core CPU, Wi-Fi, Bluetooth, many peripherals, deep sleep and low cost.
Q: Compare I2C and SPI.
A: I2C uses two wires and addresses many devices on one bus but is slower; SPI uses four wires (plus chip selects), is faster and full duplex but needs more pins.
Q: What do setup() and loop() do in Arduino code?
A: setup() runs once at start for initialisation; loop() runs repeatedly forever.
Q: How does deep sleep extend battery life?
A: The device turns off most circuitry and draws microamps, waking only briefly to measure and transmit, which cuts the average current.
@quiz
? ESP32 GPIO logic level is
- 1.8 V
+ 3.3 V
- 5 V
- 12 V
! Do not feed 5 V directly.
? Which bus uses SDA and SCL?
- UART
- SPI
+ I2C
- 1-Wire
! Two-wire addressable bus.
? The Raspberry Pi 4 is best described as
- an 8-bit MCU
+ a small Linux single-board computer
- a sensor
- a router
! It runs a full OS.
? In Arduino, code that runs once is placed in
+ setup()
- loop()
- main only
- delay()
! Initialisation goes in setup().
? A 2000 mAh battery at constant 20 mA lasts
- 10 hours
+ 100 hours
- 400 hours
- 20 hours
! 2000 / 20 = 100.

@visual
compare | Arduino, ESP32 and Raspberry Pi | Arduino Uno=A microcontroller board, no operating system~Very low power, real-time~No built-in Wi-Fi; ESP32=A microcontroller with Wi-Fi and Bluetooth~Low cost and low power~Good for IoT nodes; Raspberry Pi=A small computer running Linux~Runs Python, databases and servers~Needs more power

@problems
## Moderate
P: Differentiate a microcontroller board such as Arduino from a single-board computer such as Raspberry Pi.
A: A microcontroller board runs one program directly on the chip with no operating system, uses very little power and gives precise real-time control of pins. A single-board computer runs a full operating system (Linux), supports many programs, networking, storage and a display, but uses more power and is not hard real-time.
R: 2 | Microcontroller properties
R: 2 | Single-board computer properties
## High
P: Which board would you choose for (a) a battery-powered soil moisture node, (b) a home gateway that stores data and serves a web page, (c) a Wi-Fi door sensor? Explain.
A: (a) Arduino or ESP32 in deep sleep: lowest power for a simple task. (b) Raspberry Pi: runs Linux, a database and a web server. (c) ESP32: built-in Wi-Fi at low cost and power.
R: 2 | Correct board for (a) and (c)
R: 2 | Raspberry Pi for the gateway
R: 1 | Reasons given
## Advanced
P: Write an Arduino sketch outline that blinks an LED on pin 13 every second and reads an analog sensor on A0 to print the voltage. Explain setup and loop.
A: void setup() { pinMode(13, OUTPUT); Serial.begin(9600); }
void loop() { digitalWrite(13, HIGH); delay(500); digitalWrite(13, LOW); delay(500); int v = analogRead(A0); Serial.println(v * 5.0 / 1023.0); }
setup() runs once at start to configure pins and serial; loop() runs repeatedly forever. analogRead returns 0 to 1023 which is scaled to 0 to 5 V.
R: 2 | Blink with pinMode, digitalWrite and delay
R: 2 | analogRead and scaling to volts
R: 1 | Setup versus loop
