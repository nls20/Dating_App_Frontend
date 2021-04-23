import MessageTemplateTile from "./MessageTemplateTile";
import "./MessagesPreview.css";
import { useEffect, useState } from "react";

const MessagesPreview = ({ matches }) => {
  const [previews, setPreviews] = useState(null);

  useEffect(() => {
    if (matches){
    let messageList = [];
    console.log('matches', matches);
    for (let i = 0; i < matches.length; i++) {
      if (matches[i].messages.length > 0) {
        messageList.push(matches[i].messages);
      }
    }

    let newPreviews = messageList.map((message, index) => {
      const hrefName = "/matches/conversation/7/" + matches[index].matchedUser.id
      return (
        <a href={hrefName}>
        <MessageTemplateTile match={matches[index].matchedUser.name} image={matches[index].matchedUser.profileImages[0].mongoId} message={matches[index]} key={index} />
        </a> 
      );
    });
    setPreviews(newPreviews);
  }
  }, [matches]);

  return <section id="preview-section">{previews}</section>;
};
export default MessagesPreview;
