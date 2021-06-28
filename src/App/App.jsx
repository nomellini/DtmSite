import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { EmpresaQuemSomosPage } from '../EmpresaPage';
import { EmpresaPoliticaQualidadePage } from '../EmpresaPage';
import { EmpresaNossosParceirosPage } from '../EmpresaPage';
import { EmpresaReconhecimentosPage } from '../EmpresaPage';

import { SolucaoOnDemandPage } from '../SolucaoPage';
import { SolucaoServicosClientePage } from '../SolucaoPage';
import { SolucaoRhFolhaPagamentoPage } from '../SolucaoPage';
import { SolucaoPortalColaboracaoPage } from '../SolucaoPage';

import { TreinamentoPage } from '../TreinamentoPage';
import { ViewTreinamentoPage } from '../TreinamentoPage';

import { LgpdPage } from '../LgpdPage';

import { NoticiaPage } from '../NoticiaPage';
import { ReadNoticiaPage } from '../NoticiaPage';



import { LoginPage } from '../LoginPage';
import DefaultLayout from '../Shared/DefaultLayout'
import Footer from '../Shared/Footer'
import { CookieBanner } from '@palmabit/react-cookie-law';



class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div >
                
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <div>
                                <DefaultLayout/>
                                <Route exact path="/" component={HomePage} />
                                <Route exact path="/empresa-quem-somos" component={EmpresaQuemSomosPage} />
                                <Route exact path="/empresa-politica-qualidade" component={EmpresaPoliticaQualidadePage} />
                                <Route exact path="/empresa-nossos-parceiros" component={EmpresaNossosParceirosPage} />
                                <Route exact path="/empresa-reconhecimentos" component={EmpresaReconhecimentosPage} />
                                
                                <Route exact path="/solucao-on-demand" component={SolucaoOnDemandPage} />
                                <Route exact path="/solucoes-servico-cliente" component={SolucaoServicosClientePage} />
                                <Route exact path="/solucoes-folha-pagamento" component={SolucaoRhFolhaPagamentoPage} />
                                <Route exact path="/solucoes-portal-colaboracao" component={SolucaoPortalColaboracaoPage} />

                                <Route exact path="/treinamentos" component={TreinamentoPage} />
                                <Route exact path="/treinamento-view" component={ViewTreinamentoPage} />

                                <Route exact path="/noticias" component={NoticiaPage} />
                                <Route path="/noticia-read" component={ReadNoticiaPage} />

                                <Route exact path="/lgpd" component={LgpdPage} />
                                
                                <Route path="/login" component={LoginPage} />
                                <CookieBanner
  message={<span>Datamace usa cookies para melhorar sua experiência e ajudar a personalizar conteúdo. Usando nosso site, você concorda com nossa <a href="/lgpd">Política de Privacidade</a>, incluindo política de cookie.</span>}
  privacyPolicyLinkText=""
  acceptButtonText="OK, entendi"
  managePreferencesButtonText=""
  styles={{
    dialog: { backgroundColor: 'white' },
    container: {},
    message: {},
    button: {},
    buttonWrapper: {}
  }}
/>
                                <Footer/>
                            </div>
                        </Router>
                    
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 