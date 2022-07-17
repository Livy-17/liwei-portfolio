import React from 'react';
import { useColorModeValue } from '@chakra-ui/react';
import './styles.css';
import { Link } from 'react-router-dom';

function Submitted() {
  return ( 
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh', backgroundColor: useColorModeValue('white', '#1a1f2d') }}>
      <div className='submit--container' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div>
          <img src='submitted-done.webp' alt='' width='100px' />
        </div>
        <p style={{ fontSize: '30px', fontWeight: 'bold', margin: '40px 0 10px 0' }}>Hey! Thank you!</p>
        <p style={{ fontSize: '20px', marginBottom: '40px', textAlign: 'center' }}>I will get in touch with you as soon as possible!</p>
        <Link to={`${process.env.PUBLIC_URL}/`}>
          <button className='submit--button' style={{ width: '200px', height: '40px', borderRadius: '5px', backgroundColor: useColorModeValue('#c1cbd7', '#656176') }}>Back to Portfolio Page</button>
        </Link>
      </div>
    </div>
   );
}

export default Submitted;