import MyButton from "./MyButton.jsx";
import MyList from "./MyList.jsx";

export default function App(){
  return(
    <div>
      <h1>Welcome to my React App</h1>
      <MyButton isSpecial={true} text="Button 1"/>
      <MyButton isSpecial={false} text="Button 2"/>
      <MyList/>
    </div>
  );
}