import { Fragment, useEffect } from 'react';
import {
  Outlet, redirect,
  useLoaderData,
  useNavigation, useRouteLoaderData,
  useSubmit
} from 'react-router-dom';
import Header from '../components/layout/Header';
import SideBar from '../components/layout/SideBar';
import { getTokenDuration } from '../hooks/auth';
import Loader from '../components/layout/Loaders/Loader';
import './root.css';

const RootLayout = () => {
  const nav = useNavigation();
  const token = useRouteLoaderData('root');
  const submit = useSubmit();

  useEffect(() => {
    if (!token) {
      return;
    }

    const tokenDuration = getTokenDuration();

    setTimeout(() => {
      submit(null, { method: 'post', action: '/logout'});
    }, tokenDuration);
  }, []);

  return (
    <>
      <Header />
      <div className="wrapper">
        <SideBar />
        <main>{nav.state === 'loading' && <Loader/>}
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
