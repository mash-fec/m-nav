const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.send(200);
});

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = server;
