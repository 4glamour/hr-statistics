import { useState } from 'react';
import { Btn, Wrapper } from './LoginForm.styled';
import { logInUser } from '../../services/statistics-api';

import { save } from '../../utils/helpers/localStorage';
import { LOCAL_STORAGE_KEY } from '../../utils/constants/localStorage.js';

export const LoginForm = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [pswd, setPswd] = useState('');

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePswdChange = e => {
    setPswd(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log(email);
    console.log(pswd);

    (async () => {
      try {
        const userInfo = await logInUser({ email, password: pswd });
        console.log(userInfo);

        save(LOCAL_STORAGE_KEY, userInfo.token);
        setIsLoggedIn(!!userInfo.token);

        setEmail('');
        setPswd('');
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Email</span>
          <input type="text" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          <span>Password</span>
          <input type="password" value={pswd} onChange={handlePswdChange} />
        </label>
        <Btn type="submit">Log In</Btn>
      </form>
    </Wrapper>
  );
};
