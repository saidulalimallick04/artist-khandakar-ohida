"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { Button } from './ui/button';

interface LightboxProps {
  imageUrl: string;
  onClose: () => void;
}

export function Lightbox({ imageUrl, onClose }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in-50"
      onClick={onClose}
    >
      <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <Image
          src={imageUrl}
          alt="Lightbox image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          style={{ objectFit: 'contain' }}
          className="animate-in zoom-in-90 fade-in-50 duration-300"
        />
      </div>
      <Button
        aria-label="Close lightbox"
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 text-white rounded-full h-10 w-10 bg-black/30 hover:bg-black/50 hover:scale-110 transition-all duration-200"
        onClick={onClose}
      >
        <X className="h-6 w-6" />
      </Button>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <Button
          aria-label="Close lightbox"
          variant="secondary"
          className="rounded-full px-6 shadow-lg"
          onClick={onClose}
        >
          Back
        </Button>
      </div>
    </div>
  );
}
