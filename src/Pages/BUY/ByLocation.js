import React from 'react';
import Cards from './Cards.js';
import Sidebar from './Sidebar.js';

const ByLocation=()=>{
    const image ={
        one:"../assets/images/low-Maintenance.webp",
        two:"../assets/images/Herbs.webp",
        three:"../assets/images/Foilage.webp",
        four:"../assets/images/Cactus.webp",
        five:"../assets/images/Flowering-Plants.webp",
        six:"../assets/images/Bonsai-Plants.webp",
        seven:"../assets/images/Air-purifying.webp"
    }

    const name={
        one:"low-Maintenance",
        two:"Herbs",
        three:"Foilage",
        four:"Cactus",
        five:"Flowering-Plants",
        six:"Bonsai-Plants",
        seven:"Air-purifying"
    }
    return(
        <>
        <Sidebar/>
        <div class="col py-1 " style={{justifyContent:"flex-end",marginLeft:"250px",}}>
        {/* <Routes>
          <Route path="/location" element={<ByLocation/>} />
        </Routes> */}
         <p className="text-center fs-1 fw-bold"> Plants By Location</p>
           <Cards  name={name.one}image={image.one} /> 
            <Cards name={name.two} image={image.two}/>
           <Cards name={name.three} image={image.three}/>
           <Cards name={name.four} image={image.four}/>
           <Cards name={name.five} image={image.five}/>
           <Cards name={name.six} image={image.six}/>
           <Cards name={name.seven} image={image.seven}/>


        </div>
        </>
    )
}

    export default ByLocation;