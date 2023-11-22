import './App.css';
import Description from './Components/Description';
import Image from './Components/Image';
import Name from './Components/Name';
import Price from './Components/Price';
import Product from './Product';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function App() {
  // var a = "Souad"
  // var user = {
  //   name : 'Dali', 
  //   city : 'Bhar Lazreg',
  //   age : 12
  // }

  var name = ""
  return (
    <div>
      {/* <h1>{Product.name}</h1>
      <h2>{Product.price}</h2>
      <h3>{Product.description}</h3>
      <img src={Product.URL} alt='Not Found'/> */}
        {/* <h1>GOMYCODE</h1>
        <h2>{a}</h2>
        <h3>{user.name}</h3>
        <h4>{user.city}</h4>
        <h5>{user.age}</h5> */}

       
        
        

        <Card style={{ width: '18rem' }}>
        {name !== "" && <Image/>}
      <Card.Body>
        <Card.Title> <Name/></Card.Title>
        <Card.Text>
        <Price/>
        <Description/>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


    <h1>{name == "" ? "Saaalemo Alaykom" : `Bonjour ${name}`}</h1>
    </div>
  );
}

export default App;
