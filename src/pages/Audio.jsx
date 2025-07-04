import React, { useState } from "react";

const Audio = () => {
  const [audioSrc, setAudioSrc] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAudioSrc(url);
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">🎵 Audio Player</h1>
      <div className="flex flex-col items-center justify-center space-y-4">
        <input
          type="file"
          accept="audio/*"
          onChange={handleFileChange}
          className="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:border
            file:rounded file:border-gray-300 file:bg-gray-50
            file:text-gray-700 hover:file:bg-gray-100"
        />
        {audioSrc && (
          <audio controls className="w-full rounded shadow">
            <source src={audioSrc} />
            Your browser does not support the audio tag.
          </audio>
        )}
      </div>
    </div>
  );
};

export default Audio;
