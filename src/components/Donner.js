import React, { useEffect, useState } from 'react'
import Card from './Card';

const Donner = () => {
    const [donners, setDonners] = useState([]);
    console.log(donners)

    useEffect( () =>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setDonners(data))
    } ,[])
  return (
    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3  lg:grid-cols-3  xl:grid-cols-3 mt-20 gap-8 mx-auto max-w-screen-xl px-4  '>
        {
            donners.map((d) => <Card donner ={d} key={d.id}/>)
        }
    </div>
  )
}

export default Donner