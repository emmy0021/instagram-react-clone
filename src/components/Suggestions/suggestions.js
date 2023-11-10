import React from 'react'
import "./suggestions.css"
import userImg1 from "../../assets/user_image.jpg"


function Suggestions() {
    return(
        <div className='suggestionsTab'>
            <div className='switchAccount'>
                <img src={userImg1} alt="user image" className='smallUserImg' />
                <div className='userInfo'>
                    <div className='userInfoUserName'>user_name</div>
                    <div className='userInfoName'>Emmanuel O.</div>
                </div>
                <button className='btn'>Switch</button>
            </div>
            <section className='suggestions'>
                <div className='suggestionHeader'>
                    <p className='suggestionTitle'>Suggested for you</p>
                    <p className='suggestionSeeAll'>See all</p>
                </div>
                
                <div className='suggestion'>
                    <img src={userImg1} alt="user image" className='smallUserImg'/>
                    <div className='suggestionInfo'>
                        <div className='userInfoUserName'>user_name</div>
                        <div className='userInfoName'>Followed by user_name</div>
                    </div>
                    <button className='btn'>Follow</button>
                </div>
                <div className='suggestion'>
                    <img src={userImg1} alt="user image" className='smallUserImg'/>
                    <div className='suggestionInfo'>
                        <div className='userInfoUserName'>user_name</div>
                        <div className='userInfoName'>Followed by user_name</div>
                    </div>
                    <button className='btn'>Follow</button>
                </div>
                <div className='suggestion'>
                    <img src={userImg1} alt="user image" className='smallUserImg'/>
                    <div className='suggestionInfo'>
                        <div className='userInfoUserName'>user_name</div>
                        <div className='userInfoName'>Followed by user_name</div>
                    </div>
                    <button className='btn'>Follow</button>
                </div>
                <div className='suggestion'>
                    <img src={userImg1} alt="user image" className='smallUserImg'/>
                    <div className='suggestionInfo'>
                        <div className='userInfoUserName'>user_name</div>
                        <div className='userInfoName'>Followed by user_name</div>
                    </div>
                    <button className='btn'>Follow</button>
                </div>
                <div className='suggestion'>
                    <img src={userImg1} alt="user image" className='smallUserImg'/>
                    <div className='suggestionInfo'>
                        <div className='userInfoUserName'>user_name</div>
                        <div className='userInfoName'>Followed by user_name</div>
                    </div>
                    <button className='btn'>Follow</button>
                </div>

            </section>
        </div>
    )
}

export default Suggestions