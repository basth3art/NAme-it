import React from "react";
import "./NameCard.css"


const namecheapurl = 'https://www.namecheap.com/domains/registration/results/?domain='


const NameCard =({suggestedName}) =>{
    return (

       <a
       target="_blqnk"
       rel="noreferrer"
        className="card-link" href={`${namecheapurl}${suggestedName}`}>
        <div className="result-name-card">
            <p className="result-name">{suggestedName}</p>
        </div>
       </a> 
    )
}

export default NameCard