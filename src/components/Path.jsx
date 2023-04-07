import React from "react";
import { useLocation } from "react-router-dom";
export default function Path() {
  const currentLocation = useLocation();

  return (
    <>
      <div className="breadcrumb bg-secondary py-3">
        <div className="container">
          <div className="current">
            <h3 className=" text-capitalize fs-5">
              {currentLocation.pathname.slice(1)}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
