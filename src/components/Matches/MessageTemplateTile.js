import "./MessageTemplateTile.css";

const MessageTemplateTile = ({ match , image, message}) => {

  //let messages = []

  //for (int i=0;i<match.length;i++){
  // if (match[i].fromUser.id === 8){
  // messages.push({person: "current", message: match[i].message})
  // } else if(match[i].fromUser.id !== 8) {
  // messages.push({person: "target", message: match[i].message})
  // }
  // }
  let matchName;
  let picture;
  for (let i = 0; i < match.length; i++) {
    if (match !== "Barry") {
      matchName = match;
    }
  }

  let messagePreview = message.messages[message.messages.length-1].message;
//   const maxLength = 60

  

  return (
    <section id="total-tile-section">
      <section id="tile-picture-section">
        <img src={image} />
      </section>

      <section id="tile-section">
        <h5>{matchName}</h5>
        <p>{messagePreview}</p>
      </section>
    </section>
  );
};
export default MessageTemplateTile;
