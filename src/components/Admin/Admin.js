import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Form from '../Form/Form';
import Posts from '../Posts/PostsAdmin';
import { getPosts } from '../../actions/posts';

const Admin = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

return (
<div className="container">
  <div className="row">
    <div className="col-sm-4 pt-5">
      <Form currentId={currentId} setCurrentId={setCurrentId} />
    </div>
    <div className='col-sm-8'>
      <div className='container pt-5'>
        <h2>&#9198;&#65039; Post Dashboard</h2>
        <hr />
        <Posts setCurrentId={setCurrentId} />
      </div>
    </div>
  </div>
</div>
  )
}

export default Admin