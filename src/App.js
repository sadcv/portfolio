import colorBlocking from './media/Color_Blocking.png';
import './App.css';
import CONTENT from './Content.js';

// general images
import SelfPicture from './media/Self_Picture.png'
import locationSolid from './media/location_solid.png';
import locationDotted from './media/location_lined.svg';

// Logos
import BalsamiqLogo from './media/BalsamiqLogo.png';
import ReactLogo from './media/ReactLogo.png';
import FirebaseLogo from './media/FirebaseLogo.png';
import SQLLogo from './media/SQLLogo.png';
import FigmaLogo from './media/FigmaLogo.png';
import HTMLLogo from './media/HTMLLogo.png';
import CSSLogo from './media/CSSLogo.png';
import CppLogo from './media/CppLogo.png';

// PORTFOLIO PIECES
// IPP
import IPP_Home from './media/Portfolio_Pieces/IPP_home.png';
import IPP_Mid from './media/Portfolio_Pieces/IPP_mid.png'
import IPP_Banner from './media/Portfolio_Pieces/IPP_banner.png';

// VFLEA
import Vflea_Desktop from './media/Portfolio_Pieces/vflea_desktop.png';
import Vflea_IPad from './media/Portfolio_Pieces/vflea_ipad.png';
import Vflea_IPhone from './media/Portfolio_Pieces/vflea_iphone.png';

// FLOAT HEALTH
// lofi
import float_lofi_Confirmation from './media/Portfolio_Pieces/lofi_Confirmation.png';
import float_lofi_HomeScreen from './media/Portfolio_Pieces/lofi_HomeScreen.png';
import float_lofi_InformationForm from './media/Portfolio_Pieces/lofi_InformationForm.png';
import float_lofi_NurseProfile from './media/Portfolio_Pieces/lofi_NurseProfile.png';
import float_lofi_NurseSearch from './media/Portfolio_Pieces/lofi_NurseSearch.png';
import float_lofi_Profile from './media/Portfolio_Pieces/lofi_Profile.png';
import float_lofi_wireframes from './media/Portfolio_Pieces/lofi_wireframes.png';

// hifi
import float_hifi_v1 from './media/Portfolio_Pieces/Nurse_Profile-1.png';
import float_hifi_v2 from './media/Portfolio_Pieces/Nurse_Profile-2.png';
import float_hifi_v3 from './media/Portfolio_Pieces/Nurse_Profile-3.png';
import float_hifi_v4 from './media/Portfolio_Pieces/Nurse_Profile-4.png';
import float_hifi_wireframes from './media/Portfolio_Pieces/hifi_nurse_wireframes.png';
import float_hifi_final from './media/Portfolio_Pieces/hifi_nurse_final.png';


