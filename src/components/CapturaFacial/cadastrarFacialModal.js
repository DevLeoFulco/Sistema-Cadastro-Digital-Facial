import React, { useRef, useEffect, useState } from 'react';
import Modal from 'react-modal';
import './cadastrarFacialModal.css';

Modal.setAppElement('#root');

const CapturaFacialModal = ({ isOpen, onRequestClose }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    if (isOpen) {
      startCamera();
    }
  }, [isOpen]);

  const startCamera = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch(error => {
        console.error('Error accessing camera:', error);
      });
  };

  const captureImage = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    if (canvas && video) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageDataURL = canvas.toDataURL('image/png');
      setCapturedImage(imageDataURL);
      setShowSuccessMessage(true); // Exibir mensagem de sucesso após a captura
    }
  };

  const handleCloseModal = () => {
    setShowSuccessMessage(false); // Limpar mensagem de sucesso ao fechar o modal
    setCapturedImage(null); // Limpar a imagem capturada
    onRequestClose(); // Fechar o modal
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Capturar Reconhecimento Facial"
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
    >
      <h3>Capturar Reconhecimento Facial</h3>
      <div className="facial-capture-window">
        <video ref={videoRef} autoPlay />
        {capturedImage && (
          <div className="captured-image-preview">
            <img src={capturedImage} alt="Captured" />
          </div>
        )}
      </div>
      {!showSuccessMessage && ( // Exibir botão de captura apenas se não mostrar a mensagem de sucesso
        <div className="button-container">
          <button onClick={captureImage}>Capturar</button>
        </div>
      )}
      {showSuccessMessage && ( // Exibir mensagem de sucesso e botão de fechar se a captura foi bem-sucedida
        <div>
          <p>Captura realizada com sucesso!</p>
          <button onClick={handleCloseModal}>Fechar</button>
        </div>
      )}
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </Modal>
  );
};

export default CapturaFacialModal;
