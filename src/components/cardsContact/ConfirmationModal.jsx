import Modal from "react-modal";

import React from "react";

const ConfirmationModal = ({ isOpen, message, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className=" bg-spe-gradient p-4 rounded shadow-lg w-3/4 max-w-md mx-auto mt-60 border-2 border-white"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start z-50 "
    >
      <div className=" ">
        <h2 className="text-xl font-bold text-my-gold mb-4 text-myBlue">
          Information
        </h2>
        <p className=" text-white">{message}</p>
        <button
          className="mt-4 px-4 py-2 bg-my-gold bg-myBlue text-white rounded "
          onClick={onClose}
        >
          Fermer
        </button>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
