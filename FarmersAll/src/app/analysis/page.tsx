"use client";
import { NavBar } from '@/components';
import React, { useState } from 'react';

function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);

      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          console.log('Image uploaded successfully.');
          // Handle success
        } else {
          console.error('Image upload failed.');
          // Handle error
        }
      } catch (error) {
        console.error('Image upload failed:', error);
        // Handle error
      }
    }
  };

  return (
    <div>
      <div>
      <NavBar />
      </div>
    <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <label className="block text-xl mb-4 text-gray-700">Upload an Image</label>
      <input
        type="file"
        className="block w-full border border-gray-300 p-2 mb-4"
        onChange={handleFileChange}
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-full"
        onClick={handleUpload}
      >
        Upload Image
      </button>
    </div>
  </div>
  </div>
  
  );
}

export default ImageUpload;
