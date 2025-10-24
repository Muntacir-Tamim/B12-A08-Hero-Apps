// import React from "react";
// import { Link } from "react-router";
// import Download_icon from "../assets/icon-downloads.png";
// import Rating_icon from "../assets/icon-ratings.png";

// const AppCard = ({ App }) => {
//   const { image, title, companyName, downloads, ratingAvg, id } = App;
//   return (
//     <Link to={`/AppDetails/${id}`}>
//       <div className="card bg-base-100  shadow-sm hover:scale-102 transition ease-in-out">
//         <div className="p-3">
//           <figure className="h-48 w-68 overflow-hidden rounded-sm">
//             <img className="w-full object-cover" src={image} alt="Shoes" />
//           </figure>

//           <h2 className="card-title mt-2">
//             {title} : {companyName}
//           </h2>

//           <div className="flex justify-between items-center">
//             <div>
//               <div className="flex justify-center items-center gap-3 font-medium mt-2 text-[#00D390] bg-[#F1F5E8] py-0 px-2  rounded-lg">
//                 <img className="w-4  " src={Download_icon} alt="" />
//                 {downloads}
//               </div>
//             </div>

//             <div>
//               <div className="flex justify-center items-center gap-2 mt-2 font-medium text-[#FF8811] bg-[#FFF0E1] py-0 px-2  rounded-lg mb-2">
//                 <img className="w-4  " src={Rating_icon} alt="" />
//                 {ratingAvg}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default AppCard;

import React from "react";
import { Link } from "react-router";
import Download_icon from "../assets/icon-downloads.png";
import Rating_icon from "../assets/icon-ratings.png";

const AppCard = ({ App }) => {
  const { image, title, companyName, downloads, ratingAvg, id } = App;

  return (
    <Link to={`/AppDetails/${id}`}>
      <div className="card bg-base-100 shadow-sm hover:scale-102 transition ease-in-out">
        <div className="p-3">
          {/* Image */}
          <figure className="h-48 w-full overflow-hidden rounded-sm">
            <img
              className="w-full h-full object-cover"
              src={image}
              alt={title}
            />
          </figure>

          {/* Title */}
          <h2 className="card-title mt-2 text-base sm:text-lg text-center sm:text-left">
            {title} : {companyName}
          </h2>

          {/* Downloads & Ratings */}
          <div className="flex justify-between items-center mt-2">
            {/* Downloads */}
            <div className="flex justify-center items-center gap-2 font-medium text-[#00D390] bg-[#F1F5E8] py-1 px-3 rounded-lg">
              <img className="w-4" src={Download_icon} alt="downloads" />
              {downloads}
            </div>

            {/* Ratings */}
            <div className="flex justify-center items-center gap-2 font-medium text-[#FF8811] bg-[#FFF0E1] py-1 px-3 rounded-lg">
              <img className="w-4" src={Rating_icon} alt="rating" />
              {ratingAvg}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
