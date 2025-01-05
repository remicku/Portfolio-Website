import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    // Cleanup function to avoid errors
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am a very ambitious software developer with a unique background
            that has prepared me to be a team player who communicates
            effectively, faces problems analytically and has the technical
            skills to tackle any challenge.
          </p>
        </div>
      </div>
    </>
  )
}

export default About
