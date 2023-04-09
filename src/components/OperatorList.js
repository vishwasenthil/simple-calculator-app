function OperatorList() {
    let btnNames = [`+`, `-`, `*`, `/`, `c`, `ac`];
    return(
        <div>
            {btnNames.map(name=>{
                return <button>{name}</button>
            })}
        </div>
    );
}

export default OperatorList; 