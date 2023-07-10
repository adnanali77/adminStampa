import p1 from '../Img/p1.jpg';
import axios from 'axios';
import { useState } from 'react';
import {Auth} from "aws-amplify"

export const loginverify = async (data) => {
    const {email, password} = data;
    try {
        // const response = await axios.post('http://localhost:3001/login', { email, password });
        // const response = await Auth.signIn(email, password);        // const { token } = response.data;
        // console.log(response)
        // Store the token in localStorage
        // localStorage.setItem('token', token); 
        
      } catch (error) {
        console.log('Invalid email or password');
      }
}

export const setthecurrentuser = async (data) => {
    console.log(data)
    try {
        console.log(data)
      } catch (error) {
        console.log('Invalid email or password');
      }
}

// export const fetchData = async () => {

// try {
//   const token = localStorage.getItem('token');
//   if (!token) {console.log('No token found');
//   return;
//   }
// return await axios.get('http://localhost:3001/protected-route', {
//   headers: {
//   Authorization: token
//   }
//   });
//   // const data =response.data
//   // console.log(data._id)
//   // const json = await response.json()
//   // return json;
//   } catch (error) {
//   if (error.response && error.response.status === 401) {
//    console.log('Unauthorized access');
//   } else {
//   console.log('Error fetching data');
//   }
//   }
//   };
// export const fetchData = async () => {
//   try {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       console.log('No token found');
//       return;
//     }

//     const response = await axios.get('http://localhost:3001/protected-route', {
//       headers: {
//         Authorization: token
//       }
//     });

//     const data = response.data;
//     console.log('Data:', data); // Log the entire data object
//     console.log('Name:', data._id); // Log the value of the name property

//     return response;
//   } catch (error) {
//     if (error.response && error.response.status === 401) {
//       console.log('Unauthorized access');
//     } else {
//       console.log('Error fetching data');
//     }
//   }
// };

////online
export const userwithid = (id) => {
    console.log(id)

}

// sidebar get online users
export const OnlineData = [
    { id: 1, name: "Dianne Russell", timespend: "6 min spend", countryname: "USA, Texas", countryCode: "US" },
    { id: 2, name: "Dianne Russell", timespend: "6 min spend", countryname: "USA, Texas", countryCode: "US" },
    { id: 3, name: "Dianne Russell", timespend: "6 min spend", countryname: "USA, Texas", countryCode: "US" },
    { id: 4, name: "Dianne Russell", timespend: "6 min spend", countryname: "Duabi, United Arab Emirates", countryCode: "AE" },
    { id: 5, name: "Dianne Russell", timespend: "6 min spend", countryname: "USA, Texas", countryCode: "US" },
    { id: 6, name: "Dianne Russell", timespend: "6 min spend", countryname: "Canada, Toronto", countryCode: "CA" },
    { id: 7, name: "Dianne Russell", timespend: "6 min spend", countryname: "USA, Texas", countryCode: "US" },
    { id: 8, name: "Dianne Russell", timespend: "6 min spend", countryname: "USA, Texas", countryCode: "US" },
    { id: 9, name: "Dianne Russell", timespend: "6 min spend", countryname: "USA, Texas", countryCode: "US" },
    { id: 10, name: "Dianne Russell", timespend: "6 min spend", countryname: "USA, Texas", countryCode: "US" },
    { id: 11, name: "Dianne Russell", timespend: "6 min spend", countryname: "USA, Texas", countryCode: "US" },
    { id: 12, name: "Dianne Russell", timespend: "6 min spend", countryname: "USA, Texas", countryCode: "US" },
    { id: 13, name: "Dianne Russell", timespend: "6 min spend", countryname: "USA, Texas", countryCode: "US" },
    { id: 14, name: "Dianne Russell", timespend: "6 min spend", countryname: "USA, Texas", countryCode: "US" },
    { id: 15, name: "Dianne Russell", timespend: "6 min spend", countryname: "USA, Texas", countryCode: "US" },
    { id: 16, name: "Dianne Russell", timespend: "6 min spend", countryname: "USA, Texas", countryCode: "US" },
]
//sidebar get history
//    export  const HistoryData = async () => {
//       try {
// //         const id =data._id ;
// // console.log("this is id",id)
//         const res = await axios.get("http://localhost:3001/64748b6522d37b8b3408a7c4");
//         // setConversations(res.data);
//         // console.log("check conversation",conversations)
//       } catch (err) {
//         console.log(err);
//       }
//     };
// export const HistoryData= async () => {
//   const [conversations, setConversations] = useState([]);

