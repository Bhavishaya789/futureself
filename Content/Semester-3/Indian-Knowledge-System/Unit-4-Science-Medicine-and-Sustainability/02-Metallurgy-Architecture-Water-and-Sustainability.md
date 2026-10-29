# Metallurgy, architecture, water management and sustainability
minutes: 30
yt: iron pillar of delhi rust wootz steel zawar zinc
yt: traditional water harvesting stepwell johad tanka
@study
## Metallurgy
- **Wootz steel:** high-carbon crucible steel made in South India (Tamil Nadu, Karnataka, Telangana); source of the famed "Damascus" blades.
- **Iron Pillar of Delhi** (Mehrauli; Gupta period, around the 4th–5th century CE): about 7 m tall and weighing over 6 tonnes, it shows remarkable corrosion resistance, attributed to a thin protective layer rich in iron-hydrogen-phosphate formed because of the high phosphorus content and the local climate.
- **Zinc distillation at Zawar (Rajasthan):** one of the earliest large-scale production of metallic zinc (from about the 12th century CE or earlier).
- Bronze casting: the dancing-girl statue (Mohenjo-daro) and Chola bronzes using the lost-wax method.

## Town planning and architecture
- **Indus cities** (Harappa, Mohenjo-daro, Dholavira, Lothal): grid streets, covered drains, standard bricks, the Great Bath, the dockyard at Lothal.
- **Vastu Shastra** and **Shilpa Shastra**: guidelines on layout, orientation to light and wind, proportions. Scientific proof of all claims is limited, but passive-design ideas (ventilation, sunlight) are sound.
- Temple architecture styles: Nagara (north), Dravida (south), Vesara; examples Konark, Khajuraho, Brihadeeswara (Thanjavur).
- Stone and cave structures: Ajanta, Ellora (Kailasa temple carved from one rock).

## Water management
Different regions evolved different systems:
| Region | System |
| --- | --- |
| Rajasthan | Johad, baoli/stepwell, kund, tanka |
| Gujarat | Vav (stepwell, e.g. Rani ki Vav, Patan) |
| Himalaya | Kuls and naulas (Uttarakhand/Himachal channels and springs) |
| South | Eris (tank systems in Tamil Nadu), temple tanks |
| North-east | Bamboo drip irrigation |
Cholas built the Grand Anicut (Kallanai) across the Kaveri, still in use. Dholavira had a sophisticated reservoir system.
Modern revival: Rajendra Singh's johad work in Alwar (Rajasthan), rooftop rainwater harvesting.

## Agriculture
Kautilya's *Arthashastra* and *Krishi-Parashara* describe seasons, soil, seeds, crop rotation and irrigation. Traditional practices: mixed cropping, millets (now promoted as "Shree Anna"; the UN declared 2023 the International Year of Millets), organic manure, and seed saving.

## Ecology and sustainability
Sacred groves, worship of rivers and trees, **Bishnoi** community's protection of trees and wildlife (the 1730 Khejarli sacrifice), **Chipko movement** (1970s Uttarakhand, led by villagers including Gaura Devi, with Sunderlal Bahuguna and Chandi Prasad Bhatt). These show community-based conservation and relate to the UN Sustainable Development Goals.

## IoT and traditional wisdom
Soil-moisture sensors with drip irrigation, smart water meters for stepwell-style conservation, and weather stations for traditional crop calendars link IKS to modern engineering.

## Quick calculation: rainwater harvesting
Roof area 100 m², annual rainfall 800 mm, runoff coefficient 0.8: harvest = 100 × 0.8 × 0.8 m³ = **64 m³ = 64,000 litres** per year.
```python
area, rain_m, coeff = 100, 0.8, 0.8
print(area * rain_m * coeff, "m3 =", area * rain_m * coeff * 1000, "litres")
```
Output:
```
64.0 m3 = 64000.0 litres
```

> Many traditional systems were sustainable engineering solutions adapted to local conditions.
@qa
Q: What is notable about the Iron Pillar of Delhi?
A: It has resisted rust for about 1,600 years, which is attributed to its high phosphorus content producing a protective surface layer in the local climate.
Q: What is wootz steel?
A: A high-carbon crucible steel produced in South India, famous for high-quality blades and the origin of Damascus-type steel.
Q: Name some traditional water harvesting systems of India.
A: Johads, baolis or stepwells, kunds and tankas in Rajasthan, vavs in Gujarat, kuls in the Himalaya, and eri tanks in Tamil Nadu.
Q: What was the Chipko movement?
A: A 1970s non-violent movement in Uttarakhand in which villagers, especially women, hugged trees to prevent them from being felled.
Q: How much water can a 100 m² roof harvest with 800 mm rainfall and a runoff coefficient of 0.8?
A: 100 × 0.8 × 0.8 = 64 m³, or 64,000 litres per year.
@quiz
? The Iron Pillar of Delhi is known for
+ rust resistance
- being made of gold
- being hollow
- being modern
! Its corrosion resistance has long interested metallurgists.
? Zawar in Rajasthan is famous for ancient
- gold mining
+ zinc production
- silk
- salt
! Early large-scale zinc distillation.
? Rani ki Vav is a
- fort
+ stepwell
- temple tower
- observatory
! A UNESCO site in Patan, Gujarat.
? The Chipko movement originated in
- Kerala
+ Uttarakhand
- Assam
- Punjab
! The 1970s Himalayan movement.
? Which crop group did the UN highlight in 2023?
- Cotton
+ Millets
- Sugarcane
- Tea
! 2023 was the International Year of Millets.

@visual
timeline | Examples of Indian engineering heritage (approximate dates) | c. 2500 BCE=Dholavira builds a water conservation system; c. 2nd century CE=Grand Anicut (Kallanai) built on the Kaveri; c. 4th to 5th century=Delhi Iron Pillar erected; 11th century=Rani ki Vav stepwell at Patan; 13th century=Konark Sun Temple

@problems
## Moderate
P: Name three examples of ancient Indian metallurgy or engineering and say what makes each remarkable.
A: The Delhi Iron Pillar (about 1600 years old) has hardly rusted. Wootz steel from south India was famous for very high-quality blades. Zinc was produced by distillation at Zawar in Rajasthan, a very early large-scale zinc production. Also valid: the Grand Anicut (Kallanai) dam, still in use.
R: 2 | Three examples
R: 2 | What makes each remarkable
## High
P: Roof area is 100 square metres, annual rainfall 800 mm and the runoff coefficient is 0.8. Find the yearly rainwater harvest in cubic metres and litres. Name two traditional water systems of India.
A: Harvest = area x rainfall x coefficient = 100 x 0.8 x 0.8 = 64 cubic metres = 64,000 litres per year. Traditional systems: stepwells (vav or baoli) in Gujarat and Rajasthan, tanks (eri) in Tamil Nadu, and Dholavira's reservoirs.
R: 2 | 64 cubic metres
R: 1 | 64,000 litres
R: 2 | Two traditional systems
## Advanced
P: Explain how traditional water and building practices show sustainability, and how IoT sensors could help one of them today.
A: Stepwells and tanks stored monsoon water for dry months and recharged groundwater; buildings used local materials, ventilation and shade suited to the climate; Vastu and temple design used orientation and light. They are sustainable because they use local resources, low energy and long-term planning.
IoT: water-level sensors and flow meters in a stepwell or tank give real-time storage data and alert when levels are low; soil moisture sensors guide drip irrigation.
R: 2 | Sustainability reasoning with examples
R: 2 | IoT application
R: 1 | Link between old practice and modern technology
