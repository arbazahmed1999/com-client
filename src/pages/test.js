// import { useDispatch, useSelector } from "react-redux";
// import { clearbag, removeItem } from "./utils/bagSlice";
// import { useEffect, useState } from "react";
// import SingIn from "../pages/SingIn";

// const Bag = () => {
//   const [sum, setSum] = useState();
//   const [signUp, setSignUp] = useState(true);

//   const [toggle, setToggle] = useState(false);
//   const bagItem = useSelector((store) => store.bag.item);
//   console.log(bagItem);
//   const dispatch = useDispatch();

//   const openSignIn = () => {
//     setToggle(true);
//   };

//   const closeSignIn = () => {
//     setToggle(false);
//   };

//   const handleClearbag = () => {
//     dispatch(clearbag());
//   };

//   const handleRemove = (item) => {
//     dispatch(removeItem(item));
//   };

//   const placedorder = () => {
//     window.alert("Your order has been placed");
//   };
//   useEffect(() => {
//     const totalSum = bagItem.reduce((acc, item) => acc + item.price, 0);
//     setSum(totalSum);
//   }, [bagItem]);

//   let total = 0;
//   return (
//     <section className="container" id="cart-box">
//       <div style={{ display: "flex" }}>
//         {bagItem.length === 0 ? (
//           <div className="empty-box">
//             <img
//               className="bag-img"
//               alt="empty"
//               src={require("../assets/empty_cart.png")}
//               style={{ width: "50%" }}
//             />
//           </div>
//         ) : (
//           <>
//             <div className="item-box">
//               {bagItem.map(
//                 ({
//                   id,
//                   title,
//                   price,
//                   description,
//                   category,
//                   image,
//                   rating,
//                 }) => {
//                   return (
//                     <article key={id} className="item">
//                       <img src={image} alt="product" />
//                       <div>
//                         <h3>{title}</h3>
//                         <span>{category}</span>
//                       </div>
//                       <h2 className="pri">{price}</h2>
//                     </article>
//                   );
//                 }
//               )}
//             </div>

//             <div className="chackout-box">
//               <div>
//                 <h6>price</h6>
//                 <h5>{sum}</h5>
//               </div>
//               <div>
//                 <h6>discount</h6>
//                 <h5>5</h5>
//               </div>
//               <hr />
//               <div>
//                 <h5>total</h5>
//                 <h4>95</h4>
//               </div>
//               <button
//                 className="buy-btn"
//                 onClick={() => {
//                   openSignIn();
//                 }}
//               >
//                 Sign In
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//       {toggle ? <SingIn handleClose={closeSignIn} /> : null}
//     </section>
//   );
  // return (
  //   <div>
  //     {bagItem.map((elm, item) => {
  //       let { price } = elm;
  //       total = total + price;
  //       return (
  //         <article className="bag-container">
  //           <div className="bag-box">
  //             <div className="bag-item">
  //               <h2 className="bag-title">Cart Item</h2>
  //             </div>
  //             <div className="bag-product">
  //               <img className="bag-image" src={elm.image} alt="img" />
  //               <h3 className="name">{elm.title}</h3>
  //               <p className="description">{elm.description}</p>
  //               <h3 className="price">Rs {elm.price / 100}/-</h3>
  //               <button onClick={() => handleRemove(item)}>
  //                 <span className="material-symbols-outlined">delete</span>
  //               </button>
  //             </div>
  //         </article>
  //           </div>
  //           <div className="checkout-container">
  //             <div className="checkout-box">
  //               <div className="subtotal">Rs {total / 100}/-</div>
  //               {/* <div className="totalorder">TO PAY:</div>
  //               <div className="totalorder">Rs {total / 100}/-</div> */}
  //             </div>
  //           </div>
  //           <button
  //             onClick={() => {
  //               placedorder();
  //             }}
  //           >
  //             Proced to pay
  //           </button>
  //       );
  //     })}
  //   </div>
  // );
// };

// export default Bag;


    // const customerInfo = Datas.data.data;
          // const customerAddress = Datas.data.address;

      // console.log(customerInfo);
          // const stringAddress = JSON.stringify(customerAddress);
          // localStorage.setItem("storedAddress", stringAddress);
          // const stringOrder = JSON.stringify(Datas);
          // localStorage.setItem("orderHistory", stringOrder);
          // handleClose();
          // dispatch(addUser(customerInfo));