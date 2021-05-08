import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;

  li {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: #FFF;
    box-shadow: 2px 2px 2px 2px rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    backdrop-filter: blur(4px);

    .sneaker {
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .circle {
      width: 10rem;
      height: 10rem;
      background: linear-gradient(
        to right,
        rgba(245, 70, 66, 0.75),
        rgba(8, 83, 156, 0.75)
      ); 
      position: absolute;
      border-radius: 50%;
      z-index: 1;
    }

    img {
      margin: 30px auto;
      max-width: 220px;
      transition: .25s;
      z-index: 2;

      &:hover {
        transform: scale(1.25) rotate(-15deg) translateX(20px);
      }

    }

    .info {
        margin-top: 20px;
        margin-bottom: 20px;

      > strong {
        font-size: 24px;
        font-weight: bold;
        color: #000;
      }

      > h3 {
        margin: 15px 0;
        font-size: 12px;
        font-weight: lighter;
        color: #585858;
        text-transform: uppercase;
      }

      > span {
        font-size: 16px;
        font-weight: lighter;
        color: #585858;
      }
    }

    button {
      background: #191920;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      padding: 10px;

      display: flex;
      align-items: center;

      &:hover {
        background: ${darken(0.03, '#191920')};
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;