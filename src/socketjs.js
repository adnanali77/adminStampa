import { io } from "socket.io-client";
const URL = "http://ec2-43-205-237-35.ap-south-1.compute.amazonaws.com:4200/";

const socket = io(URL, { autoConnect: false });

socket.onAny((event, ...args) => {
  console.log(event, args);
});
export default socket;
// const socket = io('http://localhost:4200');

// socket.on('connect', () => {
//   console.log('Connected to the server.');

//   // Send an event to the server
//   socket.emit('event', { data: 'Hello, server!' });
// });

// socket.on('disconnect', () => {
//   console.log('Disconnected from the server.');
// });