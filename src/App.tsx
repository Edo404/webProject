//typescript app.tsx tutorial di react
import Header from "./Header"
import Footer from "./Footer"
import Food from "./Food"
import Card from "./Card"
import Button from "./Button/Button"
import Student from "./Student"

function App() {
  return(
    <>
      <Header/>
      <Food/>
      <Card/>
      <Card/>
      <Button/>
      <Student name="Spongebob" age={30} isStudent={true}/>
      <Student name="Patrick" age={42} isStudent={false}/>
      <Student name="Squidward" age={50} isStudent={false}/>
      <Student name="Sandy" age={27} isStudent={true}/>
      <Student name="Larry"/>
      <Student/>
      <Footer/>
    </>
  );
}

export default App
