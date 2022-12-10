import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Nav from "../../../components/nav";
import Link from "next/link";

export default function Gallery() {
  return <div>upload under construction</div>;
}

// export default function Gallery({ images }) {
//   const [imageSrc, setImageSrc] = useState();
//   const [uploadData, setUploadData] = useState();

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
//       // `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`,
//       {
//         method: "POST",
//         body: formData,
//       }
//     ).then((r) => r.json());
//     // .catch((err) => {
//     //   console.log(err);
//     // }, []);

//     setImageSrc(data.secure_url);
//     setUploadData(data);

//     console.log("data: ", data);
//     console.log("images", images);
//   }
//   return (
//     <div>
//       <Head>
//         <title>Image Uploader</title>
//       </Head>

//       <Nav />
//       <div className="text-center">
//         <h1 className="text-2xl">Image Uploader</h1>

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

//         <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-cols-max justify-items-center">
//           {images?.map((image) => {
//             return (
//               <li key={image.id}>
//                 <a href={image.link} rel="noreferrer">
//                   <div className="m-5 max-w-sm">
//                     <Image
//                       width={image.width}
//                       height={image.height}
//                       src={image.image}
//                       className="rounded-lg object-scale-down w-10"
//                     />
//                   </div>
//                 </a>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export async function getStaticProps() {
//   const results = await fetch(
//     // "https://api.cloudinary.com/v1_1/audreyolaf/resources/image/",
//     `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image/`,
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

//   const images = resources?.map((resources) => {
//     const { width, height } = resources;
//     return {
//       id: resources.asset_id,
//       title: resources.public_id,
//       image: resources.secure_url,
//       width,
//       height,
//     };
//   });

//   if (!images) {
//     return null;
//   }
//   return {
//     props: {
//       images,
//     },
//   };
// }
