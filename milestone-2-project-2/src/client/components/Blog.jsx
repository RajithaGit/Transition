import React, { useState } from "react";

const Blog = ({ blog, toggle, setModifyBlog }) => {
  const [successMessage, setSuccessMessage] = useState(null);

  const onClickDeleteBlogHandler = (deleteBlogId) => {
    const apiURL = `/api/blog/${deleteBlogId}`;
    const sendData = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: deleteBlogId }, 2, null)
    };
    fetch(apiURL, sendData)
      .then((response) => response.json())
      .then((data) => setSuccessMessage(data));
  };

  const onClickModifyBlogHandler = (modifyBlog) => {
    setModifyBlog(modifyBlog);
  };

  return (
    <>
      <div>
        <div className="blgContent">
          <div className="blgHeader">
            {/* <h3 className="h3Txt">{blog.id}</h3> */}
            <h3 className="h3Txt">{blog.header}</h3>
          </div>
          <div>
            <p className="blogText">{blog.text}</p>
          </div>
        </div>
        <div>
          <button
            className="btns"
            onClick={() => {
              toggle();
              onClickModifyBlogHandler(blog);
            }}
          >
            Modify
          </button>
          <button
            className="btns"
            onClick={() => {
              // toggle();
              onClickDeleteBlogHandler(blog.id);
            }}
          >
            Delete
          </button>
          {successMessage ? <div className="msg">{successMessage}</div> : null}
        </div>
      </div>
    </>
  );
};

export default Blog;
