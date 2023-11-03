import {styled} from "styled-components"
const Bar = styled.div`
  height: 100px;
  border-bottom: 0.5px solid ${(props) => props.theme.textColor};
  margin: 0px 30px 0px 30px;
  display: flex;
  align-items: end;
  width: 80%;
  margin: auto;
  justify-content: center;
  padding: 20px;
  color: ${(props) => props.theme.textColor};
`
const FilterButton = styled.button`
  padding: 8px 15px 8px 15px;
  background-color: transparent;
  box-shadow: none;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.textColor};
  font-weight: 500;
  color: ${(props) => props.theme.textColor};
  margin: 12px;

  &:hover {
    background: ${(props) => props.theme.textColor};
    color: ${(props) => props.theme.body};
  }
  &.active {
    background: ${(props) => props.theme.textColor};
    color: ${(props) => props.theme.body};
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
`

export function AppBar({category, getCategory, setHasMore, getInitialData}) {
  function handleClick(e, c) {
    console.log(c, "CC")
    setHasMore(false)
    const remove = document.querySelector(".active")
    remove && remove.classList.remove("active")

    e.target.classList.add("active")
    getCategory(c)
  }
  return (
    <Container>
      <Bar>
        <h2>Latest Products</h2>
      </Bar>
      <div>
        {category.map((c) => {
          if (
            c.id !== 1 &&
            c.id !== 2 &&
            c.id !== 16 &&
            c.id !== 4 &&
            c.id !== 3
          ) {
            return (
              <FilterButton onClick={(e) => handleClick(e, c.id)} key={c.id}>
                {c.name}
              </FilterButton>
            )
          }
        })}
        <FilterButton onClick={(e) => getInitialData()}>No filter</FilterButton>
      </div>
    </Container>
  )
}
