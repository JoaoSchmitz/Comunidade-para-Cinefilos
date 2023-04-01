import { IconContext } from "react-icons"
import { FaStar } from "react-icons/fa"
import { PublicatedDate, ReviewBox, ReviewContent, ReviewContentBox, ReviewFooter, ReviewHeader, ReviewRating, Username } from "./style"

const MovieReviewCard = props => {

  return (
    <ReviewBox>

      <ReviewHeader>
        <Username> {props.review.author_details.username} </Username>

        <IconContext.Provider value={{ color: "var(--textColor2)", size: "1.1rem" }}>
          <ReviewRating>
            <FaStar/> {props.review.author_details.rating}
          </ReviewRating>
        </IconContext.Provider>
      </ReviewHeader>

      <ReviewContentBox>
        <ReviewContent>
          {props.review.content}
        </ReviewContent>
      </ReviewContentBox>

      <ReviewFooter>
        <PublicatedDate>
          Publicada em: {props.review.created_at}
        </PublicatedDate>
      </ReviewFooter>

    </ReviewBox>
  )
}

export default MovieReviewCard