import "./css/OperatorList.css";

function OperatorList() {
    let btnNames = [`+`, `-`, `*`, `/`, `c`, `ac`];
    return(
        <div className="operatorContainer">
            {btnNames.map(name=>{
                return <button>{name}</button>
            })}
        </div>
    );
}

export default OperatorList; 