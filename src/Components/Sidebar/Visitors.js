import {OnlineData,userwithidvisitor} from '../../Service/API.js'
import { useState } from 'react';
import ReactCountryFlag from "react-country-flag"
import { GoPrimitiveDot } from 'react-icons/go';

const Visitors = () => {
  const [page, setPage] = useState(1);

  const handleClick = async (key) => {
    // console.log(key);
    setPage(key);
    await userwithidvisitor(key);
  }
  return (
    <div>
      {
        OnlineData.map((data) => (
          <div key={data.id} className={page === data.id ? 'main-sidebar-content-cnt-aft' : 'main-sidebar-content-cnt'} onClick={(key) => handleClick(data.id)}>
            <div className='sidebar-cnt-tp'>
              
              <div className='online-icon'>
              <GoPrimitiveDot className='online-icon-dot'/>
              <span>{data.name}</span>
              </div>
              <span className='sidebar-top-right'>{data.timespend}</span>
            </div>
            <div className='sidebar-cnt-dn'>
            <span classname="flag-icon flag-icon-us"></span>
              {/* <i>&#127462;</i> */}
              <ReactCountryFlag countryCode={data.countryCode} svg />
              <span className='sidebar-cnt-dn-cntry'>{data.countryname}</span>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Visitors