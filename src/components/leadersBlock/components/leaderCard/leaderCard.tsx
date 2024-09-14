import React from 'react';

interface Props {
  primary?: boolean;
}

export const LeaderCard: React.FC<Props> = ({ primary = false }) => {
  return (
    <div
      className={`${primary ? 'bg-primary text-white' : 'bg-white'} font-light rounded-3xl max-w-[515px] w-full p-6 py-12`}
    >
      <div className={'flex justify-between items-center text-8xl leading-none mb-6'}>
        <img src={'./kanat.jpeg'} alt={'kanat'} className={'size-32 rounded-full object-cover'} />
        <p>01</p>
      </div>

      <h3 className={'text-6xl mb-8'}>Канат Сыдыков</h3>

      <p className={'text-xl font-extralight'}>
        Экологические решения существенно влияют на состояние окружающей среды, улучшая качество жизни и снижая
        негативное воздействие на природу.
      </p>
    </div>
  );
};
