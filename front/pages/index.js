import React from 'react';
import { useSelector } from 'react-redux';

import AppLayout from '../layout/AppLayout';
import PostForm from '../components/post/postForm';
import PostCard from '../components/post/postCard';

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);

  return (
    <AppLayout>
      {isLoggedIn && <PostForm />}
      {mainPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </AppLayout>
  );
};

export default Home;
