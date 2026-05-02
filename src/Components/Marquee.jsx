// "use client";

// const Marquee = ({data}) => {
//   return (
   
//     <div className="w-full overflow-hidden bg-linear-to-br from-[#0f172a] via-[#111827] to-[#020617] text-white my-4 py-5">
//       <div className="marquee whitespace-nowrap">
//          <span className="mx-8">
//     Join the Community: 10k+ Happy Customers
//   </span>

//   <span className="mx-8">
//     Weekly Feature: Modern Geometric Patterns
//   </span>
//              {/* Dynamic tiles */}
//         {data .slice(0, 5).map((tile) => (
//           <span key={tile.id} className="mx-8">
//             New Arrivals: {tile.title}
//           </span>
//         ))}
        
//         <span className="mx-8">
//           Weekly Feature: Modern Geometric Patterns
//         </span>
//         <span className="mx-8">
//           Join the Community
//         </span>

      
//          {data.slice(0, 5).map((tile) => (
//           <span key={tile.id} className="mx-8">
//             New Arrivals: {tile.title}
//           </span>
//         ))}
//         {/* <span className="mx-8">
//           Weekly Feature: Modern Geometric Patterns
//         </span>
//         <span className="mx-8">
//           Join the Community: 10k+ Happy 
//         </span> */}
//       </div>
//     </div>
//   );
// };

// export default Marquee;





"use client";

const Marquee = ({ data }) => {
  const tiles = data?.slice(0, 5); // limit করলে UI clean থাকে

  return (
    <div className="w-full overflow-hidden bg-linear-to-br from-[#0f172a] via-[#111827] to-[#020617] text-white my-4 py-5">
      
      <div className="marquee">
        <div className="marquee-track">

          {/* CTA আগে রাখছি */}
          <span className="item">🔥 Join 10k+ Happy Customers</span>
          <span className="item">✨ Weekly Feature: Premium Tiles</span>

          {/* Dynamic tiles */}
          {tiles?.map((tile) => (
            <span key={tile.id} className="item">
              🆕 {tile.title}
            </span>
          ))}

          {/* duplicate for infinite loop */}
          <span className="item">🔥 Join 10k+ Happy Customers</span>
          <span className="item">✨ Weekly Feature: Premium Tiles</span>

          {tiles?.map((tile) => (
            <span key={tile.id + "_dup"} className="item">
              🆕{tile.title}
            </span>
          ))}

        </div>
      </div>

    </div>
  );
};

export default Marquee;