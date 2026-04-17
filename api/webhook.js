const { Redis } = require('@upstash/redis');
const redis = Redis.fromEnv();

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  await redis.set('latestCall', { ...req.body, receivedAt: new Date().toISOString() });
  res.status(200).json({ ok: true });
};
