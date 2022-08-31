import { Link } from 'react-router-dom';
import './Authorization.scss';

const Authorization = () => {
  return (
    <div className="authorization-wrapper">
      <div className="authorization">
        <div className="authorization-card">
					<Link to={'/'}><button className="authorization-card__button-back"></button></Link>
          <div className="authorization-card__logo-img"></div>
          <span className="authorization-card__tooltip">Войдите или зарегистрируйтесь</span>
          <form action="">
            <input name="login" type="text" placeholder="Логин и email" className="authorization-card__input login-auth" id="login-auth"/>
            <input name="password" type="text" placeholder="Пароль" className="authorization-card__input password-auth" id="password-auth"/>
          </form>
          <Link to={`/my-account`}><button className="authorization-card__button-auth">Войти</button></Link>
          <button className="authorization-card__button-auth">Зарегистрироваться</button>
        </div>
      </div>
    </div>
  );
}

export default Authorization;