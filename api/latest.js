const { Redis } = require('@upstash/redis');
const redis = Redis.fromEnv();

module.exports = async function handler(req, res) {
  const data = await redis.get('latestCall');
  res.status(200).json(data ?? null);
};
