function List(props) {
    return(
        <div>
             <p>
                 {props.text.length % 2 ?( 
                     <b>{props.text}</b>
                 ) : ( <i>{props.text}</i>
                    )
                }  
             </p>
         </div>
    );
}
export default List;