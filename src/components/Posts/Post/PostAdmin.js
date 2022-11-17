import React from 'react';
import { useDispatch } from 'react-redux';
import { FaEdit, FaTrash, FaCheckCircle, FaBullseye } from 'react-icons/fa';

import { deletePost } from '../../../actions/posts';

const PostAdmin = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();

function CommCheckFunction(props) {
  if (post.comment) {
    return <td><FaCheckCircle /></td>;
  } else return <td><FaBullseye className='red'/></td> };


  return (
    <tr>
      <CommCheckFunction />
      <td>{new Date(post.timestamp * 1000).toDateString()}</td>
      <td>{post.post}</td>
      <td><button type="button" className="btn btn-warning mx-auto" onClick={() => setCurrentId(post._id)}><FaEdit /></button></td>
      <td><button type="button" className="btn btn-danger mx-auto" onClick={() => dispatch(deletePost(post._id))}><FaTrash /></button></td>
    </tr>    
  );
};

export default PostAdmin;
