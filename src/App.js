import {useState , useEffect } from "react";
import getCountry from "./services/getCountry";

function App() 
{
const [country, setCountry] = useState("Nepal");

useEffect(() => {
  const result = getCountry("nepal")
  .then((data) => {
      console.log(data);
    })

    .catch((error) => {
      console.log(error);
    })
 



  console.log(result)
}, []);
  


return (
  <button>{country !== "Nepal" ? country[0].name.common :"Nepal"}</button>
);

} 

export default App;