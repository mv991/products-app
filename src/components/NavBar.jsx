import styled from "styled-components"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBagShopping} from "@fortawesome/free-solid-svg-icons"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import {faUser} from "@fortawesome/free-solid-svg-icons"
const Navbar = styled.div`
  height: 80px;
  width: 100%;
  padding: 25px;
  background-color: ${(props) => props.theme.color};
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.textColor};
`

const Input = styled.input`
  visibility: hidden;
  content: "";
  display: inline-block;
  cursor: pointer;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;

  &:checked + label {
    background-color: transparent;
    box-shadow: inset -8px -8px 1px 1px #fff;
  }
  &:not(:checked) + label {
    background-color: gold;
  }
`
const Label = styled.label`
  content: "";
  display: inline-block;
  cursor: pointer;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
`
const SearchBar = styled.input`
  width: 25%;
  border-radius: 60px;
  padding: 10px;
  border: 2px solid black;
`
const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 30px;
`
const Flex = styled.div`
  display: flex;
  align-items: center;
`
export function NavBar({theme, setTheme}) {
  return (
    <Navbar>
      <NavItems className="nav-div">
        <h2>Shoppy</h2>
        <FontAwesomeIcon icon={faBagShopping} size={"xl"} />
      </NavItems>
      <SearchBar />
      <Flex>
        <NavItems className="profile-cart">
          <h4>Cart</h4>
          <FontAwesomeIcon icon={faCartShopping} />
        </NavItems>
        <NavItems>
          <h4>My Profile</h4>
          <FontAwesomeIcon icon={faUser} />
        </NavItems>
        <Input
          type="checkbox"
          id="themeToggle"
          // checkbox={false}
          onClick={(e) =>
            e.target.checked ? setTheme("dark") : setTheme("light")
          }
        />
        <Label htmlFor="themeToggle" />
      </Flex>
    </Navbar>
  )
}
