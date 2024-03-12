import "./eventteam.css";

const EventTeam = () => {
  return (
    <div className="eventteam" id="team">
      <div className="eventteam-title">
        Event <br /> Team
      </div>
      <div className="eventteam-container">
        <div className="eventteam-card">
          <img
            className="eventteam-img"
            src="./assets/personicon.png"
            alt="Team Member 1"
          />
          <h2 className="eventteam-name">Tanishka Dhole</h2>
          <p className="eventteam-position">Event Head</p>
          <div className="eventteam-social">
            <a
              className="whatsapp-anchor"
              href="https://wa.me/+918605702805"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="socialImg"
                src={"./assets/whatsapp.png"}
                alt="Whatsapp Icons"
              />
            </a>
            <a
              className="whatsapp-anchor"
              href="https://www.linkedin.com/in/vedant-patil-34b098235/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="socialImg"
                src={"./assets/linkedin.png"}
                alt="Whatsapp Icons"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTeam;
