const csvParser = require('csv-parser');
const fs = require('fs');
const Trade = require('../models/Trade');

// Controller to handle file upload and parsing
const uploadCSV = (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }

  const trades = [];
  const filePath = req.file.path;

  fs.createReadStream(filePath)
    .pipe(csvParser())
    .on('data', (row) => {
      const [baseCoin, quoteCoin] = row.Market.split('/');
      trades.push({
        utc_time: new Date(row.UTC_Time),
        operation: row.Operation,
        base_coin: baseCoin,
        quote_coin: quoteCoin,
        amount: parseFloat(row['Buy/Sell Amount']),
        price: parseFloat(row.Price),
      });
    })
    .on('end', async () => {
      try {
        await Trade.insertMany(trades);
        res.status(200).send('Trades inserted successfully');
      } catch (error) {
        res.status(500).send('Error inserting trades');
      }
    });
};

module.exports = { uploadCSV };
