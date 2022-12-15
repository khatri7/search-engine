```
$ npm start

> search-engine@1.0.0 start
> node app.js

Reading files from: /Users/abhishekkhatri/Drive/Stevens/CS600 Advanced Algorithm Design and Implementation/Project/search-engine/data
✔ Karim Benzema - Wikipedia.html
✔ Real Madrid CF - Wikipedia.html
✔ Robert Lewandowski - Wikipedia.html
✔ Neymar - Wikipedia.html
✔ Cristiano Ronaldo - Wikipedia.html
✔ Lionel Messi - Wikipedia.html


Enter the word you want to searh (Enter ':q' to quit): ronaldo

Search Result: 
┌─────────┬───────────────────────────────────────┬────────────┐
│ (index) │               File Name               │ Occurrence │
├─────────┼───────────────────────────────────────┼────────────┤
│    0    │ 'Cristiano Ronaldo - Wikipedia.html'  │    1779    │
│    1    │    'Lionel Messi - Wikipedia.html'    │    346     │
│    2    │   'Karim Benzema - Wikipedia.html'    │    139     │
│    3    │ 'Robert Lewandowski - Wikipedia.html' │    129     │
│    4    │       'Neymar - Wikipedia.html'       │     84     │
│    5    │   'Real Madrid CF - Wikipedia.html'   │     79     │
└─────────┴───────────────────────────────────────┴────────────┘


Enter the word you want to searh (Enter ':q' to quit): world

Search Result: 
┌─────────┬───────────────────────────────────────┬────────────┐
│ (index) │               File Name               │ Occurrence │
├─────────┼───────────────────────────────────────┼────────────┤
│    0    │    'Lionel Messi - Wikipedia.html'    │    595     │
│    1    │ 'Cristiano Ronaldo - Wikipedia.html'  │    433     │
│    2    │       'Neymar - Wikipedia.html'       │    304     │
│    3    │ 'Robert Lewandowski - Wikipedia.html' │    228     │
│    4    │   'Real Madrid CF - Wikipedia.html'   │    131     │
│    5    │   'Karim Benzema - Wikipedia.html'    │    121     │
└─────────┴───────────────────────────────────────┴────────────┘


Enter the word you want to searh (Enter ':q' to quit): best

Search Result: 
┌─────────┬───────────────────────────────────────┬────────────┐
│ (index) │               File Name               │ Occurrence │
├─────────┼───────────────────────────────────────┼────────────┤
│    0    │    'Lionel Messi - Wikipedia.html'    │    193     │
│    1    │ 'Cristiano Ronaldo - Wikipedia.html'  │    162     │
│    2    │ 'Robert Lewandowski - Wikipedia.html' │    140     │
│    3    │       'Neymar - Wikipedia.html'       │     60     │
│    4    │   'Karim Benzema - Wikipedia.html'    │     29     │
│    5    │   'Real Madrid CF - Wikipedia.html'   │     27     │
└─────────┴───────────────────────────────────────┴────────────┘


Enter the word you want to searh (Enter ':q' to quit): uefa

Search Result: 
┌─────────┬───────────────────────────────────────┬────────────┐
│ (index) │               File Name               │ Occurrence │
├─────────┼───────────────────────────────────────┼────────────┤
│    0    │ 'Cristiano Ronaldo - Wikipedia.html'  │    591     │
│    1    │   'Karim Benzema - Wikipedia.html'    │    436     │
│    2    │   'Real Madrid CF - Wikipedia.html'   │    400     │
│    3    │ 'Robert Lewandowski - Wikipedia.html' │    293     │
│    4    │    'Lionel Messi - Wikipedia.html'    │    289     │
│    5    │       'Neymar - Wikipedia.html'       │    191     │
└─────────┴───────────────────────────────────────┴────────────┘


Enter the word you want to searh (Enter ':q' to quit): champions

Search Result: 
┌─────────┬───────────────────────────────────────┬────────────┐
│ (index) │               File Name               │ Occurrence │
├─────────┼───────────────────────────────────────┼────────────┤
│    0    │    'Lionel Messi - Wikipedia.html'    │    356     │
│    1    │   'Real Madrid CF - Wikipedia.html'   │    269     │
│    2    │ 'Cristiano Ronaldo - Wikipedia.html'  │    254     │
│    3    │       'Neymar - Wikipedia.html'       │    237     │
│    4    │   'Karim Benzema - Wikipedia.html'    │    219     │
│    5    │ 'Robert Lewandowski - Wikipedia.html' │    189     │
└─────────┴───────────────────────────────────────┴────────────┘


Enter the word you want to searh (Enter ':q' to quit): barcelona

Search Result: 
┌─────────┬───────────────────────────────────────┬────────────┐
│ (index) │               File Name               │ Occurrence │
├─────────┼───────────────────────────────────────┼────────────┤
│    0    │    'Lionel Messi - Wikipedia.html'    │    624     │
│    1    │       'Neymar - Wikipedia.html'       │    215     │
│    2    │   'Real Madrid CF - Wikipedia.html'   │    150     │
│    3    │ 'Robert Lewandowski - Wikipedia.html' │     59     │
│    4    │ 'Cristiano Ronaldo - Wikipedia.html'  │     42     │
│    5    │   'Karim Benzema - Wikipedia.html'    │     23     │
└─────────┴───────────────────────────────────────┴────────────┘


Enter the word you want to searh (Enter ':q' to quit): bayern

Search Result: 
┌─────────┬───────────────────────────────────────┬────────────┐
│ (index) │               File Name               │ Occurrence │
├─────────┼───────────────────────────────────────┼────────────┤
│    0    │ 'Robert Lewandowski - Wikipedia.html' │    380     │
│    1    │   'Real Madrid CF - Wikipedia.html'   │     71     │
│    2    │    'Lionel Messi - Wikipedia.html'    │     18     │
│    3    │       'Neymar - Wikipedia.html'       │     13     │
│    4    │   'Karim Benzema - Wikipedia.html'    │     8      │
│    5    │ 'Cristiano Ronaldo - Wikipedia.html'  │     6      │
└─────────┴───────────────────────────────────────┴────────────┘


Enter the word you want to searh (Enter ':q' to quit): germany

Search Result: 
┌─────────┬───────────────────────────────────────┬────────────┐
│ (index) │               File Name               │ Occurrence │
├─────────┼───────────────────────────────────────┼────────────┤
│    0    │    'Lionel Messi - Wikipedia.html'    │    156     │
│    1    │ 'Cristiano Ronaldo - Wikipedia.html'  │    146     │
│    2    │   'Real Madrid CF - Wikipedia.html'   │     82     │
│    3    │       'Neymar - Wikipedia.html'       │     69     │
│    4    │ 'Robert Lewandowski - Wikipedia.html' │     38     │
│    5    │   'Karim Benzema - Wikipedia.html'    │     17     │
└─────────┴───────────────────────────────────────┴────────────┘


Enter the word you want to searh (Enter ':q' to quit): GeRmAnY

Search Result: 
┌─────────┬───────────────────────────────────────┬────────────┐
│ (index) │               File Name               │ Occurrence │
├─────────┼───────────────────────────────────────┼────────────┤
│    0    │    'Lionel Messi - Wikipedia.html'    │    156     │
│    1    │ 'Cristiano Ronaldo - Wikipedia.html'  │    146     │
│    2    │   'Real Madrid CF - Wikipedia.html'   │     82     │
│    3    │       'Neymar - Wikipedia.html'       │     69     │
│    4    │ 'Robert Lewandowski - Wikipedia.html' │     38     │
│    5    │   'Karim Benzema - Wikipedia.html'    │     17     │
└─────────┴───────────────────────────────────────┴────────────┘


Enter the word you want to searh (Enter ':q' to quit): :q
```