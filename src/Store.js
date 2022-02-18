import React, { useState } from 'react'; 

const initState = {
    dob: '',
    firstName: '',
    lastName: '',
    id: '',
    zip: '',
}

export const Context = React.createContext();

const Store = ({ children }) => {
    const [state, setState] = useState(initState);

    return (
        <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    )
}
export default Store;