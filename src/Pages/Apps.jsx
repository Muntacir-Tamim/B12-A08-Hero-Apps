// import React, { useState } from "react";
// import useApps from "../Hooks/useApps";
// import AppCard from "../Components/AppCard";
// import SkeletonLoader from "../Components/SkeletonLoader";
// import { Search } from "lucide-react";
// import { MagnifyingGlass } from "react-loader-spinner";

// const Apps = () => {
//   const { Apps, loading } = useApps();
//   const [search, setSearch] = useState("");

//   const [searchLoading, setSearchLoading] = useState(false);

//   const term = search.trim().toLocaleLowerCase();

//   const searchApps = term
//     ? Apps.filter((App) => App.title.toLocaleLowerCase().includes(term))
//     : Apps;
//   return (
//     <>
//       <div>
//         <h1 className="text-center text-3xl font-bold mb-3">
//           Our All Applications
//         </h1>
//         <p className="text-center mb-10 text-[#627382]">
//           Explore All Apps on the Market developed by us. We code for Millions
//         </p>
//       </div>
//       <div className="flex justify-between item-center mb-8">
//         <h1 className="text-2xl font-semibold">
//           ({searchApps.length}) Apps available
//         </h1>
//         <label className="input">
//           <Search className="w-5 h-5 text-gray-600" />
//           <input
//             value={search}
//             // onChange={(e) => setSearch(e.target.value)}
//             onChange={(e) => {
//               setSearchLoading(true);
//               const value = e.target.value;
//               setSearch(value);
//               setTimeout(() => {
//                 setSearchLoading(false);
//               }, 500); // 0.5 second delay for smoother UX
//             }}
//             type="search"
//             placeholder="search products"
//           />
//         </label>
//       </div>

//       {searchLoading ? (
//         <div className="flex justify-center items-center py-10">
//           <MagnifyingGlass
//             visible={true}
//             height="80"
//             width="80"
//             ariaLabel="magnifying-glass-loading"
//             wrapperStyle={{}}
//             wrapperClass="magnifying-glass-wrapper"
//             glassColor="#c0efff"
//             color="#e15b64"
//           />
//         </div>
//       ) : loading ? (
//         <SkeletonLoader />
//       ) : searchApps.length === 0 ? (
//         <p className="text-center text-gray-600 text-3xl font-medium">
//           No Apps Found
//         </p>
//       ) : (
//         <div className="grid grid-cols-4 gap-4">
//           {searchApps.map((App) => (
//             <AppCard key={App.id} App={App} />
//           ))}
//         </div>
//       )}
//     </>
//   );
// };

// export default Apps;

import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import AppCard from "../Components/AppCard";
import SkeletonLoader from "../Components/SkeletonLoader";
import { Search } from "lucide-react";
import { MagnifyingGlass } from "react-loader-spinner";

const Apps = () => {
  const { Apps, loading } = useApps();
  const [search, setSearch] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);

  const term = search.trim().toLocaleLowerCase();

  const searchApps = term
    ? Apps.filter((App) => App.title.toLocaleLowerCase().includes(term))
    : Apps;

  return (
    <>
      {/* Heading */}
      <div className="px-3 sm:px-0">
        <h1 className="text-center text-2xl sm:text-3xl font-bold mb-3">
          Our All Applications
        </h1>
        <p className="text-center mb-8 sm:mb-10 text-[#627382] text-sm sm:text-base">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      {/* Search & Count */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-8 px-3 sm:px-0">
        <h1 className="text-xl sm:text-2xl font-semibold text-center sm:text-left">
          ({searchApps.length}) Apps available
        </h1>
        <label className="input w-full sm:w-auto flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2">
          <Search className="w-5 h-5 text-gray-600" />
          <input
            value={search}
            onChange={(e) => {
              setSearchLoading(true);
              const value = e.target.value;
              setSearch(value);
              setTimeout(() => {
                setSearchLoading(false);
              }, 500);
            }}
            type="search"
            placeholder="Search apps"
            className="outline-none w-full text-sm sm:text-base"
          />
        </label>
      </div>

      {/* Loader / Results */}
      {searchLoading ? (
        <div className="flex justify-center items-center py-10">
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="magnifying-glass-loading"
            wrapperStyle={{}}
            wrapperClass="magnifying-glass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        </div>
      ) : loading ? (
        <SkeletonLoader />
      ) : searchApps.length === 0 ? (
        <p className="text-center text-gray-600 text-2xl sm:text-3xl font-medium">
          No Apps Found
        </p>
      ) : (
        // ✅ Responsive grid
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-3 sm:px-0">
          {searchApps.map((App) => (
            <AppCard key={App.id} App={App} />
          ))}
        </div>
      )}
    </>
  );
};

export default Apps;
