import clsx from 'clsx';
import Header from '@components/header';
import {Outlet, useLocation} from 'react-router-dom';
import Footer from '@components/footer';
import {useGetLayoutState} from '@components/layout/helpers.ts';
import {AppRoute} from '@constants';

const Layout = () => {
  const {pathname} = useLocation();
  const {
    pageClassName,
    mainClassName,
    shouldRenderUser,
    isDisabledLogo,
    shouldRenderFooter,
  } = useGetLayoutState(pathname as AppRoute);
  return (
    <div className={clsx('page')}>
      <Header isDisabledLogo={isDisabledLogo} shouldRenderUser={shouldRenderUser}></Header>
      <main className={clsx('page__main')}>
        <Outlet></Outlet>
      </main>
      {shouldRenderFooter && <Footer></Footer>}
    </div>
  );
};

export default Layout;
