import '../Styles/Main.css';
import { useState, useEffect } from 'react';
import Online from '../Components/Sidebar/Online';
import Visitors from '../Components/Sidebar/Visitors';
import History from '../Components/Sidebar/History';
import Profile from '../Components/Profile';
import Conversation from '../Components/Conversation';
import Activities from '../Components/Activities';
import Poweredby from '../Components/Poweredby';
import { Auth } from 'aws-amplify';
import Navbar from '../Components/Navbar.js';
// import {fetchData} from '../Service/API.js';

const Main = (props) => {
  const [username, setUsername] = useState("");
  const [page, setPage] = useState('online');
  const [content, setcontent] = useState('profile');
  const [data, setdata] = useState("");
  const [selectedUser, setSelectedUser] = useState({});
  const [userSelected, setUserSelected] = useState(false);

  const getSelectedUser = async (user) => {
    setSelectedUser(user);
    setUserSelected(true);
    console.log("In home, selected user:", user);
  };


  useEffect(() => {

    // Retrieve the current authenticated user's information
    const fetchCurrentUser = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setUsername(user.username);
      } catch (error) {
        console.log('Error retrieving current user:', error);
      }
    };

    fetchCurrentUser();
  }, []);

  console.log("in home", props.connectedUsers);

  const handleClick = (id) => {
    console.log(id.target.id)
    setPage(id.target.id);
  }

  const handleContent = (id) => {
    setcontent(id.target.id);
  }


  // const gettheData = async () => {
  //   let response = await fetchData();
  //   setdata(response.data)
  //   console.log("fetchdata:", response.data);
  // }
  // useEffect(()=> {
  //   gettheData();
  //  },[])


  return (
    <>
      <Navbar />
      <div className='main-mychat'>
        <div className='main-sidebar'>
          <span className='side-heading'>My Chats</span>
          {/* <div>Current User: {username}</div> */}
          <div className='main-sidebar-head'>
            <span className={page !== 'online' ? 'main-sidebar-head-com' : 'main-sidebar-head-act'} id='online' onClick={(id) => handleClick(id)}>Online</span>
            <span className={page !== 'history' ? 'main-sidebar-head-com' : 'main-sidebar-head-act'} id='history' onClick={(id) => handleClick(id)}>History</span>
            <span className={page !== 'visitor' ? 'main-sidebar-head-com' : 'main-sidebar-head-act'} id='visitor' onClick={(id) => handleClick(id)}>Visitors</span>
          </div>
          <div className='main-sidebar-content'>
            {
              page === 'history' ?
                <History />
                :
                page === 'visitor' ?
                  <Visitors />
                  :
                  <Online
                    connectedUsers={props.connectedUsers}
                    selectUser={getSelectedUser}
                  />
            }

          </div>
        </div>
        <div className='main-content'>
          <div className='main-content-head'>
            <span className={content !== 'profile' ? 'main-content-head-com' : 'main-content-head-act'} id='profile' onClick={(id) => handleContent(id)}>Profile</span>
            <span className={content !== 'convarsation' ? 'main-content-head-com cnt-sec' : 'main-content-head-act'} id='convarsation' onClick={(id) => handleContent(id)}>Convarsation</span>
            <span className={content !== 'activity' ? 'main-content-head-com' : 'main-content-head-act'} id='activity' onClick={(id) => handleContent(id)}>Activities</span>
          </div>
          <div className='main-right-content'>
            {
              content === 'activity' ?
                <Activities />
                :
                content === 'convarsation' ?
                  <Conversation
                    selectedUser={selectedUser}
                    connectedUsers={props.connectedUsers}
                  />
                  :
                  <Profile user={props.connectedUsers}/>
            }

            {/* {userSelected ? (
        <div>
          <Conversation
            selectedUser={selectedUser}
            connectedUsers={props.connectedUsers}
          />
        </div>
      ) : (
        <div className="no-render-message">Click chat to start messaging</div>
      )} */}
          </div>
        </div>
      </div>
      <Poweredby />
    </>
  )
}

export default Main