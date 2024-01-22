import {Container,Row,Button,Card,Col} from "react-bootstrap"
import { useNavigate } from 'react-router-dom';
import AppData from "../Utils/AppData";


const fullScreenStyle = {
    height: '100vh', // 100% of the viewport height
    width:'100vw',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5vh',
    backgroundImage: 'url("JLRbg.jpeg")',
  backgroundSize: 'cover', // Adjust the size as needed
  backgroundRepeat: 'no-repeat', // Prevent image from repeating

  };
  

  const customRowStyle = {
    height: '16vh', // Set the desired height
    marginBottom: '2vh'
  };
  const CustomButtonStyle = {
    height: '30vh', // Set the desired height
    width: '16vw',
    margin: '2vh',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url('/Google_Maps_Logo_2020.svg.png')`,
    backgroundSize: '100% 100%',
    backgroundosition: 'center ',
    border: 'none',
    cursor: 'pointer',
    backgroundRepeat: 'no-repeat'
  };
  let ButtonsMain=['Alexa','Spotify','GMail','OutLook'];
  let ButtonsList=[]
  
let cardTitle=['Maps','Spotify','Messages']
let cardList=[]


function HomePage(props)
{

    const navigate=useNavigate();
    let [noOfClicks,updateNoOfClicks]=props.clicksHandler;
    const updateClicks= (str)=>
    {
      if(AppData[str]["url"]=="www.xyz.com"){
        navigate('/AppPage/'+str);
      }
      else{
        window.open(AppData[str]["url"]);
      }
      updateNoOfClicks(noOfClicks+1);
    }
    console.log(noOfClicks);
if(noOfClicks%5==0){
  cardTitle=['Alexa','Maps','Spotify'];
  ButtonsMain=['Messages','Spotify','GMail','OutLook'];
}
if(noOfClicks%7==0){
  updateNoOfClicks(1);
  ButtonsMain=['Alexa','Spotify','GMail','OutLook'];
  cardTitle=['Maps','Spotify','Messages'];
}
const openAppDrawer=()=>{
    navigate('/AppDrawer')
}
cardList=[];
ButtonsList=[];
    //style ={{height: '50vh', marginTop:'20px'}}
    for(let i=0;i<ButtonsMain.length;i++){
      ButtonsList.push(<Col  md={3}><Button variant="outline-primary" style={{...CustomButtonStyle,backgroundImage: AppData[ButtonsMain[i]]["bgImage"],
      backgroundSize: AppData[ButtonsMain[i]]["bgSize"],
      backgroundPosition: AppData[ButtonsMain[i]]["bgPosition"]}}  onClick={()=>updateClicks(ButtonsMain[i])}>{ButtonsMain[i]}</Button></Col>);
  }
  for(let i=0;i<cardTitle.length;i++){
    cardList.push(
        <Col  md={4}>
        <Card style ={{height: '48vh',background: 'rgba(255, 255, 255, 0.5)',}}>
        <Card.Img variant="top" src={AppData[cardTitle[i]]["location"]} style={{ width: '18vw', height: '22vh' , alignSelf:'center'}}/>
        <Card.Body>
          <Card.Title>{cardTitle[i]}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card content.
          </Card.Text>
          <Button variant="primary" onClick={()=>updateClicks(cardTitle[i])}>Open App</Button>
        </Card.Body>
      </Card>
      </Col>

      );
    }
    return(

 <Container fluid style={fullScreenStyle}>
    <Row  style ={{marginTop:'20px'}}>
        
    {cardList}
    </Row>

    <Row >
   {ButtonsList}
   </Row>
    <Row style={{...customRowStyle,marginTop:'30px'}} className="text-center" >
    <Col md ={12}><Button style={{width:'80vw',height:'6vh'}} variant="primary" onClick={openAppDrawer}>All Apps</Button></Col>
    </Row>
 </Container>
);

}
//style={{...customRowStyle,marginTop:'30px'}}
export default HomePage;