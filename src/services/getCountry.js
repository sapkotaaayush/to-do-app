async function getCountry(name) {
  const jsonData = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  const myCountry = await jsonData.json();
  
  return myCountry;
} 

export default getCountry;