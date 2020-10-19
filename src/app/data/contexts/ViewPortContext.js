import React, {useContext, useEffect, useState, createContext} from 'react';

export const ViewportContext = createContext();

export const ViewPortProvider = ({children}) => {
  //logic for calculating viewport size

  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  const handleWindowResize = () =>{
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }
  //useEffect to listen for changes in size
    useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  //provider 
  return (
    <ViewportContext.Provider value ={{width, height}}>
      {children}
    </ViewportContext.Provider>
  )
}

//useViewport, custom hook that utilizes context to 
export const useViewport = () => {
  const {width, height} = useContext(ViewportContext)
  return{width, height}
}