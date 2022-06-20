import { FaPodcast } from 'react-icons/fa';

import { SiApplepodcasts, SiGooglepodcasts, SiSpotify } from 'react-icons/si';

const SubscribeCta = () => {
  return (
    <div className="bg-gray-100  text-lg">
      <div className="container flex flex-col justify-center bg-gray-100 p-12 text-lg text-white md:p-24">
        <div className="rounded-2xl bg-white p-16 text-slate-900 md:p-24">
          <div className="flex items-center gap-2">
            <FaPodcast />
            <h2>Подписаться:</h2>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="flex w-full  items-center gap-2 rounded-xl border-2 py-2 px-4 md:w-auto">
              <SiSpotify />
              <span>
                <span className="font-bold">Spotify</span> Podcasts
              </span>
            </span>
            <span className="flex w-full items-center gap-2 rounded-xl border-2 py-2 px-4 md:w-auto">
              <SiApplepodcasts />
              <span>
                <span className="font-bold">Apple</span> Podcasts
              </span>
            </span>
            <span className="flex w-full items-center gap-2 rounded-xl border-2 py-2 px-4 md:w-auto">
              <SiGooglepodcasts />
              <span>
                <span className="font-bold">Google</span> Podcasts
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeCta;
