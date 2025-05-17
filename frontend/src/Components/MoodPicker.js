import { useState } from "react";

function MoodPicker(){
    let [mood, setmood] = useState("");

    const handleClick = (mood) =>{
        onsubmit(mood);
        
    }
    const handleFormSubmit = (e) =>{
        e.preventDefault();
        if(mood.trim() !== ""){
            onsubmit(mood);
            setmood("");
        }
    }

    return(
        <>
          <h2>Select or Enter your mood</h2>
          <div className="mood-btns">
            {['Happy', 'Sad', 'Angry', 'Bored', 'Romantic'].map((mood) =>(
                <button onSubmit={() => handleClick(mood)} className="btn btn-success me-3"> {mood}</button>
            ))}
          </div>

          <form onSubmit={handleFormSubmit}>
           <div class="my-3 form-check d-flex justify-content-center">
                <input 
                  type="text"
                  placeholder="Or type your mood"
                  value={mood}
                  onChange={(e) => setmood(e.target.value)} 
                  className="form-control w-50" 
                  id="text"
                  aria-label="mood text">
                </input>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>


          {/* <label for="exampleDataList" class="form-label">Datalist example</label>
            <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search...">
            <datalist id="datalistOptions">
            <option value="San Francisco">
            <option value="New York">
            <option value="Seattle">
            <option value="Los Angeles">
            <option value="Chicago">
            </datalist> */}
        </>
    )
}

export default MoodPicker;