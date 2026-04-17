const { kv } = require('@vercel/kv');

module.exports = async function handler(req, res) {
  const data = await kv.get('latestCall');
  res.status(200).json(data ?? null);
};
