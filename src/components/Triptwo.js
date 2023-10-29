import TriptwoData from "./TriptwoData";
import "./Triptwo.css";
import Trip1 from "../assest/1.jpg";
import Trip2 from "../assest/2.jpg";
import Trip3 from "../assest/3.jpg";

function Triptwo() {
  return (
    <div className="trip">
      <div className="tripcard">
        <TriptwoData
          image={Trip1}
          heading="Trip in Kochi"
          text="Located in the state of Tamil Nadu, Kodaikanal is one of the most famous honeymoon destinations in India.
  A Lakeside resort town of Tamil Nadu, Kodaikanal has a beautiful climate, mist-covered manicured cliffs and waterfall 
  that come together to create the ideal setting for a perfect getaway. Kodaikanal means the gift of the forests Nestled amidst the rolling slopes of the Palani
   Hills, Kodaikanal stands at."
        />
        <TriptwoData
          image={Trip2}
          heading="Trip in Masoori"
          text="Located in the state of Tamil Nadu, Kodaikanal is one of the most famous honeymoon destinations in India.
  A Lakeside resort town of Tamil Nadu, Kodaikanal has a beautiful climate, mist-covered manicured cliffs and waterfall 
  that come together to create the ideal set"
        />
        <TriptwoData
          image={Trip3}
          heading="Trip in Ooty"
          text="Located in the state of Tamil Nadu, Kodaikanal is one of the most famous honeymoon destinations in India.
  A Lakeside resort town of Tamil Nadu, Kodaikanal has a beautiful climate, mist-covered manicured cliffs and waterfall 
  that come together to create the ideal set"
        />
      </div>
    </div>
  );
}

export default Triptwo;
