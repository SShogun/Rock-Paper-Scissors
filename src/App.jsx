import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import ConfettiExplosion from 'react-confetti-explosion';

//* MUI imports
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

//* Font Awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHand, faHandRock } from '@fortawesome/free-regular-svg-icons'
import { faHandScissors } from '@fortawesome/free-regular-svg-icons'
import { faHandBackFist } from '@fortawesome/free-regular-svg-icons'

const paper = <FontAwesomeIcon icon={faHand} />
const scissors = <FontAwesomeIcon icon={faHandScissors} />
const rock = <FontAwesomeIcon icon={faHandBackFist} />


function App() {
  const [userDisplay, setUserDisplay] = useState(null)
  const [computerDisplay, setComputerDisplay] = useState(null)
  const [result, setResult] = useState("")
  const [isExploding, setIsExploding] = React.useState(false);


  const icons = [rock, scissors, paper]
  function roll() {
      const userPick = Math.floor(Math.random() * icons.length)
      const computerPick = Math.floor(Math.random() * icons.length)
      setUserDisplay(icons[userPick])
      setComputerDisplay(icons[computerPick])
      
      if(userPick === 0 && computerPick=== 1 || userPick === 1 && computerPick=== 2 || userPick === 2 && computerPick=== 0) {
        setResult("You Win!")
        setIsExploding(true)
        setTimeout(() => {
          setIsExploding(false);
        }, 2000);
      }else {
        setResult("You Lose!")
      }
    }

  return (
    <div className='container'>
        <Paper elevation={5} sx={{backgroundColor: '#d2d2d2', width: '50vw', height: '65vh' }}>

          <Box className='flex justify-between marker:px-10 w-full h-4/6 gap-10 py-6 px-10'>
            <span>
              <Box className='w-32 text-9xl h-fit mb-5'>
                {userDisplay}
              </Box>
              <p className='text-2xl font-semibold fixed'>User Pick</p>
            </span>
            <span>
              <Box className=' w-32 text-9xl h-fit mb-5'>
                {computerDisplay}
              </Box>
              <p className='text-2xl font-semibold'>Computer <br /> Pick</p>
            </span>
          </Box>
          <section className='flex justify-center'>
            {isExploding && <ConfettiExplosion />}
          </section>

          <Box className='mt-5' >
            <Button variant="contained" color={result === "You Win!" ? 'success' : 'primary'} onClick={roll} className='h-12 w-32 text-lg'>{result === "You Win!" ? 'Re-Roll' : 'Roll'}</Button>
            <p className='text-5xl mt-2 font-semibold backdrop-blur-sm'>{result}</p>
          </Box>
        </Paper>
    </div>
  )
}

export default App
