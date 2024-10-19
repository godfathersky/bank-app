import './PreLoader.css';
import logo from './assets/hardware-webshop-logo.png';

function PreLoader() {
  return (
    <div className="PreLoader">
      <img src={logo} className="PreLoader-logo" alt="logo" style={{width:'150px', height:'150px'}}/>
    </div>
  );
}

export default PreLoader;