//   try {
//   //   const id=data._id;
//   //   console.log("this is id",id)
//     const res = await axios.get('http://localhost:3001/64748b6522d37b8b3408a7c4');
//     setConversations(res.data);
//     console.log("check conversation",conversations)
//   } catch (err) {
//     console.log(err);
//   }
// };
export const HistoryData = [
    { id: 1, name: "Dianne Russell", timespend: "17 hour ago", msg: "i nedd custom box jkcbaskcnas jkdaksdascllcknakscsao", closedby: "json" },
    { id: 2, name: "Dianne Russell", timespend: "17 hour ago", msg: "i nedd custom box", closedby: "json" },
    { id: 3, name: "Dianne Russell", timespend: "17 hour ago", msg: "i nedd custom box", closedby: "json" },
    { id: 4, name: "Dianne Russell", timespend: "17 hour ago", msg: "i nedd custom box", closedby: "json" },
    { id: 5, name: "Dianne Russell", timespend: "17 hour ago", msg: "i nedd custom box", closedby: "json" },
    { id: 6, name: "Dianne Russell", timespend: "17 hour ago", msg: "i nedd custom box", closedby: "json" },
    { id: 7, name: "Dianne Russell", timespend: "17 hour ago", msg: "i nedd custom box", closedby: "json" },
    { id: 8, name: "Dianne Russell", timespend: "17 hour ago", msg: "i nedd custom box", closedby: "json" },
    { id: 9, name: "Dianne Russell", timespend: "17 hour ago", msg: "i nedd custom box", closedby: "json" },
    { id: 10, name: "Dianne Russell", timespend: "17 hour ago", msg: "i nedd custom box", closedby: "json" },
    { id: 11, name: "Dianne Russell", timespend: "17 hour ago", msg: "i nedd custom box", closedby: "json" },
    { id: 12, name: "Dianne Russell", timespend: "17 hour ago", msg: "i nedd custom box", closedby: "json" },
    { id: 13, name: "Dianne Russell", timespend: "17 hour ago", msg: "i nedd custom box", closedby: "json" },
    { id: 14, name: "Dianne Russell", timespend: "17 hour ago", msg: "i nedd custom box", closedby: "json" },
    { id: 15, name: "Dianne Russell", timespend: "17 hour ago", msg: "i nedd custom box", closedby: "json" },
    { id: 16, name: "Dianne Russell", timespend: "17 hour ago", msg: "i nedd custom box", closedby: "json" },
]
export const userwithidhistory = (id) => {
    console.log(id);
}

//visitor
export const userwithidvisitor = (id) => {
    console.log(id)
}

// sidebar visitor data
export const visitorData = [
    { id: 1, name: "Dianne Russell", timespend: "6 min spend", countryname: "USA, Texas", countryCode: "US" },
    { id: 2, name: "Dianne Russell", timespend: "6 min spend", countryname: "USA, Texas", countryCode: "US" },
    { id: 3, name: "Dianne Russell", timespend: "6 min spend", countryname: "USA, Texas", countryCode: "US" },
    { id: 4, name: "Dianne Russell", timespend: "6 min spend", countryname: "Duabi, United Arab Emirates", countryCode: "AE" },
    { id: 5, name: "Dianne Russell", timespend: "6 min spend", countryname: "USA, Texas", countryCode: "US" },
    { id: 6, name: "Dianne Russell", timespend: "6 min spend", countryname: "Canada, Toronto", countryCode: "CA" },
    { id: 7, name: "Dianne Russell", timespend: "6 min spend", countryname: "USA, Texas", countryCode: "US" },
    { id: 8, name: "Dianne Russell", timespend: "6 min spend", countryname: "USA, Texas", countryCode: "US" },
    { id: 9, name: "Dianne Russell", timespend: "6 min spend", countryname: "USA, Texas", countryCode: "US" },
    { id: 10, name: "Dianne Russell", timespend: "6 min spend", countryname: "USA, Texas", countryCode: "US" },
    { id: 11, name: "Dianne Russell", timespend: "6 min spend", countryname: "USA, Texas", countryCode: "US" },
    { id: 12, name: "Dianne Russell", timespend: "6 min spend", countryname: "USA, Texas", countryCode: "US" },
    { id: 13, name: "Dianne Russell", timespend: "6 min spend", countryname: "USA, Texas", countryCode: "US" },
    { id: 14, name: "Dianne Russell", timespend: "6 min spend", countryname: "USA, Texas", countryCode: "US" },
    { id: 15, name: "Dianne Russell", timespend: "6 min spend", countryname: "USA, Texas", countryCode: "US" },
    { id: 16, name: "Dianne Russell", timespend: "6 min spend", countryname: "USA, Texas", countryCode: "US" },
]

//profile
export const profileData = [
    {id:1, name:"Dianne Russell", email:"Dianne.r@gmail.com", phone: "+1 610 450 66 66", address: "San Bernardino, United States"},
]

