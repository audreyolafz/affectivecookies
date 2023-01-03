import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Nav from "/components/nav";
import { get } from "axios";

export default function Gallery() {
  return <div>Under Construction | Do not Touch</div>;
}

// export default function Gallery({ images }) {
//   const [imageSrc, setImageSrc] = useState();
//   const [uploadData, setUploadData] = useState();
//   // const [alt, setAlt] = useState([]);
//   let altList = [];

//   useEffect(() => {
//     async function fetchAlt() {
//       for (const phrase of images) {
//         const res = await get(`/api/generate?imageUrl=${phrase.url}`);
//         altList.push(res.data);
//         console.log(res.data);
//         // setAlt(res.data);
//       }
//     }
//     fetchAlt();
//   }, []);

//   function handleOnChange(changeEvent) {
//     const reader = new FileReader();

//     reader.onload = function (onLoadEvent) {
//       setImageSrc(onLoadEvent.target.result);
//       setUploadData(undefined);
//     };
//     reader.readAsDataURL(changeEvent.target.files[0]);
//   }

//   async function handleOnSubmit(event) {
//     event.preventDefault();
//     const form = event.currentTarget;
//     const fileInput = Array.from(form.elements).find(
//       ({ name }) => name === "file"
//     );

//     const formData = new FormData();
//     for (const file of fileInput.files) {
//       formData.append("file", file);
//     }
//     formData.append("upload_preset", "my-uploads");

//     const data = await fetch(
//       "https://api.cloudinary.com/v1_1/audreyolaf/image/upload",
//       {
//         method: "POST",
//         body: formData,
//       }
//     ).then((r) => r.json());

//     setImageSrc(data.secure_url);
//     setUploadData(data);
//   }
//   return (
//     <div>
//       <Head>
//         <title>Affective Cookies | Alt Text Gallery</title>
//         <link rel="icon" href="/illustrations/cookieOne.png" />
//       </Head>

//       <Nav />
//       <div className="text-center">
//         <h1 className="text-2xl">Alt Text Gallery</h1>

//         <form
//           className="m-10"
//           method="post"
//           onChange={handleOnChange}
//           onSubmit={handleOnSubmit}
//         >
//           <div className="grid place-content-center">
//             <input
//               className="block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-300 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
//               id="file_input"
//               name="file"
//               type="file"
//             />
//           </div>
//           <img src={imageSrc} />

//           {imageSrc && !uploadData && (
//             <p>
//               <button className="text-black bg-mint border-mint border-solid border-2 hover:text-black hover:border-solid hover:border-2 focus:ring-4 focus:ring-mint font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 border-mint border-solid border-2 transition duration-150 hover:duration-150 hover:bg-transparent hover: text-white hover:border-solid hover:border-2 focus:ring-4 focus:ring-mint dark:bg-mint dark:text-white dark:hover:bg-transparent dark:hover:text-white dark:focus:ring-mint">
//                 Upload Files
//               </button>
//             </p>
//           )}
//         </form>

//         {images ? (
//           <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-cols-max justify-items-center">
//             {images.map((image) => {
//               return (
//                 <li key={image.id}>
//                   <Link href={`/api/generate?imageUrl=${image.url}`}>
//                     <div className="m-5 max-w-sm">
//                       <Image
//                         width={image.width}
//                         height={image.height}
//                         src={image.image}
//                         className="rounded-lg object-scale-down w-10"
//                       />
//                     </div>
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         ) : (
//           <div></div>
//         )}
//       </div>
//     </div>
//   );
// }

// export async function getStaticProps() {
//   const results = await fetch(
//     `https://api.cloudinary.com/v1_1/audreyolaf/resources/image`,
//     {
//       headers: {
//         Authorization: `Basic ${Buffer.from(
//           process.env.CLOUDINARY_API_KEY +
//             ":" +
//             process.env.CLOUDINARY_API_SECRET
//         ).toString("base64")}`,
//       },
//     }
//   ).then((r) => r.json());

//   const { resources } = results;
//   const images =
//     resources?.map((resource) => {
//       const { width, height } = resource;
//       return {
//         id: resource.asset_id,
//         title: resource.public_id,
//         image: resource.secure_url,
//         url: resource.url,
//         width,
//         height,
//       };
//     }) || [];
//   return {
//     props: {
//       resources,
//       images,
//     },
//   };
// }
