const coolImages = require("cool-images");
const namor = require("namor");
const fs = require("fs");
const { Command } = require('commander');
const { v4 } = require('uuid');
const program = new Command();
program.version('0.0.1');
program.option('-n, --number [number]', 'add number to generate');
program.parse(process.argv);
const options = program.opts();

const priceGenerator = Math.floor(Math.random() * 101); 

const imageGenerator = coolImages.one(160, 260);

const numberOfGoods = options.number;

if(numberOfGoods) {
  const goodsGenerator = () => {
    const result = {};
    result.books = [];
    for (let i = 0; i < numberOfGoods; i++) {
        let generatedObject = {
          id: v4(),
          bookName: namor.generate(),
          authorName: namor.generate(),
          price: priceGenerator,
          currency: namor.generate({words: 1, saltLength: 0}),
          currencyMark: "$",
          image: imageGenerator,
        }
        result.books.push(generatedObject);
    }
    result.booksCount = {
      count: result.books.length,
    }
    /* console.log(resultGoods); */
    return result;
  }
  const generatedGoods = goodsGenerator();
  fs.writeFile("./books.json", JSON.stringify(generatedGoods, null, 2), function(err) {
    if (err) throw err;
    console.log('complete');
    })
}