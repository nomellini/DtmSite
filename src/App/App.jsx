import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { history,updateSocial } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { EmpresaQuemSomosPage,EmpresaPoliticaQualidadePage,EmpresaNossosParceirosPage,EmpresaReconhecimentosPage } from '../EmpresaPage';

import { SolucaoOnDemandPage,SolucaoServicosClientePage,SolucaoRhFolhaPagamentoPage,SolucaoPortalColaboracaoPage } from '../SolucaoPage';

import { TreinamentoPage,ViewTreinamentoPage } from '../TreinamentoPage';

import { LgpdPage,LgpdHomePage,LgpdResponsavel } from '../LgpdPage';

import { EnderecoSedePage,EnderecoCampinasPage,EnderecoRioDeJaneiroPage } from '../EnderecoPage';

import { NoticiaPage,ReadNoticiaPage } from '../NoticiaPage';
import { NotFound } from '../NotFound';

import { LoginPage } from '../LoginPage';
import DefaultLayout from '../Shared/DefaultLayout'
import Footer from '../Shared/Footer'
import { CookieBanner } from '@palmabit/react-cookie-law';
import { FaleConoscoPage } from '../FaleConosco';



class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }


    componentDidMount() {
        updateSocial();
    }

    
    render() {
        const { alert } = this.props;
        return (
            <div >

                

                <Router history={history}>
                        <div>
                            <DefaultLayout />

                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/empresa-quem-somos" component={EmpresaQuemSomosPage} />
                            <Route exact path="/empresa-politica-qualidade" component={EmpresaPoliticaQualidadePage} />
                            <Route exact path="/empresa-nossos-parceiros" component={EmpresaNossosParceirosPage} />
                            <Route exact path="/empresa-reconhecimentos" component={EmpresaReconhecimentosPage} />

                            <Route exact path="/solucao-on-demand" component={SolucaoOnDemandPage} />
                            <Route exact path="/solucoes-servico-cliente" component={SolucaoServicosClientePage} />

                            <Route exact path="/solucoes-folha-pagamento/:id" component={SolucaoRhFolhaPagamentoPage} />

                            <Route exact path="/solucoes-folha-pagamento" component={SolucaoRhFolhaPagamentoPage} />

                            <Route exact path="/solucoes-portal-colaboracao/:id" component={SolucaoPortalColaboracaoPage} />
                            <Route exact path="/solucoes-portal-colaboracao" component={SolucaoPortalColaboracaoPage} />
                            

                            <Route exact path="/treinamentos" component={TreinamentoPage} />
                            <Route exact path="/treinamento-view" component={ViewTreinamentoPage} />

                            <Route exact path="/noticias" component={NoticiaPage} />
                            <Route path="/noticia-read" component={ReadNoticiaPage} />

                            <Route exact path="/lgpd" component={LgpdPage} />
                            <Route exact path="/lgpd-home" component={LgpdHomePage} />
                            <Route exact path="/lgpd-responsavel" component={LgpdResponsavel} />

                            <Route path="/login" component={LoginPage} />

                            {/* Nosso enderços */}

                            <Route path="/nosso-end-sbc" component={EnderecoSedePage} />
                            <Route path="/nosso-end-campinas" component={EnderecoCampinasPage} />
                            <Route path="/nosso-end-rio" component={EnderecoRioDeJaneiroPage} />
                            {/* Fale Conosco */}
                            <Route path="/fale-conosco" component={FaleConoscoPage} />
                            {/* <Route component={NotFound} /> */}

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
                            <Footer />
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
