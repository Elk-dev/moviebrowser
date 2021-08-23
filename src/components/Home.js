import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero text="Welcome to React CIS453L Project" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
          <h2>To use this movie browser:</h2>
              <p className="lead">
                Use the search bar on the top right to search movies and those related.
              </p>
              
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
