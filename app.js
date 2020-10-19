const express = require('express');
const app = express();
const path = require('path');
//set the view for express
app.set('view engine', 'ejs');
//views are located
app.set('views', path.join(__dirname, 'views'));



app.use('/ejs', require('./routes/ejsRoutes'));
const port = 3001;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
