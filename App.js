// import Form from "./components/class-based_components/Form";
// import Counter from "./components/class-based_components/Counter";
// import Courses from "./components/class-based_components/courses";
// // import Navigation, { List } from "./components/class-based_components/Navigation";
// import Calculator from "./components/class-based_components/Calculator";
// import Feeback_form from "./components/form/feeback_form";
// // import Parent from "./components/class-based_components/Conditional-rendering/Parent";
// import Button from "./components/class-based_components/Conditional-rendering/Button";
// import ControlButton from "./components/class-based_components/props/ControlButton";
// import Parent from "./components/class-based_components/props/Parent";
// // import Employeeform from "./components/form/Employeeform";
// function App() {
//   return (
//     <div>
//       <Form />
//       {/* <Navigation/> */}
//       <Courses />
//       {/* <List/> */}
//       <Counter />
//       <Calculator />
//       <Feeback_form/>
//       {/* <Employeeform /> */}
//       {/* <Parent/> */}
//       <Button />
//       <ControlButton />
//       <Parent />


//     </div>
//   );
// }

// export default App;





import React, { useState } from 'react'
import Counter from './components/function_based_components/useStateHook/counter'
import Buttons from './components/function_based_components/props/Buttons'
import Parent from './components/function_based_components/props/Parent'
import Table from './components/function_based_components/List-Rendering/Table'
import EffectComponent from './components/function_based_components/useEffectHook/EffectComponent'
import Post from './components/function_based_components/useEffectHook/Post'
import Todo from './components/function_based_components/Todos/Todo'
import RefComponent from './components/function_based_components/useRefHook/RefComponent'
import CallbackComponent from './components/function_based_components/useCallbackHook/CallbackComponent'
import Screen from './components/function_based_components/Weather_App/Screen'
import CompA from './components/function_based_components/useContextHook/CompA'
import Playlist from './components/function_based_components/Youtube/Playlist'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from "./components/function_based_components/Routing/Login"
import Register from "./components/function_based_components/Routing/Register";
import Home from "./components/function_based_components/Routing/Home";
import About from "./components/function_based_components/Routing/About";
import Courses from "./components/function_based_components/Routing/Courses";
import NotFound from "./components/function_based_components/Routing/NotFound";
import FrontendCourse from './components/function_based_components/Routing/FrontendCourses'
import BackendCourse from './components/function_based_components/Routing/BackendCourses'
// import"./components/function_based_components/Routing/Routing.css"
const App = () => {
  // const [count,setCount] =useState(0);
  // const [msg,setMsg] =useState('Hello');
  return (
    <>
      {/* <CompA /> */}
      {/* count ={count} msg={msg} setCount={setCount}/> */}
      {/* <Counter /> */}
      {/* <Buttons /> */}
      {/* <Parent /> */}
      {/* <Table /> */}
      {/* <EffectComponent /> */}
      {/* <Post /> */}
      {/* <Todo /> */}
      {/* <RefComponent /> */}
      {/* <CallbackComponent /> */}
      {/* <Screen /> */}
      {/* <Playlist /> */}
      {/* <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/courses' element={<Courses />}>
            <Route path='frontend' element={<FrontendCourse />} />
            <Route path='backend' element={<BackendCourse />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router> */}
      <Playlist />
    </>
  )
}

export default App