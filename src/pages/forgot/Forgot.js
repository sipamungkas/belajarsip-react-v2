import SendOTP from "./SendOTP";
import OTPVerification from "./OTPVerification";
import NewPassword from "./NewPassword";
import { useLocation } from "react-router-dom";

function Forgot(props) {
  const location = useLocation();
  console.log(location);
  switch (location.pathname) {
    case "/forgot/otp-verification":
      return <OTPVerification />;
    case "/forgot/new-password":
      return <NewPassword />;
    default:
      return <SendOTP />;
  }
}

export default Forgot;
