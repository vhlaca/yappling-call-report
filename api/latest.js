module.exports = async function handler(req, res) {
  const response = await fetch(`${process.env.UPSTASH_REDIS_REST_URL}/get/latestCall`, {
    headers: { Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}` },
  });
  const { result } = await response.json();
  res.status(200).json(result ? JSON.parse(result) : null);
};
