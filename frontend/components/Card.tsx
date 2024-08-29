// // // import Image from 'next/image';
// // // import Link from 'next/link';
// // // import React from 'react';

// // // interface CardProps {
// // //   item?: any;
// // //   index?: any;
// // // }

// // // const Card = ({ item, index }: CardProps) => {
// // //   const { artists, coverArt, date, name, uri } = item.data;
// // //   const ids = uri.replace("spotify:album:", "");

// // //   return (
// // //     <div key={index} className="bg-[#181818] rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
// // //       <Image
// // //         priority={index === 42}
// // //         className="object-cover w-full h-64"
// // //         src={coverArt.sources[0].url}
// // //         alt="Album Cover"
// // //         width={500}
// // //         height={500}
// // //       />
// // //       <div className="p-4">
// // //         <h2 className="text-lg font-bold text-white truncate">{name}</h2>
// // //         <p className="text-sm text-gray-400 truncate">{artists.items[0].profile.name}</p>
// // //         <Link href={`/albums/${ids}`} className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">
// // //           Play
// // //         </Link>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Card;

// import Image from 'next/image';
// import React from 'react';
// import Link from 'next/link';

// interface Image {
//   url: string;
// }

// interface Album {
//   id: string;
//   name: string;
//   images: Image[];
// }

// interface CardProps {
//   item: Album;
// }

// const Card: React.FC<CardProps> = ({ item }) => {
//   const { images, name, id } = item;

//   // Check if images exist and if the first image is available
//   const imageUrl = images && images.length > 0 ? images[0].url : '/default-image.jpg'; // Fallback image

//   return (
//     <div className="bg-gray-800 rounded-lg overflow-hidden">
//       <Image src={imageUrl} alt={name} width={500} height={500} />
//       <div className="p-4">
//         <h3 className="text-white text-lg font-bold">{name}</h3>
//         <Link href={`/albums/${id}`} className="text-green-400">
//           View Album
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Card;
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CardProps {
  item?: any;
  index?: any;
}

const Card = ({ item, index }: CardProps) => {
  const { artists, coverArt, name, uri } = item.data;
  const ids = uri.replace("spotify:album:", "");

  return (
    <div 
      key={index} 
      className="bg-[#181818] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
      
      <Image
        priority={index === 0}
        className="object-cover w-full h-64"
        src={coverArt.sources[0].url}
        alt="Album Cover"
        width={500}
        height={200}
      />
      
      <div className="p-4">
        <h2 className="text-lg font-semibold text-white truncate">{name}</h2>
        <p className="text-gray-400 truncate">
          {artists.items[0].profile.name}
        </p>
        <Link 
          href={`/albums/${ids}`} 
          className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">
          Play
        </Link>
      </div>
    </div>
  );
}

export default Card;
