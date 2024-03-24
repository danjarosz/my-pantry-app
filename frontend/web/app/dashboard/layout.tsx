import SideNav from '@/app/ui/SideNav/SideNav';
import classes from '@/app/dashboard/layout.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={classes.page}>
      <div className={classes['nav-wrapper']}>
        <SideNav />
      </div>
      <div className={classes['main-wrapper']}>{children}</div>
    </div>
  );
}
