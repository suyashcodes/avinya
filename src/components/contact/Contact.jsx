import "./contact.css";

const Contact = () => {
  // const redirectToLink = "https://bit.ly/3vNNbkZ";

  return (
    <div className="contact" id="contact">
      <img
        className="contact-img"
        src="./assets/avinyalogo2.png"
        alt="contact"
      />
      <div className="contact-container">
        <h1 className="contact-heading">Contact</h1>
        <div className="cont">
          <h2 className="cnthead">Faculty Coordinators</h2>
          <h4 className="name">Prof. Jameer Kotwal</h4>
          <h4 className="name">9403184279</h4>
          <h4 className="name">Prof. Shweta Koparde</h4>
          <h4 className="name">9960614717</h4>
          <h2 className="cnthead">Student Coordinators</h2>
          <h4 className="name">Tanishka Dhole</h4>
          <h4 className="name">8605702805</h4>
          <h4 className="name">Rahul Pandit</h4>
          <h4 className="name">9004803364</h4>
        </div>
        <h3 className="copyright">Design and Developed by Avinya &copy; 2024</h3>
    </div>
    </div>
  );
};

export default Contact;
