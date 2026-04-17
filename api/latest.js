module.exports = async function handler(req, res) {
  const response = await fetch(`${process.env.KV_REST_API_URL}/get/latestCall`, {
    headers: { Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}` },
  });
  const { result } = await response.json();
  res.status(200).json(result ? JSON.parse(result) : null);
};
