import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import { solucaoActions } from '../_actions';

import Parser from 'html-react-parser';


class SolucaoRhFolhaPagamentoPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(solucaoActions.GetTbSolucaoBYSlug("RH e Folha de Pagamento"));

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
                Seu RH.... Nossa Tecnologia
                                </h2>
                <p>
                Conheça a Datamace. A empresa que Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum                </p>
               
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
            {solucaos && solucaos.error && <span className="text-danger">ERROR: {solucaos.error}</span>}
            <ul className="nav nav-tabs hs" id="myTab" role="tablist">
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
              <div className="col-md-6 div-sobre-grupo-datamace-text">
                
                <p>
                A suite Datamace, são soluções que oferecem os mais avançados recursos de gestão de pessoas para os diferentes setores de atividade, possibilitando que as empresas obtenham os melhores resultados, maximizando o patencial de sua força de trabalho e assegurando sua conformidade com a legislação vigente e acordos sindicais regionais
                </p>
              </div>
              
            </div> 

            <div className="row div-image-rh">
            <div className="col-md-12">
            <img  src="../public/images/solucoes-folha-pagamento-image2.png" className="rounded" />

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

const connectedSolucaoRhFolhaPagamentoPage = connect(mapStateToProps)(SolucaoRhFolhaPagamentoPage);
export { connectedSolucaoRhFolhaPagamentoPage as SolucaoRhFolhaPagamentoPage };