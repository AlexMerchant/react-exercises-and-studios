import React from 'react';
import styles from './Description.module.css';

const RecipeAuthor = () => {
    let authorLink = "https://www.allrecipes.com/recipe/23600/worlds-best-lasagna/";
    let authorPhoto = "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcam-image-store.accountservices.meredithcorp.io%2F191cde60df57e94a424ccb21d49b2b7bd043cbdb&w=320&h=320&c=sc&poi=face&q=60&orient=true";
    let authorName = "John Chandler";

    return (
        <div className = {styles.recipeAuthorBlock}>
        <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
        <div>
           <h3>{authorName}</h3>
           <a href={authorLink}>allrecipes</a> 
        </div>
     </div>
    );
}

class RecipeDescription extends React.Component {
    render () {
        return (
            <div> 
            <div>
               <h1>World's Best Lasagna</h1>
               <p>Lasagna is a traditional Italian dish known for its layers of flat pasta sheets, typically interleaved with a rich and savory tomato-based meat sauce, béchamel sauce, and generous amounts of melted cheese. It is often assembled with various ingredients like ground beef or Italian sausage, ricotta cheese, and sometimes vegetables like spinach or mushrooms. The layers are stacked in a baking dish and then baked until the pasta becomes tender and the cheese on top turns golden and bubbly. Lasagna is a flavorful and comforting meal, loved by many for its hearty and satisfying taste</p>
            </div>
            <RecipeAuthor />
         </div>
        );
    }
}

export default RecipeDescription;