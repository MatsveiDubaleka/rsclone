import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Authorization.scss';

type AuthResponce = {
	message?: string,
	token?: string
}

const Authorization = () => {

const [login, setLogin] = useState('');
const [password, setPassword] = useState('');

const navigate = useNavigate();

// const userInfo = localStorage.getItem('user-info');



const handleLoginInput = (e: React.ChangeEvent<HTMLInputElement>) => {
	const target = e.target;
	setLogin((target as HTMLInputElement).value);
}

const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
	const target = e.target;
	setPassword((target as HTMLInputElement).value);
}

const handleLoginBtn = async () => {
	const resp = await tryLogin();
		if ((resp as AuthResponce).message) {
			console.log("USER / PASSWORD INCORRECT")
		} else {
			console.log("ACCESS OK")
			localStorage.setItem("user-info", JSON.stringify(login));
			navigate("/my-account");
		}
}

const handleRegistrationBtn = () => {
	console.log('registration clicked');
}


async function tryLogin() {
	let resp = await fetch(`https://rskinopoisk.herokuapp.com/auth/login`, {
		method: 'POST',
		body: JSON.stringify({
			username: login,
      password: password,
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	});
	resp = await resp.json();
	return(resp);
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
          <button className="authorization-card__button-auth" onClick={handleLoginBtn} type='submit'>Войти</button>
          <button className="authorization-card__button-auth" onClick={handleRegistrationBtn}>Зарегистрироваться</button>
        </div>
      </div>
    </div>
  );
}

export default Authorization;