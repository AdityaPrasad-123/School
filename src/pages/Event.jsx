import { event } from './data';

const Event = () => {
  return (
    <div className='w-full px-4 py-8'>
      <h1 className='text-4xl font-medium text-center text-white mb-8'>Events</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {[...event, ...event].map((value, index) => (
          <div key={index} className="bg-amber-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
            <img
              src={value.img}
              alt={`carousel-img-${index}`}
              className="w-full h-48 sm:h-64 object-cover"
            />
            <p className='text-center text-white bg-black bg-opacity-60 py-2 text-lg sm:text-xl'>Farewell ceremony</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
