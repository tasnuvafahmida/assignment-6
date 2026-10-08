import React from "react";

const MyPlanLoadingPage = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#15171d] text-white">
      <div className="flex flex-col items-center justify-center gap-4">
        <span className="loading loading-spinner loading-xl"></span>

        <p className="text-lg font-medium text-gray-300">
          Loading My Plan...
        </p>
      </div>
    </div>
  );
};

export default MyPlanLoadingPage;