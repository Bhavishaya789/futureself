# Unsupervised learning: K-means, hierarchical clustering and PCA
minutes: 30
yt: k means clustering algorithm numerical example
yt: PCA principal component analysis explained
@study
**Unsupervised learning** finds structure in unlabelled data.

## K-means clustering
1. Choose k and initial centroids.
2. **Assign** each point to the nearest centroid.
3. **Update** each centroid to the mean of its points.
4. Repeat until assignments stop changing.
It minimises within-cluster sum of squares. Weaknesses: must choose k; sensitive to initial centroids (use k-means++); assumes round clusters of similar size; needs scaled features.
Choosing k: **elbow method** (plot cost vs k), **silhouette score** (−1 to 1).

### Worked example (verified)
1-D points 1, 2, 3, 10, 11, 12 with initial centroids 1 and 10.
Assign: {1,2,3} to centroid 1, {10,11,12} to centroid 10. New centroids: 2 and 11. Next iteration the assignment does not change, so the final centroids are **2 and 11**.
```python
pts = [1, 2, 3, 10, 11, 12]; c = [1, 10]
for _ in range(5):
    cl = [[p for p in pts if abs(p - c[0]) <= abs(p - c[1])],
          [p for p in pts if abs(p - c[0]) > abs(p - c[1])]]
    c = [sum(k) / len(k) for k in cl]
print(c)
```
Output:
```
[2.0, 11.0]
```

## Hierarchical clustering
- **Agglomerative:** start with each point as a cluster and merge the closest pair repeatedly (single, complete or average linkage).
- Result is a **dendrogram**; cut it at a height to get clusters. No need to pick k in advance but slow on large data.

## DBSCAN
Density-based: groups points with many neighbours within radius ε (minPts), labels sparse points as noise, finds arbitrary shapes.

## Dimensionality reduction
Too many features cause the **curse of dimensionality** (data becomes sparse, distances lose meaning).
**PCA (Principal Component Analysis):**
1. Standardise the data.
2. Compute the covariance matrix.
3. Find eigenvectors (directions of maximum variance) and eigenvalues (amount of variance).
4. Keep the top components and project the data.
Explained variance tells how much information is retained. PCA is linear; t-SNE and UMAP are used for visualisation.

## Association rules
Market-basket analysis finds rules such as {bread, butter} → milk, measured by **support**, **confidence** and **lift** (Apriori algorithm).

## Applications
Customer segmentation, anomaly detection (fraud, sensor faults in IoT), image compression, recommender systems.

> K-means: assign to the nearest centre, move the centre, repeat.
@qa
Q: Describe the K-means algorithm.
A: Pick k centroids, assign every point to its nearest centroid, recompute each centroid as the mean of its points, and repeat until the assignments no longer change.
Q: How do you choose k?
A: Using the elbow method on the within-cluster cost, the silhouette score, or domain knowledge.
Q: What is a dendrogram?
A: A tree diagram showing the order and distances at which clusters are merged in hierarchical clustering.
Q: What is PCA used for?
A: Reducing the number of features by projecting data onto directions of maximum variance, while keeping most of the information.
Q: What are support, confidence and lift?
A: Support is how often an itemset occurs; confidence is how often the rule is correct given its antecedent; lift compares confidence with the expected value if the items were independent.
@quiz
? In K-means the centroid is the
- median of points
+ mean of points
- farthest point
- first point
! Hence the name K-means.
? A dendrogram belongs to
- K-means
+ hierarchical clustering
- PCA
- KNN
! It records the merge hierarchy.
? PCA picks directions of
- minimum variance
+ maximum variance
- zero mean
- random
! The first component captures the most variance.
? Which method finds clusters of arbitrary shape and noise?
- K-means
+ DBSCAN
- PCA
- Linear regression
! It is density based.
? Final centroids for 1,2,3,10,11,12 with k=2 are
- 1 and 10
+ 2 and 11
- 3 and 12
- 6 and 7
! The means of each group.

@visual
steps | K-means clustering | Choose k starting centroids; Assign each point to its nearest centroid; Move each centroid to the mean of its points; Repeat until the assignments stop changing

@problems
## Moderate
P: Run K-means on the 1-D points 1, 2, 3, 10, 11, 12 with k = 2 and starting centroids 1 and 10.
A: Assign: points 1, 2, 3 are closer to 1; points 10, 11, 12 are closer to 10. New centroids: (1 + 2 + 3) / 3 = 2 and (10 + 11 + 12) / 3 = 11. Reassigning gives the same clusters, so it stops with clusters {1, 2, 3} and {10, 11, 12}.
R: 2 | Initial assignment
R: 2 | Centroids 2 and 11 and convergence
## High
P: How do you choose k in K-means (elbow method)? Give two limitations of K-means.
A: Run K-means for several k and plot the within-cluster sum of squares; choose the k where the curve bends (the elbow) because more clusters stop giving a big improvement. Limitations: k must be chosen in advance, results depend on the starting centroids, it assumes roughly round equal-size clusters and is sensitive to outliers.
R: 2 | Elbow method
R: 2 | Two limitations
## Advanced
P: PCA on 2-D data gives eigenvalues 4 and 1. What fraction of variance does each component explain? When is reducing to one component sensible? Why should features be standardised first?
A: Total variance = 5. PC1 explains 4 / 5 = 80% and PC2 explains 1 / 5 = 20%. Keeping only PC1 is sensible when losing 20% of the variance is acceptable, for example for visualisation or speed.
Standardising matters because PCA is driven by variance: a feature measured in large units would dominate even if it is not more important.
R: 2 | 80% and 20%
R: 1 | When one component is enough
R: 2 | Standardisation reason
