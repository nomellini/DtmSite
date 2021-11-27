import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';


class DefaultLayout extends React.Component {

    constructor(props) {
        super(props);

    }

    render(){

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
            <div className="row" >
            <div className="col-md-12 div-navbar">
              <nav className="navbar navbar-expand-lg navbar-light bg-light static-top">
              <a className="navbar-brand" href="/"><img src="../public/images/datamace-logo.svg "></img></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span className="navbar-toggler-icon" />
                </button> 
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown">Empresa</a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href='/empresa-quem-somos'>Quem somos</a>
                         <a className="dropdown-item" href="/empresa-politica-qualidade">Gestão de qualidade</a> 
                        <a className="dropdown-item" href="/empresa-nossos-parceiros">Nossos parceiros</a>
                        <a className="dropdown-item" href="/empresa-reconhecimentos">Reconhecimentos</a>
                        
                      </div>
                    </li>
                    
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown">Soluções</a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="/solucoes-folha-pagamento">RH e folha de pagamento</a>
                         <a className="dropdown-item" href="/solucoes-portal-colaboracao">Portais de colaboração</a>
                          <a className="dropdown-item" href="/solucao-on-demand">Soluções On Demand</a>
                          <a className="dropdown-item" href="/solucoes-servico-cliente">Serviços ao cliente</a>
                          <a className="dropdown-item" href="http://www.guiaesocial.com.br/" target="_blank">Plataforma eSocial</a>
                       
                      </div>
                    </li>
                    <li className="nav-item active">
                      <a className="nav-link" href="/noticias">Notícias</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown">LGPD</a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href='/lgpd'>Direitos do Titular</a>
                        <a className="dropdown-item" href="/lgpd-responsavel">Encarregado de Proteção de Dados (EPD) ou DPO</a>
                        
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown">Nossos Endereços</a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href='/nosso-end-sbc'>Sede do Grupo Datamace</a>
                        <a className="dropdown-item" href="/nosso-end-campinas">Unidade Campinas</a>
                        <a className="dropdown-item" href="/nosso-end-rio">Unidade Rio de Janeiro</a>
                        
                      </div>
                    </li>
                    <li className="nav-item active">
                      <a className="nav-link" href="/fale-conosco">Fale Conosco</a>
                    </li>
                  </ul>
                
                  <ul className="navbar-nav ml-md-auto">
                    <li className="nav-item">
                    <a className="btn btn-menu-treinamentos" href="/treinamentos"> Treinamentos</a>

                    </li>
                    <li className="nav-item">
                    <a className="btn btn-menu-portal-clientes">Portal do cliente <img src="../public/images/icon-portal-docliente.svg"/> </a>

                    </li>
                  </ul>
                </div>
              </nav>
             
            </div>
        
          </div>

          );
        }


}

export default DefaultLayout;
