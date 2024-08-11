import React from 'react'

export default function ToggleButton({ onChange, isChecked }) {
  const handleToggle = () => {
    onChange(!isChecked) 
  }

  return (
    <div className="flex items-center relative">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-checkbox sr-only"
        id="toggle"
      />
      <label htmlFor="toggle" className="toggle-label">
        <div className="toggle-inner"></div>
        <div className="toggle-switch absolute left-0 top-0"></div>
      </label>
    </div>
  )
}
