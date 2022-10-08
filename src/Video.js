import video_mp4 from './576p.mp4';
import video_webm from './576p.mp4';

import './Video.css';

function Video() {
  return (
    <section className="ko-video">
      <video autoPlay muted loop playsinline poster="video.png">
        <source src={video_webm} type="video/webm"/>
        <source src={video_mp4} type="video/mp4"/>
      </video>
    </section>
  );
}

export default Video;
