import { create } from 'zustand';

const useCommunityStore = create((set) => ({
  posts: [
    {
      id: 1,
      userId: 1,
      userName: 'Demo User',
      content: 'Just completed my first zero waste week! 🌱',
      image: '/images/garden-preview.jpg',
      likes: 5,
      comments: [],
      timestamp: new Date().toISOString()
    }
  ],
  addPost: (post) => set((state) => ({
    posts: [{ id: state.posts.length + 1, ...post }, ...state.posts]
  })),
  likePost: (postId) => set((state) => ({
    posts: state.posts.map(post =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    )
  })),
  addComment: (postId, comment) => set((state) => ({
    posts: state.posts.map(post =>
      post.id === postId
        ? { ...post, comments: [...post.comments, comment] }
        : post
    )
  }))
}));

export default useCommunityStore;