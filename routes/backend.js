var express = require('express');
var router = express.Router();

const axios = require('axios').default;
const backend_address = process.env.BACKEND_ADDRESS || 'http://backend:3000';

/* GET users listing. */
router.get('/', async function (req, res, next) {
  try {
    var data = await axios.get(`${backend_address}`);
    res.send(`${data.data}`);
  }
  catch (error) {
    res.send(error);
  }
});

module.exports = router;
