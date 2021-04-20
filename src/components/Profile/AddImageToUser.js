import {useSate} from 'react'

const AddImageToUser = () => {
  const [profileImage, setProfileImage] = useSate("")
  const [base64, setBase64] = userState("")
  const [isUploaded, setIsUploaded] = useState(false);
  const [typeFile, setTypeFile] = useState("");
  const [size, setSize] = useState("");

  const onChange = (evt) => {
    console.log("file", evt.target.files[0]);
    let image = evt.target.files[0];
    if (image) {
      const reader = new FileReader();
      reader.onload = _handleReaderLoaded
      reader.readAsBinaryString(file)
    }
  }

  const _handleReaderLoaded = (readerEvt) => {
    let binaryString = readerEvt.target.result;
    setBase64(btoa(binaryString))
  }

  const onFileSubmit = (evt) => {
    setIsUploaded(true);
    evt.preventDefault()
    // console.log("bine", base64)
    let payload = { image: base64 }
    // console.log("payload", payload)

    setTimeout(() => {
      setIsUploaded(false)
    }, 2000)
  }

  const photoUpload = (evt) => {
    evt.preventDefault();
    const reader = new FileReader();

    const file = evt.target.files[0];

    console.log("reader", reader)
    console.log("file", file)
    if (reader !== undefined && file !== undefined) {
      reader.onloadend = () => {
        setTypeFile(file)
        setSize(file.size);
        setProfileImage(reader.result)
      }
      reader.readAsDataURL(file);
    }
  }

  const remove = () => {
    setFile("")
    setImagePreview("")
    setBase64("")
    setName("")
    setSize("")
  }

  return(
      <form onSubmit={(evt) => onFileSubmit(evt)} onChange={(evt) => onChange(evt)}>
          width={profileImage === "" ? 310 : 310}
          height={profileImage === "" ? 400 : 480} >

            width={profileImage === "" ? 120 : 145}
            height={profileImage === "" ? 120 : 145} >
              <img src={profileImage} alt="Icone adicionar" />
        
            <input type="file" name="avatar" id="file" accept=".jpef, .png, .jpg" onChange={photoUpload} src={profileImage} />

            <button type="submit" >Add image</button>
            <button type="button" onClick={remove} >Remover</button>
      </form>
  )

 
}