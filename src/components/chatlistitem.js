import React from "react";
import './chatlist.css';

export default ({onClick, active, data}) => {
    return (
       <div 
       className={`chatListItem ${active? 'active': ''}`} 
       onClick={onClick}
       >
        <img className="ChatListItem--avatar" src={data.image} alt="" />
        <div className="ChatListItem--lines">
            <div className="ChatListItem--line">
                <div className="ChatListItem--name">{data.title}</div>
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