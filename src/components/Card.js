import React from 'react'
import { Link } from 'react-router-dom'

const Card = (donner) => {
    console.log(donner)
    const { name,blood_group,email,facebook_link,address, image_link } = donner.donner;
    return (
        <div class="rounded overflow-hidden shadow-lg">
        <img class="w-full" src={image_link} alt="Mountain"/>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{name}</div>
          <p class="text-gray-700 text-base">
          blood_group : {blood_group}
          </p>
          <p class="text-gray-700 text-base">
          email : {email}
          </p>
          <p class="text-gray-700 text-base">
          facebook_link : {facebook_link}
          </p>
          <p class="text-gray-700 text-base">
          Address : {address.city}
          </p>
          <p class="text-gray-700 text-base">
          country : {address.country}
          </p>
          <p class="text-gray-700 text-base">
          country : division : {address.division}
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
      </div>



        // <Link to="/" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        //     <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={image_link} alt="" />
        //     <div class="flex flex-col justify-between p-4 leading-normal">
        //         <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        //         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> blood_group : {blood_group}</p>
        //         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> email : {email}</p>
        //         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> facebook_link : {facebook_link}</p>
        //         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> Address : {address.city}</p>
        //         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> country : {address.country}</p>
        //         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> division : {address.division}</p>
        //     </div>
        // </Link>

    )
}

export default Card