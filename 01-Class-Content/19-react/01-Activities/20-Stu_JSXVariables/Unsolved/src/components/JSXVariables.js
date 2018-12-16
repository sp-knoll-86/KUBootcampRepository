import React from "react";

const name = "Spencer Knoll";
const reactFeelings = "is great";

const stripVowels = name.replace(/[aeiou]/ig, '');
const stripConsonants = name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '');

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {name}</h1>
          <hr />
          <h2>My name has {name.length} letters</h2>
          <hr />
          <h2>I think React {reactFeelings}</h2>
          <hr />
          <h2>My name without any vowels is: {stripVowels}</h2>
          <hr />
          <h2>My name without any consonants is: {stripConsonants}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
