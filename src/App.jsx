import React from "react";
import "./App.css";
// import Header from './components/Header'
// import Main from './components/Main'
import Child from "./components/Child";
import Avatar from "./components/Avatar";
import Greeting from "./components/Greeting";
import Box from "./components/Box";
import Button from "./components/Button";
import Card from "./components/Card";
import List from "./components/List";
import StatusMasseg from "./components/StatusMasseg";
import Madal from "./components/Madal";

function App() {
  return (
    <>
      <Child name="Abubakr" surname="Abdunazarov" />
      <Avatar src="https://via.placeholder.com/150" alt="User Profile" />;
      {/* <Greeting />
     <Greeting name="Shahriyor" /> */}
      <Greeting/>
      <Greeting name="Shahriyor"/>
      <Box  width="200px" height="100px" color="blue" />
      <Button onClick={() => alert("Clicked!")}/>
        <List items={['Apple', 'Banana', 'Cherry']}/>
        <StatusMasseg isSuccess={true}/>
        <StatusMasseg isSuccess={false}/>
        <Madal title="Delete Confirmation"
       color="blue"  />
    </>
  );
}

export default App;
