<template>
  <div class="container">
    <h1 class="heading">
      Як заробляти <span style="color: orange">від $100</span> в день на
      налаштуванні рекламних кампаній в Facebook + Instagram
    </h1>
    <p class="text">
      <span style="color: orange">Епізод {{ store.currentVideo + 1 }}:</span>
      {{ fakeApi[store.currentVideo].title }}
    </p>
    <br />
    <p class="text">{{ fakeApi[store.currentVideo].subtitle }}</p>

    <div class="grid">
      <div class="main-video-container">
        <div id="youtube-player" class="main-video-container"></div>
      </div>
      <div class="extra-videos-container">
        <div
          class="extra-videos-item"
          :class="[{ inactive: index >= store.maxVideo }]"
          v-for="(lesson, index) in fakeApi"
          :key="index"
          @click="store.$state.maxVideo > index && handleSetVideo(index)"
        >
          <q-img
            :src="getThumbnailUrl(lesson.video_url)"
            class="thumbnail"
            :ratio="16 / 9"
          />
          <p class="extra-videos-item-text">{{ lesson.title }}</p>
        </div>
      </div>

      <div class="video-description-container">
        <p class="text-cursive">У цьому епізоді ви дізнаєтесь:</p>
        <q-list class="list">
          <q-item key="1">{{ fakeApi[store.currentVideo].description }}</q-item>
        </q-list>
      </div>

      <div class="next-episode">
        <b>Вже переглянули? Отримайте доступ до наступного:</b><br /><br />

        <q-btn
          color="orange"
          @click="handleNextVideo"
          :disabled="store.isButtonDisabled"
          >Наступний епізод</q-btn
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import YouTubePlayer from 'youtube-player';
import { Notify } from 'quasar';
import fakeApi from '../fakeApi';
import { useVideosStore } from '../store';

export default defineComponent({
  name: 'VideosComponent',
  props: {},
  setup() {
    const store = useVideosStore();
    let player: any;
    return {
      fakeApi,
      store,
      getThumbnailUrl,
      getVideoId,
      player,
    };
  },

  mounted() {
    this.player = YouTubePlayer(document.getElementById('youtube-player'), {
      width: 640,
      height: 360,
      videoId: getVideoId(fakeApi[this.store.currentVideo].video_url),
      playerVars: {
        autoplay: 0,
      },
    });
    this.player.on('stateChange', (event: any) => {
      if (event.data === 1) {
        this.store.timerStart(fakeApi[this.store.currentVideo].video_time);
      }
      // на паузі
      if (event.data === 2) {
        this.store.timerPause();
      }
      // Закінчилося
      if (event.data === 0) {
        Notify.create('Вам доступне нове відео!');
      }
      console.log(event.data);
    });
  },
  methods: {
    handleNextVideo() {
      this.store.next();
      this.player.loadVideoById(
        getVideoId(fakeApi[this.store.currentVideo].video_url)
      );
    },
    handleSetVideo(index: number) {
      this.store.setVideo(index);
      this.player.loadVideoById(
        getVideoId(fakeApi[this.store.currentVideo].video_url)
      );
    },
  },
});

const getVideoId = (url: string) => {
  const match = url.match(
    /(?:[?&]v=|\/embed\/|\/\d\/|\/vi\/|https?:\/\/(?:www\.)?youtu\.be\/)([^&\n?#]+)/
  );
  return match && match[1];
};

const getThumbnailUrl = (videoUrl: string) => {
  const videoId = getVideoId(videoUrl);
  if (videoId) {
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  }
  return '';
};
</script>

<style>
@import '~quasar/dist/quasar.css';
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap');

.container {
  width: 100%;
  font-family: 'Montserrat', sans-serif;
}

.grid {
  display: flexbox;

  justify-items: center;
  align-items: center;
}

.heading {
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  line-height: 1.2;
}

.text {
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  margin: auto;
}
.text-cursive {
  font-family: 'Cedarville Cursive', cursive;
  font-size: 1.5rem;
  color: orange;
}
.extra-videos-item-text {
  margin: auto;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
}

.inactive {
  filter: grayscale(100%);
}
.main-video-container {
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 30rem;
  height: 19em;
  position: relative;
}

@media screen and (min-width: 600px) {
  .grid {
    display: grid;
    grid-template-columns: 1fr 40%;
    gap: 1rem;
    grid-auto-rows: max-content;
    justify-items: center;
    align-items: center;
  }
  .container {
    width: 60%;
    font-family: Montserrat, sans-serif;
    text-align: center;
  }
  .heading {
    font-size: 2rem;
    font-weight: 800;
    text-align: center;
    line-height: 1.2;
  }
  .text {
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
  }
  .main-video-container {
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 32rem;
    height: 20rem;
    position: relative;
  }
}

.extra-videos-item {
  display: flex;
  min-width: 300px;
  align-items: center;
  /* margin-left: 1rem;
  margin-right: 1rem; */
  margin: auto;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  background-color: orange;
  color: white;
}
.extra-videos-item:hover:not(.inactive) {
  cursor: pointer;
}

.thumbnail {
  width: 4rem;
  height: 100%;
}

.q-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.list {
  width: 100%;
}

.next-episode {
  margin-top: 20px;
  text-align: center;
}
</style>
