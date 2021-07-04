import React, { useState, useEffect } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);

const fetchPosts = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  setPosts(data);
}

  useEffect(() => {
     fetchPosts();
  }, [])
  return(
    <div>
       <ul>
          {
             posts.map(post => (
                <li key={post.id}>{post.title}</li> 
             ))
          }
       </ul>
    </div>
  );
}


export default Posts;
