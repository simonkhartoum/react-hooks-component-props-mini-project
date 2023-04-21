import React from "react";
import blogData from "../data/blog";
import Header from "./header";
import About from "./about";
import ArticleList from "./articleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header {...blogData} />
      <About {...blogData} />
      <ArticleList {...blogData} />
    </div>
  );
}

export default App;
