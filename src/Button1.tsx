//CLICK EVENTS

function Button1(){
    //ONCLICK

    let count = 0;

    //const handleClick1 = () => console.log("OUCH");
    //const handleClick2 = (name) => console.log(`${name} Stop clicking me`)
    const handleClick = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} times`);
        }
        else{
            console.log(`${name} stop clicking me!`);
        }
    }


    //EVENTS
    const handleClick2 = (e) => e.target.textContent = "OUCH!";

    return(
        <div>
            <button onClick={() => handleClick("Edo")}>Click me!</button>
            <button onDoubleClick={(e) => handleClick2(e)}>Click me2!</button>
        </div>
        
);

}

export default Button1