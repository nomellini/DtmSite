import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class LgpdHomePage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        // this.props.dispatch(userActions.logout());

        const { user, users } = this.props;
        console.log(user);
        this.state = {
            username: '',
            password: '',
            editting: '',
            nome: user && user.user.nome || '',
            email: user && user.user.email || '',
            cpf: user && user.user.cpf || '',
            cargo: user && user.user.funcao || '',
            codigo: '',
            empresa: user && user.user.nomeEmpresa || '',
            telefone: user && user.user.telefone || '',
            senha: '',
            novasenha: '',
            confirmacaosenha: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.editValue = this.editValue.bind(this);
    }

    editValue(valueEdit) {
        console.log(valueEdit);
        this.setState({ editting: valueEdit });

    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });

        const { username, password, Email } = this.state;

        if (Email && password) {
            var formulario = $("#botaoentrar");
            formulario.css({ 'background': '#135CA1' });
            $(".input-text").css({ "border": "1px solid #253858" });

        } else {
            var formulario = $("#botaoentrar");
            formulario.css({ 'background': 'rgba(0,0,0,0.10000000149011612)' });
            $(".input-text").css({ "border": "1px solid rgba(0,0,0,0.30000001192092896)" });


        }
    }

    handleSubmit(e) {
        // e.preventDefault();
        this.setState({ submitted: true });
        const { username, password, Email } = this.state;
        const { dispatch } = this.props;
        if (Email && password) {
            var formulario = $("#botaoentrar");
            formulario.css({ 'background': '#135CA1' });
            $(".input-text").css({ "border": "1px solid #253858" });
            dispatch(userActions.login(Email, password));
        } else {
            var formulario = $("#botaoentrar");
            formulario.css({ 'background': 'rgba(0,0,0,0.10000000149011612)' });
            $(".input-text").css({ "border": "1px solid rgba(0,0,0,0.30000001192092896)" });

        }
    }


    componentDidMount() {
        // this.props.dispatch(userActions.getAll());
    }

    render() {
        const { user, users } = this.props;
        const { username, password, submitted, editting, nome, email, cpf, cargo, codigo, empresa, telefone, senha, novasenha, confirmacaosenha } = this.state;
        var sefThis = this;
        return (
            <div >

                <div className="row div-header-img">

                    <div className="div-sobre-grupo-datamace-img-lgpd">

                        <img alt="O grupo datamace" src="../public/images/lgpd-image1.png" className="rounded" />
                    </div>
                </div>

                <div className="row page-body-lgpd">
                    <div className="col-md-5">
                        <div>
                            <img src="../public/images/icon-voltar.svg" />
                            <a id="voltar-lgpd" href={`/lgpd`}>Voltar para LGPD</a>

                            <p id="title-lgpd-menu">Informações pessoais do titular de dados</p>

                        </div>
                        <div className="div-rh-scroll-tabs">

                            <ul className="nav nav-tabs hs" id="myTab" role="tablist">

                                <li className="nav-item" role="presentation" key="perfil">
                                    <a className="nav-link active show" id="perfil-tab" data-toggle="tab" href="#perfil" role="tab" aria-controls="perfil" aria-selected="true">Perfil</a>
                                </li>
                                <li className="nav-item" role="presentation" key="senha">
                                    <a className="nav-link" id="senha-tab" data-toggle="tab" href="#senha" role="tab" aria-controls="senha" aria-selected="true">Senha</a>
                                </li>
                                <li className="nav-item" role="presentation" key="cursosrealizados">
                                    <a className="nav-link" id="cursosrealizados-tab" data-toggle="tab" href="#cursosrealizados" role="tab" aria-controls="cursosrealizados" aria-selected="true">Cursos realizados</a>
                                </li>
                                <li className="nav-item" role="presentation" key="atividadesdoperfil">
                                    <a className="nav-link" id="atividadesdoperfil-tab" data-toggle="tab" href="#atividadesdoperfil" role="tab" aria-controls="atividadesdoperfil" aria-selected="true">Atividades do perfil</a>
                                </li>
                                <li className="nav-item" role="presentation" key="downloaddedados">
                                    <a className="nav-link" id="downloaddedados-tab" data-toggle="tab" href="#downloaddedados" role="tab" aria-controls="downloaddedados" aria-selected="true">Download de dados</a>
                                </li>
                                <li className="nav-item" role="presentation" key="excluircadastro">
                                    <a className="nav-link" id="excluircadastro-tab" data-toggle="tab" href="#excluircadastro" role="tab" aria-controls="excluircadastro" aria-selected="true">Excluir cadastro</a>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div className="col-md-5">

                        <div className="tab-content" id="myTabContent">
                            {/* perfil */}
                            <div className="tab-pane fade show active" id="perfil" role="tabpanel" aria-labelledby="perfil-tab">
                                <div className="page-body-lgpd-titulo-inicial">
                                    <b>Direito de Acesso e Correção </b> &nbsp;&nbsp;Art. 18, II e III - LGPD
                                </div>
                                <div className="page-body-lgpd-content">
                                    {/* Nome */}
                                    <div className="item-perfil-cadastro">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <label className="label-perfil-cadastro">Nome</label>
                                                {(editting == '' || editting != 'nome') &&
                                                    <a className="suffix-link" onClick={function (e) {
                                                        sefThis.editValue('nome');
                                                    }
                                                    }>Editar</a>}
                                                {editting == 'nome' &&
                                                    <a className="suffix-link" onClick={function (e) {
                                                        sefThis.editValue('');
                                                    }
                                                    }>Cancelar</a>}
                                            </div>
                                        </div>
                                        <div className="row item-field-edit">
                                            <div className="col-md-12">
                                                <input type="text" disabled={editting == '' || editting != 'nome'} name="nome" value={nome} onPaste={this.handleChange} onInput={this.handleChange} onChange={this.handleChange} />

                                                {editting == 'nome' && <a className="page-body-lgpd-btn" onClick={this.handleSubmit}>Salvar</a>}

                                            </div>
                                        </div>
                                    </div>
                                    {/* e-mail */}
                                    <div className="item-perfil-cadastro">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <label className="label-perfil-cadastro">E-mail</label>
                                                {(editting == '' || editting != 'email') &&
                                                    <a className="suffix-link" onClick={function (e) {
                                                        sefThis.editValue('email');
                                                    }
                                                    }>Editar</a>}
                                                {editting == 'email' &&
                                                    <a className="suffix-link" onClick={function (e) {
                                                        sefThis.editValue('');
                                                    }
                                                    }>Cancelar</a>}
                                            </div>
                                        </div>
                                        <div className="row item-field-edit">
                                            <div className="col-md-12">
                                                <input type="text" disabled={editting == '' || editting != 'email'} name="email" value={email} onPaste={this.handleChange} onInput={this.handleChange} onChange={this.handleChange} />

                                                {editting == 'email' && <a className="page-body-lgpd-btn" onClick={this.handleSubmit}>Salvar</a>}

                                            </div>
                                        </div>
                                    </div>
                                    {/* CPF */}
                                    <div className="item-perfil-cadastro">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <label className="label-perfil-cadastro">CPF</label>
                                                {(editting == '' || editting != 'cpf') &&
                                                    <a className="suffix-link" onClick={function (e) {
                                                        sefThis.editValue('cpf');
                                                    }
                                                    }>Editar</a>}
                                                {editting == 'cpf' &&
                                                    <a className="suffix-link" onClick={function (e) {
                                                        sefThis.editValue('');
                                                    }
                                                    }>Cancelar</a>}
                                            </div>
                                        </div>
                                        <div className="row item-field-edit">
                                            <div className="col-md-12">
                                                <input type="text" disabled={editting == '' || editting != 'cpf'} name="cpf" value={cpf} onPaste={this.handleChange} onInput={this.handleChange} onChange={this.handleChange} />

                                                {editting == 'cpf' && <a className="page-body-lgpd-btn" onClick={this.handleSubmit}>Salvar</a>}

                                            </div>
                                        </div>
                                    </div>
                                    {/* CARGO */}
                                    <div className="item-perfil-cadastro">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <label className="label-perfil-cadastro">Cargo</label>
                                                {(editting == '' || editting != 'cargo') &&
                                                    <a className="suffix-link" onClick={function (e) {
                                                        sefThis.editValue('cargo');
                                                    }
                                                    }>Editar</a>}
                                                {editting == 'cargo' &&
                                                    <a className="suffix-link" onClick={function (e) {
                                                        sefThis.editValue('');
                                                    }
                                                    }>Cancelar</a>}
                                            </div>
                                        </div>
                                        <div className="row item-field-edit">
                                            <div className="col-md-12">
                                                <input type="text" disabled={editting == '' || editting != 'cargo'} name="cargo" value={cargo} onPaste={this.handleChange} onInput={this.handleChange} onChange={this.handleChange} />

                                                {editting == 'cargo' && <a className="page-body-lgpd-btn" onClick={this.handleSubmit}>Salvar</a>}

                                            </div>
                                        </div>
                                    </div>
                                    {/* codigo */}
                                    <div className="item-perfil-cadastro">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <label className="label-perfil-cadastro">Código do cliente</label>
                                                {(editting == '' || editting != 'codigo') &&
                                                    <a className="suffix-link" onClick={function (e) {
                                                        sefThis.editValue('codigo');
                                                    }
                                                    }>Editar</a>}
                                                {editting == 'codigo' &&
                                                    <a className="suffix-link" onClick={function (e) {
                                                        sefThis.editValue('');
                                                    }
                                                    }>Cancelar</a>}
                                            </div>
                                        </div>
                                        <div className="row item-field-edit">
                                            <div className="col-md-12">
                                                <input type="text" disabled={editting == '' || editting != 'codigo'} name="codigo" value={codigo} onPaste={this.handleChange} onInput={this.handleChange} onChange={this.handleChange} />

                                                {editting == 'codigo' && <a className="page-body-lgpd-btn" onClick={this.handleSubmit}>Salvar</a>}

                                            </div>
                                        </div>
                                    </div>
                                    {/* empresa */}
                                    <div className="item-perfil-cadastro">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <label className="label-perfil-cadastro">Empresa</label>
                                                {(editting == '' || editting != 'empresa') &&
                                                    <a className="suffix-link" onClick={function (e) {
                                                        sefThis.editValue('empresa');
                                                    }
                                                    }>Editar</a>}
                                                {editting == 'empresa' &&
                                                    <a className="suffix-link" onClick={function (e) {
                                                        sefThis.editValue('');
                                                    }
                                                    }>Cancelar</a>}
                                            </div>
                                        </div>
                                        <div className="row item-field-edit">
                                            <div className="col-md-12">
                                                <input type="text" disabled={editting == '' || editting != 'empresa'} name="empresa" value={empresa} onPaste={this.handleChange} onInput={this.handleChange} onChange={this.handleChange} />

                                                {editting == 'empresa' && <a className="page-body-lgpd-btn" onClick={this.handleSubmit}>Salvar</a>}

                                            </div>
                                        </div>
                                    </div>
                                    {/* telefone */}
                                    <div className="item-perfil-cadastro">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <label className="label-perfil-cadastro">Telefone</label>
                                                {(editting == '' || editting != 'telefone') &&
                                                    <a className="suffix-link" onClick={function (e) {
                                                        sefThis.editValue('telefone');
                                                    }
                                                    }>Editar</a>}
                                                {editting == 'telefone' &&
                                                    <a className="suffix-link" onClick={function (e) {
                                                        sefThis.editValue('');
                                                    }
                                                    }>Cancelar</a>}
                                            </div>
                                        </div>
                                        <div className="row item-field-edit">
                                            <div className="col-md-12">
                                                <input type="text" disabled={editting == '' || editting != 'telefone'} name="telefone" value={telefone} onPaste={this.handleChange} onInput={this.handleChange} onChange={this.handleChange} />

                                                {editting == 'telefone' && <a className="page-body-lgpd-btn" onClick={this.handleSubmit}>Salvar</a>}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Gerenciamento de senha */}
                            <div className="tab-pane fade" id="senha" role="tabpanel" aria-labelledby="senha-tab">
                                <div className="page-body-lgpd-titulo-inicial">
                                    <b>Gerenciamento de senha </b> &nbsp;&nbsp;Política de Segurança da Informação
                                </div>
                                <div className="page-body-lgpd-content">
                                    {/* Nome */}
                                    <div className="item-perfil-cadastro">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <label className="label-perfil-cadastro">Usuário</label>

                                            </div>
                                        </div>

                                    </div>
                                    {/* Senha */}
                                    <div className="item-perfil-cadastro">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <label className="label-perfil-cadastro">Senha</label>
                                                {(editting == '' || editting != 'senha') &&
                                                    <a className="suffix-link" onClick={function (e) {
                                                        sefThis.editValue('senha');
                                                    }
                                                    }>Atualizar</a>}
                                                {editting == 'senha' &&
                                                    <a className="suffix-link" onClick={function (e) {
                                                        sefThis.editValue('');
                                                    }
                                                    }>Cancelar</a>}
                                            </div>
                                        </div>
                                        <div className="row item-field-edit">
                                            <div className="col-md-12">
                                                {editting == 'senha' && <input type="text" placeholder='Digite sua senha atual' name="senha" value={senha} onPaste={this.handleChange} onInput={this.handleChange} onChange={this.handleChange} />}
                                                {editting == 'senha' && <input type="text" placeholder='Digite sua nova senha' name="senha" value={novasenha} onPaste={this.handleChange} onInput={this.handleChange} onChange={this.handleChange} />}
                                                {editting == 'senha' && <input type="text" placeholder='Confirme sua nova senha' name="senha" value={confirmacaosenha} onPaste={this.handleChange} onInput={this.handleChange} onChange={this.handleChange} />}

                                                {editting == 'senha' && <a className="page-body-lgpd-btn" onClick={this.handleSubmit}>Atualizar senha</a>}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* cursosrealizados */}
                            <div className="tab-pane fade" id="cursosrealizados" role="tabpanel" aria-labelledby="cursosrealizados-tab">
                                <div className="page-body-lgpd-titulo-inicial">
                                    <b>Direito de Acesso e Correção </b> &nbsp;&nbsp;Art. 18, II e III - LGPD
                                </div>
                            </div>
                            {/* atividadesdoperfil */}
                            <div className="tab-pane fade" id="atividadesdoperfil" role="tabpanel" aria-labelledby="atividadesdoperfil-tab">
                                <div className="page-body-lgpd-titulo-inicial">
                                    <b>Registro das operações de tratamento de dados pessoais </b> &nbsp;&nbsp;Art. 37 - LGPD
                                </div>
                            </div>
                            {/* downloaddedados */}
                            <div className="tab-pane fade" id="downloaddedados" role="tabpanel" aria-labelledby="downloaddedados-tab">
                                <div className="page-body-lgpd-titulo-inicial">
                                    <b>Direito de Portabilidade </b> &nbsp;&nbsp;Art. 18, V - LGPD
                                </div>
                                <div className="page-body-lgpd-content">
                                    <p><b>Deseja fazer o download dos seus dados?</b></p>
                                    <a className="page-body-lgpd-btn">Fazer download de dados</a>
                                </div>
                            </div>
                            {/* excluircadastro */}
                            <div className="tab-pane fade" id="excluircadastro" role="tabpanel" aria-labelledby="excluircadastro-tab">
                                <div className="page-body-lgpd-titulo-inicial">
                                    <b>Direito de Exclusão </b> &nbsp;&nbsp;Art. 18, V - LGPD
                                </div>
                                <div className="page-body-lgpd-content">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><br />
                                    <p><b>Tem certeza que deseja solicitar a exclusão definitiva?</b></p>
                                    <a className="page-body-lgpd-btn">Excluir</a>
                                </div>

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

const connectedLgpdHomePage = connect(mapStateToProps)(LgpdHomePage);
export { connectedLgpdHomePage as LgpdHomePage };