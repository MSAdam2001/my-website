import React, { useState } from "react";
import "./Blog.css";

function Blog() {
  // Sample blog data
  const blogs = [
    {
      id: 1,
      title: "How I Built My First Website",
      date: "October 10, 2025",
      content:
        "Building my first website was a huge step. I started with HTML, CSS, and JavaScript, then moved to React to make it interactive.",
    },
    {
      id: 2,
      title: "Why Learning JavaScript Changed Everything",
      date: "October 12, 2025",
      content:
        "JavaScript opened the door to real creativity for me. It’s the key to making websites dynamic and engaging.",
    },
    {
      id: 3,
      title: "My Goals as a Web Developer",
      date: "October 15, 2025",
      content:
        "My goal is to become a professional web developer who can build amazing, responsive, and user-friendly web apps.",
    },
  ];

  // State for likes, comments
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState({});

  const handleLike = (id) => {
    setLikes({ ...likes, [id]: (likes[id] || 0) + 1 });
  };

  const handleShare = (title) => {
    navigator.clipboard.writeText(window.location.href);
    alert(`🔗 Shared: ${title}\n(Link copied to clipboard)`);
  };

  const handleCommentChange = (id, value) => {
    setNewComment({ ...newComment, [id]: value });
  };

  const handleAddComment = (id) => {
    if (!newComment[id] || newComment[id].trim() === "") return;
    setComments({
      ...comments,
      [id]: [...(comments[id] || []), newComment[id]],
    });
    setNewComment({ ...newComment, [id]: "" });
  };

  return (
    <section className="blog">
      <h2>My Blog</h2>
      <div className="blog-container">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <h3>{blog.title}</h3>
            <p className="date">{blog.date}</p>
            <p>{blog.content}</p>

            {/* Action Buttons */}
            <div className="blog-actions">
              <button onClick={() => handleLike(blog.id)}>
                ❤️ {likes[blog.id] || 0} Likes
              </button>
              <button onClick={() => handleShare(blog.title)}>🔗 Share</button>
            </div>

            {/* Comment Section */}
            <div className="comment-section">
              <h4>Comments</h4>
              <div className="comment-list">
                {(comments[blog.id] || []).map((comment, index) => (
                  <p key={index} className="comment">
                    {comment}
                  </p>
                ))}
              </div>
              <div className="comment-input">
                <input
                  type="text"
                  value={newComment[blog.id] || ""}
                  onChange={(e) =>
                    handleCommentChange(blog.id, e.target.value)
                  }
                  placeholder="Write a comment..."
                />
                <button onClick={() => handleAddComment(blog.id)}>Post</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
