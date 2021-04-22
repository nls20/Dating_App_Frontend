// import { useState } from "react";
import MatchesPreviewTiles from "./MatchesPreviewTiles";
// import MessagesPreview from "./MessagesPreview";
import "./MatchesPage.css";

const MatchesPage = ({ matches }) => {

  return (
    <>
      <section>
        <h2>Matches</h2>
        <MatchesPreviewTiles matches={matches} />
      </section>
      
      <section id="message-section">
        <h2>Messages</h2>
        <MessagesPreview id="messages-preview" matches={matches} />
      </section>
    </>
  );
};
export default MatchesPage;
