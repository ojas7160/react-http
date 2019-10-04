import React, { Component } from 'react';
import axiosInstance from '../../../axios';
import Post from '../../../components/Post/Post';
import { Link } from 'react-router-dom';
import './Posts.css';

class Posts extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        console.log(this.props)
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
                return (
                <Link key={post.id} to={`/${post.id}`}>
                    <Post title={post.title} author={post.author} clicked={() => this.postIdHandler(post.id)}/>
                </Link>)
            }) 
        }
        return(
            <section className="Posts">
                {posts}
            </section>
        )
    }
}   

export default Posts;
