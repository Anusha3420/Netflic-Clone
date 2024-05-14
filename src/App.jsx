import React from 'react'
import { BrowserRouter ,Route,Routes} from "react-router-dom";
import Login1 from "./pages/Login1";
import Signup from "./pages/Signup";
import Netflix from "./pages/Netflix";
import Player from  "./pages/Player";
import MoviePage from "./pages/Movies";
import TVShows from "./pages/TVShows";
import UserListedMovies from "./pages/UserListedMovies";


export default function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route exact path="/login" element={<Login1/>} />
      <Route exact path="/" element={<Signup/>} />
      <Route exact path="/player" element={<Player/>} />
      <Route exact path="/tv" element={<TVShows />} />
        <Route exact path="/movies" element={<MoviePage />} />
        <Route exact path="/new" element={<Player />} />
        <Route exact path="/mylist" element={<UserListedMovies />} />

      <Route exact path="/netflix" element={<Netflix/>} />

    </Routes>
    </BrowserRouter>
  )
}
