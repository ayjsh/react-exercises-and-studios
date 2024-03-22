import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://thewoodandspoon.com";
   let authorPhoto = "https://thewoodandspoon.com/wp-content/uploads/2020/01/Headshot_1500x1490@2x-768x763.png";
   let authorName = "Kate Wood";

   return (
      <div>
         <img src={authorPhoto} alt = "photo" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = [
     "1 cup unsalted butter, at room temperature",
     "½ cup sugar",
     "1–1/2 cups light brown sugar, packed",
     "2 large eggs",
     "2 teaspoons pure vanilla extract",
   ];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
     <div>
       <div>
         <h1>The Best Salted Chocolate Chip Cookies</h1>
         <p>
          Naming anything as 'the best' is usually a tall order and lots of
           'best ever' cookies have been around the block. With so many cookie
           recipes on the block, did we really need another one? Turns out, the
           answer is YES.
         </p>
       </div>
       <div className="recipePhotoBlock">
         <RecipeIngredients />
         <RecipeAuthor />
       </div>
     </div>
   );
}

const RecipePhoto = () => {
   return (
     <img
       src="https://thewoodandspoon.com/wp-content/uploads/2022/08/IMG_7757-768x1024.jpg"
       alt="Cookie Pic"
       className="imageUpdates"
     />
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
