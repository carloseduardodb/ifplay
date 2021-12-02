import React from "react";

const specific = () => {
  return (
    <div className="bg-white mt-32 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 p-3">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-semibold">Playlist Namea</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum eu sem turpis. Nam pulvinar, odio non feugiat
                interdum, nisi tellus hendrerit dolor, vitae porta orci sem sed
                leo.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-3">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-semibold">Playlist Name</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum eu sem turpis. Nam pulvinar, odio non feugiat
                interdum, nisi tellus hendrerit dolor, vitae porta orci sem sed
                leo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default specific;
