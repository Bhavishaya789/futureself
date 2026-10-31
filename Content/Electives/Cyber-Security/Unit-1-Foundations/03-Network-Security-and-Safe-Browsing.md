# Network security and safe browsing
minutes: 25
yt: network security firewall vpn https explained
@study
- **Firewall:** filters traffic by rules (IP, port, protocol); next-generation firewalls inspect applications. **IDS/IPS:** detect (and block) suspicious traffic. **Segmentation / VLANs** limit spread.
- **HTTPS = HTTP over TLS:** encrypts traffic, authenticates the server through a **certificate**, and protects integrity. Check the padlock *and* the domain name.
- **VPN:** an encrypted tunnel; hides traffic from the local network but you must trust the VPN provider.
- **Wi-Fi:** use WPA2/WPA3 with a strong passphrase; avoid open public Wi-Fi for logins.
- **Common attacks to defend against:** DoS/DDoS (flooding a service), man-in-the-middle, DNS spoofing, ARP spoofing, and rogue access points.
- **Safe habits:** update the OS and apps (patches close known holes), use a standard (non-admin) account, check the sender, avoid cracked software and unknown USB drives.
- **Basic hygiene checklist:** automatic updates, MFA, backups (3-2-1: three copies, two media, one off-site), screen lock.
## Hindi saransh
Firewall traffic roakta hai, HTTPS data ko encrypt karta hai, VPN suraksha-tunnel deta hai. Patch lagao, MFA chalu rakho, 3-2-1 backup banao. Public Wi-Fi par login se bacho.
> The 3-2-1 backup rule: 3 copies, on 2 different media, with 1 stored off-site.
@qa
Q: What does HTTPS add to HTTP?
A: TLS encryption, server authentication through certificates and integrity protection.
Q: What is a DDoS attack?
A: Many machines flood a service with traffic so legitimate users cannot reach it.
Q: What is the 3-2-1 backup rule?
A: Keep 3 copies, on 2 types of media, with 1 copy off-site.
Q: Why install updates quickly?
A: Patches fix known vulnerabilities that attackers actively exploit.
@quiz
? A firewall mainly
+ filters traffic by rules
- stores passwords
- cools servers
- compresses files
! Allow or deny by policy.
? HTTPS protects traffic using
- FTP
+ TLS
- SMTP
- ICMP
! Transport Layer Security.
? The 3-2-1 backup rule has how many off-site copies?
- 3
- 2
+ 1
- 0
! One off-site.
? An open public Wi-Fi is risky because
+ traffic may be observed or altered
- it is slow
- it uses IPv6
- it blocks HTTPS
! Prefer HTTPS and a VPN.
@visual
layers | Secure web request | Browser; TLS encryption; Firewall; Web application firewall; Application server; Database
@problems
## Moderate
P: State the 3-2-1 backup rule.
A: Three copies, two different media, one off-site.
R: 1 | Numbers
R: 1 | Meaning
## High
P: Explain how HTTPS protects a login form.
A: TLS encrypts the traffic so eavesdroppers cannot read the password, the certificate proves the server's identity, and integrity checks stop tampering.
R: 2 | Encryption and identity
R: 1 | Integrity
## Advanced
P: Write a Wi-Fi security checklist for a home network.
A: WPA3 or WPA2 with a long passphrase, change router admin password, update firmware, disable WPS, use a guest network for visitors and IoT devices.
R: 3 | Items
R: 1 | Reasons
