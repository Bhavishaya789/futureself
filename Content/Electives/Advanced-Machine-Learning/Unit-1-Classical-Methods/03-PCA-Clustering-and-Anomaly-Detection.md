# PCA, clustering and anomaly detection
minutes: 25
yt: PCA explained step by step
@study
## PCA (Principal Component Analysis)
PCA projects data onto directions of maximum variance. Steps: centre the data, compute the covariance matrix, find its eigenvectors (components) and eigenvalues (variance along each). Example: covariance [[2, 1], [1, 2]] has eigenvalues **3 and 1**, so the first component explains 3/(3 + 1) = **75%** of the variance (direction (1, 1)). Keep enough components to reach about 90 to 95% variance. PCA is linear and needs scaled features.
## Clustering
- **k-means:** assigns points to the nearest of k centres and recomputes centres; needs k; finds round clusters. Use the **elbow method** or the **silhouette score** (between -1 and 1; higher is better) to choose k.
- **DBSCAN:** groups dense regions using eps and min_samples; finds odd shapes and labels outliers as noise; needs no k.
- **Hierarchical:** builds a dendrogram by merging nearest clusters.
## Anomaly detection
**Z-score** (flag |z| > 3), **IQR rule** (outside Q1 - 1.5 IQR and Q3 + 1.5 IQR), **Isolation Forest** (anomalies are isolated in fewer random splits), **autoencoders** (large reconstruction error). Example: for [1, 2, 3, 4, 100]: Q1 = 2, Q3 = 4, IQR = 2, upper fence 7, so 100 is an outlier.
```python
import numpy as np
C = np.array([[2, 1], [1, 2]])
vals, vecs = np.linalg.eigh(C)
print(vals, vals / vals.sum())     # [1. 3.] [0.25 0.75]
```
## Hindi saransh
PCA maximum variance ki direction chunta hai: eigenvalues 3 aur 1 se pehla component 75% variance samjhata hai. DBSCAN density se cluster banata hai aur outliers pakadta hai.
> Scale the features before PCA; otherwise large-valued features dominate.
@qa
Q: What do eigenvalues represent in PCA?
A: The variance captured along each principal component.
Q: Why scale features before PCA?
A: Otherwise features with large units dominate the variance and the components.
Q: When is DBSCAN better than k-means?
A: For clusters of arbitrary shape and when outliers must be detected, with no need to fix k.
Q: IQR rule upper fence for [1, 2, 3, 4, 100]?
A: Q3 + 1.5 IQR = 4 + 3 = 7, so 100 is an outlier.
@quiz
? Eigenvalues of [[2,1],[1,2]] are
- 2 and 2
+ 3 and 1
- 4 and 0
- 5 and 1
! trace 4 and determinant 3.
? Variance explained by the first component is
- 25%
- 50%
+ 75%
- 100%
! 3/4.
? DBSCAN marks low-density points as
+ noise (outliers)
- cluster centres
- principal components
- labels
! Points not in any dense region.
? A silhouette score close to 1 means
- poor clustering
+ well-separated clusters
- random labels
- overfit
! High separation.
@visual
formula | PCA | covariance = X^T X / (n - 1) ; explained variance = eigenvalue / sum of eigenvalues
bars | Variance along each component | PC1=3;PC2=1
@problems
## Moderate
P: Find the percentage of variance explained by each component for eigenvalues 3 and 1.
A: 75% and 25%.
R: 1 | 3/4
R: 1 | 1/4
## High
P: Use the IQR rule to find the outlier in 1, 2, 3, 4, 100.
A: Q1 = 2, Q3 = 4, IQR = 2, fences -1 and 7; 100 is outside.
R: 2 | Fences
R: 1 | 100
## Advanced
P: Explain the steps of PCA and when you would use it.
A: Centre and scale the data, compute the covariance matrix, find eigenvectors and eigenvalues, sort by eigenvalue, keep the top components and project the data. Use it to reduce dimensions, remove correlated features, speed training or visualise data.
R: 3 | Steps
R: 1 | Uses
