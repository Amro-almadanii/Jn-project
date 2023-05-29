import { Form, json, redirect } from 'react-router-dom';
import './Login.css';

const LoginPage = () => {
  return (
    <>
      <h2 className="integra">I N T E G R A</h2>
      <div className="containar">
        <Form method="post" className="form">
          <div>
            <h1 className="h1">Login</h1>
          </div>
          <input
            type="text"
            name="email"
            className="input"
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          <button className="button">Login</button>
        </Form>
      </div>
    </>
  );
};

export default LoginPage;

export async function action({ request }) {
  const data = await request.formData();

  const loginData = {
    email: data.get('email'),
    password: data.get('password'),
  };

  const response = await fetch('http://localhost:8000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginData),
  });

  if (!response.ok) {
    throw json({ message: 'Could not authenticate user.' }, { status: 500 });
  }

  const resData = await response.json();
  console.log(resData);
  const token = resData.authorisation.token;

  localStorage.setItem('token', token);
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 8);
  localStorage.setItem('expiration', expiration.toISOString());

  return redirect('/marketing');
}
