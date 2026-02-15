import { Children, useState } from "react"
import Header from "./Header"
import JSX_operations from "./components/JSX_Practise"
import Conditions from "./components/Multi_cond"
import HandleMultipleState from "./components/Multiple_state"
import StateEx from "./components/StateEx"
// import CounterEx from "./components/MultipleState"

import Todo from "./components/Todo"
import ToggleEx from "./components/Toggle_state_if_cond"
import Login, { Profile, Settings } from "./components/UserComponent"
import Props from "./components/props/Props"
import Props2 from "./components/props/Props2"
import Wrapper from "./components/children/Wrapper"
import Events from "./components/events/Events"
import Form from "./components/control_component/Form"
import Skills from "./components/control_component/Skills"
import Gender from "./components/control_component/Gender"
import User from "./components/looping/User"
import Dynamic from "./components/looping/Dynamic"


function App() {

  // working on props 
  // let name="zunaisha";
  // let email="zunnu@gmail.com";
  // let mob=7710881086;

  let obj1 = {
    "name": "zunaisha",
    "email": "zunnu@gmail.com",
    "mob": 7710881086
  };
  let obj2 = {
    "name": "imran",
    "email": "imran@gmail.com",
    "mob": 881086
  };
  let obj3 = {
    "name": "rahul",
    "email": "rahul@gmail.com",
    "mob": 7710
  }

  let collegeNames = ["JSPM", "SINHGAD", "NETIZENS"]

  //dynamic looping 
  const users_data = [
        {
            id: 1,
            name: "imran",
            email: "imran@gmail.com",
            mob: 771088
        },
        {
            id: 2,
            name: "zunnu",
            email: "zunnu@gmail.com",
            mob: 81018
        },
        {
            id: 3,
            name: "nussu",
            email: "nussu@gmail.com",
            mob: 989898
        },
        {
            id: 4,
            name: "vikcy",
            email: "vky@gmail.com",
            mob: 676879
        }
  ]

  return (
    <div>
      {/* looping  */}
      {/* <h2>Looping</h2> */}
      {/* <User /> */}

      <h2>Dynamic Loopgin</h2>
      {/* call jsx function for passing array to component */}
      {
        users_data.map((user)=>{
          return(
          <div key={user.id}>
          <Dynamic data={users_data}/></div>)
          })
      }

      {/* control component */}
      {/* <h1>Control Component</h1> */}
      {/* radio button */}
      {/* <Gender/> */}

      {/* <h2>form</h2>
      <Form /> */}

      {/* <h2>Checkbox</h2>
      <Skills /> */}



      {/* onchange event on text */}
      {/* <h1>onchange event on text </h1>
      <Events /> */}

      {/* children properties used */}
      {/* <h1>children properties used </h1>
      <Wrapper color="red"><h2>Hello From App.jsx Children properties set Red color</h2></Wrapper>
      <Wrapper color="blue"><h2>Hello From App.jsx Children properties set Green color</h2></Wrapper>
      <Wrapper><h2>Hello From App.jsx Children properties With Defult Color</h2></Wrapper> */}

      {/* <Props2 name={collegeNames[0]}/> */}
      {/* <Props2 name={collegeNames[1]}/> */}
      {/* <Props2 name={collegeNames[2]}/>

      <Props user={obj1}/>
      <Props user={obj2}/>
      <Props user={obj3}/> */}


      {/* multiple component in Login Component */}
      {/* <h1>multiple component in Login Component </h1> */}
      {/* <Login />
      <Profile />
      <Settings /> */}

      {/* javascript xml calling  */}
      {/* <JSX_operations /> <br /> */}

      {/*  */}
      {/* <Todo /> */}

      {/* usestate ex */}
      {/* <StateEx /> */}
      {/* <HandleMultipleState/> */}
      {/* <ToggleEx/> */}
      {/* <Conditions /> */}

    </div>
  )
}

export default App