`use strict`;
module.exports = exports =
  {
    platform: process.env.platform || `Dummy Platform`,
    platform_logo: process.env.platform_logo || `http://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2015/07/Screen-Shot-2015-07-08-at-2.23.25-PM.png`,
    database: process.env.database || `Elephant Base`,
    database_logo: process.env.database_logo || `http://tapoueh.org/images/220px-Postgresql_elephant.svg.png`,
    stack: process.env.stack || `sinai-15`,
    runtime: process.env.runtime || `Cuppajoe`,
    runtime_logo: process.env.runtime_logo || `https://chocolatey.org/content/packageimages/javaruntime.8.0.66.svg`,
    started: Date.now(),
    cache: process.env.cache_name || 'PitchCache',
    cache_logo: process.env.cache_logo || 'http://www.makaboo.com/Assets/ContentImages/icons/BallGlove.png',
    uptime: process.uptime(),
    memory: process.memoryUsage().heapUsed,
    PID: process.pid
  }
