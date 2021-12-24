import './App.css';
import image1 from './image1.webp';
import image2 from './image2.webp';
import image3 from './image3.webp';
import image4 from './image4.webp';
import image5 from './image5.webp';
import image6 from './image6.webp';
import image7 from './image7.webp';
import image8 from './image8.webp';
import image9 from './image9.webp';
import image10 from './image10.webp';

// Main Application
function App() {

  return (
      <main className="App ">

          {/* TopNav Component */}
          <TopNav />

          {/* Header Component */}
          <Header />

          {/* LowerNav Component */}
          <LowerNav />

          {/* Collection Component */}
          <CollectionA
              name="Digital Woodworks"
              platform="OpenSea"
              platformLink="https://opensea.io/collection/digital-woodworks"
              description="a collection of cryptoEmojis designed by shifting 13 types of hues, 
                           colors, and contrast with a supply of 500 NFTs."
              supply="500 NFTs to be minted."
              price="0.01 ETH"
              imageA={image2}
              imageB={image1}
          />

          {/* Collection Component */}
          <CollectionB
              name="CryptoEmojis"
              platform="Crypto.com"
              platformLink="https://crypto.com/nft/collection/318ab765d9af6dfedd83fa5affa1d60a"
              description="a collection of green CryptoEmojis (only available on crypto.com NFT) designed by shifting 13 types of hues, 
                           colors, and contrast with a supply of 500 NFTs."
              supply="500 NFTs to be minted."
              price="$14"
              imageA={image6}
              imageB={image8}
          />

          {/* Collection Component */}
          <CollectionA
              name="AstroEmojis"
              platform="OpenSea"
              platformLink="https://opensea.io/collection/astroemojis"
              description="a collection of 500 lost Astro Emojis NFTs. "
              supply="500 NFTs to be minted."
              price="0.0045 ETH"
              imageA={image9}
              imageB={image10}
          />

          {/* Footer */}
          <footer className="bg-dark text-center text-white p-4">
              <p className="mb-0"> <b> Woodworks Club </b> </p>
          </footer>

      </main>
  );
}

// TopNav Component
function TopNav() {
    return (
        <ul className="nav bg-dark">
            <li className="nav-item">
                <b> <a className="nav-link text-white disabled" href="#home" style={{ fontSize: "1.6rem" }}> Woodworks Club </a> </b>
            </li>
        </ul>
        );
}

