// src/components/Posts.jsx
import React, { useState } from 'react';

const Posts = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Getting Started with React Hooks",
      date: "January 15, 2024",
      category: "React",
      readTime: "5 min read",
      excerpt: "Learn how to use React Hooks to manage state and side effects in your functional components...",
      content: "React Hooks revolutionized how we write React components. In this post, we'll explore the most useful hooks including useState, useEffect, and useContext...",
      author: "Dulara",
      tags: ["React", "JavaScript", "Web Development"]
    },
    {
      id: 2,
      title: "Building RESTful APIs with Node.js",
      date: "January 10, 2024",
      category: "Backend",
      readTime: "7 min read",
      excerpt: "A comprehensive guide to building scalable RESTful APIs using Node.js and Express framework...",
      content: "Node.js is perfect for building fast and scalable APIs. Let's dive into creating a robust RESTful API structure...",
      author: "Dulara",
      tags: ["Node.js", "API", "Backend"]
    },
    {
      id: 3,
      title: "Mastering Tailwind CSS",
      date: "January 5, 2024",
      category: "CSS",
      readTime: "4 min read",
      excerpt: "Tips and tricks for building beautiful interfaces faster with Tailwind CSS utility classes...",
      content: "Tailwind CSS has changed the way we style web applications. Here are my top tips for using it effectively...",
      author: "Dulara",
      tags: ["CSS", "Tailwind", "Design"]
    }
  ]);

  const [newPost, setNewPost] = useState({
    title: '',
    category: '',
    excerpt: '',
    content: '',
    tags: ''
  });

  const handleCreatePost = (e) => {
    e.preventDefault();
    const post = {
      id: posts.length + 1,
      title: newPost.title,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      category: newPost.category,
      readTime: "3 min read",
      excerpt: newPost.excerpt,
      content: newPost.content,
      author: "Dulara",
      tags: newPost.tags.split(',').map(tag => tag.trim())
    };
    setPosts([post, ...posts]);
    setNewPost({ title: '', category: '', excerpt: '', content: '', tags: '' });
    setShowForm(false);
  };

  return (
    <section id="posts" className="posts-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">My Blog</span>
          <h2 className="section-title">Latest Posts</h2>
          <div className="section-divider"></div>
          <p className="section-description">Thoughts, tutorials, and insights about web development</p>
          
          <button 
            className="create-post-btn"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? 'Cancel' : '+ Write a Post'}
          </button>
        </div>

        {/* Create Post Form */}
        {showForm && (
          <div className="create-post-form">
            <h3>Create New Post</h3>
            <form onSubmit={handleCreatePost}>
              <input
                type="text"
                placeholder="Post Title"
                value={newPost.title}
                onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                required
              />
              <input
                type="text"
                placeholder="Category (e.g., React, JavaScript)"
                value={newPost.category}
                onChange={(e) => setNewPost({...newPost, category: e.target.value})}
                required
              />
              <textarea
                placeholder="Short Excerpt (summary)"
                rows="2"
                value={newPost.excerpt}
                onChange={(e) => setNewPost({...newPost, excerpt: e.target.value})}
                required
              />
              <textarea
                placeholder="Full Content (your blog post)"
                rows="6"
                value={newPost.content}
                onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                required
              />
              <input
                type="text"
                placeholder="Tags (comma-separated, e.g., React, JavaScript)"
                value={newPost.tags}
                onChange={(e) => setNewPost({...newPost, tags: e.target.value})}
              />
              <button type="submit" className="submit-post-btn">Publish Post</button>
            </form>
          </div>
        )}

        {/* Posts Grid */}
        {selectedPost ? (
          // Single Post View
          <div className="single-post">
            <button className="back-btn" onClick={() => setSelectedPost(null)}>
              ← Back to all posts
            </button>
            <div className="post-content-full">
              <div className="post-header">
                <span className="post-category">{selectedPost.category}</span>
                <h1>{selectedPost.title}</h1>
                <div className="post-meta">
                  <span>📅 {selectedPost.date}</span>
                  <span>⏱️ {selectedPost.readTime}</span>
                  <span>✍️ {selectedPost.author}</span>
                </div>
              </div>
              <div className="post-body">
                <p>{selectedPost.content}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <h3>Key Takeaways</h3>
                <ul>
                  <li>First important point about this topic</li>
                  <li>Second crucial insight for developers</li>
                  <li>Third practical tip you can apply today</li>
                </ul>
              </div>
              <div className="post-tags">
                {selectedPost.tags.map(tag => (
                  <span key={tag} className="tag">#{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ) : (
          // Posts Grid View
          <div className="posts-grid">
            {posts.map(post => (
              <div key={post.id} className="post-card" onClick={() => setSelectedPost(post)}>
                <div className="post-card-content">
                  <div className="post-meta-top">
                    <span className="post-category">{post.category}</span>
                    <span className="post-date">{post.date}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="post-footer">
                    <span className="read-time">{post.readTime}</span>
                    <button className="read-more">Read More →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Posts;