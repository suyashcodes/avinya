import "./aboutevent.css";
// import googleMapImage from "../../../public/assets/fonts/map.png";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
const Aboutevent = () => {
  return (
    <div className="wrap-about-us" id="about">
      <div className="eventContainer">
        <div className="eventSection">
          <h1 className="eventHeading">About Event</h1>
          <p className="eventPara">
          Avinya a State
Level Project Exhibition/Competition organized by the Computer Department of DIT, Pimpri. Avinya is aimed at fostering innovation, creativity, and technological excellence
among students. It serves as a platform for aspiring engineers to showcase their ideas,
& solutions to real-world problems.
          </p>
        </div>
        <div className="eventSection withLocation">
          <h1 className="eventHeading">Event Location</h1>
          <a
            className="eventLocationAnchor"
            href="https://maps.app.goo.gl/hAtE8qGvbsAwTjtF7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="eventLocationImage"
              src={"./assets/fonts/map.png"}
              alt="Google Map showing event location"
            />
          </a>
        </div>
        <div className="eventSection withTiming">
          <h1 className="eventHeading">Event Timing</h1>
          <div className="timingCont">
            <CalendarMonthIcon className="icon" />
            <p className="timingText">13 April 2024</p>
          </div>
          <div className="timingCont">
            <AccessTimeOutlinedIcon className="icon" />
            <p className="timingText">10:00 AM onwards</p>
          </div>
        </div>
      </div>
      <div className="aboutUs">
        <div className="aboutContent">
          <h1 className="aboutHeading">About Us</h1>
          <p className="aboutPara">
          
Welcome to Dr. D. Y. Patil Institute of Technology (DIT), Pimpri, Pune. The oldest campus of Dr. D. Y. Patil group of Institutions. This campus is started in year 1983 and further nurtured by our visionary Chairman Hon’ble Dr. P. D. Patil with the vision Empowerment through knowledge Better Education Better World. The institute is being progressed under the dynamic leadership of Hon’ble Dr. Somnath Patil. This institute is awarded Best College Award by Savitribai Phule Pune University. The Institute is ranked in top 200 Engineering Institutions in India including IIT’s and NIT’s in NIRF ranking framework by MHRD, Government of India. The institute is Accredited by NAAC with a CGPA of 3.74 on a four point scale at 'A++' Grade.
          </p>
        </div>
        <div className="aboutImg">
          <img
            className="aboutUsImage"
            src={"./assets/avinyalogo2.png"}
            alt="Google Map showing event location"
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutevent;
