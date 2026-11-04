# Electromagnetic induction and alternating current
minutes: 55
yt: class 12 physics electromagnetic induction and ac
@study
Faraday law: induced emf = -N d(phi)/dt; motional emf = B l v; self-inductance L gives emf = -L dI/dt and energy (1/2) L I^2. In an AC circuit with series L, C and R the impedance is Z = sqrt(R^2 + (X_L - X_C)^2), X_L = omega L, X_C = 1/(omega C); resonance at omega = 1/sqrt(LC); average power P = V_rms I_rms cos phi; transformer Vs/Vp = Ns/Np.
## Deep dive: induction laws
Magnetic flux phi = B A cos theta (unit weber). Faraday laws: an emf is induced whenever the flux through a circuit changes; its magnitude is e = -N d(phi)/dt. Lenz law gives the minus sign: the induced current opposes the change in flux (conservation of energy). Motional emf in a rod of length l moving with speed v perpendicular to B is e = B l v; a rod rotating about one end with angular speed omega gives e = (1/2) B omega l^2. Eddy currents are induced in bulk conductors and cause heating (used in induction furnaces and electromagnetic braking, reduced by laminating cores). Charge flowing in a coil q = N Dphi/R, independent of time.
## Deep dive: inductance
Self-inductance L is defined by phi = L I; induced emf = -L dI/dt; energy stored U = (1/2) L I^2; for a long solenoid L = mu0 n^2 A l. Mutual inductance M gives emf in coil 2 = -M dI1/dt, with M = mu0 N1 N2 A/l for two coaxial solenoids. Time constant of an LR circuit is L/R; the current grows as I = I0 (1 - e^(-t R/L)). Inductors in series add; in parallel combine like resistors if there is no mutual coupling.
## Deep dive: alternating current
An AC source V = V0 sin omega t has rms values V_rms = V0/sqrt 2 = 0.707 V0 and average value over a half cycle 0.637 V0. Reactances: X_L = omega L (current lags voltage by 90 degrees), X_C = 1/(omega C) (current leads by 90 degrees). Series LCR: Z = sqrt (R^2 + (X_L - X_C)^2), tan phi = (X_L - X_C)/R, I_rms = V_rms/Z. Resonance at omega_0 = 1/sqrt (LC) where Z = R is minimum and current maximum; quality factor Q = omega_0 L/R = (1/R) sqrt (L/C). Average power P = V_rms I_rms cos phi, where cos phi = R/Z is the power factor (zero for a pure L or C: wattless current). A transformer works by mutual induction: Vs/Vp = Ns/Np = Ip/Is for an ideal one; step-up if Ns > Np. Losses: copper, iron (eddy and hysteresis), flux leakage, humming.
## Hindi saransh
emf = -N dphi/dt. Z = sqrt(R^2 + (XL - XC)^2). Resonance f = 1/(2 pi sqrt(LC)).
> Lenz law: induced current opposes the change that causes it.
@formulas
## Induction
Magnetic flux | phi = B A cos theta | 
Faraday law | e = -N d(phi)/dt | 
Motional emf | e = B l v | 
Rotating rod | e = (1/2) B omega l^2 | 
Charge in a coil | q = N Dphi / R | 
## Inductance
Self-inductance | phi = L I | 
Induced emf | e = -L dI/dt | 
Energy stored | U = (1/2) L I^2 | 
Solenoid | L = mu0 n^2 A l | 
Mutual inductance | M = mu0 N1 N2 A / l | 
LR time constant | tau = L/R | 
## Alternating current
RMS value | V_rms = V0/sqrt 2 | 
Inductive reactance | X_L = omega L | 
Capacitive reactance | X_C = 1/(omega C) | 
Impedance | Z = sqrt (R^2 + (X_L - X_C)^2) | 
Phase angle | tan phi = (X_L - X_C)/R | 
Resonant frequency | f_0 = 1/(2 pi sqrt (LC)) | 
Quality factor | Q = omega_0 L / R | 
Average power | P = V_rms I_rms cos phi | 
Power factor | cos phi = R/Z | 
Transformer | Vs/Vp = Ns/Np = Ip/Is | ideal

