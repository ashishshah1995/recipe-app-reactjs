import React, { useState } from "react";
import recipes from "./data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MDBIcon } from "mdbreact";

const Recipe = () => {
  const [index, setIndex] = useState(0);
  const [recipe, useReipe] = useState(recipes);

  React.useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > recipe.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

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
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = recipe.length - 1;
      }
      return index;
    });
  };

  const randomRecipe = () => {
    let randomNumber = Math.floor(Math.random() * recipes.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <section className="section">
      <section className="section-center">
        {recipes.map((recipeData, recipeIndex) => {
          const { id, name, recipe, image, text } = recipeData;
          let position = "nextSlide";
          if (recipeIndex == index) {
            position = "activeSlide";
          }
          if (
            recipeIndex === index - 1 ||
            (index === 0 && recipeIndex === recipe.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
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
        })}
      </section>
    </section>
  );
};

export default Recipe;
