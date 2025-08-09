import React from 'react'

export const DataContext = React.createContext()

const UserContext = ({children}) => {
    const username = "Sam Smith";
  return (
    
        <DataContext.Provider value={username}>
            {children}

        </DataContext.Provider>
        
  
  )
}

export default UserContext