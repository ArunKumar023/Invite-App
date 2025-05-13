import React, { useState } from 'react';
import './SingleInvitePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faTrash, faPlus, faCircle, faBars, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';

const SingleInvitePage = () => {
  const [activeLink, setActiveLink] = useState('Invite Visitor');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [rows, setRows] = useState([{ id: 1 }]);
  const [isRecurrence, setIsRecurrence] = useState(false);
  const [language, setLanguage] = useState('en');
  const [showPopup, setShowPopup] = useState(false);
  const [activeTab, setActiveTab] = useState('Single Invite');

  const [formData, setFormData] = useState({
    mobileNumber: '',
    fullName: '',
    emailId: '',
    purpose: '',
    entryPoint: '',
    host: '',
    branch: '',
    vehicle: '',
    vehicleNumber: '',
    defaultDate: '',
    defaultVisitDay: '',
    defaultTime: '',
    defaultMeetingRoom: '',
  });

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const addRow = () => {
    setRows([...rows, { id: rows.length + 1 }]);
  };

  const removeRow = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleReset = () => {
    setFormData({
      mobileNumber: '',
      fullName: '',
      emailId: '',
      purpose: '',
      entryPoint: '',
      host: '',
      branch: '',
      vehicle: '',
      vehicleNumber: '',
      defaultDate: '',
      defaultVisitDay: '',
      defaultTime: '',
      defaultMeetingRoom: '',
    });

    setIsRecurrence(false);
    setRows([{ id: 1 }]);

    document.querySelectorAll('input, select:not(.language-select)').forEach((element) => {
      if (element.type === 'checkbox') {
        element.checked = false;
      } else {
        element.value = '';
      }
    });
  };

  const handleInvite = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    handleReset();
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="single-invite-page">
      <button className="hamburger" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className={`overlay ${isSidebarOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="logo">
          <FontAwesomeIcon icon={faCircle} className="logo-icon" />
          Entra
        </div>
        <nav>
          <ul>
            <li className={activeLink === 'Invite Visitor' ? 'active' : ''} onClick={() => handleLinkClick('Invite Visitor')}>
              Invite Visitor
            </li>
            <li className={activeLink === 'Invite List' ? 'active' : ''} onClick={() => handleLinkClick('Invite List')}>
              Invite List
            </li>
            <li className={activeLink === 'Book Meeting Room' ? 'active' : ''} onClick={() => handleLinkClick('Book Meeting Room')}>
              Book Meeting Room
            </li>
            <li className={activeLink === 'Calendar View' ? 'active' : ''} onClick={() => handleLinkClick('Calendar View')}>
              Calendar View
            </li>
            <li className={activeLink === 'Meeting Room View' ? 'active' : ''} onClick={() => handleLinkClick('Meeting Room View')}>
              Meeting Room View
            </li>
            <li className={activeLink === 'Settings' ? 'active' : ''} onClick={() => handleLinkClick('Settings')}>
              Settings
            </li>
            <li className={activeLink === 'Emergency Alert' ? 'active' : ''} onClick={() => handleLinkClick('Emergency Alert')}>
              Emergency Alert
            </li>
            <li className={activeLink === 'Helpdesk' ? 'active' : ''} onClick={() => handleLinkClick('Helpdesk')}>
              Helpdesk
            </li>
          </ul>
        </nav>
      </div>
      <div className="main-content">
        <div className="header">
          <div className="tabs">
            <button
              className={`tab ${activeTab === 'Single Invite' ? 'active' : ''}`}
              onClick={() => handleTabClick('Single Invite')}
            >
              Single Invite
            </button>
            <button
              className={`tab ${activeTab === 'Bulk Invite' ? 'active' : ''}`}
              onClick={() => handleTabClick('Bulk Invite')}
            >
              Bulk Invite
            </button>
            <button
              className={`tab ${activeTab === 'Meeting Invite' ? 'active' : ''}`}
              onClick={() => handleTabClick('Meeting Invite')}
            >
              Meeting Invite
            </button>
          </div>
          <div className="profile-section">
            <select className="language-select" value={language} onChange={handleLanguageChange}>
              <option value="en">EN</option>
              <option value="es">ES</option>
            </select>
            <FontAwesomeIcon icon={faBell} className="bell-icon" />
            <FontAwesomeIcon icon={faUser} className="profile-icon" />
          </div>
        </div>
        <div className="form-section">
          <h2>Please fill in the details.</h2>
          <div className="form-grid">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="mobileNumber">Mobile Number</label>
                <input
                  type="text"
                  id="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="emailId">Email ID</label>
                <input
                  type="email"
                  id="emailId"
                  value={formData.emailId}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="purpose">Purpose</label>
                <select
                  id="purpose"
                  value={formData.purpose}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>Select Purpose</option>
                  <option value="meeting">Meeting</option>
                  <option value="interview">Interview</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="entryPoint">Entry Point</label>
                <select
                  id="entryPoint"
                  value={formData.entryPoint}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>Select Entry Point</option>
                  <option value="gate1">Gate 1</option>
                  <option value="gate2">Gate 2</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="host">Host</label>
                <select
                  id="host"
                  value={formData.host}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>Select Host</option>
                  <option value="host1">Host 1</option>
                  <option value="host2">Host 2</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="branch">Branch</label>
                <select
                  id="branch"
                  value={formData.branch}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>Select Branch</option>
                  <option value="branch1">Branch 1</option>
                  <option value="branch2">Branch 2</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="vehicle">Vehicle</label>
                <select
                  id="vehicle"
                  value={formData.vehicle}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>Select Vehicle Type</option>
                  <option value="car">Car</option>
                  <option value="bike">Bike</option>
                  <option value="none">None</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="vehicleNumber">Vehicle Number</label>
                <input
                  type="text"
                  id="vehicleNumber"
                  value={formData.vehicleNumber}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="recurrence-section">
            <div className="recurrence-row">
              <div className="form-group">
                <label htmlFor="defaultDate">Date</label>
                <input
                  type="date"
                  id="defaultDate"
                  value={formData.defaultDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="defaultVisitDay">Visit Day</label>
                <select
                  id="defaultVisitDay"
                  value={formData.defaultVisitDay}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>Select Visit Day</option>
                  <option value="monday">Monday</option>
                  <option value="tuesday">Tuesday</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="defaultTime">Time</label>
                <input
                  type="time"
                  id="defaultTime"
                  value={formData.defaultTime}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="defaultMeetingRoom">Meeting Room</label>
                <select
                  id="defaultMeetingRoom"
                  value={formData.defaultMeetingRoom}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>Select Meeting Room</option>
                  <option value="room1">Room 1</option>
                  <option value="room2">Room 2</option>
                </select>
              </div>
            </div>
            <label>
              <input
                type="checkbox"
                checked={isRecurrence}
                onChange={() => setIsRecurrence(!isRecurrence)}
              />
              Recurrence
            </label>
            {isRecurrence && (
              <div className="recurrence-rows">
                {rows.map((row, index) => (
                  <div className="recurrence-row" key={row.id}>
                    <div className="form-group">
                      <label htmlFor={`date-${row.id}`}>Date</label>
                      <input type="date" id={`date-${row.id}`} />
                    </div>
                    <div className="form-group">
                      <label htmlFor={`visit-day-${row.id}`}>Visit Day</label>
                      <select id={`visit-day-${row.id}`}>
                        <option value="" disabled>Select Visit Day</option>
                        <option value="monday">Monday</option>
                        <option value="tuesday">Tuesday</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor={`time-${row.id}`}>Time</label>
                      <input type="time" id={`time-${row.id}`} />
                    </div>
                    <div className="form-group">
                      <label htmlFor={`meeting-room-${row.id}`}>Meeting Room</label>
                      <select id={`meeting-room-${row.id}`}>
                        <option value="" disabled>Select Meeting Room</option>
                        <option value="room1">Room 1</option>
                        <option value="room2">Room 2</option>
                      </select>
                    </div>
                    {index > 0 && (
                      <button className="remove-row" onClick={() => removeRow(row.id)}>
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    )}
                  </div>
                ))}
                <button className="add-row" onClick={addRow}>
                  <FontAwesomeIcon icon={faPlus} /> Add Row
                </button>
              </div>
            )}
          </div>
          <div className="form-actions">
            <button className="invite-btn" onClick={handleInvite}>
              Invite
            </button>
            <button className="reset-btn" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Popup Screen */}
      {showPopup && (
        <>
          <div className="popup-overlay" onClick={handleClosePopup}></div>
          <div className="popup-container">
            <div className="popup-header">
              <h3>Visitor Details</h3>
              <button className="close-btn" onClick={handleClosePopup}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="popup">
              <div className="popup-content">
                <div className="visitor-info">
                  <div className="visitor-info-container">
                    <img
                      src="https://placehold.co/80x80"
                      alt="Visitor"
                      className="visitor-image"
                    />
                    <div className="visitor-details">
                      <h4>{formData.fullName || 'N/A'}</h4>
                      <p>Visiting: {formData.host || 'N/A'}</p>
                      <p>Official Meeting: {formData.purpose || 'N/A'}</p>
                    </div>
                    <button className="approve-btn">APPROVED</button>
                  </div>
                </div>
                <div className="details-grid">
                  <div className="detail-item">
                    <p><strong>Email ID:</strong> {formData.emailId || 'N/A'}</p>
                    <p><strong>Mobile Number:</strong> {formData.mobileNumber || 'N/A'}</p>
                    <p><strong>Date of Meet:</strong> {formData.defaultDate || 'N/A'}</p>
                    <p><strong>Time:</strong> {formData.defaultTime || 'N/A'}</p>
                  </div>
                  <div className="detail-item">
                    <p><strong>Identity Proof:</strong> Aadhar card</p>
                    <p><strong>ID number:</strong> 30****90</p>
                    <p><strong>Visitor ID number:</strong> 123456</p>
                  </div>
                </div>
                <p><strong>Meeting Room:</strong> {formData.defaultMeetingRoom || 'N/A'}, 2nd Floor</p>
                <p><strong>Company Name:</strong> {formData.branch || 'N/A'}</p>
                <p><strong>Accessories Carried:</strong> Laptop, Phone</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleInvitePage;