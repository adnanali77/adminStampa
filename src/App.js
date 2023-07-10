

import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Login';
import Main from './Pages/Main';
import Operations from './Components/Operations.js';
import Conversation from './Components/Conversation.js';
import Profile from './Components/Profile.js';
import Activities from './Components/Activities.js';
import Reports from './Components/Reports';
import { useEffect, useState } from 'react';
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import awsExports from "./aws-exports";
import { Amplify, Auth } from "aws-amplify"
import socket from './socketjs';
Amplify.configure(awsExports);

function App() {
  const [userName, setUserName] = useState("");
  const [usersList, setUsersList] = useState([]);
  const [messages, setMessages] = useState([]);


  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        console.log("useruseruser", user)
        setUserName(user.username);
        getUsername(user.username)
      } catch (error) {
        console.log('Error retrieving current user:', error);
      }
    };

    fetchCurrentUser();
  }, []);

  const getUsername = (fetched_userName) => {
    setUserName(fetched_userName);
    socket.auth = { fetched_userName };
    socket.connect();
  };


  socket.on("users", (users) => {
    const index = users.findIndex(user => user.userID === socket.id);
    if (index > -1) {
      users.splice(index, 1);
    }
  
    users.forEach((user) => {
      user.self = user.userID === socket.id;
    });
    users = users.sort((a, b) => {
      if (a.self) return -1;
      if (b.self) return 1;
      if (a.username < b.username) return -1;
      return a.username > b.username ? 1 : 0;
    });
    setUsersList(users);
  });
  
  socket.on("user connected", (users) => {
    setUsersList([...usersList, users]);
  });
  
  const uniqueArray = usersList.filter(
    (obj, index, self) =>
      index ===
      self.findIndex((t) => t.userID === obj.userID)
  );

  // console.log("Mango day user",usersList)
  return (
    <div className="App">
<Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={!userName ? <Login submit={(event) => getUsername(event)}/> : <Navigate to="/mychat" />} />
          {/* submit={(event) => getUsername(event)} */}
          {/* <Route path="/login" element={userName ? <Navigate to="/mychat" /> : <Login submit={(event) => getUsername(event)}/>}/>  */}
          <Route path='/mychat' element={userName ? <Main user={userName} connectedUsers={uniqueArray}/> : <Navigate to="/login" />} />
          <Route path='/operations' element={userName ? <Operations /> : <Navigate to="/login" />} />
          <Route path='/conversation' element={userName ? <Conversation /> : <Navigate to="/login" />} />
          <Route path='/profile' element={userName ? <Profile /> : <Navigate to="/login" />} />
          <Route path='/activities' element={userName ? <Activities /> : <Navigate to="/login" />} />
          <Route path='/report' element={userName ? <Reports /> : <Navigate to="/login" />} />
        </Routes>
      </Router>
    </div >
    
  );
}

export default App;
