import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import EventsPopup from './components/EventsPopup';
import Footer from './components/Footer';

import HomePage from "./pages/HomePage";
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      /*case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />; */
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      mobileMenuOpen={mobileMenuOpen}
      setMobileMenuOpen={setMobileMenuOpen}/>
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