import SwipingPage from "./SwipingPage"

const DisplayInfo = ({option}) => {

return (
    <div>
        <img src={option.picture}></img>
        <h2>{option.name}</h2>
        <p>{option.age}</p>
        <p>{option.location}</p>
        <p>{option.hobbies}</p>
    </div>
)
}

export default DisplayInfo