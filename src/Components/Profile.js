import '../Styles/Profile.css';
import { MdModeEditOutline,MdDone } from 'react-icons/md';
import p1 from '../Img/p1.png';
import { profileData,visitorDataright,sendupdatedData } from '../Service/API.js';
import { useEffect, useState } from 'react';
import {setthecurrentuser} from '../Service/API.js';
import { TailSpin } from 'react-loader-spinner';

const initailValue = {
  name: 'Dianne Russell',
  email: 'Dianne.r@gmail.com',
  phone: '+1 610 450 66 66',
  address: 'San Bernardino, United States'
}

const Profile = (props) => {
  const [edt, setEdt] = useState(false);
  const [dt, setDt] = useState(initailValue);
  const {name, email, phone, address} = dt

  const handleEdit = async () => {
    await sendupdatedData(dt);
    setEdt(!edt);
  }

  const changeHandle = (e) => {
    setDt({...dt, [e.target.name]: e.target.value})
  }

  // const handleDone = async () => {
  //   await sendupdatedData(dt);
  //   setEdt(!edt);
  // }
  console.log("props", props)
  // console.log("setthecurrentuser", setthecurrentuser)
  const uniqueData = props.user.filter((item, index, array) => {
    // Return true if the index of the current item is the first occurrence in the array
    return array.findIndex((element) => element.id === item.id) === index;
  });

  return (
    <div className='profile-main'>
      <div className='profile-main-top'>
        <div className='profile-main-top-left'>
          <div className='p-m-t-u'>
            <span>Personal Information</span>
            {
              edt ?
              <MdDone className='prf-edit' onClick={handleEdit}/>
              :
              <MdModeEditOutline className='prf-edit' onClick={handleEdit}/>
            }  
          </div>
          <div className='profile-main-top-right'>
            <span className='prf-btn'>Add to conversion</span>
          </div>
        </div>
        <div className='prf-img-div'>
          <img src={p1} />
          <span>Profile Picture</span>
        </div>

      </div>
      <div className='profile-main-middle'>
        
          {
        //   !props.user ?
        //   <TailSpin
        //   height="25"
        //   width="25"
        //   color="#fff"
        //   ariaLabel="tail-spin-loading"
        //   radius="1"
        //   wrapperStyle={{padding: "0.25rem"}}
        //   wrapperClass=""
        //   visible={true}
        // />
        // :
        uniqueData.map((pdata) => (
            <div key={pdata.userID} className='prf-tble-edit'>
            <div className='p-t-e-d'>
                <div className='prf-edit-com'>
                 <label>Name</label>
                  {
                    edt ?
                    <input type="text" value={pdata.username} name="name" onChange={(e) => changeHandle(e)}/>
                    :
                    <input value={pdata.username} disabled />
                  }
                </div>
              </div>
              <div className='p-t-e-d'>
                <div className='prf-edit-com'>
                  <label>Email</label>
                  {
                    edt ?
                    <input type="text" value={pdata.username} name="email" onChange={(e) => changeHandle(e)}/>
                    :
                    <input value={pdata.username} disabled />
                  }
                </div>
              </div>
              <div className='p-t-e-d'>
                <div className='prf-edit-com'>
                  <label>Phone</label>
                  {
                    edt ?
                    <input type="text" value={"+1 610 450 66 66"} name="phone" onChange={(e) => changeHandle(e)}/>
                    :
                    <input value={"+1 610 450 66 66"} disabled />
                  }
                </div>
              </div>
              <div className='p-t-e-d'>
                <div className='prf-edit-com'>
                  <label>Address</label>
                  {
                    edt ?
                    <input type="text" value={pdata.country_name} name="address" onChange={(e) => changeHandle(e)}/>
                    :
                    <input value={pdata.country_name} disabled />
                  }
                </div>
              </div>
              
            </div>
          ))
        }
      </div>
      <div className='profile-main-down'>
        <span>Visitor Information</span>
        {
          visitorDataright.map((pdata) => (
            <div key={pdata.id} className='prf-tble-edit mrg-top'>
              <div className='p-t-e-d'>
                <div className='prf-edit-com'>
                  <label>First Visit</label>
                  <input value={pdata.firstvisit} disabled />
                </div>
              </div>
              <div className='p-t-e-d'>
                <div className='prf-edit-com'>
                  <label>Last Visit</label>
                  <input value={pdata.lastvisit} disabled />
                </div>
              </div>
              <div className='p-t-e-d'>
                <div className='prf-edit-com'>
                  <label>No. of Visits</label>
                  <input value={pdata.totalvisits} disabled />
                </div>
              </div>
              <div className='p-t-e-d'>
                <div className='prf-edit-com'>
                  <label>First Visit Source</label>
                  <input value={pdata.firstvisitsource} disabled />
                </div>
              </div>
              <div className='p-t-e-d'>
                <div className='prf-edit-com'>
                  <label>Refferal Link</label>
                  <input value={pdata.refferallink} disabled className='prf-link'/>
                </div>
              </div>
              <div className='p-t-e-d'>
                <div className='prf-edit-com'>
                  <label>Avg. time spend</label>
                  <input value={pdata.avgtimespend} disabled />
                </div>
              </div>
              <div className='p-t-e-d'>
                <div className='prf-edit-com'>
                  <label>IP Address</label>
                  <input value={pdata.ipaddress} disabled />
                </div>
              </div>
              <div className='p-t-e-d'>
                <div className='prf-edit-com'>
                  <label>Pin Address</label>
                  <input value={pdata.pinaddress} disabled />
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Profile