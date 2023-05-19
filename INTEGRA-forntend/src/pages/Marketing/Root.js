import { Fragment, useEffect } from 'react';
import {
  Outlet,
  useLoaderData,
  useNavigation,
  useSubmit,
} from 'react-router-dom';
import Header from '../../components/Marketing/layout/Header';
import SideBar from '../../components/Marketing/layout/SideBar';
import { getTokenDuration } from '../../util/auth';
import './root.css';
const RootLayout = () => {
  const nav = useNavigation();
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === 'EXPIRED') {
      submit(null, { action: '/logout', method: 'post' });
      return;
    }

    const tokenDuration = getTokenDuration();
    console.log(tokenDuration);

    setTimeout(() => {
      submit(null, { action: '/logout', method: 'post' });
    }, tokenDuration);
  }, [token, submit]);

  return (
    <>
      <Header />
      <div className="wrapper">
        <SideBar />
        <Outlet />
      </div>

      <main>{nav.state === 'loading' && <p>Loading...</p>}</main>
    </>
  );
};

export default RootLayout;
