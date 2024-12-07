import profileImage from "../assets/images/image-jeremy.png";
import { Button } from "./Button.jsx";
export function Profile() {
  return (
    <>
      <div>
        <div>
          <div>
            <img src={profileImage} alt="a person listening to music" />
          </div>
          <div>
            <p>
              Report for <span>Jeremy Robson</span>
            </p>
          </div>
        </div>
        <div>
          <p>
            <Button>Daily</Button>
          </p>
          <p>
            <Button>Weekly</Button>
          </p>
          <p>
            <Button> Monthly</Button>
          </p>
        </div>
      </div>
    </>
  );
}
