import {  } from 'react'
import './App.css'
import { SignInButton, SignOutButton } from '@clerk/clerk-react'

function App() {
 

  return (
    <>
     <h1>Welcome to the App</h1>
     <SignedOut> 
      
     <SignInButton mode="modal"/>
     <button className="btn">Sign Up</button>
     <SignInButton/>

     </SignedOut> 

     <SignedIn>
      <SignOutButton/>
      </SignedIn>
     
     <UserButton/>
    </>
  );
}

export default App
