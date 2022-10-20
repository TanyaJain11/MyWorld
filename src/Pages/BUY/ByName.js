import React from 'react';
import Cards from './Cards.js';
import Sidebar from './Sidebar.js';

const Name=()=>{
    const image ={
        one:"../assets/images/Name/Jade.webp",
        two:"../assets/images/Name/Ficus.webp",
        three:"../assets/images/Name/Money.webp",
        four:"../assets/images/Cactus.webp",
        five:"../assets/images/Flowering-Plants.webp",
        six:"../assets/images/Name/Peace-Lily.webp",
        seven:"../assets/images/Name/Hibuscus.webp"
    }

    const name ={
        one:"Jade",
        two:"Ficus",
        three:"Money",
        four:"images/Cactus",
        five:"images/Flowering-Plants",
        six:"Peace-Lily",
        seven:"Hibuscus"
    }
    return(
        <>
        <Sidebar/>
        <div class="col py-1 " style={{justifyContent:"flex-end",marginLeft:"250px",}}>
        {/* <Routes>
          <Route path="/location" element={<ByLocation/>} />
        </Routes> */}
        <p className="text-center fs-1 fw-bold"> Plants By Name</p>
           <Cards name={name.one} image={image.one}/> 
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

    export default Name;