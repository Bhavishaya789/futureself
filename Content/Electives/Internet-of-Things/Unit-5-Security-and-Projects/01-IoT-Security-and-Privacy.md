# IoT security and privacy
minutes: 35
yt: iot security threats mirai botnet best practices
yt: TLS certificates secure boot IoT devices
@study
IoT devices are attractive targets: they are numerous, often cheap, rarely updated and sit inside homes and factories.

## Security goals (CIA + more)
**Confidentiality**, **Integrity**, **Availability**, plus authentication, authorisation, non-repudiation and privacy.

## Threats by layer
- **Device:** physical tampering, stolen flash dumps with secrets, debug ports (UART/JTAG) left open, default passwords.
- **Network:** eavesdropping, man-in-the-middle, replay, spoofing, jamming, **DoS/DDoS**.
- **Cloud/app:** weak APIs, injection, broken authentication, misconfigured storage.
- **Supply chain:** malicious firmware or components.
**Mirai botnet (2016)** infected cameras and routers using default credentials and launched record DDoS attacks.

## Defences
1. **Strong unique credentials**; no hard-coded or default passwords.
2. **Encryption in transit:** TLS for MQTT (port 8883) and HTTPS; DTLS for CoAP; WPA2/WPA3 on Wi-Fi.
3. **Authentication:** per-device **X.509 certificates** or keys; mutual TLS.
4. **Secure boot** and **signed firmware** with secure OTA updates.
5. **Least privilege:** device may publish only to its own topics (broker ACLs).
6. **Hardware security:** secure element/TPM, encrypted flash, disable debug ports.
7. **Network segmentation:** place IoT devices on a separate VLAN/guest network.
8. **Monitoring and logging**, anomaly detection, regular patching.
9. **Privacy by design:** collect minimum data, anonymise, give users control.

## Cryptography on small devices
Symmetric AES (fast, hardware-accelerated on ESP32), hashing SHA-256, public-key ECC (smaller keys than RSA for the same strength: 256-bit ECC ≈ 3072-bit RSA). Lightweight ciphers exist for the tiniest nodes. Random numbers must come from a proper hardware RNG.

## Example: authenticating a message with HMAC
```python
import hmac, hashlib
key = b"device-secret-key"
msg = b'{"id":"n1","t":28.4}'
tag = hmac.new(key, msg, hashlib.sha256).hexdigest()
ok = hmac.compare_digest(tag, hmac.new(key, msg, hashlib.sha256).hexdigest())
tampered = hmac.compare_digest(tag, hmac.new(key, b'{"id":"n1","t":99}', hashlib.sha256).hexdigest())
print(len(tag), ok, tampered)
```
Output:
```
64 True False
```
Any change to the message changes the tag, so tampering is detected (integrity and authenticity).

## Privacy and law
Smart devices collect sensitive data (location, voice, health). India's **Digital Personal Data Protection Act, 2023** requires consent and purpose limitation. Regulations and standards: IEC 62443 (industrial), ETSI EN 303 645 (consumer IoT), OWASP IoT Top 10.

## Practical checklist for student projects
Change default passwords, never commit secrets to GitHub, use TLS, keep firmware updated, limit open ports.

> Security is a process: secure the device, the network, the cloud and the people.
@qa
Q: What made the Mirai botnet possible?
A: Many IoT devices such as cameras and routers used default or hard-coded passwords and were exposed to the internet, allowing mass infection and DDoS attacks.
Q: Why use TLS with MQTT?
A: It encrypts traffic and authenticates the broker (and optionally the client), preventing eavesdropping and man-in-the-middle attacks.
Q: What is secure boot?
A: A mechanism where the device verifies the digital signature of the firmware at start-up and refuses to run unsigned or modified code.
Q: What is the purpose of broker ACLs?
A: They restrict which topics each client may publish or subscribe to, applying least privilege.
Q: What does an HMAC provide?
A: Integrity and authenticity of a message: a tag computed with a shared secret key that changes if the message is altered.
@quiz
? A major IoT weakness exploited by Mirai
+ default credentials
- strong encryption
- secure boot
- TLS
! Weak default logins allowed mass takeover.
? MQTT over TLS typically uses port
- 1883
+ 8883
- 80
- 22
! 8883 is the secure port.
? Signed firmware helps ensure
- faster Wi-Fi
+ only trusted code runs
- lower power
- more memory
! The device checks the signature.
? Which gives similar strength with smaller keys?
- RSA
+ ECC
- DES
- ROT13
! A 256-bit ECC key ≈ 3072-bit RSA.
? Network segmentation means
- merging all devices
+ keeping IoT devices on a separate network
- removing passwords
- disabling updates
! It limits the damage if a device is compromised.

@visual
steps | Basic steps to secure an IoT device | Change default passwords and use unique credentials; Encrypt data with TLS; Sign and update firmware regularly; Give each device the least privilege it needs; Monitor devices and turn off unused services

@problems
## Moderate
P: List four common security threats to IoT devices and one defence for each.
A: Default or weak passwords (use unique strong credentials). Unencrypted communication (use TLS). Outdated firmware with known bugs (regular signed updates). Physical tampering (secure boot and tamper detection). Also valid: botnets such as Mirai (network segmentation) and denial of service.
R: 2 | Four threats
R: 2 | Defence for each
## High
P: What was the Mirai botnet and what does it show about IoT security?
A: Mirai (2016) was malware that scanned the internet for IoT devices such as cameras and routers using default passwords, took them over and used them for large denial-of-service attacks. It shows that unmanaged devices with default credentials can be abused at scale, so every device needs unique passwords, updates and network protection.
R: 2 | What Mirai did
R: 3 | Lesson on default passwords and updates
## Advanced
P: Explain secure boot, over-the-air (OTA) updates and device authentication using certificates. Name two privacy principles for IoT data.
A: Secure boot checks a digital signature of the firmware at start-up so only trusted code runs. OTA updates deliver fixes remotely and should be signed and verified. Certificates give each device a unique identity (mutual TLS) so the cloud and device authenticate each other.
Privacy: data minimisation (collect only what you need) and consent with transparency (tell users what is collected and why); also encryption and retention limits.
R: 3 | Secure boot, signed OTA and certificates
R: 2 | Two privacy principles
