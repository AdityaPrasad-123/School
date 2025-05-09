import React from 'react';
import { Link } from "react-router-dom";
import { news } from './data';
import main1 from '../assets/Images/main1.jpg';

const News = () => {
  return (
    <div className='h-auto w-full'>
      <h1 className='text-2xl font-medium text-center mt-5 text-white'>News</h1>

    <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 p-4'>
  {news.map((value, index) => (
    <div key={index} className='bg-amber-200 rounded-lg overflow-hidden shadow-md text-center'>
      {value.type === 'image' && value.img ? (
        // Only wrap images with Link
        <Link to='/target-page' state={{ 
          img: value.img, 
          videoUrl: value.videoUrl, 
          description: value.description, 
          type: value.type 
        }}>
          <img
            src={value.img}
            alt={value.description || 'News Image'}
            className='w-full h-80 object-cover'
          />
        </Link>
      ) : value.type === 'video' && value.videoUrl ? (
        // Render video without Link
        <video
          controls
          className='w-full h-80 object-cover'
          poster={main1}
        >
          <source src={value.videoUrl} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p>No media available.</p>
      )}

      <div className='p-4 text-black'>
        <p className='text-2xl'>{value.description}</p>
        <p className='text-sm'>Latest</p>
        <p className='text-sm'>News</p>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default News;
