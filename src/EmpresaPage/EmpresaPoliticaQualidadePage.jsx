import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class EmpresaPoliticaQualidadePage extends React.Component {
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
                Política de qualidade
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
                <img alt="O grupo datamace" src="../public/images/empresa-politica-qualidade1.png" className="rounded" />
              </div>
            </div>

               <div className="row div-sobre-grupo-datamace div-empresa-quem-somos-fundacao">
               <div className="col-md-6 div-sobre-grupo-datamace-text">
</div>
              <div className="col-md-6 div-sobre-grupo-datamace-text">
                
                <p>
                Para a Datamace, a qualidade representa desafio e compromisso permanentes. Nossa história tem sido guiada pela valorização e respeito pelas pessoas e a criação de valor agregado, buscando sempre a melhoria contínua e a superação dos nossos recordes. Neste sentido o sistema de gestão de qualidade da Datamace foi certificado em 2006 pela norma NBR ISO 9001, pela Société Générale de Surveillance (SGS). O escopo da certificação compreende os processos de desenvolvimento, vendas, suporte, manutenção e treinamento a clientes.
                </p>
              </div>
              
            </div> 

            <div className="row div-e-social">
              <div className="col-md-6">
                <h3>
                Somos certificados pela SGS
                </h3>
                <button type="button" className="btn btn-success">
                Acessar certificado
                </button>
              </div>
              
            </div>

            <div className="row div-sobre-grupo-datamace div-empresa-quem-somos-fundacao">
               <div className="col-md-6 div-sobre-grupo-datamace-text">
</div>
              <div className="col-md-6 div-sobre-grupo-datamace-text">
                
                <p>
                Além dos processos de melhoria da qualidade, os colaboradores da Datamace são incentivados a desenvolver seu potencial por meio do projeto Estrela. O projeto Estrela trata-se de um programa que reconhece e premia os profissionais que, ao longo de um exercício fiscal investiram na carreira e trouxeram mais conhecimento para a organização.                </p>
              </div>
              
            </div> 


            <div className="row div-empresa-politica-qualidade-gallery">

              <div >
              <img src="../public/images/empresa-politica-qualidade-image-1.png" className="rounded" />
              
              </div>
              <div >
                <img  src="../public/images/empresa-politica-qualidade-image-2.png" className="rounded" />
              </div>
              <div >
                <img  src="../public/images/empresa-politica-qualidade-image-3.png" className="rounded" />
              </div>


            </div>
            <div className="row div-empresa-politica-qualidade-gallery-responsive">
              <div className="carousel slide" data-ride="carousel">
                      <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
              </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src="..." alt="First slide" src="../public/images/empresa-politica-qualidade-image-1.png"/>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="..." alt="Second slide" src="../public/images/empresa-politica-qualidade-image-2.png"/>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="..." alt="Third slide" src="../public/images/empresa-politica-qualidade-image-3.png"/>
                  </div>
                </div>
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

const connectedEmpresaPoliticaQualidadePage = connect(mapStateToProps)(EmpresaPoliticaQualidadePage);
export { connectedEmpresaPoliticaQualidadePage as EmpresaPoliticaQualidadePage };