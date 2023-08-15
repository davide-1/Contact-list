import { useState } from "react";
import { useEffect } from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId })  {
    const [contact, setContacts] = useState(null);

  useEffect(() => {
    async function fetchSelectedContact() {
      try {
        if (selectedContactId !== null) {
          const response = await fetch(`http://fsa-async-await.herokuapp.com/api/workshop/guests/${selectedContactId}`);
          const data = await response.json();
          setContacts(data);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchSelectedContact();
  }, [selectedContactId]);

  if (selectedContactId === null) {
    return <p>Select a contact to see details</p>;
  }

  // Render contact details only when the contact object is not null
  return (
    <div>
      <h2>Contact Details</h2>
      {contact !== null && (
        <div id="containerDetails">
          <p id="partyId">Party ID: {contact.party_id}</p>
          <p>Name: {contact.name}</p>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
          <button onClick={() => setSelectedContactId(null)}>Back to List</button>
        </div>
      )}
    </div>
  );
};