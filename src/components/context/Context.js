import React, { createContext, useState } from 'react';

const DataContext = createContext();

const Context = ({ children }) => {
  const [openCart, setOpenCart] = useState(false)
  return <DataContext.Provider value={ 'test' }>{children}</DataContext.Provider>;
};

export default Context;
