# Data Communication
minutes: 45
yt: class 12 computer science data communication bandwidth transmission media modes switching
@study
Data communication is the exchange of data between two devices through a transmission medium. Components: sender, receiver, message, transmission medium and protocol. Measures: bandwidth (range of frequencies, measured in Hz for analogue and bits per second for digital), data transfer rate (bps, Kbps, Mbps, Gbps), throughput (actual rate), latency and noise. Units: 1 byte = 8 bits; 1 KB = 1024 bytes. Transmission modes: simplex (one direction, such as a keyboard or radio), half duplex (both directions but one at a time, like a walkie-talkie) and full duplex (both simultaneously, like a telephone). Transmission media: guided (wired): twisted pair (UTP, STP; cheap, used in LANs), coaxial cable (used in cable TV, higher bandwidth), optical fibre (light signals; very high speed, no electromagnetic interference, expensive and secure); unguided (wireless): radio waves, microwaves (line of sight, satellite), infrared (short range, remote controls) and Bluetooth. Switching techniques: circuit switching (dedicated path set up before communication, as in telephone networks; constant delay) and packet switching (data divided into packets that travel independently and are reassembled; efficient use of the links, used by the Internet). Message switching stores and forwards the whole message. Each packet has a header with source and destination addresses, sequence number and error check data. Errors in transmission are detected by parity, checksum or CRC. Analogue signals vary continuously; digital signals are discrete 0 and 1. Multiplexing combines several signals over one link. Communication needs encoding, transmission and decoding. Wi-Fi uses radio waves in the 2.4 GHz and 5 GHz bands.
## Deep dive: Modes
Simplex is one way, half duplex alternates and full duplex is two way at once.
## Deep dive: Media
Twisted pair, coaxial and fibre are guided; radio, microwave and infrared are unguided. Fibre is fastest and immune to interference.
## Deep dive: Switching
Circuit switching reserves a path; packet switching splits data into independently routed packets.
## Hindi saransh
Data sanchar: bandwidth, sanchar madhyam, simplex/duplex aur switching.
> Remember: the Internet uses packet switching; the telephone network used circuit switching.
@formulas
## Key facts
Simplex | One way
Half duplex | Alternate
Full duplex | Both together
Fibre | Light
1 byte | 8 bits

