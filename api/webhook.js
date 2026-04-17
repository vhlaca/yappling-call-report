const { kv } = require('@vercel/kv');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  await kv.set('latestCall', { ...req.body, receivedAt: new Date().toISOString() });
  res.status(200).json({ ok: true });
};
