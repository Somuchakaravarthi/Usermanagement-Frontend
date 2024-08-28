// import React from 'react';
// import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
// import Signup from './components/Signup';
// import Login from './components/Login';
// import UserList from './components/UserList';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { AuthProvider } from './context/AuthContext';
// import ProtectedRoute from './components/ProtectedRoute';
// function App() {
//   return (
//      <AuthProvider>
//     <Router>
//             <div>
//                 <Routes>
//                   <Route path="/" element={<Navigate to="/login" />} />
//                     <Route path="/signup" element={<Signup />} />
//                     <Route path="/login" element={<Login />} />
//                       <ProtectedRoute path="/users" element={<UserList />} />
//                 </Routes>
//                   <ToastContainer />
//             </div>
//         </Router>
//         </AuthProvider>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles

import Signup from './components/Signup';
import Login from './components/Login';
import UserList from './components/UserList';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login />} />
                        <Route
                            path="/users"
                            element={<ProtectedRoute element={<UserList />} />}
                        />
                        <Route path="/" element={<Navigate to="/login" />} />
                    </Routes>
                    <ToastContainer />
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;

