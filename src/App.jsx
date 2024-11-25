import { Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./homePage/home/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
