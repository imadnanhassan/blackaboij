export default function Button({ text, onClick, className, icon: Icon }) {
  return (
    <button className={className} onClick={onClick}>
      {Icon && <Icon className="hidden lg:block" />}
      <span className="text-sm">{text}</span>
    </button>
  )
}
