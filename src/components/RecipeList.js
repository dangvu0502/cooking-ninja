import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

// styles
import "./RecipeList.css";

export default function RecipeList({ recipes, handleDelete }) {
  const { mode } = useTheme();

  if (recipes.length === 0) {
    return <div className={`error ${mode}`}> No recipes to load...</div>;
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <button onClick={handleDelete} name={recipe.id}>
            X
          </button>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
        </div>
      ))}
    </div>
  );
}
