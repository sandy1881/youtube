import React,{createContext, useState, useEffect} from "react";
import {fetchDataFromApi} from "../utils/Api";


export const Context =createContext();
const AppContext =(props)=> {
  const [loading, setLoading]=useState(false);
  const [searchResults, setSearchResults]=useState([]);
  const [selectedCategory, setSelectedCategory]=useState("New");
  const [mobileMenu, setMobileMenu]=useState(false);
 useEffect (()=>{
  fetchSelectedCategoryData(selectedCategory)


 },[selectedCategory])

const fetchSelectedCategoryData = (query)=>{
  setLoading(true)
  fetchDataFromApi(`search/?q=${query}`).then(({contents})=>{
    console.log(contents)
    setSearchResults(contents)
    setLoading(false)
  })

}

 return(
  <Context.Provider value={{
    loading,
    setLoading,
    searchResults,
    setSelectedCategory,
    selectedCategory,
    mobileMenu,
    setMobileMenu}}>
    {props.children}
  </Context.Provider>
 )
};
export default AppContext;