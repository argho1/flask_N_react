import {useState} from "react"

const ContactForm = ({ existingContacts = {}, updateCallback}) => {
    const [firstName, setFirstName] = useState(existingContacts.firstName || "")
    const [lastName, setLastName] = useState(existingContacts.lastName || "")
    const [email, setEmail] = useState(existingContacts.email || "")

    const updating = Object.entries(existingContacts).length !== 0

    const onSubmit = async (e) => {
        e.preventDefault()

        const data = {
            firstName,
            lastName,
            email
        }

        const url = "http://127.0.0.1:5000/" + (updateing ? 'update_contact/${existingContact.id}' : 'create_contact')
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(url, options)
        if (response.status !== 201 && response.status !== 200) {
            const data = await response.json()
            alert(data.message)
        } else {
            updateCallback()
        }
    }

    return <form onSubmit={onSubmit}>
        <div>
            <label htmlFor="firstName">First Name:</label>
            <input 
                type="text" 
                id="fistName" 
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)} 
            />
            <label htmlFor="lastName">Last Name:</label>
            <input 
                type="text" 
                id="lastName" 
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)} 
            />
            <label htmlFor="email">Email:</label>
            <input 
                type="text" 
                id="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <button type="submit" >Create Contact</button>
        </div>
    </form>

}

export default ContactForm