import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ContactRow from "./ContactRow";

const dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
  ];

export default function ContactList({setSelectedContactId}) {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
      async function fetchContacts() {
        try{
          const response = await fetch("http://fsa-async-await.herokuapp.com/api/workshop/guests");
          const result = await response.json(); 
          console.log('API Response:', result); 
          setContacts(result);
        }catch (error) {
            console.error("Sorry, we having issue fetching the contact list", error);
        }
      }
      fetchContacts();
    }, []);
    console.log('Contacts:', contacts);


return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <tr onClick={() => setSelectedContactId(contact.id)} key={contact.id}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};



