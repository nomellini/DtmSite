import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import { solucaoActions } from '../_actions';

import Parser from 'html-react-parser';


class SolucaoPortalColaboracaoPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(solucaoActions.GetTbSolucaoBYSlug("Portais de colaboração"));

    }

    render() {
        const { user, solucaos } = this.props;

        var root = document.documentElement;
        const lists = document.querySelectorAll('.hs');
        lists.forEach(el => {
          const listItems = el.querySelectorAll('li');
          const n = el.children.length;
          el.style.setProperty('--total', n);
        });

if(solucaos.items){
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
                Portais de colaboração
                                </h2>
                <p>
                Conheça a Datamace. A empresa que Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum               
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
                <img alt="O grupo datamace" src="../public/images/solucoes-portal-colaboracao-image1.png" className="rounded" />
              </div>
            </div>

            <div className="row div-nav-rh">
            <div className="col-md-12">
              <div className="div-rh-scroll-tabs">
            {solucaos && solucaos.error && <span className="text-danger">ERROR: {solucaos.error}</span>}
            <ul className="nav nav-tabs hs hs-portal-colaboracao" id="myTab" role="tablist">
            {solucaos && solucaos.items && solucaos.items.map((solucao)=> 

                <li className="nav-item" role="presentation" key={solucao.menu}>
                  <a className="nav-link" id={`${solucao.menu}-tab`} data-toggle="tab" href={`#${solucao.menu}`} role="tab" aria-controls={solucao.menu} aria-selected="true">{solucao.menu}</a>
                </li>
                        

                            )}
         
        </ul>
        </div>

        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="default" role="tabpanel" aria-labelledby="default-tab">
          <div className="row div-sobre-grupo-datamace div-empresa-quem-somos-fundacao">
               <div className="col-md-6 div-sobre-grupo-datamace-text">
            </div>
              <div className="col-md-6 div-sobre-grupo-datamace-text div-portal-colaboracao-text">
                <h3>Soluções que apóiam o crescimento da sua empresa.</h3>
                <p>
                A Datamace oferece o mais amplo portfólio de soluções de negócios na Web, dando aos clientes a flexibilidade e controle necessários para impulsionar e agilizar os processos de RH das empresas. Nossos aplicativos são construídos a partir da experiência da Datamace no setor de RH, e no alcance global proporcionado pela tecnologia, possibilitando que você execute seus processos em conformidade com a legislação e de forma rápida, fácil e segura.
                </p>
              </div>
              
            </div> 

            <div className="row div-image-rh">
            <div className="col-md-12">
            <img  src="../public/images/solucoes-portal-colaboracao-image2.png" className="rounded" />

              </div>
              </div>
          </div>

          {solucaos && solucaos.items && solucaos.items.map((solucao)=> 

<div className="tab-pane fade" id={solucao.menu} role="tabpanel" aria-labelledby={`${solucao.menu}-tab`} key={solucao.menu}>
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
    const { users,solucaos, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users,
        solucaos
    };
}

const connectedSolucaoPortalColaboracaoPage = connect(mapStateToProps)(SolucaoPortalColaboracaoPage);
export { connectedSolucaoPortalColaboracaoPage as SolucaoPortalColaboracaoPage };