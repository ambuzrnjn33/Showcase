import React from "react";
import Layout from '../components/Layout';


const MyProfile = () => {
 return(
  <Layout>
<div class="max-w-100 mx-auto bg-orange-80 p-5">
<div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
</div>
<div class="max-w-screen-md mx-auto bg-orange-80 p-5">
  <div class="text-center mb-16">
      <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
        Profile
      </h3>
  </div>
  <form class="w-full">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
    <label for="name" class="w-32 text-right pr-4 font-bold text-gray-700">Store Name</label>
      <input class="appearance-none block w-full bg-blue-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-name" type="name" placeholder="xxx"/>
    </div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
    <label for="name" class="w-32 text-right pr-4 font-bold text-gray-700">Address</label>
      <input class="appearance-none block w-full bg-blue-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-address" type="address" placeholder="xxxxxxx"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    <label for="name" class="w-32 text-right pr-4 font-bold text-gray-700">Propreitor</label>
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
      
      </label>
      <input class="appearance-none block w-full bg-blue-100 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-pname" type="text" placeholder="Rahul"/>
    
    </div>
    <div class="w-full md:w-1/2 px-3">
    <label for="name" class="w-32 text-right pr-4 font-bold text-gray-700"></label>
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-name">
      </label>
      <input class="appearance-none block w-full bg-blue-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Ravi"/>
    </div>
  </div>
  <div class="mb-5">
  <label class="mb-3 block text-base font-medium text-[#07074D]">
          Gender
        </label>
        <div class="flex items-center space-x-6">
          <div class="flex items-center">
            <input
              type="radio"
              name="radio1"
              id="radioButton1"
              class="h-5 w-5"
            />
            <label
              for="radioButton1"
              class="pl-3 text-base font-medium text-[#07074D]"
            >
              Female
            </label>
          </div>
          <div class="flex items-center">
            <input
              type="radio"
              name="radio1"
              id="radioButton2"
              class="h-5 w-5"
            />
            <label
              for="radioButton2"
              class="pl-3 text-base font-medium text-yellow"
            >
              Male
            </label>
          </div>
        </div>
       </div>
       <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    <label for="name" class="w-32 text-right pr-4 font-bold text-gray-700">Phone Number</label>
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-phone-num"> 
      </label>
      <input class="appearance-none block w-full bg-blue-100 text-gray-700 border border--500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-num" type="num" placeholder="78 789 377 38"/>
    </div>
    <div class="w-full md:w-1/2 px-3">
    <label for="name" class="w-32 text-right pr-4 font-bold text-gray-700"></label>
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
      </label>
      <input class="appearance-none block w-full bg-blue-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-num" type="num" placeholder="6666 66666"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
    <label for="email" class="w-32 text-right pr-4 font-bold text-gray-700">Email</label>
      <input class="appearance-none block w-full bg-blue-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="xyz@gmail.com"/>
    </div>
  </div>
  <button class="block bg-yellow-400 hover:bg-yellow-400 text-white uppercase text-lg mx-auto p-2 rounded" type="submit">Save</button>
</form>
</div>
</div>
</Layout>
  );
};
export default MyProfile;
