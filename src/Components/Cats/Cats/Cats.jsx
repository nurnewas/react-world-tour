import { useEffect, useState } from "react";
import Cat from "../Cat/Cat";

const Cats = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10").then((res) =>
      res.json().then((data) => {
        console.log(data);
        setCats(data);
      })
    );
  }, []);
  return (
    <div>
      <h1> Only Cat 🐱 </h1>
      {cats.map((cat, index) => (
        <Cat key={index} cat={cat}></Cat>
      ))}
    </div>
  );
};
export default Cats;
