import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillAlert } from 'react-icons/ai';

const Alert = ({ message }) => {
  const handleAlert = () => {
    toast.error(message, {
      position: toast.POSITION.BOTTOM_RIGHT,
      closeButton: true,
      autoClose: false,
      draggable: false,
      hideProgressBar: true,
    });
  };

  return (
    <div>
      <button className="trigger bg-transparent bg-cover-transparent px-0 py-1 border-none float-right " onClick={handleAlert}>
        <AiFillAlert className="text-black" size={26} />
      </button>
      <ToastContainer />
    </div>
  );
};

export default Alert;
