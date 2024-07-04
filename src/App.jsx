import React, { useState, useRef, useEffect } from "react";
import YouTube from "react-youtube";
import { useNavigate, useLocation } from "react-router-dom";
import { timeToSeconds } from "./helpers";

const YouTubeSkipper = () => {
  const [videoId, setVideoId] = useState("");
  const [skips, setSkips] = useState([{ start: "", end: "" }]);
  const [debug, setDebug] = useState("");
  const [share, setShare] = useState("");
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const playerRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const urlVideoId = searchParams.get("v");
    const urlSkips = searchParams.getAll("skip");

    if (urlVideoId) {
      setVideoId(urlVideoId);
      setShare(`video/?${searchParams.toString()}`);
    }

    if (urlSkips.length > 0) {
      setSkips(
        urlSkips.map((skip) => {
          const [start, end] = skip.split("-");
          return { start, end };
        })
      );
    }
  }, []);
  // }, [location]);

  const handleVideoIdChange = (e) => {
    const url = e.target.value;
    const id = url.split("v=")[1];
    setVideoId(id);
    updateURL(id, skips);
  };

  const handleSkipChange = (index, field, value) => {
    const newSkips = [...skips];
    newSkips[index][field] = value;
    setSkips(newSkips);
    updateURL(videoId, newSkips);
  };

  const addSkip = () => {
    setSkips([...skips, { start: "", end: "" }]);
  };

  const removeSkip = (index) => {
    const newSkips = skips.filter((_, i) => i !== index);
    setSkips(newSkips);
    updateURL(videoId, newSkips);
  };

  const updateURL = (id, skipArray) => {
    const params = new URLSearchParams();
    if (id) params.append("v", id);
    skipArray.forEach((skip) => {
      if (skip.start && skip.end) {
        params.append("skip", `${skip.start}-${skip.end}`);
      }
    });
    setShare(`video/?${params.toString()}`);
    navigate(`?${params.toString()}`, { replace: true });
  };

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

  const handleCopy = () => {
    const valueToCopy = `${window.location.origin}${window.location.pathname}${share}`;
    navigator.clipboard.writeText(valueToCopy).then(() => {
      setTooltipVisible(true);
      setTimeout(() => {
        setTooltipVisible(false);
      }, 1500);
    });
  };

  return (
    <div className="youtube-skipper">
      <h1>YouTube Video Skipper</h1>
      <div className="input-group">
        <label>
          YouTube URL:
          <input
            type="text"
            onChange={handleVideoIdChange}
            value={`https://www.youtube.com/watch?v=${videoId}`}
            placeholder="https://www.youtube.com/watch?v=..."
          />
        </label>
      </div>
      {skips.map((skip, index) => (
        <div key={index} className="skip-input">
          <label>
            Skip Start (MM:SS):
            <input
              type="text"
              value={skip.start}
              onChange={(e) => handleSkipChange(index, "start", e.target.value)}
              placeholder="00:00"
            />
          </label>
          <label>
            Skip End (MM:SS):
            <input
              type="text"
              value={skip.end}
              onChange={(e) => handleSkipChange(index, "end", e.target.value)}
              placeholder="00:00"
            />
          </label>
          <button onClick={() => removeSkip(index)}>Remove</button>
        </div>
      ))}
      <button onClick={addSkip}>Add New Skip</button>
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
      <div className="share-link">
        <p>Share this link:</p>

        <div className="tooltip-container">
          <input
            type="text"
            readOnly
            value={`${window.location.origin}${window.location.pathname}${share}`}
            onClick={handleCopy}
          />
          {tooltipVisible && <div className="tooltip">Copied!</div>}
        </div>
      </div>

      <div className="debug">
        <p>Debug info: {debug}</p>
      </div>
    </div>
  );
};

export default YouTubeSkipper;
