import React from 'react';
import { withRouter } from 'react-router-dom';

import './Post.css';

const post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
);
// if we want to have all the routing info in this component as we are getting in Posts component, by default routing in react dont pass the routing info to the nested component and to get those info there are two ways one is simply passing the info from parent component to child via props and other is withRouter wrapping component given by react-router-dom

export default withRouter(post);