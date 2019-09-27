import React, { Component } from 'react';
// import Axios from 'axios';
import axiosInstance from '../../axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';


class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount() {
        axiosInstance.get('posts')
        .then(response => {
        console.log("TCL: Blog -> componentDidMount -> response", response)
            const updatedPosts = response.data.slice(0, 4).map(post => {
                return { 
                    ...post, 
                    author: 'Ojas'
                }
            })
            this.setState({posts: updatedPosts})
        })
        .catch(err => {
            console.log(err)
            this.setState({error: true})
        })
    }

    postIdHandler = (id) => {
        console.log("TCL: Blog -> postIdHandler -> id", id)
        this.setState({selectedPostId: id})
    }

    render () {
        let posts = <p style={{'textAlign': 'center'}}>Something went wrong</p>
        if(!this.state.error){
            posts = this.state.posts.map(post => {
                return <Post key={post.id} title={post.title} author={post.author} clicked={() => this.postIdHandler(post.id)}/>
            }) 
        }
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;