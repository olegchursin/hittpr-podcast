import { FaPlay } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <div className="bg-accent-dark h-132 bg-[url('/img/hero.webp')] bg-cover">
      <div className="container py-16 px-8 text-center text-white md:p-24 md:text-left">
        <span className="rounded-full bg-gradient-to-b from-cyan-500 to-blue-500 py-1 px-4 text-sm">
          ПОДКАСТ
        </span>
        <h1 className="mt-4 text-6xl selection:bg-fuchsia-300 selection:text-fuchsia-900">
          Давай отпиарю
        </h1>
        <p className="mt-6 text-xl">
          <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-600">
            <span className="relative text-white">c Мариной Хитт</span>
          </span>
        </p>
        <p className="mt-12 text-lg selection:bg-fuchsia-300 selection:text-fuchsia-900 md:text-xl lg:w-2/3 xl:w-1/2">
          Новости медиагигантов, эксклюзив со съёмочных площадок, спортивных
          событий, закрытых показов, самое интересное из жизни Нью-Йорка.
        </p>

        <div className="mt-16 flex justify-center gap-4 md:justify-start">
          <button className="duration-400 group flex items-center justify-center rounded-full bg-white from-cyan-500 to-blue-500 text-center text-lg uppercase text-gray-800 transition ease-in-out hover:bg-gradient-to-b active:from-cyan-600 active:to-blue-600">
            <span className="m-1 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-b from-cyan-500 to-blue-500 group-hover:shadow-lg">
              <FaPlay color="white" />
            </span>
            <span className="ml-4 mr-8">Слушать</span>
          </button>
          <button className="text-whte flex items-center justify-center rounded-full border-2 from-cyan-500 to-blue-500 px-8 text-center text-lg uppercase hover:border-transparent hover:bg-gradient-to-b active:from-cyan-600 active:to-blue-600">
            Эпизоды
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
