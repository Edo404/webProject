//CONDITIONAL RENDERING
//Allows you to control what gets renderes in your application based on certain conditions
//(show, hide, or change components)

function UserGreeting(props){

    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>
    const loginPrompt    = <h2 className="login-prompt">Please logIn to continue</h2>
    if(props.isLoggedIn){
        return welcomeMessage
    }
    else{
        return loginPrompt
    }
}

export default UserGreeting