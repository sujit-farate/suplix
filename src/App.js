import logo from "./logo.svg";
// import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content from "./components/Content";
import Upload from "./components/Upload";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}></Route>
          <Route path="/master/" element={<Header />}>
            <Route path="Home" element={<Content />}></Route>
            <Route path="upload" element={<Upload />}></Route>
          </Route>
          {/* <Route path="/master/" element={<Header />}> 
          <Route path="Home" element={<Content />}></Route>
          <Route path="/upload" element={<Upload />}></Route>
           </Route>  */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
