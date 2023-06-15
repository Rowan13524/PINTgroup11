import React, { useState } from 'react';
import './settingsStyles.css';
import Navbar from '../../../components/navigation/nurseNavbar/Navbar';
import { FiUser, FiPhone, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import { MdOutlineAlternateEmail } from 'react-icons/md';

const SettingItem = ({ icon, title, value, onChange, isPassword, isEditable }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <li>
      <div className="item">
        <div className="item-icon">{icon}</div>
        <div className="item-content">
          <h3>{title}</h3>
          <div className="input-container">
            {isEditable && isPassword ? (
              <>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={value}
                  readOnly={!isEditable}
                  onClick={toggleShowPassword}
                />
                {showPassword ? (
                  <FiEyeOff className="eye-icon" onClick={toggleShowPassword} />
                ) : (
                  <FiEye className="eye-icon" onClick={toggleShowPassword} />
                )}
              </>
            ) : (
              <input
                type={isPassword ? 'password' : 'text'}
                value={value}
                onChange={onChange}
                readOnly={!isEditable}
              />
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

const SettingsScreen = () => {
  const [settings, setSettings] = useState({
    personalDetails: 'John Doe',
    contact: 'john.doe@example.com',
    password: '1234567',
  });
  const [editMode, setEditMode] = useState(false);

  const handleSettingChange = (key, value) => {
    if (!editMode && key === 'password') {
      return; // Ignore password changes when not in edit mode
    }
    setSettings((prevSettings) => ({
      ...prevSettings,
      [key]: value,
    }));
  };
  
  

  const handleSaveChanges = () => {
    if (window.confirm('Are you sure you want to save the new settings?')) {
      setEditMode(false);
    }
  };

  const toggleEditMode = () => {
    setEditMode((prevEditMode) => !prevEditMode);
  };

  return (
    <div>
      <Navbar />
      <div className="settings">
        <h1>Settings</h1>
        <ul>
          <SettingItem
            icon={<FiUser />}
            title="Name"
            value={settings.personalDetails}
            onChange={(e) => handleSettingChange('personalDetails', e.target.value)}
            isEditable={editMode}
          />

          <SettingItem
            icon={<MdOutlineAlternateEmail />}
            title="Email"
            value={settings.contact}
            onChange={(e) => handleSettingChange('contact', e.target.value)}
            isEditable={editMode}
          />

          <SettingItem
            icon={<FiLock />}
            title="Password"
            value={settings.password}
            onChange={(e) => handleSettingChange('password', e.target.value)}
            isPassword
            isEditable={editMode}
          />
        </ul>

        {editMode ? (
          <div>
            <button className='px-4 float-left' onClick={handleSaveChanges}>Save Changes</button>
            <button className='px-4 float-right' onClick={toggleEditMode}>Cancel</button>
          </div>
        ) : (
          <button onClick={toggleEditMode}>Edit Settings</button>
        )}
      </div>
    </div>
  );
};

export default SettingsScreen;
