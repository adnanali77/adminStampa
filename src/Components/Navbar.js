import '../Styles/Navbar.css';
import dblogo from '../Img/dblogo.png';
import { BsSearch } from 'react-icons/bs';
import chat from '../Img/chat.png';
import team from '../Img/team.png';
import report from '../Img/report.png';
import p1 from '../Img/p1.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';

// import { isOperatorOnline } from '../services/API.js';
// import { useSelector } from 'react-redux';
// import { useLogoutUserMutation } from '../services/appApi';

const Navbar = () => {
  // const user = useSelector((state) => state.user);
  const [userName, setUserName] = useState("");
  const [checked, setChecked] = useState(true);
  const [userOption, setUserOption] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the current authenticated user's information
    const fetchCurrentUser = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        console.log("useruseruser", user)
        setUserName(user.username);
      } catch (error) {
        console.log('Error retrieving current user:', error);
      }
    };

    fetchCurrentUser();
  }, []);
  const handleActivelogin = (e) => {
    setChecked(!checked);
  }

  const openUserOption = () => {
    setUserOption(!userOption);
  }

  const handleLogout = async () => {
    try {
      await Auth.signOut();
      // window.location.reload(); // Refresh the page after logout
      // navigate('/login');
      navigate('/login');
    } catch (error) {
      console.log('Error signing out:', error);
    }
  };

  return (
    <div className='main-navbar'>
      <img src={dblogo} alt='dblogo' className='dblogo' />
      <div className='navbar-menu'>
        <div className='navbar-menu-links'>
          <div className='navbar-div-icon'>
            <NavLink to='/mychat' className="link" activeclassname="active">
              <img src={chat} alt='chat' className='nav-i' />
              <span>My Chats</span>
            </NavLink>
          </div>
          <div className='navbar-div-icon'>
            <NavLink to='/operations' className="link" activeclassname="active">
              <img src={team} alt='team' className='nav-i' />
              <span>Operators</span>
            </NavLink>
          </div>
          <div className='navbar-div-icon'>
            <NavLink to='/report' className="link" activeclassname="active">
              <img src={report} alt='report' className='nav-i' />
              <span>Reports</span>
            </NavLink>
          </div>
        </div>
        <div className='nav-search'>
          <BsSearch />
          <input type='text' name='navsearch' placeholder='Search...' className='navsearch' />
        </div>
      </div>
      <div className='nav-profile-opt'>
        <div className='nav-profile-opt-left'>
          <div className='nav-status-operator'>
            {
              checked ?
                <span className='nav-status'>Active</span>
                :
                <span className='nav-status'>Busy</span>
            }
          </div>
          <div>
            <label className="toggle-btn">
              <input type="checkbox" checked={checked} onChange={(e) => handleActivelogin(e)} />
              <span className="circle"></span>
            </label>
          </div>
        </div>
        <div className='nav-profile-opt-right' onClick={openUserOption}>
          <span>{userName}</span>
          <img src={p1} alt='p1' className='p1' />
          {
            userOption && <div className='user-option'>
              <div className='user-option-data' onClick={handleLogout}>
                <span>Logout</span>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}
{/* <button className="logout-button" onClick={handleLogout}>Logout</button> */}
export default Navbar