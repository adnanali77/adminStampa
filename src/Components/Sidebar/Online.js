import React from 'react';
import { OnlineData, userwithid } from '../../Service/API.js';
import { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { GoPrimitiveDot } from 'react-icons/go';
import '../../Styles/Online.css'; // Import the CSS file with the styles

const Online = (props) => {
  const [page, setPage] = useState(1);
  const userList = props.connectedUsers;
  const [selectedUser, setSelectedUser] = useState(null);

  const uniqueList = userList.filter((obj, index, self) => {
    return index === self.findIndex((o) => o.key === obj.key);
  });


  console.log('online userList', userList);
  localStorage.setItem('onlineUsers', JSON.stringify(uniqueList));
  console.log('uniqueListuniqueListuniqueList userList', uniqueList);

  const userName_from_click = (selectedUser) => {
    console.log('In sidebar the user details:', selectedUser);
    setSelectedUser(selectedUser);
    props.selectUser(selectedUser);
  };

  let showUsers = userList.map((user) => {
    const isSelected = selectedUser && selectedUser.username === user.username;

    const userStyle = isSelected ? { backgroundColor: '#26A3F6' } : { backgroundColor: '#f5f5f5' };

    return (
      <div style={{
        backgroundColor: isSelected ? '#082C67' : 'white',
        color: isSelected ? 'white' : 'black',
        padding: '0.6rem',
        margin: '0.5rem',
        borderRadius: '0.5rem',
        display: 'flex',
        cursor: 'pointer',
        flexDirection: 'column',
        justifyContent: 'center'
      }} key={user.key} >
        <div
          className={`'main-sidebar-content-cnt ${isSelected ? 'selected' : ''}`}
          onClick={() => userName_from_click(user)}>
          <div className='sidebar-cnt-tp'>
            <div className='online-icon'>
              <GoPrimitiveDot className='online-icon-dot' />
              <span>{user.username}</span>
            </div>
            <span className='sidebar-top-right'>online</span>
          </div>
          <div className='sidebar-cnt-dn'>
            <span className="flag-icon flag-icon-us"></span>
            {/* <i>&#127462;</i> */}
            <ReactCountryFlag countryCode={user.country_code2} svg />
            <span className='sidebar-cnt-dn-cntry'>{user.country_name}</span>
          </div>
        </div>
      </div>
      // <button
      //   key={user.key}
      //   className={`user-list-el ${isSelected ? 'selected' : ''}`}
      //   onClick={() => userName_from_click(user)}
      // >
      //   <div className="online-dot"></div>
      //   <span>{user.username}</span>
      //   <br />
      //   <br />
      //   <ReactCountryFlag countryCode="PK" svg style={{ marginLeft: '10px' }} />
      // </button>
    );
  });

  console.log('Userlist in sidebar component:', uniqueList);
  return (
    <div>
      {showUsers}
    </div>);
};

export default Online;

