import React, { Component, Fragment } from 'react';

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Fragment>
                <h2>List of Posts</h2>
                {this.props.postList.map(
                    (post, inx) => {
                        return (
                            <div key={inx}>
                                <p>{post.blogTitle}</p>
                                <p>{post.blogPost}</p>
                            </div>
                        )
                    }
                )}
            </Fragment>
        );
    }
}

export default PostList;