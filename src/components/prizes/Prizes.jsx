import "./prizes.css";

const Prizes = () => {
  return (
    <div className="prizes" id="prizes">
      <div className="prizes-title">Prizes</div>
      <div className="prizes-container">
        <div className="prizes-card">
          <img className="prizes-img" src="./assets/1.png" alt="cash" />
          <h2 className="prizes-amount">10000RS</h2>
        </div>
        <div className="prizes-card">
          <img className="prizes-img" src="./assets/2.png" alt="cash" />
          <h2 className="prizes-amount">7000RS</h2>
        </div>
        <div className="prizes-card">
          <img className="prizes-img" src="./assets/3.png" alt="cash" />
          <h2 className="prizes-amount">5000RS</h2>
        </div>
        <div className="prizes-card">
          <img className="prizes-img" src="./assets/certi.png" alt="cash" />
          <h2 className="prizes-amount">Participation Certificates</h2>
        </div>
      </div>
    </div>
  );
};
export default Prizes;
