import React from 'react';

export const ScanBlock: React.FC = () => {
  return (
    <div className={'w-full h-[560px] bg-gradient-to-r from-custom-green to-custom-blue rounded-3xl p-16 text-white'}>
      <div className={'flex'}>
        <div>
          <h3 className={'text-8xl w-[10ch] mb-4'}>Сканируй QR-code</h3>
          <p className={'text-3xl font-extralight max-w-md'}>
            Сделано для вашего удобства для более прекрасного будущего мира и для вас.
          </p>
        </div>

        <img src={'./qrcode.svg'} alt={'qrcode'} className={'max-w-md h-auto'} />
      </div>
    </div>
  );
};
