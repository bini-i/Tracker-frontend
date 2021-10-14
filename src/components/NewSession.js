import { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { mapDispatchToProps, mapStateToProps } from '../reducers';
import * as styles from '../styles/NewSession.module.css';
import Tasks from './Tasks';

const NewSession = ({ signedIn, setSignedIn }) => {
  console.log(signedIn);
  if (signedIn) {
    console.log('redirecting');
    return <Tasks />;
  }
  console.log('got here also');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSession = async (event) => {
    event.preventDefault();
    const headers = new Headers();

    headers.append('Content-Type', 'application/json');

    if (localStorage.getItem('email') && localStorage.getItem('token')) {
      console.log('found token storage');
      headers.append('X-User-Email', localStorage.getItem('email'));
      headers.append('X-User-Token', localStorage.getItem('token'));
    } else {
      headers.append('X-User-Email', '');
      headers.append('X-User-Token', '');
      console.log('found nothing from storage');
    }

    const payload = { email, password };
    const response = await fetch(
      'http://localhost:3000/sessions',
      {
        method: 'POST',
        mode: 'cors',
        headers,
        body: JSON.stringify(payload),
      },
    ).then((response) => response);
    const data = await response.json();
    console.log(`data ${data}`);
    if (response.status === 201) {
      console.log(data);
      localStorage.setItem('email', data.user.email);
      localStorage.setItem('token', data.user.authentication_token);
      setSignedIn(true);
    } else {
      setSignedIn(false);
      console.log('response not 201');
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    switch (event.target.name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
    }
  };
  return (
    <div className={styles.newSession}>
      <div className={styles.loginBox}>
        <h3 className={styles.loginTitle}>Log in using email address</h3>
        <form onSubmit={handleSession}>
          <div className={styles.inputContainer}>
            <div className={styles.inputTitle}>
              Email Address
            </div>
            <div className={styles.inputBox}>
              <input name="email" type="email" onChange={handleChange} placeholder="example@example.com" />
            </div>
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.inputTitle}>
              Password
            </div>
            <div className={styles.inputBox}>
              <input name="password" type="password" onChange={handleChange} placeholder="••••••" />
            </div>
          </div>

          <input type="submit" className={styles.inputSubmit} value="Log In" />
        </form>
      </div>

      <h3 className={styles.loginTitle}>
        Need to create an account?
        {' '}
        <Link className="link" to={{ pathname: '/signup' }}>Sign Up</Link>
      </h3>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NewSession);

NewSession.propTypes = {
  signedIn: PropTypes.bool.isRequired,
  setSignedIn: PropTypes.func.isRequired,
};
