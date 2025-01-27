import { useState } from "react";
const DeleteBook = () => {
  const [title, setTitle] = useState([]);

  const removeBook = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="box">
        <form onSubmit={deleteBOOK}>
          <label className="">
            书名
            <input type="text" onChange={(e) => setTitle(e.target.value)} />
          </label>
          <input type="submit" value="删除" />
        </form>
      </div>
    </>
  );
};

export default DeleteBook;
