import React from 'react';
import { useDispatch } from 'react-redux';
import { FaEdit, FaTrash } from 'react-icons/fa';

import { deletePost } from '../../../actions/posts';

const PostAdmin = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{post.post}</td>
      <td>{post.comment}</td>
      <td>{new Date(post.timestamp * 1000).toDateString()}</td>
      <td><button type="button" className="btn btn-warning mx-auto" onClick={() => setCurrentId(post._id)}><FaEdit /></button></td>
      <td><button type="button" className="btn btn-danger mx-auto" onClick={() => dispatch(deletePost(post._id))}><FaTrash /></button></td>
    </tr>    
  );
};

export default PostAdmin;
