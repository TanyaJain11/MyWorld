import React ,{ useState, useEffect } from 'react'
import { v4 as uuid } from "uuid";
import api from '../api/contacts';
import ContactList from './ContactList';
import Contact from "./Contact";
import Nav from './Nav';

const UserProfile=()=>{
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

  const updateContactHandler=()=>{};

      const response = await api.post("/contacts",request)
      setContacts([...contacts, response.data]);
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
        return(
            <>
            <Nav/>
      {/* <Contact addContactHandler={addContactHandler} /> */}
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
            </>
        )
}

export default UserProfile;