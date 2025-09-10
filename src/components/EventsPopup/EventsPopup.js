import React from "react";
import { X } from "lucide-react";
import "./EventsPopup.css";


const EventsPopup = ({ open, onClose, events = [] }) => {
  if (!open) return null;
  return (
    <div className="popup-overlay" role="dialog" aria-modal="true">
      <div className="popup-panel">
        <div className="popup-head">
          <h2>Upcoming Events</h2>
          <button aria-label="Close" onClick={onClose} className="icon-btn">
            <X size={22} />
          </button>
        </div>
        <div className="popup-body">
          {events.map((e) => (
            <div key={e.id} className="event-item">
              <h3>{e.title}</h3>
              <p className="muted small">
                {new Date(e.date).toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
              </p>
              <p className="muted small">{e.time} • {e.location}</p>
            </div>
          ))}
        </div>
        <div className="popup-actions">
          <button className="btn close-btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};


export default EventsPopup;