
import React ,{ useState, useEffect } from 'react'
import { v4 as uuid } from "uuid";
import './App.css';
import api from './api/contacts';
import Nav from './Pages/Nav';
import Home from './Pages/Home';
import Sec1 from './Pages/Sec1';
import Login from "./Pages/Login.js";
import Contact from "./Pages/Contact";
import Edit from "./Pages/Edit";
import UserProfile from "./Pages/UserProfile";
import {Route, Routes} from 'react-router-dom';
import ContactList from './Pages/ContactList';

// import CartItem from './Pages/CartItem';



function App() {

  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  //retrieve contacts
  const retrieveContacts=async()=>{
    const response = await api.get("/contacts");
    return response.data;
  };

  const addContactHandler = async (contact) => {
    console.log(contact);
    const request = {
      id:uuid(),
      ...contact,
    }
    const response = await api.post("/contacts",request)
    setContacts([...contacts, response.data]);
  };

  // const updateContactHandler=async ()=>{
  //   const response = await api.get("/contacts");
  //   return response.data;
  // };

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact)
    const {id,name,email} = response.data;
    contacts.map((contact)=>{
      return contact.id===id?{...response.data}:contact;
    })
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

    useEffect(() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retriveContacts) setContacts(retriveContacts);
    const getAllContacts = async()=>{
      const allContacts = await retrieveContacts();
      if(allContacts) setContacts(allContacts);
    };
    getAllContacts();
  }, []);

  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
     <div className="App">
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="login" element={<Login/>} />
    <Route path="contact" element={<Contact addContactHandler={addContactHandler}/>} />
    <Route path="/contactList" element={()=>(<ContactList contacts={contacts} getContactId={removeContactHandler}/>)}/>
    <Route path="/userProfile" element={<UserProfile/>} />
    <Route path="/edit" element={<Edit updateContactHandler={updateContactHandler} contacts={contacts}/>} />
    {/* <Route
  path="/edit"
  render={(props) => <Edit {...props} updateContactHandler={updateContactHandler} />}
/> */}
    </Routes>
    </div>
    </>

  );

}



// function App() {
//   const LOCAL_STORAGE_KEY = "contacts";
//   const [contacts, setContacts] = useState(
//     JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
//   );

//   const addContactHandler = (contact) => {
//     console.log(contact);
//     setContacts([...contacts, { id: uuid(), ...contact }]);
//   };

//   const removeContactHandler = (id) => {
//     const newContactList = contacts.filter((contact) => {
//       return contact.id !== id;
//     });

//     setContacts(newContactList);
//   };

//   // useEffect(() => {
//   //   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//   //   if (retriveContacts) setContacts(retriveContacts);
//   // }, []);

//   useEffect(() => {
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
//   }, [contacts]);

//   return (
//     <div className="ui container">
//       <Nav />
//       <Contact addContactHandler={addContactHandler} />
//       <ContactList contacts={contacts} getContactId={removeContactHandler} />
//       <Routes>
//      <Route path="/" element={<Home/>} />
//      <Route path="login" element={<Login/>} />
//     <Route path="contact" element={<Contact/>} />
//     <Route path="/userProfile" element={<UserProfile/>} />
//      </Routes>
//     </div>
//   );
// }


export default App;