// LowerNav Component
function LowerNav() {
    return (
        <ul className="nav justify-content-center bg-dark pb-3">
            <li className="nav-item">
                <a className="nav-link btn btn-primary text-white border rounded shadow m-2"
                    href="https://twitter.com/heartister"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <i className='fab fa-twitter-square'></i>
                    <strong> Twitter </strong>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link btn btn-danger text-white border rounded shadow m-2"
                    href="https://www.instagram.com/digital_woodworks/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <i className='fab fa-instagram'></i>
                    <strong> Instagram </strong>
                </a>
            </li>
            <li className="nav-item">
                <a
                    className="nav-link btn btn-dark text-white border rounded shadow m-2"
                    href="https://opensea.io/collection/digital-woodworks"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <strong>  OpenSea  </strong>
                </a>
            </li>
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
function Header() {
    return (
        <header className="container-fluid m-0 p-3 bg-dark">
            <div id="carousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row mx-auto">
                            <div className="col-6 col-sm-3 p-2">
                                <img src={image1} className="img-thumbnail" alt="Los Angeles" />
                            </div>
                            <div className="col-6 col-sm-3 p-2">
                                <img src={image2} className="img-thumbnail" alt="Los Angeles" />
                            </div>
                            <div className="col-6 col-sm-3 p-2">
                                <img src={image10} className="img-thumbnail" alt="Los Angeles" />
                            </div>
                            <div className="col-6 col-sm-3 p-2">
                                <img src={image4} className="img-thumbnail" alt="Los Angeles" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row mx-auto">
                            <div className="col-6 col-sm-3 p-2">
                                <img src={image5} className="img-thumbnail" alt="Los Angeles" />
                            </div>
                            <div className="col-6 col-sm-3 p-2">
                                <img src={image6} className="img-thumbnail" alt="Los Angeles" />
                            </div>
                            <div className="col-6 col-sm-3 p-2">
                                <img src={image7} className="img-thumbnail" alt="Los Angeles" />
                            </div>
                            <div className="col-6 col-sm-3 p-2">
                                <img src={image8} className="img-thumbnail" alt="Los Angeles" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row mx-auto">
                            <div className="col-6 col-sm-3 p-2">
                                <img src={image3} className="img-thumbnail" alt="Los Angeles" />
                            </div>
                            <div className="col-6 col-sm-3 p-2">
                                <img src={image10} className="img-thumbnail" alt="Los Angeles" />
                            </div>
                            <div className="col-6 col-sm-3 p-2">
                                <img src={image4} className="img-thumbnail" alt="Los Angeles" />
                            </div>
                            <div className="col-6 col-sm-3 p-2">
                                <img src={image9} className="img-thumbnail" alt="Los Angeles" />
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carousel" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#carousel" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>
                </div>
            </div>
        </header>
        );
}

// CollectionA Component
function CollectionA(props) {
    // Important variables
    const { name, description, supply, price, platform, imageA, imageB, platformLink } = props;

    // Return UI
    return (
        <section className="container-fluid p-3 border-top">
            <div className="row align-content-center justify-content-center">
                <div className="col-lg-6 align-self-center px-lg-5 px-4 pt-5 pb-lg-5 pb-3">
                    <h3 className="text-capitalize mb-4" style={{ fontSize: "2rem" }}>
                        <strong className="text-dark"> {name} </strong>
                        <small>
                            <a href={platformLink} rel="noopener noreferrer" target="_blank" style={{ fontSize: "15pt" }}>
                                <span> {platform} </span>
                                <i className="fas fa-external-link-alt"></i>
                            </a>
                        </small>
                    </h3>
                    <p className="mb-5" style={{ fontSize: "15pt" }}>
                        <strong className="border-bottom border-dark"> { name } </strong>
                        <span> is {description} </span>

                    </p>
                    <div id="accordion" style={{ fontSize: "15pt" }}>

                        <div className="card border-dark mb-1">
                            <div className="card-header alert-light">
                                <a className="collapsed card-link alert-light" data-toggle="collapse" href="#collapseOne">
                                    <div className="clearfix">
                                        <span className="float-left">
                                            <span> Maximum Supply </span>
                                        </span>
                                        <span className="float-right"> <i className="fas fa-sort"></i> </span>
                                    </div>
                                </a>
                            </div>
                            <div id="collapseOne" className="collapse" data-parent="#accordion">
                                <div className="card-body">
                                    <p> <strong> {name} </strong> has a maximum supply of { supply } </p>
                                </div>
                            </div>
                        </div>

                        <div className="card border-dark mb-1">
                            <div className="card-header alert-light">
                                <a className="collapsed card-link alert-light" data-toggle="collapse" href="#collapseTwo">
                                    <div className="clearfix">
                                        <span className="float-left">
                                            <span> Floor Price </span>
                                        </span>
                                        <span className="float-right"> <i className="fas fa-sort"></i> </span>
                                    </div>
                                </a>
                            </div>
                            <div id="collapseTwo" className="collapse" data-parent="#accordion">
                                <div className="card-body">
                                    <p> <strong> {name} </strong> current floor price is {price}. </p>
                                </div>
                            </div>
                        </div>

                        <div className="card border-danger mb-1">
                            <div className="card-header alert-danger">
                                <a className="collapsed card-link alert-danger" href={platformLink} rel="noopener noreferrer" target="_blank">
                                    <div className="clearfix">
                                        <span className="float-left">
                                            <b> Get one on {platform} </b>
                                        </span>
                                        <span className="float-right"> <i className="fas fa-external-link-alt"></i> </span>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-lg-6 align-self-center px-lg-5 px-3 px-0 pt-5 w-100">
                    <div className="row mx-auto">
                        <div className="col-6 col-sm-6 p-2">
                            <img src={imageA} className="img-thumbnail" alt="Los Angeles" />
                        </div>
                        <div className="col-6 col-sm-6 p-2">
                            <img src={imageB} className="img-thumbnail" alt="Los Angeles" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
}

// CollectionB Component
function CollectionB(props) {
    // Important variables
    const { name, description, supply, price, platform, imageA, imageB, platformLink } = props;

    // Return UI
    return (
        <section className="container-fluid p-3 border-top">
            <div className="row align-content-center justify-content-center">
                <div className="col-lg-6 align-self-center px-lg-5 px-3 px-0 pt-5 w-100">
                    <div className="row mx-auto">
                        <div className="col-6 col-sm-6 p-2">
                            <img src={imageA} className="img-thumbnail" alt="Los Angeles" />
                        </div>
                        <div className="col-6 col-sm-6 p-2">
                            <img src={imageB} className="img-thumbnail" alt="Los Angeles" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 align-self-center px-lg-5 px-4 pt-5 pb-lg-5 pb-3">
                    <h3 className="text-capitalize mb-4" style={{ fontSize: "2rem" }}>
                        <strong className="text-dark"> {name} </strong>
                        <small>
                            <a href={platformLink} rel="noopener noreferrer" target="_blank" style={{ fontSize: "15pt" }}>
                                <span> {platform} </span>
                                <i className="fas fa-external-link-alt"></i>
                            </a>
                        </small>
                    </h3>
                    <p className="mb-5" style={{ fontSize: "15pt" }}>
                        <strong className="border-bottom border-dark"> { name } </strong>
                        <span> is {description} </span>

                    </p>
                    <div id="accordion" style={{ fontSize: "15pt" }}>

                        <div className="card border-dark mb-1">
                            <div className="card-header alert-light">
                                <a className="collapsed card-link alert-light" data-toggle="collapse" href="#collapseOne">
                                    <div className="clearfix">
                                        <span className="float-left">
                                            <span> Maximum Supply </span>
                                        </span>
                                        <span className="float-right"> <i className="fas fa-sort"></i> </span>
                                    </div>
                                </a>
                            </div>
                            <div id="collapseOne" className="collapse" data-parent="#accordion">
                                <div className="card-body">
                                    <p> <strong> {name} </strong> has a maximum supply of { supply } </p>
                                </div>
                            </div>
                        </div>

                        <div className="card border-dark mb-1">
                            <div className="card-header alert-light">
                                <a className="collapsed card-link alert-light" data-toggle="collapse" href="#collapseTwo">
                                    <div className="clearfix">
                                        <span className="float-left">
                                            <span> Floor Price </span>
                                        </span>
                                        <span className="float-right"> <i className="fas fa-sort"></i> </span>
                                    </div>
                                </a>
                            </div>
                            <div id="collapseTwo" className="collapse" data-parent="#accordion">
                                <div className="card-body">
                                    <p> <strong> {name} </strong> current floor price is {price}. </p>
                                </div>
                            </div>
                        </div>

                        <div className="card border-danger mb-1">
                            <div className="card-header alert-danger">
                                <a className="collapsed card-link alert-danger" href={platformLink} rel="noopener noreferrer" target="_blank">
                                    <div className="clearfix">
                                        <span className="float-left">
                                            <b> Get one on {platform} </b>
                                        </span>
                                        <span className="float-right"> <i className="fas fa-external-link-alt"></i> </span>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        );
}

// Exporting the App
export default App;
