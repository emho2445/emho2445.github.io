export default function Card({children, padding}){
    
    let myClassName = 'small-padding';
    if(padding == "large"){
        myClassName = 'large-padding'
    }
    
    return(
        <div className={myClassName}>
            {children}
        </div>
    );

}