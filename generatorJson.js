/* eslint-disable no-console */
const coolImages = require('cool-images');
const namor = require('namor');
const fs = require('fs');
const { Command } = require('commander');
const { v4 } = require('uuid');

const program = new Command();
program.version('0.0.1');
program.option('-n, --number [number]', 'add number to generate');
program.parse(process.argv);
const options = program.opts();

const numberOfGoods = options.number;

if (numberOfGoods) {
  const goodsGenerator = () => {
    const result = {};
    result.books = [];
    for (let i = 0; i < numberOfGoods; i + 1) {
      const generatedObject = {
        id: v4(),
        bookName: namor.generate({ words: 3 }),
        authorName: namor.generate({ words: 2 }),
        price: Math.floor(Math.random() * 101),
        currency: namor.generate({ words: 1 }),
        currencyMark: '$',
        image: coolImages.one(160, 260),
        shortDescription: namor.generate({ words: 2 }),
        longDescription: namor.generate({ words: 4 }),
        category: 'horror',
      };
      result.books.push(generatedObject);
    }
    result.booksCount = {
      count: result.books.length,
    };
    /* console.log(resultGoods); */
    return result;
  };
  const generatedGoods = goodsGenerator();
  fs.writeFile(
    './books.json',
    JSON.stringify(generatedGoods, null, 2),
    (err) => {
      if (err) throw err;
      console.log('complete');
    }
  );
}
