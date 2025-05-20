import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Newsboard from "./components/Newsboard";

import "./App.css";

function App() {
  const [category, setCategory] = useState("");
  return (
    <>
      <Navbar setCategory={setCategory} />
      <div className="container mt-4">
        <h2 className="text-capitalize">{category} News</h2>
        <Newsboard category={category} />
      </div>

      {/* <NewsApp /> */}
    </>
  );
}

export default App;
