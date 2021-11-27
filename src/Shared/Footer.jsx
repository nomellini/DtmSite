import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';


class Footer extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {

    // const useStyles = makeStyles((theme) => ({
    //     root: {
    //       flexGrow: 1,
    //     },
    //     menuButton: {
    //       marginRight: theme.spacing(2),
    //     },
    //     title: {
    //       flexGrow: 1,
    //     },
    //   }));

    // const classes = useStyles();

    return (
      <div className="footer">
        <div className="row">
          <div className="col-md-4">
            <h3>
              Empresa
            </h3>
            <ul>
              <li className="list-item">

                <a href="/empresa-quem-somos">Quem somos</a>                      </li>
              <li className="list-item">
                <a href="empresa-politica-qualidade">Política de qualidade</a>                      </li>
              <li className="list-item">
                <a href="empresa-reconhecimentos">Reconhecimentos</a>
              </li>
              <li className="list-item">
                <a href="empresa-nossos-parceiros">Nossos parceiros</a>                        </li>

            </ul>
          </div>
          <div className="col-md-4">
            <h3>
              Soluções
            </h3>
            <ul>
              <li className="list-item">
                <a href="/solucoes-folha-pagamento">RH e folha de pagamento</a>
              </li>
              <li className="list-item">
                <a href="/solucoes-portal-colaboracao">Portais de colaboração</a>
              </li>
              <li className="list-item">
                <a href="/solucao-on-demand">Soluções On Demand</a>
              </li>
              <li className="list-item">
                <a href="/solucoes-servico-cliente">Serviços ao cliente</a>
              </li>
              <li className="list-item">
                <a href="/solucao-e-social">Plataforma eSocial</a>
              </li>

            </ul>
          </div>
          <div className="col-md-4">
            <h3>
              Notícias
            </h3>
            <ul>
              <li className="list-item">
                <a href="/noticias"> Ver todas as notícias</a>
              </li>

            </ul>
          </div>
        </div>

        <hr />

        <div className="row footer-address">
          <div className="col-md-4" style={{ cursor: 'pointer' }} onClick={function () {

            location.href = '/nosso-end-sbc'
          }}>
            <img src="../public/images/icon-lugar.svg" />

            <address>
              <strong>Sede Grupo Datamace</strong><br /><br />Rua Pedro Setti, 221<br />Vila Olga - São Bernardo do Campo - SP<br /> (11) 2714-6400
            </address>
          </div>
          <div className="col-md-4" style={{ cursor: 'pointer' }} onClick={function () {

            location.href = '/nosso-end-campinas'
          }}>
            <img src="../public/images/icon-lugar.svg" />

            <address>

              <strong>Unidade Campinas</strong><br /><br /> Rua Salesópolis, 582<br /> Chácara da Barra - Campinas - SP<br /> (19) 3325-6100
            </address>
          </div>
          <div className="col-md-4" style={{ cursor: 'pointer' }} onClick={function () {

            location.href = '/nosso-end-rio'
          }}>
            <img src="../public/images/icon-lugar.svg" />

            <address>

              <strong>Unidade Rio de Janeiro</strong><br /><br /> Av. Presidente Vargas, 534 – Conj. 2107<br /> Centro - Rio de Janeiro - RJ.<br /> (21) 2516-2801
            </address>
          </div>
          <div className="row footer-redes-sociais">
            <div className="col-md-4">
              <img src="../public/images/icon-facebook.svg" />
            </div>
            <div className="col-md-4">

              <img src="../public/images/icon-twitter.svg" />
            </div>

            <div className="col-md-4">

              <img src="../public/images/icon-linkedin.svg" />
            </div>


          </div>
        </div>
      </div>
    );
  }


}

export default Footer;
