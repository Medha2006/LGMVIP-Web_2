import React from "react";
import './index.css';
import {useState} from "react";
import Loader from "./loader.js";

function Alts({url, alte})
{
  var alter= "image of avatar of " + { alte };
  return <img class= "image" src ={url} alt= {alter} />;
}
 export default function App()
  {
    const [data,setdata]= useState([]);
    const [isLoader, setIsLoader]= useState(false);
    const loaddata= async() =>{
      setIsLoader(true);
      setdata([]);
      const res = await fetch("https://reqres.in/api/users?page=1");
      const jsondata= await res.json();
      setTimeout(()=>{
        setdata(jsondata["data"]);
        setIsLoader(false);
      },2000);
  };
  return (
    <>
    <div className="App">
    <div class="topnav">
     <a class="active" href="#home">🌷Lavender  </a>
     <a href="#contact"> Features</a>
     <a href="#about"> Contact</a>
     <a href="#about"> Pricing</a>
      <div class= "topnav-right">
        <button class="css-button" key="getdata" onClick={loaddata} >GET USERS</button>
      </div>
   </div>
   <h1 class="heading"><center>🌷Lavender Welcomes You</center></h1>
   <h3><center>Press<b><span class="click"> GET USERS</span></b> to see the Users Data. </center></h3>
   <ul class="lists">
    {data.map(({ id, avatar, first_name, last_name, email})=>(
      <li class="lis" key={id} style={{listStyle: "none"}}>
       <Alts url={avatar} alte={first_name} />
       <h1>{first_name+ " " + last_name}</h1>
       <h3>{email}</h3>
      </li>
    ))}
   </ul>
   <Loader show={isLoader} />
   </div>
   </>
  );
}
