import './HelpPage.css';
import { FcHome } from "react-icons/fc";
import { AiFillHeart} from "react-icons/ai";
import { BiMessageDetail} from "react-icons/bi";
import { BsPersonSquare} from "react-icons/bs";

const HelpPage = () => {

    return (
        <>
        <div className="help">
            <h1>Help Page</h1>
            <h3>Home Page
                <div className="home"> <FcHome /> </div>
            </h3>
            <p>If you like what you see, swipe right on the image or tap the heart button to match. If not, swipe left on the image or tap the cross button to move onto the next person.</p>
      
        
            <h3>Matches Page
                <div className="match"><AiFillHeart /> </div> 
            </h3>
            <p>Your matches will appear in the scroll bar at the top of the page. Click on a match to open a message window.  Your messages will appear in the main section of the page. You can access existing messages by clicking your match in the scroll bar or on the main section.</p>

            <h3>Messages
                <div className="message"> <BiMessageDetail /></div>
            </h3> 
            <p>Chat with your match here. If you want to unmatch at any time, use the delete button in the top right hand corner.</p>
    
            <h3>Profile
            <div className="profile"> <BsPersonSquare /></div>
            </h3>
            <p>Upload an image here and fill in your details. Once your details are saved you can update your details here too.</p>
       
        </div>
        </>
    )
}

export default HelpPage;