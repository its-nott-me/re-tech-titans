import { create } from 'zustand';

const useUserStore = create((set) => ({
  user: {
    id: 1,
    name: 'Demo User',
    email: 'demo@carbongrove.com',
    points: 100,
    tokens: 50,
    streak: 5,
    garden: [],
    badges: ['Early Adopter', 'First Plant'],
    level: 1
  },
  addPoints: (points) => set((state) => ({
    user: { ...state.user, points: state.user.points + points }
  })),
  addTokens: (tokens) => set((state) => ({
    user: { ...state.user, tokens: state.user.tokens + tokens }
  })),
  updateStreak: () => set((state) => ({
    user: { ...state.user, streak: state.user.streak + 1 }
  })),
  addToGarden: (plant) => set((state) => ({
    user: { ...state.user, garden: [...state.user.garden, plant] }
  })),
  addBadge: (badge) => set((state) => ({
    user: { ...state.user, badges: [...state.user.badges, badge] }
  }))
}));

export default useUserStore;