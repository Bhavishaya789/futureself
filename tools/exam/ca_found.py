from ex import *
import json
X='CA Foundation'
def sj(sub,id,title,tag,syl,icon='book',color='#F59E0B'):
    d='/home/claude/fsw/Content/CA-Foundation/'+sub; os.makedirs(d,exist_ok=True)
    json.dump({"title":title,"semester":0,"credits":0,"icon":icon,"color":color,"tagline":tag,"channels":["CA Wallah","Aaditya Jain","CA Foundation"],"syllabus":syl,"id":id},open(d+'/subject.json','w'),indent=1)
def c(p,t,intro,formulas,nums,facts,**k): put('CA-Foundation/'+p+'.md',t,X,intro,formulas,nums,facts,**k)
def comb(n,r): return math.factorial(n)//(math.factorial(r)*math.factorial(n-r))
sj('Accounting','cafound-accounting','Principles and Practice of Accounting','Paper 1: accounting concepts, depreciation, rectification, bank reconciliation, final accounts and partnership.',['Accounting theory','Journal and ledger','Depreciation','BRS and rectification','Final accounts','Partnership','Company accounts'])
sj('Business-Laws','cafound-laws','Business Laws','Paper 2: Indian Contract Act, Sale of Goods Act, LLP Act and Partnership Act.',['Contract Act','Sale of Goods','Partnership','LLP','Companies Act basics'])
sj('Quantitative-Aptitude','cafound-quant','Quantitative Aptitude','Paper 3: business mathematics, logical reasoning and statistics.',['Ratio and proportion','Interest','Series','Logical reasoning','Statistics','Probability'])
sj('Business-Economics','cafound-economics','Business Economics and Business and Commercial Knowledge','Paper 4: microeconomics, market forms, and business knowledge.',['Demand and supply','Production and cost','Markets','National income','Business environment'])
A='Accounting/Unit-'
c(A+'1-Basics/01-Accounting-Concepts','Accounting Theory: Concepts, Conventions and Standards','The accounting framework rests on concepts, conventions and standards.','',(),'''#concept
Business entity concept ~ separates the owner from the business
Going concern concept ~ assumes the business will continue
Money measurement concept ~ records only transactions measurable in money
Accrual concept ~ records revenues and expenses when earned or incurred
Matching concept ~ matches expenses with the revenues of the same period
Dual aspect concept ~ means every transaction has two effects
Cost concept ~ records assets at their acquisition cost
Conservatism ~ means providing for all probable losses and ignoring unrealised profits
Consistency ~ requires the same method from year to year
Materiality ~ allows ignoring insignificant items
Full disclosure ~ requires reporting all significant information
Accounting equation ~ states assets equal liabilities plus capital
Capital expenditure ~ gives benefit for more than one year
Revenue expenditure ~ is consumed within the year
Deferred revenue expenditure ~ is spread over several years
Ind AS ~ are Indian Accounting Standards converged with IFRS
AS 1 ~ deals with disclosure of accounting policies
AS 2 ~ deals with valuation of inventories at lower of cost and net realisable value
AS 6 ~ deals with depreciation accounting
Golden rule for real accounts ~ is debit what comes in and credit what goes out
Golden rule for personal accounts ~ is debit the receiver and credit the giver
Golden rule for nominal accounts ~ is debit expenses and losses and credit incomes and gains''')
c(A+'2-Depreciation-and-Inventory/01-Depreciation','Depreciation Accounting','Depreciation spreads the cost of an asset over its useful life by straight line or reducing balance method.',
'SLM depreciation = (Cost - Scrap)/Life | straight line\nWDV depreciation = rate × book value | reducing balance\nBook value = Cost - Accumulated depreciation\nProfit on sale = Sale price - Book value',
[N('SLM annual depreciation','Dep','₹','C:cost:50000:500000:i,S:scrap:0:20000:i,L:life:4:10:i',lambda C,S,L:(C-S)/L,0),N('WDV depreciation in year 1 at rate r%','Dep','₹','C:cost:50000:500000:i,r:rate %:5:30:i',lambda C,r:C*r/100,0),N('Book value after n years under WDV (rate r%)','BV','₹','C:cost:100000:500000:i,r:rate %:5:25:i,n:years:1:5:i',lambda C,r,n:C*(1-r/100)**n,0),N('Profit or loss on sale = Sale - Book value (SLM, L = 10, scrap 0, after n years)','P/L','₹','C:cost:100000:500000:i,n:years:1:8:i,S:sale:20000:60000:i',lambda C,n,S:S-(C-C/10*n),0)],
'''#dep
Straight line method ~ charges equal depreciation every year
Written down value method ~ charges depreciation on the reducing balance
Depreciation ~ is a non-cash expense
Sum of years digits method ~ gives higher depreciation in early years
Annuity method ~ takes interest on the investment into account
Depletion method ~ is used for mines and quarries
Change in method of depreciation ~ is treated as a change in accounting estimate
Salvage value ~ is the estimated value at the end of life''')
c(A+'2-Depreciation-and-Inventory/02-Inventory-and-Final-Accounts','Inventory Valuation and Final Accounts','Closing stock at lower of cost and NRV; trading account, profit and loss account and balance sheet.',
'Gross profit = Sales - COGS\nNet profit = GP + other income - expenses\nCOGS = Opening stock + Purchases - Closing stock\nCapital = Assets - Liabilities',
[N('COGS = Opening + Purchases - Closing','COGS','₹','O:opening:10000:50000:i,P:purchases:100000:400000:i,C:closing:10000:60000:i',lambda o,p,c_:o+p-c_,0),N('Gross profit = Sales - COGS','GP','₹','S:sales:200000:900000:i,C:COGS:100000:199999:i',lambda s,c_:s-c_,0),N('Gross profit % = GP/Sales × 100','GP%','%','G:GP:50000:200000:i,S:sales:300000:900000:i',lambda g,s:g/s*100,2),N('Net realisable value = Selling price - Selling cost','NRV','₹','S:price:500:5000:i,E:cost:50:400:i',lambda s,e:s-e,0)],
'''#fin
Closing stock ~ appears on the credit side of the trading account and as a current asset
Carriage inwards ~ is debited to the trading account
Carriage outwards ~ is debited to the profit and loss account
Outstanding expenses ~ are added to the expense and shown as a liability
Prepaid expenses ~ are deducted from the expense and shown as an asset
Bad debts ~ are written off to the profit and loss account
Provision for doubtful debts ~ is created on closing debtors
Drawings ~ reduce the capital of the proprietor''')
c(A+'3-Rectification-BRS/01-BRS-and-Rectification','Bank Reconciliation and Rectification of Errors','Matching the cash book with the pass book and correcting errors using suspense account.',
'Balance as per cash book + cheques issued not presented - cheques deposited not credited ± bank items = Balance as per pass book',
[N('Pass book balance = Cash book + Issued not presented - Deposited not cleared','PB','₹','CB:cash book:10000:80000:i,I:issued:1000:10000:i,D:deposited:1000:10000:i',lambda cb,i,d:cb+i-d,0),N('Suspense account difference when a credit total is short by x','Diff','₹','x:amount:100:9000:i',lambda x:x,0)],
'''#brs
Cheques issued but not presented ~ increase the pass book balance over the cash book balance
Cheques deposited but not yet credited ~ reduce the pass book balance below the cash book balance
Bank charges ~ are recorded in the cash book after the pass book
Direct deposit by a customer ~ appears first in the pass book
Error of omission ~ does not affect the trial balance
Error of principle ~ does not affect the trial balance
Compensating errors ~ cancel each other and do not affect the trial balance
Transposition error ~ is divisible by 9
Suspense account ~ is opened for errors that affect the trial balance
Single sided errors ~ are rectified through the suspense account
Overdraft ~ is a credit balance in the cash book''')
c(A+'4-Partnership-and-Company/01-Partnership-Accounts','Partnership Accounts','Profit sharing, goodwill, admission, retirement and death of a partner.',
'New ratio = Old ratio - Sacrifice\nSacrificing ratio = Old ratio - New ratio\nGaining ratio = New ratio - Old ratio\nGoodwill (average profit) = Average profit × years purchase',
[N('Goodwill = average profit × number of years purchase','Goodwill','₹','P:profit:20000:100000:i,Y:years:2:5:i',lambda p,y:p*y,0),N('Interest on capital = Capital × rate × time','Interest','₹','C:capital:100000:500000:i,r:rate %:5:12:i,t:years:1:3:i',lambda c_,r,t:c_*r*t/100,0),N('Share of profit when ratio a:b and profit P (a share)','Share','₹','a:a:1:5:i,b:b:1:5:i,P:profit:30000:200000:i',lambda a,b,P:P*a/(a+b),0),N('Revaluation profit = Increase in assets + decrease in liabilities','Profit','₹','A:increase:5000:50000:i,L:decrease:0:4000:i',lambda a,l:a+l,0)],
'''#part
Partnership deed ~ states the terms of the partnership
Profit sharing ratio ~ is equal in the absence of a deed
Interest on drawings ~ is charged on drawings
Interest on partner's loan ~ is at 6 percent per annum in the absence of a deed
Goodwill ~ is the excess of purchase price over net assets
Sacrificing ratio ~ is used to share goodwill on admission
Gaining ratio ~ is used on retirement and death
Revaluation account ~ records changes in the values of assets and liabilities
Joint life policy ~ is adjusted on the death of a partner
Garner v Murray ~ applies on insolvency of a partner''')
c(A+'4-Partnership-and-Company/02-Company-Accounts','Company Accounts: Shares and Debentures','Issue of shares at par, premium and discount, forfeiture and reissue, and debentures.',
'Share capital = Number of shares × face value\nSecurities premium = Shares × premium\nForfeiture: debit share capital, credit forfeited shares',
[N('Share capital = shares × face value','Capital','₹','N:shares:1000:20000:i,F:face value:10:100:i',lambda n,f:n*f,0),N('Securities premium = shares × premium','Premium','₹','N:shares:1000:20000:i,P:premium:5:50:i',lambda n,p:n*p,0),N('Application money received = applications × per share amount','Money','₹','N:shares:1000:20000:i,A:per share:2:30:i',lambda n,a:n*a,0),N('Interest on debentures = face value × rate','Interest','₹','D:debentures:100000:500000:i,r:rate %:6:14:i',lambda d,r:d*r/100,0)],
'''#co
Securities premium ~ can be used to issue bonus shares
Calls in arrear ~ are unpaid call money
Calls in advance ~ are call money received before it is due
Forfeiture of shares ~ cancels shares for non-payment of calls
Maximum discount on reissue ~ equals the amount forfeited
Debentures ~ represent a loan to the company
Debenture interest ~ is a charge against profit
Table F ~ is the model articles for a public company limited by shares
Oversubscription ~ is adjusted by pro rata allotment or rejection''')
L='Business-Laws/Unit-'
c(L+'1-Contract-Act/01-Formation-of-Contract','Indian Contract Act: Formation of Contract','Offer, acceptance, consideration, capacity and free consent form a valid contract.','',(),'''#contract
Indian Contract Act ~ was enacted in 1872
Contract ~ is an agreement enforceable by law
Offer ~ is a proposal that, when accepted, becomes a promise
Acceptance ~ must be absolute and unconditional
General offer ~ was upheld in Carlill v Carbolic Smoke Ball Co
Invitation to treat ~ is not an offer
Consideration ~ may be past, present or future
Nudum pactum ~ means an agreement without consideration
Stranger to a contract ~ cannot sue but a stranger to consideration can
Minor's agreement ~ is void ab initio as held in Mohori Bibee v Dharmodas Ghose
Age of majority ~ is 18 years in India
Free consent ~ is absent in cases of coercion, undue influence, fraud, misrepresentation and mistake
Coercion ~ makes the contract voidable at the option of the aggrieved party
Fraud ~ is a deliberate false statement made to deceive
Silence ~ is not fraud unless there is a duty to speak
Contract of uberrimae fidei ~ requires utmost good faith
Void agreement ~ is not enforceable from the start
Voidable contract ~ is enforceable at the option of one party
Quasi contract ~ is a legal obligation without any agreement
Wagering agreement ~ is void
Agreement in restraint of trade ~ is void under section 27''')
c(L+'1-Contract-Act/02-Performance-and-Remedies','Performance, Discharge and Remedies','Performance of contracts, impossibility, discharge and damages.','',(),'''#perf
Tender ~ is an offer of performance
Time ~ is not of the essence unless the contract says so
Novation ~ replaces an old contract with a new one
Rescission ~ cancels the contract
Remission ~ is acceptance of a lesser sum
Doctrine of frustration ~ is found in section 56
Taylor v Caldwell ~ is the leading case on supervening impossibility
Anticipatory breach ~ occurs before the due date of performance
Damages ~ compensate for loss that arises naturally from breach
Remoteness of damages ~ was explained in Hadley v Baxendale
Liquidated damages ~ are a pre-estimated amount in the contract
Quantum meruit ~ means as much as is earned
Specific performance ~ is granted when damages are inadequate
Indemnity ~ is a promise to save another from loss
Guarantee ~ involves a surety, principal debtor and creditor
Bailment ~ is delivery of goods for a purpose and return
Pledge ~ is bailment as security for a debt
Agent's authority ~ may be express or implied
Contingent contract ~ depends on a future uncertain event''')
c(L+'2-Sale-of-Goods/01-Sale-of-Goods','Sale of Goods Act, 1930','Contract of sale, conditions and warranties, transfer of property and unpaid seller.','',(),'''#sog
Sale of Goods Act ~ was enacted in 1930
Goods ~ include all movable property other than actionable claims and money
Sale ~ transfers property in goods for a price
Agreement to sell ~ is an executory contract
Condition ~ is essential to the main purpose of the contract
Warranty ~ is collateral to the main purpose
Breach of condition ~ allows repudiation of the contract
Breach of warranty ~ allows only a claim for damages
Caveat emptor ~ means let the buyer beware
Implied condition as to title ~ is in section 14
Sale by description ~ is covered by section 15
Fitness for purpose ~ is an implied condition under section 16
Rule on risk ~ is that risk follows property
Nemo dat quod non habet ~ means no one can give a better title than he has
Unpaid seller ~ has the right of lien, stoppage in transit and resale
Auction sale ~ is complete on the fall of the hammer
Delivery ~ may be actual, constructive or symbolic
Ascertained goods ~ are identified after the contract is made''')
c(L+'3-Partnership-LLP/01-Partnership-and-LLP','Indian Partnership Act and LLP Act','Nature of partnership, rights, duties, retirement, dissolution and LLP.','',(),'''#pa
Indian Partnership Act ~ was enacted in 1932
Partnership ~ is the relation between persons who agree to share profits of a business carried on by all or any of them acting for all
Maximum partners in a partnership ~ are 50
Registration of a firm ~ is not compulsory
Unregistered firm ~ cannot sue third parties
Partners' liability ~ is joint and several
Minor ~ can be admitted to the benefits of partnership only
Partner by estoppel ~ is liable though not a real partner
Implied authority ~ binds the firm for acts in the usual course of business
Retirement of a partner ~ does not dissolve the firm
Dissolution by court ~ can be sought for insanity or misconduct
Goodwill ~ is a valuable asset of the firm
LLP Act ~ was enacted in 2008
LLP ~ is a body corporate with perpetual succession
Minimum partners in an LLP ~ are two
Designated partners ~ must be at least two, with one resident in India
LLP agreement ~ governs the mutual rights of partners
Form 11 ~ is the annual return of an LLP''')
c(L+'4-Companies-Act/01-Companies-Act-Basics','Companies Act, 2013: Basics','Types of companies, memorandum, articles, prospectus and doctrine of ultra vires.','',(),'''#ca
Companies Act ~ was enacted in 2013
Company ~ is an artificial person with perpetual succession
Salomon v Salomon ~ established separate legal entity
Lifting the corporate veil ~ happens in cases of fraud and tax evasion
Private company ~ has minimum 2 and maximum 200 members
Public company ~ has minimum 7 members
One person company ~ has a single member
Memorandum of association ~ is the charter of the company
Articles of association ~ govern the internal management
Doctrine of ultra vires ~ makes acts beyond the objects void
Doctrine of constructive notice ~ presumes outsiders know the public documents
Doctrine of indoor management ~ protects outsiders dealing in good faith
Prospectus ~ is an invitation to the public to subscribe
Minimum directors in a public company ~ are 3
Minimum directors in a private company ~ are 2
Woman director ~ is mandatory in specified companies
Share capital ~ may be equity or preference
Certificate of incorporation ~ is conclusive evidence of registration''')
Q='Quantitative-Aptitude/Unit-'
c(Q+'1-Maths/01-Ratio-Proportion-Indices','Ratio, Proportion, Indices and Logarithms','Ratios, variation, laws of indices and logarithms.',
'a:b = c:d ⇒ ad = bc\nLog(ab) = log a + log b\nLog(a/b) = log a - log b\nLog(a^n) = n log a\na^m × a^n = a^(m+n)',
[N('Fourth proportional d from a:b = c:d','d','','a:a:2:9:i,b:b:3:12:i,c:c:2:9:i',lambda a,b,c_:b*c_/a,2),N('Mean proportional √(ab)','m','','a:a:2:20:i,b:b:2:20:i',lambda a,b:math.sqrt(a*b),3),N('log10 of k × 10^n = log10(k) + n','log','','k:k:2:9:i,n:n:1:5:i',lambda k,n:math.log10(k)+n,4),N('Compound ratio of a:b and c:d, first term/second term','ratio','','a:a:1:9:i,b:b:1:9:i,c:c:1:9:i,d:d:1:9:i',lambda a,b,c_,d:a*c_/(b*d),3)],
'''#ratio
Duplicate ratio of a:b ~ is a²:b²
Triplicate ratio of a:b ~ is a³:b³
Sub-duplicate ratio ~ is the square root ratio
Continued proportion ~ has b² = ac
Direct variation ~ has y proportional to x
Inverse variation ~ has y proportional to 1/x
Log of 1 ~ is zero
Log of a number to its own base ~ is one
Change of base ~ gives log_b a = log a / log b
Componendo and dividendo ~ gives (a+b)/(a-b) = (c+d)/(c-d)''')
c(Q+'1-Maths/02-Interest-Annuity-Series','Simple and Compound Interest, Annuity and Series','Interest calculations, effective rate, annuities, AP and GP.',
'SI = PRT/100\nA = P(1 + r/100)^n\nEffective rate = (1 + i/m)^m - 1\nAnnuity PV = A [1 - (1+i)^-n]/i',
[N('Simple interest = PRT/100','SI','₹','P:principal:1000:50000:i,R:rate:4:15:i,T:years:1:6:i',lambda P,R,T:P*R*T/100,2),N('Compound amount = P(1 + r/100)^n','A','₹','P:principal:1000:50000:i,r:rate:4:15:i,n:years:1:5:i',lambda P,r,n:P*(1+r/100)**n,2),N('Compound interest = A - P','CI','₹','P:principal:1000:50000:i,r:rate:4:15:i,n:years:1:4:i',lambda P,r,n:P*((1+r/100)**n-1),2),N('Present value of annuity A, rate i, n years','PV','₹','A:annuity:1000:10000:i,i:rate %:5:12:i,n:years:3:10:i',lambda A,i,n:A*(1-(1+i/100)**-n)/(i/100),2),N('Nth term of AP = a + (n - 1)d','Tn','','a:a:2:20:i,d:d:2:9:i,n:n:5:30:i',lambda a,d,n:a+(n-1)*d,0)],
'''#int
Simple interest ~ is calculated on the original principal
Compound interest ~ is calculated on principal plus accumulated interest
Effective rate of interest ~ rises as compounding becomes more frequent
Sinking fund ~ accumulates to repay a future obligation
Perpetuity ~ is an annuity that continues forever
Present value of a perpetuity ~ equals A/i
Rule of 72 ~ estimates the doubling time of an investment''')
c(Q+'1-Maths/03-Permutation-Sets-Calculus','Permutations, Combinations, Sets and Basic Calculus','Counting, sets, limits and derivatives for business mathematics.',
'nPr = n!/(n-r)!\nnCr = n!/(r!(n-r)!)\nn(A∪B) = n(A) + n(B) - n(A∩B)\nd/dx x^n = n x^(n-1)',
[N('nPr','nPr','','n:n:5:10:i,r:r:2:4:i',lambda n,r:math.factorial(n)//math.factorial(n-r),0),N('nCr','nCr','','n:n:5:12:i,r:r:2:4:i',lambda n,r:comb(n,r),0),N('n(A∪B)','n','','a:n(A):10:50:i,b:n(B):10:50:i,x:n(A∩B):2:9:i',lambda a,b,x:a+b-x,0),N('Derivative of ax^n at x = t','f\'','','a:a:2:9:i,n:n:2:5:i,t:t:1:4:i',lambda a,n,t:a*n*t**(n-1),0)],
'''#perm
Factorial of zero ~ is one
Marginal cost ~ is the derivative of total cost
Marginal revenue ~ is the derivative of total revenue
Profit is maximum ~ when marginal revenue equals marginal cost with a negative second derivative
Power set ~ of an n element set has 2^n subsets
Combination ~ ignores order while permutation considers order''')
c(Q+'2-Statistics/01-Statistics','Statistical Description of Data','Mean, median, mode, dispersion and correlation.',
'Mean = Σfx/Σf\nMedian = L + (N/2 - cf)/f × h\nSD = √(Σ(x - mean)²/n)\nr = Cov(x,y)/(σx σy)',
[N('Arithmetic mean = Σx/n','mean','','S:sum:100:900:i,n:n:5:20:i',lambda s,n:s/n,2),N('Coefficient of variation = SD/mean × 100','CV','%','sd:SD:2:10,m:mean:20:60:i',lambda sd,m:sd/m*100,2),N('Range = Max - Min','R','','a:max:50:100:i,b:min:1:49:i',lambda a,b:a-b,0),N('Karl Pearson skewness = (Mean - Mode)/SD','Sk','','m:mean:20:50:i,mo:mode:10:19:i,sd:SD:2:9:i',lambda m,mo,sd:(m-mo)/sd,3),N('Spearman rank r = 1 - 6Σd²/(n(n²-1))','r','','d:Σd²:2:40:i,n:n:5:12:i',lambda d,n:1-6*d/(n*(n*n-1)),3)],
'''#stat
Arithmetic mean ~ is affected by extreme values
Median ~ is a positional average
Mode ~ is the most frequent value
Relation of averages ~ is Mode = 3 Median - 2 Mean for moderately skewed data
Standard deviation ~ is independent of change of origin but depends on change of scale
Correlation coefficient ~ lies between -1 and +1
Regression coefficients ~ have the same sign
Geometric mean ~ is used for average growth rates
Harmonic mean ~ is used for averaging rates''')
c(Q+'2-Statistics/02-Probability-Distributions','Probability and Theoretical Distributions','Probability rules, binomial, Poisson and normal distributions.',
'P(A∪B) = P(A) + P(B) - P(A∩B)\nBinomial mean np, variance npq\nPoisson mean = variance = m\nNormal: mean = median = mode',
[N('P(A∪B)','P','','a:P(A):0.3:0.7,b:P(B):0.2:0.5,x:P(A∩B):0.05:0.19',lambda a,b,x:a+b-x,3),N('Binomial mean np','np','','n:n:5:50:i,p:p:0.1:0.9',lambda n,p:n*p,2),N('Binomial variance npq','npq','','n:n:5:50:i,p:p:0.1:0.9',lambda n,p:n*p*(1-p),3),N('Poisson P(X=0) = e^(-m)','P','','m:m:0.5:4',lambda m:math.exp(-m),4),N('Binomial P(X = r)','P','','n:n:4:10:i,r:r:1:3:i,p:p:0.2:0.6',lambda n,r,p:comb(n,r)*p**r*(1-p)**(n-r),4)],
'''#prob
Mutually exclusive events ~ have P(A∩B) equal to zero
Independent events ~ have P(A∩B) equal to P(A)P(B)
Normal curve ~ is bell shaped and symmetric
Area under a normal curve ~ is one
About 68 percent of values ~ lie within one standard deviation of the mean
Poisson distribution ~ models rare events
Bayes theorem ~ gives posterior probability''')
c(Q+'3-Reasoning/01-Logical-Reasoning','Logical Reasoning: Series, Coding, Blood Relations and Directions','Pattern based reasoning problems.','',(),'''#lr
Number series ~ may follow addition, multiplication, squares or alternating patterns
Coding-decoding ~ shifts letters by a fixed number
Opposite letter of A ~ is Z in the alphabet
Position of letter from the right ~ equals 27 minus position from the left
Blood relations ~ are solved by drawing a family tree
Mother's brother ~ is maternal uncle
Father's sister ~ is paternal aunt
Direction problems ~ use Pythagoras for the final distance
Clock angle ~ equals 30H - 5.5M degrees
Hands of a clock coincide ~ 11 times in 12 hours
Calendar ~ repeats after 28 years in the Gregorian cycle with leap years
Odd day count for a normal year ~ is 1
Odd day count for a leap year ~ is 2
Syllogism ~ uses Venn diagrams to test conclusions
Seating arrangement ~ should be solved by listing fixed positions first''')
E_='Business-Economics/Unit-'
c(E_+'1-Micro/01-Demand-Supply-Elasticity','Theory of Demand, Supply and Elasticity','Law of demand, determinants, elasticity of demand and supply.',
'Ed = %ΔQ / %ΔP\nMidpoint Ed = (ΔQ/avg Q)/(ΔP/avg P)\nTotal expenditure method',
[N('Price elasticity of demand = %ΔQ/%ΔP (absolute)','Ed','','q:%ΔQ:5:50:i,p:%ΔP:2:25:i',lambda q,p:q/p,3),N('Percentage change in quantity = Ed × %ΔP','%ΔQ','%','e:Ed:0.5:3,p:%ΔP:2:20:i',lambda e,p:e*p,2),N('Income elasticity = %ΔQ/%ΔIncome','Ey','','q:%ΔQ:5:40:i,i:%ΔY:5:20:i',lambda q,i:q/i,3),N('Cross elasticity = %ΔQx/%ΔPy','Exy','','q:%ΔQx:-30:30:i,p:%ΔPy:5:20:i',lambda q,p:q/p,3)],
'''#dem
Law of demand ~ states price and quantity demanded move inversely
Giffen good ~ violates the law of demand
Normal good ~ has positive income elasticity
Inferior good ~ has negative income elasticity
Substitutes ~ have positive cross elasticity
Complements ~ have negative cross elasticity
Elasticity greater than one ~ is elastic demand
Perfectly inelastic demand ~ has a vertical demand curve
Shift in demand curve ~ is caused by changes in income, tastes or related prices
Movement along demand curve ~ is caused only by a change in price
Law of supply ~ states price and quantity supplied move together
Consumer surplus ~ is the gap between willingness to pay and the price paid''')
c(E_+'1-Micro/02-Production-Cost-Markets','Production, Cost and Market Forms','Short run production, cost curves, perfect competition, monopoly and oligopoly.',
'AC = TC/Q\nMC = ΔTC/ΔQ\nProfit = TR - TC\nP = MC in perfect competition',
[N('Average cost = TC/Q','AC','₹','T:TC:1000:9000:i,Q:Q:10:100:i',lambda t,q:t/q,2),N('Marginal cost = ΔTC/ΔQ','MC','₹','T1:TC1:1000:2000:i,T2:TC2:2001:3000:i,Q:ΔQ:5:50:i',lambda a,b,q:(b-a)/q,2),N('Profit = TR - TC','Profit','₹','R:TR:5000:20000:i,C:TC:3000:19999:i',lambda r,c_:r-c_,0),N('Average fixed cost = TFC/Q','AFC','₹','F:TFC:1000:9000:i,Q:Q:10:100:i',lambda f,q:f/q,2)],
'''#mkt
Law of variable proportions ~ shows diminishing marginal returns in the short run
Perfect competition ~ has many sellers, homogeneous product and free entry
Monopoly ~ has a single seller with no close substitutes
Monopolistic competition ~ has product differentiation
Oligopoly ~ has a few interdependent firms
Kinked demand curve ~ explains price rigidity in oligopoly
Price discrimination ~ charges different prices for the same product
Break-even point ~ is where TR equals TC
Shut down point ~ is where price equals minimum average variable cost
Economies of scale ~ reduce long run average cost
Long run ~ has all factors variable''')
c(E_+'2-Macro-and-Business/01-National-Income-Money','National Income, Money and Banking','GDP, inflation, monetary policy and the business environment.',
'GDP = C + I + G + (X - M)\nNNP at factor cost = National income\nReal GDP = Nominal GDP/Deflator × 100\nMoney multiplier = 1/CRR',
[N('GDP = C + I + G + NX','GDP','₹ crore','C:C:5000:9000:i,I:I:1000:3000:i,G:G:1000:3000:i,N:NX:-500:500:i',lambda c_,i,g_,n:c_+i+g_+n,0),N('Real GDP = Nominal/Deflator × 100','Real GDP','₹ crore','N:nominal:10000:50000:i,D:deflator:100:180:i',lambda n,d:n/d*100,1),N('Money multiplier = 1/CRR (CRR in %)','mm','','c:CRR %:4:20:i',lambda c_:100/c_,2),N('Inflation rate = (P1 - P0)/P0 × 100','π','%','p0:P0:100:150:i,p1:P1:151:210:i',lambda a,b:(b-a)/a*100,2)],
'''#macro
GDP ~ is the market value of final goods and services produced within a country
GNP ~ equals GDP plus net factor income from abroad
Repo rate ~ is the rate at which the RBI lends to banks
Reverse repo rate ~ is the rate at which the RBI borrows from banks
CRR ~ is the share of deposits banks keep with the RBI
SLR ~ is the share of deposits kept in liquid assets
Demand pull inflation ~ results from excess aggregate demand
Cost push inflation ~ results from rising input costs
Fiscal deficit ~ equals total expenditure minus total receipts excluding borrowing
GST ~ is a destination based tax on supply of goods and services
WTO ~ was established in 1995
Business environment ~ includes economic, legal, social and technological factors
E-commerce ~ means buying and selling over electronic networks''')
