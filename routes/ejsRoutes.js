const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Now its time for the view');
});

module.exports = router;
