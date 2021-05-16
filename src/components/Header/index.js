import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Container, Cart, ShoppingBasketIcon } from './styles';

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Adidas_Logo_Grey.svg/1280px-Adidas_Logo_Grey.svg.png" alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <ShoppingBasketIcon />
      </Cart>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);