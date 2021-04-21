import MessageTemplateTile from "./MessageTemplateTile";
import "./MessagesPreview.css";
import { useEffect } from "react";

const MessagesPreview = ({ matches }) => {
  let preview = [];

  useEffect(() => {
    if (matches) {
      preview = matches.map((match, index) => {
        const hrefName = "/matches/conversation/" + match.name;
        return (
          <a href={hrefName}>
            <MessageTemplateTile match={match} key={index} />
          </a>
        );
      });
    }
  }, [matches]);

  return <section id="preview-section">{preview}</section>;
};
export default MessagesPreview;