@qa
Q: Which is the exchange of data between devices?
A: Data communication is the exchange of data between devices.
Q: What do you know about Data communication?
A: Data communication is the exchange of data between devices.
Q: Which originates the message?
A: Sender originates the message.
Q: What do you know about Sender?
A: Sender originates the message.
Q: Which gets the message?
A: Receiver gets the message.
Q: What do you know about Receiver?
A: Receiver gets the message.
Q: Which carries the signal?
A: Medium carries the signal.
Q: What do you know about Medium?
A: Medium carries the signal.
Q: Which governs the exchange?
A: Protocol governs the exchange.
Q: What do you know about Protocol?
A: Protocol governs the exchange.
Q: Which is the capacity of a channel?
A: Bandwidth is the capacity of a channel.
Q: What do you know about Bandwidth?
A: Bandwidth is the capacity of a channel.
Q: Which is measured in bits per second?
A: Digital bandwidth is measured in bits per second.
Q: What do you know about Digital bandwidth?
A: Digital bandwidth is measured in bits per second.
Q: Which is the speed of transmission?
A: Data transfer rate is the speed of transmission.
Q: What do you know about Data transfer rate?
A: Data transfer rate is the speed of transmission.
Q: Which is the actual achieved rate?
A: Throughput is the actual achieved rate.
Q: What do you know about Throughput?
A: Throughput is the actual achieved rate.
Q: Which is the delay in transmission?
A: Latency is the delay in transmission.
Q: What do you know about Latency?
A: Latency is the delay in transmission.
Q: Which distorts a signal?
A: Noise distorts a signal.
Q: What do you know about Noise?
A: Noise distorts a signal.
Q: Which is eight bits?
A: One byte is eight bits.
Q: What do you know about One byte?
A: One byte is eight bits.
Q: Which is 1024 bytes?
A: One kilobyte is 1024 bytes.
Q: What do you know about One kilobyte?
A: One kilobyte is 1024 bytes.
Q: Which means megabits per second?
A: Mbps means megabits per second.
Q: What do you know about Mbps?
A: Mbps means megabits per second.
Q: Which sends in one direction only?
A: Simplex sends in one direction only.
Q: What do you know about Simplex?
A: Simplex sends in one direction only.
Q: Which is a simplex device?
A: Keyboard is a simplex device.
Q: What do you know about Keyboard?
A: Keyboard is a simplex device.
Q: Which is simplex?
A: Radio broadcast is simplex.
Q: What do you know about Radio broadcast?
A: Radio broadcast is simplex.
Q: Which alternates the direction?
A: Half duplex alternates the direction.
Q: What do you know about Half duplex?
A: Half duplex alternates the direction.
Q: Which is half duplex?
A: Walkie talkie is half duplex.
Q: What do you know about Walkie talkie?
A: Walkie talkie is half duplex.
Q: Which sends both ways at once?
A: Full duplex sends both ways at once.
Q: What do you know about Full duplex?
A: Full duplex sends both ways at once.
Q: Which is full duplex?
A: Telephone is full duplex.
Q: What do you know about Telephone?
A: Telephone is full duplex.
Q: Which is cheap and common in LANs?
A: Twisted pair is cheap and common in LANs.
Q: What do you know about Twisted pair?
A: Twisted pair is cheap and common in LANs.
Q: Which is unshielded twisted pair?
A: UTP is unshielded twisted pair.
Q: What do you know about UTP?
A: UTP is unshielded twisted pair.
Q: Which is shielded twisted pair?
A: STP is shielded twisted pair.
Q: What do you know about STP?
A: STP is shielded twisted pair.
Q: Which is used in cable television?
A: Coaxial cable is used in cable television.
Q: What do you know about Coaxial cable?
A: Coaxial cable is used in cable television.
Q: Which has higher bandwidth than twisted pair?
A: Coaxial cable has higher bandwidth than twisted pair.
Q: Which carries light signals?
A: Optical fibre carries light signals.
Q: What do you know about Optical fibre?
A: Optical fibre carries light signals.
Q: Which has very high speed?
A: Optical fibre has very high speed.
Q: Which is immune to electromagnetic interference?
A: Optical fibre is immune to electromagnetic interference.
Q: Which is expensive?
A: Optical fibre is expensive.
Q: Which travel through the air in all directions?
A: Radio waves travel through the air in all directions.
Q: What do you know about Radio waves?
A: Radio waves travel through the air in all directions.
Q: Which need line of sight?
A: Microwaves need line of sight.
Q: What do you know about Microwaves?
A: Microwaves need line of sight.
Q: Which uses microwaves?
A: Satellite communication uses microwaves.
Q: What do you know about Satellite communication?
A: Satellite communication uses microwaves.
Q: Which is short range?
A: Infrared is short range.
Q: What do you know about Infrared?
A: Infrared is short range.
Q: Which uses infrared?
A: Remote control uses infrared.
Q: What do you know about Remote control?
A: Remote control uses infrared.
Q: Which uses short range radio?
A: Bluetooth uses short range radio.
Q: What do you know about Bluetooth?
A: Bluetooth uses short range radio.
Q: Which uses 2.4 and 5 GHz bands?
A: Wi Fi uses 2.4 and 5 GHz bands.
Q: What do you know about Wi Fi?
A: Wi Fi uses 2.4 and 5 GHz bands.
Q: Which sets up a dedicated path?
A: Circuit switching sets up a dedicated path.
Q: What do you know about Circuit switching?
A: Circuit switching sets up a dedicated path.
Q: Which uses circuit switching?
A: Telephone network uses circuit switching.
Q: What do you know about Telephone network?
A: Telephone network uses circuit switching.
Q: Which divides data into packets?
A: Packet switching divides data into packets.
Q: What do you know about Packet switching?
A: Packet switching divides data into packets.
Q: Which uses packet switching?
A: Internet uses packet switching.
Q: What do you know about Internet?
A: Internet uses packet switching.
Q: Which holds addresses and sequence number?
A: Packet header holds addresses and sequence number.
Q: What do you know about Packet header?
A: Packet header holds addresses and sequence number.
Q: Which may take different routes?
A: Packets may take different routes.
Q: What do you know about Packets?
A: Packets may take different routes.
Q: Which are reassembled at the destination?
A: Packets are reassembled at the destination.
Q: Which stores and forwards whole messages?
A: Message switching stores and forwards whole messages.
Q: What do you know about Message switching?
A: Message switching stores and forwards whole messages.
Q: Which varies continuously?
A: Analogue signal varies continuously.
Q: What do you know about Analogue signal?
A: Analogue signal varies continuously.
Q: Which is discrete?
A: Digital signal is discrete.
Q: What do you know about Digital signal?
A: Digital signal is discrete.
Q: Which shares one link among signals?
A: Multiplexing shares one link among signals.
Q: What do you know about Multiplexing?
A: Multiplexing shares one link among signals.
Q: Which detects simple errors?
A: Parity bit detects simple errors.
Q: What do you know about Parity bit?
A: Parity bit detects simple errors.
Q: Which detects transmission errors?
A: Checksum detects transmission errors.
Q: What do you know about Checksum?
A: Checksum detects transmission errors.
Q: Which is a stronger error check?
A: CRC is a stronger error check.
Q: What do you know about CRC?
A: CRC is a stronger error check.
Q: Which modulates and demodulates?
A: Modem modulates and demodulates.
Q: What do you know about Modem?
A: Modem modulates and demodulates.
Q: What is data communication?
A: Exchange of data between devices over a medium.
Q: What is bandwidth?
A: The capacity of a channel to carry data.
Q: What is simplex?
A: One direction only communication.
Q: What is full duplex?
A: Simultaneous two way communication.
Q: What is optical fibre?
A: A cable carrying data as light pulses.
Q: What is circuit switching?
A: Using a dedicated path for the whole communication.
Q: What is packet switching?
A: Dividing data into packets that travel independently.
Q: What is noise?
A: Unwanted disturbance in a signal.
@quiz
? Which is the exchange of data between devices?
- Sender
- Protocol
- Medium
+ Data communication
! Data communication is the exchange of data between devices.
? Which statement is true of Data communication?
- Originates the message
- Carries the signal
+ Is the exchange of data between devices
- Governs the exchange
! Data communication is the exchange of data between devices.
? Which originates the message?
- Protocol
- Data communication
+ Sender
- Medium
! Sender originates the message.
? Which statement is true of Sender?
- Gets the message
- Governs the exchange
- Is the exchange of data between devices
+ Originates the message
! Sender originates the message.
? Which gets the message?
- Medium
- Data communication
- Protocol
+ Receiver
! Receiver gets the message.
? Which statement is true of Receiver?
- Is the exchange of data between devices
- Originates the message
- Carries the signal
+ Gets the message
! Receiver gets the message.
? Which carries the signal?
+ Medium
- Protocol
- Data communication
- Sender
! Medium carries the signal.
? Which statement is true of Medium?
- Is the exchange of data between devices
- Gets the message
+ Carries the signal
- Governs the exchange
! Medium carries the signal.
? Which governs the exchange?
- Receiver
- Data communication
- Medium
+ Protocol
! Protocol governs the exchange.
? Which statement is true of Protocol?
- Is the exchange of data between devices
- Carries the signal
- Originates the message
+ Governs the exchange
! Protocol governs the exchange.
? Which is the capacity of a channel?
+ Bandwidth
- One byte
- One kilobyte
- Digital bandwidth
! Bandwidth is the capacity of a channel.
? Which statement is true of Bandwidth?
+ Is the capacity of a channel
- Distorts a signal
- Is 1024 bytes
- Is the delay in transmission
! Bandwidth is the capacity of a channel.
? Which is measured in bits per second?
+ Digital bandwidth
- One kilobyte
- Data transfer rate
- Noise
! Digital bandwidth is measured in bits per second.
? Which statement is true of Digital bandwidth?
- Distorts a signal
+ Is measured in bits per second
- Is the delay in transmission
- Means megabits per second
! Digital bandwidth is measured in bits per second.
? Which is the speed of transmission?
- One byte
- Digital bandwidth
- One kilobyte
+ Data transfer rate
! Data transfer rate is the speed of transmission.
? Which statement is true of Data transfer rate?
+ Is the speed of transmission
- Is 1024 bytes
- Distorts a signal
- Is the actual achieved rate
! Data transfer rate is the speed of transmission.
? Which is the actual achieved rate?
- Bandwidth
- One byte
- Digital bandwidth
+ Throughput
! Throughput is the actual achieved rate.
? Which statement is true of Throughput?
- Is the delay in transmission
- Is eight bits
- Is the speed of transmission
+ Is the actual achieved rate
! Throughput is the actual achieved rate.
? Which is the delay in transmission?
+ Latency
- Digital bandwidth
- Noise
- Mbps
! Latency is the delay in transmission.
? Which statement is true of Latency?
- Is 1024 bytes
- Is the speed of transmission
+ Is the delay in transmission
- Is the actual achieved rate
! Latency is the delay in transmission.
? Which distorts a signal?
- One byte
- Latency
+ Noise
- Digital bandwidth
! Noise distorts a signal.
? Which statement is true of Noise?
- Is the actual achieved rate
- Is measured in bits per second
- Is the speed of transmission
+ Distorts a signal
! Noise distorts a signal.
? Which is eight bits?
- Bandwidth
- Mbps
- One kilobyte
+ One byte
! One byte is eight bits.
? Which statement is true of One byte?
- Is 1024 bytes
- Is the speed of transmission
- Means megabits per second
+ Is eight bits
! One byte is eight bits.
? Which is 1024 bytes?
- Data transfer rate
- Latency
+ One kilobyte
- Throughput
! One kilobyte is 1024 bytes.
? Which statement is true of One kilobyte?
- Means megabits per second
- Is the speed of transmission
+ Is 1024 bytes
- Is the delay in transmission
! One kilobyte is 1024 bytes.
? Which means megabits per second?
- One byte
+ Mbps
- Data transfer rate
- One kilobyte
! Mbps means megabits per second.
? Which statement is true of Mbps?
+ Means megabits per second
- Is the speed of transmission
- Is the actual achieved rate
- Is eight bits
! Mbps means megabits per second.
? Which sends in one direction only?
+ Simplex
- Full duplex
- Radio broadcast
- Half duplex
! Simplex sends in one direction only.
? Which statement is true of Simplex?
+ Sends in one direction only
- Is a simplex device
- Is simplex
- Sends both ways at once
! Simplex sends in one direction only.
? Which is a simplex device?
- Radio broadcast
- Simplex
- Walkie talkie
+ Keyboard
! Keyboard is a simplex device.
? Which statement is true of Keyboard?
- Is simplex
+ Is a simplex device
- Sends in one direction only
- Sends both ways at once
! Keyboard is a simplex device.
? Which is simplex?
+ Radio broadcast
- Full duplex
- Telephone
- Keyboard
! Radio broadcast is simplex.
? Which statement is true of Radio broadcast?
- Sends both ways at once
- Is full duplex
- Is a simplex device
+ Is simplex
! Radio broadcast is simplex.
? Which alternates the direction?
- Simplex
- Full duplex
+ Half duplex
- Telephone
! Half duplex alternates the direction.
? Which statement is true of Half duplex?
- Is full duplex
- Sends both ways at once
- Is simplex
+ Alternates the direction
! Half duplex alternates the direction.
? Which is half duplex?
- Telephone
- Keyboard
+ Walkie talkie
- Radio broadcast
! Walkie talkie is half duplex.
? Which statement is true of Walkie talkie?
- Sends both ways at once
- Sends in one direction only
- Is full duplex
+ Is half duplex
! Walkie talkie is half duplex.
? Which sends both ways at once?
- Walkie talkie
- Radio broadcast
+ Full duplex
- Keyboard
! Full duplex sends both ways at once.
? Which statement is true of Full duplex?
- Sends in one direction only
- Is half duplex
+ Sends both ways at once
- Is full duplex
! Full duplex sends both ways at once.
? Which is full duplex?
- Walkie talkie
- Radio broadcast
+ Telephone
- Half duplex
! Telephone is full duplex.
? Which statement is true of Telephone?
+ Is full duplex
- Is half duplex
- Sends both ways at once
- Is simplex
! Telephone is full duplex.
? Which is cheap and common in LANs?
+ Twisted pair
- UTP
- STP
- Optical fibre
! Twisted pair is cheap and common in LANs.
? Which statement is true of Twisted pair?
+ Is cheap and common in LANs
- Is shielded twisted pair
- Has higher bandwidth than twisted pair
- Is expensive
! Twisted pair is cheap and common in LANs.
? Which is unshielded twisted pair?
- Optical fibre
- STP
- Coaxial cable
+ UTP
! UTP is unshielded twisted pair.
? Which statement is true of UTP?
- Has higher bandwidth than twisted pair
+ Is unshielded twisted pair
- Is cheap and common in LANs
- Is shielded twisted pair
! UTP is unshielded twisted pair.
? Which is shielded twisted pair?
- Optical fibre
- Twisted pair
- UTP
+ STP
! STP is shielded twisted pair.
? Which statement is true of STP?
- Is expensive
- Is cheap and common in LANs
- Is unshielded twisted pair
+ Is shielded twisted pair
! STP is shielded twisted pair.
? Which is used in cable television?
- Optical fibre
+ Coaxial cable
- Twisted pair
- STP
! Coaxial cable is used in cable television.
? Which statement is true of Coaxial cable?
- Is expensive
- Is immune to electromagnetic interference
+ Is used in cable television
- Carries light signals
! Coaxial cable is used in cable television.
? Which has higher bandwidth than twisted pair?
- Optical fibre
+ Coaxial cable
- UTP
- STP
! Coaxial cable has higher bandwidth than twisted pair.
? Which carries light signals?
- STP
- UTP
+ Optical fibre
- Twisted pair
! Optical fibre carries light signals.
? Which statement is true of Optical fibre?
- Is shielded twisted pair
- Is unshielded twisted pair
- Is cheap and common in LANs
+ Carries light signals
! Optical fibre carries light signals.
? Which has very high speed?
- Coaxial cable
+ Optical fibre
- UTP
- Twisted pair
! Optical fibre has very high speed.
? Which is immune to electromagnetic interference?
- Coaxial cable
- STP
+ Optical fibre
- Twisted pair
! Optical fibre is immune to electromagnetic interference.
? Which is expensive?
- UTP
- Coaxial cable
+ Optical fibre
- Twisted pair
! Optical fibre is expensive.
? Which travel through the air in all directions?
- Microwaves
+ Radio waves
- Satellite communication
- Infrared
! Radio waves travel through the air in all directions.
? Which statement is true of Radio waves?
- Uses infrared
- Need line of sight
- Uses short range radio
+ Travel through the air in all directions
! Radio waves travel through the air in all directions.
? Which need line of sight?
+ Microwaves
- Bluetooth
- Radio waves
- Satellite communication
! Microwaves need line of sight.
? Which statement is true of Microwaves?
+ Need line of sight
- Is short range
- Uses microwaves
- Travel through the air in all directions
! Microwaves need line of sight.
? Which uses microwaves?
- Remote control
+ Satellite communication
- Microwaves
- Infrared
! Satellite communication uses microwaves.
? Which statement is true of Satellite communication?
+ Uses microwaves
- Uses 2.4 and 5 GHz bands
- Uses short range radio
- Uses infrared
! Satellite communication uses microwaves.
? Which is short range?
- Wi Fi
- Microwaves
- Bluetooth
+ Infrared
! Infrared is short range.
? Which statement is true of Infrared?
+ Is short range
- Travel through the air in all directions
- Uses microwaves
- Need line of sight
! Infrared is short range.
? Which uses infrared?
- Satellite communication
+ Remote control
- Radio waves
- Bluetooth
! Remote control uses infrared.
? Which statement is true of Remote control?
- Need line of sight
- Uses microwaves
+ Uses infrared
- Is short range
! Remote control uses infrared.
? Which uses short range radio?
- Wi Fi
- Infrared
+ Bluetooth
- Satellite communication
! Bluetooth uses short range radio.
? Which statement is true of Bluetooth?
- Uses microwaves
+ Uses short range radio
- Is short range
- Uses infrared
! Bluetooth uses short range radio.
? Which uses 2.4 and 5 GHz bands?
+ Wi Fi
- Bluetooth
- Microwaves
- Infrared
! Wi Fi uses 2.4 and 5 GHz bands.
? Which statement is true of Wi Fi?
+ Uses 2.4 and 5 GHz bands
- Need line of sight
- Uses infrared
- Is short range
! Wi Fi uses 2.4 and 5 GHz bands.
? Which sets up a dedicated path?
- Internet
+ Circuit switching
- Packet switching
- Telephone network
! Circuit switching sets up a dedicated path.
? Which statement is true of Circuit switching?
+ Sets up a dedicated path
- Stores and forwards whole messages
- Holds addresses and sequence number
- Divides data into packets
! Circuit switching sets up a dedicated path.
? Which uses circuit switching?
- Packet switching
+ Telephone network
- Message switching
- Internet
! Telephone network uses circuit switching.
? Which statement is true of Telephone network?
+ Uses circuit switching
- May take different routes
- Sets up a dedicated path
- Are reassembled at the destination
! Telephone network uses circuit switching.
? Which divides data into packets?
- Internet
- Message switching
+ Packet switching
- Circuit switching
! Packet switching divides data into packets.
? Which statement is true of Packet switching?
- Are reassembled at the destination
- Uses circuit switching
- Stores and forwards whole messages
+ Divides data into packets
! Packet switching divides data into packets.
? Which uses packet switching?
- Message switching
+ Internet
- Circuit switching
- Packet switching
! Internet uses packet switching.
? Which statement is true of Internet?
- Stores and forwards whole messages
- Holds addresses and sequence number
+ Uses packet switching
- Uses circuit switching
! Internet uses packet switching.
? Which holds addresses and sequence number?
- Packets
- Telephone network
- Message switching
+ Packet header
! Packet header holds addresses and sequence number.
? Which statement is true of Packet header?
- Uses circuit switching
+ Holds addresses and sequence number
- Are reassembled at the destination
- Stores and forwards whole messages
! Packet header holds addresses and sequence number.
? Which may take different routes?
- Message switching
+ Packets
- Telephone network
- Packet header
! Packets may take different routes.
? Which statement is true of Packets?
- Uses packet switching
+ May take different routes
- Sets up a dedicated path
- Uses circuit switching
! Packets may take different routes.
? Which are reassembled at the destination?
- Packet header
- Message switching
+ Packets
- Telephone network
! Packets are reassembled at the destination.
? Which stores and forwards whole messages?
+ Message switching
- Packet switching
- Telephone network
- Internet
! Message switching stores and forwards whole messages.
? Which statement is true of Message switching?
- Sets up a dedicated path
- May take different routes
- Uses circuit switching
+ Stores and forwards whole messages
! Message switching stores and forwards whole messages.
? Which varies continuously?
- CRC
- Parity bit
- Digital signal
+ Analogue signal
! Analogue signal varies continuously.
? Which statement is true of Analogue signal?
+ Varies continuously
- Detects transmission errors
- Modulates and demodulates
- Detects simple errors
! Analogue signal varies continuously.
? Which is discrete?
- Multiplexing
- Checksum
- Analogue signal
+ Digital signal
! Digital signal is discrete.
? Which statement is true of Digital signal?
+ Is discrete
- Shares one link among signals
- Varies continuously
- Modulates and demodulates
! Digital signal is discrete.
? Which shares one link among signals?
- Analogue signal
- Parity bit
+ Multiplexing
- Checksum
! Multiplexing shares one link among signals.
? Which statement is true of Multiplexing?
- Is a stronger error check
- Is discrete
+ Shares one link among signals
- Detects simple errors
! Multiplexing shares one link among signals.
? Which detects simple errors?
- Multiplexing
- Analogue signal
- CRC
+ Parity bit
! Parity bit detects simple errors.
? Which statement is true of Parity bit?
+ Detects simple errors
- Shares one link among signals
- Modulates and demodulates
- Detects transmission errors
! Parity bit detects simple errors.
? Which detects transmission errors?
- CRC
- Digital signal
- Analogue signal
+ Checksum
! Checksum detects transmission errors.
? Which statement is true of Checksum?
- Detects simple errors
- Shares one link among signals
+ Detects transmission errors
- Is discrete
! Checksum detects transmission errors.
? Which is a stronger error check?
- Modem
- Multiplexing
- Digital signal
+ CRC
! CRC is a stronger error check.
? Which statement is true of CRC?
- Is discrete
- Detects simple errors
+ Is a stronger error check
- Modulates and demodulates
! CRC is a stronger error check.
? Which modulates and demodulates?
- Multiplexing
- Digital signal
- Parity bit
+ Modem
! Modem modulates and demodulates.
? Which statement is true of Modem?
- Detects transmission errors
- Shares one link among signals
- Detects simple errors
+ Modulates and demodulates
! Modem modulates and demodulates.
? Telephone
+ Full duplex
- Simplex
- Half duplex
- None
! Mode.
? Fastest medium
+ Fibre
- UTP
- Coaxial
- Radio
! Cable.
? Internet
+ Packet
- Circuit
- Message
- None
! Switching.
? Walkie talkie
- Simplex
- Full duplex
- Multi
+ Half duplex
! Mode.
? Line of sight
- Radio
- Fibre
- UTP
+ Microwave
! Wave.
? Eight bits
- Nibble
- Word
+ Byte
- Packet
! Unit.
@visual
blocks | Transmission modes | Simplex; Half duplex; Full duplex; Example
compare | Circuit and packet switching | Circuit=Dedicated path~Telephone; Packet=Independent packets~Internet
flow | Communication | Sender; Encode; Medium; Receiver
mind | Data communication | Components; Media; Modes; Switching
steps | Packet | Divide message; Add header; Route; Reassemble
@problems
## Moderate
P: Give one example each of simplex, half duplex and full duplex.
A: Radio, walkie-talkie and telephone.
R: 3 | Simplex
R: 3 | Duplex
## High
P: Compare optical fibre and twisted pair.
A: Fibre uses light, offers very high speed and no interference but costs more; twisted pair is cheap, slower and affected by noise.
R: 2 | Speed
R: 2 | Interference
R: 2 | Cost
R: 2 | Use
## Advanced
P: How does packet switching work?
A: Data is split into packets with headers, each travels independently along any route and the receiver reassembles them in order.
R: 2 | Packets
R: 2 | Header
R: 2 | Independent routes
R: 2 | Reassembly
