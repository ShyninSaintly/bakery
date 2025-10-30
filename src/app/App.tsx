import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import {LoginPage} from "../pages/LoginPage/LoginPage.tsx";
function App() {
  // const currentUser = sessionStorage.getItem('currentUser');
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage/>}/>
          {/*{currentUser && (*/}
          {/*    <>*/}
          {/*      <Route path="/" element={<MainPage/>}/>*/}
          {/*      <Route path="/desk/:deskId" element={<DeskPage/>}/>*/}
          {/*      <Route path="/map" element={<MapLayout/>}/>*/}
          {/*      <Route path='/createDesk' element={<CreateDesk/>}/>*/}
          {/*      <Route path='/createTask' element={<CreateTask/>}/>*/}
          {/*      <Route path='/edit' element={<Edit/>}/>*/}
          {/*      <Route path='/edit/:deskId' element={<Edit/>}/>*/}
          {/*    </>*/}
          {/*)}*/}
          {/*<Route path="*" element={<Navigate to="/login" replace />} />*/}
        </Routes>
      </Router>
  );
}

export default App
