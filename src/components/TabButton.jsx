export default function TabButton({children, onSelect, isSelected}){
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