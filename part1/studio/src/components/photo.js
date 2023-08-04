import styles from './Description.module.css';

const RecipePhoto = () => {
    return (
        <img src="https://www.allrecipes.com/thmb/MkKfYU4oim55CLp39DDuNMuyThA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/23600-worlds-best-lasagna-armag-4x3-1-b24f9ad518d74090bf197828492c64a6.jpg" alt="recipe photo" className = {styles.imageUpdates} />
    );
}

export default RecipePhoto;