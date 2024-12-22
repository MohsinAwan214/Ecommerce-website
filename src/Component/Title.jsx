

export default function Title(props) {
  return (
    <div className={`flex gap-4 items-center ${props.className}`}>
        <div className="h-10 w-5 bg-primary rounded"></div>
        <h2 className="text-primary font-semibold ">{props.text}</h2>
    </div>
  )
}
