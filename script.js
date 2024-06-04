document.getElementById('loginForm').addEventListener('submit', async function (event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => { data[key] = value });

  try {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    document.getElementById('responseMessage').innerText = result.message;
  } catch (error) {
    console.error('Error:', error);
    document.getElementById('responseMessage').innerText = 'An error occurred. Please try again.';
  }
});
