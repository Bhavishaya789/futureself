# Text processing, TF-IDF and n-grams
minutes: 25
yt: tf idf and n gram language model
@study
**NLP pipeline:** tokenisation, lower-casing, stop-word removal, stemming (cut suffixes) or lemmatisation (dictionary form), part-of-speech tagging, parsing.
**Bag of words** counts words and ignores order. **TF-IDF** weighs a word by how often it appears in a document (TF) and how rare it is across documents: idf = ln(N / df). Example: 3 documents, "cat" in 2 of them, TF in a 3-word document = 1/3; idf = ln(3/2) = 0.405; TF-IDF = **0.135**. A word in every document gets idf = 0.
**Cosine similarity** = A.B / (|A||B|): vectors [1,1,0] and [1,0,1] give **0.5**.
**N-gram language model:** P(w2 | w1) = count(w1 w2) / count(w1). In "the cat sat the cat ran the dog sat": count("the cat") = 2 and count("the") = 3, so P(cat | the) = **2/3**. Smoothing (add-one) handles unseen n-grams. Perplexity measures model quality (lower is better).
**Modern NLP:** word embeddings (word2vec), transformers, BERT and GPT-style models using attention.
## Hindi saransh
TF-IDF = word ki frequency x rarity. Bigram probability = count(w1 w2) / count(w1).
> A word present in all documents carries no discriminating power.
@qa
Q: What is TF-IDF used for?
A: To weigh how important a word is to a document within a collection.
Q: P(cat | the) in the example text?
A: 2/3.
Q: Difference between stemming and lemmatisation?
A: Stemming chops suffixes by rules; lemmatisation returns the dictionary base form using vocabulary.
Q: Cosine similarity of [1,1,0] and [1,0,1]?
A: 0.5.
@quiz
? idf of a word in all 3 documents is
+ 0
- 1
- ln 3
- 3
! ln(3/3).
? TF-IDF of cat in the example is about
- 0.405
+ 0.135
- 0.333
- 1
! (1/3) x 0.405.
? Bigram P(cat | the) = count(the cat) / count(the) equals
- 1/3
+ 2/3
- 1
- 1/2
! 2/3.
? Which handles unseen n-grams?
- stemming
+ smoothing
- tokenisation
- parsing
! Add-one smoothing.
@visual
formula | NLP | idf = ln(N / df) ; cos = A.B / (|A||B|) ; P(w2|w1) = count(w1 w2) / count(w1)
@problems
## Moderate
P: Compute the TF-IDF of a word with TF 1/3 appearing in 2 of 3 documents.
A: idf = ln(1.5) = 0.405; TF-IDF = 0.135.
R: 1 | idf
R: 1 | 0.135
## High
P: Compute the bigram probability P(cat | the) in "the cat sat the cat ran the dog sat".
A: 2/3.
R: 2 | Counts
R: 1 | 2/3
## Advanced
P: Explain why TF-IDF reduces the weight of common words like "the".
A: Their document frequency is high so idf is near zero, which cancels the high term frequency.
R: 2 | Document frequency
R: 2 | idf near zero
