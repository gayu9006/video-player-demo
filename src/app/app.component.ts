import { Component, ViewChild, HostListener } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(YouTubePlayer) player!: YouTubePlayer;
  videoId = 'PbYOP8gJY_w';

  playerWidth = window.innerWidth * 0.9;
  playerHeight = window.innerHeight * 0.75;

  playbackRate = 1;

  constructor() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  @HostListener('window:resize')
  onResize() {
    this.playerWidth = window.innerWidth * 0.9;
    this.playerHeight = window.innerHeight * 0.75;
  }

  playVideo() {
    this.player?.playVideo();
  }

  pauseVideo() {
    this.player?.pauseVideo();
  }

  seekTo(seconds: number) {
    this.player?.seekTo(seconds, true);
  }

  changeSpeed(event: any) {
    this.playbackRate = +event.target.value;
    this.player.setPlaybackRate(this.playbackRate);
  }
}
