import { useLocation } from 'react-router-dom';

export default function TargetPage() {
  const location = useLocation();
  const { img, description } = location.state || {};

  return (
    <div className='p-4 w-full h-screen text-white'>
      {img ? (
        <>
          <img src={img} alt='news' className='w-[80%] h-[500px] max-w-xl mx-auto rounded shadow-lg' />
          <p className='text-lg mt-4 text-center' >{description}</p>
        </>
      ) : (
        <p>No image data provided.</p>
      )}
    </div>
  );
}
