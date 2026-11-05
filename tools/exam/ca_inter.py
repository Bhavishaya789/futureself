from ex import *
import json
X='CA Intermediate'
def sj(sub,id,title,tag,syl):
    d='/home/claude/fsw/Content/CA-Intermediate/'+sub; os.makedirs(d,exist_ok=True)
    json.dump({"title":title,"semester":0,"credits":0,"icon":"book","color":"#F59E0B","tagline":tag,"channels":["CA Wallah","Aaditya Jain","CA Inter"],"syllabus":syl,"id":id},open(d+'/subject.json','w'),indent=1)
def c(p,t,intro,formulas,nums,facts,**k): put('CA-Intermediate/'+p+'.md',t,X,intro,formulas,nums,facts,**k)
sj('Advanced-Accounting','cainter-accounting','Advanced Accounting','Paper 1: Accounting Standards, company accounts, amalgamation, branch and departmental accounts.',['Accounting Standards','Company accounts','Amalgamation','Branch accounts','Departmental accounts'])
sj('Corporate-and-Other-Laws','cainter-laws','Corporate and Other Laws','Paper 2: Companies Act 2013, Negotiable Instruments Act, General Clauses Act and Interpretation of Statutes.',['Companies Act','Negotiable Instruments','General Clauses','Interpretation of statutes'])
sj('Taxation','cainter-tax','Taxation (Income Tax and GST)','Paper 3: Income tax heads of income and GST fundamentals.',['Income Tax','Salary','House property','Business income','GST'])
sj('Cost-and-Management-Accounting','cainter-cost','Cost and Management Accounting','Paper 4: cost concepts, material, labour, overhead, job and process costing, marginal costing and standard costing.',['Material','Labour','Overheads','Process costing','Marginal costing','Standard costing'])
sj('Auditing-and-Ethics','cainter-audit','Auditing and Ethics','Paper 5: audit planning, evidence, internal control, company audit and professional ethics.',['Audit basics','Evidence','Internal control','Company audit','Ethics'])
sj('Financial-Management-and-SM','cainter-fmsm','Financial Management and Strategic Management','Paper 6: ratio analysis, cost of capital, leverage, capital budgeting and strategic management.',['Ratio analysis','Cost of capital','Leverage','Capital budgeting','Strategic management'])
A='Advanced-Accounting/Unit-'
c(A+'1-Standards/01-Accounting-Standards','Accounting Standards and Ind AS','Key Accounting Standards frequently tested in Intermediate.','',(),'''#as
AS 1 ~ requires disclosure of significant accounting policies
AS 2 ~ values inventory at the lower of cost and net realisable value
AS 3 ~ governs the cash flow statement
AS 4 ~ deals with events occurring after the balance sheet date
AS 5 ~ deals with net profit or loss for the period and prior period items
AS 7 ~ deals with construction contracts
AS 9 ~ deals with revenue recognition
AS 10 ~ deals with property, plant and equipment
AS 11 ~ deals with effects of changes in foreign exchange rates
AS 12 ~ deals with accounting for government grants
AS 13 ~ deals with accounting for investments
AS 14 ~ deals with accounting for amalgamations
AS 15 ~ deals with employee benefits
AS 16 ~ deals with borrowing costs
AS 17 ~ deals with segment reporting
AS 18 ~ deals with related party disclosures
AS 19 ~ deals with leases
AS 20 ~ deals with earnings per share
AS 22 ~ deals with taxes on income
AS 26 ~ deals with intangible assets
AS 29 ~ deals with provisions, contingent liabilities and contingent assets
Ind AS 115 ~ deals with revenue from contracts with customers''')
c(A+'2-Company-Accounts/01-Share-Capital-and-Buyback','Share Capital, Redemption and Buy-back','Redemption of preference shares, bonus issue and buy-back of shares.',
'Buy-back limit = 25% of paid up capital and free reserves\nCapital redemption reserve = Nominal value redeemed from profits\nBonus shares = existing shares × ratio',
[N('Maximum buy-back = 25% of (paid up capital + free reserves)','Limit','₹ lakh','C:capital:100:500:i,R:reserves:100:900:i',lambda c_,r:(c_+r)*0.25,2),N('Bonus shares = shares × bonus ratio (n for every m)','Bonus','shares','S:shares:1000:50000:i,n:n:1:3:i,m:m:2:5:i',lambda s,n,m:s*n/m,0),N('CRR required = nominal value redeemed out of profits','CRR','₹','N:nominal:100000:900000:i',lambda n:n,0),N('Premium on redemption = shares × premium','Premium','₹','S:shares:1000:20000:i,P:premium:5:30:i',lambda s,p:s*p,0)],
'''#shares
Buy-back ~ cannot exceed 25 percent of paid up capital and free reserves
Debt equity ratio after buy-back ~ must not exceed 2:1
Capital redemption reserve ~ is created on redemption of preference shares out of profits
Bonus shares ~ can be issued out of free reserves and securities premium
Sweat equity shares ~ are issued to employees for know-how
Employee stock option ~ is a right to buy shares at a fixed price
Section 52 ~ regulates application of securities premium
Preference shares ~ must be redeemed within 20 years in specified cases
Buy-back ~ must be completed within one year of the special resolution
Securities bought back ~ must be extinguished within seven days''')
c(A+'2-Company-Accounts/02-Final-Accounts-and-Cash-Flow','Final Accounts of Companies and Cash Flow Statement','Schedule III format, managerial remuneration and cash flow under AS 3.',
'Net cash from operating = Net profit before tax + non cash items ± working capital changes\nNet change = Operating + Investing + Financing',
[N('Cash from operations (indirect) = PBT + Dep + Interest - Increase in working capital','CFO','₹ lakh','P:PBT:100:500:i,D:dep:10:90:i,I:interest:5:50:i,W:ΔWC:5:80:i',lambda p,d,i,w:p+d+i-w,0),N('Net increase in cash = CFO + CFI + CFF','Net','₹ lakh','a:CFO:100:400:i,b:CFI:-300:-50:i,c:CFF:-100:100:i',lambda a,b,c_:a+b+c_,0),N('Maximum managerial remuneration to directors = 11% of net profit','Limit','₹ lakh','P:profit:100:900:i',lambda p:p*0.11,2),N('Free cash flow = CFO - Capex','FCF','₹ lakh','a:CFO:100:500:i,b:capex:20:99:i',lambda a,b:a-b,0)],
'''#fa
Schedule III ~ gives the format of the company balance sheet
Division I ~ of Schedule III applies to companies following Indian GAAP
Division II ~ of Schedule III applies to Ind AS companies
Cash flow statement ~ classifies cash flows into operating, investing and financing
Dividend paid ~ is a financing activity
Interest received ~ is an investing activity for non-financial companies
Depreciation ~ is added back in the indirect method
Cash equivalents ~ are short term investments with maturity up to three months
Managerial remuneration ~ is limited to 11 percent of net profit under section 197
Proposed dividend ~ is no longer a liability under AS 4 until declared''')
c(A+'3-Amalgamation-Branch/01-Amalgamation-and-Reconstruction','Amalgamation and Internal Reconstruction (AS 14)','Purchase method and pooling of interests, calculation of purchase consideration.',
'Purchase consideration = Net payment to shareholders\nNet assets method = Assets taken - Liabilities taken\nGoodwill = Consideration - Net assets',
[N('Purchase consideration (net assets method) = Assets - Liabilities','PC','₹ lakh','A:assets:200:900:i,L:liabilities:50:199:i',lambda a,l:a-l,0),N('Goodwill = Consideration - Net assets','Goodwill','₹ lakh','C:consideration:200:900:i,N:net assets:100:199:i',lambda c_,n:c_-n,0),N('Share exchange: new shares = old shares × ratio','Shares','shares','S:old:1000:20000:i,r:ratio:1:3:i',lambda s,r:s*r,0),N('Capital reserve = Net assets - Consideration','Reserve','₹ lakh','N:net assets:300:900:i,C:consideration:100:299:i',lambda n,c_:n-c_,0)],
'''#amal
Amalgamation in the nature of merger ~ uses the pooling of interests method
Amalgamation in the nature of purchase ~ uses the purchase method
Purchase consideration ~ is the amount paid to the transferor shareholders
Statutory reserves ~ are preserved in purchase method
Goodwill on amalgamation ~ is amortised over five years
Intercompany balances ~ are cancelled on amalgamation
Ind AS 103 ~ requires the acquisition method for business combinations
Internal reconstruction ~ reduces share capital without winding up
Capital reduction account ~ is used to write off losses''')
c(A+'3-Amalgamation-Branch/02-Branch-and-Departmental','Branch and Departmental Accounts','Dependent branches, independent branches, stock and debtors method and inter-departmental transfers.',
'Branch profit = Sales - Cost of goods - Expenses\nLoading = Cost × Loading%\nUnrealised profit = Closing stock × loading/(100 + loading)',
[N('Invoice price with loading = cost × (1 + loading%)','Invoice','₹','C:cost:10000:90000:i,L:loading %:10:50:i',lambda c_,l:c_*(1+l/100),0),N('Unrealised profit in closing stock','UP','₹','S:stock at invoice:10000:90000:i,L:loading %:10:50:i',lambda s,l:s*l/(100+l),0),N('Gross profit % on sales = GP/Sales','GP%','%','G:GP:10000:50000:i,S:sales:60000:200000:i',lambda g,s:g/s*100,2),N('Normal loss % ... stock shortage value = quantity × rate','Loss','₹','Q:units:5:80:i,R:rate:20:200:i',lambda q,r:q*r,0)],
'''#br
Dependent branch ~ has accounts maintained by the head office
Independent branch ~ maintains its own books of accounts
Debtors method ~ prepares a branch account showing profit directly
Stock and debtors system ~ prepares many accounts to find the branch profit
Goods sent to branch account ~ is closed to the head office trading account
Foreign branch ~ is translated under AS 11 or Ind AS 21
Departmental accounts ~ show results of each department separately
Inter-departmental transfers ~ at cost or at market price need adjustment of unrealised profit
Common expenses ~ are apportioned on a suitable basis such as sales or area''')
L='Corporate-and-Other-Laws/Unit-'
c(L+'1-Companies-Act/01-Incorporation-and-Capital','Companies Act 2013: Incorporation, Prospectus and Share Capital','Incorporation, promoter liability, prospectus and allotment.','',(),'''#inc
Promoter ~ is a person named in the prospectus or who controls the company
Certificate of incorporation ~ is issued by the Registrar of Companies
Pre-incorporation contract ~ cannot be ratified by the company
Misstatement in prospectus ~ attracts civil and criminal liability under sections 34 and 35
Shelf prospectus ~ is filed by financial institutions for multiple issues
Red herring prospectus ~ does not contain full particulars of price and quantity
Minimum subscription ~ is 90 percent of the issue size under SEBI rules
Private placement ~ cannot exceed 200 persons in a financial year
Sweat equity ~ requires a special resolution
Bonus shares ~ cannot be issued out of revaluation reserve
Share certificate ~ is prima facie evidence of title
Transfer of shares ~ is by a duly stamped instrument of transfer
Transmission of shares ~ occurs on death or insolvency
Dematerialisation ~ is governed by the Depositories Act 1996
Buy-back ~ is governed by section 68
Shares with differential voting rights ~ are permitted with conditions
Allotment of shares ~ cannot be made below par value except sweat equity or discount rules''')
c(L+'1-Companies-Act/02-Directors-Meetings-Dividends','Directors, Meetings, Dividend and Audit under Companies Act','Appointment, powers, meetings, dividend and company audit provisions.','',(),'''#dir
Director identification number ~ is mandatory under section 153
Maximum directorships ~ are 20 companies and 10 public companies
Independent director ~ term is up to two terms of five years
Board meetings ~ must be at least four per year with a gap of not more than 120 days
Quorum for a board meeting ~ is one third of total strength or two directors, whichever is higher
Annual general meeting ~ must be held within six months of the financial year end
Gap between two AGMs ~ must not exceed 15 months
Notice for general meeting ~ is 21 clear days
Ordinary resolution ~ needs a simple majority
Special resolution ~ needs at least 75 percent votes cast
Dividend ~ can be paid out of profits of the year or free reserves
Unpaid dividend ~ goes to the unpaid dividend account within seven days
Investor Education and Protection Fund ~ receives funds unclaimed for seven years
Auditor ~ is appointed for five years in a company
Audit committee ~ is required for listed and specified public companies
Related party transactions ~ need board or shareholder approval
Managerial remuneration ~ is capped at 11 percent of net profit
Company secretary ~ is a key managerial personnel
Key managerial personnel ~ include CEO, CFO and company secretary''')
c(L+'2-Other-Laws/01-Negotiable-Instruments','Negotiable Instruments Act, 1881 and General Clauses Act','Promissory note, bill of exchange, cheque, dishonour and general clauses.','',(),'''#ni
Promissory note ~ is an unconditional written promise to pay with two parties
Bill of exchange ~ is an order to pay and has three parties
Cheque ~ is a bill of exchange drawn on a banker and payable on demand
Holder in due course ~ takes the instrument for value, in good faith, before maturity
Crossing of a cheque ~ makes it payable only through a bank
Dishonour of cheque ~ attracts section 138
Notice of dishonour ~ must be given within 30 days of receipt of the bank memo
Drawer ~ has 15 days to pay after receiving the notice
Complaint under section 138 ~ must be filed within one month of the expiry of 15 days
Penalty for cheque dishonour ~ can be imprisonment up to two years or fine up to twice the amount
Negotiation ~ is by delivery for bearer instruments and endorsement plus delivery for order instruments
Days of grace ~ are three days for time instruments
Presentment for payment ~ must be made at the due date
General Clauses Act ~ was enacted in 1897
Person under General Clauses Act ~ includes a company and an association
Month ~ means a month according to the British calendar
Rule of literal construction ~ gives the ordinary meaning of words
Golden rule ~ modifies the literal meaning to avoid absurdity
Mischief rule ~ was established in Heydon's case''')
T='Taxation/Unit-'
c(T+'1-Income-Tax/01-Salary-and-House-Property','Income Tax: Salaries and Income from House Property','Taxable salary, allowances, perquisites, annual value and deductions.',
'Gross salary = Basic + DA + allowances + perquisites\nNet annual value = Gross annual value - municipal tax\nHP income = NAV - 30% standard deduction - interest',
[N('Net annual value = Gross annual value - municipal tax','NAV','₹','G:GAV:100000:900000:i,M:tax:5000:50000:i',lambda g,m:g-m,0),N('Standard deduction 30% of NAV','SD','₹','N:NAV:100000:900000:i',lambda n:n*0.3,0),N('Income from house property = NAV - 30% NAV - interest','Income','₹','N:NAV:200000:900000:i,I:interest:10000:100000:i',lambda n,i:n*0.7-i,0),N('HRA exemption = least of actual HRA, rent - 10% salary, 50% of salary (metro)','Exempt','₹','H:HRA:100000:300000:i,R:rent:150000:400000:i,S:salary:300000:900000:i',lambda h,r,s:min(h,r-0.1*s,0.5*s),0)],
'''#sal
Salary ~ is taxable on due or receipt basis whichever is earlier
Standard deduction from salary ~ is available under the old regime
Leave travel concession ~ is exempt for two journeys in a block of four years
Gratuity ~ exemption for non-government employees is the least of 15 days salary per year, actual or ₹20 lakh
Commuted pension ~ is exempt in part for government employees fully
Perquisite for rent-free accommodation ~ depends on population of the city
Employer's contribution to provident fund ~ is exempt up to 12 percent of salary
Annual value of self occupied house ~ is nil
Interest on housing loan for self occupied property ~ is limited to ₹2 lakh
Pre-construction interest ~ is allowed in five equal instalments
Unrealised rent ~ is deducted in computing gross annual value in specified cases
Composite rent ~ is split between house property and other heads''')
c(T+'1-Income-Tax/02-Business-Capital-Gains-Deductions','Business Income, Capital Gains and Chapter VI-A','Profits and gains of business, depreciation, capital gains and deductions.',
'STCG = Sale price - Cost - Expenses\nLTCG = Sale price - Indexed cost - Expenses\nIndexed cost = Cost × CII sale year/CII purchase year',
[N('Short term capital gain = Sale - Cost - Expenses','STCG','₹','S:sale:200000:900000:i,C:cost:100000:199999:i,E:expenses:1000:10000:i',lambda s,c_,e:s-c_-e,0),N('Indexed cost of acquisition','ICOA','₹','C:cost:100000:500000:i,a:CII sale:300:360:i,b:CII purchase:150:299:i',lambda c_,a,b:c_*a/b,0),N('Depreciation on block at rate r%','Dep','₹','B:WDV:100000:900000:i,r:rate %:10:40:i',lambda b,r:b*r/100,0),N('Deduction under 80C limited to ₹1.5 lakh','80C','₹','X:invested:50000:200000:i',lambda x:min(x,150000),0)],
'''#bus
Income from business ~ is taxed under the head profits and gains of business or profession
Section 43B ~ allows certain expenses on payment basis
Depreciation ~ is calculated on the block of assets on the written down value
Presumptive taxation under section 44AD ~ is for small businesses with turnover up to a limit
Long term capital asset ~ is held for more than 24 months for immovable property
Short term capital gain on listed shares ~ is taxed at a special rate under section 111A
Section 54 ~ gives exemption on reinvesting house property gains in a residential house
Section 54EC ~ gives exemption on investing in specified bonds
Deduction 80D ~ is for medical insurance premium
Deduction 80G ~ is for donations
Deduction 80TTA ~ is for savings bank interest
Set off of loss ~ from speculation can be set off only against speculation profit
Carry forward of business loss ~ is allowed for eight assessment years''')
c(T+'2-GST/01-GST-Fundamentals','GST: Supply, Time and Value, Input Tax Credit','Levy, composition, place of supply, input tax credit and registration.',
'GST payable = Output tax - Input tax credit\nValue of supply = Transaction value\nCGST = SGST = Rate/2 on intra-state supply',
[N('GST on supply = value × rate','GST','₹','V:value:10000:900000:i,r:rate %:5:28:i',lambda v,r:v*r/100,0),N('Net GST payable = output - ITC','Net','₹','O:output:10000:90000:i,I:ITC:1000:9999:i',lambda o,i:o-i,0),N('CGST on intra-state supply = value × rate/2','CGST','₹','V:value:10000:900000:i,r:rate %:5:28:i',lambda v,r:v*r/200,0),N('Invoice value = value + GST','Invoice','₹','V:value:10000:900000:i,r:rate %:5:28:i',lambda v,r:v*(1+r/100),0)],
'''#gst
GST ~ was introduced by the 101st Constitutional Amendment
CGST ~ is levied by the Centre on intra-state supply
SGST ~ is levied by the state on intra-state supply
IGST ~ is levied on inter-state supply and imports
GST Council ~ is chaired by the Union Finance Minister
Aggregate turnover limit for registration ~ is ₹40 lakh for goods in most states
Composition scheme ~ is available to small taxpayers
Input tax credit ~ cannot be claimed on blocked credits under section 17(5)
Time of supply of goods ~ is the earliest of invoice date or payment date
Place of supply ~ for goods moved is the place where movement terminates
Reverse charge ~ makes the recipient liable to pay GST
GSTR-1 ~ is the return of outward supplies
GSTR-3B ~ is the summary return with payment of tax
E-way bill ~ is needed for movement of goods above ₹50000
Exports ~ are zero rated supplies
Alcohol for human consumption ~ is outside GST''')
C='Cost-and-Management-Accounting/Unit-'
c(C+'1-Material-Labour/01-Material-and-EOQ','Material Cost, EOQ and Inventory Control','EOQ, reorder level, stock levels and pricing of issues.',
'EOQ = √(2AO/C)\nReorder level = Max usage × Max lead time\nMax level = ROL + ROQ - (Min usage × Min lead time)\nMin level = ROL - (Normal usage × Normal lead time)',
[N('EOQ = √(2AO/C)','EOQ','units','A:annual demand:1000:20000:i,O:order cost:50:500:i,C:carrying cost:2:20:i',lambda A,O,C:math.sqrt(2*A*O/C),1),N('Reorder level = daily usage × lead time','ROL','units','U:daily:20:200:i,L:lead days:5:30:i',lambda u,l:u*l,0),N('Total ordering cost = (A/Q) × O','Cost','₹','A:annual:1000:20000:i,Q:order qty:100:500:i,O:cost:50:500:i',lambda A,Q,O:A/Q*O,2),N('Average stock = (Max + Min)/2','Avg','units','M:max:500:1500:i,m:min:100:499:i',lambda M,m:(M+m)/2,1),N('Inventory turnover = consumption/average stock','Turnover','times','C:consumption:10000:90000:i,A:average:1000:9999:i',lambda c_,a:c_/a,2)],
'''#mat
ABC analysis ~ classifies inventory by value
FIFO ~ issues materials at the cost of the oldest lot
LIFO ~ issues materials at the cost of the latest lot
Weighted average ~ recalculates the price after every receipt
Bin card ~ records quantity in the store only
Stores ledger ~ records both quantity and value
VED analysis ~ classifies items by criticality
Perpetual inventory ~ involves continuous stock verification
Danger level ~ is below the minimum level
Just in time ~ reduces inventory holding by timely delivery''')
c(C+'1-Material-Labour/02-Labour-and-Overheads','Employee Cost and Overheads','Wage methods, labour turnover, overhead absorption and apportionment.',
'Time rate wage = hours × rate\nHalsey premium = 50% of time saved × rate\nOverhead rate = Overhead/Base\nUnder or over absorption = Actual - Absorbed',
[N('Halsey bonus = 50% × time saved × rate','Bonus','₹','S:time saved:2:20:i,R:rate:20:100:i',lambda s,r:0.5*s*r,0),N('Piece rate wage = pieces × rate','Wage','₹','P:pieces:50:500:i,R:rate:2:20:i',lambda p,r:p*r,0),N('Overhead absorption rate = overhead/hours','OAR','₹/hr','O:overhead:50000:500000:i,H:hours:1000:9000:i',lambda o,h:o/h,2),N('Under absorption = Actual - Absorbed','Under','₹','A:actual:50000:500000:i,B:absorbed:20000:49999:i',lambda a,b:a-b,0),N('Labour turnover = separations/average workers × 100','LTO','%','S:separations:2:50:i,W:workers:100:900:i',lambda s,w:s/w*100,2)],
'''#lab
Idle time ~ is the time for which wages are paid but no work is done
Overtime premium ~ is generally charged to overheads
Rowan plan ~ gives a bonus in proportion to time saved to time allowed
Taylor's differential piece rate ~ gives higher rates for efficient workers
Primary distribution of overheads ~ allocates and apportions to departments
Secondary distribution ~ reapportions service department costs
Direct method ~ ignores reciprocal services
Repeated distribution method ~ and simultaneous equations handle reciprocal services
Over absorbed overhead ~ is credited to the costing profit and loss account
Machine hour rate ~ is used in machine-intensive departments''')
c(C+'2-Methods/01-Job-Batch-Process-Costing','Job, Batch, Process and Service Costing','Cost sheets, equivalent units, normal and abnormal loss, and joint and by-products.',
'Equivalent units = Units × % completion\nCost per EU = Cost / EU\nNormal loss rate = Normal loss/Input\nAbnormal loss cost = AL units × cost per unit',
[N('Equivalent units = units completed + WIP × % completion','EU','units','C:completed:500:5000:i,W:WIP:100:900:i,p:completion %:20:90:i',lambda c_,w,p:c_+w*p/100,1),N('Cost per equivalent unit','Cost','₹','T:cost:50000:900000:i,E:EU:500:5000:i',lambda t,e:t/e,2),N('Normal loss units = input × normal loss %','NL','units','I:input:1000:10000:i,p:loss %:2:10:i',lambda i,p:i*p/100,0),N('Cost per unit of good output = (cost - scrap)/(input - normal loss)','CPU','₹','C:cost:100000:900000:i,S:scrap:1000:9999:i,I:input:1000:9000:i,N:normal loss:50:500:i',lambda c_,s,i,n:(c_-s)/(i-n),2)],
'''#pc
Job costing ~ is used where each job is distinct
Batch costing ~ treats a batch as a job
Process costing ~ is used for continuous mass production
Normal loss ~ is unavoidable and absorbed by good units
Abnormal loss ~ is charged to the costing profit and loss account
Abnormal gain ~ is credited to the costing profit and loss account
Joint products ~ are of comparable importance and are produced together
By-product ~ income is credited to the process or the profit and loss account
Split-off point ~ is where joint products become separately identifiable
Operating costing ~ is used for transport and service industries''')
c(C+'3-Marginal-Standard/01-Marginal-Costing-and-CVP','Marginal Costing and CVP Analysis','Contribution, break-even point, margin of safety and decisions.',
'Contribution = Sales - Variable cost\nP/V ratio = Contribution/Sales × 100\nBEP (units) = Fixed cost/Contribution per unit\nMargin of safety = Actual sales - Break-even sales',
[N('Contribution per unit = Selling price - Variable cost','C','₹','S:price:50:200:i,V:variable cost:10:49:i',lambda s,v:s-v,0),N('P/V ratio = Contribution/Sales × 100','P/V','%','C:contribution:20000:90000:i,S:sales:100000:300000:i',lambda c_,s:c_/s*100,2),N('Break-even point in units = Fixed cost/Contribution per unit','BEP','units','F:fixed:50000:500000:i,C:contribution:10:100:i',lambda f,c_:f/c_,0),N('Break-even sales = Fixed cost/PV ratio','BES','₹','F:fixed:50000:500000:i,p:PV %:20:60:i',lambda f,p:f/(p/100),0),N('Margin of safety % = (Sales - BES)/Sales × 100','MOS','%','S:sales:300000:900000:i,B:BES:100000:299999:i',lambda s,b:(s-b)/s*100,2),N('Sales for target profit = (Fixed + Target)/PV ratio','Sales','₹','F:fixed:50000:300000:i,T:target:10000:90000:i,p:PV %:20:60:i',lambda f,t,p:(f+t)/(p/100),0)],
'''#cvp
Marginal cost ~ is the variable cost of one additional unit
Contribution ~ equals fixed cost at the break-even point
Margin of safety ~ is sales above break-even
Angle of incidence ~ shows profitability at the break-even point
Key factor ~ is the scarce resource that limits output
Make or buy decision ~ compares marginal cost with the purchase price
Shut down point ~ is reached when contribution cannot cover specific fixed costs
Absorption costing ~ includes fixed manufacturing overhead in inventory valuation
Marginal costing profit ~ differs from absorption costing profit due to fixed cost in stock''')
c(C+'3-Marginal-Standard/02-Standard-Costing-and-Budgets','Standard Costing, Variance Analysis and Budgetary Control','Material, labour and overhead variances and budget types.',
'Material cost variance = (SQ × SP) - (AQ × AP)\nPrice variance = AQ × (SP - AP)\nUsage variance = SP × (SQ - AQ)\nEfficiency variance = SR × (SH - AH)',
[N('Material price variance = AQ × (SP - AP)','MPV','₹','Q:actual qty:100:900:i,S:std price:10:50:i,A:actual price:10:60:i',lambda q,s,a:q*(s-a),0),N('Material usage variance = SP × (SQ - AQ)','MUV','₹','S:std qty:100:900:i,A:actual qty:100:900:i,P:std price:10:50:i',lambda s,a,p:p*(s-a),0),N('Labour rate variance = AH × (SR - AR)','LRV','₹','H:actual hours:100:900:i,S:std rate:10:60:i,A:actual rate:10:70:i',lambda h,s,a:h*(s-a),0),N('Labour efficiency variance = SR × (SH - AH)','LEV','₹','R:std rate:10:60:i,S:std hours:100:900:i,A:actual hours:100:900:i',lambda r,s,a:r*(s-a),0),N('Flexible budget cost = fixed + variable × activity','Cost','₹','F:fixed:10000:90000:i,V:variable/unit:5:50:i,A:units:100:900:i',lambda f,v,a:f+v*a,0)],
'''#std
Favourable variance ~ increases profit
Adverse variance ~ reduces profit
Material cost variance ~ equals price variance plus usage variance
Labour cost variance ~ equals rate variance plus efficiency variance
Idle time variance ~ is part of the labour efficiency variance family
Fixed overhead volume variance ~ equals capacity plus efficiency variance
Zero based budgeting ~ justifies every item from scratch
Flexible budget ~ changes with the level of activity
Master budget ~ combines all functional budgets
Principal budget factor ~ is the limiting factor in budgeting''')
U='Auditing-and-Ethics/Unit-'
c(U+'1-Audit/01-Nature-and-Planning','Nature, Objectives and Planning of Audit','Audit basics, standards, risk assessment and audit planning.','',(),'''#aud
Audit ~ is an independent examination to express an opinion on financial statements
Standards on Auditing ~ are issued by ICAI
Audit risk ~ equals inherent risk times control risk times detection risk
Materiality ~ is the amount that could influence users of financial statements
Audit planning ~ is governed by SA 300
Audit programme ~ lists the procedures to be performed
Audit working papers ~ are the property of the auditor
Engagement letter ~ is governed by SA 210
True and fair view ~ is the standard for financial statements
Internal check ~ is a system of cross checking within the accounting routine
Internal audit ~ is performed by or for the management
Statutory audit ~ is required under the Companies Act
Detection risk ~ is controlled by the auditor through substantive procedures
Fraud ~ is an intentional act, error is unintentional
Management representation ~ is documented under SA 580
Audit sampling ~ is covered by SA 530''')
c(U+'1-Audit/02-Evidence-Vouching-Company-Audit','Audit Evidence, Vouching and Company Audit','Evidence, vouching, verification and company auditor provisions.','',(),'''#ev
Audit evidence ~ is information used by the auditor to support the opinion
Vouching ~ is the examination of documentary evidence of a transaction
Verification ~ is confirmation of the existence, ownership and valuation of assets
Cut-off procedures ~ test whether transactions are in the correct period
Substantive procedures ~ include tests of details and analytical procedures
Test of control ~ evaluates the operation of internal controls
External confirmation ~ gives reliable evidence for debtors
Auditor of a company ~ is appointed by members at the AGM
Auditor disqualification ~ includes holding securities beyond limits
Auditor's report ~ is governed by SA 700
Modified opinion ~ includes qualified, adverse and disclaimer
Key audit matters ~ are communicated for listed entities under SA 701
Emphasis of matter ~ draws attention to a disclosed matter
CARO 2020 ~ requires matters to be reported by the auditor
Auditor's lien ~ is the right to retain documents for unpaid fees in limited cases
Code of Ethics ~ is issued by ICAI
Confidentiality ~ is a fundamental ethical principle
Independence ~ is both independence of mind and in appearance''')
F='Financial-Management-and-SM/Unit-'
c(F+'1-FM/01-Ratio-Analysis-Leverage','Ratio Analysis and Leverage','Liquidity, solvency, profitability and efficiency ratios; operating and financial leverage.',
'Current ratio = CA/CL\nQuick ratio = (CA - Inventory)/CL\nDebt equity = Debt/Equity\nDOL = Contribution/EBIT\nDFL = EBIT/EBT\nDCL = DOL × DFL',
[N('Current ratio = CA/CL','CR','','a:CA:100000:500000:i,b:CL:50000:99999:i',lambda a,b:a/b,2),N('Quick ratio = (CA - Inventory)/CL','QR','','a:CA:200000:500000:i,i:inventory:20000:99999:i,b:CL:100000:199999:i',lambda a,i,b:(a-i)/b,2),N('Debt equity ratio','D/E','','d:debt:100000:500000:i,e:equity:100000:900000:i',lambda d,e:d/e,2),N('Degree of operating leverage = Contribution/EBIT','DOL','','c:contribution:100000:500000:i,e:EBIT:50000:99999:i',lambda c_,e:c_/e,2),N('Degree of financial leverage = EBIT/EBT','DFL','','e:EBIT:100000:500000:i,t:EBT:50000:99999:i',lambda e,t:e/t,2),N('Interest coverage = EBIT/Interest','ICR','','e:EBIT:100000:500000:i,i:interest:10000:99999:i',lambda e,i:e/i,2),N('Return on equity = PAT/Equity × 100','ROE','%','p:PAT:20000:200000:i,e:equity:100000:900000:i',lambda p,e:p/e*100,2)],
'''#ratio
Ideal current ratio ~ is 2:1
Ideal quick ratio ~ is 1:1
Debtors turnover ~ equals credit sales divided by average debtors
Operating leverage ~ arises from fixed operating costs
Financial leverage ~ arises from fixed financial charges
Combined leverage ~ is the product of operating and financial leverage
Du Pont analysis ~ breaks ROE into margin, turnover and leverage''')
c(F+'1-FM/02-Cost-of-Capital-Capital-Budgeting','Cost of Capital and Capital Budgeting','Kd, Ke, WACC, NPV, IRR, payback and profitability index.',
'WACC = Σ w × cost\nKe = D1/P0 + g\nKe (CAPM) = Rf + β(Rm - Rf)\nKd after tax = Kd(1 - t)\nNPV = PV of inflows - Outflow',
[N('Cost of debt after tax = i(1 - t)','Kd','%','i:interest %:6:14:i,t:tax %:20:35:i',lambda i,t:i*(1-t/100),2),N('Cost of equity (Gordon) = D1/P0 + g','Ke','%','D:D1:2:10:i,P:P0:50:200:i,g:growth %:3:9:i',lambda d,p,g:d/p*100+g,2),N('CAPM Ke = Rf + β(Rm - Rf)','Ke','%','r:Rf:4:8:i,b:beta:0.6:1.6,m:Rm:10:16:i',lambda r,b,m:r+b*(m-r),2),N('WACC with weights equity w and debt (1 - w)','WACC','%','w:equity %:40:80:i,e:Ke:10:18:i,d:Kd:5:10:i',lambda w,e,d:w/100*e+(1-w/100)*d,2),N('Payback period = Investment/Annual cash inflow','Payback','years','I:investment:100000:900000:i,C:inflow:20000:99999:i',lambda i,c_:i/c_,2),N('NPV of annuity inflow = A × annuity factor - investment','NPV','₹','A:annual:20000:90000:i,r:rate %:8:14:i,n:years:3:8:i,I:investment:100000:300000:i',lambda a,r,n,i:a*(1-(1+r/100)**-n)/(r/100)-i,0),N('Profitability index = PV of inflows/Investment','PI','','p:PV:100000:500000:i,i:investment:80000:300000:i',lambda p,i:p/i,3)],
'''#wacc
Cost of retained earnings ~ equals the cost of equity ignoring floatation cost
Interest ~ gives a tax shield and lowers cost of debt
Net present value rule ~ accepts projects with positive NPV
Internal rate of return ~ is the rate at which NPV is zero
Discounted payback ~ considers time value of money
Mutually exclusive projects ~ may rank differently by NPV and IRR
Capital rationing ~ arises when funds are limited
Modified IRR ~ assumes reinvestment at the cost of capital
Optimal capital structure ~ minimises WACC and maximises firm value
Modigliani Miller ~ without taxes says capital structure is irrelevant''')
c(F+'2-SM/01-Strategic-Management','Strategic Management','Strategic analysis, SWOT, Porter models, BCG matrix and strategy levels.','',(),'''#sm
Strategic management ~ is the set of decisions that determine long run performance
Vision ~ describes what the organisation wants to become
Mission ~ states the purpose of the organisation
SWOT ~ analyses strengths, weaknesses, opportunities and threats
Porter's five forces ~ analyses industry competition
Generic strategies ~ are cost leadership, differentiation and focus
BCG matrix ~ classifies businesses as stars, cash cows, question marks and dogs
Ansoff matrix ~ combines products and markets
Corporate level strategy ~ decides the portfolio of businesses
Business level strategy ~ decides how to compete in a market
Functional level strategy ~ supports the business strategy
Value chain ~ was proposed by Michael Porter
PESTEL ~ analyses political, economic, social, technological, environmental and legal factors
Balanced scorecard ~ measures financial, customer, internal process and learning perspectives
Stability strategy ~ maintains the current position
Expansion strategy ~ includes diversification and integration
Retrenchment strategy ~ includes turnaround and divestment
Core competence ~ is a skill that is rare, valuable and hard to imitate''')
