// import logo from './logo.svg';
import React, { useState } from 'react';
import Icon from './Components/Icon'
// toastify
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// reactstrap
import {Card, CardBody, Container, Button, Col, Row} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';



// creating 9 values in the arrays
// the .fill wil fill all the arrays with same value
const itemArray = new Array(9).fill("empty");

const App = () => {

  // will check if the box is crossed or not
  const [isCross, setIsCross] = useState(false);
  const [winMsg, setWinMsg] = useState("");

  // method for checking things
  const reloadGame = () => {
    setIsCross(false);
    setWinMsg("");
    itemArray.fill("empty", 0, 9);
  }

  // Checking for the winner
  const checkWinner = () => {
    if(itemArray[0] === itemArray[1] && itemArray[0] === itemArray[2] && itemArray[0] !== "empty"){
      setWinMsg(`${itemArray[0]} wins!`);
    }
    else if(itemArray[3] !== "empty" && itemArray[3] === itemArray[4] && itemArray[4] === itemArray[5]){
      setWinMsg(`${itemArray[3]} wins!`);
    }
    else if(itemArray[6] !== "empty" && itemArray[6] === itemArray[7] && itemArray[7] === itemArray[8]){
      setWinMsg(`${itemArray[6]} wins!`);      
    }
    else if(itemArray[0] !== "empty" && itemArray[0] === itemArray[3] && itemArray[3] === itemArray[6]){
      setWinMsg(`${itemArray[0]} wins!`);
    }
    else if(itemArray[1] !== "empty" && itemArray[1] === itemArray[4] && itemArray[4] === itemArray[7]){
      setWinMsg(`${itemArray[1]} wins!`);
    }
    else if(itemArray[2] !== "empty" && itemArray[2] === itemArray[5] && itemArray[5] === itemArray[8]){
      setWinMsg(`${itemArray[2]} wins!`);
    }
    else if(itemArray[0] !== "empty" && itemArray[0] === itemArray[4] && itemArray[4] === itemArray[8]){
      setWinMsg(`${itemArray[0]} wins!`);
    }
    else if(itemArray[2] !== "empty" && itemArray[2] === itemArray[4] && itemArray[4] === itemArray[6]){
      setWinMsg(`${itemArray[2]} wins!`);
    }
  }

  // changing item - 
  const changeItem = itemNumber => {
    if (winMsg){
      return toast(winMsg, {type: "success"});
    }

    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    }else{
      return toast("already filled", {type: "error"})
    }

    checkWinner();
  }

  return (
    <>
    <Container className="p-5">
      <ToastContainer position='bottom-center'/>
      <Row>
        <Col md={6} className="offset-md-3">
          {winMsg ? (
            <div className="mb-2 mt-2">
              <h1 className="text-success text-uppercase text-center">
                {winMsg}
              </h1>
              <Button color='success' block onClick={reloadGame} > Reload Game </Button>
            </div>
          ) : (
            <h1 className="text-center text-warning">
              {isCross ? "Cross" : "Circle"}'s turn
            </h1>
          )}
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card onClick={ () => changeItem(index) } color="warning">
                <CardBody className='box'>
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
