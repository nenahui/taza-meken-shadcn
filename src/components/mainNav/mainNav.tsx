import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

export const MainNav = () => {
  const { pathname } = useLocation();

  return (
    <div className='mr-4 hidden md:flex'>
      <Link to='/' className='mr-4 flex items-center space-x-2 lg:mr-6'>
        <img src={'./logo.svg'} className='h-6 w-6' alt={'Taza Meken'} />
        <span className='hidden font-medium lg:inline-block'>taza meken</span>
      </Link>
      <nav className='flex items-center gap-4 text-sm lg:gap-6'>
        <Link
          to='/'
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === '/' ? 'text-foreground' : 'text-foreground/60'
          )}
        >
          Главная
        </Link>
        <Link
          to='/news'
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === '/news' ? 'text-foreground' : 'text-foreground/60'
          )}
        >
          Новости
        </Link>
        <Link
          to='/events'
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === '/events' ? 'text-foreground' : 'text-foreground/60'
          )}
        >
          Мероприятия
        </Link>
        <Link
          to='/pollution-map'
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === '/pollution-map' ? 'text-foreground' : 'text-foreground/60'
          )}
        >
          Карта загрязнений
        </Link>
      </nav>
    </div>
  );
};
