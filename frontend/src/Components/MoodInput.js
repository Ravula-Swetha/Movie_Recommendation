import React, {useState, useEffect} from 'react';
import axios from 'axios';

function MoodInput(){
    const [formData, setFormData] = useState({
        mood : "",
        genre : "",
        language: "",
        year: ""
    });

    const [error, setError] = useState("");

    // Input Change
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData((prevState) =>({
            ...prevState,
            [name] : value
        })
        )
    }

    // Form Submission
    const handleSubmit = (e) =>{
        e.preventDefault();

        axios.post('https://localhost:5000/api/mood', formData)
        .then((response) =>{
            console.log(response.data);
            //SEND RESPONSE TO MOVIECARD.JS
            alert("Form Submitted");
        })
        .catch((err) =>{
            setError("Message: Error Submitting form data to server: ", err);
            console.log("Error Submitting form data to server: ", err);
        })
        
    }
    return(
        <>
            <div className='container mt-5'>
                <h3>Find Movies by Mood </h3>
                <form onSubmit={handleSubmit}>

                    {/* Mood */}
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Mood</label>
                        <input type="text" name="mood" value={formData.mood} class="form-control" id="exampleFormControlInput1" placeholder="Enter your current mood" onChange={handleChange} />
                    </div>

                    <div className="mb-3">
                            <label htmlFor="mood" className="form-label">Select your mood:</label>
                            <select
                                className="form-select"
                                id="mood"
                                name="mood"
                                value={formData.mood}
                                onChange={handleChange}
                            >
                                <option value="">-- Select Mood --</option>
                                <option value="happy">Happy</option>
                                <option value="sad">Sad</option>
                                <option value="excited">Excited</option>
                                <option value="romantic">Romantic</option>
                                <option value="stressed">Stressed</option>
                            </select>
                        </div>
                    {/* Genre */}
                        <div className="mb-3">
                            <label htmlFor="genre" className="form-label">Select your genre:</label>
                            <select
                                className="form-select"
                                id="genre"
                                name="genre"
                                value={formData.genre}
                                onChange={handleChange}
                            >
                                <option value="">-- Select genre --</option>
                                <option value="comedy">Comedy</option>
                                <option value="Mystery">Mystery</option>
                                <option value="Horror">Horror</option>
                                <option value="Romance">Romance</option>
                            </select>
                        </div>

                    {/* Language */}
                    <div className="mb-3">
                            <label htmlFor="language" className="form-label">Select your language:</label>
                            <select
                                className="form-select"
                                id="language"
                                name="language"
                                value={formData.language}
                                onChange={handleChange}
                            >
                                <option value="">-- Select language --</option>
                                <option value="english">English</option>
                                <option value="hindi">Hindi</option>
                                <option value="japanese">Japanese</option>
                                <option value="french">French</option>
                            </select>
                        </div>
                    
                    {/* Year */}
                    <div className="mb-3">
                            <label htmlFor="year" className="form-label">Select your year:</label>
                            <select
                                className="form-select"
                                id="year"
                                name="year"
                                value={formData.year}
                                onChange={handleChange}
                            >
                                <option value="">-- Select year --</option>
                                <option value="1800">1800s</option>
                                <option value="1900">1900s</option>
                                <option value="1950">1950s</option>
                                <option value="2000">2000s</option>
                            </select>
                        </div>

                    <button type='submit' className='btn btn-primary'>Get Recommendations</button>
                </form>
                <p style={{color: "red"}}>{error}</p>
            </div>
        </>
    )
}

export default MoodInput;