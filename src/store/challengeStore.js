import { create } from 'zustand';

const useChallengeStore = create((set) => ({
  challenges: [
    {
      id: 1,
      title: 'Walk or Cycle',
      description: 'Choose walking or cycling instead of driving for short trips',
      points: 50,
      tokens: 5,
      duration: '1 day',
      category: 'Transportation'
    },
    {
      id: 2,
      title: 'Zero Waste Day',
      description: 'Generate no disposable waste for an entire day',
      points: 100,
      tokens: 10,
      duration: '1 day',
      category: 'Waste'
    },
    {
      id: 3,
      title: 'Energy Saver',
      description: 'Reduce energy consumption by 20% this week',
      points: 150,
      tokens: 15,
      duration: '1 week',
      category: 'Energy'
    }
  ],
  activeChallenge: null,
  completedChallenges: [],
  setActiveChallenge: (challenge) => set({ activeChallenge: challenge }),
  completeChallenge: (challengeId) => set((state) => ({
    completedChallenges: [...state.completedChallenges, challengeId],
    activeChallenge: null
  }))
}));

export default useChallengeStore;