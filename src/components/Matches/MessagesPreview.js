import MessageTemplateTile from "./MessageTemplateTile";
import "./MessagesPreview.css";
import { useEffect, useState } from "react";

const MessagesPreview = ({ matches }) => {
  const [previews, setPreviews] = useState(null)

  
  

  useEffect(() => {
    for (let i = 0;i<matches.length;i++){
      console.log("matches", matches[i]);
    }
    if (matches) {
      let newPreviews = matches.map((match, index) => {
        if (matches){
        const hrefName = "/matches/conversation/" + match.user.name;
        return (
          <a href={hrefName}>
            <MessageTemplateTile match={match} key={index} />
          </a>
        )
      }
    })
      setPreviews(newPreviews)
    }
  }, [matches]);

  return <section id="preview-section">{previews}</section>;
};
export default MessagesPreview;
