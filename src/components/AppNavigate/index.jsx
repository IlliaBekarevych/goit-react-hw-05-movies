import { useNavigate } from 'react-router-dom';
import Navigation from 'components/Navigation';
import Button from 'components/Button';
import s from './index.module.css'

function AppNavigate() {
  const navigate = useNavigate();

  const clickGoBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/', { replace: true });
    }
  };

  return (
    <header className={s.header}>
      <Navigation />
      <div>
        <Button title={'Go back'} onClick={clickGoBack} />
      </div>
    </header>
  );
}

export default AppNavigate;
