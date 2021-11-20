import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const NotFound = () => (
  <div>
    <h1>404 - Not Found!</h1>
    <Link to="/">
      Go Home
    </Link>
  </div>
);

function mapStateToProps(state) {
  const { users, authentication, solucaos, cidades, estados, cidadesmodais, noticias, solucaosnew } = state;
  const { user } = authentication;
  return {
    user,
    users,
    solucaos,
    estados, cidades, cidadesmodais, noticias, solucaosnew
  };
}

const connectedNotFound = connect(mapStateToProps)(NotFound);
export { connectedNotFound as NotFound };