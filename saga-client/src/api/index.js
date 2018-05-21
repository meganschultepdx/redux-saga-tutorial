export const postLoginUser = async (email, password) => {
  const response = await fetch('http://localhost:3000/users', {
    method: 'POST',
    body: JSON.stringify({email, password}),
    headers: {
      "Content-Type": "application/json"
    }
  })

  if(response.status === 200) {
    return await response.json()
  } else {
    throw(new Error(`Errored with status code ${response.status}`))
  }
}
