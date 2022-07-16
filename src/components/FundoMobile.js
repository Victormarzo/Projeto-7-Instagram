export default function FundoMobile(){
    function Icon(props){
        return(
            <ion-icon name={props.name}></ion-icon> 
        )
    }
    const icons=[
        {name:"home"},
        {name:"search-outline"},
        {name:"add-circle-outline"},
        {name:"heart-outline"},
        {name:"person-outline"}
    ]
    
    
    return(
        <div class="fundo-mobile">
        {icons.map(icon=><Icon name={icon.name}/>)}
      </div>
    )
}