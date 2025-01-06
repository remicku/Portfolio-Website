import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import Loader from 'react-loaders'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    // Cleanup function to avoid errors
    return () => clearTimeout(timeoutId)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'SERVICE KEY',
        'TEMPLATE KEY',
        refForm.current,
        'PUBLIC KEY'
      )
      .then(
        () => {
            alert("Message successfully sent! I will get back to you within 1 to 2 business days.")
            window.location.reload(false)
        },
        () => {
            alert("Failed to send the message, please try again")
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              index={15}
            />
          </h1>
          <p>
          <br/>
          Thank you for your interest in getting in touch!
          <br/>
          <br/>
          I value open communication and welcome any inquiries, feedback, or collaboration opportunities. Please don't hesitate to get in touch with me by filling out the contact form.
          <br/>
          </p>
          <div className='contact-form'>
            <form ref={refForm} onsubmit={sendEmail}>
                <ul>
                    <li className="half">
                        <input type="text" name="name" placeholder="Name" required />
                    </li>
                    <li className="half">
                        <input type="email" name="email" placeholder="Email" required />
                    </li>
                    <li>
                        <input type="text" name="subject" placeholder="Subject" required />
                    </li>
                    <li>
                        <textarea type="text" name="Message" placeholder="Message" required />
                    </li>
                    <li>
                        <input type="submit" className='flat-button' value="SEND" />
                    </li>
                </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
            Remi Brenaut,
            <br/>
            France,
            <br/>
            EPITA Paris,<br/>
            Kremlin Bicetre 94800 <br/>
            <span>remi.brenaut@epita.fr</span>
        </div>
        <div className='map-wrap'>
            <MapContainer center={[48.815609, 2.363151]} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[48.815609, 2.363151]}>
                    <Popup>I'm here :)</Popup>
                </Marker>
            </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact