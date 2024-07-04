import React, { useState, useRef, useEffect } from "react";
import YouTube from "react-youtube";
import "./YouTubeSkipper.scss";
import { timeToSeconds } from "../helpers";

const Video = () => {
  const [videoId, setVideoId] = useState("");
  const [skips, setSkips] = useState([{ start: "", end: "" }]);
  const [debug, setDebug] = useState("");
  const playerRef = useRef(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const urlVideoId = searchParams.get("v");
    const urlSkips = searchParams.getAll("skip");

    if (urlVideoId) setVideoId(urlVideoId);
    if (urlSkips.length > 0) {
      setSkips(
        urlSkips.map((skip) => {
          const [start, end] = skip.split("-");
          return { start, end };
        })
      );
    }
  }, []);

  const onReady = (event) => {
    playerRef.current = event.target;
    setInterval(() => checkAndSkip(), 1000); // Check every second
  };

  const checkAndSkip = () => {
    if (!playerRef.current) return;

    const currentTime = playerRef.current.getCurrentTime();

    setDebug(`Current: ${currentTime.toFixed(2)}`);

    for (const skip of skips) {
      const skipStartSeconds = timeToSeconds(skip.start);
      const skipEndSeconds = timeToSeconds(skip.end);

      if (currentTime >= skipStartSeconds && currentTime < skipEndSeconds) {
        playerRef.current.seekTo(skipEndSeconds);
        setDebug(
          (prevDebug) =>
            `${prevDebug} - Skipped from ${skip.start} to ${skip.end}!`
        );
        break; // Exit the loop after first skip
      }
    }
  };

  return (
    <div className="youtube-skipper">
      {videoId && (
        <div className="video-container">
          <YouTube
            videoId={videoId}
            opts={{
              width: "100%",
              height: "100%",
              playerVars: {
                autoplay: 1,
              },
            }}
            onReady={onReady}
          />
        </div>
      )}
      <div className="debug">
        <p>Debug info: {debug}</p>
      </div>
    </div>
  );
};

export default Video;
