import React, { useEffect, useState } from 'react';
import { fakeFetch } from './Constants/NinthConst'; // Assuming the fakeFetch function is imported from a separate file

const Nineth = () => {
  const [video, setVideo] = useState(null);
  const [label, setLabel] = useState('');
  const [isLabelAdded, setIsLabelAdded] = useState(false);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const response = await fakeFetch('https://example.com/api/getvideo');
        setVideo(response.data.videos);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchVideoDetails();
  }, []);

  const handleAddLabel = () => {
    if (label.trim() !== '') {
      setVideo(prevVideo => ({
        ...prevVideo,
        label: label
      }));
      setIsLabelAdded(true);
    }
  };

  return (
    <div>
      {video ? (
        <div>
          <h2>Video Details</h2>
          <p>Title: {video.title}</p>
          <img src={video.thumbnail} alt="Video Thumbnail" />
          <p>Views: {video.views}</p>
          <p>Likes: {video.likes}</p>
          <button onClick={handleAddLabel}>Add Label</button>
          {isLabelAdded && <p>Label: {video.label}</p>}
        </div>
      ) : (
        <p>Loading video details...</p>
      )}
    </div>
  );
};

export default Nineth;
