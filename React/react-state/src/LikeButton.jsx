import { useState } from "react";

export default function LikeButton() {
  let [isLiked, setISLiked] = useState(false);
  let [click, setClick] = useState(0);

  let toggle = () => {
    setISLiked(!isLiked);
    setClick(click + 1);
  };

  let iconStyle = { color: "red" };

  return (
    <>
      <h3>Clicks = {click}</h3>
      <p onClick={toggle}>
        {isLiked ? (
          <i className="fa-solid fa-heart" style={iconStyle}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </>
  );
}
