import React from "react";
// const src =
//   "https://player.vimeo.com/external/463927406.sd.mp4?s=68b19b4c64e1a884f2307391e5dc87c3a7163ff7&profile_id=164&oauth2_token_id=57447761";
  const src =
    "https://player.vimeo.com/external/403693191.sd.mp4?s=d4f96207da95f39b9b3242ccb6370cd331871c75&profile_id=164&oauth2_token_id=57447761";
const Video = () => {
  return (
    <div className="videobg">
      <video width="100%" height="530px" src={src}autoPlay loop muted/>
    </div>
  );
};

export default Video;
