const router = require('express').Router();

router.get('/', (req, res) => {
  // res.send('Now its time for the view');
//render the view, 1st argument is the file
// 2nd argument is an object
res.render('index');

});


router.get('/p/:dog/:cat',(req, res)=>{
  let car = req.query.search;
  let dog= req.params.dog;
  let cat = req.params.cat;

return res.render('index',{myDog: dog, myCat: cat, myCar: car});
});


router.get('/loop',(req, res)=>{
  let places = [
    {city:'Stamford', state:'CT'},
    {city:'New York', state:'NY'},
    {city:'Newark', state:'NJ'}
  ];
  return res.render('main/index', {myPlaces:places});
})
module.exports = router;
