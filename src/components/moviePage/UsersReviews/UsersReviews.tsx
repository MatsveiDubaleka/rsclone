import { createRef, FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { getData } from '../../../utils/config';
import {
  getUsernameFromLocalStorage,
  getUserReviewsByMovie,
} from '../../../utils/utilsFunctions';
import { MovieIdProps } from '../MoviePageLayout/MoviePageLayout';
import { Review, UserReviewCard } from '../UserReviewCard/UserReviewCard';
import { WriteReviewForm } from '../WriteReviewForm/WriteReviewForm';
import './UsersReviews.scss';

type ReviewsData = {
  items: any;
  total: number;
  totalNegativeReviews: number;
  totalNeutralReviews: number;
  totalPages: number;
  totalPositiveReviews: number;
};

export const UsersReviews: FC<MovieIdProps> = ({ movieId }) => {
  const [reviewsData, setReviewsData] = useState<ReviewsData>();
  const [userReviews, setUserReviews] = useState<any>();
  const [isLogIn] = useState(Boolean(getUsernameFromLocalStorage()));
  const navigate = useNavigate();

  useEffect(() => {
    getData(
      `v2.2/films/${movieId}/reviews?page=1&order=DATE_DESC`,
      setReviewsData
    );
  }, [setReviewsData]);

  useEffect(() => {
    getUserReviews();
  }, [setUserReviews]);

  const getUserReviews = async () => {
    const reviews = await getUserReviewsByMovie(movieId);
    const newArr = reviews
      .filter((item) => item.kinopoiskId === movieId)
      .reverse();
    setUserReviews(newArr);
  };

  const reviewFormRef = createRef();

  const scrollToReviewForm = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  const redirectToAutorization = () => {
    navigate('/autorization');
  };

  const handleWriteReviewBtn = () => {
    if (isLogIn) {
      scrollToReviewForm();
    } else {
      redirectToAutorization();
    }
  };

  return (
    <>
      <div className='users-reviews'>
        <h3 className='users-reviews__title'>Рецензии зрителей</h3>
        {reviewsData?.total !== 0 && (
          <button
            className='users-reviews__write-review-btn'
            onClick={handleWriteReviewBtn}
          >
            Написать рецензию
          </button>
        )}
        <div className='users-reviews__content'>
          <div className='users-reviews__reviews'>
            {userReviews ? (
              userReviews.map((item: Review, index: number) => {
                return <UserReviewCard key={`review-${index}`} review={item} />;
              })
            ) : (
              <></>
            )}
            {reviewsData?.items
              ?.splice(0, 3)
              .map((item: Review, index: number) => {
                return <UserReviewCard key={`review-${index}`} review={item} />;
              })}
            {isLogIn ? (
              <>
                <div ref={reviewFormRef as React.RefObject<HTMLDivElement>}>
                  <WriteReviewForm></WriteReviewForm>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className='users-reviews__info'>
            <div className='users-reviews__total active'>
              <p className='users-reviews__amount'>{`${
                reviewsData?.total + userReviews?.length
                  ? reviewsData?.total + userReviews?.length
                  : '-'
              }`}</p>
              <span>Всего</span>
            </div>
            <div className='users-reviews__positive'>
              <p className='users-reviews__amount positive'>{`${
                reviewsData?.totalPositiveReviews
                  ? reviewsData?.totalPositiveReviews +
                    userReviews?.filter((item: any) => item.type === 'positive')
                      .length
                  : '-'
              }`}</p>
              <span>Положительные</span>
            </div>
            <div className='users-reviews__neutral'>
              <p className='users-reviews__amount neutral'>{`${
                reviewsData?.totalNeutralReviews
                  ? reviewsData?.totalNeutralReviews +
                    userReviews?.filter((item: any) => item.type === 'neutral')
                      .length
                  : '-'
              }`}</p>
              <span>Нейтральные</span>
            </div>
            <div className='users-reviews__negative'>
              <p className='users-reviews__amount negative'>{`${
                reviewsData?.totalNegativeReviews
                  ? reviewsData?.totalNegativeReviews +
                    userReviews?.filter((item: any) => item.type === 'negative')
                      .length
                  : '-'
              }`}</p>
              <span>Отрицательные</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
