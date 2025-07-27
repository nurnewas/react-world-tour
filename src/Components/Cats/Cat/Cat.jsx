const Cat = ({ cat }) => {
  console.log(cat);
  return (
    <div className="container">
      <div className="cat">
        <h1>Cat height: {cat?.height}</h1>
      </div>
      <div className="cat">
        <img src={cat.url} alt="" />
      </div>
    </div>
  );
};

export default Cat;
