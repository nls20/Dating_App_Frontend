import { useState } from "react";
import NewChat from "./NewChat";
import PersonOneMessage from "./PersonOneMessage";
import PersonTwoMessage from "./PersonTwoMessage";
import "./ChatRoom.css";

const Chatroom = ({matches}) => {

  let messages=[]
  let messageList=[]

  const targetUser = window.location.pathname.split("/")[4]

  for (let i=0;i<matches.length;i++){

    if (matches[i].matchedUser.id == targetUser){
    for (let j=0;j<matches[i].messages.length;j++){
      let newPerson
       messageList = matches[i].messages.map((message, index) => {
        if (message.fromUser.id != targetUser){
          messages.push({person: 1, message: matches[i].messages[j].message})
          newPerson = <PersonOneMessage key={index} message={message.message} />
        } else {
          messages.push({person: 2, message: matches[i].messages[j].message})
          newPerson = <PersonTwoMessage key={index} message={message.message} />
        }
        return newPerson
      })
      
    }
  }
  }

  
  // const messageList = messageHistory.map((message, index) => {
  //   let newPerson;
  //   if (message.person === 1) {
  //     newPerson = <PersonOneMessage key={index} message={message.message} />;
  //   } else if (message.person === 2) {
  //     newPerson = <PersonTwoMessage key={index} message={message.message} />;
  //   }
  //   return newPerson;
  // });

  const addNewMessage = (newMessage) => {
    
      messageList.push({
        person: 1,
        message: newMessage,
      })
    
  };

  return (
    <>
      <div id="message-list">
        {messageList}
      </div>

      <div id="new-message">
        <NewChat newMessage={addNewMessage} />
      </div>
    </>
  );
};
export default Chatroom;
