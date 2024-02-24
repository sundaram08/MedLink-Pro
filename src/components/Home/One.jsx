import React from 'react'

function One() {
  return (
    <div className='h-screen w-full'
    style={{
    backgroundImage:'url("https://images.pexels.com/photos/11748750/pexels-photo-11748750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
    backgroundSize: 'cover', backgroundPosition: 'center'}}>
         <div style={{position: 'absolute',top: 0,left: 0,width: '100vw',height: '100vh',background: 'rgba(0, 0, 0, 0.5)'}} />
        <div className='border-delicate' style={{width:'52%',borderRadius:'1vh',height:'6%',top:'3%',left:'24.5%',position:'relative',border:'0.25px solid white',backgroundColor: 'rgba(255, 255, 255, 0.025)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)'}}>
            <h1 style={{color:'rgba(255, 255, 255, 1)',width:'20%',height:'12%',top:'1vh',left:'4%',fontSize: '2.5vw', fontWeight:'80%', lineHeight: '3vh',fontFamily:'Mathilga',position:'relative',textAlign: 'center',}}>
            MedLinkPro
            </h1>
        </div>
        <div  style={{width:'50%',height:'80%',top:'22%',left:'25%',position:'absolute'}}>
            <div style={{width:'75%',height:'18%',top:'12%',left:'10%',position:'relative'}}>
                <h1 style={{ color:'rgba(255, 255, 255, 1)',top: '50%',margin: '3% 0',transform: 'translateY(-50%)',fontSize: '3vw', fontWeight: '860', lineHeight: '1', letterSpacing: '0em',textAlign: 'center',fontFamily:'SF Pro'}}>
                ONE WINDOW, ONE STEP, TOTAL HEALTH SOLUTION
                </h1>
            </div>
            <div style={{width:'100%',height:'8%',top:'20%',left:'',position:'relative'}}>
                <h1 style={{color:'rgba(255, 255, 255, 1)',fontSize: '1.5vw',margin: '3% 0', fontWeight:'310',fontFamily:'SF Pro', lineHeight: '1.2', letterSpacing: '0em', textAlign: 'center'}}>
                WE PROVIDE HEALTH CARE MANAGEMENT SYSTEM. FOR HEALTH PROFESSIONALS LIKE DOCTORS, PHARMACY STORES, AND LABORATORIES, WE ALSO PROVIDE APPLICATIONS FOR PATIENTS.
                </h1>
            </div>
            <div style={{border:'0.25px solid white',width:'20%', height:'6%', top:'35%', left:'40%', position:'relative', justifyContent: 'center',textAlign:'center',alignItems: 'center', borderRadius:'1vh'}}>
                <h1 style={{color:'rgba(255, 255, 255, 1)', fontSize: '1.5vh',top:'1vh', fontWeight:'10%',position:'relative',padding: '2%'}}>
                    TRY US NOW
                </h1>
            </div>
        </div>
    </div>
  )
}


export default One

