// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { useRouter, usePathname } from "next/navigation";

// const Navbar = () => {
//   const router = useRouter();
//   const pathname = usePathname();

//   const navItems = ["MUSKLES", "ABOUT", "TOKEN", "GAMING/IP"];

//   const backgroundOverlayVariants = {
//     visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
//     hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
//   };

//   const handleNavigation = (item: string) => {
//     router.push(`/${item.toLowerCase().replace("/", "-")}`);
//   };

//   const showOverlay = pathname !== "/muskles";

//   return (
//     <div className="relative min-h-screen text-white">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: 'url("/bg.jpg")',
//           zIndex: -2,
//         }}
//       />

//       {/* Background Overlay */}
//       {showOverlay && (
//         <motion.div
//           className="absolute inset-0"
//           initial="hidden"
//           animate="visible"
//           exit="hidden"
//           variants={backgroundOverlayVariants}
//           transition={{ duration: 0.5 }}
//           style={{ zIndex: -1 }}
//         ></motion.div>
//       )}

//       {/* Navbar */}
//       <div className="flex justify-between p-8 w-full text-4xl font-semibold">
//         {navItems.map((item) => (
//           <button
//             key={item}
//             className={`hover:text-gray-400 transition ${
//               pathname === `/${item.toLowerCase().replace("/", "-")}`
//                 ? "text-gray-400"
//                 : ""
//             }`}
//             onClick={() => handleNavigation(item)}
//           >
//             {item}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
