const Cat = ({ cat }) => {
  console.log(cat);
  return (
    <div>
      <h1>Cat breed: {cat?.height}</h1>
      <img src={cat.url} alt="" />
    </div>
  );
};

export default Cat;
