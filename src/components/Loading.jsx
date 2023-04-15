import React from "react";

export default function Loading() {
  return (
    <div className=" loading d-flex justify-content-center align-items-center">
      <div class="lds-spinner bg-dark ">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
