'use strict';
let redis = require('redis'),
  redisUrl = process.env.REDIS_URL || 'redis://127.0.0.1:6379',
  client = redis.createClient(redisUrl)

client.on("ready", ()=>{
    console.log(`Redis is connected, using Redis ${client.server_info.redis_version} at ${redisUrl}`)
});

// client.monitor((err, res)=>{
//     console.log("Entering monitoring mode.");
// });
//
// client.on("monitor", (time, args)=>{
//     // console.log(time + ": " + util.inspect(args));
// });

module.exports = client
