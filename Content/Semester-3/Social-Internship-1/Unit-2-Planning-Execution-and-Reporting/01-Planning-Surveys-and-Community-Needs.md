# Planning: needs assessment, surveys and project plan
minutes: 35
yt: community needs assessment survey design problem tree
yt: SMART goals project plan gantt chart
@study
## Needs assessment
Find out what the community actually needs.
- **Observe** the place and daily routines.
- **Interview** residents, teachers, elders, NGO staff (open questions).
- **Survey** with a short questionnaire.
- **Focus group** discussion.
- Check existing data (census, school or health records, government schemes).

## Problem tree
Draw the **core problem** in the middle, **causes** as roots and **effects** as branches. Example: core problem "students in village school are weak in computers". Causes: no teacher, few computers, no electricity backup. Effects: poor job readiness, migration. Then turn it into an **objective tree**.

## Survey design
Keep it short (10–15 questions) and in the local language. Use mixed question types: yes/no, multiple choice, rating scale, one open question. Avoid leading or double questions. Pilot with 3–5 people. Get consent and keep data confidential.
Sample size: for a small community, survey as many households as practical; random choice reduces bias.

### Quick analysis (simulated)
```python
answers = ["yes", "no", "yes", "yes", "no", "yes", "yes", "no", "yes", "yes"]
n = len(answers)
yes = answers.count("yes")
print(yes, n, f"{100 * yes / n:.0f}%")
```
Output:
```
7 10 70%
```
So 70% of 10 respondents answered yes. State the sample size when reporting.

## SMART objectives
**S**pecific, **M**easurable, **A**chievable, **R**elevant, **T**ime-bound.
Weak: "Improve digital skills." SMART: "Teach basic smartphone and UPI safety to 30 villagers in 6 sessions of 1 hour over 3 weeks, measured by pre- and post-tests."

## Project plan
- Activities and responsible persons.
- **Timeline / Gantt chart** (week-wise).
- Resources and budget (often small or zero).
- Risks and backups (bad weather, low attendance).
- Indicators: number of participants, attendance, test score change, feedback ratings.

### Example plan (6 weeks)
| Week | Activity |
| --- | --- |
| 1 | Meet host, survey, permissions |
| 2 | Analyse survey, finalise plan |
| 3–5 | Conduct 6 sessions |
| 6 | Post-test, feedback, report |

## Stakeholders
Beneficiaries, host organisation, local leaders, mentors, university. Agree on expectations in writing.

## Communication
Use simple language, local language and visuals; be punctual; share small updates with your mentor weekly.

> A clear objective with numbers lets you prove what you achieved.
@qa
Q: What is a problem tree?
A: A diagram showing a core problem with its causes as roots and its effects as branches, used to understand and plan solutions.
Q: What does SMART stand for?
A: Specific, Measurable, Achievable, Relevant and Time-bound.
Q: Why pilot a survey?
A: To find confusing or leading questions and fix them before using it with the community.
Q: Convert "improve digital skills" into a SMART objective.
A: For example: teach basic smartphone and UPI safety to 30 villagers in six one-hour sessions over three weeks, measured by pre- and post-tests.
Q: Name useful indicators for an internship project.
A: Number of participants, attendance, change between pre- and post-test scores, feedback ratings and tasks completed.
@quiz
? In a problem tree, causes are the
+ roots
- leaves
- branches
- fruits
! Roots show causes; branches show effects.
? A good survey question is
- leading
- double-barrelled
+ clear and neutral
- offensive
! Neutral wording avoids bias.
? 7 yes out of 10 respondents is
- 7%
+ 70%
- 17%
- 3%
! 7/10 = 70%.
? The 'T' in SMART is
- Teamwork
- Technology
+ Time-bound
- Trust
! It has a deadline.
? Before surveying you should get
- payment
+ consent
- a loan
- a medal
! Informed consent is required.

@visual
steps | Finding out what a community needs | Define the community and the question; Choose methods: survey, interview, observation; Collect the information carefully; Analyse and list the needs; Rank them by urgency and what you can actually do

@problems
## Moderate
P: Differentiate between an open-ended and a closed-ended survey question and give an example of each.
A: A closed-ended question has fixed answer choices, easy to count (Do you have internet at home? Yes or No). An open-ended question lets the person answer in their own words and gives richer detail (What problems do you face in using the internet?).
R: 2 | Difference
R: 2 | Example of each
## High
P: Write five good survey questions for a needs survey about digital literacy in a village and name one that is badly worded and why.
A: Examples: 1) Do you own a smartphone? 2) How often do you use the internet (daily, weekly, never)? 3) Which services do you use (UPI, WhatsApp, government portals)? 4) What stops you from using them? 5) Would you attend a free training session? Badly worded (leading) question: "Don't you agree that the internet is dangerous?" because it pushes a particular answer.
R: 3 | Five relevant, clear questions
R: 2 | Explains a leading or unclear question
## Advanced
P: Of 120 households surveyed, 78 have no internet access and 30 of those say cost is the main reason. Find both percentages and suggest how to rank the need. Why is a sample chosen, and how can bias be reduced?
A: No access: 78 / 120 = 65%. Cost as the main reason: 30 / 78 = 38.5% of those without access (25% of all households). Since a majority lacks access, internet access and training are high-priority needs; combine with urgency and feasibility.
A sample saves time and cost when surveying everyone is not possible. Reduce bias by choosing households randomly, covering different areas, using neutral questions and asking everyone the same way.
R: 2 | 65 percent and 38.5 percent
R: 1 | Ranks by frequency, urgency and feasibility
R: 2 | Sampling and bias reduction
