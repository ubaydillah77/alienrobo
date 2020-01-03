import React from "react";
import "../index.css";

const Card = (props) => {

    const { name , email , id} = props;
    
    return(
             <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                <img src={`https://robohash.org/${id}pornhub?200x200`} alt="robots"/>
                <div>
                    <h2 className="dark-gray">{name}</h2>
                    <p className="dark-gray">{email}</p>
                </div>
            </div>
    );
}

export default Card;