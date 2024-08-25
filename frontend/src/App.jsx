import { useState, useEffect } from 'react';
import ContactList from './ContactList';
import './App.css';
import ContactForm from './ContactForm';

function App() {

  const [contacts, setContacts] = useState([]);
  const [isModelOpen, setIsModelOpen] = useState(false);

  useEffect(() => {
    fetchContacts()
  }, []);

  const fetchContacts = async () => {
    const response = await fetch("http://127.0.0.1:5000/contacts");
    const data = await response.json();
    setContacts(data.contacts);
    console.log(data.contacts);
  }

  const closeModal = () => {
    setIsModelOpen(false)
  }

  const openCreateModel = () => {
    if (!isModelOpen) setIsModelOpen(true)
  }

  return (
    <>
      <ContactList contacts={contacts} />
      <button onClick={openCreateModel}>Create New Contact</button>
      {isModelOpen && <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal} >&times;</span>
          <ContactForm />
        </div>
      </div>
      }
    </>
  );
}

export default App;
