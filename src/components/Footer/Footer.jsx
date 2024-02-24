import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#2c6a72', color: 'white', padding: '5vh', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '5vh' }}>
        <div>
          <h1 style={{ fontSize: '3vh', marginBottom: '2vh',fontFamily:'SF Pro' }}>PRODUCTS</h1>
          <ul style={{ padding: '1vh', margin: 0 }}>
            <li style={{fontFamily:'SF Pro'}}>MedLinkPro</li>
            <li style={{fontFamily:'SF Pro'}}>MedDoc Connect</li>
            <li style={{fontFamily:'SF Pro'}}>LabConnect Pro</li>
            <li style={{fontFamily:'SF Pro'}}>RxConnect Hub</li>
          </ul>
        </div>
        <div>
          <h1 style={{ fontSize: '3vh', marginBottom: '2vh',fontFamily:'SF Pro' }}>SOCIAL MEDIA</h1>
          <ul style={{ padding: '1vh', margin: 0 }}>
            <li style={{fontFamily:'SF Pro'}}>Facebook</li>
            <li style={{fontFamily:'SF Pro'}}>Instagram</li>
            <li style={{fontFamily:'SF Pro'}}>Linkedin</li>
            <li style={{fontFamily:'SF Pro'}}>Twitter</li>
          </ul>
        </div>
        <div>
          <h1 style={{ fontSize: '3vh', marginBottom: '2vh',fontFamily:'SF Pro' }}>FAQ</h1>
          <ul style={{ padding: '1vh', margin: 0 }}>
            <li style={{fontFamily:'SF Pro'}}>FAQ's</li>
            <li style={{fontFamily:'SF Pro'}}>Terms And Condition</li>
            <li style={{fontFamily:'SF Pro'}}>Privacy Policy</li>
            <li style={{fontFamily:'SF Pro'}}>About Us</li>
          </ul>
        </div>
        <div style={{ width: '20%', position: 'relative' }}>
          <h1 style={{ fontSize: '3vh', marginBottom: '2vh', position: 'absolute',fontFamily:'SF Pro' }}>HOW TO REACH US</h1>
          <form style={{ position: 'absolute', top: '3vh' }}>
            <input type="email" placeholder="Write Your Email Id" style={{ top: '2vh', position: 'absolute' }} />
            <textarea placeholder="Write Your Message Here" style={{ top: '6vh', position: 'absolute' }}></textarea>
            <button className='border' type="submit" style={{ top: '13vh', width: '6vh', position: 'absolute' }}>SEND</button>
          </form>
        </div>
      </div>
      <hr style={{ marginBottom: '3vh', marginTop: '3vh' }} />
      <div style={{ position: 'relative' }}>
        <p style={{ margin: 0, fontSize: '2vh',fontFamily:'SF Pro' }}>Copyright © All Rights Reserved By MedLinkPro.</p>
      </div>
    </footer>
  );
}

export default Footer;

