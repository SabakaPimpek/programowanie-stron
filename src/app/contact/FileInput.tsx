'use client'
import React, { useState } from "react";
import { X } from "lucide-react";

export default function FileInput() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setFile(null);
  };

  return (
    <div className="max-w-md mt-6">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Załącz plik
      </label>
      <p className="text-xs text-gray-500 mb-2">Do 5 MB, np. PDF, JPG, PNG</p>

      {!file ? (
        <div>
          <label className="flex items-center cursor-pointer border border-blue-500 text-blue-500 px-4 py-2 rounded-md w-fit hover:bg-blue-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v8m0-8l-4 4m4-4l4 4M16 5a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2V7a2 2 0 012-2h8z" />
            </svg>
            Przeglądaj pliki
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>
      ) : (
        <div className="flex items-center bg-white border border-gray-300 rounded-md px-4 py-2 justify-between">
          <div className="text-sm truncate w-48">
            {file.name}{" "}
            <span className="text-gray-400 text-xs">
              ({(file.size / 1024 / 1024).toFixed(1)} MB)
            </span>
          </div>
          <button
            onClick={removeFile}
            className="ml-3 text-gray-500 hover:text-red-600 cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>
      )}
    </div>
  );
}