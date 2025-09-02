import React from "react";
import { X } from "lucide-react"

// Events Popup Component
const EventsPopup = ({ showEventPopup, setShowEventPopup, upcomingEvents}) => {
    if (!showEventPopup) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-96 overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">Upcoming Events</h2>
              <button
                onClick={() => setShowEventPopup(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>
            <div className="space-y-3">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="border-l-4 border-red-600 pl-4 py-2">
                  <h3 className="font-semibold text-gray-900">{event.title}</h3>
                  <p className="text-sm text-gray-600">
                    {new Date(event.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                  <p className="text-sm text-gray-600">{event.time} • {event.location}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <button
                onClick={() => setShowEventPopup(false)}
                className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default EventsPopup;