import React, { useState } from 'react';

function MoodCard() {
    const CardConfig = [
        { id: "1", img_link: "", title: "Your Name", genre: "animated", year: 2010, language: "Japanese", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut perferendis, aut saepe dolorum, libero, delectus iure laboriosam dolorem dicta quaerat tenetur! Natus esse harum nisi reiciendis dignissimos alias, autem suscipit!" },
        { id: "2", img_link: "", title: "Pokemon", genre: "animated", year: 2020, language: "Japanese", description: "second" },
        { id: "3", img_link: "", title: "Naruto", genre: "animated", year: 2000, language: "Japanese", description: "third" }
    ]

    const handleClick = () => {
        console.log("Add to Favourite");
    }
    return (
        <div className='container'>
            <div className='row'>
                {CardConfig.map(item => (
                    <div key={item.id} className="card col-md-4 m-3" style={{"width": "18rem"}}>
                        <img src={item.img_link} class="card-img-top" alt={item.title} />
                        <div class="card-body">
                            <h5 class="card-title">{item.title}</h5>
                            <p class="card-text">{item.genre}.</p>
                            <p class="card-text">{item.year}.</p>
                            <p class="card-text">{item.language}.</p>
                            <p class="card-text">{item.description}.</p>
                            <button onClick={handleClick} class="btn btn-primary">Add to Favourite</button>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default MoodCard;