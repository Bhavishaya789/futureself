# Support vector machines and kernels
minutes: 25
yt: support vector machine kernel trick explained
@study
A **support vector machine (SVM)** finds the separating hyperplane w.x + b = 0 with the **largest margin**. The margin width is **2 / ||w||**; for w = (3, 4), ||w|| = 5 and the margin is **0.4**. Only the points closest to the boundary, the **support vectors**, decide it.
- **Hard margin:** no point may violate the margin (needs separable data). **Soft margin:** slack variables allow some errors; the parameter **C** trades margin width against errors (large C = few errors but narrow margin, risk of overfitting).
- **Kernel trick:** replace dot products by a kernel K(x, z) so a linear SVM works in a high-dimensional space without computing it. **RBF kernel** K(x, z) = exp(-gamma ||x - z||^2). For gamma = 0.5, x = (1, 2) and z = (2, 0): ||x - z||^2 = 5, so K = e^-2.5 = **0.0821**. Other kernels: linear, polynomial.
- Scale features before an SVM. It works well on small and medium datasets and in high dimensions; training is slow for very large data.
```python
from sklearn.svm import SVC
from sklearn.datasets import make_moons
from sklearn.model_selection import train_test_split
X, y = make_moons(300, noise=0.2, random_state=0)
Xtr, Xte, ytr, yte = train_test_split(X, y, random_state=0)
for kern in ("linear", "rbf"):
    print(kern, round(SVC(kernel=kern, C=1).fit(Xtr, ytr).score(Xte, yte), 2))
```
The RBF kernel scores higher than the linear one on this curved (moons) data.
## Hindi saransh
SVM sabse bade margin wala hyperplane dhoondhta hai; margin = 2/||w||. Kernel trick data ko bade dimension mein le jaata hai. C bada ho to margin chhota aur overfitting ka khatra.
> Always scale features before using an SVM with an RBF kernel.
@qa
Q: What is the margin of an SVM and how is it computed?
A: The distance between the two classes' boundaries; it equals 2 / ||w||.
Q: What are support vectors?
A: The training points closest to the decision boundary; only they determine the hyperplane.
Q: What does the kernel trick do?
A: It computes dot products in a high-dimensional feature space through a kernel function, so non-linear boundaries are learned without explicitly mapping the data.
Q: Effect of a very large C?
A: Fewer training errors but a narrower margin and a higher risk of overfitting.
@quiz
? For w = (3, 4) the SVM margin width 2/||w|| is
- 0.2
+ 0.4
- 0.8
- 2.5
! ||w|| = 5, so 2/5 = 0.4.
? The RBF kernel value for gamma 0.5 and squared distance 5 is about
- 0.5
+ 0.082
- 2.5
- 0.92
! exp(-2.5).
? Support vectors are
- all training points
+ points nearest the boundary
- misclassified points only
- the test points
! They define the margin.
? A large C in a soft-margin SVM
+ penalises errors heavily
- ignores errors
- widens the margin
- removes kernels
! Higher penalty, narrower margin.
@visual
formula | SVM and RBF | margin = 2 / ||w|| ; K(x, z) = exp(-gamma ||x - z||^2)
curve | RBF kernel against distance (gamma = 0.5) | y = exp(-0.5*x*x) ; 0 ; 4
@problems
## Moderate
P: Find the margin of an SVM with w = (3, 4).
A: ||w|| = 5, so the margin = 2/5 = 0.4.
R: 1 | ||w||
R: 1 | 0.4
## High
P: Compute the RBF kernel for x = (1, 2), z = (2, 0) and gamma = 0.5.
A: ||x - z||^2 = 1 + 4 = 5; K = exp(-2.5) = 0.0821.
R: 1 | Squared distance
R: 2 | 0.0821
## Advanced
P: Explain how C and gamma affect overfitting in an RBF SVM.
A: Large C punishes errors, giving a complex boundary that may overfit. Large gamma makes each point's influence local, again a wiggly boundary and overfitting; small gamma gives a smoother, more linear model. Choose both by cross-validated grid search.
R: 2 | Effect of C
R: 2 | Effect of gamma
R: 1 | Cross-validation
