const coolImages = require("cool-images");
const namor = require("namor");
const { Command } = require('commander');
const { v4 } = require('uuid');
const program = new Command();
program.version('0.0.1');
program.option('-c, --number [number]', 'add number to generate');
program.parse(process.argv);

const priceGenerator = Math.floor(Math.random() * 101); 

const imageGenerator = coolImages.one(160, 260);

const goodsGenerator = (numberOfGoods) => {
  for(let i = 0; i< numberOfGoods; i++){
    return (JSON.stringify({
      id: v4(),
      bookName: namor.generate(),
      authorName: namor.generate(),
      price: priceGenerator,
      currency: namor.generate({words: 1, saltLength: 3}),
      currencyMark: "$",
      image: imageGenerator,
    }))
  }
}

module.exports.goodsGenerator = goodsGenerator;