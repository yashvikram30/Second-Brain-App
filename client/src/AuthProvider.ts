// import { createContext, useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export const AuthContext = createContext({});

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   export const logout = () => {
//     // Clear user from state
//     setUser(null);

//     // Clear any auth tokens from localStorage
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
    
//     // Clear any cookies if you're using them
//     // document.cookie.split(";").forEach((cookie) => {
//     //   document.cookie = cookie
//     //     .replace(/^ +/, "")
//     //     .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
//     // });
    
//     // Redirect to login page
//     navigate('/login');
//   };

//   return (
//     <AuthContext.Provider value={{ user, setUser, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

