import useContactStore from "../hooks/useContactStore"

interface ChatHeaderProps {
  name?: string,
  avatar?: string
}

const ChatHeader = ({ name, avatar }: ChatHeaderProps) => {
  if (name == null || avatar == null) {
    return <></>
  }

  return (
    <div className="bg-stone-700 flex">
      <img src={avatar} alt="Profile picture" />
      <p>{name}</p>
    </div>
  )
}

export default function Chat() {
  const { contact } = useContactStore()
  return (
    <div >
      <ChatHeader name={contact.name} avatar={contact.avatar} />
    </div>
  )
}
