import styled from 'styled-components';
import { BiCheck } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export const LearnContainer = styled.section`
  display: flex;
  align-items: center;
`;

export const LearnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #fff;
  overflow: hidden;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 1370px) {
    align-items: center;
  }
`;

export const LearnImage = styled.div`
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 1000px) {
    display: flex;
    justify-content: center;
  }
`;

export const Img = styled.img`
  @media only screen and (min-width: 1800px) {
    width: 900px;
  }
  @media only screen and (max-width: 1400px) {
    width: 650px;
  }
  @media only screen and (max-width: 1200px) {
    width: 500px;
  }
  @media only screen and (max-width: 1000px) {
    width: 700px;
    height: 500px;
  }
  @media only screen and (max-width: 700px) {
    width: 600px;
  }
  @media only screen and (max-width: 500px) {
    width: 400px;
    height: 300px;
  }
  @media only screen and (max-width: 400px) {
    width: 350px;
  }
`;

export const LearnContent = styled.div`
  padding: 0 10rem;
  @media only screen and (min-width: 1800px) {
    margin: 0 20rem;
  }
  @media only screen and (max-width: 1300px) {
    padding: 2rem 5rem;
  }
  @media only screen and (max-width: 1000px) {
    text-align: center;
  }
  @media only screen and (max-width: 500px) {
    padding: 2rem;
  }
`;

export const LearnContentTitle = styled.h2`
  font-size: clamp(2rem, 8vw, 5rem);
  margin-bottom: 3rem;
  text-align: center;
  line-height: 1.2;
`;

export const LearnContentText = styled.p`
  font-size: 1.8rem;
  @media only screen and (max-width: 1000px) {
    font-size: 2rem;
  }
`;

export const LearnContentItems = styled.div`
  display: flex;
  margin-bottom: 3rem;
  margin-top: 3rem;
  @media only screen and (max-width: 1000px) {
    justify-content: center;
  }
`;

export const LearnContentList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &:not(:last-child) {
    margin-right: 10rem;
  }
  @media only screen and (max-width: 500px) {
    &:not(:last-child) {
      margin-right: 3rem;
    }
  }
`;

export const LearnContentDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LearnContentIcon = styled(BiCheck)`
  font-size: 1.6rem;
  color: #e38b06;
  margin-right: 1rem;
`;

export const LearnContentCategory = styled.h3`
  font-weight: 400;
  font-size: 1.8rem;
  @media only screen and (max-width: 450px) {
    font-size: 1.7rem;
  }
  @media only screen and (max-width: 340px) {
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 335px) {
    font-size: 1.2rem;
  }
`;

export const LearnContentBtn = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  @media only screen and (max-width: 1000px) {
    justify-content: center;
  }
`;