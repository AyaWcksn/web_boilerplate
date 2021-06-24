import React, { useState } from "react";

const Youtube = () => (
  <section className="youtubeSection">
    <div className="container">
      <div className="video-responsive">
        <iframe
          width="1000"
          height="500"
          src="https://www.youtube.com/embed/dgT_la-173g"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
);

export default Youtube;
