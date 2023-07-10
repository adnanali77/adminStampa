import '../Styles/Operations.css';
import { useState } from 'react';
import p1 from '../Img/p1.jpg';
import Profile from '../Components/Profile';
import Conversation from '../Components/Conversation';
import Activities from '../Components/Activities';
import Poweredby from '../Components/Poweredby';
import Navbar from '../Components/Navbar.js';
import { operators, operatorsData,getoperatorsData } from '../Service/API.js';

const Operations = () => {
  const [page, setPage] = useState(1);

  const handleClickoperator = (id) => {
    setPage(id);
    getoperatorsData(id);
  }
  return (
    <>
    <Navbar/>
      <div className='main-mychat'>
        <div className='main-sidebar'>
          <span className='side-heading'>Operators</span>
          <div className='main-sidebar-content'>
            {/* {
              page === 'history' ?
                <History />
                :
                page === 'visitor' ?
                  <Visitors />
                  :
                  <Online />
            } */}
            {
              operators.map((data) => (
                <div key={data.id} className={page === data.id ? 'main-sidebar-content-cnt-aft' : 'main-sidebar-content-cnt'} onClick={(key) => handleClickoperator(data.id)}>
                  <div className='operators'>
                    <img src={p1} alt='p1' className='operator-img' />
                    <div className='sidebar-op-tp'>
                      <span>{data.name}</span>
                      <span>{data.email}</span>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className='main-content'>
          <div className='main-right-content'>
            <div className='profile-main'>
              <div className='profile-main-top'>
                <div className='profile-main-top-left'>
                  <div className='p-m-t-u'>
                    <span>Operator Information</span>
                  </div>
                </div>
                <div className='prf-img-div'>
                  <img src={p1} />
                  <span>Profile Picture</span>
                </div>
              </div>
              <div className='profile-main-middle'>
                {
                  operatorsData.map((pdata) => (
                    <div key={pdata.id} className='prf-tble-edit'>
                      <div className='p-t-e-d'>
                        <div className='prf-edit-com'>
                          <label>Name</label>
                          <input value={pdata.name} disabled />
                        </div>
                      </div>
                      <div className='p-t-e-d'>
                        <div className='prf-edit-com'>
                          <label>Email</label>
                          <input value={pdata.email} disabled />
                        </div>
                      </div>
                      <div className='p-t-e-d'>
                        <div className='prf-edit-com'>
                          <label>Phone</label>
                          <input value={pdata.phone} disabled />
                        </div>
                      </div>
                      <div className='p-t-e-d'>
                        <div className='prf-edit-com'>
                          <label>Role</label>
                          <input value={pdata.role} disabled />
                        </div>
                      </div>
                      <div className='p-t-e-d'>
                        <div className='prf-edit-com'>
                          <label>Company</label>
                          <input value={pdata.company} disabled />
                        </div>
                      </div>
                      <div className='p-t-e-d'>
                        <div className='prf-edit-com'>
                          <label>About Me</label>
                          <input value={pdata.aboutme} disabled />
                        </div>
                      </div>

                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <Poweredby />
    </>
  )
}

export default Operations