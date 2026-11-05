from ex import *
import json
X='CA Final'
def sj(sub,id,title,tag,syl):
    d='/home/claude/fsw/Content/CA-Final/'+sub; os.makedirs(d,exist_ok=True)
    json.dump({"title":title,"semester":0,"credits":0,"icon":"book","color":"#F59E0B","tagline":tag,"channels":["CA Wallah","Aaditya Jain","CA Final"],"syllabus":syl,"id":id},open(d+'/subject.json','w'),indent=1)
def c(p,t,intro,formulas,nums,facts,**k): put('CA-Final/'+p+'.md',t,X,intro,formulas,nums,facts,**k)
sj('Financial-Reporting','cafinal-fr','Financial Reporting','Paper 1: Ind AS, consolidation, business combinations and financial instruments.',['Ind AS','Consolidation','Business combinations','Financial instruments'])
sj('Advanced-Financial-Management','cafinal-afm','Advanced Financial Management','Paper 2: portfolio, derivatives, forex, mergers and risk management.',['Portfolio','Derivatives','Forex','Valuation','Mergers'])
sj('Advanced-Auditing','cafinal-audit','Advanced Auditing, Assurance and Professional Ethics','Paper 3: standards on auditing, group audits, banks and professional ethics.',['SAs','Group audit','Bank audit','Ethics','Peer review'])
sj('Direct-Tax-Laws','cafinal-dt','Direct Tax Laws and International Taxation','Paper 4: income tax advanced, assessment, TDS and international taxation.',['Assessment','TDS','Transfer pricing','DTAA','Appeals'])
sj('Indirect-Tax-Laws','cafinal-idt','Indirect Tax Laws','Paper 5: GST advanced, customs and FTP.',['GST','Customs','FTP','Refunds','Appeals'])
sj('Integrated-Business-Solutions','cafinal-ibs','Integrated Business Solutions','Paper 6: case study based integration across subjects.',['Case studies','Strategy','Ethics','Integration'])
R='Financial-Reporting/Unit-'
c(R+'1-IndAS/01-Ind-AS-Overview','Ind AS: Key Standards and Principles','Important Ind AS tested in Final.','',(),'''#ind
Ind AS 1 ~ governs the presentation of financial statements
Ind AS 2 ~ values inventory at the lower of cost and net realisable value
Ind AS 7 ~ governs the statement of cash flows
Ind AS 8 ~ deals with accounting policies, changes in estimates and errors
Ind AS 10 ~ deals with events after the reporting period
Ind AS 12 ~ deals with income taxes and deferred tax
Ind AS 16 ~ deals with property, plant and equipment
Ind AS 19 ~ deals with employee benefits
Ind AS 21 ~ deals with the effects of changes in foreign exchange rates
Ind AS 23 ~ deals with borrowing costs
Ind AS 24 ~ deals with related party disclosures
Ind AS 33 ~ deals with earnings per share
Ind AS 36 ~ deals with impairment of assets
Ind AS 37 ~ deals with provisions, contingent liabilities and contingent assets
Ind AS 38 ~ deals with intangible assets
Ind AS 40 ~ deals with investment property
Ind AS 103 ~ deals with business combinations using the acquisition method
Ind AS 109 ~ deals with financial instruments
Ind AS 110 ~ deals with consolidated financial statements
Ind AS 113 ~ deals with fair value measurement
Ind AS 115 ~ deals with revenue from contracts with customers
Ind AS 116 ~ deals with leases and requires lessees to recognise right of use assets''')
c(R+'2-Consolidation/01-Consolidated-Financial-Statements','Consolidated Financial Statements (Ind AS 110, 103, 28)','Control, goodwill, non-controlling interest and equity method.',
'Goodwill = Consideration + NCI - Fair value of net identifiable assets\nNCI = % held × net assets\nGroup share of profit = % × subsidiary post acquisition profit',
[N('Goodwill = Consideration + NCI - Net assets','Goodwill','₹ lakh','C:consideration:500:900:i,N:NCI:100:300:i,A:net assets:400:800:i',lambda c_,n,a:c_+n-a,0),N('NCI at proportionate share = % × net assets','NCI','₹ lakh','p:NCI %:10:40:i,A:net assets:500:900:i',lambda p,a:p/100*a,1),N('Post acquisition profit share = % × (closing - acquisition reserves)','Share','₹ lakh','p:holding %:51:90:i,C:closing:200:600:i,A:acquisition:50:199:i',lambda p,c_,a:p/100*(c_-a),1),N('Unrealised profit in closing stock = stock × margin','URP','₹ lakh','S:stock:50:300:i,m:margin %:10:40:i',lambda s,m:s*m/100,1)],
'''#cons
Control ~ is power over the investee, exposure to variable returns and ability to use power
Subsidiary ~ is consolidated line by line under Ind AS 110
Associate ~ is accounted by the equity method under Ind AS 28
Significant influence ~ is presumed at 20 percent or more of voting power
Joint venture ~ is accounted by the equity method under Ind AS 111
Non-controlling interest ~ may be measured at fair value or proportionate share
Intra-group transactions ~ are eliminated in full
Goodwill ~ is tested annually for impairment and not amortised under Ind AS
Bargain purchase gain ~ is recognised in other comprehensive income as capital reserve
Acquisition date ~ is when control is obtained
Step acquisition ~ requires remeasurement of the previously held interest at fair value
Loss of control ~ results in derecognition of the subsidiary''')
c(R+'3-Instruments/01-Financial-Instruments-Leases','Financial Instruments (Ind AS 109) and Leases (Ind AS 116)','Classification, expected credit loss, lease liabilities and right of use assets.',
'Lease liability = PV of lease payments\nEffective interest = Opening balance × EIR\nECL = PD × LGD × EAD',
[N('PV of lease payments (annuity) = P × [1 - (1+r)^-n]/r','Liability','₹','P:payment:10000:90000:i,r:rate %:6:14:i,n:years:3:10:i',lambda p,r,n:p*(1-(1+r/100)**-n)/(r/100),0),N('Interest for year 1 = Opening × rate','Interest','₹','O:opening:100000:900000:i,r:rate %:6:14:i',lambda o,r:o*r/100,0),N('Expected credit loss = PD × LGD × EAD','ECL','₹','p:PD %:1:10:i,l:LGD %:20:80:i,e:EAD:100000:900000:i',lambda p,l,e:p/100*l/100*e,0),N('Depreciation of right of use asset = Cost / term','Dep','₹','C:cost:100000:900000:i,n:years:3:10:i',lambda c_,n:c_/n,0)],
'''#fin
Financial asset ~ is classified at amortised cost, FVOCI or FVTPL
Business model test ~ and contractual cash flow test decide classification
Expected credit loss ~ replaces the incurred loss model
Stage 1 ECL ~ is measured on 12 month expected losses
Stage 2 and 3 ECL ~ are measured on lifetime expected losses
Effective interest rate ~ discounts estimated future cash flows to the carrying amount
Hedge accounting ~ aligns the recognition of hedging instrument and hedged item
Lessee ~ recognises a right of use asset and lease liability
Short term lease ~ and low value assets are exempt from recognition
Lessor ~ classifies leases as finance or operating
Compound financial instrument ~ is split into liability and equity components
Derecognition ~ occurs when rights to cash flows expire or are transferred''')
M='Advanced-Financial-Management/Unit-'
c(M+'1-Portfolio-Derivatives/01-Portfolio-Management','Portfolio Management and CAPM','Return, risk, diversification and the capital asset pricing model.',
'Expected return = Σ p × r\nPortfolio return = Σ w × r\nσp² = w1²σ1² + w2²σ2² + 2w1w2ρσ1σ2\nCAPM: E(R) = Rf + β(Rm - Rf)\nSharpe = (Rp - Rf)/σp',
[N('Expected return = Σ p × r (two outcomes)','E(R)','%','p:prob:0.2:0.8,a:r1:10:25:i,b:r2:-5:9:i',lambda p,a,b:p*a+(1-p)*b,2),N('CAPM expected return','E(R)','%','r:Rf:4:8:i,b:beta:0.6:1.8,m:Rm:11:17:i',lambda r,b,m:r+b*(m-r),2),N('Portfolio return = w1 r1 + w2 r2','Rp','%','w:w1:0.2:0.8,a:r1:8:20:i,b:r2:5:15:i',lambda w,a,b:w*a+(1-w)*b,2),N('Sharpe ratio = (Rp - Rf)/σ','Sharpe','','p:Rp:10:20:i,r:Rf:4:8:i,s:σ:5:15:i',lambda p,r,s:(p-r)/s,3),N('Portfolio beta = Σ w β','βp','','w:w1:0.2:0.8,a:β1:0.6:1.8,b:β2:0.5:1.5',lambda w,a,b:w*a+(1-w)*b,3),N('Treynor ratio = (Rp - Rf)/β','Treynor','','p:Rp:10:20:i,r:Rf:4:8:i,b:beta:0.6:1.8',lambda p,r,b:(p-r)/b,3)],
'''#port
Systematic risk ~ cannot be diversified
Unsystematic risk ~ can be diversified away
Beta ~ measures sensitivity to market movements
Security market line ~ plots required return against beta
Capital market line ~ plots return against total risk
Efficient frontier ~ gives the highest return for each risk level
Perfect negative correlation ~ can eliminate portfolio risk
Jensen's alpha ~ measures excess return over CAPM
Arbitrage pricing theory ~ uses multiple factors
Efficient market hypothesis ~ has weak, semi-strong and strong forms''')
c(M+'1-Portfolio-Derivatives/02-Derivatives-and-Forex','Derivatives and Foreign Exchange Risk','Futures, options, put-call parity, forward rates and interest rate parity.',
'Futures price = Spot × (1 + r)^t\nCall payoff = max(S - K, 0)\nPut payoff = max(K - S, 0)\nForward = Spot × (1 + ih)/(1 + if)\nPut-call parity: C + K/(1+r)^t = P + S',
[N('Call payoff = max(S - K, 0)','Payoff','₹','S:spot:80:140:i,K:strike:90:120:i',lambda s,k:max(s-k,0),0),N('Put payoff = max(K - S, 0)','Payoff','₹','S:spot:80:140:i,K:strike:90:120:i',lambda s,k:max(k-s,0),0),N('Futures price = S(1 + r)^t','F','₹','S:spot:100:900:i,r:rate %:4:10:i,t:years:1:2:i',lambda s,r,t:s*(1+r/100)**t,2),N('Forward rate by interest parity (1 year)','Forward','₹/$','S:spot:70:90,ih:Indian %:5:9:i,iw:US %:1:4:i',lambda s,a,b:s*(1+a/100)/(1+b/100),3),N('Break-even for long call = K + premium','BE','₹','K:strike:90:150:i,p:premium:2:15:i',lambda k,p:k+p,0),N('Net profit of long call = max(S - K,0) - premium','Profit','₹','S:spot:90:150:i,K:strike:90:120:i,p:premium:2:15:i',lambda s,k,p:max(s-k,0)-p,0)],
'''#der
Forward contract ~ is customised and traded over the counter
Futures contract ~ is standardised and marked to market daily
Call option ~ gives the right to buy
Put option ~ gives the right to sell
Option premium ~ is paid by the buyer and kept by the writer
European option ~ can be exercised only at expiry
Hedging with futures ~ locks a price for future purchase or sale
Interest rate swap ~ exchanges fixed and floating interest payments
Purchasing power parity ~ links exchange rates to inflation differentials
Interest rate parity ~ links forward premium to interest differentials
Black Scholes model ~ prices European options
Delta ~ is the change in option price per unit change in the underlying''')
c(M+'2-Valuation-Mergers/01-Mergers-and-Valuation','Business Valuation, Mergers and Acquisitions','Valuation approaches, exchange ratio and synergy.',
'Exchange ratio = EPS(target)/EPS(acquirer) × price based\nSynergy = Value of combined - Sum of separate values\nEV = Market cap + Debt - Cash\nValue = FCF/(WACC - g)',
[N('Enterprise value = Market cap + Debt - Cash','EV','₹ crore','M:mcap:500:900:i,D:debt:100:300:i,C:cash:20:99:i',lambda m,d,c_:m+d-c_,0),N('Gordon terminal value = FCF/(r - g)','TV','₹ crore','F:FCF:20:100:i,r:WACC %:10:15:i,g:g %:2:6:i',lambda f,r,g:f/((r-g)/100),1),N('Synergy = combined - sum of parts','Synergy','₹ crore','C:combined:900:1500:i,A:A:400:700:i,B:B:300:500:i',lambda c_,a,b:c_-a-b,0),N('Exchange ratio by market price = target price/acquirer price','ER','','t:target:50:200:i,a:acquirer:100:400:i',lambda t,a:t/a,3),N('P/E valuation = EPS × P/E','Price','₹','e:EPS:5:40:i,p:P/E:8:25:i',lambda e,p:e*p,2)],
'''#mna
Horizontal merger ~ combines firms in the same line of business
Vertical merger ~ combines firms at different stages of production
Conglomerate merger ~ combines unrelated businesses
Synergy ~ makes the combined firm worth more than the sum of parts
Discounted cash flow ~ values a firm by the present value of free cash flows
Relative valuation ~ uses multiples such as P/E and EV/EBITDA
Takeover ~ may be friendly or hostile
Leveraged buyout ~ is financed mainly by debt
Demerger ~ separates a division into a new company
SEBI takeover code ~ requires an open offer on crossing 25 percent''')
A_='Advanced-Auditing/Unit-'
c(A_+'1-SA/01-Standards-on-Auditing','Standards on Auditing, Quality Control and Group Audit','Key SAs, quality control and audit of consolidated statements.','',(),'''#sa
SA 200 ~ states overall objectives of the independent auditor
SA 230 ~ governs audit documentation
SA 240 ~ deals with the auditor's responsibility relating to fraud
SA 250 ~ deals with consideration of laws and regulations
SA 260 ~ deals with communication with those charged with governance
SA 265 ~ deals with communicating deficiencies in internal control
SA 300 ~ deals with planning an audit
SA 315 ~ deals with identifying and assessing risks of material misstatement
SA 320 ~ deals with materiality
SA 330 ~ deals with auditor's responses to assessed risks
SA 500 ~ deals with audit evidence
SA 505 ~ deals with external confirmations
SA 520 ~ deals with analytical procedures
SA 570 ~ deals with going concern
SA 600 ~ deals with audit of group financial statements
SA 610 ~ deals with using the work of internal auditors
SA 620 ~ deals with using the work of an auditor's expert
SA 700 ~ deals with forming an opinion and reporting
SA 705 ~ deals with modifications to the opinion
SA 706 ~ deals with emphasis of matter and other matter paragraphs
SQC 1 ~ deals with quality control for firms
Peer review ~ is mandated by ICAI for practice units''')
c(A_+'2-Special-Audits/01-Bank-and-Ethics','Audit of Banks, Special Audits and Professional Ethics','Bank branch audit, NPA, forensic audit and ethical requirements.','',(),'''#bank
Statutory central auditor ~ is appointed by the RBI in banks
Long form audit report ~ is submitted in bank audits
NPA ~ is an asset where interest or principal is overdue for more than 90 days
Substandard asset ~ is an NPA for up to 12 months
Doubtful asset ~ remains substandard for more than 12 months
Loss asset ~ is identified as uncollectable
Provisioning ~ norms are prescribed by the RBI
Forensic audit ~ investigates fraud for legal proceedings
Concurrent audit ~ is done contemporaneously with transactions
Cost audit ~ is governed by Companies (Cost Records and Audit) Rules
Internal financial controls ~ are reported on by the auditor under section 143(3)(i)
Professional misconduct ~ is defined in the First and Second Schedules of the CA Act
Disciplinary Committee ~ and Board of Discipline handle ICAI cases
Advertising ~ by a CA is restricted by the Code of Ethics
Solicitation ~ of professional work is prohibited
Network firm ~ requires independence checks
Whistle blower ~ mechanism is required for listed companies''')
D='Direct-Tax-Laws/Unit-'
c(D+'1-Assessment/01-TDS-and-Assessment','TDS, TCS, Advance Tax and Assessment Procedure','Tax deduction at source rates, advance tax dates and assessment.',
'TDS = Payment × rate\nAdvance tax = Estimated tax - TDS\nInterest u/s 234B/234C = 1% per month',
[N('TDS = payment × rate','TDS','₹','P:payment:50000:900000:i,r:rate %:1:20:i',lambda p,r:p*r/100,0),N('Interest u/s 234A = 1% per month × tax × months','Interest','₹','T:tax:50000:500000:i,m:months:1:6:i',lambda t,m:t*0.01*m,0),N('Advance tax first instalment = 15% of estimated tax','Adv','₹','T:tax:100000:900000:i',lambda t:t*0.15,0),N('Old regime tax = ₹1,12,500 + 30% of income above ₹10 lakh','Tax','₹','I:income:1000000:2000000:i',lambda i:(i-1000000)*0.3+112500,0)],
'''#tds
Section 192 ~ is TDS on salary
Section 194A ~ is TDS on interest other than on securities
Section 194C ~ is TDS on payments to contractors
Section 194J ~ is TDS on professional and technical fees
Section 194I ~ is TDS on rent
Advance tax instalments ~ are due on 15 June, 15 September, 15 December and 15 March
Return of income ~ is filed under section 139
Scrutiny assessment ~ is made under section 143(3)
Best judgment assessment ~ is made under section 144
Reassessment ~ is under section 147
Appeal to CIT(A) ~ must be filed within 30 days
Appeal to ITAT ~ must be filed within 60 days
Penalty for concealment ~ is under section 270A
Faceless assessment ~ minimises human interface''')
c(D+'2-International/01-Transfer-Pricing-DTAA','International Taxation, Transfer Pricing and DTAA','Residence, source rules, arm\'s length price and treaty relief.',
'ALP by TNMM = Operating margin × cost base\nTax credit = lower of foreign tax paid and Indian tax on that income',
[N('Arm\'s length price by CUP = comparable price','ALP','₹','P:price:100:900:i',lambda p:p,0),N('Tolerance band 3%: acceptable range upper = price × 1.03','Upper','₹','P:price:100:900:i',lambda p:p*1.03,2),N('Foreign tax credit = least of foreign tax and Indian tax','FTC','₹','F:foreign tax:10000:90000:i,I:Indian tax:10000:90000:i',lambda f,i:min(f,i),0),N('Operating margin = operating profit/cost × 100','OM','%','O:profit:10000:90000:i,C:cost:100000:900000:i',lambda o,c_:o/c_*100,2)],
'''#int
Resident ~ in India stays 182 days or more or 60 days plus 365 days in the preceding four years
Resident but not ordinarily resident ~ is taxed on Indian income and foreign income from an Indian business
Arm's length price ~ is the price between independent parties
Transfer pricing methods ~ include CUP, RPM, CPM, PSM and TNMM
Associated enterprises ~ must maintain transfer pricing documentation
Form 3CEB ~ is the accountant's report on international transactions
Safe harbour rules ~ provide simplified acceptance of prices
Advance pricing agreement ~ gives certainty for up to five years
Double taxation avoidance agreement ~ avoids double taxation of the same income
Permanent establishment ~ is a fixed place of business in the source country
Equalisation levy ~ was applied on digital advertisement services
General anti avoidance rule ~ applies to impermissible avoidance arrangements''')
I_='Indirect-Tax-Laws/Unit-'
c(I_+'1-GST/01-GST-Advanced','GST: Place of Supply, Refunds, Appeals and Assessment','Advanced GST provisions for the Final exam.',
'Refund of unutilised ITC (zero rated) = Turnover of zero rated supplies × Net ITC / Adjusted total turnover',
[N('Refund formula = Zero rated turnover × net ITC / adjusted turnover','Refund','₹','Z:zero rated:100000:900000:i,I:net ITC:10000:90000:i,T:total:1000000:2000000:i',lambda z,i,t:z*i/t,0),N('Late fee = days × ₹50 (CGST + SGST), nil return ₹20','Fee','₹','d:days:3:30:i',lambda d:d*50,0),N('Interest on delayed payment of tax at 18% per annum','Interest','₹','T:tax:10000:90000:i,d:days:10:90:i',lambda t,d:t*0.18*d/365,2),N('Pre-deposit for appeal = 10% of disputed tax','Deposit','₹','T:disputed tax:100000:900000:i',lambda t:t*0.1,0)],
'''#gst2
Place of supply of services ~ to a registered person is the location of the recipient
Place of supply for immovable property services ~ is where the property is located
Export of services ~ requires payment in convertible foreign exchange
Refund ~ must be claimed within two years from the relevant date
Appeal to the first appellate authority ~ must be filed within three months
Appellate tribunal ~ hears second appeals
Advance ruling ~ is binding on the applicant and the department
Anti-profiteering ~ requires passing on the benefit of reduced tax
Composition scheme ~ cannot be used for inter-state supplies
Job work ~ allows movement of inputs without payment of tax for a specified period
Input service distributor ~ distributes credit to branches
Section 74 ~ deals with fraud and suppression cases
Section 73 ~ deals with non-fraud demands''')
c(I_+'2-Customs-FTP/01-Customs-and-FTP','Customs Law and Foreign Trade Policy','Valuation, duty, drawback, IGST on imports and export promotion.',
'Assessable value = CIF value × exchange rate\nBCD = AV × rate\nSWS = 10% of BCD\nIGST = (AV + BCD + SWS) × rate',
[N('Assessable value = (FOB + freight + insurance) × exchange rate','AV','₹','F:FOB:1000:9000:i,fr:freight:100:900:i,ins:insurance:10:90:i,e:rate:70:90:i',lambda f,fr,i,e:(f+fr+i)*e,0),N('Basic customs duty = AV × rate','BCD','₹','A:AV:100000:900000:i,r:rate %:5:20:i',lambda a,r:a*r/100,0),N('Social welfare surcharge = 10% × BCD','SWS','₹','B:BCD:10000:90000:i',lambda b:b*0.1,0),N('IGST on import = (AV + BCD + SWS) × rate','IGST','₹','A:AV:100000:900000:i,B:BCD:10000:90000:i,s:SWS:1000:9000:i,r:rate %:5:28:i',lambda a,b,s,r:(a+b+s)*r/100,0)],
'''#cus
Customs Act ~ was enacted in 1962
Transaction value ~ is the primary basis of valuation
Insurance ~ is taken as 1.125 percent of FOB when not known
Freight ~ for air import is limited to 20 percent of FOB
Bill of entry ~ is filed for imports
Shipping bill ~ is filed for exports
Duty drawback ~ refunds duty paid on inputs used in exports
Advance authorisation ~ allows duty free import of inputs for exports
EPCG scheme ~ allows import of capital goods at reduced duty
Special economic zone ~ units enjoy duty free imports
Foreign trade policy ~ is notified under the Foreign Trade Act 1992
Directorate General of Foreign Trade ~ administers the policy
Importer exporter code ~ is required for import and export''')
B='Integrated-Business-Solutions/Unit-'
c(B+'1-Case-Studies/01-Case-Study-Approach','Integrated Case Study Approach and Strategic Decisions','How to read, integrate and answer multi-subject case studies.','',(),'''#ibs
Case study ~ questions integrate accounting, law, tax, audit and finance
First step ~ is to read the questions before reading the case
Facts ~ in the case should be highlighted with the relevant subject
Answers ~ should be structured with conclusion, reasoning and reference to law
Ethics ~ questions require identifying the threat and the safeguard
Strategic decision ~ requires SWOT, cost benefit and risk analysis
Corporate governance ~ covers board independence, audit committee and disclosures
Risk management ~ identifies, assesses, treats and monitors risks
Internal financial control ~ is the director's responsibility under the Companies Act
Business valuation ~ links finance and reporting subjects
Time management ~ in a case study paper means allotting marks per minute
Multiple choice questions ~ in the IBS paper should all be attempted
Presentation ~ with headings and short paragraphs earns better marks
Quote ~ the section number only when sure of it
Assumptions ~ should be stated clearly where the facts are silent''')
