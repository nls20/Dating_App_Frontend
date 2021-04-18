import "./PersonOneMessage.css";

const PersonOneMessage = ({ message }) => {
  return (
    <div id="player-one-container">
      <section id="player-one-message">
        <p>{message}</p>
      </section>
    </div>
  );
};
export default PersonOneMessage;
