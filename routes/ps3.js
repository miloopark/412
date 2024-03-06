const express = require('express');
const router = express.Router();

// GET route returning a fixed string in a JSON object
router.get('/fixedString', (req, res) => {
  const responseObject = { string: 'Hey now' }; 
  res.render('index', { title: 'GET Route', message: responseObject.string });
});

// POST route that gets parameter from the body and returns a JSON object
router.post('/postRoute', express.urlencoded({ extended: true }), (req, res) => {
  const message = req.body.message || 'Default message';
  const responseObject = { 
    originalString: message,
    length: message.length
  };
  res.render('index', { title: 'POST Route', message: responseObject.originalString, length: responseObject.length });
});

// GET route with named URL parameter that passes a JSON object to Pug
router.get('/names/:name', (req, res) => {
  const name = req.params.name;
  const responseObject = { name: name }; 
  res.render('index', { title: 'GET Route with Param', name: responseObject.name });
});

module.exports = router;
