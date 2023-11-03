import styled from "styled-components"
import CarouselComponent from "./Carousel"
import {AppBar} from "./AppBar"
import InfiniteScroll from "react-infinite-scroll-component"
const MainFeed = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  justify-content: center;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Card = styled.div`
  height: 400px;
  width: 250px;
  border-radius: 10px;
  margin: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 0px 20px 0;
  background-color: "white";
`
const Button = styled.button`
  padding: 12px;
  margin: 10px;
  background-color: ${(props) => props.theme.textColor};
  box-shadow: none;
  cursor: pointer;
  border: none;
  border-radius: 20px;
  width: 200px;
  font-weight: 600;
  color: ${(props) => props.theme.body};
`

export function Feed({
  data,
  category,
  getCategory,
  getData,
  hasMore,
  setHasMore,
  getInitialData
}) {
  return (
    <Container>
      <CarouselComponent />
      <AppBar
        category={category}
        getCategory={getCategory}
        setHasMore={setHasMore}
        getInitialData={getInitialData}
      />

      <InfiniteScroll
        dataLength={data.length}
        next={getData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <MainFeed>
          {data?.map((d, index) => {
            return (
              <Card key={index}>
                <img
                  src={d.images[0]}
                  width={"200px"}
                  height={"200px"}
                  alt="product-img"
                />

                <h5>{d.title}</h5>

                <Button>Add to Cart</Button>
              </Card>
            )
          })}
        </MainFeed>
      </InfiniteScroll>
    </Container>
  )
}
