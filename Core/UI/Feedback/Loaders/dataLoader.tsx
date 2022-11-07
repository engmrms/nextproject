import React from "react";

const LoaderItem = () => (
  <div className="flex-1 space-y-6 py-1">
    <div className="h-8 rounded bg-gray-200" />
    <div className="space-y-6">
      <div className="grid grid-cols-8 gap-4">
        <div className=" h-8 rounded bg-gray-200" />
        <div className=" h-8 rounded bg-gray-200" />
        <div className=" h-8 rounded bg-gray-200" />
        <div className=" h-8 rounded bg-gray-200" />
        <div className=" h-8 rounded bg-gray-200" />
        <div className=" h-8 rounded bg-gray-200" />
        <div className=" h-8 rounded bg-gray-200" />
        <div className=" h-8 rounded bg-gray-200" />
      </div>
      <div className="h-8 rounded bg-gray-200" />
    </div>
  </div>
);

function DataLoader() {
  return (
    <div className="p-[40px]">
      <div className="shadow mx-auto w-full  rounded-md   p-4 py-24">
        <div className="flex animate-pulse flex-col  space-y-8">
          <LoaderItem />
          <LoaderItem />
          <LoaderItem />
        </div>
      </div>
    </div>
  );
}

export default DataLoader;
