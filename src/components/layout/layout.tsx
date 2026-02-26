import clsx from 'clsx';
import Header from '@components/header';
import {Outlet} from 'react-router-dom';
import Footer from '@components/footer';

const Layout = () => {
  return (
    <div className={clsx('page')}>
      <Header></Header>
      <main className={clsx('page__main')}>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
