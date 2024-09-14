import { ArticleCard } from '@/components/articleCard/articleCard';
import { LeadersBlock } from '@/components/leadersBlock/leadersBlock';
import { NewsCard } from '@/components/newsCard/newsCard';
import { OfferBlock } from '@/components/offerBlock/offerBlock';
import { ScanBlock } from '@/components/scanBlock/scanBlock';
import React from 'react';

export const Home: React.FC = () => {
  return (
    <div className={'flex flex-col gap-10'}>
      <div className={'grid grid-cols-3 gap-4 justify-items-center'}>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>

      <div className={'grid grid-cols-3 gap-8 justify-items-center'}>
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>

      <section className={'mb-10'}>
        <OfferBlock />
      </section>

      <section className={'mb-10'}>
        <LeadersBlock />
      </section>

      <section className={'mb-20'}>
        <ScanBlock />
      </section>
    </div>
  );
};
