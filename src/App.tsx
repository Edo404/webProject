//typescript app.tsx tutorial di react
import Header from "./Header"
import Footer from "./Footer"
import Food from "./Food"
import Card from "./Card"
import Button from "./Button/Button"
import Student from "./Student"
import UserGreeting from "./UserGreeting"
import List from "./List"
import Button1 from "./Button1"
import ProfilePicture from "./ProfilePicture"
import MyComponent from "./MyComponent"
import Counter from "./Counter"
import MyComponent1 from "./MyComponent1"
import ColorPicker from "./ColorPicker"
import MyComponent2 from "./MyComponent2"
import MyComponent3 from "./MyComponent3"
import MyComponent4 from "./MyComponent4"


function App() {

  const fruits = [{id: 1, name: "apple", calories: 95}, 
                  {id: 2, name: "orange", calories: 45}, 
                  {id: 3, name: "banana", calories: 105}, 
                  {id: 4, name: "coconut", calories: 159}, 
                  {id: 5, name: "pineapple", calories: 37}]
  const vegetables = [{id: 6, name: "potatoes", calories: 110}, 
                      {id: 7, name: "celery", calories: 15}, 
                      {id: 8, name: "carrots", calories: 25}, 
                      {id: 9, name: "corn", calories: 63}, 
                      {id: 10, name: "broccoli", calories: 50}]
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
      <UserGreeting isLoggedIn={true} username="Edoardone"/>
      <UserGreeting isLoggedIn={false} username="Edoardone"/>
      {fruits.length > 0 ? <List items={fruits} category="Fruits"/> : null}
      {vegetables.length > 0 ? <List items={vegetables} category="Vegetables"/> : null}
      <Button1/>
      <ProfilePicture/>
      <MyComponent/>
      <Counter/>
      <MyComponent1/>
      <ColorPicker/>
      <MyComponent2/>
      <MyComponent3/>
      <MyComponent4/>
      <Footer/>
    </>
  );
}

export default App
