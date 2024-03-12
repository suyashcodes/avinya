import "./domain.css";

const Domain = () => {
  return (
    <>
      <div className="wrap-domain" id="domain">
        <div>
          <div className="domainHeading">TRACKS</div>
        </div>
        <div className="trackBoxes">
          <div className="trackBox">
            <h5 className="trackHeading">Data Science</h5>
          </div>
          <div className="trackBox">
            <h5 className="trackHeading">Analog and Digital Communication</h5>
          </div>
          <div className="trackBox">
            <h5 className="trackHeading">Data Sceince</h5>
          </div>
          <div className="trackBox">
            <h5 className="trackHeading">Signal and Image Processing</h5>
          </div>
          <div className="trackBox">
            <h5 className="trackHeading">Real-world<br/> applications</h5>
          </div>
          <div className="trackBox">
            <h5 className="trackHeading">Cyber Security</h5>
          </div>
          <div className="trackBox">
            <h5 className="trackHeading">Data Visualization</h5>
          </div>
          <div className="trackBox">
            <h5 className="trackHeading">Soft Computing & Artificial Intelligence</h5>
          </div>

          <div className="trackBox">
            <h5 className="trackHeading">Data Sceince</h5>
            {/* <p className="trackDesc">
              Now, brace yourselves for the frontier of technology with Web 3.0.
              The next evolution of the internet is here, promising
              decentralized, user-centric experiences. Explore blockchain, smart
              contracts, and decentralized applications (DApps) to revolutionize
              the way we interact online. This is your chance to be at the
              forefront of the internet's transformation.
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Domain;
