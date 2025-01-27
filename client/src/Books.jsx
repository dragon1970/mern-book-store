import { useState, useEffect } from "react";
import SingleBook from "./SingleBook.jsx";
const Books = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // before fetching, make sure using middleware app.use(cors())
    fetch("http://134.122.1.63:5656/api/getbooks")
      .then((response) => response.json())
      .then((jsonData) => {
        console.log(jsonData);
        setData(jsonData);
      });
  }, []);

  return (
    <>
      {data.map((item) => {
        return (
          <SingleBook
            key={item._id}
            title={item.title}
            author={item.author}
            id={item._id}
          />
        );
      })}
    </>
  );
};
export default Books;
