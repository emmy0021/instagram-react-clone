import React from 'react'
import "./navigation.css"
import home from "../../assets/icons8-home-48.png"
import likeImg from "../../assets/icons8-heart-48.png"

function Navigation() {
    return (
        <div>
            <div className='navBar'>
                <header className='head'>
                    <img src='' alt='' ></img>
                    <div className='logo'>Instagram</div>
                </header>
        
                <section className='navItems'>
                    <div className="tab" id='Home'><img src={home} alt='' className='navItem' />Home</div>
                    <div className="tab" id='Search'><img src={home} alt='' className='navItem' />Search</div>
                    <div className="tab" id='Explore'><img src={home} alt='' className='navItem' />Explore</div>
                    <div className="tab" id='Reels'><img src={home} alt='' className='navItem' />Reels</div>
                    <div className="tab" id='Messages'><img src={home} alt='' className='navItem' />Messages</div>
                    <div className="tab" id='Notifications'><img src={home} alt='' className='navItem' />Notifications</div>
                    <div className="tab" id='Create'><img src={home} alt='' className='navItem' />Create</div>
                    <div className="tab" id='Profile'><img src={home} alt='' className='navItem' />Profile</div>
                </section>
        
                <footer className='foot'>
                    <div className="tab" id='Create'><img src={home} alt='' className='navItem' />Threads</div>
                    <div className="tab" id='Profile'><img src={home} alt='' className='navItem' />More</div>
                </footer>
            </div>
            <div className='mobileNavBar'>
                <div className='mobileNavBarHeader'>
                    
                    <div className='logo'>Instagram</div>
                    <div className='mobileActions'>
                        <input type='text' className='search' placeholder='Search'></input>
                        <img className='mobileNotifications' src={likeImg} alt="" />
                    </div>

                    
                </div>
                <div className='mobileNavBarFooter'>
                    <div className="tab" id='Home'><img src={home} alt='' className='navItem' /></div>
                    <div className="tab" id='Explore'><img src={home} alt='' className='navItem' /></div>
                    <div className="tab" id='Reels'><img src={home} alt='' className='navItem' /></div>
                    <div className="tab" id='Create'><img src={home} alt='' className='navItem' /></div>
                    <div className="tab" id='Messages'><img src={home} alt='' className='navItem' /></div>
                    <div className="tab" id='Profile'><img src={home} alt='' className='navItem' /></div>
                </div>
            </div>

        </div>
      )
}

export default Navigation