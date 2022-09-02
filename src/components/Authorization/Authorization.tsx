import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Authorization.scss';

const Authorization = () => {

const [login, setLogin] = useState('');
const [password, setPassword] = useState('');


const handleLoginInput = (e: React.ChangeEvent<HTMLInputElement>) => {
	const target = e.target;
	setLogin((target as HTMLInputElement).value);
}

const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
	const target = e.target;
	setPassword((target as HTMLInputElement).value);
}

const handleLoginBtn = () => {
	console.log(login, '----', password);
}


const handleRegistrationBtn = () => {
	console.log('registration clicked');
}



  return (
    <div className="authorization-wrapper">
      <div className="authorization">
        <div className="authorization-card">
					<Link to={'/'}><button className="authorization-card__button-back"></button></Link>
          <div className="authorization-card__logo-img"></div>
          <span className="authorization-card__tooltip">Войдите или зарегистрируйтесь</span>
          <form action="">
            <input name="login" type="text" required placeholder="Логин" className="authorization-card__input login-auth" id="login-auth" value={login} onChange={handleLoginInput}/>
            <input name="password" type="password" required placeholder="Пароль" className="authorization-card__input password-auth" id="password-auth" value={password} onChange={handlePasswordInput}/>
          </form>
          <Link to={`/my-account`}><button className="authorization-card__button-auth" onClick={handleLoginBtn}>Войти</button></Link>
          <Link to={`/my-account`}><button className="authorization-card__button-auth" onClick={handleRegistrationBtn}>Зарегистрироваться</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Authorization;