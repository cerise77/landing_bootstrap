let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('pages/index');
});

router.get('/', (req, res, next) => {
  res.render('pages/blog');
});


module.exports = router;
