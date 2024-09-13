import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronsRight } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './articleCard.module.css';

export const ArticleCard: React.FC = () => {
  return (
    <Card className={styles.card}>
      <Card className={styles.banner}>
        <CardHeader className={'py-3'}>
          <CardTitle className={'mt-0 text-lg leading-none'}>Экодвор</CardTitle>
          <CardDescription>Был проведен “экодвор” в Бишкеке</CardDescription>
          <div className={'flex justify-between items-center'}>
            <Link
              to={'/'}
              className={
                'text-primary border-b border-transparent hover:border-primary leading-none text-[13px] flex items-center duration-150 transition-colors'
              }
            >
              Читать далее <ChevronsRight className={'size-4 mt-0.5'} />
            </Link>

            <Link to={'/'}>
              <img src={'/mbank.svg'} className={'w-24'} alt={'mbank'} />
            </Link>
          </div>
        </CardHeader>
      </Card>
    </Card>
  );
};
