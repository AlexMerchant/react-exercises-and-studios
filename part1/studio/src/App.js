import logo from './logo.svg';
import './App.css';
import RecipeDescription from './components/Description';
import RecipeIngredients from './components/Ingredients';
import RecipePhoto from './components/photo';

function App() {
  return (
    <div className="App">
      <div className="recipePhotoBlock">
        <RecipePhoto />
      </div>
      <div>
        <RecipeDescription />
        <RecipeIngredients />
      </div>
    </div>
  );
}

export default App;
