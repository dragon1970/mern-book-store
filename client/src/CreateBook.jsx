import { useState } from "react";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const createBOOK = async (e) => {
    e.preventDefault();
    console.table([title, author]);

    // const formData = new FormData();
    // formData.append("title", title);
    // formData.append("author", author);

    try {
      // const response = await fetch("http://localhost:5656/api/createbook", {
      //   method: "POST",
      //   body: formData,
      // });

      const response = await fetch("http://134.122.1.63:5656/api/createbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title,
          author: author,
        }),
      });

      if (response.ok) {
        setTitle("");
        setAuthor("");
        alert("图书添加成功");
        // setSubmitted(true);
      } else {
        console.log("添加失败");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="box">
        <form onSubmit={createBOOK}>
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
          <input type="submit" value="添加" />
        </form>
      </div>
    </>
  );
};

export default CreateBook;
