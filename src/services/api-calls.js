const BASE_URL = process.env.REACT_APP_DYNDNS

async function sendRGBData(rgbData) {
  const res = await fetch(`${BASE_URL}:5001/post_json`, {
    method: 'POST',
    body: JSON.stringify(rgbData),
    headers: {'Content-Type': 'application/json'}
  })
  return res.status
}

export {
  sendRGBData
}