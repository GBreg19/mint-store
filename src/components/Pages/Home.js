import React from "react";
import ProductList from "../Products/ProductList";
import Slider from "../Body/Slider";
import Container from "../UI/Container";
import cover from "../../Images/cover.jpg";

const Home = () => {
  return (
    <Container className="pt-0">
      <Slider />
      <div className="w-2/3 text-center m-auto pt-5 pb-16">
        <h1 className="font-danc text-5xl tracking-wider mb-10">Mint</h1>
        <p className="font-robotoLight font-bold tracking-wide leading-6">
          Welcome to <span className="font-danc text-lg">Mint!</span> Discover a
          curated selection of books, DVDs, and furniture. Whether you're a
          bookworm looking for your next read, a movie buff in search of the
          latest DVD releases, or a furniture aficionado searching for the
          perfect piece to complete your home decor, you'll find it all here!
        </p>
      </div>
      <div
        style={{ backgroundImage: `url(${cover})` }}
        className="w-full h-[400px] bg-bottom bg-cover mb-20"
      ></div>
      <ProductList />
    </Container>
  );
};

export default Home;