@qa
Q: State Faraday's law of induction.
A: The induced emf equals the negative rate of change of magnetic flux linked with the circuit.
Q: State Lenz's law.
A: The induced current flows so as to oppose the change in flux that produces it.
Q: What is the SI unit of magnetic flux?
A: Weber.
Q: What is motional emf?
A: The emf induced in a conductor moving across a magnetic field, e = B l v.
Q: What are eddy currents?
A: Circulating currents induced in a bulk conductor by changing flux.
Q: How are eddy currents reduced?
A: By laminating the core.
Q: What is self-inductance?
A: The property of a coil by which it opposes a change in its own current.
Q: What is the SI unit of inductance?
A: Henry.
Q: What is the energy stored in an inductor?
A: (1/2) L I^2.
Q: What is mutual inductance?
A: The emf induced in one coil due to a changing current in a neighbouring coil.
Q: What is the rms value of an alternating current?
A: I0/sqrt 2.
Q: Does a pure inductor consume power?
A: No, the average power is zero.
Q: What is the phase difference between voltage and current in a pure inductor?
A: Current lags voltage by 90 degrees.
Q: What is the phase difference in a pure capacitor?
A: Current leads voltage by 90 degrees.
Q: What is resonance in an LCR circuit?
A: The condition X_L = X_C at which the impedance is minimum and the current is maximum.
Q: What is the resonant frequency?
A: 1/(2 pi sqrt (LC)).
Q: What is the power factor?
A: cos phi = R/Z.
Q: What is wattless current?
A: Current in a circuit with zero power factor, so no average power is consumed.
Q: What is a transformer?
A: A device that changes AC voltage using mutual induction.
Q: What is a step-up transformer?
A: A transformer with more secondary turns than primary turns.
Q: What are the losses in a transformer?
A: Copper loss, iron loss, flux leakage and humming.
Q: What is the quality factor?
A: A measure of the sharpness of resonance, omega_0 L/R.
Q: What is an AC generator?
A: A device that converts mechanical energy into alternating current using induction.
Q: Why is AC preferred for power transmission?
A: Its voltage can be changed easily by transformers, reducing losses.
Q: A coil of 100 turns sees a flux change of 0.01 Wb in 0.1 s. Induced emf
A: 10 V.
Q: A coil of 50 turns sees a flux change of 0.04 Wb in 0.2 s. Induced emf
A: 10 V.
Q: A coil of 200 turns sees a flux change of 0.005 Wb in 0.05 s. Induced emf
A: 20 V.
Q: A coil of 10 turns sees a flux change of 0.5 Wb in 0.25 s. Induced emf
A: 20 V.
Q: A coil of 500 turns sees a flux change of 0.002 Wb in 0.01 s. Induced emf
A: 100 V.
Q: A coil of 1 turns sees a flux change of 0.3 Wb in 0.1 s. Induced emf
A: 3 V.
Q: A coil of 25 turns sees a flux change of 0.08 Wb in 0.4 s. Induced emf
A: 5 V.
Q: A coil of 1000 turns sees a flux change of 0.001 Wb in 0.5 s. Induced emf
A: 2 V.
Q: Motional emf in a rod 0.4 m long moving at 10 m/s across B = 0.5 T
A: 2 V.
Q: Motional emf in a rod 1 m long moving at 5 m/s across B = 0.2 T
A: 1 V.
Q: Motional emf in a rod 0.1 m long moving at 20 m/s across B = 1 T
A: 2 V.
Q: Motional emf in a rod 2 m long moving at 3 m/s across B = 0.1 T
A: 0.6 V.
Q: Motional emf in a rod 0.5 m long moving at 8 m/s across B = 0.3 T
A: 1.2 V.
Q: Motional emf in a rod 0.25 m long moving at 4 m/s across B = 2 T
A: 2 V.
Q: emf in a rod of length 0.4 m rotating at 10 rad/s about one end in B = 0.5 T
A: 0.4 V.
Q: emf in a rod of length 0.5 m rotating at 20 rad/s about one end in B = 0.2 T
A: 0.5 V.
Q: emf in a rod of length 1 m rotating at 5 rad/s about one end in B = 1 T
A: 2.5 V.
Q: emf in a rod of length 0.2 m rotating at 100 rad/s about one end in B = 0.1 T
A: 0.2 V.
Q: A 0.5 H inductor sees a current change of 2 A in 0.1 s. Induced emf
A: 10 V.
Q: A 2 H inductor sees a current change of 5 A in 0.5 s. Induced emf
A: 20 V.
Q: A 0.1 H inductor sees a current change of 10 A in 0.01 s. Induced emf
A: 100 V.
Q: A 1 H inductor sees a current change of 1 A in 0.2 s. Induced emf
A: 5 V.
Q: A 4 H inductor sees a current change of 0.5 A in 0.05 s. Induced emf
A: 40 V.
Q: A 0.25 H inductor sees a current change of 8 A in 0.4 s. Induced emf
A: 5 V.
Q: Energy stored in a 0.5 H inductor carrying 2 A
A: 1 J.
Q: Energy stored in a 2 H inductor carrying 3 A
A: 9 J.
Q: Energy stored in a 0.1 H inductor carrying 10 A
A: 5 J.
Q: Energy stored in a 4 H inductor carrying 0.5 A
A: 0.5 J.
Q: Energy stored in a 1 H inductor carrying 5 A
A: 12.5 J.
Q: Energy stored in a 0.2 H inductor carrying 4 A
A: 1.6 J.
Q: Inductive reactance of a 0.1 H inductor at 50 Hz
A: 31.4 ohm.
Q: Inductive reactance of a 0.2 H inductor at 50 Hz
A: 62.8 ohm.
Q: Inductive reactance of a 0.5 H inductor at 50 Hz
A: 157.1 ohm.
Q: Inductive reactance of a 1 H inductor at 50 Hz
A: 314.2 ohm.
Q: Inductive reactance of a 0.05 H inductor at 50 Hz
A: 15.7 ohm.
Q: Capacitive reactance of a 1 microfarad capacitor at 50 Hz
A: 318.3 ohm.
Q: Capacitive reactance of a 2 microfarad capacitor at 50 Hz
A: 159.2 ohm.
Q: Capacitive reactance of a 5 microfarad capacitor at 50 Hz
A: 63.7 ohm.
Q: A series LCR circuit has R = 30 ohm, XL = 60 ohm and XC = 20 ohm. Impedance
A: 50 ohm.
Q: With R = 30 ohm, XL = 60 ohm and XC = 20 ohm the power factor is
A: 0.6.
Q: A series LCR circuit has R = 40 ohm, XL = 50 ohm and XC = 20 ohm. Impedance
A: 50 ohm.
Q: With R = 40 ohm, XL = 50 ohm and XC = 20 ohm the power factor is
A: 0.8.
Q: A series LCR circuit has R = 3 ohm, XL = 8 ohm and XC = 4 ohm. Impedance
A: 5 ohm.
Q: With R = 3 ohm, XL = 8 ohm and XC = 4 ohm the power factor is
A: 0.6.
Q: A series LCR circuit has R = 6 ohm, XL = 16 ohm and XC = 8 ohm. Impedance
A: 10 ohm.
Q: With R = 6 ohm, XL = 16 ohm and XC = 8 ohm the power factor is
A: 0.6.
Q: A series LCR circuit has R = 12 ohm, XL = 30 ohm and XC = 25 ohm. Impedance
A: 13 ohm.
Q: With R = 12 ohm, XL = 30 ohm and XC = 25 ohm the power factor is
A: 0.923.
Q: A series LCR circuit has R = 8 ohm, XL = 20 ohm and XC = 14 ohm. Impedance
A: 10 ohm.
Q: With R = 8 ohm, XL = 20 ohm and XC = 14 ohm the power factor is
A: 0.8.
Q: A series LCR circuit has R = 10 ohm, XL = 40 ohm and XC = 16 ohm. Impedance
A: 26 ohm.
Q: With R = 10 ohm, XL = 40 ohm and XC = 16 ohm the power factor is
A: 0.385.
Q: A series LCR circuit has R = 15 ohm, XL = 45 ohm and XC = 21 ohm. Impedance
A: 28.3 ohm.
Q: With R = 15 ohm, XL = 45 ohm and XC = 21 ohm the power factor is
A: 0.53.
Q: Resonant frequency of L = 1 H and C = 1 microfarad
A: 159.2 Hz.
Q: Resonant frequency of L = 0.1 H and C = 1 microfarad
A: 503.3 Hz.
Q: Resonant frequency of L = 0.5 H and C = 2 microfarad
A: 159.2 Hz.
Q: Resonant frequency of L = 2 H and C = 0.5 microfarad
A: 159.2 Hz.
Q: Resonant frequency of L = 0.01 H and C = 10 microfarad
A: 503.3 Hz.
Q: Resonant frequency of L = 0.25 H and C = 4 microfarad
A: 159.2 Hz.
Q: The rms value of an AC voltage of peak 10 V
A: 7.07 V.
Q: The rms value of an AC voltage of peak 50 V
A: 35.36 V.
Q: The rms value of an AC voltage of peak 100 V
A: 70.71 V.
Q: The rms value of an AC voltage of peak 220 V
A: 155.56 V.
Q: The rms value of an AC voltage of peak 311 V
A: 219.91 V.
Q: The rms value of an AC voltage of peak 325 V
A: 229.81 V.
Q: The rms value of an AC voltage of peak 400 V
A: 282.84 V.
Q: The rms value of an AC voltage of peak 141 V
A: 99.7 V.
Q: A transformer has 100 primary and 200 secondary turns with 110 V primary voltage. Secondary voltage
A: 220 V.
Q: A transformer has 500 primary and 50 secondary turns with 220 V primary voltage. Secondary voltage
A: 22 V.
Q: A transformer has 100 primary and 1000 secondary turns with 12 V primary voltage. Secondary voltage
A: 120 V.
Q: A transformer has 2000 primary and 100 secondary turns with 220 V primary voltage. Secondary voltage
A: 11 V.
Q: A transformer has 50 primary and 500 secondary turns with 24 V primary voltage. Secondary voltage
A: 240 V.
Q: A transformer has 400 primary and 40 secondary turns with 230 V primary voltage. Secondary voltage
A: 23 V.
Q: Average power with V_rms = 220 V, I_rms = 5 A and power factor 1
A: 1100 W.
Q: Average power with V_rms = 220 V, I_rms = 2 A and power factor 0.8
A: 352 W.
Q: Average power with V_rms = 110 V, I_rms = 10 A and power factor 0.5
A: 550 W.
Q: Average power with V_rms = 230 V, I_rms = 4 A and power factor 0.9
A: 828 W.
Q: Average power with V_rms = 240 V, I_rms = 3 A and power factor 0.6
A: 432 W.
Q: Average power with V_rms = 100 V, I_rms = 2 A and power factor 0.75
A: 150 W.
@quiz
? A coil of 100 turns sees a flux change of 0.01 Wb in 0.1 s. Induced emf
- 30 V
- 9 V
+ 10 V
- 20 V
! N DPhi/Dt.
? A coil of 50 turns sees a flux change of 0.04 Wb in 0.2 s. Induced emf
- 30 V
- 11 V
- 20 V
+ 10 V
! N DPhi/Dt.
? A coil of 200 turns sees a flux change of 0.005 Wb in 0.05 s. Induced emf
- 40 V
- 18 V
- 25 V
+ 20 V
! N DPhi/Dt.
? A coil of 10 turns sees a flux change of 0.5 Wb in 0.25 s. Induced emf
- 60 V
- 25 V
- 10 V
+ 20 V
! N DPhi/Dt.
? A coil of 500 turns sees a flux change of 0.002 Wb in 0.01 s. Induced emf
- 200 V
- 110 V
- 300 V
+ 100 V
! N DPhi/Dt.
? A coil of 1 turns sees a flux change of 0.3 Wb in 0.1 s. Induced emf
- 3.3 V
- 1.5 V
- 2.7 V
+ 3 V
! N DPhi/Dt.
? A coil of 25 turns sees a flux change of 0.08 Wb in 0.4 s. Induced emf
- 4 V
- 2.5 V
- 4.5 V
+ 5 V
! N DPhi/Dt.
? A coil of 1000 turns sees a flux change of 0.001 Wb in 0.5 s. Induced emf
- 1.8 V
- 6 V
- 2.2 V
+ 2 V
! N DPhi/Dt.
? Motional emf in a rod 0.4 m long moving at 10 m/s across B = 0.5 T
- 2.5 V
+ 2 V
- 2.2 V
- 4 V
! B l v.
? Motional emf in a rod 1 m long moving at 5 m/s across B = 0.2 T
- 3 V
- 0.8 V
+ 1 V
- 0.5 V
! B l v.
? Motional emf in a rod 0.1 m long moving at 20 m/s across B = 1 T
+ 2 V
- 6 V
- 2.2 V
- 4 V
! B l v.
? Motional emf in a rod 2 m long moving at 3 m/s across B = 0.1 T
- 0.48 V
+ 0.6 V
- 0.54 V
- 1.8 V
! B l v.
? Motional emf in a rod 0.5 m long moving at 8 m/s across B = 0.3 T
+ 1.2 V
- 1.5 V
- 1.08 V
- 3.6 V
! B l v.
? Motional emf in a rod 0.25 m long moving at 4 m/s across B = 2 T
- 2.2 V
+ 2 V
- 2.5 V
- 1 V
! B l v.
? emf in a rod of length 0.4 m rotating at 10 rad/s about one end in B = 0.5 T
- 0.5 V
- 0.32 V
+ 0.4 V
- 0.44 V
! (1/2) B omega l^2.
? emf in a rod of length 0.5 m rotating at 20 rad/s about one end in B = 0.2 T
- 0.625 V
- 0.4 V
- 1 V
+ 0.5 V
! (1/2) B omega l^2.
? emf in a rod of length 1 m rotating at 5 rad/s about one end in B = 1 T
- 2.75 V
- 5 V
- 2.25 V
+ 2.5 V
! (1/2) B omega l^2.
? emf in a rod of length 0.2 m rotating at 100 rad/s about one end in B = 0.1 T
- 0.4 V
- 0.22 V
- 0.1 V
+ 0.2 V
! (1/2) B omega l^2.
? A 0.5 H inductor sees a current change of 2 A in 0.1 s. Induced emf
- 30 V
+ 10 V
- 11 V
- 8 V
! L DI/Dt.
? A 2 H inductor sees a current change of 5 A in 0.5 s. Induced emf
- 25 V
+ 20 V
- 22 V
- 40 V
! L DI/Dt.
? A 0.1 H inductor sees a current change of 10 A in 0.01 s. Induced emf
- 300 V
- 80 V
+ 100 V
- 200 V
! L DI/Dt.
? A 1 H inductor sees a current change of 1 A in 0.2 s. Induced emf
- 5.5 V
- 4 V
+ 5 V
- 4.5 V
! L DI/Dt.
? A 4 H inductor sees a current change of 0.5 A in 0.05 s. Induced emf
- 36 V
+ 40 V
- 120 V
- 50 V
! L DI/Dt.
? A 0.25 H inductor sees a current change of 8 A in 0.4 s. Induced emf
- 4.5 V
+ 5 V
- 2.5 V
- 4 V
! L DI/Dt.
? Energy stored in a 0.5 H inductor carrying 2 A
- 0.5 J
+ 1 J
- 2 J
- 1.1 J
! (1/2) L I^2.
? Energy stored in a 2 H inductor carrying 3 A
- 11.25 J
+ 9 J
- 4.5 J
- 7.2 J
! (1/2) L I^2.
? Energy stored in a 0.1 H inductor carrying 10 A
- 4 J
- 15 J
- 4.5 J
+ 5 J
! (1/2) L I^2.
? Energy stored in a 4 H inductor carrying 0.5 A
- 0.4 J
+ 0.5 J
- 0.25 J
- 1 J
! (1/2) L I^2.
? Energy stored in a 1 H inductor carrying 5 A
- 25 J
+ 12.5 J
- 15.625 J
- 11.25 J
! (1/2) L I^2.
? Energy stored in a 0.2 H inductor carrying 4 A
- 1.28 J
- 1.44 J
+ 1.6 J
- 3.2 J
! (1/2) L I^2.
? Inductive reactance of a 0.1 H inductor at 50 Hz
- 39.3 ohm
- 34.6 ohm
- 25.1 ohm
+ 31.4 ohm
! 2 pi f L.
? Inductive reactance of a 0.2 H inductor at 50 Hz
- 188.5 ohm
+ 62.8 ohm
- 78.5 ohm
- 50.3 ohm
! 2 pi f L.
? Inductive reactance of a 0.5 H inductor at 50 Hz
- 141.4 ohm
+ 157.1 ohm
- 471.2 ohm
- 314.2 ohm
! 2 pi f L.
? Inductive reactance of a 1 H inductor at 50 Hz
- 282.7 ohm
+ 314.2 ohm
- 392.7 ohm
- 251.3 ohm
! 2 pi f L.
? Inductive reactance of a 0.05 H inductor at 50 Hz
- 14.1 ohm
- 31.4 ohm
- 17.3 ohm
+ 15.7 ohm
! 2 pi f L.
? Capacitive reactance of a 1 microfarad capacitor at 50 Hz
- 397.9 ohm
+ 318.3 ohm
- 286.5 ohm
- 954.9 ohm
! 1/(2 pi f C).
? Capacitive reactance of a 2 microfarad capacitor at 50 Hz
+ 159.2 ohm
- 477.5 ohm
- 198.9 ohm
- 127.3 ohm
! 1/(2 pi f C).
? Capacitive reactance of a 5 microfarad capacitor at 50 Hz
- 50.9 ohm
- 31.8 ohm
+ 63.7 ohm
- 57.3 ohm
! 1/(2 pi f C).
? A series LCR circuit has R = 30 ohm, XL = 60 ohm and XC = 20 ohm. Impedance
+ 50 ohm
- 150 ohm
- 100 ohm
- 40 ohm
! sqrt (R^2 + (XL - XC)^2).
? With R = 30 ohm, XL = 60 ohm and XC = 20 ohm the power factor is
- 0.66
- 1.2
- 0.75
+ 0.6
! R/Z.
? A series LCR circuit has R = 40 ohm, XL = 50 ohm and XC = 20 ohm. Impedance
- 55 ohm
- 40 ohm
- 100 ohm
+ 50 ohm
! sqrt (R^2 + (XL - XC)^2).
? With R = 40 ohm, XL = 50 ohm and XC = 20 ohm the power factor is
- 1
- 0.64
+ 0.8
- 0.72
! R/Z.
? A series LCR circuit has R = 3 ohm, XL = 8 ohm and XC = 4 ohm. Impedance
- 2.5 ohm
+ 5 ohm
- 10 ohm
- 15 ohm
! sqrt (R^2 + (XL - XC)^2).
? With R = 3 ohm, XL = 8 ohm and XC = 4 ohm the power factor is
- 0.66
- 0.3
+ 0.6
- 0.54
! R/Z.
? A series LCR circuit has R = 6 ohm, XL = 16 ohm and XC = 8 ohm. Impedance
- 30 ohm
+ 10 ohm
- 20 ohm
- 9 ohm
! sqrt (R^2 + (XL - XC)^2).
? With R = 6 ohm, XL = 16 ohm and XC = 8 ohm the power factor is
- 1.8
- 0.54
- 0.48
+ 0.6
! R/Z.
? A series LCR circuit has R = 12 ohm, XL = 30 ohm and XC = 25 ohm. Impedance
- 14.3 ohm
- 6.5 ohm
- 16.25 ohm
+ 13 ohm
! sqrt (R^2 + (XL - XC)^2).
? With R = 12 ohm, XL = 30 ohm and XC = 25 ohm the power factor is
- 0.831
+ 0.923
- 0.462
- 1.015
! R/Z.
? A series LCR circuit has R = 8 ohm, XL = 20 ohm and XC = 14 ohm. Impedance
- 9 ohm
+ 10 ohm
- 30 ohm
- 20 ohm
! sqrt (R^2 + (XL - XC)^2).
? With R = 8 ohm, XL = 20 ohm and XC = 14 ohm the power factor is
- 2.4
+ 0.8
- 1
- 0.88
! R/Z.
? A series LCR circuit has R = 10 ohm, XL = 40 ohm and XC = 16 ohm. Impedance
- 20.8 ohm
- 13 ohm
+ 26 ohm
- 52 ohm
! sqrt (R^2 + (XL - XC)^2).
? With R = 10 ohm, XL = 40 ohm and XC = 16 ohm the power factor is
- 0.769
- 1.154
+ 0.385
- 0.423
! R/Z.
? A series LCR circuit has R = 15 ohm, XL = 45 ohm and XC = 21 ohm. Impedance
+ 28.3 ohm
- 31.13 ohm
- 22.64 ohm
- 56.6 ohm
! sqrt (R^2 + (XL - XC)^2).
? With R = 15 ohm, XL = 45 ohm and XC = 21 ohm the power factor is
- 0.424
+ 0.53
- 0.662
- 0.477
! R/Z.
? Resonant frequency of L = 1 H and C = 1 microfarad
- 175.1 Hz
+ 159.2 Hz
- 127.3 Hz
- 477.5 Hz
! 1/(2 pi sqrt (LC)).
? Resonant frequency of L = 0.1 H and C = 1 microfarad
- 1509.9 Hz
+ 503.3 Hz
- 553.6 Hz
- 453 Hz
! 1/(2 pi sqrt (LC)).
? Resonant frequency of L = 0.5 H and C = 2 microfarad
- 79.6 Hz
- 477.5 Hz
+ 159.2 Hz
- 127.3 Hz
! 1/(2 pi sqrt (LC)).
? Resonant frequency of L = 2 H and C = 0.5 microfarad
+ 159.2 Hz
- 477.5 Hz
- 127.3 Hz
- 143.2 Hz
! 1/(2 pi sqrt (LC)).
? Resonant frequency of L = 0.01 H and C = 10 microfarad
- 1509.9 Hz
+ 503.3 Hz
- 629.1 Hz
- 553.6 Hz
! 1/(2 pi sqrt (LC)).
? Resonant frequency of L = 0.25 H and C = 4 microfarad
- 127.3 Hz
+ 159.2 Hz
- 143.2 Hz
- 79.6 Hz
! 1/(2 pi sqrt (LC)).
? The rms value of an AC voltage of peak 10 V
- 21.21 V
- 5.66 V
- 3.54 V
+ 7.07 V
! V0/sqrt 2.
? The rms value of an AC voltage of peak 50 V
- 28.28 V
- 17.68 V
- 31.82 V
+ 35.36 V
! V0/sqrt 2.
? The rms value of an AC voltage of peak 100 V
- 35.36 V
+ 70.71 V
- 63.64 V
- 212.13 V
! V0/sqrt 2.
? The rms value of an AC voltage of peak 220 V
- 140.01 V
+ 155.56 V
- 124.45 V
- 194.45 V
! V0/sqrt 2.
? The rms value of an AC voltage of peak 311 V
- 175.93 V
- 197.92 V
- 439.82 V
+ 219.91 V
! V0/sqrt 2.
? The rms value of an AC voltage of peak 325 V
- 287.26 V
+ 229.81 V
- 689.43 V
- 252.79 V
! V0/sqrt 2.
? The rms value of an AC voltage of peak 400 V
- 141.42 V
- 353.55 V
- 565.69 V
+ 282.84 V
! V0/sqrt 2.
? The rms value of an AC voltage of peak 141 V
- 299.11 V
- 199.4 V
+ 99.7 V
- 79.76 V
! V0/sqrt 2.
? A transformer has 100 primary and 200 secondary turns with 110 V primary voltage. Secondary voltage
- 440 V
- 110 V
+ 220 V
- 660 V
! Vp Ns/Np.
? A transformer has 500 primary and 50 secondary turns with 220 V primary voltage. Secondary voltage
- 44 V
- 19.8 V
+ 22 V
- 11 V
! Vp Ns/Np.
? A transformer has 100 primary and 1000 secondary turns with 12 V primary voltage. Secondary voltage
+ 120 V
- 132 V
- 150 V
- 108 V
! Vp Ns/Np.
? A transformer has 2000 primary and 100 secondary turns with 220 V primary voltage. Secondary voltage
- 12.1 V
- 13.75 V
- 8.8 V
+ 11 V
! Vp Ns/Np.
? A transformer has 50 primary and 500 secondary turns with 24 V primary voltage. Secondary voltage
+ 240 V
- 192 V
- 480 V
- 120 V
! Vp Ns/Np.
? A transformer has 400 primary and 40 secondary turns with 230 V primary voltage. Secondary voltage
+ 23 V
- 18.4 V
- 20.7 V
- 69 V
! Vp Ns/Np.
? Average power with V_rms = 220 V, I_rms = 5 A and power factor 1
- 1210 W
+ 1100 W
- 3300 W
- 1375 W
! V I cos phi.
? Average power with V_rms = 220 V, I_rms = 2 A and power factor 0.8
+ 352 W
- 281.6 W
- 387.2 W
- 1056 W
! V I cos phi.
? Average power with V_rms = 110 V, I_rms = 10 A and power factor 0.5
+ 550 W
- 605 W
- 1100 W
- 275 W
! V I cos phi.
? Average power with V_rms = 230 V, I_rms = 4 A and power factor 0.9
- 1656 W
+ 828 W
- 414 W
- 1035 W
! V I cos phi.
? Average power with V_rms = 240 V, I_rms = 3 A and power factor 0.6
+ 432 W
- 864 W
- 1296 W
- 345.6 W
! V I cos phi.
? Average power with V_rms = 100 V, I_rms = 2 A and power factor 0.75
- 300 W
- 187.5 W
- 75 W
+ 150 W
! V I cos phi.
? The negative sign in Faraday's law is due to
+ Lenz's law
- Ampere's law
- Gauss's law
- Ohm's law
! Opposition.
? At resonance in a series LCR circuit impedance is
- maximum
- zero always
+ minimum
- infinite
! Z = R.
? The power factor of a pure inductor is
- infinite
+ zero
- 0.5
- one
! phi = 90.
? A transformer works on
+ mutual induction
- Ohm's law
- static charge
- self induction
! Principle.
? Eddy currents can be reduced by
- using a thicker core
- using a solid core
+ laminating the core
- increasing the current
! Higher resistance.
? DC through a transformer gives
- maximum emf
- AC output
+ no secondary emf in steady state
- double voltage
! No change of flux.
? What is the SI unit of magnetic flux?
- cos phi = R/Z
+ Weber
- I0/sqrt 2
- Current lags voltage by 90 degrees
! Answer: Weber.
? What is motional emf?
+ The emf induced in a conductor moving across a magnetic field, e = B l v
- The property of a coil by which it opposes a change in its own current
- The emf induced in one coil due to a changing current in a neighbouring coil
- Current lags voltage by 90 degrees
! Answer: The emf induced in a conductor moving across a magnetic field, e = B l v.
? What is self-inductance?
+ The property of a coil by which it opposes a change in its own current
- Current in a circuit with zero power factor, so no average power is consumed
- A measure of the sharpness of resonance, omega_0 L/R
- The emf induced in one coil due to a changing current in a neighbouring coil
! Answer: The property of a coil by which it opposes a change in its own current.
? What is the SI unit of inductance?
- Weber
+ Henry
- cos phi = R/Z
- 1/(2 pi sqrt (LC))
! Answer: Henry.
? What is the energy stored in an inductor?
- Henry
- Current lags voltage by 90 degrees
- I0/sqrt 2
+ (1/2) L I^2
! Answer: (1/2) L I^2.
? What is mutual inductance?
- A transformer with more secondary turns than primary turns
- A device that changes AC voltage using mutual induction
- A measure of the sharpness of resonance, omega_0 L/R
+ The emf induced in one coil due to a changing current in a neighbouring coil
! Answer: The emf induced in one coil due to a changing current in a neighbouring coil.
? What is the rms value of an alternating current?
- Current leads voltage by 90 degrees
- Weber
+ I0/sqrt 2
- 1/(2 pi sqrt (LC))
! Answer: I0/sqrt 2.
? What is the phase difference between voltage and current in a pure inductor?
+ Current lags voltage by 90 degrees
- I0/sqrt 2
- Weber
- A device that changes AC voltage using mutual induction
! Answer: Current lags voltage by 90 degrees.
? What is the phase difference in a pure capacitor?
- (1/2) L I^2
- 1/(2 pi sqrt (LC))
+ Current leads voltage by 90 degrees
- A device that changes AC voltage using mutual induction
! Answer: Current leads voltage by 90 degrees.
? What is the resonant frequency?
- I0/sqrt 2
+ 1/(2 pi sqrt (LC))
- (1/2) L I^2
- Henry
! Answer: 1/(2 pi sqrt (LC)).
? What is the power factor?
+ cos phi = R/Z
- Henry
- Weber
- 1/(2 pi sqrt (LC))
! Answer: cos phi = R/Z.
? What is wattless current?
- The property of a coil by which it opposes a change in its own current
- A device that changes AC voltage using mutual induction
- A transformer with more secondary turns than primary turns
+ Current in a circuit with zero power factor, so no average power is consumed
! Answer: Current in a circuit with zero power factor, so no average power is consumed.
? What is a transformer?
- A transformer with more secondary turns than primary turns
+ A device that changes AC voltage using mutual induction
- Current leads voltage by 90 degrees
- The emf induced in a conductor moving across a magnetic field, e = B l v
! Answer: A device that changes AC voltage using mutual induction.
? What is a step-up transformer?
- Current in a circuit with zero power factor, so no average power is consumed
- A measure of the sharpness of resonance, omega_0 L/R
- The emf induced in one coil due to a changing current in a neighbouring coil
+ A transformer with more secondary turns than primary turns
! Answer: A transformer with more secondary turns than primary turns.
? What is the quality factor?
- A transformer with more secondary turns than primary turns
- The property of a coil by which it opposes a change in its own current
+ A measure of the sharpness of resonance, omega_0 L/R
- 1/(2 pi sqrt (LC))
! Answer: A measure of the sharpness of resonance, omega_0 L/R.
@visual
formula | Electromagnetic induction and alternating current | key formula
@problems
P: A coil of 100 turns sees flux change 0.01 Wb in 0.1 s. Find the emf.
A: 10 V.
R: 1 | N DPhi/Dt
R: 1 | 10 V
