import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;

   img {
    width: 150px;
  }
`;

export const ShoppingBasketIcon = styled(MdShoppingBasket)`
  width: 36px;
  height: 36px;
  color: #FFF;

`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: filter .2s;

  &:hover {
    filter: brightness(0.7);
  }

  > div {
    text-align: right;
    margin-right: 10px;

    > strong {
      display: block;
      color: #FFF;
    }

    > span {
      font-size: 12px;
      color: #999;
    }
  }
`;
