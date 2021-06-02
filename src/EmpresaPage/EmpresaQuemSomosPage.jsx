import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class EmpresaQuemSomosPage extends React.Component {
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
                Quem somos                </h2>
                <p>
                Conheça a Datamace. A empresa que Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum                 </p>
               
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
                <img alt="O grupo datamace" src="../public/images/empresa-quem-somos1.png" className="rounded" />
              </div>
            </div>

               <div className="row div-sobre-grupo-datamace div-empresa-quem-somos-fundacao">
               <div className="col-md-6 div-sobre-grupo-datamace-text">
</div>
              <div className="col-md-6 div-sobre-grupo-datamace-text">
                
                <p>
                Fundada em 1987 a Datamace é hoje, reconhecidamente, uma das líderes nacionais em soluções integradas para a gestão de Recursos Humanos, para todos os setores da economia. Atendendo a mais de 3.000 clientes em todo o território nacional, a sua história de sucesso é marcada pelo conhecimento das regras de negócio pelo investimento em pessoas e em novas tecnologias.

Esta experiência possibilita à Datamace oferecer soluções personalizadas, baseadas em plataformas já testadas e com o objetivo de simplificar as atividades da administração de pessoas nas empresas. A partir dela, podemos oferecer serviços de suporte contínuo e com atualizações legais constantes para, garantir a eficiência e a performance do RH das organizações.

Os profissionais da Datamace estão absolutamente determinados a oferecer o mais alto nível de atendimento e suporte a todos seus clientes.               
</p>
              </div>
              
            </div> 


            <div className="row div-sobre-grupo-datamace div-empresa-quem-somos-compromisso">
              <div className="col-md-6 div-sobre-grupo-datamace-text">
                <h2>
                Compromisso Datamace a longo prazo              </h2>
                <p>
                Para manter a posição de liderança, a Datamace aproveitou toda sua experiência em TI e vem investindo em novas gerações de software, utilizando tecnologias de ponta. A nova geração de softwares da Datamace são aplicativos modulares e integráveis, que funcionam totalmente via internet, baseado na tecnologia webservices.Ao adotar as soluções Web, as organizações poderão reduzir seus custos, aumentar seu desempenho e ganhar agilidade operacional, tornando-as capazes para reagir às dinâmicas demandas em constante transformação.
                </p>               
              </div>
              <div className="col-md-6 div-sobre-grupo-datamace-img">
                <img alt="O grupo datamace" src="../public/images/empresa-quem-somos-compromisso.png" className="rounded" />
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

const connectedEmpresaQuemSomosPage = connect(mapStateToProps)(EmpresaQuemSomosPage);
export { connectedEmpresaQuemSomosPage as EmpresaQuemSomosPage };