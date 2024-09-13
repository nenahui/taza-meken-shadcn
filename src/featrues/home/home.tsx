import { ArticleCard } from '@/components/articleCard/articleCard';
import React from 'react';

export const Home: React.FC = () => {
  return (
    <>
      <div className={'grid grid-cols-3 gap-4 justify-items-center'}>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </>
  );
};
