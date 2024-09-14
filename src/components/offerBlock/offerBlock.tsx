import React from 'react';

export const OfferBlock: React.FC = () => {
  return (
    <div className='max-w-2xl text-center mx-auto'>
      <p className='font-light'>taza meken предлагает</p>
      {/* Title */}
      <div className='mt-5 max-w-2xl'>
        <h1 className='scroll-m-20 text-4xl font-normal tracking-tight lg:text-5xl'>
          Простой и удобный сервис для экологичных решений
        </h1>
      </div>
      {/* End Title */}
      <div className='mt-4'>
        <p className='text-lg font-light text-muted-foreground'>
          В <mark className={'bg-muted px-1.5 py-1 rounded'}>Бишкеке</mark> и по всему{' '}
          <mark className={'bg-primary text-white px-1.5 py-1 rounded'}>Кыргызстану</mark>
        </p>
      </div>
      <div className='mt-10 max-w-3xl'>
        <div className='grid grid-cols-3 gap-4'>
          <div>
            <p className='text-5xl text-primary mb-2'>{'>'}30</p>
            <p className='font-light'>экологически чистых объектов в нашей работе</p>
          </div>
          <div>
            <p className='text-5xl text-primary mb-2'>0%</p>
            <p className='font-light'>экологического взноса для покупателя</p>
          </div>
          <div>
            <p className='text-5xl text-primary mb-2'>40</p>
            <p className='font-light'>Более 40 компаний поддерживает нас</p>
          </div>
        </div>
      </div>
    </div>
  );
};
