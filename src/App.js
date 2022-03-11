
import './App.css';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import Content from './Pages/Content';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import GettingStarted from './Pages/GettingStarted';
import HowToStart from './Pages/HowToStart';
import WorkExperience from './Pages/WorkExperience';
import Education from './Pages/Education';
import Skills from './Pages/Skills';
import Summry from './Pages/Summry';
import FinalPage from './Pages/FinalPage';
import { Provider } from 'react-redux';
import store from './store.js'



function App() {

  // const app = initializeApp(firebaseConfig);

  return (
    <Router>
      <Provider store={store}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/getstart" element={<GettingStarted />} />
            <Route path="/howtostart" element={<HowToStart />} />
            <Route path="/content" element={<Content />} />
            <Route path="/workexp" element={<WorkExperience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/summry" element={<Summry />} />
            <Route path="/finalpage" element={<FinalPage />} />
          </Routes>
        </Layout>
      </Provider>
    </Router>
  );
}

export default App;
