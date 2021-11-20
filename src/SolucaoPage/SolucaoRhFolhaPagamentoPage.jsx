import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import { solucaoActions } from '../_actions';

import Parser from 'html-react-parser';


class SolucaoRhFolhaPagamentoPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      setMenu: false
    };

  }
  componentDidMount() {
    this.props.dispatch(solucaoActions.GetTbSolucaoBYSlug("RH e Folha de Pagamento"));
    if (this.props.match.params && this.props.match.params.id) {
      //   // return the selected items

      this.setState({ id: this.props.match.params.id,setMenu : true });

    }

  }

  render() {
    const { user, solucaos } = this.props;
    const { id,setMenu } = this.state;
    var parent = null;

    var root = document.documentElement;
    const lists = document.querySelectorAll('.hs');
    lists.forEach(el => {
      const listItems = el.querySelectorAll('li');
      const n = el.children.length;
      el.style.setProperty('--total', n);
    });


    $('.svg-scroll-avancar').click(function () {
      var move = document.getElementById('myTab').scrollLeft + 340;

      $('#myTab').animate({ scrollLeft: move }, 'fast');

      var el = document.getElementById('myTab');

      var max = el.scrollWidth - el.clientWidth;

      var max_value = $('#myTab').scrollLeft(); // returns 300
      if (max_value == max) {
        $('.svg-scroll-avancar').hide();
      }
      if (max_value > 0) {
        $('.svg-scroll-voltar').show();

      }
    });


    $('.svg-scroll-voltar').click(function () {
      var move = document.getElementById('myTab').scrollLeft - 340;


      $('#myTab').animate({ scrollLeft: move }, 'fast');

      var el = document.getElementById('myTab');

      var max = el.scrollWidth - el.clientWidth;;

      var max_value = $('#myTab').scrollLeft(); // returns 300

      if (max_value < max) {
        $('.svg-scroll-avancar').show();
      }

      if (max_value == 0) {
        $('.svg-scroll-voltar').hide();

      }
    });
    if (solucaos.items) {

      parent = solucaos.items.filter(function (solucao) {
        return solucao.parent == true
      });
      if (parent.length > 0) {
        parent = parent[0];

      }
      solucaos.items = solucaos.items.filter(function (solucao) {
        return solucao.parent !== true
      });

      var root = document.documentElement;
      const lists = document.querySelectorAll('.hs');
      lists.forEach(el => {
        const listItems = el.querySelectorAll('li');
        const n = el.children.length;
        el.style.setProperty('--total', solucaos.items.length);
      });
    }


    return (
      <div >

        <div className="row div-sobre-grupo-datamace div-empresa-quem-somos">
          <div className="col-md-6 div-sobre-grupo-datamace-text">
            <h2>
              Seu RH.... Nossa Tecnologia
            </h2>
            <p>
              {parent && Parser(parent.titulo)}
            </p>

          </div>
          <div className="col-md-6 div-sobre-grupo-datamace-img">
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
            <img alt="O grupo datamace" src="../public/images/solucoes-folha-pagamento-image1.png" className="rounded" />
          </div>
        </div>

        <div className="row div-nav-rh">
          <div className="col-md-12">
            <div className="div-rh-scroll-tabs">
              <img src="../public/images/icon-voltar-scroll.svg" className="svg-scroll svg-scroll-voltar" />

              {solucaos && solucaos.error && <span className="text-danger">ERROR: {solucaos.error}</span>}
              <ul className="nav nav-tabs hs" id="myTab" role="tablist">
                {solucaos && solucaos.items && solucaos.items.map((solucao) =>


                  <li className="nav-item" role="presentation" key={solucao.menu}>
                    {id && id == solucao.menu && <a className="nav-link active show" id={`${solucao.menu}-tab`} href={`/solucoes-folha-pagamento/${solucao.menu}`} role="tab" aria-controls={solucao.menu} aria-selected="true">{solucao.menu}</a>}
                    {(!id || id != solucao.menu) && <a className="nav-link" id={`${solucao.menu}-tab`} href={`/solucoes-folha-pagamento/${solucao.menu}`} role="tab" aria-controls={solucao.menu} aria-selected="true">{solucao.menu}</a>}
                  </li>


                )}

              </ul>
              <img src="../public/images/icon-avancar.svg" className="svg-scroll svg-scroll-avancar" />

            </div>

            <div className="tab-content" id="myTabContent">
              <div className={`tab-pane fade ` + (setMenu !== true? "show active" : "")} id="default" role="tabpanel" aria-labelledby="default-tab">

                {parent && Parser(parent.conteudo)}
              </div>

              {solucaos && solucaos.items && solucaos.items.map((solucao) =>

                <div className={`tab-pane fade ` + ((setMenu == true && id == solucao.menu) ? "show active" : "")} id={solucao.menu} role="tabpanel" aria-labelledby={`${solucao.menu}-tab`} key={solucao.menu}>
                  <div className="div-rh-info">
                    <div className="div-rh-titulo">

                      <h3>{solucao.titulo}</h3>

                    </div>

                    <div className="div-rh-conteudo">


                      {Parser(solucao.conteudo)}


                    </div>

                  </div>
                </div>



              )}




            </div>
          </div>
        </div>







      </div>

    );
  }
}

function mapStateToProps(state) {
  const { users, solucaos, authentication } = state;
  const { user } = authentication;
  return {
    user,
    users,
    solucaos
  };
}

const connectedSolucaoRhFolhaPagamentoPage = connect(mapStateToProps)(SolucaoRhFolhaPagamentoPage);
export { connectedSolucaoRhFolhaPagamentoPage as SolucaoRhFolhaPagamentoPage };