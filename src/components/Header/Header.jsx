import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
       <header className="bg-white  shadow-md"style={{ width: '1920px', height: '100px'}}>
          <nav className="flex justify-between items-center">
          <Link to="/" className="w-201 h-42 mt-7 mb-7 ml-40 text-lg  font-Mathilga text-gray-800"
          style={{ fontFamily: 'Mathilga', fontWeight: '400', fontSize: '32px', lineHeight: '50.18px'}}
          >
            MedLinkPro
          </Link>
            <div className="flex space-x-4">
              <Link to="/" className=" text-black" style={{ width: '49px', height: '19px', top: '40px', left: '521px', position: 'absolute',fontFamily: 'SF Pro', fontWeight: '510', fontSize: '16px', lineHeight: '19.09px' }}>
                Home
              </Link>
              <Link to="/products" className="text-black" style={{ width: '49px', height: '19px', top: '40px', left: '649px', position: 'absolute',fontFamily: 'SF Pro', fontWeight: '510', fontSize: '16px', lineHeight: '19.09px' }}>
                Products
              </Link>
              <Link to="/service" className="text-black" style={{ width: '49px', height: '19px', top: '40px', left: '817px', position: 'absolute',fontFamily: 'SF Pro', fontWeight: '510', fontSize: '16px', lineHeight: '19.09px' }}>
                Service
              </Link>
              <Link to="/contact" className="text-black" style={{ width: '49px', height: '19px', top: '40px', left: '963px', position: 'absolute',fontFamily: 'SF Pro', fontWeight: '510', fontSize: '16px', lineHeight: '19.09px'}}>
              Contact
              </Link>
              <Link to="/" className="text-black" style={{ width: '200px', height: '50px', top: '25px', left: '1525px', position: 'absolute', fontFamily: 'SF Pro', fontWeight: '590', fontSize: '20px', lineHeight: '23.87px',background: 'linear-gradient(180deg, #096187 0%, #038474 100%)'}}>
               JOIN US
              </Link>
            </div>
          </nav>
        </header>
    </div>
  )
}

export default Header



