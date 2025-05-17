import { useState } from 'react';
import './App.css';
import MoodPicker from './Components/MoodPicker';
import MovieList from './Components/MovieList';

function App() {
  let [movie, setMovie] = useState("");
  let [SelectedMood, SetSelectedMood] = useState("");

  let handleSubmit = async (SelectedMood) =>{
    SetSelectedMood(SelectedMood);
    // logic
    try{
      const res = await fetch("", {
        method : "POST",
        headers : {
          "Content-Type" : "json"
        },
        body : JSON.stringify({mood : SelectedMood})
      })

      let data = await res.json();
      setMovie(data.movies);
    }
    catch(err){
      console.log("Error: ", err);
    }
  }

  
  return (
    <div className="App">
      <MoodPicker onsubmit={handleSubmit}/>
      <MovieList movie={movie} />
    </div>
  );
}

export default App;
