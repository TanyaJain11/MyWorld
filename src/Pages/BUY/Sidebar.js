import React from 'react';
import Nav from "../Nav.js";
import Cards from './Cards.js';
import {Route, Routes} from 'react-router-dom';
import ByLocation from './ByLocation.js';
import {Link} from 'react-router-dom';


const Sidebar=()=>{
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
   <div class="container-fluid" >
    <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark" style={{position:"fixed"}}>
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <p className="logo">My<span className="world">World</span></p>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item text-center">
                        <a href="#" class="nav-link align-middle px-0 ">
                            <i class="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline text-center fw-bolder fs-2">Filters</span>
                        </a>
                    </li>
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline fw-bold">Availability</span> </a>
                        <ul class="collapse nav flex-column ms-1" id="submenu1" data-bs-parent="#menu2">
                        <input type="checkbox" id="in stock" name="in stock" value="in" />
                            <label for="in stock">In</label>
                            <input type="checkbox" id="out stock" name="out stock" value="out"/>
                            <label for="out stock">Out of Stock</label>
                        </ul>
                    </li>
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline fw-bold">Indoor/Outdoor</span> </a>
                        <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu3">
                            <li class="w-100">
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 1 </a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 2 </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline fw-bold">Price</span> </a>
                        <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu4">
                        <label for="customRange3" class="form-label">₹0 — ₹4,499</label>
                         <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3"/>
                        </ul>
                    </li>
                    <li>
                        <a href="#submenu4" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline fw-bold">Plants Category</span></a>
                        <ul class="collapse nav flex-column ms-1" id="submenu4" data-bs-parent="#menu">
                            <li class="w-100">
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Fowering Plants</span></a>
                            </li>
                            <li>
                                <Link to="/location" class="nav-link px-0"> <span class="d-none d-sm-inline">Plants By Location</span></Link>
                            </li>
                            <li>
                                <Link to="/name" class="nav-link px-0"> <span class="d-none d-sm-inline">Plants By Name</span></Link>
                            </li>
                        </ul>
                    </li>
                  
                </ul>
               
                <hr/>
                <div class="dropdown pb-4">
                    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://img.freepik.com/premium-vector/smiling-girl-avatar_102172-32.jpg" alt="hugenerd" width="30" height="30" class="rounded-circle"/>
                        <span class="d-none d-sm-inline mx-1">Tanya Jain</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr class="dropdown-divider"/>
                        </li>
                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col py-1 " style={{justifyContent:"flex-end",marginLeft:"250px",}}>
        {/* <ByLocation/> */}
        {/* <Routes>
          <Route path="/location" element={<ByLocation/>} />
        </Routes> */}
           {/* <Cards image={image.one}/> */}
           {/* <Cards image={image.two}/>
           <Cards image={image.three}/>
           <Cards image={image.four}/>
           <Cards image={image.five}/>
           <Cards image={image.six}/>
           <Cards image={image.seven}/>
           <Cards/> */}


        </div>
    </div>
</div>
    </>
    
   )
}

export default Sidebar;