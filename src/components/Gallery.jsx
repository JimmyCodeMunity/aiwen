import React from "react";

const Gallery = () => {
  return (
    <section className="md:px-16 px-6 md:py-16 py-6">
      <div className="w-full justify-center items-center mb-8">
        <h1 className="md:text-[55px] text-2xl text-center">Gallery</h1>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-5">
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://pagedone.io/asset/uploads/1688025668.png"
            alt="Gallery image"
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://pagedone.io/asset/uploads/1688029344.png"
            alt="Gallery image"
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://pagedone.io/asset/uploads/1688029370.png"
            alt="Gallery image"
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://pagedone.io/asset/uploads/1688029384.png"
            alt="Gallery image"
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://pagedone.io/asset/uploads/1688029394.png"
            alt="Gallery image"
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://pagedone.io/asset/uploads/1688029408.png"
            alt="Gallery image"
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://pagedone.io/asset/uploads/1688029424.jpg"
            alt="Gallery image"
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://pagedone.io/asset/uploads/1688029434.png"
            alt="Gallery image"
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://pagedone.io/asset/uploads/1688029447.jpg"
            alt="Gallery image"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
