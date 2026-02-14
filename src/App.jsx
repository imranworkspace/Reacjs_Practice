import Header from "./Header"
import JSX_operations from "./components/JSX_Practise"
import Conditions from "./components/Multi_cond"
import HandleMultipleState from "./components/Multiple_state"
import StateEx from "./components/StateEx"
// import CounterEx from "./components/MultipleState"

import Todo from "./components/Todo"
import ToggleEx from "./components/Toggle_state_if_cond"
import Login,{Profile,Settings} from "./components/UserComponent"

function App(){
  return(
    <div>
      {/* multiple component in Login Component */}
      {/* <Login />
      <Profile />
      <Settings /> */}

      {/* javascript xml calling  */}
      <JSX_operations /> <br />
      
      {/*  */}
      {/* <Todo /> */}
    
      {/* usestate ex */}
      {/* <StateEx /> */}
      {/* <HandleMultipleState/> */}
      {/* <ToggleEx/> */}
      <Conditions />

    </div>
  )
}

export default App