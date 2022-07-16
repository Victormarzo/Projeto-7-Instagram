export default function Sidebar(){
  function Sugestao(props){
    return(
      <div class="sugestao">
        <div class="usuario">
          <img src={props.img} />
          <div class="texto">
            <div class="nome">{props.nome}</div>
            <div class="razao">{props.razao}</div>
            </div>
        </div>
        <div class="seguir">Seguir</div>
      </div>
    )
  }  
  const sugestoes = [
    {img:"assets/img/bad.vibes.memes.svg",
    nome:"bad.vibes.memes",
    razao:"Segue você"},
    {img:"assets/img/chibirdart.svg",
    nome:"chibirdart",
    razao:"Segue você"},
    {img:"assets/img/razoesparaacreditar.svg",
    nome:"razoesparaacreditar",
    razao:"Novo no Instagram"},
    {img:"assets/img/adorable_animals.svg",
    nome:"adorable_animals",
    razao:"Segue você"},
    {img:"assets/img/smallcutecats.svg",
    nome:"smallcutecats",
    razao:"Segue você"}
  ];
  function Usuario(props){
    return(
      <div class="usuario">
            <img src={props.img} />
            <div class="texto">
              <strong>{props.strong}</strong>
              {props.nome}
            </div>
      </div>
    )
  }
  return(
        <div class="sidebar">
          
          <Usuario
          img ="assets/img/catanacomics.svg"
          strong ="catanacomics"
          nome ="Catana"
          />

          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>
            {  sugestoes.map(sugestao=><Sugestao 
              img={sugestao.img} 
              nome={sugestao.nome} 
              razao={sugestao.razao}/>)
            }
          </div>

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
    )
}
