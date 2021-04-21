import {useState, useEffect} from 'react'
import FolderIcon from "./assets/folder_icon_transparent.png";
import CloseIcon from "./assets/CloseIcon.svg";
import AddingImageServices from '../../services/AddingImageServices';

const AddImageToUser = () => {
  const [image, setImage] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);
  const [typeFile, setTypeFile] = useState("");
  const [base64, setBase64] = useState("")


  const handleFileSelected = (evt) => {
    if (evt.target.files && evt.target.files[0]) {
      setTypeFile(evt.target.files[0].type);
      let reader = new FileReader();
      reader.readAsDataURL(evt.target.files[0]);

      reader.onload = () => {
        setImage(reader.result);
        AddingImageServices.postProfileImage(evt.target.files[0])
        setIsUploaded(true);
      };
    }
  }


  // useEffect(() => {
  //   AddingImageServices.postProfileImage(profileImage)
  // })

// //GET user information
//   useEffect(() => {
//     UserServices.getUserInformation(userId)
//     .then(data => setUser(data))
//  }, [])


  return(
    <form>
      <div className="image-upload"> 
            {!isUploaded ? (
              <>
                <label htmlFor="upload-input">
                  <img
                    src={FolderIcon}
                    draggable={"false"}
                    alt="placeholder"
                    style={{ width: 50, height: 50 }}
                  />
                  <p id="add-image">Add Image</p>
                </label>

                <input
                  id="upload-input"
                  type="file"
                  accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                  onChange={handleFileSelected}
                />
              </>
            ) : (
              <>
                <img
                  className="close-icon"
                  src={CloseIcon}
                  alt="CloseIcon"
                  onClick={() => {
                    setIsUploaded(false);
                    setImage(null);
                  }}
                />
                <img
                  id="uploaded-image"
                  src={image}
                  draggable={false}
                  alt="uploaded-img"
                  />
                </>
            )}
        </div>
    </form>
  )
}

export default AddImageToUser;