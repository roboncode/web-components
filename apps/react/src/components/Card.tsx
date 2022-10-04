import { useState } from "react"

type Props = {
  title: string
  details?: React.ReactNode,
  children?: React.ReactNode,
}

function Card({title, details, children}: Props) {
  return (
    <div className="bg-dark-800 drop-shadow-xl rounded-lg overflow-hidden">
      <div className="bg-light-blue-600 p-4 py-2 text-lg font-bold text-white text-shadow-lg">{title }</div>
      <div className="font-medium p-4 bg-dark-600">
        <ul className="pl-4">
          {details}
        </ul>
      </div>
      <div className="p-2 bg-white/10">
        {children}
      </div>
    </div>
  )
}

export default Card;