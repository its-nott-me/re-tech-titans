import React from 'react';
import useUserStore from '../store/userStore';
import useChallengeStore from '../store/challengeStore';

const Profile = () => {
  const user = useUserStore((state) => state.user);
  const completedChallenges = useChallengeStore((state) => state.completedChallenges);

  return (
    <div className="p-4 pt-16 pb-20">
      <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
        <div className="text-center mb-4">
          <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-4xl">🌳</span>
          </div>
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-gray-600">Level {user.level}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <p className="text-sm text-gray-600">Points</p>
            <p className="text-xl font-bold text-green-600">{user.points}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <p className="text-sm text-gray-600">Tokens</p>
            <p className="text-xl font-bold text-green-600">{user.tokens}</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Badges</h3>
          <div className="flex flex-wrap gap-2">
            {user.badges.map((badge, index) => (
              <span
                key={index}
                className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Statistics</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Current Streak</span>
              <span className="font-medium">{user.streak} days</span>
            </div>
            <div className="flex justify-between">
              <span>Challenges Completed</span>
              <span className="font-medium">{completedChallenges.length}</span>
            </div>
            <div className="flex justify-between">
              <span>Plants in Garden</span>
              <span className="font-medium">{user.garden.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;