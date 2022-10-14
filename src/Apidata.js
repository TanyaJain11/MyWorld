import React from "react";
import Userdata from './Userdata.json';
const Apidata=()=>{
    return(
        <div className="m-5">
            <p > Heloo guys welcome to my page </p>
            <h1>This is the data component</h1>
            <table>
                <thead>
                <tr>
                    <th>Index</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>country</th>
                </tr>
                </thead>

                <tbody>
                    {
                        Userdata.map((users,index)=>(
                            <tr key={index}>
                                <th>{index+1}</th>
                                <td>{users.Name}</td>
                                <td>{users.Email}</td>
                                <td>{users.Mobile}</td>
                                <td>{users.country}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Apidata;