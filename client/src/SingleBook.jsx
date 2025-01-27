import { useState } from "react";

const SingleBook = ({ title, author, id }) => {
  const [deleted, setDelete] = useState(false);
  const [updated, setUpdate] = useState(false);
  const [bookTitle, setTitle] = useState(title);
  const [bookAuthor, setAuthor] = useState(author);

  // 删除图书
  const deleteBook = async () => {
    try {
      const response = await fetch("http://134.122.1.63:5656/api/books/" + id, {
        method: "DELETE",
      });
      setDelete(response.ok);
    } catch (error) {
      console.error(error);
    }
  };

  // 更新图书
  const editBook = async () => {
    try {
      const response = await fetch("http://134.122.1.63:5656/api/books/", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id,
          title: bookTitle,
          author: bookAuthor,
        }),
      });
      setUpdate(response.ok);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {updated ? (
        <>
          <form onSubmit={editBook}>
            <label className="">
              书名
              <input
                type="text"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </label>
            <label className="">
              作者
              <input
                type="text"
                onChange={(e) => {
                  setAuthor(e.target.value);
                }}
              />
            </label>
            <input type="submit" value="提交" />
          </form>
        </>
      ) : (
        <>
          {deleted ? (
            <></>
          ) : (
            <div className="box">
              <label>书名：{title}</label>
              <br />
              <label>作者：{author}</label>
              <br />
              <button className="button" onClick={deleteBook}>
                删除
              </button>
              <button
                className="button"
                onClick={() => {
                  setUpdate(true);
                }}
              >
                更新
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default SingleBook;
