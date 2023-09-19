import { useState } from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import '../src/style/App.css'
import Home from "../views/Home"
import BrowseRecipes from "../views/BrowseRecipes"
import MyRecipes from "../views/MyRecipes"
import RecipeDetails from "../views/RecipeDetails";
import Login from "../views/Login"
import Signup from "../views/Signup"
import Dashboard from "../views/Dashboard"
import ErrorPage from "../views/ErrorPage"
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { RecipeContextProvider } from "./context/RecipeContext";
import { AuthContextProvider } from './context/AuthContext';



function App() {

  const router = createBrowserRouter(
createRoutesFromElements(
  <Route path="/" element={<Root/>} errorElement={<ErrorPage/>}>
    <Route index element={<Home/>}/>
    <Route path="browse" element={<BrowseRecipes/>}/>
    <Route path="browse/:recipeId" element={<RecipeDetails/> }/> 


    <Route path="my-recipes" element={<MyRecipes/>}/>
    <Route path="signup" element={<Signup/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="dashboard" element={<Dashboard/>}/>


  </Route>
)

  )


  return (
    <>

<AuthContextProvider>
    <RecipeContextProvider>
    <RouterProvider router={router}/>
     <Footer/>  
     </RecipeContextProvider>
     </AuthContextProvider>
    </>
  )
}
const Root = () =>{
  return (
    <>
    <NavBar/> 
    <img className="mainLogoTxt" src="./public/logo-txt2.png" alt="omNomNom" />

    <Outlet/>

    </>
  )
}

export default App
