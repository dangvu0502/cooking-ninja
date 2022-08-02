import { useFetch } from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import RecipeList from "../../components/RecipeList";

// styles
import "./Search.css";
import { useTheme } from "../../hooks/useTheme";

export default function Search() {
  const { mode } = useTheme();
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");
  const url = `http://localhost:3000/recipes?q=${query}`;
  const { error, isPending, data } = useFetch({ url: url });

  return (
    <div>
      <h2 className={`page-title ${mode}`}>
        Search Recipes including "{query}"
      </h2>
      {error && <p className={`error ${mode}`}>{error}</p>}
      {isPending && <p className={`loading ${mode}`}>Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
