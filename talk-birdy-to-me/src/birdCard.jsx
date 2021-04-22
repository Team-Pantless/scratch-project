import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regStar } from '@fortawesome/free-regular-svg-icons';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';

// // helper functions
// const srcIsExternal = src => src.slice(0, 4) === 'http';
// const srcIsMailto = src => src.slice(0, 6) === 'mailto';
// // if img is src locally (not hosted online),
// // src will be the required in image file
// // otherwise, just src will be the url
// const getImgSrc = src => (srcIsExternal(src) || srcIsMailto(src)
//   ? src
//   : require(`../assets/${src}`));


// const birdCard = (color) => {
//   const {name, color, size, fact} = color;

// //   let FavIcon;
// //   if (isFav) FavIcon = (<span className="favIcon"><FAIcon onClick={() => favClicked(id)} icon={solidStar} style={{ color: 'steelblue' }} /></span>);
// //   else FavIcon = (<span className="favIcon"><FAIcon onClick={() => favClicked(id)} icon={regStar} /></span>);

//   return (
//     <article className="card charCard">
//       <div className="charHeadContainer">
//         <div>
//           <h3 className="charName">{name}</h3>
//           {nickname && <small><em>Name: {name}</em></small>}
//         </div>
//         {FavIcon}
//       </div>
//       {/* {photo
//         && <figure className="charPhoto">
//           <img src={getImgSrc(photo)} alt={`Character ${nickname || name}`} />
//         </figure>
//       } */}
//       <ul className="charDetailsList">
//         <li className="charDetail">Color: {color}</li>
//         <li className="charDetail">Size: {size}</li>
//         <li className="charDetail">Fun Fact: {fact}</li>
//       </ul>
//       <div className="charBtnOptions">
//         <Link to={`/customize/${id}`}>
//           <button
//             type="button"
//             className="btnSecondary charCustomizeButton"
//           >
//             Add bird notes!
//           </button>
//         </Link>
//       </div>
//     </article>
//   );
// };

// export default birdCard;
