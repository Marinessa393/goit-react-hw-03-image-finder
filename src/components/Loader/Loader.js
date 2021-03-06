import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
export default function Spinner() {
  return (
    <div className="Loader">
      <Loader
        type="Hearts"
        color="#e91184"
        height={160}
        width={160}
        timeout={3000} //3 secs
      />
    </div>
  );
}
