# YouTube Skipper

YouTube Skipper is a web application that enhances your YouTube viewing experience by automatically skipping specified segments of a video.

## Features

- **Automatic Skipping**: Define segments of a YouTube video to skip, and the app will automatically skip those parts during playback.
- **URL Parameters**: Easily configure the video and skip segments directly through URL parameters.
- **Debug Information**: Real-time debug information to monitor current playback time and skipped segments.

## How It Works

1. **Video Selection**: The app extracts the video ID from the URL parameters.
2. **Skip Segments**: Define the start and end times of the segments to skip using URL parameters.
3. **Real-Time Monitoring**: During video playback, the app continuously monitors the current playback time and skips over the specified segments.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/skorotkiewicz/youtube-skipper
   cd youtube-skipper
   ```

2. Install dependencies:

   ```sh
   yarn
   ```

3. Start the development server:

   ```sh
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions or improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
