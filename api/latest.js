module.exports = async function handler(req, res) {
  const response = await fetch(`${process.env.KV_REST_API_URL}/get/latestCall`, {
    headers: { Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}` },
  });
  let { result } = await response.json();
  if (typeof result === 'string') result = JSON.parse(result);
  res.status(200).json(result ?? null);
};
