// import React from 'react'
// import Navbar from './components/Navbar';
// import {BrowserRouter  , Routes , Route} from "react-router-dom";
// import Dashboard from './pages/Dashboard';
// import Classroom from './pages/Classroom';
// import Assessments from './pages/Assessments';
// import Store from './pages/Store';
// import Calender from './pages/Calender';
// import News from './pages/News';
// import Blog from './pages/Blog';
// import Profile from './pages/Profile';
// import PageNotFound from './pages/PageNotFound';
// import MyAccount from './pages/MyAccount';
// import MySettings from './pages/MySettings';
// const App = () => {
//   return (
//     <BrowserRouter>
//         <Navbar/>
//         <Routes>
//             <Route path='/' element={<Dashboard/>}/>
//             <Route path='/classroom' element={<Classroom/>}/>
//             <Route path='/assessment' element={<Assessments/>}/>
//             <Route path='/store' element={<Store/>}/>
//             <Route path='/calender' element={<Calender/>}/>
//             <Route path='/news' element={<News/>}/>
//             <Route path='/blog' element={<Blog/>}/>
//             <Route path='/profile' element={<Profile/>}> 

//                <Route  path='/profile/myaccount' element={<MyAccount/>}/>
//                <Route  path='/profile/mysettings' element={<MySettings/>}/>
//              </Route>       
//             <Route path='*' element={<PageNotFound/>}/>
//         </Routes>
//     </BrowserRouter>
//   )
// }

// export default App
// import React from 'react'
// import {BrowserRouter,Routes,Route} from "react-router-dom"
// import Home from './crudcomponents/Home';


// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route
//       </Routes>
//     </BrowserRouter>
//     <div>App</div>
//   )
// }

// export default App
import React from "react";
import Card from "./Card"; // Import the Card component

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#f5f5f5" }}>
      <Card />
    </div>
  );
}

export default App;
