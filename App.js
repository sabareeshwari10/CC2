import React from "react";
import Day8 from "./Components/day8";
import Entry from "./Components/day6/Entry";
import List from "./Components/day6/List";
import Day7 from "./Components/day7";
import Home from "./day9/Home";
import Singers from "./day9/Singers";
import Albums from "./day9/Albums";



function createEntry(items) {
  return (
    <Entry
      key={items.id}
      imgUrl={items.imgUrl}
      name={items.name}
      price={items.price}
    />
  );
}

function App() {
  return (
    <div>
    <Day8/>
      <h1 style={{ textAlign:"center"}}>
         Products
      </h1>
      
      <dl >{List.map(createEntry)}</dl>
      
      <Day7/>
      <Albums/>
      <Singers/>
      <Home/>
      
      
    </div>
  );
}

export default App;