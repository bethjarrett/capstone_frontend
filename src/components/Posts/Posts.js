import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Post from './Post/Post';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  return (
    
    !posts.length ? <CircularProgress /> : (
      <div>
        {posts.map(p => (
            <Post post={p} setCurrentId={setCurrentId} key={p._id} />
        ))}
      </div>
    )
  );
};

export default Posts;