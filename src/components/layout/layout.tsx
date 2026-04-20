import clsx from 'clsx';
import Header from '@components/header';
import {Outlet, useLocation} from 'react-router-dom';
import Footer from '@components/footer';
import {useGetLayoutState} from '@components/layout/helpers.ts';
import {AppRoute} from '@constants';
import {ToastContainer} from 'react-toastify';
import {useState} from 'react';

const Layout = () => {

  const {pathname} = useLocation();
  const {
    pageClassName,
    mainClassName,
    shouldRenderUser,
    isDisabledLogo,
    shouldRenderFooter,
    isRenderInputSearch
  } = useGetLayoutState(pathname as AppRoute);
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div className={clsx('page', pageClassName)}>
      <ToastContainer/>
      <Header
        isDisabledLogo={isDisabledLogo}
        shouldRenderUser={shouldRenderUser}
        isRenderInputSearch={isRenderInputSearch}
        setSearchQuery={setSearchQuery}
      >
      </Header>
      <main className={clsx('page__main', mainClassName)}>
        <Outlet context={{searchQuery}}/>
      </main>
      {shouldRenderFooter && <Footer></Footer>}
    </div>
  );
};

export default Layout;
