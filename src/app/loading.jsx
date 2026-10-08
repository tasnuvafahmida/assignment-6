import React from "react";

const HomePageLoading = () => {
    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-[#15171d]">
            <div className="text-center">
                <span className="loading loading-spinner loading-xl"></span>
                <p className="mt-4 text-white">Loading FitLog...</p>
            </div>
        </div>
    );
};

export default HomePageLoading;