import { useState } from "react";
import YesButton from "./YesButton";
import NoButton from "./NoButton";
import "./DisplayInfo.css";
import { useEffect } from "react/cjs/react.production.min";

const DisplayInfo = ({ potentialMatches }) => {
  const [option, setOption] = useState(
    potentialMatches[Math.floor(Math.random() * potentialMatches.length)]
  );
  const [pictureCounter, setPictureCounter] = useState(0);
  const [currentPicture, setCurrentPicture] = useState(option.picture[pictureCounter]);

  // console.log("option", option);

  const selectOption = () => {
    return setOption(
      potentialMatches[Math.floor(Math.random() * potentialMatches.length)]
    );
  };

  const movePicture = (evt) => {
    if (evt.changedTouches[0].clientX > (evt.view.innerWidth / 10) * 9) {
      console.log("liked");
      potentialMatches.splice(potentialMatches.indexOf(option), 1);
      setPictureCounter(0);
      setCurrentPicture(option.picture[0])
      selectOption();
    } else if (evt.changedTouches[0].clientX < evt.view.innerWidth / 10) {
      console.log("not liked");
      potentialMatches.splice(potentialMatches.indexOf(option), 1);
      setPictureCounter(0);
      setCurrentPicture(option.picture[0])
      selectOption();
    }
  };

  const pictureClicked = (event) => {
    if (event.clientX > event.view.innerWidth / 2) {
      if (pictureCounter < option.picture.length - 1) {
        let newNum = pictureCounter + 1;
        setPictureCounter(newNum);
        setCurrentPicture(option.picture[newNum]);
      }
    } else {
      if (pictureCounter > 0) {
        let newNum = pictureCounter - 1;
        setPictureCounter(newNum);
        setCurrentPicture(option.picture[newNum]);
      }
    }
  };

  // useEffect(() => {
  //   console.log("match updated");
  // }, []);

  if (potentialMatches.length > 0) {
    return (
      <div className="display-container">
        <img
          onTouchEnd={movePicture}
          onClick={pictureClicked}
          class="display-picture"
          src={currentPicture}
        ></img>
        <h2>{option.name}</h2>
        <p draggable="true">{option.age}</p>
        <p>{option.location}</p>
        <p>{option.hobbies}</p>
        <div className="swipe-buttons">
          <YesButton
            potentialMatches={potentialMatches}
            option={option}
            selectOption={selectOption}
          />
          <NoButton
            potentialMatches={potentialMatches}
            option={option}
            selectOption={selectOption}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Nobody left in your area!</h2>
        <p>Congratulations you've completed Vinder</p>
      </div>
    );
  }
};

export default DisplayInfo;
