import { useState, useEffect } from "react";
import YesButton from "./YesButton";
import NoButton from "./NoButton";
import "./DisplayInfo.css";

const DisplayInfo = ({ potentialMatches }) => {
  const [option, setOption] = useState(
    potentialMatches[Math.floor(Math.random() * potentialMatches.length)]
  );
  const [pictureCounter, setPictureCounter] = useState(0);
  const [currentPicture, setCurrentPicture] = useState();


  // console.log("option", option);

  const selectOption = () => {
    return setOption(
      potentialMatches[Math.floor(Math.random() * potentialMatches.length)]
    );
  };

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.now();
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  
  const initializeClock = (id, endtime) => {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
  
    const updateClock = () =>  {
      var t = getTimeRemaining(endtime);
  
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  // count down timer:
  var deadline = new Date(Date.now() + 1 * 30 * 60 * 60 * 1000);
  initializeClock('clockdiv', deadline);



  const movePicture = (evt) => {
    console.log("show", option.picture[0]);
    if (evt.changedTouches[0].clientX > (evt.view.innerWidth / 10) * 9) {
      potentialMatches.splice(potentialMatches.indexOf(option), 1);
      let newNum = pictureCounter + 1;
      selectOption();
      setPictureCounter(newNum);
      setCurrentPicture(option.picture[0])
      console.log("liked", currentPicture);
      

    } else if (evt.changedTouches[0].clientX < evt.view.innerWidth / 10) {
      console.log("not liked", currentPicture);
      potentialMatches.splice(potentialMatches.indexOf(option), 1);
      let newNum = pictureCounter - 1;
      selectOption();
      setPictureCounter(newNum);
      setCurrentPicture(option.picture[0])
    
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

  useEffect(() => {
    if (potentialMatches.length > 0) {setCurrentPicture(option.picture[0])}
  }, [potentialMatches]);

  if (potentialMatches.length === 0) {
    return (
      <div>
        <h2>Nobody left in your area!</h2>
        <p>Congratulations you've completed Vinder</p>
        <p>{initializeClock}</p>
        
      </div>
    );
  } else {
    return (
      <div className="display-container">
        <img
          onTouchEnd={movePicture}
          onClick={pictureClicked}
          className="display-picture"
          src={option.picture[0]}
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
  }
};

export default DisplayInfo;