import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList'
import SelectedContact from './components/selectedContact';

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);


return (
  <div id='header'>
    <h1>Contact List</h1>
    <ContactList setSelectedContactId={setSelectedContactId} />
    <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId} />
  </div>
)
}


export default App
