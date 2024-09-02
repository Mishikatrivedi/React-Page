import './Hero.css'
import rightArrow from '../../assets/rightArrow.jpg'
import pause from '../../assets/pause.jpg'
import play from '../../assets/play.jpg'

const Hero = ({heroData , setHeroCount ,heroCount , setPlayStatus , playStatus}) => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the features</p>
        <img src={rightArrow}/>
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li onClick={()=>setHeroCount(0)} className={heroCount === 0 ? "hero-dot orange":"hero-dot"}></li>
          <li onClick={()=>setHeroCount(1)} className={heroCount === 1 ? "hero-dot orange":"hero-dot"}></li>
          <li onClick={()=>setHeroCount(2)} className={heroCount === 2 ? "hero-dot orange":"hero-dot"}></li>
        </ul>
      <div className="hero-play">
        <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus ? pause : play}/>
        <p>See the video!</p>
      </div>  
      </div>
    </div>
  )
}
export default Hero