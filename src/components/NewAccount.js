import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as styles from '../styles/NewSession.module.css';
import { mapDispatchToProps, mapStateToProps } from '../reducers';

const NewAccount = ({ signedIn, setSignedIn }) => {
  const history = useHistory();

  if (signedIn) {
    history.push('/tasks');
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSession = async (event) => {
    event.preventDefault();
    const headers = new Headers();

    headers.append('Content-Type', 'application/json');

    if (localStorage.getItem('email') && localStorage.getItem('token')) {
      headers.append('X-User-Email', localStorage.getItem('email'));
      headers.append('X-User-Token', localStorage.getItem('token'));
    } else {
      headers.append('X-User-Email', '');
      headers.append('X-User-Token', '');
    }

    const payload = { email, password };
    const response = await fetch(
      'https://tasks-tracker-api.herokuapp.com/accounts',
      {
        method: 'POST',
        mode: 'cors',
        headers,
        body: JSON.stringify(payload),
      },
    ).then((response) => response);
    const data = await response.json();
    if (response.status === 201) {
      // console.log('account successfuly created');
      localStorage.setItem('email', data.user.email);
      localStorage.setItem('token', data.user.authentication_token);
      setSignedIn(true);
    } else {
      // console.log('response not 201');
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
        <h3 className={styles.loginTitle}>Sign up using email address</h3>
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

          <input type="submit" className={styles.inputSubmit} value="Create Account" />
        </form>
      </div>

      <h3 className={styles.loginTitle}>
        Already have an account?
        {' '}
        <Link className="link" to={{ pathname: '/login' }}>Log in</Link>
      </h3>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NewAccount);

NewAccount.propTypes = {
  signedIn: PropTypes.bool.isRequired,
  setSignedIn: PropTypes.func.isRequired,
};
