import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronsRight } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

export const NewsCard: React.FC = () => {
  return (
    <Card className={'rounded-3xl bg-[#F7F8F8] border-0 shadow-none'}>
      <CardHeader>
        <img src={'./newsBanner.jpg'} alt={'news image'} className={'rounded-2xl'} />
      </CardHeader>
      <CardContent>
        <CardTitle className={'mb-2'}>
          Как сторонник экологических инициатив стал создателем экологических проектов
        </CardTitle>
        <CardDescription className={'mb-2'}>
          "Я изучил множество экологических проектов и понял, как их правильно представить. Людям важно не описание
          процесса, а что они получат в итоге," — говорит Джек.
        </CardDescription>

        <Link to={'/'} className={'text-primary flex items-center text-sm'}>
          Читать далее
          <ChevronsRight className={'mt-0.5 size-5'} strokeWidth={1.6} />
        </Link>
      </CardContent>
    </Card>
  );
};
