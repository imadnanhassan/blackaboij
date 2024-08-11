import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMode } from '../redux/features/themes/themeSlice'

export default function Theme() {
  const isDarkMode = useSelector(state => state.theme.isDarkMode)
  const dispatch = useDispatch()

  const handleToggle = () => {
    dispatch(toggleMode())
  }
  return (
    <div
      className={`flex items-center justify-center h-screen ${isDarkMode ? 'bg-[#293549] text-white' : 'bg-white text-black'}`}
    >
      <button onClick={handleToggle}>{isDarkMode ? 'Light' : 'Dark'}</button>
    </div>
  )
}
