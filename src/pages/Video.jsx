import React, { useState } from "react";

const Video = () => {
  const [videoSrc, setVideoSrc] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoSrc(url);
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
        🎬 Video Player
      </h1>
      <div className="flex flex-col items-center justify-center space-y-4">
        <input
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          className="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:border
            file:rounded file:border-gray-300 file:bg-gray-50
            file:text-gray-700 hover:file:bg-gray-100"
        />
        {videoSrc && (
          <video controls className="w-full max-h-[400px] rounded shadow">
            <source src={videoSrc} />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
};

export default Video;
