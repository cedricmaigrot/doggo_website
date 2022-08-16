import { HashRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./layouts/Home";
import Home from "./components/Home";



function App() {
    return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </HashRouter>
      </>
    );
}

export default App