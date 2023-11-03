import "./styles.css"
import {NavBar} from "./components/NavBar"
import {Feed} from "./components/Feed"
import {ThemeProvider} from "styled-components"
import styled from "styled-components"
import {useEffect, useState} from "react"

const Container = styled.div`
  height: fit-content;
  background-color: ${(props) => props.theme.body};
`
const lightTheme = {
  body: "white",
  color: "white",
  textColor: "black"
}
const darkTheme = {
  body: "black",
  color: "#141A1F",
  textColor: "white"
}
export default function App() {
  const [theme, setTheme] = useState("light")
  const [data, setData] = useState([])
  const [category, setCategory] = useState([])
  const [hasMore, setHasMore] = useState(true)
  const [offset, setOffset] = useState(0)

  const getData = async () => {
    fetch(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=20`)
      .then((res) => res.json())
      .then((json) => setData((prev) => [...prev, ...json]))
      .then(() => setOffset(offset + 20))
  }
  const getInitialData = async () => {
    setHasMore(true)
    fetch(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=20`)
      .then((res) => res.json())
      .then((json) => setData(json))
  }
  useEffect(() => {
    getInitialData()

    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((res) => res.json())
      .then((json) => setCategory(json))
  }, [])
  const getCategory = (c) => {
    fetch(`https://api.escuelajs.co/api/v1/products?categoryId=${c}`)
      .then((res) => res.json())
      .then((json) => setData(json))
  }
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Container>
        <NavBar setTheme={setTheme} theme={theme} />
        <Feed
          data={data}
          category={category}
          getCategory={getCategory}
          getData={getData}
          hasMore={hasMore}
          setHasMore={setHasMore}
          getInitialData={getInitialData}
        />
      </Container>
    </ThemeProvider>
  )
}
