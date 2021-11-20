import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

import { solucaoActions } from '../_actions';

import Parser from 'html-react-parser';

class LgpdPage extends React.Component {
  constructor(props) {
    super(props);

    // reset login status
    // this.props.dispatch(userActions.logout());


    this.state = {
        username: '',
        password: '',
        Email: '',
        submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

componentDidMount() {
    this.props.dispatch(solucaoActions.GetTbSolucaoBYSlug("Lgpd"));
  }

handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    
    const { username, password,Email } = this.state;

    if (Email && password) {
        var formulario= $("#botaoentrar");
        formulario.css({'background': '#135CA1'});
        $(".input-text").css({"border": "1px solid #253858"});

    }else{
        var formulario= $("#botaoentrar");
        formulario.css({'background': 'rgba(0,0,0,0.10000000149011612)'});
        $(".input-text").css({"border": "1px solid rgba(0,0,0,0.30000001192092896)"});

        
}
}

handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password,Email } = this.state;
    const { dispatch } = this.props;
    if (Email && password) {
        var formulario= $("#botaoentrar");
        formulario.css({'background': '#135CA1'});
        $(".input-text").css({"border": "1px solid #253858"});
        dispatch(userActions.login(Email, password));
    }else{
        var formulario= $("#botaoentrar");
        formulario.css({'background': 'rgba(0,0,0,0.10000000149011612)'});
        $(".input-text").css({"border": "1px solid rgba(0,0,0,0.30000001192092896)"});

    }
}


    render() {
        const { user, users,solucaos,alert,loggingIn } = this.props;
        const { username, password,Email, submitted } = this.state;

        return (
            <div >

        <div className="row div-sobre-grupo-datamace div-empresa-quem-somos">
              <div className="col-md-6 div-sobre-grupo-datamace-text">
                <h2>
                LGPD
                              </h2>
                <p>
                {solucaos && solucaos.items && solucaos.items[0].titulo  }
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
                <img alt="O grupo datamace" src="../public/images/lgpd-image1.png" className="rounded" />
              </div>
            </div>

            {solucaos && solucaos.items && solucaos.items.map((solucao)=> 
            
            <div key='0'>{Parser(solucao.conteudo)}</div>
                )}

            <div className="row div-cadastro-titular-dados">
            <div className="col-md-6 div-cadastro-titular-dados-title">
               
               <h3>Cadastro do titular de dados</h3>
          </div>
          <div className="col-md-6 div-lgpd-login">
                        <p>Tenha acesso aos seus dados e realize as atividades relacionadas ao Artigo 10 da Lei Geral de Proteção de Dados</p>

                    <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'input-group' + (submitted && !Email ? ' has-error' : '')}>
                        <label htmlFor="Email" className="input-label">Login</label>
                        <input type="text" className="input-text" name="Email" value={Email} onPaste={this.handleChange} onInput={this.handleChange} onChange={this.handleChange} placeholder="Digite seu login"/>
                        {submitted && !Email &&
                            <div className="help-block">Informe seu login</div>
                        }
                    </div>
                    <div className={'input-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password" className="input-label">Senha</label>
                        <input type="password" className="input-text" name="password" value={password} onPaste={this.handleChange} onInput={this.handleChange} onChange={this.handleChange} placeholder="Digite sua senha" />
                        {submitted && !password &&
                            <div className="help-block">Informe sua senha</div>
                        }
                    </div>
                    <div className={"div-alert-login"} style={{marginTop:'1em', marginBottom: '-3em'}}>
                    {alert.message &&
                            <div className={`alert ${alert.type}`}  style={{textAlign: 'center'}}>
                                <img src="../public/images/icons/icon-error.svg" className="menu-icon" style={{marginRight: '1%'}}/>
                                <span>{alert.message}</span></div>
                        }
                        </div>
                    <div className="form-group div-form-end">
                        <button id="botaoentrar">Entrar</button>
                        {loggingIn &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                        <a>Esqueci minha senha</a>
                    </div>
                    
                </form>
          </div>
            </div> 


            <div className="row div-e-social">
              <div className="col-md-6">
                <h3>
                Saiba mais informações sobre a LGPD.
                </h3>
                <a type="button" className="btn btn-success" href="http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm" target="_blank">
                Acessar lei LGPD <img src="../public/images/icon-ir.svg"/>
                </a>
              </div>
              
            </div>



          </div>
          
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication,solucaos,alert } = state;
    const { loggingIn } = state.authentication;

    const { user } = authentication;
    return {
        user,
        users,
        solucaos,alert,
        loggingIn
    };
}

const connectedLgpdPage = connect(mapStateToProps)(LgpdPage);
export { connectedLgpdPage as LgpdPage };