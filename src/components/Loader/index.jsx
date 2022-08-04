import { ThreeDots } from 'react-loader-spinner';
import s from './index.module.css';


function Loader() {
  return (
    <div className={s.loader}>
      <ThreeDots color="#00BFFF" height={80} width={80} />
    </div>
  );
}

export default Loader;
