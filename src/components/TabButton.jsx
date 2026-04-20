export default function TabButton({children, isSelected, onSelect}){
     function name(params) {
     if(params) {
        console.log("hay params")

     }   
    }
    
    return (
    <li>
        <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
    </li>
);

}