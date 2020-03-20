import React, { Component, Fragment } from 'react';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import PostList from './PostList';
import BlogPost from './BlogPost';
import '../App.css';

class AppComtainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postList: []
        }
    }

    //update postList array
    updatePostList = (newList) => {
        this.setState({ postList: newList });
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="header">
                        <HeaderComponent />
                    </div>

                    <div className="post-list">
                        <PostList postList={this.state.postList} />
                    </div>

                    <div className="blog-post">
                        <BlogPost updatePostList={this.updatePostList} />
                    </div>

                    <div className="footer">
                        <FooterComponent />
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default AppComtainer;