// import React from 'react';
import AudioPlayer from './AudioPlayer';

interface TrackProps {
  item: any;
}

const TrackList = ({ item }: TrackProps) => {
  const { name, artists, track_number, preview_url } = item;

  return (
    <li className="flex justify-between items-center py-2">
      <div>
        <h3 className="text-white font-bold">{name}</h3>
        <p className="text-gray-400">{artists.map((artist: any) => artist.name).join(', ')}</p>
      </div>
      <AudioPlayer preview_url={preview_url} />
    </li>
  );
};

export default TrackList;
