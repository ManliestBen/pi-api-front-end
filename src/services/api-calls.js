const BASE_URL = process.env.REACT_APP_DYNDNS

async function sendRGBData(rgbData) {
  const res = await fetch(`${BASE_URL}:5001/rgb`, {
    method: 'POST',
    body: JSON.stringify(rgbData),
    headers: {'Content-Type': 'application/json'}
  })
  return res.status
}

async function sendOLEDMessage(message) {
  const res = await fetch(`${BASE_URL}:5001/message`, {
    method: 'POST',
    body: JSON.stringify(message),
    headers: {'Content-Type': 'application/json'}
  })
  return res.status
}

async function runner() {
  const res = await fetch(`${BASE_URL}:5001/runner`)
  return res.status
}
async function invaders() {
  const res = await fetch(`${BASE_URL}:5001/invaders`)
  return res.status
}
async function starField() {
  const res = await fetch(`${BASE_URL}:5001/stars`)
  return res.status
}
async function starWars() {
  const res = await fetch(`${BASE_URL}:5001/starwars`)
  return res.status
}

async function matrix() {
  const res = await fetch(`${BASE_URL}:5001/matrix`)
  return res.status
}

async function tvSnow() {
  const res = await fetch(`${BASE_URL}:5001/snow`)
  return res.status
}
export {
  sendRGBData,
  sendOLEDMessage,
  tvSnow,
  starField,
  runner,
  invaders,
  starWars,
  matrix
}