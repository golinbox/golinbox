import React from 'react';
const src =
  "https://player.vimeo.com/external/374094826.sd.mp4?s=e482aaf0ff5b0df5521b5dd6a90b7d73ef7ab93f&profile_id=164&oauth2_token_id=57447761";

function AboutVideo() {
  return (
      <div className='choose-vid'>
          <video width="100%" height="auto" src={src} autoPlay loop muted/>
    </div>
  )
}

export default AboutVideo;