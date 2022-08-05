const BASE_URL = process.env.DYNDNS

async function sendRGBData(rgbData) {
  const res = await fetch(`BASE_URL${`:5001`}`, {
    body: JSON.stringify(rgbData),
    headers: {'Content-Type': 'application/json'}
  })
  return res.status
}

export {
  sendRGBData
}