import { FaStar } from "react-icons/fa"

import { PublicatedDate, ReviewContent, ReviewContentBox, YourReviewFooter, ReviewHeader, ReviewListContainer, ReviewRating, Username, ReviewBox, EditButton, ExcludeButton } from "./style"

const ReviewCard = props => {


  return (
    <ReviewListContainer>
      {
        yourReview &&
          <ReviewBox>
            <ReviewHeader>
              <Username> Your username </Username>

              <IconContext.Provider value={{ color: "var(--textColor2)", size: "1.1rem" }}>
                <ReviewRating>
                  <FaStar/> {yourRating}
                </ReviewRating>
              </IconContext.Provider>

            </ReviewHeader>

            <ReviewContentBox>
              <ReviewContent>

              </ReviewContent>
            </ReviewContentBox>

            <YourReviewFooter>
                <EditButton>

                </EditButton>

                <PublicatedDate>
            
                </PublicatedDate>
                
                <ExcludeButton>
                    
                </ExcludeButton>
            </YourReviewFooter>
          </ReviewBox>
      }
      
    </ReviewListContainer>
  )
}

export default ReviewCard