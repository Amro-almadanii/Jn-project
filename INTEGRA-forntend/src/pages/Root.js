import { Fragment, useEffect } from 'react';
import {
  Outlet, redirect,
  useLoaderData,
  useNavigation,
  useSubmit
} from 'react-router-dom';
import Header from '../components/layout/Header';
import SideBar from '../components/layout/SideBar';
import { getTokenDuration } from '../hooks/auth';
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
        <main>{nav.state === 'loading' && <p>Loading...</p>}
        <Outlet />
        </main>
      </div>
    </>
  );
};

export default RootLayout;

export function loader () {
  return redirect('/login');
}
