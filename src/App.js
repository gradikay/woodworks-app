import './App.css';
import image1 from './image1.webp';
import image2 from './image2.webp';
import image3 from './image3.webp';
import image4 from './image4.webp';
import image5 from './image5.webp';
import image7 from './image7.webp';
import image9 from './image9.webp';
import image10 from './image10.webp';
import intro from './images/anivid.mp4';
import backImage from './backback.jpg';

// Main Application
function App() {

  return (
      <main className="App">

          {/* TopNav Component */}
          <TopNav />

          {/* Header Component */}
          <HeaderO />

          <HeaderG />

          <HeaderE />

          {/* LowerNav Component */}
          <LowerNav />
        {/*platformLink="https://crypto.com/nft/collection/318ab765d9af6dfedd83fa5affa1d60a"*/}

          {/* Footer */}
          <footer className="bg-white text-center border-top p-3">
              <p className="mb-0"> <i className="fa fa-copyright"></i> <b> Woodworks Club. 2022 </b> </p>
          </footer>

      </main>
  );
}

// TopNav Component
function TopNav() {
    return (
        <nav className="navbar navbar-expand-md bg-white justify-content-end">
            <div className="container-fluid">
                <div className="navbar-brand text-dark mb-md-0"> <strong> Woodworks Club </strong> </div>

                <button className="navbar-toggler border" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="fa fa-navicon"></span>
                </button>

                <div className="collapse navbar-collapse" id="mynavbar" style={{ flexGrow: "0" }}>
                    <ul className="navbar-nav">
                        <NavLink title={`Twitter`} logo={``} emoji="&#128036;" link={`https://twitter.com/heartister`} />
                        <NavLink title={`Instagram`} logo={``} emoji="&#128249;" link={`https://www.instagram.com/digital_woodworks/`} />
                        <NavLink title={`Woodworks`} logo={``} emoji="&#128163;" link={`https://opensea.io/collection/bombemojis`} />
                        <NavLink title={`AstroEmojis`} logo={``} emoji="&#128640;" link={`https://opensea.io/collection/astroemojis`} />
                    </ul>
                </div>
            </div>
        </nav>
        );
}

// LowerNav Component
function LowerNav() {
    return (
        <ul className="nav justify-content-center bg-dark pb-3 d-none">
            <li className="nav-item">
                <a
                    className="nav-link btn btn-dark text-white border rounded shadow m-2"
                    href="https://crypto.com/nft/collection/318ab765d9af6dfedd83fa5affa1d60a"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <strong> Crypto.com NFT </strong>
                </a>
            </li>
        </ul>
        );
}

// Header Component
function HeaderO() {
    return (
        <header className="container-fluid text-white p-0" style={{ backgroundImage: `url(${backImage})`, backgroundSize: "cover"}}>
            <div className="row mx-auto p-3" style={{ backgroundColor: "#060606f7" }}>
                <div className="col-md-7 flex-wrap d-flex justify-content-center align-content-center vh-50 text-center p-lg-5">
                    <div className="mb-4">
                        <h1 style={{ fontSize: "55px" }}> <strong> Digital Woodworks </strong> </h1>
                    </div>
                    <div>
                        <p className="text-warning" style={{ fontSize: "1.35rem" }}> <strong> A total of 1,000 unique NFTs from two collections </strong> </p>
                        <p style={{ fontSize: "1.35rem" }}> All NFTs are unique and sculpted by shifting 13 types of hues, colors, and contrast at random levels to achive different designs </p>
                    </div>
                    <div className="mt-3 mb-5">
                        <a href="https://opensea.io/collection/bombemojis" className="btn btn-outline-light shadow me-3 mb-3">
                            <span className={``}> &#128163; </span>
                            <strong> BombEmojis </strong>
                        </a>
                        <a href="https://opensea.io/collection/astroemojis" className="btn btn-outline-light shadow me-3 mb-3">
                            <span className={``}> &#128640; </span>
                            <strong> AstroEmojis </strong>
                        </a>
                    </div>
                </div> 
                <div className="col-md-5">
                    <video className="border border-5 rounded border-white shadow" style={{ width: "100%" }} controls autoPlay muted>
                        <source className="border" src={intro} type="video/mp4" />
                        <source className="border" src={intro} type="video/ogg" />
                            Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </header>
    );
}

// Header Component
function HeaderG() {
    return (
        <header className="container-fluid p-0" style={{ backgroundImage: `url(${backImage})`, backgroundSize: "cover", minHeight :"100vh" }}>
            <div className="row mx-auto p-3" style={{ backgroundColor: "white", minHeight: "100vh" }}>
                <div className="col-md-12 text-center pt-4 pb-0 border-bottom mb-5">
                    <h1 style={{ fontSize: "55px" }}>
                        <span className={``}>&#128163;</span>
                        <strong>BombEmojis</strong>
                    </h1>
                    <a href="https://opensea.io/collection/bombemojis" className="btn btn-lg btn-dark mb-2">
                        <span className={``}> &#9973; </span>
                        <strong> OpenSea </strong>
                    </a>
                    <p className="" style={{ fontSize: "1.35rem" }}> <strong>A collection of 500 Bomb-head Angel emojis symbolizing unleashed emotions </strong> </p>
                </div>
                <div className="col-md-11 mx-auto flex-wrap d-flex justify-content-center align-content-center text-center">
                    <section className="row mx-auto">
                        <ImageContainer pic={image1} />
                        <ImageContainer pic={image2} />
                        <ImageContainer pic={image3} />
                        <ImageContainer pic={image4} />
                    </section>
                </div>
            </div>
        </header>
    );
}

// Header Component
function HeaderE() {
    return (
        <header className="container-fluid p-0" style={{ backgroundImage: `url(${backImage})`, backgroundSize: "cover", minHeight: "100vh" }}>
            <div className="row mx-auto p-3 bg-light" style={{ minHeight: "100vh" }}>
                <div className="col-md-12 text-center pt-4 pb-0 border-bottom mb-5">
                    <h1 style={{ fontSize: "55px" }}>
                        <span className={``}>&#128640;</span>
                        <strong>AstroEmojis</strong>
                    </h1>
                    <a href="https://opensea.io/collection/astroemojis" className="btn btn-lg btn-dark mb-2">
                        <span className={``}> &#9973; </span>
                        <strong> OpenSea </strong>
                    </a>
                    <p className="" style={{ fontSize: "1.35rem" }}> <strong> A collection of 500 emoji astronauts symbolizing drifting emotions </strong> </p>
                </div>
                <div className="col-md-11 mx-auto flex-wrap d-flex justify-content-center align-content-center text-center">
                    <section className="row mx-auto">
                        <ImageContainer pic={image9} />
                        <ImageContainer pic={image10} />
                        <ImageContainer pic={image5} />
                        <ImageContainer pic={image7} />
                    </section>
                </div>
            </div>
        </header>
    );
}

function NavLink({ title, link, logo, emoji }) {
    return (
        <li className="nav-item me-3 mb-3 mb-md-0">
            <div className="btn-group">
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link btn btn-outline-light border-0 text-dark px-2"
                >
                    <i className={`${logo}`}> </i>
                    <span className={``}> { emoji } </span>
                    <strong> { title } </strong>
                </a>
            </div>
        </li>
        );
}

function ImageContainer({ pic }) {

    return (
        <div className="col-6 col-md-3 p-1">
            <img src={pic} className="img-thumbnail p-1 bg-white border-4 border rounded-0" alt="BombEmojis" />
        </div>
        );
}

// Exporting the App
export default App;
