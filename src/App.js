import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";

function App() {
  const [state, setState] = useState({ items: [<Home />] });
  const [extraComponents] = useState([
    <AboutMe />,
    <Portfolio />,
    <TechStack />,
    <Contact />
  ]);
  const [count, setCount] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const fetchMoreData = () => {
    if (state.items.length >= 5) {
      setHasMore(false);
      return;
    }
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    console.log("extraC", extraComponents[count]);
    setTimeout(() => {
      setState({
        items: state.items.concat([extraComponents[count]])
      });
      setCount(count + 1);
    }, 1500);
  };

  // console.log(state.items);
  return (
    <div>
      <h1>Portfolio Template with react-infinite-scroll-component </h1>
      <InfiniteScroll
        dataLength={state.items.length}
        // height={50}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {state.items.map((i, index) => i)}
      </InfiniteScroll>
    </div>
  );
}

export default App;
