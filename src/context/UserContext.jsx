import React, { createContext, useState, useEffect, useContext } from 'react';


const UserContext = createContext();


export const UserProvider = ({ children }) => {
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

const fetchUsers = async () => {
try {
const response = await fetch('https://672d05eefd89797156411fcf.mockapi.io/users/');
const data = await response.json();
setUsers(data);
} catch (error) {
setError(error);
} finally {
setLoading(false);
}
};


useEffect(() => {
fetchUsers();
}, []);

return (
<UserContext.Provider value={{ users, loading, error }}>
{children}
</UserContext.Provider>
);
};

export const useUserContext = () => useContext(UserContext);