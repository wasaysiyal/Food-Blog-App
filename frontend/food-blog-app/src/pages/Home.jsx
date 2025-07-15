import pizza from '../assets/pizza.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RecipeItems from '../components/RecipeItems'
import spaghetti from '../assets/spaghetti.png'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import Modal from '../components/Modal'
import InputForm from '../components/InputForm'
import AddFoodRecipe from './AddFoodRecipe'

export default function Home(){
  const navigate=useNavigate()
      const [isOpen, setIsOpen] = useState(false)

    const addRecipe = () => {
        let token = localStorage.getItem("token")
        if (token)
            navigate("/addRecipe")
        else {
            setIsOpen(true)
        }
    }

  return(
    <>
    <section className='home'>
        <div className='left'>
            <h1> Food Recipe App</h1>
            <h5>Welcome to Food Recipe Blog App – Your Kitchen Companion!

Discover a world of flavors right at your fingertips. Whether you're a seasoned chef or just starting out, our recipe-sharing community is the perfect place to find and share delicious meals. Explore thousands of homemade recipes from people just like you.

✨ What You Can Do:

👨‍🍳 Browse recipes from around the world

📝 Share your own cooking creations

❤️ Save and like your favorite dishes

🔍 Search by ingredients, cuisines, or categories

Start your cooking journey today — because great food is better when it's shared!</h5>
            <button onClick={addRecipe}>Share your Recipe</button>
        </div>
        <div className='right'>
            <img src={spaghetti} width="320px" height="320px"></img>
        </div>
    </section>

       { (isOpen) && <Modal onClose={()=>setIsOpen(false)}><InputForm setIsOpen={()=>setIsOpen(false)}/></Modal>}
    <div className='recipe'>
      <RecipeItems/>
    </div>
    </>
  )
}