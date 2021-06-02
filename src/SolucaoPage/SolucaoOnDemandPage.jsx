import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class SolucaoOnDemandPage extends React.Component {
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
                Soluções On Demand
                                </h2>
                <p>
                Flexibilidade operacional com mobilidade e eficiência                 </p>
               
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
                <img alt="O grupo datamace" src="../public/images/solucao-on-demand-image1.png" className="rounded" />
              </div>
            </div>

               <div className="row div-sobre-grupo-datamace div-empresa-quem-somos-fundacao">
               <div className="col-md-6 div-sobre-grupo-datamace-text">
</div>
              <div className="col-md-6 div-sobre-grupo-datamace-text">
                
                <p>
                Utilizando um ou mais equipamentos conectados à Internet, sua empresa poderá acessar nosso data center de qualquer lugar a qualquer hora e, dessa forma, usufruir de poderosas ferramentas para a Gestão de Pessoas totalmente integradas. Por meio de recursos que facilitam a operação e com uma linguagem simples, seu RH poderá registrar, processar e distribuir informações com eficácia e absoluta segurança e privacidade. O RH Net e-Services da Datamace é uma solução Web que nasceu sob o conceito on demand. Um conceito em que empresas de diversos setores e portes concentram seus esforços em seu próprio negócio, e transferem para especialistas, software, infra-estrutura e os custos de atualização tecnológica, agregando valor ao próprio negócio, aumentando a produtividade e reduzindo custos. Um conceito onde o desafio de atender às expectativas dos clientes depende do oferecimento de soluções completas e flexíveis para se adaptar à realidade do cliente.
</p>
              </div>
              
            </div> 


            <div className="row div-sobre-grupo-datamace div-empresa-quem-somos-compromisso">
              <div className="col-md-6 div-sobre-grupo-datamace-text">
                <h2>
                Gestão de pessoas flexível e dinâmica             </h2>
                <p>
                Com o apoio de um parceiro especialista e a experiência da nossa equipe, podemos fornecer à sua empresa a melhor solução do mercado, que garante atualização e inovação tecnológica para os seus negócios, com custos reduzidos. O RH Net e-Services da Datamace oferece serviços de Folha de Pagamento e Recursos Humanos de forma flexível e abrangente, possibilitando que gestores e o seu RH redirecionem o gerenciamento de tarefas administrativas e concentrem seus esforços e recursos no core business da organização.                </p>               
              </div>
              <div className="col-md-6 div-sobre-grupo-datamace-img">
                <img alt="O grupo datamace" src="../public/images/solucao-on-demand-image2.png" className="rounded" />
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

const connectedSolucaoOnDemandPage = connect(mapStateToProps)(SolucaoOnDemandPage);
export { connectedSolucaoOnDemandPage as SolucaoOnDemandPage };