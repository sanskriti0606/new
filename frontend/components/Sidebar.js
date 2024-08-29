// // import React from 'react';
// // import Link from 'next/link';
// // import {
// //   HiHome,
// //   HiSearch,
// //   HiLibrary,
// //   HiPlusCircle,
// //   HiHeart,
// // } from 'react-icons/hi';

// // const Sidebar = () => {
// //   return (
// //     <div className="fixed top-0 left-0 h-full w-60 bg-spotify-dark text-white p-4 space-y-6">
// //       <div className="mb-6">
// //         <Link href="/" className="flex items-center space-x-2">
// //           <img
// //             src="/logo1.png"  // Ensure the logo image is placed in the public folder
// //             alt="Spotify"
// //             className="w-36"
// //           />
// //         </Link>
// //       </div>
// //       <ul className="space-y-4">
// //         <li>
// //           <Link href="/" className="flex items-center py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-spotify-gray group">
// //             <HiHome className="w-6 h-6 mr-3" />
// //             <span className="group-hover:text-spotify-green">Home</span>
// //           </Link>
// //         </li>
// //         <li>
// //           <Link href="/search" className="flex items-center py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-spotify-gray group">
// //             <HiSearch className="w-6 h-6 mr-3" />
// //             <span className="group-hover:text-spotify-green">Search</span>
// //           </Link>
// //         </li>
// //         <li>
// //           <Link href="/library" className="flex items-center py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-spotify-gray group">
// //             <HiLibrary className="w-6 h-6 mr-3" />
// //             <span className="group-hover:text-spotify-green">Your Library</span>
// //           </Link>
// //         </li>
// //         <li>
// //           <Link href="/create-playlist" className="flex items-center py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-spotify-gray group">
// //             <HiPlusCircle className="w-6 h-6 mr-3" />
// //             <span className="group-hover:text-spotify-green">Create Playlist</span>
// //           </Link>
// //         </li>
// //         <li>
// //           <Link href="/liked-songs" className="flex items-center py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-spotify-gray group">
// //             <HiHeart className="w-6 h-6 mr-3" />
// //             <span className="group-hover:text-spotify-green">Liked Songs</span>
// //           </Link>
// //         </li>
// //       </ul>
// //       <div className="mt-auto space-y-2">
// //         <div className="border-t border-spotify-gray py-4">
// //           <p className="text-sm text-gray-400">
// //             <Link href="/legal" className="hover:underline">
// //               Legal
// //             </Link>{" "}
// //             ·{" "}
// //             <Link href="/privacy" className="hover:underline">
// //               Privacy
// //             </Link>{" "}
// //             ·{" "}
// //             <Link href="/cookies" className="hover:underline">
// //               Cookies
// //             </Link>{" "}
// //             ·{" "}
// //             <Link href="/about" className="hover:underline">
// //               About
// //             </Link>
// //           </p>
// //         </div>
// //         <div className="text-sm text-gray-400">
// //           <Link href="/language" className="hover:underline">
// //             English
// //           </Link>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Sidebar;
// import React, { useState } from 'react';
// import Link from 'next/link';
// import {
//   HiHome,
//   HiSearch,
//   HiLibrary,
//   HiPlusCircle,
//   HiHeart,
//   HiMenu,
//   HiX,
// } from 'react-icons/hi';
// import styles from '../app/Sidebar.module.css';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       {/* Toggle Button for Small Screens */}
//       <button className="md:hidden p-2" onClick={toggleSidebar}>
//         {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
//       </button>

