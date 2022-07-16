export default function Usuarios(){
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
        <Usuario
          img ="assets/img/catanacomics.svg"
          strong ="catanacomics"
          nome ="Catana"
          />
    )
}