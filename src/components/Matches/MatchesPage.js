import { useState } from "react";
import MatchesPreviewTiles from "./MatchesPreviewTiles";
import MessagesPreview from "./MessagesPreview";
import './MatchesPage.css'

const MatchesPage = ({ matches }) => {
  return (
    <>
      <section></section>
      <h2>Matches</h2>
      <MatchesPreviewTiles matches={matches} />

      <section id="message-section">
        <h2>Messages</h2>
        <MessagesPreview matches={matches} />
      </section>
    </>
  );
};
export default MatchesPage;
