// import { Button, Modal, ModalFooter,
//     ModalHeader, ModalBody } from "reactstrap";
// import React, { useState } from "react";


// function ProfileModal() {
//     // Modal open state
//     const [modal, setModal] = React.useState(false);
  
//     // Toggle for Modal
//     const toggle = () => setModal(!modal);
  
//     return (
//         <div style={{
//             display: 'block', width: 700, padding: 30
//         }}>
           
//             <Button color="danger"
//                 onClick={toggle}>Click me to open Modal</Button>
//             <Modal isOpen={modal} toggle={toggle}>
//                 <ModalHeader
//                     toggle={toggle}>Sample Modal Title</ModalHeader>
//                 <ModalBody>
//                     Sample Modal Body Text to display...
//                 </ModalBody>
//                 <ModalFooter>
//                     <Button color="primary" onClick={toggle}>Okay</Button>
//                 </ModalFooter>
//             </Modal>
//         </div >
//     );
// }

// export default ProfileModal;


// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import { Popup } from '@progress/kendo-react-popup';
// import './styles.css';

// const ProfileModal = () => {
//   const anchor = React.useRef(null);
//   const anchorHorizontal = React.useRef(null);
//   const anchorVertical = React.useRef(null);
//   const popupHorizontal = React.useRef(null);
//   const popupVertical = React.useRef(null);
//   const [anchorAlign, setAnchorAlign] = React.useState({
//     horizontal: 'left',
//     vertical: 'bottom'
//   });
//   const [popupAlign, setPopupAlign] = React.useState({
//     horizontal: 'right',
//     vertical: 'top'
//   });
//   const [show, setShow] = React.useState(false);

//   const onClick = () => {
//     setShow(!show);
//   };

//   const onConfigChange = () => {
//     let aHorizontal = anchorHorizontal.current;
//     let aVertical = anchorVertical.current;
//     let pHorizontal = popupHorizontal.current;
//     let pVertical = popupVertical.current;

//     if (aHorizontal !== null && aVertical !== null) {
//       setAnchorAlign({
//         horizontal: aHorizontal.value,
//         vertical: aVertical.value
//       });
//     }

//     if (pHorizontal !== null && pVertical !== null) {
//       setPopupAlign({
//         horizontal: pHorizontal.value,
//         vertical: pVertical.value
//       });
//     }
//   };

//   return <div>
//       <div className="example-config row">
//         <div className="col-sm-4 col-xs-12">
//           <h4>Anchor align point</h4>
//           <p>
//             Horizontal <br />
//             <select onChange={onConfigChange} ref={anchorHorizontal} value={anchorAlign.horizontal} className="k-textbox">
//               <option value="left">Left</option>
//               <option value="center">Center</option>
//               <option value="right">Right</option>
//             </select>
//           </p>
//           <p>
//             Vertical <br />
//             <select onChange={onConfigChange} ref={anchorVertical} value={anchorAlign.vertical} className="k-textbox">
//               <option value="top">Top</option>
//               <option value="middle">Middle</option>
//               <option value="bottom">Bottom</option>
//             </select>
//           </p>
//         </div>
//         <div className="col-sm-4 col-xs-12">
//           <h4>Popup align point</h4>
//           <p>
//             Horizontal <br />
//             <select onChange={onConfigChange} ref={popupHorizontal} value={popupAlign.horizontal} className="k-textbox">
//               <option value="left">Left</option>
//               <option value="center">Center</option>
//               <option value="right">Right</option>
//             </select>
//           </p>
//           <p>
//             Vertical <br />
//             <select onChange={onConfigChange} ref={popupVertical} value={popupAlign.vertical} className="k-textbox">
//               <option value="top">Top</option>
//               <option value="middle">Middle</option>
//               <option value="bottom">Bottom</option>
//             </select>
//           </p>
//         </div>
//         <div className="col-sm-4 col-xs-12">
//           <h4>Popup action</h4>
//           <br />
//           <button onClick={onClick} className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary">{show ? 'Close' : 'Open'}</button>
//         </div>
//       </div>
//       <span ref={anchor} className="anchor content">
//         ANCHOR
//       </span>
//       <Popup anchor={anchor.current} anchorAlign={anchorAlign} popupAlign={popupAlign} show={show}>
//         <div className="content">
//           <p>Popup content.</p>
//         </div>
//       </Popup>
//     </div>;
// };

// export default ProfileModal;