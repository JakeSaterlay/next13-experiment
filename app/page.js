import Movies from "@/components/Movies";
import SearchBar from "@/components/SearchBar";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  return (
    <main>
      <div>
        <SearchBar />
        <Movies movies={res.results} />
      </div>
    </main>
  );
}
