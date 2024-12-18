interface ContactCardProps {
  name: string
  avatar: string
}
export default function ContactCard({ name, avatar }: ContactCardProps) {
  return (
    <>
      <div className="flex space-x-6 hover:bg-stone-900 cursor-pointer">
        <img src={avatar} alt="Profile picture" />
        <p>{name}</p>
      </div>
    </>
  )
}
