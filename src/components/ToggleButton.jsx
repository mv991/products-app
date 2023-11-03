import {useContext, useEffect} from "react"
import {ThemeContext} from "../../App"
import "./ToggleButton.css"
export function ToggleButton() {
  const {toggleTheme} = useContext(ThemeContext)
  function handleClick(e) {
    const checked = e.target.checked
    checked ? toggleTheme("dark") : toggleTheme("light")
  }
  return (
    <>
      <input
        type="checkbox"
        id="theme-toggle"
        onClick={(e) => handleClick(e)}
        checkbox={false}
      />
      <label for="theme-toggle"></label>
    </>
  )
}