function App() {
  return (
    <div className="App">
      {/* <img src={colorBlocking} style={{ position: "relative" }} /> */}
      {/* <div className="Content" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", position: "absolute", top: 0 }}> */}
      <div className="Content" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        {/* HEADER */}
        <div style={{ position: "relative", marginBottom: "8rem" }}>
          <div style={{ position: "absolute", top: "3rem", backgroundColor: "#FCE9B8", width: "30rem", height: "5rem", display: "flex", justifyContent: "center", alignItems: "center" }}><h1>Stephanie DaCruz</h1></div>
          <div style={{ position: "absolute", top: "2rem", left: "25rem", backgroundColor: "#282522", display: "flex", justifyContent: "space-around", alignItems: "center", position: "relative", width: "40rem", height: "5rem", color: "white" }}>
            <h2>DESIGN</h2>
            <h2>DEVELOPMENT</h2>
            <h2>ARTWORK</h2>
          </div>
          <div style={{ position: "absolute", top: "4rem", left: "63rem", backgroundColor: "#EF652A", width: "10rem", height: "5rem" }} />
        </div>
        {/* BIO */}
        <div style={{ display: 'flex', justifyContent: "center", marginBottom: "8rem" }}>
          <img style={{ height: "25rem", marginRight: "8rem" }} src={SelfPicture} />
          <div style={{ display: "flex" }}>
            <div style={{ display: 'flex', flexDirection: "column", justifyContent: "space-around", marginRight: "4rem" }}>
              <img className="logo" src={BalsamiqLogo} />
              <img className="logo" src={ReactLogo} />
              <img className="logo" src={FirebaseLogo} />
              <img className="logo" src={SQLLogo} />
            </div>
            <div style={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <div style={{ display: 'flex', alignItems: "center" }}>
                <img style={{ height: "2rem" }} src={locationSolid} />
                <h3 style={{ marginLeft: "1rem" }}>Raised in RI</h3>
                <img style={{ height: "2rem", marginLeft: "2rem" }} src={locationDotted} />
                <h3 style={{ marginLeft: "1rem" }}>Currently in PA</h3>
              </div>
              <h3 style={{ width: "22rem", textAlign: "center" }}>Thank you for visiting! I coded this portfolio in React. For a breakdown of my work, see my projects below.</h3>
              <h3>Brown University Student</h3>
              <h3>English, Spanish, French</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: "column", justifyContent: "space-around", marginLeft: "4rem" }}>
              <img className="logo" src={FigmaLogo} />
              <img className="logo" src={HTMLLogo} />
              <img className="logo" src={CSSLogo} />
              <img className="logo" src={CppLogo} />
            </div>
          </div>
        </div>
        {/* IPP */}
        <div style={{ position: "relative", height: "50rem", width: "30rem" }}>
          <div className='layer4' style={{ backgroundColor: "#FCE9B8", padding: "1rem", position: "absolute" }}>
            <h3>Brown University - Industry  Partners Program</h3>
            <h3>Website Design, Front-end development</h3>
          </div>
          <div style={{ backgroundColor: "#FFC891", position: "absolute", left: "4rem", top: "6rem", width: "52rem", height: "30rem" }}>
            <img src={IPP_Home} className='image_border layer4' style={{ width: "30rem", position: "absolute", top: "20rem", left: "-2rem" }} />
            <img src={IPP_Mid} className='image_border layer3' style={{ width: "40rem", borderRadius: "10px", position: "absolute", top: "4rem", left: "4rem" }} />
            <img src={IPP_Banner} className='image_border layer2' style={{ width: "20rem", borderRadius: "10px", position: "absolute", top: "22rem", left: "36rem" }} />
          </div>
          <div className="layer1" style={{ backgroundColor: "#282522", color: "white", position: "absolute", left: "46rem", top: "2rem", display: "flex", flexDirection: "column", alignItems: "center", padding: "4rem" }}>
            <p style={{ width: "22rem" }}>Working on this website was an incredible learning experience. Alongside my team I acquired a number of valuable skills:</p>
            <p style={{ width: "22rem" }}>- Source control and coordination with a team, including pull requests and synchronization.</p>
            <p style={{ width: "22rem" }}>- Managing contrast, color and imagery to guide a visitor down a page.</p>
            <p style={{ width: "22rem" }}>- Breaking up text to maintain engagement and spreading content intuitively across several pages.</p>
            <a href="https://brown-cs-ipp.github.io/" style={{ marginLeft: "12rem", marginTop: "2rem", textDecoration: "underline", color: "white" }}>Go to the active site</a>
          </div>
          <div className='layer0' style={{ backgroundColor: "#FCE9B8", position: "absolute", left: "64rem", top: "22rem", width: "22rem", height: "23rem" }}/>
        </div>
        {/* Website Redesign */}
        <div style={{ position: "relative", height: "58rem" }}>
          <div className='layer3' style={{ backgroundColor: "#282522", width: "26rem", padding: "1rem", color: "white", position: "absolute" }}>
            <h3>Website Redesign</h3>
          </div>
          <div style={{ backgroundColor: "#FCE9B8", position: "absolute", left: "4rem", top: "2rem", width: "36rem", height: "25rem" }}>
            <img className='layer2' style={{ position: "absolute", left: "2rem", top: "5rem", width: "40rem" }} src={Vflea_Desktop} />
            <img className='layer3' style={{ position: "absolute", left: "28rem", top: "9rem", width: "26rem"  }} src={Vflea_IPad} />
            <img className='layer2' style={{ position: "absolute", left: "40rem", top: "1rem", width: "18rem" }} src={Vflea_IPhone} />
          </div>
          <div className='layer1' style={{ backgroundColor: "#FCE9B8", position: "absolute", width: "20rem", height: "12rem", left: "52rem", top: "22rem" }} />
          <div style={{ backgroundColor: "#FFC891", position: "absolute", width: "22rem", height: "24rem", left: "64rem", top: "10rem" }} />
          <div className='layer0' style={{ backgroundColor: "#282522", position: "absolute", color: "white", width: "70rem", height: "18rem", left: "10rem", top: "29rem", display: "flex", justifyContent: "space-around", alignItems: "flex-start", paddingTop: "1rem"}}>
            <div>
              <p style={{ width: "18rem" }}>This website redesign was a concept project I completed for a university course. As students we were tasked with finding a website and giving it an accessibility overhaul. Through this project I learned:</p>
              <p style={{ width: "16rem" }}>- To make a website flow down a page.</p>
              <p style={{ width: "16rem" }}>- To order and section content to be approachable and understandable.</p>
            </div>
            <div style={{marginTop: "8rem"}} >
              <p style={{ width: "16rem" }}>- To avoid repetitive content.</p>
              <p style={{ width: "16rem" }}>- To make navigation visible, logical and accessible from every page.</p>
              </div>
              <div style={{marginTop: "8rem"}}>
              <p style={{ width: "16rem" }}>- To fit unique concepts into familiar interfaces.</p>
              <a href='www.vflea.com' style={{ marginLeft: "2rem", textDecoration: "underline", color: "white" }}>Visit the original website</a>
            </div>
          </div>
        </div>
        {/* Startup Design */}
        <div style={{ position: "relative", marginBottom: "24rem" }}>
          <div style={{ height: "48rem" }}>
            <div className='layer1' style={{ backgroundColor: "#FFC891", width: "16rem", padding: "1rem", position: "absolute" }}>
              <h3>Startup Design</h3>
            </div>
            <div className="layer3" style={{ backgroundColor: "#282522", position: "absolute", top: "2rem", right: "4rem" }}>
              <img style={{ padding: "2rem", width: "36rem" }} src={float_lofi_wireframes} />
            </div>
            <div className='layer2' style={{ backgroundColor: "#FCE9B8", position: "absolute", right: "8rem", width: "40rem", height: "26rem" }} />
            <div className='layer0' style={{ backgroundColor: "#FFC891", position: "absolute", left: "2rem", top: "14rem", width: "32rem", height:"26rem" }} />
            {/* <div className='layer0' style={{ backgroundColor: "#FFC891", position: "absolute", top: "14rem", right: 0, width: "52rem", height: "22rem" }} /> */}
            <div style={{ backgroundColor: "#282522", color: "white", position: "absolute", top: "4rem", right: "10rem", width: "74rem", height: "28rem" }}>
              <div style={{ padding: "4rem" }}>
                <p style={{padding: 0, margin: 0}} >Low Fidelity Wireframes</p>
                <p style={{ width: "30rem" }}>This website design was a group concept project I completed for a university course. </p>
                <p style={{ width: "30rem" }}>For this project I learned to take a website from a concept to low fidelity to high fidelity wireframes. Our group selected a budding startup and set out to design a site that would meet their needs.</p>
                <p style={{ width: "30rem" }}>This startup (Float Health, with whom I am not affiliated) pitched an Uber/Grubhub-like service for nurses to get additional work coming directly to patient's homes.</p>
                <p style={{ width: "30rem" }}>Designing the low fidelity frames was a great exercise in functionality, and brainstorming a layout that would be easy to navigate and cover all of the client's bases. It was also fantastic insight into designing for a target audience, and accommodating for each audience's differing needs.</p>
              </div>
            </div>
          </div>
          <div style={{ position: "relative", height: "40rem" }} >
            <div className='layer1' style={{ backgroundColor: "#FFC891", width: "30rem", height: "18rem", position: "absolute", left: "31rem" }} />
            <div style={{ backgroundColor: "#FCE9B8", width: "30rem", height: "18rem", position: "absolute", left: "56rem", top: "4rem" }} />
            <img className='layer2' style={{ position: "absolute", width: "36rem", left: "4rem", top: "0rem" }} src={float_hifi_wireframes} />
            <img className='layer3' style={{ borderRadius: "10px", borderStyle: "solid", borderWidth: "14px", borderColor: "#282522", width: "40rem", position: "absolute", left: "35rem", top: "8rem" }} src={float_hifi_final} />
            <div style={{ backgroundColor: "#282522", color: "white", width: "64rem", height: "28rem", position: "absolute", left: "18rem", top: "26rem" }}>
              <div style={{ marginLeft: "25rem", marginTop: "4rem" }} >
                <p>High Fidelity Wireframes</p>
                <p style={{ width: "34rem" }}>I completed these high fidelity wireframes for the Nurse Management and Profile Page on my own.</p>
                <p style={{ width: "34rem" }}>This is a fantastic exercise in bringing the style and appeal to functional wireframes. Knowing the required elements for the page, getting the layout right is the hardest part.</p>
              </div>
              <div style={{ marginLeft: "4rem", marginTop: "3rem" }} >
                <p style={{ width: "56rem" }}>Pictured above are the iterations in vaguely chronological order. Some great takeaways from this process:</p>
                <p style={{ width: "54rem", marginLeft: "4rem", marginTop: "1rem" }}>- Horizontal layouts can save space, which mitigates scrolling and fatigue for the user. It also negates the dread of reading through a huge page of content, and helps with an initial understanding of the page.</p>
                <p style={{ width: "54rem", marginLeft: "4rem" }}>- Effective toolbar design, both vertical and horizontal, as effective framing and nesting tools.</p>
                <p style={{ width: "54rem", marginLeft: "4rem" }}>- Sparing use and balance of color to create impact and avoid overwhelm. Whitespace is a friend!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
