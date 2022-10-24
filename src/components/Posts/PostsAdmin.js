import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Post from './Post/PostAdmin';

const Posts = ({ setCurrentId }) => {
const posts = useSelector((state) => state.posts);

  return (
    
    !posts.length ? <CircularProgress /> : (
      <div className='table-responsive'>
        <table className='table table-sm table-hover'>
          <tbody>
        {posts.map(p => (
            <Post post={p} setCurrentId={setCurrentId} />
        ))}
        </tbody>
        </table>
      </div>
    )
  );
};

export default Posts;