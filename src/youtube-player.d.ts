declare module 'youtube-player' {
  const YouTubePlayer: any;
  export default YouTubePlayer;
}
declare namespace YT {
  interface Player {
    PlayerState: {
      PLAYING: number;
      PAUSED: number;
    };
  }
}
