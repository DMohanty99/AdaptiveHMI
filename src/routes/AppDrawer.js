import {Container,Row,Button,Card,Col,CloseButton } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import AppData from "../Utils/AppData";

let buttonText=['Alexa','Spotify','GMail','OutLook','WhatsApp','FaceBook',
'Instagram','Teams','Calender','Calculator','Clock','News',
'Reddit','YouTube','Google','Maps','Messages','Netflix','Amazon',
'FlipKart','LensKart'];
let CustomButtonStyle={
    height: '20vh', // Set the desired height
    width: '10vw',
    margin: '3vh',
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundImage: `url('/youtubeLogo.webp')`,
    border: 'none',
    cursor: 'pointer',
    backgroundRepeat: 'no-repeat'
    
}
const fullScreenStyle = {
    height: '100vh', // 100% of the viewport height
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5vh',
    backgroundImage: 'url("JLRbg.jpeg")',
  backgroundSize: 'cover', // Adjust the size as needed
  backgroundRepeat: 'no-repeat' // Prevent image from repeating

  };

function AppDrawer(){
    let buttonList=[]
    let navigate= useNavigate();
    for(let i=0;i<buttonText.length;i++){
        buttonList.push(<Button style={{...CustomButtonStyle,backgroundImage: AppData[buttonText[i]]["bgImage"],
        backgroundSize: AppData[buttonText[i]]["bgSize"],
        backgroundPosition: AppData[buttonText[i]]["bgPosition"],}} variant="outline-primary" onClick={()=>
            {navigate('/AppPage/'+buttonText[i]);}
        }>{buttonText[i]}</Button>)
    }
    let goBackHome=()=>{
        navigate('/');
    }
    return (
        <Container fluid style={fullScreenStyle}>
            {buttonList}
            <Button align='bottom' variant="primary" onClick={goBackHome}>Back To Home Page</Button>
        </Container>
    )
}

export default AppDrawer;