import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile'; 
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';

function App() {
  return (
    <>
    const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
      <Header />
      <WelcomeMessage />
      <MainContent />
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      /> 
      <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
      <Footer />
    </>
  );
}

export default App;