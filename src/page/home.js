import React from "react";
import { Link } from "react-router-dom";
function Home(){
  return <div>
    <div class="bg">
       <div class="head">
                 <h1>SRI BALAJI CABLES &NETWORK</h1>
        </div>
        <marquee>Sri Balaji Cables & Networks<br></br>Grow Your Networks And Net Worth With Us </marquee>
        <hr></hr>
        <div class="home">
         <div id="pay">
          <Link to="/payment">Payment</Link>
        </div>      
      <div class="drop">
      <div class="dropdown">
        <div class="dropbtn">
          <h3>New&ensp;Connection</h3>
        </div>
        <div class="dropdown-content" >
          <a href="tel:+91 9150123456">Contact Owner <br></br>122333333</a>
          <a href="tel:+91 9150123456">Emp-Balan <br></br>1233333325</a>
          <a href="tel:+91 9150123456">Emp-Dhurai <br></br> 252165</a>
          <p>Please Wait Some Time (or) Contact Our Employees</p>
        </div>
      </div>
      <div class="dropdown">
        <div class="dropbtn">
          <h3>Contact Us</h3>
        </div>
        <div class="dropdown-content">
          <a href="tel:+91 9150123456">Owner <br></br> 122333333</a>
          <a href="tel:+91 9150123456">Emp-Balan <br></br>1233333325</a>
          <a href="tel:+91 9150123456">Emp-Dhurai <br></br>252165</a>
        </div>
      </div>
      </div>
    </div>
    <hr></hr>
      </div>
     <div class="bgcolor">
     <h2>WELCOME</h2>
    </div>
    <div class="content">
      <div class="para">      
      <p>Dear Customer We are very happy to welcome you are all to our Sri Balaji Cables & Networks</p>
       
      <p>அன்புள்ள வாடிக்கையாளரே எங்கள் ஸ்ரீ பாலாஜி கேபிள்ஸ் & நெட்வொர்க்கிற்கு உங்களை வரவேற்பதில் நாங்கள் மிகவும் மகிழ்ச்சியடைகிறோம்</p>
    </div>
    <div class="complaintbox">
     <Link to="./page/problem">Complaint Box [புகார் பெட்டி]</Link>
    </div>
    </div> 
       <div class="thank"><h3>Thanks For Visiting Our Webpage Have a Nice Day !...</h3></div>
</div>

}

export default Home;