import './App.css';
import Footer from './Components/Footer/footer';
import Header from './Components/Header/header';
import Portfolio from './Components/Portfolio/portfolio';
// import SignupForm from './Components/signupForm/signupForm';

function App() {
  return (
    <>
     <div className="container">
    {/* <SignupForm /> */}
    <Header />
    <Portfolio />
    <Footer />
    
    </div>
    </>
  );
}

export default App;
