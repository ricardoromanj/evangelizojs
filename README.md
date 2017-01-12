# EvangelizoJS

EvangelizoJS is a simple NodeJS wrapper for feed.evangelizo.org.

You can:
  - Obtain readings
  - Saints
  - Feast

For a given date. Please refer to feed.evangelizo.org for explanation on these limits (such as fetching someting from more than thirty days ago or into the future).

To install

```sh
npm install --save evangelizo
```

Then load it to your app:
```javascript
import evangelizo from 'evangelizo';
```

To run tests:

```sh
npm test
```

## Examples
To obtain the Saint of the day:
```javascript
evangelizo.getSaint().then((str) => {
  console.log(str);
}, (err) => {
  console.log(err);
});
//#=> St. Marguerite Bourgeoys (1620-1700)
```

You can also specify a date and language:
```javascript
evangelizo.getSaint({ date: Date.(2017, 01, 01), lang: 'SP'}).then((str) => {
  console.log(str);
}, (err) => {
  console.log(err);
});
//#=> Beatos Juan y Renato Lego
```

For readings and titles you must specify a content variable, which can be: 
- FR: First Reading
- PS: Psalm
- SR: Second Reading
- GSP: Gospel

```javascript
evangelizo.getReading('FR').then((str) => {
  console.log(str);
}, (err) => {
  console.log(err);
});

//#=> The holy Spirit says: "Oh, that today you would hear his voice, 'Harden not your hearts as at the rebellion in the day of testing in the desert, where your ancestors tested and tried me and saw my works for forty years. Because of this I was provoked with that generation and I said, "They have always been of erring heart, and they do not know my ways." As I swore in my wrath, "They shall not enter into my rest."'" Take care, brothers, that none of you may have an evil and unfaithful heart, so as to forsake the living God. Encourage yourselves daily while it is still "today," so that none of you may grow hardened by the deceit of sin. We have become partners of Christ if only we hold the beginning of the reality firm until the end.
```

Available functions are:
```javascript
getSaint();
getFeast()
getLiturgicTitle();
getReading();
getReadingLt(); // Long title: Letter to the Hebrews 3:7-14.
getReadingSt(); // Short title: Heb. 3:7-14.
```
