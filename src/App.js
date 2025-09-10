import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation/Navigation';
import EventsPopup from './components/EventsPopup/EventsPopup';
import Footer from './components/Footer/Footer';

import HomePage from "./pages/Homepage/HomePage";
import AboutPage from './pages/AboutPage/AboutPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [showEventPopup, setShowEventPopup] = useState(false);

  // Simulate upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "Sunday Service",
      date: "2025-08-31",
      time: "9:00 AM",
      location: "Main Sanctuary"
    },
    {
      id: 2,
      title: "Youth Fellowship",
      date: "2025-09-02",
      time: "6:00 PM", 
      location: "Youth Hall"
    },
    {
      id: 3,
      title: "Women's Conference",
      date: "2025-09-05",
      time: "10:00 AM",
      location: "Conference Hall"
    }
  ];

  // Show popup on initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEventPopup(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div>
      <Navigation 
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      />
      {renderCurrentPage()}
      <EventsPopup 
      showEventPopup={showEventPopup}
      setShowEventPopup={setShowEventPopup}
      upcomingEvents={upcomingEvents}/>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;