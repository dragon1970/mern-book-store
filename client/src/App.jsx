import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Books from "./Books";
import Header from "./Header";
import CreateBook from "./CreateBook";
import DeleteBook from "./DeleteBook";
import EditBook from "./EditBook";
import SingleBook from "./SingleBook";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/createbook" element={<CreateBook />} />
          <Route path="/deletebook" element={<DeleteBook />} />
          <Route path="/editbook" element={<EditBook />} />
          <Route path="/singlebook/:id" element={<SingleBook />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
