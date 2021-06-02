import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import { solucaoActions } from '../_actions';

import { estadoActions } from '../_actions';
import { cidadeActions } from '../_actions';
import { noticiaActions } from '../_actions';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        estadoSelected: '',
        cidadeselected: '',
        estadoSelectedModal: '',
        cidadeselectedModal: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeEstado = this.handleChangeEstado.bind(this);
    this.handleChangeEstadoModal = this.handleChangeEstadoModal.bind(this);
    
  }
  
    componentDidMount() {
        // this.props.dispatch(userActions.getAll());
        this.props.dispatch(solucaoActions.getAllParent());
        this.props.dispatch(estadoActions.getAll());
        this.props.dispatch(noticiaActions.getAll());


    }

    handleChangeEstado(e) {
      const { name, value } = e.target;
      console.log("handleChange",name,value);
      this.setState({ [name]: value });

      this.props.dispatch(cidadeActions.GetCidadesByUF(value));

  }



  
      handleChangeEstadoModal(e) {
        const { name, value } = e.target;
        console.log("handleChange",name,value);
        this.setState({ [name]: value });

        this.props.dispatch(cidadeActions.GetCidadesByUFModal(value));

    }

    handleChange(e) {
      const { name, value } = e.target;
      console.log("handleChange",name,value);
      this.setState({ [name]: value });
  }

    render() {
        const { user, solucaos,estados,cidades,cidadesmodais,noticias } = this.props;
        const { cidadeselected,estadoSelected,estadoSelectedModal,cidadeselectedModal } = this.state;

        var root = document.documentElement;
        const lists = document.querySelectorAll('.hs-solucao-home');
        lists.forEach(el => {
          const listItems = el.querySelectorAll('li');
          const n = el.children.length;
          el.style.setProperty('--total', n);
        });

    if(solucaos.items){
        var root = document.documentElement;
            const lists = document.querySelectorAll('.row-solucoes .hs-solucao-home ');
            lists.forEach(el => {
              const listItems = el.querySelectorAll('li');
              const n = el.children.length;
              el.style.setProperty('--total', solucaos.items.length);
            });
          }

          if(noticias.items){
            const lists = document.querySelectorAll('.div-noticias .hs-solucao-home ');
            lists.forEach(el => {
              const listItems = el.querySelectorAll('li');
              const n = el.children.length;
              el.style.setProperty('--total', noticias.items.length);
            });

          }

        return (
            <div >
              <div className="row" >
              <div className="col-md-12 banner-row">

              <div className="carousel slide" id="carousel-399971">
                <ol className="carousel-indicators">
                  <li data-slide-to={0} data-target="#carousel-399971" className="active">
                  </li>
                  <li data-slide-to={1} data-target="#carousel-399971">
                  </li>
                  <li data-slide-to={2} data-target="#carousel-399971">
                  </li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" alt="Carousel Bootstrap First" src="../public/images/banner1.png" />
                    <div className="carousel-caption">
                      <h4>
                      Lorem Ipsum is simply dummy text of the printing.                        
                                              </h4>
                      <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,                        </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" alt="Carousel Bootstrap Second" src="../public/images/banner2.png" />
                    <div className="carousel-caption">
                      <h4>
                      Lorem Ipsum is simply dummy text of the printing.                        </h4>
                      <p>
                        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" alt="Carousel Bootstrap Third" src="../public/images/banner3.png" />
                    <div className="carousel-caption">
                      <h4>
                        Third Thumbnail label
                      </h4>
                      <p>
                        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
                      </p>
                    </div>
                  </div>
                  
                </div> <a className="carousel-control-prev" href="#carousel-399971" data-slide="prev"><span className="carousel-control-prev-icon" /> <span className="sr-only">Previous</span></a> <a className="carousel-control-next" href="#carousel-399971" data-slide="next"><span className="carousel-control-next-icon" /> <span className="sr-only">Next</span></a>
              </div>
                </div>
                </div>
            
            <div className="row row-solucoes" >
            <div className="col-md-12">

              <h4 style={{marginLeft: '3%'}}>Nossas Soluções</h4>
              {solucaos && solucaos.error && <span className="text-danger">ERROR: {solucaos.error}</span>}

            <div className="div-home-scroll-tabs">
              <div className="hs-solucao-home" style={{padding: '3%'}}>


              {solucaos && solucaos.items && solucaos.items.map((solucao)=> 
                <div className="" key={solucao.menu}>
                <div className="card">

{solucao.imagePath && 
                      <img className="card-img-top" src="..." alt="Card image cap" src={`https://api.datamace.com.br/StaticFiles/images/solucoes/${solucao.imagePath}`}/>

}
{!solucao.imagePath &&             <img className="card-img-top" src="..." alt="Card image cap" src="../public/images/solutions.svg"/>
    }
                  <div className="card-body">
                    <h5 className="card-title">{solucao.slug}</h5>
                    <p className="card-text">{solucao.titulo}</p>
                    <a href={solucao.menu}  className="card-link">Saiba mais</a>
                  </div>
                </div>
                </div>


              )}
              </div>
              </div>
              </div>
            </div>
            <div className="row div-seja-parceiro" data-toggle="modal" data-target="#sejaparceiro">
              <div className="col-md-12">
                <button type="button" className="btn btn-block btn-info" >
                  Seja um parceiro Datamace
                </button>
              </div>
            </div>
            <div className="row div-sobre-grupo-datamace">
              <div className="col-md-6 div-sobre-grupo-datamace-text">
                <h2>
                O Grupo Datamace
                </h2>
                <p>
                O Grupo Datamace é lider nacional em Human Capital Management Solutions, pois apresenta soluções customizadas e inovadoras para todos os segmentos, além do alcance nacional e foco na gestão de recursos humanos               
                 </p>
               
              </div>
              <div className="col-md-6 div-sobre-grupo-datamace-img">
                <img alt="O grupo datamace" src="../public/images/ogrupodatamace.jpg" className="rounded" />
              </div>
            </div>
            <div className="row div-e-social">
              <div className="col-md-6">
                <h3>
                Saiba como atender as exigências do eSocial.
                </h3>
                <a type="button" className="btn btn-success"  href="http://www.guiaesocial.com.br/">
                Acessar eSocial
                </a>
              </div>
              
            </div>
            <div className="row div-noticias">
              <div className="div-noticias-header">
                <h4>Últimas notícias</h4>
                <a href="/noticias">Ver todas as notícias</a>
              </div>

              <div className="col-md-12">
                <div className="row">

                <div className="div-home-scroll-tabs">
              <div className="hs-solucao-home" >

                {noticias.items  && noticias.items.map((noticia)=>

                  <div className="div-item-noticias" key={noticia.notId}>
                  <div className="card">
                  {!noticia.notImagem  &&  <img className="card-img-top" src="../public/images/noticia-1.png" />}
                  {noticia.notImagem  &&  <img src={`https://api.datamace.com.br/StaticFiles/images/noticias/${noticia.notImagem}`}/>}

                    <div className="card-block">
                      <h5 className="card-title">
                      Notícia
                      </h5>
                      <p className="card-text">
                      {noticia.notTitulo}                      </p>
                      <div className="card-noticias-a">
                      <a href={`/noticia-read?notId=${noticia.notId}`}>Saiba mais</a>

                      </div>
                    </div>
                  </div>
                  </div>


                        )}


                </div>
                </div>
                </div>
            </div>
            </div>

                <div className="row div-entre-em-contato" >
                  <div className="col-md-6 div-entre-em-contato-text">
                    <p>
                    Entre em contato e receba todas as informações sobre a Datamace.                    </p>
                  </div>
                  <div className="col-md-6">
                    <form role="form">
                      <div className="form-group">
                       
                        <input type="text" name="nome"  id="nome" placeholder="Digite seu nome" />
                      </div>

                      <div className="form-group form-select-div">
                          <div className="form-group-item" style={{marginRight: '3%'}}>

                          <select name="estadoSelected" id="estadoSelected" onChange={this.handleChangeEstado} value={estadoSelected}>
                            <option disabled value="">Selecione o estado</option>

                            {estados && estados.items && estados.items.map((estado)=> 
                                  <option value={estado.uf} key={estado.uf}>{estado.nome}</option>
                            
                            )}
                          </select>
                        </div>
                        <div className="form-group-item">

                          <select name="cidadeselected" id="cidadeselected" onChange={this.handleChange} value={cidadeselected}>
                          <option disabled value="">Selecione a cidade</option>
                          {estadoSelected && cidades && cidades.items && cidades.items.map((cidade)=> 
                                  <option value={cidade.nome} key={cidade.nome}>{cidade.nome}</option>
                            
                            )}
                          </select>
                          </div>
                     </div>

                      <div className="form-group">
                       <input type="text" name="empresa"  id="empresa" placeholder="Digite o nome de sua empresa" />
                     </div>


                     <div className="form-group form-select-div">
                          <div className="form-group-item" style={{marginRight: '3%'}}>

                          <select name="qtdefuncionarios" id="qtdefuncionarios" onChange={this.handleChange} value="">
                            <option disabled value="">Quantidade de funcionários</option>
                          </select>
                        </div>
                        <div className="form-group-item">

                          <select name="cargo" id="cargo" onChange={this.handleChange} value="">
                          <option disabled value="">Selecione seu cargo</option>
                          </select>
                          </div>
                     </div>


                     <div className="form-group">
                       
                       <input type="email" name="email"  id="email" placeholder="Digite seu e-mail" />
                     </div>
                     <div className="form-group">
                       
                       <input type="text" name="info"  id="info" placeholder="Informações adicionais" />
                     </div>
                     <div className="form-divs">
                     <a>
                        Limpar dados
                      </a>
                      <button type="submit" className="btn btn-primary">
                        Enviar
                      </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="modal fade" id="sejaparceiro" tabIndex={-1} role="dialog" aria-labelledby="sejaparceiro" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" >Seja um parceiro Datamace e saiba como ampliar seus negócios e fidelizar seus clientes.</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                    <form role="form">
                      <div className="form-group">
                       
                        <input type="text" name="nome"  id="nome" placeholder="Digite seu nome" />
                      </div>
                      <div className="form-group">
                       <input type="text" name="empresa"  id="empresa" placeholder="Digite o nome da empresa" />
                     </div>

                      <div className="form-group form-select-div">
                          <div className="form-group-item" style={{marginRight: '3%'}}>

                          <select name="estadoSelectedModal" id="estadoSelectedModal" onChange={this.handleChangeEstadoModal} value={estadoSelectedModal}>
                            <option disabled value="">Selecione o estado</option>

                            {estados && estados.items && estados.items.map((estado)=> 
                                  <option value={estado.uf} key={estado.uf}>{estado.nome}</option>
                            
                            )}
                          </select>

                        </div>
                        <div className="form-group-item">

                        <select name="cidadeselectedModal" id="cidadeselectedModal" onChange={this.handleChange} value={cidadeselectedModal}>
                          <option disabled value="">Selecione a cidade</option>
                          {estadoSelectedModal && cidadesmodais && cidadesmodais.items && cidadesmodais.items.map((cidade)=> 
                                  <option value={cidade.nome} key={cidade.nome}>{cidade.nome}</option>
                            
                            )}
                          </select>
                          </div>
                     </div>

                      


                    <div className="form-group">
                       
                       <input type="email" name="email"  id="email" placeholder="Digite seu e-mail" />
                     </div>
                     <div className="form-group">
                       
                       <input type="text" name="telefone"  id="telefone" placeholder="Digite seu telefone para contato" />
                     </div>
                     <div className="form-group">
                       
                       <input type="text" name="info"  id="info" placeholder="Informações adicionais" />
                     </div>
                    
                    </form>
                    </div>
                    <div className="modal-footer">
                      <a >Limpar dados</a>
                      <button type="button" className="btn btn-primary">Enviar</button>
                    </div>
                  </div>
                </div>
              </div>

          </div>
          
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication,solucaos,cidades,estados,cidadesmodais,noticias } = state;
    const { user } = authentication;
    return {
        user,
        users,
        solucaos,
        estados,cidades,cidadesmodais,noticias
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };