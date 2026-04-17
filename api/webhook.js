module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  let body = req.body;

  // Vercel may fail to parse invalid JSON — fall back to raw string parsing
  if (!body || typeof body !== 'object') {
    try {
      const raw = typeof body === 'string' ? body : JSON.stringify(body);
      body = JSON.parse(raw);
    } catch {
      body = {};
    }
  }

  const payload = { ...body, receivedAt: new Date().toISOString() };

  await fetch(`${process.env.KV_REST_API_URL}/set/latestCall`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  res.status(200).json({ ok: true });
};
