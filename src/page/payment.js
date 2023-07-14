import React,{useState} from 'react';
import { Link } from "react-router-dom";


function Pay() {
    const [amount, setamount] = useState('');
  
    const handleSubmit = (e)=>{
      e.preventDefault();
      if(amount === ""){
      alert("please enter amount");
      }else{
        var options = {
          key: "rzp_test_h7wX20jrVWJyT4",
          key_secret:"rzp_test_h7wX20jrVWJyT4",
          amount: amount *100,
          currency:"INR",
          name:"Sri Balaji Cables & Networks",
          description:"for your uasge amount",
          handler: function(response){
            alert(response.razorpay_payment_id);
            <Link to="https://forms.gle/mmhfERLZu7sFgeFQ8">For confirmation (உறுதிப்படுத்தலுக்காக)</Link>;

          },
          prefill: {
            name:"Sivakumar",
            email:"sivakumar200315@gmail.com",
            contact:"9150203344"
          },
          notes:{
            address:"Razorpay Corporate office"
          },
          theme: {
            color:"#3399cc"
          }
        };
        var pay = new window.Razorpay(options);
        pay.open();
      }
    }
    return (        
      <div className="App">
         <h2>Sri Balaji Cables<br></br>Payment Page</h2> 
       <input type="text"placeholder='Enter Amount'value={amount}onChange={(e)=>setamount(e.target.value)} />
       <br/><br/>
       <button onClick={handleSubmit}>submit</button>
      </div>
    );
  }

  export default Pay;