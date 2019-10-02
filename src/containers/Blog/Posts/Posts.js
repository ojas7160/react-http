import React, { Component } from 'react';
import axiosInstance from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
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
                return <Post key={post.id} title={post.title} author={post.author} clicked={() => this.postIdHandler(post.id)}/>
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
