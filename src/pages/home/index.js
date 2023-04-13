import {useNavigate} from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <p style={{paddingBottom: '20px'}}>Home</p>
      <button style={{marginRight: '20px'}} onClick={() => navigate('users')}>
        Users
      </button>
      <button onClick={() => navigate('cars')}>Cars</button>
    </div>
  );
};

export default Home;
