import { createContext, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({children}) {
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [id, setId] = useState(null);
    return (
        <UserContext.Provider value={{username, setUsername, email, setEmail, id, setId}}>
            {children}
        </UserContext.Provider>
    );
}