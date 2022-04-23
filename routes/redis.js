var express = require('express');
var router = express.Router();
const redis = require('redis');

const redis_address = process.env.REDIS_ADDRESS || 'redis:6379';

console.log(`will connect to redis: redis://${redis_address}`)
const redisClient = redis.createClient({
  url: `redis://${redis_address}`
});

redisClient.on('error', (err) => {
  console.log('Error occured while connecting or accessing redis server');
  throw 'error connecting to redis';
});
/* GET users listing. */
router.get('/', async function (req, res, next) {
  try {
    await redisClient.connect();

    await redisClient.set('key', 'value');
    await redisClient.disconnect();
    res.send('connected to redis');
  }
  catch (error) {
    res.send(error);
  }

});

module.exports = router;
