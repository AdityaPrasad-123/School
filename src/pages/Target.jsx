import { useLocation } from 'react-router-dom';

export default function TargetPage() {
  const location = useLocation();
  const { img, description } = location.state || {};

  return (
    <div className="p-4 w-full min-h-screen  text-white flex flex-col items-center">
      {img ? (
        <>
          <img
            src={img}
            alt="news"
            className="w-full max-w-4xl aspect-video object-cover rounded-lg shadow-lg"
          />
          <p className="text-lg mt-6 text-center max-w-3xl px-2">{description}</p>
        </>
      ) : (
        <p className="text-center text-red-500">No image data provided.</p>
      )}
    </div>
  );
}
