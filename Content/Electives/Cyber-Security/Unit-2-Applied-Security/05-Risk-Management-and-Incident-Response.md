# Risk management and incident response
minutes: 25
yt: risk assessment incident response steps
@study
**Risk management:** identify assets, threats and vulnerabilities, then estimate and treat risk (**mitigate, transfer (insurance), avoid, accept**). Quantitative example: an asset is worth Rs 1,00,000 and one incident would damage **30%**, so **single loss expectancy SLE = Rs 30,000**; it happens **0.5 times a year** (ARO), so **annual loss expectancy ALE = SLE x ARO = Rs 15,000**. A control costing less than the ALE it removes is worth considering.
**Incident response (NIST-style):** **1) Preparation, 2) Detection and analysis, 3) Containment, eradication and recovery, 4) Post-incident review.** Keep logs, preserve evidence, communicate clearly and fix the root cause. **Digital forensics** records evidence carefully and keeps a **chain of custody**. **Security frameworks:** ISO/IEC 27001, NIST CSF, CIS Controls. **Zero trust:** never trust, always verify.
## Hindi saransh
Jokhim = sambhavna x asar. ALE = SLE x ARO; example mein 30,000 x 0.5 = Rs 15,000. Ghatna prabandhan: taiyari, pehchan, roktham aur sudhar, samiksha.
> Preserve evidence and logs first; do not wipe a compromised machine before you have copied what you need.
@qa
Q: What is ALE?
A: Annual loss expectancy = single loss expectancy x annual rate of occurrence.
Q: List the four risk treatment options.
A: Mitigate, transfer, avoid and accept.
Q: What are the phases of incident response?
A: Preparation; detection and analysis; containment, eradication and recovery; post-incident review.
Q: What is chain of custody?
A: A documented record of who handled evidence, when and how, to keep it valid.
@quiz
? SLE for an asset of Rs 1,00,000 with 30% damage is
- Rs 15,000
+ Rs 30,000
- Rs 50,000
- Rs 70,000
! 100000 x 0.3.
? ALE with SLE Rs 30,000 and ARO 0.5 is
- Rs 30,000
+ Rs 15,000
- Rs 60,000
- Rs 5,000
! 30000 x 0.5.
? Buying insurance is risk
- mitigation
+ transfer
- avoidance
- acceptance
! Moves financial impact to another party.
? Zero trust means
- trust the internal network
+ never trust, always verify
- no passwords
- no logs
! Verify every request.
@visual
steps | Incident response | Prepare; Detect and analyse; Contain; Eradicate and recover; Review and improve
@problems
## Moderate
P: Compute ALE for SLE Rs 30,000 and ARO 0.5.
A: 30,000 x 0.5 = Rs 15,000.
R: 1 | Formula
R: 1 | 15,000
## High
P: A control costs Rs 8,000 a year and removes the whole Rs 15,000 ALE. Is it worth it?
A: Yes: it saves Rs 15,000 - Rs 8,000 = Rs 7,000 a year.
R: 1 | Compare
R: 1 | Rs 7,000
## Advanced
P: Outline your response when a staff laptop shows ransomware.
A: Disconnect it from the network, preserve evidence, identify scope, notify the security team and authorities, restore from clean backups, remove the cause, reset credentials, and review lessons.
R: 3 | Containment steps
R: 1 | Recovery and review
