import React, { useState } from "react";
import recipes from "./data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MDBIcon } from "mdbreact";

const Recipe = () => {
  const [index, setIndex] = useState(0);
  const { name, recipe, image, text } = recipes[index];

  const checkNumber = (number) => {
    if (number > recipes.length - 1) {
      return 0;
    }
    if (number < 0) {
      return recipes.length - 1;
    }
    return number;
  };

  const nextRecipe = () => {
    const newIndex = index + 1;
    setIndex(checkNumber(newIndex));
  };

  //Alternate approach
  // setIndex((index) => {
  //     let newIndex = index - 1;
  //     return checkNumber(newIndex);
  //   });
  const prevRecipe = () => {
    const newIndex = index - 1;
    setIndex(checkNumber(newIndex));
  };

  const randomRecipe = () => {
    let randomNumber = Math.floor(Math.random() * recipes.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="recipe-img" />
        <span className="quote-icon">
          <MDBIcon icon="pepper-hot" />;
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <a href={recipe} className="recipe" target="_blank">
        Link to recipe
      </a>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevRecipe}>
          <FaChevronLeft />
        </button>
        <button onClick={nextRecipe} className="next-btn">
          <FaChevronRight />
        </button>
      </div>
      <button onClick={randomRecipe} className="random-btn">
        surprise me
      </button>
    </article>
  );
};

export default Recipe;
