import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faJava,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import LogoC from '../../assets/images/c-1.svg'
import LogoCSharp from '../../assets/images/c--4.svg'
import LogoPython from '../../assets/images/python-5.svg'
import Loader from 'react-loaders'
import ResumeFile from '../../assets/pdfs/Remi_Brenaut_Resume_2025.pdf'

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
          <a 
            href={ResumeFile}
            target="_blank"
            rel="noreferrer"
            className="flat-button"
          >
            VIEW RESUME
          </a>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <img src={LogoC} alt="Logo C" className="logo-cube" />
            </div>
            <div className="face2">
              <img src={LogoPython} alt="Logo Python" className="logo-cube" />
            </div>
            <div className="face3">
              <img src={LogoCSharp} alt="Logo Csharp" className="logo-cube" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4f4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJava} color="#EC4D28" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About