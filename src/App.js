import React, {useState, useEffect} from "react";
import Message from "./Message";
import "./App.css"
import * as uuid from "uuid";

let firstNames = [
  "Brandon", "Catherine", "Daniel", "Jeremy", "Julia", "Stacy", "Vincent"
]

let lastNames = [
  "Baker", "Collins", "Dingus", "Jacobson", "Jensen", "Smith", "Venti"
]

let partOnes = [
  "I like ", "I love ", "Wish there was ", "Going to get "
]

let partTwos = [
  "bacon ", "cats ", "games ", "skateboards "
]

let partThrees = [
  "in my ", "on my ", "and "
]

let partFours = [
  "face ", "house ", "hair ", "school", "soup"
]

function newMessage() { //construct posts from data
  let msg = {}
  msg.firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
  msg.lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
  msg.pt1 = partOnes[Math.floor(Math.random() * partOnes.length)]
  msg.pt2 = partTwos[Math.floor(Math.random() * partTwos.length)]
  msg.pt3 = partThrees[Math.floor(Math.random() * partThrees.length)]
  msg.pt4 = (msg.pt3 !== "and ") ? partFours[Math.floor(Math.random() * partFours.length)] : partTwos[Math.floor(Math.random() * partTwos.length)]
  return msg;
}

function App() {
  const [messages, setMessages] = useState([])

  function postMessages() { //add new message to messages list, and scroll to the bottom of the page
    setMessages((messages) => [...messages, <Message key={uuid.v4()} data={newMessage()} time={new Date()}/>]);
    window.scrollTo(0,document.body.scrollHeight);
  }


  useEffect(() => {
    const interval = setInterval(postMessages, 2000)
    return () => clearInterval(interval);
  },[])
  
  return(
    <main className="messages">
      {messages}
    </main>
  )
}

export default App;
