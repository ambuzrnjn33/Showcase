import React, { useEffect, useState } from "react";
// import { useGlobalContext } from "../../context/context";
import AuthNavbar from "../components/AuthNavbar";
import { IoMdCheckmarkCircle } from "react-icons/io";
import PlanCard from "../components/PlanCard";
import { useGlobalContext } from "../context/context";
import axios from 'axios'

const Subscription = () => {
  const { loading } = useGlobalContext();
  const [plans, setPlans] = useState([])

  const { user } = useGlobalContext();
  const {_id, email, name, phone } = user


  //----------------------//


  const checkoutHandler = async(planId)=>{
        
    // const { data: { key } } = await axios.get("http://www.localhost:4000/api/getkey")

    // const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
    //     amount
    // })

    const { data: { key } } = await axios.get("http://www.localhost:3000/vendor/getapi-key")

   // const {data: {price, title } } = await axios.get(`http://www.localhost:3000/product/${planId}/get-plan`)

    const { data: { order } } = await axios.post("http://localhost:3000/vendor/create-plan", {
       //pay: price,
       planId : planId
    })
    console.log(key)
    console.log(order)


    const options = {
        //key: "rzp_test_FmTtwKwzpleRd",
        key,
        amount: order.amount,
        currency: "INR",
        name: "6 Pack Programmer",
        description: "Tutorial of RazorPay",
        image: "https://avatars.githubusercontent.com/u/25058652?v=4",
        order_id: order.id,
        //callback_url:  "http://localhost:3000/user/verify-payment", //"http://localhost:4000/api/paymentverification",
        
        handler : async function(response){
            let data = {response, email, vendorId: _id, plan: order.notes[0], name}
             axios.post("http://localhost:3000/vendor/verify-payment", data).catch((err) => console.log(err))
             .then(res=>console.log(res))

        },
        prefill: {
            name,
            email,
            contact: phone
        },
        notes: {
            "address": "Razorpay Corporate Office"
        },
        theme: {
            "color": "#121212"
        }
    };
    const razor = new window.Razorpay(options);
    razor.open();

}






//--------------------//


  useEffect( async()=>{
    let { data }= await axios.get("http://localhost:3000/product/get-all-plan")
    if(data){
      //console.log(data.da)
      setPlans(data.data)
      
    }


  }, [])

  console.log(plans[0])
  return (
    <div>
      <div className="overflow-hidden">
        <AuthNavbar title="Subscription Plan" />
      </div>
      <div className="grid grid-cols-3 gap-x-8 p-20">
        <PlanCard subTitle="Free plan" price="20" bg="white" title="basic" handler = {()=>checkoutHandler("64231f19d4f3fbd7d432a870")} />
        <PlanCard
          title="bussiness"
          price="1000"
          bg="white"
          subTitle="Per Month"
          handler = {()=>checkoutHandler(plans[0]._id)}
        />
        <PlanCard
          title="standard"
          price="100006666"
          bg="#6B97F3"
          subTitle="Per Anum"
          handler = {()=>checkoutHandler(plans[1]._id)}
        />
      </div>
      <div className="text-center text-lg">
        <p>Select any of the plan to continue using your account</p>
      </div>
    </div>
  );
};

export default Subscription;
