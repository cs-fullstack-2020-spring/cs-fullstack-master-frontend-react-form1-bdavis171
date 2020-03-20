import React, { Component, Fragment } from 'react';
import '../App.css';

class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            blogTitle: '',
            blogPost: '',
            blogList: []
         }
    }

    //handle changes to fields
    handleChange = (event) => {
        if (event.target.name === 'title'){
            this.setState({blogTitle: event.target.value});
        }
        else if (event.target.name === 'post'){
            this.setState({blogPost: event.target.value});
        }
    }

    //handle submission
    handleSubmission = (event) => {
        event.preventDefault();
        let blog = {blogTitle: this.state.blogTitle, blogPost: this.state.blogPost};
        this.state.blogList.push(blog);
        this.setState({blogList: this.state.blogList});
        this.props.updatePostList(this.state.blogList);
        this.setState({
            blogTitle: '',
            blogPost: ''
        })
    }

    render() { 
        return ( 
            <Fragment>
                <form action="">
                    <fieldset>
                        <legend>Blog</legend>

                        <div className="formGroup">
                            <label htmlFor="title">Title:</label>
                            <input type="text" name='title' id='title' onChange={this.handleChange} value={this.state.blogTitle}/>
                        </div>

                        <div className="formGroup">
                            <label htmlFor="post">Post:</label><br/>
                            <textarea name="post" id="post" onChange={this.handleChange} value={this.state.blogPost} cols="30" rows="10"></textarea>
                        </div>

                        <div className="formGroup">
                            <button onClick={this.handleSubmission}>Submit</button>
                        </div>
                    </fieldset>
                </form>
            </Fragment>
         );
    }
}
 
export default BlogPost;