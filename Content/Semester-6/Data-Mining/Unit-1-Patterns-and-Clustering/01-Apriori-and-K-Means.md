# Association rules (Apriori) and k-means clustering
minutes: 25
yt: apriori algorithm support confidence k means
@study
**Association rules** find items bought together. For rule A -> B: **support** = P(A and B); **confidence** = P(B | A) = support(A and B) / support(A); **lift** = confidence / support(B) (lift above 1 means a positive association). Apriori principle: every subset of a frequent itemset is frequent, so we prune candidates.
Example with 5 baskets: {bread, milk}, {bread, butter}, {bread, milk, butter}, {milk, butter}, {bread, milk, butter}.
support(bread) = 4/5 = 0.8; support(milk) = 0.8; support(bread, milk) = 3/5 = 0.6; confidence(bread -> milk) = 0.6/0.8 = **0.75**; lift = 0.75/0.8 = **0.94** (slightly below 1, so no useful positive association).
## k-means
1. Choose k centres. 2. Assign each point to the nearest centre. 3. Recompute the centres as means. 4. Repeat until no change. Example: points 1, 2, 3, 10, 11, 12 with k = 2 and initial centres 1 and 10 converge to centres **2** and **11**. Limitations: choose k beforehand, sensitive to initial centres and outliers; elbow method and silhouette score help choose k.
**Other methods:** decision trees, naive Bayes, DBSCAN (density-based), hierarchical clustering.
## Hindi saransh
Support, confidence aur lift se association rules judge karte hain. k-means mein centres ko mean se update karte hain.
> Lift above 1 means the items occur together more often than by chance.
@qa
Q: Define confidence of A -> B.
A: P(B | A) = support(A and B) / support(A).
Q: State the Apriori principle.
A: All subsets of a frequent itemset must also be frequent.
Q: Final centres for 1, 2, 3, 10, 11, 12 with k = 2?
A: 2 and 11.
Q: What is a drawback of k-means?
A: k must be given in advance and results depend on the initial centres.
@quiz
? Confidence of bread -> milk in the example is
- 0.6
+ 0.75
- 0.8
- 1.0
! 0.6/0.8.
? Lift of that rule is
- 1.2
+ 0.94
- 0.6
- 2
! 0.75/0.8.
? k-means final centres for 1,2,3,10,11,12 are
- 1 and 10
+ 2 and 11
- 3 and 12
- 6 and 6
! Means of each group.
? DBSCAN is a
- supervised method
+ density-based clustering method
- regression
- tree
! Finds dense regions.
@visual
formula | Association rules | support = P(A and B) ; confidence = P(B|A) ; lift = confidence / P(B)
steps | k-means | Choose k; Assign points; Update centres; Repeat until stable
@problems
## Moderate
P: Compute the support of {bread, milk} in the 5-basket example.
A: 3/5 = 0.6.
R: 1 | Count
R: 1 | 0.6
## High
P: Compute the confidence and lift for bread -> milk.
A: Confidence 0.75; lift 0.94.
R: 2 | Confidence
R: 1 | Lift
## Advanced
P: Run k-means on 1, 2, 3, 10, 11, 12 with initial centres 1 and 10.
A: Groups {1,2,3} and {10,11,12}; centres 2 and 11; stable after one update.
R: 2 | Assignment
R: 2 | Centres
