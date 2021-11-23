import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot EVENT took place here</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="UNIVERCITY 4th Position!!!" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text=" Blah BBlahlah !!!!!!!!!!!!!!! Blah Blah Blah !!!!!!!!!!!!!!! " />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="Blah BBlahlah !!!!!!!!!!!!!!! Blah Blah Blah !!!!!!!!!!!!!!!" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="Blah BBlahlah !!!!!!!!!!!!!!! Blah Blah Blah !!!!!!!!!!!!!!!" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="Blah BBlahlah !!!!!!!!!!!!!!! Blah Blah Blah !!!!!!!!!!!!!!!" />
      </div>
    </div>
  </div>
);

export default Blog;
