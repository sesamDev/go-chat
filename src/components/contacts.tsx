import ContactCard from "./contact-card/ContactCard"
import Icon from "../assets/react.svg"
import useContactStore from "../hooks/useContactStore"
import { Contact } from "../hooks/useContactStore"

function fetchContacts(): Contact[] {
  let c: Contact[] = [{ id: 0, name: "Sebastian Hård", avatar: Icon }, { id: 1, name: "Evelina Hård", avatar: Icon }]
  return c
}

export default function Contacts() {
  const { setContact } = useContactStore()

  const handleClick = (e: React.MouseEvent, contact: Contact) => {
    e.preventDefault()
    console.log(contact)
    setContact(contact)

  }
  let d = fetchContacts()
  return (
    <div className="bg-stone-700">
      <h2>Contacts</h2>
      <ul>
        {d?.map((c) => {
          return (
            <li key={c.id}>
              <ContactCard onClick={(e, contact) => handleClick(e, { id: c.id, name: c.name, avatar: c.avatar })} name={c.name} avatar={c.avatar} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
