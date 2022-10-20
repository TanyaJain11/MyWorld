import React from 'react';
import Cards from './Cards.js';
import Sidebar from './Sidebar.js';

const Flowering=()=>{
    const image ={
        one:"../assets/images/low-Maintenance.webp",
        two:"../assets/images/Herbs.webp",
        three:"../assets/images/Foilage.webp",
        four:"../assets/images/Cactus.webp",
        five:"../assets/images/Flowering-Plants.webp",
        six:"../assets/images/Bonsai-Plants.webp",
        seven:"../assets/images/Air-purifying.webp"
    }
    return(
        <>
        <Sidebar/>
        <div class="col py-1 " style={{justifyContent:"flex-end",marginLeft:"250px",}}>
        <p className="text-center fs-1 fw-bold">Flowering Plants</p>
        {/* <Routes>
          <Route path="/location" element={<ByLocation/>} />
        </Routes> */}
           <Cards image={image.one}/> 
            <Cards image={image.two}/>
           <Cards image={image.three}/>
           <Cards image={image.four}/>
           <Cards image={image.five}/>
           <Cards image={image.six}/>
           <Cards image={image.seven}/>
           <Cards/>


        </div>
        </>
    )
}

    export default Flowering;