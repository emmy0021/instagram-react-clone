import React from 'react'
import './feed.css'
import userImg1 from "../../assets/user_image.jpg"
import newYorkImg from "../../assets/Times-Square-New-York.jpg"
import moreImg from "../../assets/icons8-more-30.png"
import likeImg from "../../assets/icons8-heart-48.png"
import commentsImg from "../../assets/icons8-comment-32.png"
import shareImg from "../../assets/icons8-share-48.png"
import bookmarkImg from "../../assets/icons8-bookmark-48.png"
import happyFaceImg from "../../assets/icons8-happy-face-24.png"

function Feed() {
  return (
    <div className='feed'>
        <section className='stories'>
            <div className='story'>
                <img src={userImg1} alt="" className='userImg'/>
                <p className='username'>user_name</p>
            </div>
            <div className='story'>
                <img src={userImg1} alt="" className='userImg'/>
                <p className='username'>user_name</p>
            </div>
            <div className='story'>
                <img src={userImg1} alt="" className='userImg'/>
                <p className='username'>user_name</p>
            </div>
            <div className='story'>
                <img src={userImg1} alt="" className='userImg'/>
                <p className='username'>user_name</p>
            </div>
            <div className='story'>
                <img src={userImg1} alt="" className='userImg'/>
                <p className='username'>user_name</p>
            </div>
            <div className='story'>
                <img src={userImg1} alt="" className='userImg'/>
                <p className='username'>user_name</p>
            </div>
            <div className='story'>
                <img src={userImg1} alt="" className='userImg'/>
                <p className='username'>user_name</p>
            </div>
            <div className='story'>
                <img src={userImg1} alt="" className='userImg'/>
                <p className='username'>user_name</p>
            </div>
            <div className='story'>
                <img src={userImg1} alt="" className='userImg'/>
                <p className='username'>user_name</p>
            </div>
            <div className='story'>
                <img src={userImg1} alt="" className='userImg'/>
                <p className='username'>user_name</p>
            </div>
            <div className='story'>
                <img src={userImg1} alt="" className='userImg'/>
                <p className='username'>user_name</p>
            </div>
            <div className='story'>
                <img src={userImg1} alt="" className='userImg'/>
                <p className='username'>user_name</p>
            </div>
            <div className='story'>
                <img src={userImg1} alt="" className='userImg'/>
                <p className='username'>user_name</p>
            </div>
            
        </section>
        <section className='posts'>
          <div className='post'>
            <header className='postHead'>
              <img src={userImg1} alt="user image" className="postUserImage"/>
              <div className='postUserName'>user_name</div>
              <div className='postTimestamp'>8hrs</div>
              <img className='postOptions' src={moreImg} alt="" />
            </header>
            <img src={newYorkImg} alt="newyork" className='postImg' />
            <footer className='postFooter'>
              <div className='postActions'>
                  <img className='postAction' src={likeImg} alt="" />
                  <img className='postAction' src={commentsImg} alt="" />
                  <img className='postAction' src={shareImg} alt="" />
                  <img className='lastPostAction' src={bookmarkImg} alt="" />
              </div>
              <div className='postLikes'>86,456 likes</div>
              <div className='postComments'>View all 20 comments</div>
              <textarea className='postInputComment' placeholder='Add a comment'></textarea>
              <img src={happyFaceImg} alt="happy face" className='postEmoji' />

            </footer>
          </div>
          <div className='post'>
            <header className='postHead'>
              <img src={userImg1} alt="user image" className="postUserImage"/>
              <div className='postUserName'>user_name</div>
              <div className='postTimestamp'>8hrs</div>
              <img className='postOptions' src={moreImg} alt="" />
            </header>
            <img src={newYorkImg} alt="newyork" className='postImg' />
            <footer className='postFooter'>
              <div className='postActions'>
                  <img className='postAction' src={likeImg} alt="" />
                  <img className='postAction' src={commentsImg} alt="" />
                  <img className='postAction' src={shareImg} alt="" />
                  <img className='lastPostAction' src={bookmarkImg} alt="" />
              </div>
              <div className='postLikes'>86,456 likes</div>
              <div className='postComments'>View all 20 comments</div>
              <textarea className='postInputComment' placeholder='Add a comment'></textarea>
              <img src={happyFaceImg} alt="happy face" className='postEmoji' />

            </footer>
            
          </div>
          <div className='post'>
            <header className='postHead'>
              <img src={userImg1} alt="user image" className="postUserImage"/>
              <div className='postUserName'>user_name</div>
              <div className='postTimestamp'>8hrs</div>
              <img className='postOptions' src={moreImg} alt="" />
            </header>
            <img src={newYorkImg} alt="newyork" className='postImg' />
            <footer className='postFooter'>
              <div className='postActions'>
                  <img className='postAction' src={likeImg} alt="" />
                  <img className='postAction' src={commentsImg} alt="" />
                  <img className='postAction' src={shareImg} alt="" />
                  <img className='lastPostAction' src={bookmarkImg} alt="" />
              </div>
              <div className='postLikes'>86,456 likes</div>
              <div className='postComments'>View all 20 comments</div>
              <textarea className='postInputComment' placeholder='Add a comment'></textarea>
              <img src={happyFaceImg} alt="happy face" className='postEmoji' />

            </footer>
            
          </div>
        </section>
    </div>
  )
}

export default Feed