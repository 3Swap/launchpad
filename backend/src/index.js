const express = require('express');
const app = express();
const port = parseInt(process.env.PORT || '12300');

const archives = require('./archives/index.json');

app.get('/archives/:chainId/:saleId', (req, res) => {
  try {
    const { params } = req;
    const result = archives[parseInt(params.chainId)]?.[params.saleId];
    return res.status(200).json({ result });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  next();
});

app.listen(port, () => console.log('Server is running on port %d', port));