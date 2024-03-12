import styles from './Description.module.css';
import React from "react";

function RecipeAuthor() {
    const authorLink = "https://thewoodandspoon.com/";
    const authorPhoto = "https://thewoodandspoon.com/wp-content/uploads/2020/01/Headshot_1500x1490@2x-768x763.png";
    const authorName = "Kate Wood";
    
  return (
   <div className = {styles.recipeAuthorBlock}>
      <img src={authorPhoto} alt = "Kate Wood Photo" className={styles.imageUpdates} />
      <div>
         <h3>{authorName}</h3>
         <a href={authorLink}>Wood and Spoon</a> 
      </div>
   </div>
    );
}
   class RecipeDescription extends React.Component {
    render () {
        return (
          <div>
            <div>
              <h1>The Best Salted Chocolate Chip Cookies</h1>
              <p>
                Naming anything as “the best” is usually a tall order and lots
                of “best ever” cookies have been around the block. With so many
                cookie recipes on the block, did we really need another one?
                Turns out, the answer is YES.
              </p>
            </div>
            <RecipeAuthor />
          </div>
        );
   }
}

export default RecipeDescription;