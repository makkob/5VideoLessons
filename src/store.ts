import { defineStore } from 'pinia';
import fakeApi from './fakeApi';

export const useVideosStore = defineStore('videos', {
  state: () => {
    return {
      currentVideo: 0,
      maxVideo: 1,
      timer: {
        id: null as number | null,
        time: null as number | null,
        paused: true as boolean,
      },
    };
  },
  actions: {
    next() {
      if (
        fakeApi.length > this.currentVideo &&
        this.currentVideo === this.maxVideo - 1
      ) {
        this.currentVideo++;
        this.maxVideo++;
        this.timerReset();

        console.log(this.$state);
      } else {
        this.currentVideo++;
        this.timerReset();
        console.log(this.$state);
      }
    },
    previous() {
      this.currentVideo--;
    },
    setVideo(id: number) {
      this.currentVideo = id;
    },
    timerStart(time: number) {
      console.log('timer started');
      if (!this.timer.time) {
        this.timer.time = time + Date.now();
      }
      this.timer.paused = false;
      this.timer.id = setTimeout(
        () => this.next(),
        this.timer.time - Date.now()
      ) as unknown as number;

      console.log(this.$state);
    },
    timerPause() {
      if (this.timer.id && !this.timer.paused && this.timer.time) {
        clearTimeout(this.timer.id);
        const elapsedTime = Date.now() - this.timer.time;
        const remainingTime = this.timer.time - elapsedTime;
        this.timer.id = null;
        this.timer.time = remainingTime;
        this.timer.paused = true;
        console.log('timer paused');
        console.log(this.$state);
      }
    },

    timerReset() {
      console.log('timer reset');

      this.timer.id = null;
      this.timer.time = null;
      this.timer.paused = false;
      console.log(this.$state);
    },
  },
});