//       {/* Sidebar */}
//       <div className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}>
//         <div className={styles.sidebarNav}>
//           <div className={styles.logo}>
//             <Link href="/">
//               <img
//                 src="/logo1.png"  // Ensure the logo image is placed in the public/images folder
//                 alt="Spotify"
//               />
//             </Link>
//           </div>
//           <ul>
//             <li>
//               <Link href="/" className={styles.link}>
//                 <HiHome className={styles.icon} />
//                 <span>Home</span>
//               </Link>
//             </li>
//             <li>
//               <Link href="/search" className={styles.link}>
//                 <HiSearch className={styles.icon} />
//                 <span>Search</span>
//               </Link>
//             </li>
//             <li>
//               <Link href="/library" className={styles.link}>
//                 <HiLibrary className={styles.icon} />
//                 <span className={styles.library}>Your Library</span>
//               </Link>
//             </li>
//             <li>
//               <Link href="/create-playlist" className={styles.link}>
//                 <HiPlusCircle className={styles.icon} />
//                 <span>Create Playlist</span>
//               </Link>
//             </li>
//             <li>
//               <Link href="/liked-songs" className={styles.link}>
//                 <HiHeart className={styles.icon} />
//                 <span>Liked Songs</span>
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Additional Sidebar Content */}
//         <div className={`${styles.sidebarNav} ${styles.box2}`}>
//           <div className={styles.sidebarScroll}>
//             <div className={styles.createPlaylist}>
//               <h4>Create your playlist</h4>
//               <p>It's easy, we'll help you</p>
//               <button>Create Playlist</button>
//             </div>
//           </div>
//           <div className={styles.privacy}>
//             <ul>
//               <li>
//                 <Link href="/legal">Legal</Link>
//                 <Link href="/privacy">Safety & Privacy</Link>
//                 <Link href="/cookies">Privacy Policy</Link>
//               </li>
//               <li>
//                 <Link href="/about-ads">About Ads</Link>
//                 <Link href="/accessibility">Accessibility</Link>
//               </li>
//             </ul>
//           </div>
//           <div className={styles.engBtn}>
//             <button>English</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;
import React, { useState } from 'react';
import Link from 'next/link';
import { HiHome, HiSearch, HiLibrary, HiPlusCircle, HiHeart, HiMenu, HiX } from 'react-icons/hi';
import Image from 'next/image';
import styles from '../app/Sidebar.module.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle Button for Small Screens */}
      <button className="md:hidden p-2" onClick={toggleSidebar}>
        {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.sidebarNav}>
          <div className={styles.logo}>
            <Link href="/">
              <Image
                src="/logo1.png"  // Path to your logo image
                alt="Spotify"
                width={100}        // Set appropriate width
                height={30}        // Set appropriate height
                layout="intrinsic" // Use intrinsic layout for fixed-size images
              />
            </Link>
          </div>
          <ul>
            <li>
              <Link href="/" className={styles.link}>
                <HiHome className={styles.icon} />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="/search" className={styles.link}>
                <HiSearch className={styles.icon} />
                <span>Search</span>
              </Link>
            </li>
            <li>
              <Link href="/library" className={styles.link}>
                <HiLibrary className={styles.icon} />
                <span className={styles.library}>Your Library</span>
              </Link>
            </li>
            <li>
              <Link href="/create-playlist" className={styles.link}>
                <HiPlusCircle className={styles.icon} />
                <span>Create Playlist</span>
              </Link>
            </li>
            <li>
              <Link href="/liked-songs" className={styles.link}>
                <HiHeart className={styles.icon} />
                <span>Liked Songs</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Additional Sidebar Content */}
        <div className={`${styles.sidebarNav} ${styles.box2}`}>
          <div className={styles.sidebarScroll}>
            <div className={styles.createPlaylist}>
              <h4>Create your playlist</h4>
              <p>It's easy, we'll help you</p>
              <button>Create Playlist</button>
            </div>
          </div>
          <div className={styles.privacy}>
            <ul>
              <li>
                <Link href="/legal">Legal</Link>
                <Link href="/privacy">Safety & Privacy</Link>
                <Link href="/cookies">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/about-ads">About Ads</Link>
                <Link href="/accessibility">Accessibility</Link>
              </li>
            </ul>
          </div>
          <div className={styles.engBtn}>
            <button>English</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
