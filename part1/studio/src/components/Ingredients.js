import styles from './Ingredients.module.css';

const RecipeIngredients= () => {
    let ingredients = ["meat","onion","garlic","tomato paste","sugar","spices","seasoning","lasagna noodles","cheese","egg","joy","love"];

    return(
        <div>
        <h3>Recipe Ingredients</h3>
        <ul className = {styles.ingredientList}>
            {ingredients.map(i => {return <li>{i}</li>})}
            {/* <li>{ingredients[0]}</li>
           <li>{ingredients[1]}</li>
           <li>{ingredients[2]}</li>
           <li>{ingredients[3]}</li>
           <li>{ingredients[4]}</li> */}
        </ul>
     </div>
    );

}

export default RecipeIngredients;