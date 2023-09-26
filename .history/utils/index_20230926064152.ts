
export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': '76dc3afb99mshec61c2fb20bd884p1702dajsn2f82c7c9cc8a',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', { headers: headers, });

  const result = await response.json();

  return result;
}
