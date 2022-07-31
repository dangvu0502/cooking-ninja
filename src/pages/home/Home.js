import { useFetch } from "../../hooks/useFetch";

// styles
import "./Home.css";

//components
import RecipeList from "../../components/RecipeList";
import { useEffect, useState } from "react";

export default function Home() {
  //const deleteId = useRef(null);
  // const options = useRef({
  //   url: "http://localhost:3000/recipes",
  // });
  const { data, isPending, error } = useFetch({
    url: "http://localhost:3000/recipes",
  });
  const { deleteData, error: deleteError } = useFetch({
    url: "http://localhost:3000/recipes",
    method: "DELETE",
  });

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (data) setRecipes(data);
  }, [data]);

  const handleDelete = (e) => {
    const deleteId = e.target.name;
    deleteData(deleteId);
    if (!deleteError)
      setRecipes(recipes.filter((recipe) => recipe.id !== deleteId));
  };

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={recipes} handleDelete={handleDelete} />}
    </div>
  );
}
