import { useState } from 'react';
import './App.css';
import MoodInput from './Components/MoodInput';



function App() {
 return (
    <div className="App">
      <MoodInput />
    </div>
  );
}

export default App;




// import MoodPicker from './Components/MoodPicker';
// import MovieList from './Components/MovieList';

// function App() {
//   let [movie, setMovie] = useState("");
//   let [selectedMood, setSelectedMood] = useState("");

//   let handleSubmit = async (mood) =>{
//     setSelectedMood(mood);
//     // logic
//     try{
//       const res = await fetch(`${process.env.REACT_APP_API_URL}/api/recommend`, {
//         method : "POST",
//         headers : {
//           "Content-Type" : "application/json"
//         },
//         body : JSON.stringify({ mood })
//       })

//       let data = await res.json();
//       console.log("API response:", data);
//       setMovie(data.movies);
//     }
//     catch(err){
//       console.log("Error: ", err);
//     }
//   }


//   return (
//     <div className="App">
//       <MoodPicker onsubmit={handleSubmit}/>
//       <MovieList movie={movie} />
//     </div>
//   );
// }

// export default App;

