import { useState, useEffect } from "react";
import YesButton from "./YesButton";
import NoButton from "./NoButton";
import "./DisplayInfo.css";

const DisplayInfo = ({ potentialMatches }) => {

  const [option, setOption] = useState(null);
  const [pictureCounter, setPictureCounter] = useState(0);
  const [currentPicture, setCurrentPicture] = useState();

  //-------count down clock---------
  const [counter, setCounter] = useState(60);

  useEffect(() => {
    setOption(potentialMatches[Math.floor(Math.random() * potentialMatches.length)])
  }, [potentialMatches])

  // console.log("option", option);

  const selectOption = () => {
    return setOption(
      potentialMatches[Math.floor(Math.random() * potentialMatches.length)]
    );
  };

console.log("this is the optoin", option.profileImages[0].mongoId)
console.log("this is the user", potentialMatches)



  const movePicture = (evt) => {
    console.log("show", option.picture[0]);
    if (evt.changedTouches[0].clientX > (evt.view.innerWidth / 10) * 9) {
      potentialMatches.splice(potentialMatches.indexOf(option), 1);
      let newNum = pictureCounter + 1;
      selectOption();
      setPictureCounter(newNum);
      setCurrentPicture(option.profileImages[0].mongoId)
      console.log("liked", currentPicture);
      

    } else if (evt.changedTouches[0].clientX < evt.view.innerWidth / 10) {
      console.log("not liked", currentPicture);
      potentialMatches.splice(potentialMatches.indexOf(option), 1);
      let newNum = pictureCounter - 1;
      selectOption();
      setPictureCounter(newNum);
      setCurrentPicture(option.profileImages[0].mongoId)
    
    }
  };

  const pictureClicked = (event) => {
    if (event.clientX > event.view.innerWidth / 2) {
      if (pictureCounter < option.picture.length - 1) {
        let newNum = pictureCounter + 1;
        setPictureCounter(newNum);
        setCurrentPicture(option.profileImages[0].mongoId);
      }
    } else {
      if (pictureCounter > 0) {
        let newNum = pictureCounter - 1;
        setPictureCounter(newNum);
        setCurrentPicture(option.profileImages[0].mongoId);
      }
    }
  };

  // useEffect(() => {
  //   if (potentialMatches.length > 0) {
  //     setCurrentPicture(option.picture[0])
  //   }
  // }, [potentialMatches]);


  useEffect(() => {
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
      if (counter === 0){
        window.location.reload(false);
    }
  }, [counter]);

  if (potentialMatches.length === 0) {
    return (
      <div className="ran-out-of-matches">
        <h2>Nobody left in your area!</h2>
        <p>Congratulations you've completed Vinder</p>
        <h2>Try again in: {counter}</h2>
      </div>
    );
  } else {
    return (
      <div className="display-container">
        <img
          onTouchEnd={movePicture}
          onClick={pictureClicked}
          className="display-picture"
          src={option.profileImages[0].mongoId}
        ></img> 
        <h2>{option.name}</h2>
        <p draggable="true">{option.age}</p>
        <p>{option.gender}</p>
        <p>{option.location}</p>
        <p>{option.bio}</p>
        <div className="swipe-buttons">
        <NoButton
            potentialMatches={potentialMatches}
            option={option}
            selectOption={selectOption}
          />
          <YesButton
            potentialMatches={potentialMatches}
            option={option}
            selectOption={selectOption}
          />
          
        </div>
      </div>
    );
  }
};

export default DisplayInfo;