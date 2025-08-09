// function App() {
//   const submitHandler =(e) => {
//     e.preventDefault(); // Prevent the default form submission behavior
//     console.log("Form submitted!");

//   };
//   return (
//     <div>
//       <form onSubmit={(e)=>{
//         submitHandler(e)
//       }} className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500">
//         <input type="text" placeholder="Enter your name" className="m-5 px-4 py-2 rounded"></input>
//         <button type="submit" className="bg-emerald-600 text-white   px-4 py-2 rounded font-semibold">Submit</button>
        
//         </form> 
//         <h1 className="text-white font-bold text-5xl ">Hello</h1>
//     </div>
//   );
// }
//two way binding in react
// import React from "react";
// // export default App;
// function App() {
//   const [userName, setUserName] = React.useState("");
//   const submitHandler= (e)=>{
//     e.preventDefault(); // Prevent the default form submission behavior
//     console.log(userName);
//     setUserName(""); // Clear the input field after submission
//   };
//   return (
//     <div>
//       <form onSubmit={(e) =>{
//         submitHandler(e)}}
//         className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500">
//         <input
//         value ={userName} 
//         onChange={(e) => {
//           setUserName(e.target.value);
//         }}
        
        
//         type="text" placeholder="Enter your name"
//          className="m-5 px-4 py-2 rounded"></input>
//         <button type="submit" className="bg-emerald-600 text-white   px-4 py-2 rounded font-semibold">Submit</button>
        
//         </form> 
//         <h1 className="text-white font-bold text-5xl ">Hello</h1>
//     </div>
//   );
// }

// export default App;
// import React from "react";
// import Header from "./components/Header";
// function App() {
  
//   return (
//   <>
//   <Header />
//   <h1 className="text-white font-bold">HELLO</h1>
//   <h2 className="text-white font-bold">BYE</h2></>

//   );
// }

// export default App;


// import React from "react";
// import Car from "./components/Car";

// function App() {
//   const user = "John Doe";
//   return (
//     <>
//     <div className="flex justify-center items-center p-10">
//     <Car a={user}/>
//     <Car a="Jane Smith"/>
//     </div>

//     </>
    
//   );
// }
// export default App;
// import React from "react";

// function App() {
//   return (
//     <>
//        <h1 className="text-white font-bold text-5xl text-center bg-black h-screen flex items-center justify-center">
//       Hello, World!
//     </h1>
//     </>
    
//   );
// }
// export default App;

// import React from "react";
// import Car from "./components/Car";



// function App() {
//   const user = 
//     [
//   {
//     "name": "Aarav Sharma",
//     "city": "Delhi",
//     "age": 28,
//     "profession": "Software Engineer",
//     "profilePhoto": "https://randomuser.me/api/portraits/men/11.jpg"
//   },
//   {
//     "name": "Meera Kapoor",
//     "city": "Mumbai",
//     "age": 25,
//     "profession": "UX Designer",
//     "profilePhoto": "https://randomuser.me/api/portraits/women/21.jpg"
//   },
//   {
//     "name": "Rohan Verma",
//     "city": "Bangalore",
//     "age": 32,
//     "profession": "Data Scientist",
//     "profilePhoto": "https://randomuser.me/api/portraits/men/32.jpg"
//   },
//   {
//     "name": "Sanya Malhotra",
//     "city": "Chandigarh",
//     "age": 29,
//     "profession": "Marketing Manager",
//     "profilePhoto": "https://randomuser.me/api/portraits/women/44.jpg"
//   },
//   {
//     "name": "Ishaan Khurana",
//     "city": "Pune",
//     "age": 26,
//     "profession": "Product Manager",
//     "profilePhoto": "https://randomuser.me/api/portraits/men/55.jpg"
//   }
// ]
// // user.forEach(function(elm) {
// //   console.log(elm.name, elm.city, elm.age, elm.profession, elm.profilePhoto);
// // })
  
//   return (
//     <>
//     <div className=" mr-5 flex justify-center items-center p-10">
//       {user.map(function(elm,idx){
//         return <Car key={idx} 
//           user={elm.name} 
//           age={elm.age} 
//           city={elm.city} 
//           profession={elm.profession}
//           profilePhoto={elm.profilePhoto} />
//       })}
//     </div>

//     </>
    
//   );
// }
// export default App;

// import React from "react";
// import Examp from "./components/Examp";
// function App() {
//   return (
//     <>
//     <Examp name="Shashank"/>
//       <h1 className="text-white font-bold text-5xl text-center bg-black h-screen flex items-center justify-center">
//         Hello, World!
//       </h1>
//     </>
//   );
// }
// import React, { useState,useEffect } from "react";
// import axios from "axios";

// function App() {
//   const [data, setData] = React.useState([]);
//   const getData= async ( ) =>{
//     const response = await axios.get("https://picsum.photos/v2/list")
 
//   setData(response.data);
//   console.log(data);
//     }

//     useEffect(() => {
//       getData();
//     }, []);

//   return (
//    <div className="">
//     {/* <button onClick={getData} className="bg-blue-500 text-white px-4 py-2 rounded font-semibold hover:bg-blue-600 transition duration-300 active:scale-90">Click</button> */}
//    <div className="justify-between items-center p-10 bg-gray-500 font-bold">
//     {data.map(function(elm, idx) {
//       return <div className="bg-black-500 text-white " key={idx}  style={{width: "600px", height: "600px"}}>
//               {elm.id} {elm.author}
//         <img src={elm.download_url} alt={elm.author} className="w-full h-full object-cover rounded-lg" />
//       </div>
//       {elm.id} {elm.author}
//     })}
//    </div>
//    </div>
//   );
// }
// export default App;


//react-router-dom
// import React from 'react'
// import { Routes,Route } from 'react-router-dom'
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Home from './pages/Home';
// import Product from './pages/Product';
// import Navbar from './components/Navbar';

// const App = () => {
//   return (
//     <div className='bg-black min-h-screen p-5 text-white font-bold font-sans'>
      
//       <Navbar />
//       <Routes>
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/product" element={<Product />} />
//         <Route path="/" element={<Home />} />
//       </Routes>
      
      
//       </div>
//   )
// }

// export default App

//context api
import React, { useContext } from 'react'
import { DataContext } from './context/UserContext.jsx';



const App = () => {
  const data = useContext(DataContext);
  console.log(data);
  return (
    <div>App</div>
  )
}

export default App