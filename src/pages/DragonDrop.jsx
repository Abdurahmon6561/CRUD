import { useState } from "react";

const DragonDrop = () => {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(droppedFiles);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };

  const handleUpload = async () => {
    setUploading(true);
    const formData = new FormData();
    files.forEach(file => {
      formData.append('file', file);
    });

    try {
      const response = await fetch('https://httpbin.org/post', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      console.log(data);
      setUploadSuccess(true);
    } catch (error) {
      console.error('Error uploading files:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10 mb-36">
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="border-dashed border-4 border-gray-300 p-10 rounded-lg bg-teal-500 text-white w-80 text-center"
      >
        <div className="mb-4">Drag & Drop to Upload File</div>
        <div>OR</div>
        <label
          htmlFor="labelfile"
          className="block mt-4 bg-white text-teal-500 py-2 px-4 rounded-lg hover:bg-gray-100 cursor-pointer"
        >
          Browse File
        </label>
        <input
          type="file"
          onChange={handleFileChange}
          id="labelfile"
          hidden
          multiple
        />
      </div>

      {files.length > 0 && files.map((file, index) => (
        <img
          key={index}
          src={URL.createObjectURL(file)}
          width="400"
          alt="preview"
          className="mt-6 rounded-lg"
        />
      ))}

      {files.length > 0 && (
        <button
          onClick={handleUpload}
          className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
      )}

      {uploadSuccess && (
        <div className="mt-4 text-green-500">Upload successful!</div>
      )}
    </div>
  );
};

export default DragonDrop;
