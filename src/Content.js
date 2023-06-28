import './Content.css';
import SelfPicture from './media/Self_Picture.png'
import locationSolid from './media/BalsamiqLogo.png';
import locationDotted from './media/BalsamiqLogo.png';
import BalsamiqLogo from './media/BalsamiqLogo.png';
import ReactLogo from './media/ReactLogo.png';
import FirebaseLogo from './media/FirebaseLogo.png';
import SQLLogo from './media/SQLLogo.png';
import FigmaLogo from './media/FigmaLogo.png';
import HTMLLogo from './media/HTMLLogo.png';
import CSSLogo from './media/CSSLogo.png';
import CppLogo from './media/CppLogo.png';

function Content() {
  return (
    <div className="Content">
      {/* HEADER */}
      <div>
        <h1>Stephanie DaCruz</h1>
        <div>
          <h2>DESIGN</h2>
          <h2>DEVELOPMENT</h2>
          <h2>ARTWORK</h2>
        </div>
      </div>
      {/* BIO
      <div style={{display: 'flex'}}>
        <img src={SelfPicture}/>
        <div style={{display: 'flex'}}>
           <div style={{display: 'flex'}}>
            <img src={locationSolid}/>
            <p>Raised in RI</p>
            <img src={locationDotted}/>
            <p>Currently in PA</p>
           </div>
           <p>Thank you for visiting my portfolio!</p>
           <p>For a breakdown of my work</p>
           <div>Check Out My Projects Below</div>
           <p>Brown University Student</p>
           <p>English, Spanish, French</p>
           <div style={{display: 'flex'}}>
            <img src={BalsamiqLogo}/>
            <img src={ReactLogo}/>
            <img src={FirebaseLogo}/>
            <img src={SQLLogo}/>
            <img src={FigmaLogo}/>
            <img src={HTMLLogo}/>
            <img src={CSSLogo}/>
            <img src={CppLogo}/>
           </div>
        </div>
      </div>
      {/* IPP */}
    </div>
  );
}

export default Content;
 