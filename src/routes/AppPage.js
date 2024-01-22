import {Container,Row,Button,Card,Col} from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import AppData from "../Utils/AppData";

function AppPage(props)
{
    let navigate=useNavigate();
    let goBackHome=()=>{
        navigate('/');
    }
    const {AppName}=useParams();
    console.log(AppData[AppName]["location"]);
    return(
        <Container fluid style={{width:"100vw",height:"100vh" ,backgroundImage: 'url("/JLRbg.jpeg")',
        backgroundSize: 'cover', // Adjust the size as needed
        backgroundRepeat: 'no-repeat'}}>
        <Col  md={12}>
        <Card style ={{height: '90vh',width:'90vw', alignItems:'center', fontSize:'100px',backgroundColor: 'rgba(255, 255, 255, 0)'}}>
        <Card.Img variant="top" src= {AppData[AppName]["location"]} style={{ width: '50vh', height: 'auto' , alignSelf:'center'}} /> 
        <Card.Body>
          <Card.Title style={{color:"white"}}>{AppName}</Card.Title>
          <Card.Text style={{color:"white"}}>
            {"welcome to "+ AppName}
          </Card.Text>
          <Button align='bottom' variant="primary" onClick={goBackHome}>Back To Home Page</Button>
        </Card.Body>
        </Card>
        </Col>
        </Container>
    );

}
export default AppPage;