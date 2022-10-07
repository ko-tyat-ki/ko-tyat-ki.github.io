import video_mp4 from './576p.mp4';
import video_webm from './576p.mp4';

function Video() {
  return (
    <video autoPlay muted loop playsinline>
      <source src={video_webm} type="video/webm"/>
      <source src={video_mp4} type="video/mp4"/>
    </video>
  );
}

export default Video;
