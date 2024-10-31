import logo from "../assets/logo.svg";
import { Link } from 'react-router-dom';

const Logo = ({className}) => {
  return (
  
    <Link to="/">
      <img  className={className} src={logo} alt="malerkit logo" />
    </Link>

  )
}

export default Logo