export const visitorDataright = [
    {id: 1, firstvisit: "22 may 2023", lastvisit: "22 may 2023", totalvisits: 2, firstvisitsource:"Adwords", refferallink:"https://theboxlane.com/custom-cbd-packaging-in-usa/", avgtimespend: "1min 43s", ipaddress: "98.165.68.245", pinaddress: "San Bernardino, United States" },
]

    // --getting prf user data
export const sendupdatedData = (data) => {
    console.log(data);
}



////user-activity
export const userActivity = [
    {id: 1, visitdate: "3rd March 2015", visitTime: "19:00 PM", visitlink:"https://theboxlane.com/soap-boxes-wholesale/?campaignid=19993551075&adgroupid=149780300802&creative=" },
    {id: 2, visitdate: "3rd March 2015", visitTime: "19:00 PM", visitlink:"https://theboxlane.com/soap-boxes-wholesale/?campaignid=19993551075&adgroupid=149780300802&creative=" },
    {id: 3, visitdate: "3rd March 2015", visitTime: "19:00 PM", visitlink:"https://theboxlane.com/soap-boxes-wholesale/?campaignid=19993551075&adgroupid=149780300802&creative=" },
    {id: 4, visitdate: "3rd March 2015", visitTime: "19:00 PM", visitlink:"https://theboxlane.com/soap-boxes-wholesale/?campaignid=19993551075&adgroupid=149780300802&creative=" },
    {id: 5, visitdate: "3rd March 2015", visitTime: "19:00 PM", visitlink:"https://theboxlane.com/soap-boxes-wholesale/?campaignid=19993551075&adgroupid=149780300802&creative=" },
    {id: 6, visitdate: "3rd March 2015", visitTime: "19:00 PM", visitlink:"https://theboxlane.com/soap-boxes-wholesale/?campaignid=19993551075&adgroupid=149780300802&creative=" },
    {id: 7, visitdate: "3rd March 2015", visitTime: "19:00 PM", visitlink:"https://theboxlane.com/soap-boxes-wholesale/?campaignid=19993551075&adgroupid=149780300802&creative=" },
    {id: 8, visitdate: "3rd March 2015", visitTime: "19:00 PM", visitlink:"https://theboxlane.com/soap-boxes-wholesale/?campaignid=19993551075&adgroupid=149780300802&creative=" },
    {id: 9, visitdate: "3rd March 2015", visitTime: "19:00 PM", visitlink:"https://theboxlane.com/soap-boxes-wholesale/?campaignid=19993551075&adgroupid=149780300802&creative=" },
    {id: 10, visitdate: "3rd March 2015", visitTime: "19:00 PM", visitlink:"https://theboxlane.com/soap-boxes-wholesale/?campaignid=19993551075&adgroupid=149780300802&creative=" },
    {id: 11, visitdate: "3rd March 2015", visitTime: "19:00 PM", visitlink:"https://theboxlane.com/soap-boxes-wholesale/?campaignid=19993551075&adgroupid=149780300802&creative=" },
    {id: 12, visitdate: "3rd March 2015", visitTime: "19:00 PM", visitlink:"https://theboxlane.com/soap-boxes-wholesale/?campaignid=19993551075&adgroupid=149780300802&creative=" },
    {id: 13, visitdate: "3rd March 2015", visitTime: "19:00 PM", visitlink:"https://theboxlane.com/soap-boxes-wholesale/?campaignid=19993551075&adgroupid=149780300802&creative=" },
    {id: 14, visitdate: "3rd March 2015", visitTime: "19:00 PM", visitlink:"https://theboxlane.com/soap-boxes-wholesale/?campaignid=19993551075&adgroupid=149780300802&creative=" },
    {id: 15, visitdate: "3rd March 2015", visitTime: "19:00 PM", visitlink:"https://theboxlane.com/soap-boxes-wholesale/?campaignid=19993551075&adgroupid=149780300802&creative=" },
    {id: 16, visitdate: "3rd March 2015", visitTime: "19:00 PM", visitlink:"https://theboxlane.com/soap-boxes-wholesale/?campaignid=19993551075&adgroupid=149780300802&creative=" },
    {id: 17, visitdate: "3rd March 2015", visitTime: "19:00 PM", visitlink:"https://theboxlane.com/soap-boxes-wholesale/?campaignid=19993551075&adgroupid=149780300802&creative=" }
]


// all operators
export const operators = [
    {id:1, name:"json", email: "jason@gmail.com", profileimg: p1},
    {id:2, name:"Azaz", email: "azaz@gmail.com", profileimg: p1}
]

//operators details
export const operatorsData = [
    {id:1, name:"Dianne Russell", email:"Dianne.r@gmail.com", role: "Administrator", phone: "+1 610 450 66 66", company: "The Box Lane", aboutme: "Packaging Expert"},
]

//get operator
export const getoperatorsData = (id) => {
    console.log(id)
}


//isOperatorOnline
export const isOperatorOnline = (val) => {
    // console.log(val)
}