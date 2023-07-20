import { Player } from "@lottiefiles/react-lottie-player";
import '../index.css';


const Animation = () => {
  return (
    <div className="flex justify-center">
      <Player
        loop
        autoplay
        src="/lottie/sign_up.json"
        style={{ height: "450px", width: "450px" }}
      />
    </div>
  );
};

export default Animation;