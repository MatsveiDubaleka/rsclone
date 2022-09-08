import { useNavigate } from 'react-router';
import { getUsernameFromLocalStorage } from '../../../utils/utilsFunctions';
import './AdminData.scss';

export const AdminData = () => {
  const navigation = useNavigate();

  const handleLogOutBtn = () => {
    localStorage.removeItem('username');
    navigation('/autorization');
    localStorage.removeItem('visitedMovies');
  };

  return (
    <div className='admin-data'>
      <div className='admin-data__avatar'></div>
      <div className='admin-data__content'>
        <p className='admin-data__login'>{getUsernameFromLocalStorage()}</p>
        {/* <p className="admin-data__email">wildAnimal_89@mail.ru</p>
				<p className="admin-data__summary">Иван Иванов, Новосибирск, 34 года, 3 июля 1989</p> */}
        <div className='admin-data__statistics statistics'>
          <div className='statistics__registration'>
            <p className='statistics__title'>Регистрация:</p>
            <p className='statistics__registration-date'> 8 февраля 2013</p>
          </div>
          <div className='statistics__reviews'>
            <p className='statistics__title'>Рецензии:</p>
            <p className='statistics__reviews-total'>13</p>
          </div>
          <div className='statistics__watched-movies'>
            <p className='statistics__title'>Просмотренные фильмы:</p>
            <p className='statistics__watched-movies-total'>13</p>
          </div>
        </div>
      </div>
      <button className='admin-data__logout-btn' onClick={handleLogOutBtn}>
        Выйти
      </button>
    </div>
  );
};
