import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { FaGraduationCap, FaHome, FaRegCalendarAlt, FaBriefcase } from 'react-icons/fa';
import { getPosts } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Panel from '../../components/Panel/Panel';

const Wall = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

return (
<div className="page">
  <div className="container">
    <div className="row">
      <Panel />
      <div className='col-sm-8'>
        <div className='container pt-5'>
          <h1>Beth Jarrett</h1>
          <span><FaGraduationCap />&nbsp;&nbsp;Studied at York University&nbsp;&nbsp;<FaBriefcase />&nbsp;&nbsp;Worked jobs&nbsp;&nbsp;<FaHome />&nbsp;&nbsp;From and Lives in Toronto, Ontario&nbsp;&nbsp;<FaRegCalendarAlt />&nbsp;&nbsp;Born before the Internet</span>
          <Posts setCurrentId={setCurrentId} />
        </div>
      </div>
    </div> 
  </div>
</div>
  );
};

export default Wall;