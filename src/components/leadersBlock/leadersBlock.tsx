import { LeaderCard } from '@/components/leadersBlock/components/leaderCard/leaderCard';
import React from 'react';

export const LeadersBlock: React.FC = () => {
  return (
    <div className={'bg-[#F7F8F8] p-10 rounded-3xl '}>
      <h3 className={'text-5xl mb-4'}>Лидеры</h3>
      <div className={'grid grid-cols-3 gap-6'}>
        <LeaderCard primary />
        <LeaderCard />
        <LeaderCard />
      </div>
    </div>
  );
};
