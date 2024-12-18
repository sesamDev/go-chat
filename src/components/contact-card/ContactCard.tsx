interface ContactCardProps {
  id?: number
  name?: string
  avatar?: string
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void
}
export default function ContactCard({ onClick, name, avatar }: ContactCardProps) {


  return (
    <>
      <div className="flex space-x-6 hover:bg-stone-900 cursor-pointer" onClick={onClick}>
        <img src={avatar} alt="Profile picture" />
        <p>{name}</p>
      </div>
    </>
  )
}
