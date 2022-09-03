import { createRef, FC, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getData } from "../../../utils/config";
import { getUsernameFromLocalStorage } from "../../../utils/utilsFunctions";
import { MovieIdProps } from "../MoviePageLayout/MoviePageLayout";
import { Review, UserReviewCard } from "../UserReviewCard/UserReviewCard";
import { WriteReviewForm } from "../WriteReviewForm/WriteReviewForm";
import "./UsersReviews.scss";


type ReviewsData = {
  items: any, // не смогла это затипизировать
  total: number,
  totalNegativeReviews: number,
  totalNeutralReviews: number,
  totalPages: number,
  totalPositiveReviews: number,
}

export const UsersReviews : FC<MovieIdProps> = ({ movieId }) => {

  const [reviewsData, setReviewsData] = useState<ReviewsData>();
  const [isLogIn] = useState(Boolean(getUsernameFromLocalStorage()));
  const navigate = useNavigate();

  useEffect(() => {
    getData(`v2.2/films/${movieId}/reviews?page=1&order=DATE_DESC`, setReviewsData);
  }, [setReviewsData]);

  const reviewFormRef = createRef();

  const scrollToReviewForm = () => {
    window.scrollTo(0, document.body.scrollHeight);
  }

  const redirectToAutorization = () => {
    navigate('/autorization');
  }

  const handleWriteReviewBtn = () => {
    if (isLogIn) {
      scrollToReviewForm();
    } else {
      redirectToAutorization();
    }
  }
  
  return(
    <>
    {(reviewsData?.total === 0 && isLogIn) ? 
        <div className="users-reviews">
          <h3 className="users-reviews__title">Рецензии зрителей</h3>
          {reviewsData?.total !== 0 &&
            <button className="users-reviews__write-review-btn" onClick={handleWriteReviewBtn}>Написать рецензию</button>
          }
            <div className="users-reviews__content">
              <div className="users-reviews__reviews">
                  {reviewsData?.items?.splice(0, 3).map((item : Review, index:number) => {
                    return <UserReviewCard key={`review-${index}`} review={item} />
                  })}
                  {isLogIn ?
                    <>
                      <div ref={reviewFormRef as React.RefObject<HTMLDivElement>}>
                        <WriteReviewForm></WriteReviewForm>
                      </div>
                    </>
                    :
                    <></>
                  }
              </div>
              <div className="users-reviews__info">
                  <div className="users-reviews__total active">
                    <p className="users-reviews__amount">{reviewsData?.total}</p>
                    <span>Всего</span>
                  </div>
                  <div className="users-reviews__positive">
                    <p className="users-reviews__amount positive">{reviewsData?.totalPositiveReviews}</p>
                    <span>Положительные</span>
                  </div>
                  <div className="users-reviews__neutral">
                    <p className="users-reviews__amount neutral">{reviewsData?.totalNeutralReviews}</p>
                    <span>Нейтральные</span>
                  </div>
                  <div className="users-reviews__negative">
                    <p className="users-reviews__amount negative">{reviewsData?.totalNegativeReviews}</p>
                    <span>Отрицательные</span>
                  </div>
              </div>
            </div>
        </div>
      :
      <p>К этому фильму еще не оставлено ни одной рецензии</p>
    }
    </>
  )
}