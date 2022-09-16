import { useEffect, useState } from "react";
import { getUsernameFromLocalStorage, getUserReviewsByUser } from "../../../utils/utilsFunctions"
import { Review, UserReviewCard } from "../../moviePage/UserReviewCard/UserReviewCard";
import './UserAccountReviews.scss';

export const UserAccountReviews = () => {

  const [myReviews, setMyReviews] = useState<any>([]);
  
  const username = getUsernameFromLocalStorage();

  const getReviews = async() => {
    const resp = await getUserReviewsByUser(username);
    setMyReviews(resp.reverse());
  }

useEffect(() => {
  getReviews();
}, [setMyReviews]);

  return(
    <div className="user-reviews">
      <h3 className="user-reviews__title">Мои рецензии: </h3>
      {myReviews?.map((item : Review, index : number) => {
        return <UserReviewCard key={`my-review-${index}`} review={item} />
      })}
    </div>
  )
}
