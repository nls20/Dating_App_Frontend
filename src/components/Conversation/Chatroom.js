import { useState } from "react";
import NewChat from "./NewChat";
import PersonOneMessage from "./PersonOneMessage";
import PersonTwoMessage from "./PersonTwoMessage";
import "./ChatRoom.css";
import { useEffect } from "react/cjs/react.production.min";

const Chatroom = ({ matches }) => {
  let messages = [];
  let messageList = [];

  let test;
  console.log('test1', test);

  const targetUser = window.location.pathname.split("/")[4];

  for (let i = 0; i < matches.length; i++) {
    if (matches[i].matchedUser.id == targetUser) {
        let newPerson;
        messageList = matches[i].messages.map((message, index) => {
          console.log('test', message);
          if (message.fromUser.id != targetUser) {
            console.log("in if");
            messages.push({
              person: 1,
              message: matches[i].messages[index].message,
            });
            newPerson = (
              <PersonOneMessage key={index} message={message.message} />
            );
          } else {
            console.log("in else");
            messages.push({
              person: 2,
              message: matches[i].messages[index].message,
            });
            newPerson = (
              <PersonTwoMessage key={index} message={message.message} />
            );
          }
          return newPerson;
        });
      
    }
     test = <div id="message-list">{messageList}</div>
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
    });
    console.log('len', messageList.length);
     
     console.log('test', test);
  };

  // useEffect(()=>{
  //   test = <div id="message-list">{messageList}</div>
  // }, [messageList])

  return (
    <>
      {test}

      <div id="new-message">
        <NewChat newMessage={addNewMessage} />
      </div>
    </>
  );
};
export default Chatroom;
