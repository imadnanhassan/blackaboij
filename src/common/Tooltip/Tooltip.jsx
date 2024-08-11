import React from 'react'

export default function Tooltip({ text, children }) {
  return (
    <div className="tooltip-container relative inline-block">
      {children}
      <span className="tooltip-text">{text}</span>
    </div>
  )
}
