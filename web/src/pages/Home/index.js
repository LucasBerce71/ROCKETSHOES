import React from 'react';

import { NavLink } from 'react-router-dom';

// import { Container } from './styles';

export default function Home() {
  return (
    <NavLink to="/cart">
      <h1>Carrinho</h1>
    </NavLink>
  );
}
