import './Loader.scss'
import { BounceLoader } from "react-spinners";
const Loader = () => {
  return (
    <div className="loader">
      <BounceLoader color="#6d2946" />
      {/* <p>Loading...</p> */}
    </div>
  );
}

export default Loader