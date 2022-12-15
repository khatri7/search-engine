# Search Engine

This is a NodeJS word search engine that returns the number of times a word has appeared in a web page. The number of times a word has appeared is also the criteria for ranking the result, i.e., the page with the most occurrences for the searched word is listed first.

## Static Data (Input Files)

For the purpose for of this project, at the moment, static HTML documents have been used but it could easily be extended to fetch them based on the endpoint. The files are placed in the [`data` directory](./data/).

## Data Structure and Algorithm used

The data structure used for this project is a [Trie](https://en.wikipedia.org/wiki/Trie) implemented using a JavaScript [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map). The implementation is in the file [`trie.js`](./trie.js). The map when viewed as a JavaScript object would look as follows:

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

### Creating the Trie

The Trie is prepared when the application starts for all the files present in the data directory. The text in each file is cleaned as follows:

- remove all html tags
- convert all text to lower case
- remove all apostrophes (`'`)
- remove all [stop words](https://en.wikipedia.org/wiki/Stop_word)
- remove all non alpha numeric characters
- condense the file: remove all extra spaces, such as tabs (`\t`) and next lines (`\n`)

After this the list of words from the cleaned text for each file is added ot the Trie as follows:

1. One word is taken at a time
2. Iterate over all the characters of the word starting from the first character
3. If the key already exists in the Map, we move into the the value Map for that key and continue iterating. Otherwise we initialize a key as the current letter and its value as a Map with a `results` key (which would be an empty Map)
4. Repeat step 3 till we reach the end of the word, at this stage we update the `results` Map of the final key as follows:

   - If the filename of the current file already exists in the `results` Map, then we increment the value by 1
   - Else, we add a key as current file's name and value as 1

### Searching the Trie

Getting the results for a word is very similar to how we created the Trie. We take the word user inputs, convert it to lowercase and iterate over it looking for a key in the Map for each letter and move onto the value Map for every match, at any point if there is no match, we return an empty result set. Otherwise, we keep iterating till we reach the last letter, at which stage we get the `results` Map at that key and print that in form of a table with file names sorted in descending order of occurrences.

## How to run

This is NodeJS project. So before running the project, make sure you have NodeJS setup. You can see the steps [here](https://nodejs.org/en/).

1. Install dependecies. From the root directory, run the following command:

```
npm install
```

This will install all the packages required to run this project. The list of dependencies can be seen in [`package.json`](./package.json)

2. From the root directory, run the following command to start the application:

```
npm start
```

To stop searching, and quit the application you can input `:q`

## Sample Output

```
$ npm start

> search-engine@1.0.0 start
> node app.js

Reading files from: /search-engine/data
✔ Karim Benzema - Wikipedia.html
✔ Real Madrid CF - Wikipedia.html
✔ Robert Lewandowski - Wikipedia.html
✔ Neymar - Wikipedia.html
✔ Cristiano Ronaldo - Wikipedia.html
✔ Lionel Messi - Wikipedia.html


Enter the word you want to searh (Enter ':q' to quit): fastest

Search Result:
┌─────────┬───────────────────────────────────────┬────────────┐
│ (index) │               File Name               │ Occurrence │
├─────────┼───────────────────────────────────────┼────────────┤
│    0    │ 'Cristiano Ronaldo - Wikipedia.html'  │     10     │
│    1    │ 'Robert Lewandowski - Wikipedia.html' │     8      │
│    2    │    'Lionel Messi - Wikipedia.html'    │     3      │
│    3    │   'Real Madrid CF - Wikipedia.html'   │     3      │
│    4    │   'Karim Benzema - Wikipedia.html'    │     1      │
│    5    │       'Neymar - Wikipedia.html'       │     1      │
└─────────┴───────────────────────────────────────┴────────────┘
```
