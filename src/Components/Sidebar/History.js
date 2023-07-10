import '../../Styles/History.css';
import { useEffect, useState } from "react";
import {HistoryData, userwithidhistory} from '../../Service/API.js';
import closedby from '../../Img/closedby.png'
import axios from "axios";
// import { fetchData } from '../../Service/API.js';
const History = () => {
  const [page, setPage] = useState(1);
  const [conversations, setConversations] = useState([]);
  const [data, setdata] = useState("");
  const [user, setUser] = useState(null);


// console.log("Check this id on history ",data._id)
  // const gettheData = async () => {
  //   let response = await fetchData();
  //   setdata(response.data)
  //   // console.log("fetchdata on History  component:", response.data);
  //   // console.log("id",response.data._id)
  // }
  // useEffect(()=>{
  //   gettheData();
  //  },[])  
  // const getConversations = async () => {
  //   try {
  //     // const id=data._id;
  //     // console.log("this is id",id)
  //     const res = await axios.get('http://localhost:3001/64748b6522d37b8b3408a7c4');
  //     setConversations(res.data);
  //     // console.log("check conversation on history",res);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // useEffect(() => {
  //   getConversations();
  //   console.log("Check this conversations now",conversations)

  // }, []);

  const handleClick = async (key) => {
    // console.log(key);
    setPage(key);
    await userwithidhistory(key);
  }



  // const friendId = conversations.members.find((m) => m !== data._id);
  // console.log(friendId)
  // const friendId=conversations.members.find((m)=> m!==data._id)
  // console.log("Check this friend id",friendId)
  //   const getUser = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:3001/protected-route/");
  //       console.log("I am checking this friend data", res)
  //       setUser(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  // useEffect(() => {
    
  //   getUser();
  // }, [data._id]);
  // const friendId = conversations[0].members;
  // console.log("Friend id",friendId)
  return (
    <div className='history'>
      {
        // HistoryData.map((data) => (
        
        //   <div key={data.id} className={page === data.id ? 'main-sidebar-content-cnt-aft' : 'main-sidebar-content-cnt'} onClick={(key) => handleClick(data.id)}>
        //    <div>
        //   {data.members}
        //   </div>
        //     <div className='sidebar-cnt-tp'>
        //       <span>{data.name}</span>
        //       <span className='sidebar-top-right'>{data.timespend}</span>
        //     </div>
        //     <div className='sidebar-cnt-dn'>
        //       <span className='sidebar-msg'>{data.closedby}</span>
        //       <div className='sidebar-cnt-dn-closed'>
        //       <img src={closedby} alt='closedby'/>
        //       <span>Closed by {data.username}</span>
        //       </div>
        //     </div>
        //   </div>
        // ))
      // conversations.map((data)=>{
        
        
      // })
      // <p>{user.username}</p>
      }
    </div>
  )
}

export default History