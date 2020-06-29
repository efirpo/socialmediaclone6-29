import React from 'react';
import Post from './Post';
import Avatar from './Avatar';

const masterPostList = [
  {
    title: 'Title',
    body: 'Hey this is great!'
  },
  {
    title: 'Title',
    body: 'Look at us.'
  },
  {
    title: 'Title',
    body: "who'd a thought."
  },
  {
    title: 'Title',
    body: 'not me.'
  }
];


function PostList() {
  return (
    <React.Fragment>
      <div id="feed">
        <form class="input-form">
          <input class="feed-input" type='text' name='post' placeholder="What's happening?" />
        </form>
        <div class="lines">
          <hr />
        </div>
        {masterPostList.map((post, index) =>
          <React.Fragment>
            <div class="post-align">
              <div class="avatar-feed col-sm-6">
                <Avatar />
              </div>
              <div class="post-item col-sm-6">
                <Post
                  title={post.title}
                  body={post.body}
                  key={index}
                />
              </div>
            </div>
            <div class="lines">
              <hr />
            </div>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
}

export default PostList;