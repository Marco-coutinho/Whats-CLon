import React from "react";
import './chatlist.css';

export default ({onClick}) => {
    return (
       <div 
       className="ChatListItem" 
       onClick={onClick}
       >
        <img className="ChatListItem--avatar" src="https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg" alt="" />
        <div className="ChatListItem--lines">
            <div className="ChatListItem--line">
                <div className="ChatListItem--name">bonnie</div>
                <div className="ChatListItem--date">10:00</div>    
            </div>
            <div className="ChatListItem--line">
                <div className=" ChatListItem--lastMsg">
                    <p>Aoba!</p>
                </div>
            </div>
        </div>
      </div> 
    );
}