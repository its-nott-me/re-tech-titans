import React from 'react';
import useUserStore from '../store/userStore';
import useChallengeStore from '../store/challengeStore';

const Home = () => {
  const user = useUserStore((state) => state.user);
  const { challenges, activeChallenge, setActiveChallenge } = useChallengeStore();

  return (
    <div className="p-4 pt-16 pb-20">
      <div className="mb-6">
        <div className="bg-green-50 rounded-lg p-4 mb-4">
          <h2 className="text-lg font-semibold mb-2">Welcome back, {user.name}!</h2>
          <div className="flex space-x-4">
            <div className="bg-white rounded-lg p-3 flex-1 shadow-sm">
              <p className="text-sm text-gray-600">Current Streak</p>
              <p className="text-xl font-bold text-green-600">{user.streak} days</p>
            </div>
            <div className="bg-white rounded-lg p-3 flex-1 shadow-sm">
              <p className="text-sm text-gray-600">Level</p>
              <p className="text-xl font-bold text-green-600">{user.level}</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Daily Challenges</h3>
          <div className="space-y-3">
            {challenges.map((challenge) => (
              <div
                key={challenge.id}
                className="bg-white rounded-lg p-4 shadow-sm border border-gray-100"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">{challenge.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{challenge.description}</p>
                    <div className="flex space-x-2 mt-2">
                      <span className="text-sm text-yellow-600">🌟 {challenge.points} points</span>
                      <span className="text-sm text-green-600">🌱 {challenge.tokens} tokens</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveChallenge(challenge)}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600 transition-colors"
                  >
                    Accept
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;