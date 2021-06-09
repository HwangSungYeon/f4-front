import {
  CardContainer,
  CardContent,
  CardCardContent,
  CardCard,
  CardImg,
  CardImgContainer,
  CardArrowContainer,
} from './card.styles';
import d1 from '../../images/d1.jpg';
import d2 from '../../images/hun1.jpg';
import d3 from '../../images/hun2.jpg';
import d4 from '../../images/hun3.jpg';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';

const Card = () => {
  return (
    <div>
      <CardContent>
        <CardContainer>
          <CardArrowContainer>
            <FaRegArrowAltCircleLeft />
          </CardArrowContainer>
          <CardCardContent>
            <CardCard>
              <CardImgContainer>
                <CardImg src={d1} alt="File Img" />
              </CardImgContainer>
            </CardCard>
          </CardCardContent>
          <CardCardContent>
            <CardCard>
              <CardImgContainer>
                <CardImg src={d2} alt="File Img" />
              </CardImgContainer>
            </CardCard>
          </CardCardContent>
          <CardCardContent>
            <CardCard>
              <CardImgContainer>
                <CardImg src={d3} alt="File Img" />
              </CardImgContainer>
            </CardCard>
          </CardCardContent>
          <CardCardContent>
            <CardCard>
              <CardImgContainer>
                <CardImg src={d4} alt="File Img" />
              </CardImgContainer>
            </CardCard>
          </CardCardContent>
          <CardArrowContainer>
            <FaRegArrowAltCircleRight />
          </CardArrowContainer>
        </CardContainer>
      </CardContent>
    </div>
  );
};
export default Card;
