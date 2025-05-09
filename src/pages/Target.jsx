import { useLocation } from 'react-router-dom';

export default function TargetPage() {
  const location = useLocation();
  const { img, description } = location.state || {};

  return (
    <div className="min-h-screen w-full px-4 py-8 bg-blue-950 text-white flex flex-col items-center justify-center">
      {img ? (
        <div className="max-w-4xl w-full text-center">
          <img
            src={img}
            alt="news"
            className="w-full max-h-[500px] object-cover rounded-lg shadow-lg mx-auto"
          />
          <p className="text-lg sm:text-xl mt-6">{description}</p>
        </div>
      ) : (
        <p className="text-xl">No image data provided.</p>
      )}
    </div>
  );
}
