import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './LightboxModal.css';

const LightboxModal = ({ images = [], initialIndex = 0, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  if (!images || images.length === 0) return null;

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div className="lightbox-header">
        <button className="lightbox-close-btn" onClick={onClose} title="Kapat">
          <X size={24} />
        </button>
      </div>

      {images.length > 1 && (
        <>
          <button className="lightbox-nav-btn prev" onClick={handlePrev} title="Önceki Fotoğraf">
            <ChevronLeft size={28} />
          </button>
          <button className="lightbox-nav-btn next" onClick={handleNext} title="Sonraki Fotoğraf">
            <ChevronRight size={28} />
          </button>
        </>
      )}

      <div className="lightbox-image-wrapper" onClick={e => e.stopPropagation()}>
        <img src={images[currentIndex]} alt={`Fotoğraf ${currentIndex + 1}`} />
      </div>

      <div className="lightbox-caption">
        Fotoğraf {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default LightboxModal;
