import React, { useState,useEffect, useRef } from 'react';
import './messagesStyles.css';
import Navbar from '../../../components/navigation/nurseNavbar/Navbar';
import Header from '../../../components/Header/Header';
const MessagesScreen = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [messageText, setMessageText] = useState('');
  const messagesRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the messages body when selectedPatient or its messages change
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [selectedPatient]);

  const patients = [
    {
      id: 1,
      name: 'Patient 1',
      messages: [
        {
          content: 'Message from patient 1',
          sender: 'patient',
          timestamp: new Date().toLocaleTimeString(),
        },
        {
          content: 'Reply from nurse',
          sender: 'nurse',
          timestamp: new Date().toLocaleTimeString(),
        },
      ],
    },
    // Add more patients here...
    {
      id: 2,
      name: 'Patient 2',
      messages: [
        {
          content: 'Message from patient 1',
          sender: 'patient',
          timestamp: new Date().toLocaleTimeString(),
        },
        {
          content: 'Reply from nurse',
          sender: 'nurse',
          timestamp: new Date().toLocaleTimeString(),
        },
      ],
    },
  ];

  const handlePatientSelection = (patient) => {
    setSelectedPatient((prevPatient) => {
      if (prevPatient && prevPatient.id === patient.id) {
        // If the same patient is selected again, return the previous patient without changes
        return prevPatient;
      } else {
        // Merge the messages of the newly selected patient with the previous patient's messages
        const updatedPatient = {
          ...patient,
          messages: [...(prevPatient?.messages || []), ...patient.messages],
        };
        return updatedPatient;
      }
    });
  };
  

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleReply = (patient) => {
    const replyMessage = `Reply message to ${patient.name}`;
    const updatedPatients = patients.map((p) => {
      if (p.id === patient.id) {
        return {
          ...p,
          messages: [
            ...p.messages,
            {
              content: replyMessage,
              sender: 'nurse',
              timestamp: new Date().toLocaleTimeString(),
            },
          ],
        };
      }
      return p;
    });
    setSelectedPatient({
      ...patient,
      messages: [
        ...patient.messages,
        {
          content: replyMessage,
          sender: 'nurse',
          timestamp: new Date().toLocaleTimeString(),
        },
      ],
    });
    // Update patients state with updatedPatients
  };

  const handleMessageInput = (e) => {
    setMessageText(e.target.value);
  };

  const handleSendMessage = () => {
    if (messageText.trim() === '') return;

    const replyMessage = messageText.trim();
    const updatedPatients = patients.map((p) => {
      if (p.id === selectedPatient.id) {
        return {
          ...p,
          messages: [
            ...p.messages,
            {
              content: replyMessage,
              sender: 'nurse',
              timestamp: new Date().toLocaleTimeString(),
            },
          ],
        };
      }
      return p;
    });

    setSelectedPatient((prevPatient) => ({
      ...prevPatient,
      messages: [
        ...prevPatient.messages,
        {
          content: replyMessage,
          sender: 'nurse',
          timestamp: new Date().toLocaleTimeString(),
        },
      ],
    }));

    setMessageText('');
    // Update patients state with updatedPatients
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="container-message">
      <div className="message-navbar">
        <Navbar />
      </div>
      <div className="message-header">
        <Header name="CHAT BOX" />
      </div>
      <div className="messages-container">
        <div className="patient-list">
          <div className="search-bar">
            <input
              type="text"
              className="search-input"
              placeholder="Search patients..."
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <div className="patient-items">
            {filteredPatients.map((patient) => (
              <div
                key={patient.id}
                className={`patient-item ${selectedPatient === patient ? 'selected' : ''}`}
                onClick={() => handlePatientSelection(patient)}
              >
                <div className="patient-avatar">{patient.name.slice(0, 2)}</div>
                <div className="patient-name">{patient.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="chat-container">
          <div className="messages-header">
            <h2 className="messages-title">
              {selectedPatient ? selectedPatient.name : 'No Patient Selected'}
            </h2>
          </div>
          <div className="messages-body" ref={messagesRef}>
            <div className="messages-list">
              {selectedPatient &&
                selectedPatient.messages.map((message, index) => (
                  <div
                    key={index}
                    className={`message ${message.sender === 'nurse' ? 'sent' : 'received'}`}
                  >
                    <div className="message-avatar">
                      {message.sender === 'nurse' ? 'N' : 'P'}
                    </div>
                    <div className="message-content">
                      <p>{message.content}</p>
                      <span className="timestamp">{message.timestamp}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="messages-footer">
            <form className="message-form">
              <input
                type="text"
                className="message-input"
                placeholder="Type a message..."
                value={messageText}
                onChange={handleMessageInput}
                onKeyDown={handleKeyDown}
              />
              <button
                type="button"
                className="send-button"
                disabled={!selectedPatient}
                onClick={handleSendMessage}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesScreen;
