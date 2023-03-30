import React, { useEffect } from 'react';
import './App.css';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Navbar from './components/Navbar';
import Darkmode from './utils/DarkMode';
import { useLocation, useNavigate } from 'react-router';
import { Routes, Route } from 'react-router-dom';
import ComplaintForm from './components/ComplaintForm';
import InboxAdmin from './Pages/inbox/InboxAdmin';
import InboxSupervisor from './Pages/inbox/InboxSupervisor';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllComplaints } from './slices/complaintSlice';
import HistoryAdmin from './Pages/History/HistoryAdmin';
import HistoryProf from './Pages/History/HistoryProf';
import HistorySupervisor from './Pages/History/HistorySupervisor';
import Logout from './components/Logout';
import Landing from './components/Landing';
import ComplaintDetailSupervisor from './components/ComplaintDetailSupervisor';
import ComplaintDetail from './components/ComplaintDetail';
import UserView from './Pages/admin panel/UsersView';
import User from './Pages/admin panel/User';
import UserAdd from './Pages/admin panel/UserAdd';
const App=()=> {
  const { role } = useSelector((state) => state.user);
 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllComplaints());
    (!role)? navigate('/login') : ""
  }, [])
  const location = useLocation();
  return (
    <div className="App">
      <Darkmode>
     {(location.pathname==='/login')?"":<Navbar/>}
       <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/users' element={<UserView/>}/>
        {
          (role=='Admin') ?   (<Route path='/inbox' element={<InboxAdmin/>}/>) :   <Route path='/inbox' element={<InboxSupervisor/>}/>
        }
        {
          (role=='Admin') ?   (<Route path='/usersview' element={<UserView/>}/>) :   ""
        }
        {
          (role=='Admin') ?   (<Route path='/users/:username' element={<User/>}/>) :   ""
        }
        {
          (role=='Admin') ?   (<Route path='/useradd' element={<UserAdd/>}/>) :   ""
        }
        {
           (role=='Admin') ? (<Route path='/history' element={ <HistoryAdmin/>} />) :" "
        }
        {
           (role=='Professor') ? (<Route path='/history' element={ <HistoryProf/>} />) :" "
        }
        {
           (role=='Supervisor') ? (<Route path='/history' element={ <HistorySupervisor/>} />) :" "
        }
          {(role==='Supervisor') ? <Route path='/detail/:id' element={<ComplaintDetailSupervisor/>}/> : <Route path='/detail/:id' element={<ComplaintDetail/>}/>}
        
        <Route path='/complaint' element={<ComplaintForm/>}/>
        <Route path='/logout' element={<Logout/>}/>
       </Routes>
      </Darkmode>
    </div>
  )
}

export default App;