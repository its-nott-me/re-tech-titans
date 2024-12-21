import React, { useState } from 'react';
import useCommunityStore from '../store/communityStore';
import useUserStore from '../store/userStore';

const Community = () => {
  const { posts, addPost, likePost } = useCommunityStore();
  const user = useUserStore((state) => state.user);
  const [newPost, setNewPost] = useState('');

  const handleSubmitPost = (e) => {
    e.preventDefault();
    if (newPost.trim()) {
      addPost({
        userId: user.id,
        userName: user.name,
        content: newPost,
        likes: 0,
        comments: [],
        timestamp: new Date().toISOString()
      });
      setNewPost('');
    }
  };

  return (
    <div className="p-4 pt-16 pb-20">
      <div className="mb-6">
        <form onSubmit={handleSubmitPost} className="mb-6">
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Share your eco-friendly journey..."
            className="w-full p-3 border border-gray-200 rounded-lg resize-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            rows="3"
          />
          <button
            type="submit"
            className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            Post
          </button>
        </form>

        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="flex items-center mb-2">
                <div className="font-medium">{post.userName}</div>
                <div className="text-gray-500 text-sm ml-2">
                  {new Date(post.timestamp).toLocaleDateString()}
                </div>
              </div>
              <p className="text-gray-800 mb-3">{post.content}</p>
              {post.image && (
                <img
                  src={post.image}
                  alt="Post"
                  className="rounded-lg mb-3 w-full object-cover"
                />
              )}
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => likePost(post.id)}
                  className="flex items-center text-gray-500 hover:text-green-500"
                >
                  <span className="mr-1">❤️</span>
                  <span>{post.likes}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;