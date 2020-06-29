import React from 'react';
import Post from './Post';
import Avatar from './Avatar';

const masterPostList = [
  {
    title: 'Title',
    post: 'Hey this is great!'
  },
  {
    title: 'Title',
    post: 'Look at us.'
  },
  {
    title: 'Title',
    post: "who'd a thought."
  },
  {
    title: 'Title',
    post: 'not me.'
  }
];


function PostList() {
  return (
    <React.Fragment>
      <div class="avatar-feed">
        <Avatar />
      </div>
      <form>
        <input class="feed-input" type='text' name='post' placeholder="What's happening?" />
      </form>
      <hr />
      {masterPostList.map((post, index) =>
        <Post
          title={post.title}
          body={post.body}
          key={index}
        />
        <hr />
    )}
    </React.Fragment>
  );
}

export default PostList;