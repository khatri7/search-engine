# Search Engine

This is a NodeJS word search engine that returns the number of times a word has appeared in a web page. The number of times a word has appeared is also the criteria for ranking the result, i.e., the page with the most occurrences for the searched word is listed first.

## Static Data (Input Files)

For the purpose for of this project, at the moment, static HTML documents have been used but it could easily be extended to fetch them based on the endpoint. The files are placed in the [`data` directory](./data/).

## Data Structure and Algorithm used

The data structure used for this project is a [Trie](https://en.wikipedia.org/wiki/Trie) implemented using a JavaScript [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map). The implementation is in the file [`trie.js`](./trie.js). The map when viewed as a JavaScript object  would look as follows:

```javascript
{
  a: {
    results: {}, // results for word 'a'
  },
  t: {
    h: {
      e: {
        results: {
          // results for word 'the'
          "Neymar - Wikipedia.html": 2,
          "Real Madrid CF - Wikipedia.html": 1,
        },
      },
      results: {}, // results for word 'th'
    },
    results: {}, // results for word 't'
  },
}
```

Each key in the object has a `results` object that contains a key-value pair signifying the file name and number of times the word that is formed with the keys upto the current key has occurred. For the example above, the word formed at the key `e` would be `the`, and the `results` object tells us that the word has appeared twice and once in the files named `Neymar - Wikipedia.html` and `Real Madrid CF - Wikipedia.html` respectively.

The Trie is prepared when the application starts for all the files present in the data directory. The text in each file is cleaned as follows:

- remove all html tags
- convert all text to lower case
- remove all apostrophes (`'`)
- remove all [stop words](https://en.wikipedia.org/wiki/Stop_word)
- remove all non alpha numeric characters
- condense the file: remove all extra spaces, such as tabs (`\t`) and next lines (`\n`)

After this the list of words from the cleaned text for each file is added ot the Trie as follows:

-
