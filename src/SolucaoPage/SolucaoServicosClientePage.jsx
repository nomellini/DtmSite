import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class SolucaoServicosClientePage extends React.Component {
    componentDidMount() {
        // this.props.dispatch(userActions.getAll());
    }

    render() {
        const { user, users } = this.props;
        return (
            <div >

        <div className="row div-sobre-grupo-datamace div-empresa-quem-somos">
              <div className="col-md-6 div-sobre-grupo-datamace-text">
                <h2>
                Serviços ao cliente                              </h2>
                <p>
                Aproveite o valor do suporte e manutenção
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
                <img alt="O grupo datamace" src="../public/images/solucao-servico-cliente.png" className="rounded" />
              </div>
            </div>

               <div className="row div-sobre-grupo-datamace div-empresa-quem-somos-fundacao">
               <div className="col-md-6 div-sobre-grupo-datamace-text">
</div>
              <div className="col-md-6 div-sobre-grupo-datamace-text">
                
                <p>
                Agora que você escolheu o software, estamos aqui para ajudar com suporte contínuo para que você possa entrar em atividade mais rápido e obter os benefícios completos da sua solução Datamace. Com suporte para todas as etapas do ciclo de vida da sua solução – do planejamento, implementação até a operações e otimização – nossa linha completa de serviços pode ajudar a reduzir seu custo total de propriedade.
                </p>
              </div>
              
            </div> 
  


            <div className="row div-noticias div-noticias-servicos-clientes">
             

              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-block">
                        <h5 className="card-title">
                        Suporte On Line
                        </h5>
                        <p className="card-text">
                        O Suporte On Line ao cliente é realizado por meio de ferramenta web "SAD-Sistema De Atendimento Datamace". É um serviço no qual os clientes relatam suas necessidades e acompanham o processo de solução de forma personalizada e com muita agilidade.
                                              </p>
                        <div className="card-noticias-a">
                          <a  href="http://portalcliente.datamace.com.br/" target="_blank">Acessar o Portal do Cliente</a> 
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-block">
                        <h5 className="card-title">
                        Suporte - Help Desk
                        </h5>
                        <p className="card-text">
                        O Suporte por meio do Contact Center consiste em relatar a necessidade ao consultor até que a solução para o problema seja encontrada. Este modelo de serviço esta a disposição de todos os clientes e parceiros de segunda a sexta no Período das 8h às 18h.                       </p>
                        <div className="card-noticias-a">
                          <a   href="http://portalcliente.datamace.com.br/" target="_blank">Ligar para Help Desk</a> 
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-block">
                        <h5 className="card-title">
                        Implementação
                        </h5>
                        <p className="card-text">
                        Se você esta implementando o software em seu servidor ou em nosso DataCenter, nossos consultores de Pós Venda poderão ajuda-lo com a experiência e conhecimento Das melhores práticas específicas do seu seguimento de mercado.                        </p>
                        <div className="card-noticias-a">
                          <a href="http://portalcliente.datamace.com.br/" target="_blank">Conheça nossa metodologia</a> 
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            </div>
            
            <div className="row div-e-social div-e-social-servicos-clientes">
              <div className="col-md-6">
                <h3>
                Tenha sempre em mãos os manuais atualizados para consulta.               </h3>
                <button type="button" className="btn btn-success" onClick={function(){

                window.open('http://portalcliente.datamace.com.br/')

                }}>
                Acessar Portal do Cliente        
                      </button>
              </div>
              
            </div>




          </div>
          
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedSolucaoServicosClientePage = connect(mapStateToProps)(SolucaoServicosClientePage);
export { connectedSolucaoServicosClientePage as SolucaoServicosClientePage };