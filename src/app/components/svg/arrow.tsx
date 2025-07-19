import React from 'react'

const Arrow = () => {
  return (
    <svg viewBox="0 0 63 305">
  <path
    className="w-[10rem] h-[10rem]"
    style={{
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      strokeDashoffset: "0px",
      strokeDasharray: "304",
    }}
    d="M31 0,31 304"
  />
  <path
    className="scroll_down-arrow_left"
    style={{
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      strokeDashoffset: "0px",
      strokeDasharray: "51",
    }}
    d="M1,269c0,0,29-1,30,35"
  />
  <path
    className="scroll_down-arrow_right"
    style={{
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      strokeDashoffset: "0px",
      strokeDasharray: "51",
    }}
    d="M61,269c0,0-29-1-30,35"
  />
</svg>
  )
}

export default Arrow