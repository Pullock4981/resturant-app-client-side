export async function addUser(url, body) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body), // dynamic body from parameter
    });

    if (!response.ok) {
      console.log(`HTTP error! status: ${response.status}`);
      // throw new Error(HTTP error! status: ${response.status});
    }

    const result = await response.json();
    console.log('Response:', result);
    return result;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}