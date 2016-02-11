'use strict';
let redis = require('redis'),
redisUrl = process.env.REDIS_URL || 'redis://127.0.0.1:6379',
client = redis.createClient(redisUrl)

client.on("ready", ()=>{
    console.log(`Redis is connected, using Redis ${client.server_info.redis_version}`)
});

module.exports = client
