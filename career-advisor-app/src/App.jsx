import React from 'react'
import { useState } from 'react'
import './App.css'

function App() { 
   const [step, setStep] = useState(1); 
   const [username, setUsername] = useState(""); 
   const [password, setPassword] = useState(""); 
   const [confirmPassword, setConfirmPassword] = useState(""); 
   const [interest, setInterest] = useState(""); 
   const [aptitude, setAptitude] = useState(""); 
   const [dreamCareer, setDreamCareer] = useState("");

const nextStep = () => setStep((prev) => prev + 1);
const prevStep = () => setStep((prev) => prev - 1);



  return (
    <>
       <div className="app-container"> {/* Step 1: Create Account */} {step === 1 && ( <div className="card"> <div className="brand">Career Advisor</div> <h2>Create Account</h2> <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /> <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /> <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /> <p className="link">Already have an account? Login</p> <button onClick={nextStep}>Next</button> </div> )}

{/* Step 2: Welcome */}
  {step === 2 && (
    <div className="card">
      <h2>Welcome, {username} 👋</h2>
      <div className="visual">Formal Work Setting Placeholder</div>
      <div className="grid-3">
        <div className="box">Know Yourself</div>
        <div className="box">Inform Yourself</div>
        <div className="box">Plan Yourself</div>
      </div>
      <div className='button-row'>
        <button onClick={prevStep}>Back</button>
        <button onClick={nextStep}>Next</button>
      </div>
    </div>
  )}

  {/* Step 3: Inform Career Choices */}
  {step === 3 && (
    <div className="card">
      <h2>Inform Career Choices</h2>
      <p>Ready to go 🚀</p>
      <div className="grid-1">
        <div className="box">Discover your career interests</div>
        <div className="box">Talk to our advisor</div>
        <div className="box">Explore your dream</div>
      </div>
      <div className='button-row'>
        <button onClick={prevStep}>Back</button>
        <button onClick={nextStep}>Next</button>
      </div>
    </div>
  )}

  {/* Step 4: Instant Career Clarity */}
  {step === 4 && (
    <div className="card">
      <h2>Instant Career Clarity</h2>
      <p>Still doubting? Get clarification here 🔍</p>
      <input
        type="text"
        placeholder="Your Interests"
        value={interest}
        onChange={(e) => setInterest(e.target.value)}
      />
      <input
        type="text"
        placeholder="Your Aptitude"
        value={aptitude}
        onChange={(e) => setAptitude(e.target.value)}
      />
      <input
        type="text"
        placeholder="Your Dream Career"
        value={dreamCareer}
        onChange={(e) => setDreamCareer(e.target.value)}
      />
      <div className="ai-box">
        <p><strong>AI Suggestion:</strong></p>
        {interest || aptitude || dreamCareer ? (
          <p>
            Based on your interests in <b>{interest}</b>, aptitude in <b>{aptitude}</b>,
            and your dream career as <b>{dreamCareer}</b>, we recommend exploring careers in related fields 🎯.
          </p>
        ) : (
          <p>Fill in the fields above to get AI advice.</p>
        )}
      </div>
       <div className='button-row'>
         <button onClick={prevStep}>Back</button>
         <button onClick={nextStep}>Next</button>
      </div>
    </div>
  )}

  {/* Step 5: Premium Features */}
  {step === 5 && (
    <div className="card">
      <h2>Premium User Features</h2>
      <div className="grid-1">
        <div className="box flex-between"><span>CV Revamp</span><span>₦5</span></div>
        <div className="box flex-between"><span>Seminar & Webinar</span><span>₦8</span></div>
        <div className="box flex-between"><span>Job Opportunity</span><span>₦32</span></div>
        <div className="box flex-between"><span>Career Follow-up</span><span>₦25</span></div>
      </div>
      <button className="premium-btn">Upgrade to Premium</button>
       <button onClick={prevStep}>Back</button>
    </div>
  )}
</div>

    </>
  )
}

export default App
