import React from "react";
import HeaderCS from "../Components/HeaderCs/HeaderCS";
import FooterCs from "../Components/FooterCs";

function page() {
  return (
    <>
      <HeaderCS />
      <div className="h-full">
        {/* Banner */}
        <div className="page-banner">
          <h1 className="text-5xl text-slate-50"> وبلاگ</h1>
        </div>
      </div>
        <div className="min-h-[50vh]">
            <h1 className="text-center font-extrabold text-4xl py-4"> به زودی</h1>
        </div>
      <FooterCs />
    </>
  );
}

export default page;
