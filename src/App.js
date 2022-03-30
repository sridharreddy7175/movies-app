import { Container } from "@mui/material";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Nowplaying from "./pages/Nowplaying/Nowplaying";
import Person from "./pages/PersonList/Person";
import PopularMovies from "./pages/PopularMovies/PopularMovies";
import SearchMovies from "./pages/Search/SearchMovies";
import TopRatedMovies from "./pages/TopRatedMovies/TopRatedMovies";
import Trending from "./pages/Trending/Trending";
import TvPopular from "./pages/TvHeader/TvPopular/TvPopular";
import UpComingMovies from "./pages/UpcomingMovies/UpComingMovies";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="app">
        <Switch>
          <Route path="/" component={Header} exact />
          <Route path="/movie" component={PopularMovies} exact />
          <Route path="/movie/now-playing" component={Nowplaying} exact />
          <Route path="/movie/upcoming" component={UpComingMovies} exact />
          <Route path="/movie/top-rated" component={TopRatedMovies} exact />
          <Route path="/tv" component={TvPopular} exact />
          <Route path="/person" component={Person} exact />
          <Route path="/search" component={SearchMovies} exact />



        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
