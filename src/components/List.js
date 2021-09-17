import { Badge } from "react-bootstrap";
import React from 'react';


const List = ({posts}) => {

  return (
    <div>
      <ul className='list'>
        {posts.map(post =>
        <li key={post.id} className='list-item'>
          <div className='props'>
            <h2 className="name">{post.job} <span className="text-muted font-weight-light">- {post.company}</span></h2>
            <div className='details'>
              <Badge variant="dark" className="mr-2">{post.date}</Badge>
              <Badge variant="info">{post.city}</Badge>
            </div>
          </div>
        </li>
        )}
      </ul>
  </div>
  );
};

export default List;
