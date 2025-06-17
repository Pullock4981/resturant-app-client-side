export async function purchaseProduct(url, body) {
  try {
    const response = await fetch(url, {
      method: 'PUT',
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
    return true;
  } catch (error) {
    console.error('Error:', error);
      return false;
  }
}