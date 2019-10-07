import React, { Component } from 'react';
// import Axios from 'axios';
import Posts from './Posts/Posts';
import './Blog.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
// import NewPost from './NewPost/NewPost';
import asynComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asynComponent(() => {
    return import('./NewPost/NewPost');
});

// import FullPost from '../../containers/Blog/FullPost/FullPost';


class Blog extends Component {
    state = {
        auth: false
    }
    render () {
        console.log(this.props)
        return (
            // react-router -> for routing logic
            // react-router-dom -> for rendering something to the dom

            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                {/* <a href="/">Home</a> */}
                                {/* activeClassName is just a react prop to override the default anchor tag active class to style by your own wish. */}
                                <NavLink to="/posts" exact activeClassName="active" activeStyle={{color: '#fa923f', textDecoration: 'underline'}}>Home</NavLink>
                            </li>
                            <li>
                                {/* <a href="/new-post">New Post</a> */}
                                {/* absolute path -> when we pass some route to the pathname then by default it take it as absolute path in this it always append to whatever url is there previously and relative path just change the url with the pathname we give to it. its upto us which behaviour do we want at situations */}
                                <NavLink to={{
                                    pathname:  '/new-post',
                                    hash: '#submit',
                                    search: '?quick-search=true'
                                }} >New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>home</h1>} /> */}
                {/* exact is for the exact route matching components only */}
                {/* routing must be defined in specific order because router parse this from top to bottom */}
                {/* switch tells the router to just ply on only one the routes given in switch */}
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost}/> : null }
                    <Route path="/posts/" component={Posts}/>
                    <Route render={() => <h1>404!Page not found</h1>} />
                    {/* <Route path="/" component={Posts}/> */}
                    {/* <Redirect from='/' to="/posts" /> */}
                </Switch>
                {/* exact is not mentioned in new-post route because we want to access other pages starting with slash(/) like /new-post-1 */}
            </div>
        );
    }
}

export default Blog;