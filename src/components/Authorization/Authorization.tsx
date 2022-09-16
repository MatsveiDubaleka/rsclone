import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Authorization.scss';
import { setUsernameToLocalStorage, tryLogin, tryRegistration } from './utils';

type AuthResponce = {
  message?: string;
  token?: string;
};

const Authorization = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isSignInVisible, setIsSignVisible] = useState(true);

  const navigate = useNavigate();

  const toggleSignInVisible = () => {
    isSignInVisible ? setIsSignVisible(false) : setIsSignVisible(true);
  };

  const handleLoginInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    setLogin((target as HTMLInputElement).value);
  };

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    setPassword((target as HTMLInputElement).value);
  };

  const handleLoginBtn = async () => {
    const resp: any = await tryLogin(login, password);
    if ((resp as AuthResponce).message) {
      if ((resp as AuthResponce).message?.includes('password')) {
        alert('некорректный пароль');
      } else {
        alert('такого пользователя не существует');
      }
    } else {
      if (resp[1].find((item: any) => item === 'ADMIN')) {
        setUsernameToLocalStorage(login);
        navigate('/admin-account');
      } else {
        setUsernameToLocalStorage(login);
        navigate('/my-account');
      }
    }
  };

  const handleRegistrationBtn = async () => {
    const resp = await tryRegistration(login, password);
    if ((resp as AuthResponce).message?.includes('successfully')) {
      setUsernameToLocalStorage(login);
      alert(`аккаунт ${login} успешно создан!`);
      navigate('/my-account');
    } else {
      alert('К сожалению логин занят, попробуйте изменить его');
    }
  };

  return (
    <div className='authorization-wrapper'>
      <div className='authorization'>
        <div className='authorization-card'>
          <Link to={'/'}>
            <button className='authorization-card__button-back'></button>
          </Link>
          <div className='authorization-card__logo-img'></div>
          <div className='authorization-card__tooltip'>
            <span
              className={`authorization-card__tooltip_sign-in ${
                isSignInVisible ? 'active' : ''
              }`}
              onClick={toggleSignInVisible}
            >
              Вход
            </span>
            <span
              className={`authorization-card__tooltip_registration ${
                isSignInVisible ? '' : 'active'
              }`}
              onClick={toggleSignInVisible}
            >
              Регистрация
            </span>
          </div>
          {isSignInVisible ? (
            <>
              <form action='' className='sign-in-form'>
                <input
                  name='login'
                  type='text'
                  required
                  placeholder='Логин'
                  className='authorization-card__input login-auth'
                  id='login-auth'
                  value={login}
                  onChange={handleLoginInput}
                />
                <input
                  name='password'
                  type='password'
                  required
                  placeholder='Пароль'
                  className='authorization-card__input password-auth'
                  id='password-auth'
                  value={password}
                  onChange={handlePasswordInput}
                />
              </form>
              <button
                className='authorization-card__button-auth'
                onClick={handleLoginBtn}
                type='submit'
              >
                Войти
              </button>
            </>
          ) : (
            <>
              <form action='' className='registration-form'>
                <input
                  name='login'
                  type='text'
                  required
                  placeholder='Логин'
                  className='authorization-card__input login-auth'
                  id='login-auth'
                  value={login}
                  onChange={handleLoginInput}
                />
                <input
                  name='password'
                  type='password'
                  required
                  placeholder='Пароль'
                  className='authorization-card__input password-auth'
                  id='password-auth'
                  value={password}
                  onChange={handlePasswordInput}
                />
              </form>
              <button
                className='authorization-card__button-auth'
                onClick={handleRegistrationBtn}
              >
                Зарегистрироваться
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Authorization;
