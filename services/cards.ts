const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function getCards () {
  await delay(2500)

  const result = await fetch('api/cards', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!result.ok) {
    throw new Error('Falha na requisição');
  }

  const data = await result.json();
  return data.data;
}

export { getCards }