import ContactCard from "./contact-card/ContactCard"
import Icon from "../assets/react.svg"
type Contact = {
  id: number
  name: string
  avatar: string
}
type Contacts = {
  contacts: Contact[]
}

function fetchContacts(): Contact[] {
  let c: Contact[] = [{ id: 0, name: "Sebastian Hård", avatar: Icon }, { id: 1, name: "Evelina Hård", avatar: Icon }]
  return c
}

export default function Contacts() {
  let d = fetchContacts()
  return (
    <div className="bg-stone-700">
      <h2>Contacts</h2>
      <ul>
        {d.map((c) => {
          return (
            <li key={c.id}>
              <ContactCard name={c.name} avatar={c.avatar} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
