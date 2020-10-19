const express = require('express');
const app = express();

app.use('/ejs', require('./routes/ejsRoutes'));
const port = 3001;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
