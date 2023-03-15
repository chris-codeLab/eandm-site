import { Fragment, useEffect, useState } from "react";
import useClickOutside from "../useClickOutside";

const VideoPopup_ = ({ close, videoID }) => {
  let domNode = useClickOutside(() => {
    close(false);
  });
  return (
    <Fragment>
      <div className="mfp-bg mfp-ready" onClick={() => close(false)}></div>
      <div
        className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
        tabIndex={-1}
        style={{ overflow: "hidden auto" }}
      >
        <div className="mfp-container popup-container mfp-s-ready mfp-iframe-holder">
          <div className="mfp-content" ref={domNode}>
            <div className="mfp-iframe-scaler">
              <button
                title="Close (Esc)"
                type="button"
                className="mfp-close"
                onClick={() => close()}
              >
                ×
              </button>
              <iframe
                src={videoID}
                title="Video Player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="mfp-preloader">Loading...</div>
        </div>
      </div>
    </Fragment>
  );
};

const VideoPopup = (props) => {
  const [video, setVideo] = useState(false);
  const [videoValue, setVideoValue] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      const url = props.videoURL;
        if (
          url
        ) {
          document.querySelectorAll('a').forEach(el => {
            if(el.href === url) {
              el.addEventListener("click", (e) => {
                e.preventDefault();
                setVideoValue(url);
                setVideo(true);
          })
        }
          });
        } 
    }, 1500);
  }, []);
  return (
    <Fragment>
      {video && (
        <VideoPopup_ close={() => setVideo(false)} videoID={videoValue} />
      )}
    </Fragment>
  );
};

export default VideoPopup;
