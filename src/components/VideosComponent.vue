<template>
  <div class="container">
    <h1 class="heading">
      Як заробляти <span style="color: orange">від $100</span> в день на
      налаштуванні рекламних кампаній в Facebook + Instagram
    </h1>
    <p class="text">
      <span style="color: orange">Епізод {{ store.currentVideo + 1 }}:</span>
      {{ fakeApi[0].title }}
    </p>
    <br />
    <p class="text">{{ fakeApi[store.currentVideo].subtitle }}</p>

    <div class="grid">
      <div class="main-video-container">
        <q-video
          ref="videoPlayer"
          :src="fakeApi[store.currentVideo].video_url"
          :ratio="16 / 9"
          @mouseover="
            store.timer.id
              ? store.timerPause()
              : store.timerStart(fakeApi[store.currentVideo].video_time)
          "
        />
      </div>
      <div class="extra-videos-container">
        <div
          class="extra-videos-item"
          :class="[{ inactive: index >= store.maxVideo }]"
          v-for="(lesson, index) in fakeApi"
          :key="index"
          @click="store.$state.maxVideo > index && store.setVideo(index)"
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
        <q-btn color="orange" @click="store.next()">Наступний епізод</q-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import fakeApi from '../fakeApi';
<<<<<<< HEAD
import { useVideosStore } from '../store';
=======
console.log('www');
import {useCounterStore} from "../store"
console.log(useCounterStore)
>>>>>>> dd5563ed17506a48fe6fc25ac014512c50fbab7d

export default defineComponent({
  name: 'VideosComponent',
  props: {},
  setup() {
    const store = useVideosStore();
    return {
      fakeApi,
      store,
      getThumbnailUrl,
    };
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
  display: grid;
  grid-template-columns: 1fr 40%;
  gap: 1rem;
  grid-auto-rows: max-content;
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

@media screen and (min-width: 600px) {
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
}
.main-video-container {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 56.25%;
  position: relative;
}

.extra-videos-item {
  display: flex;
  width: 100%;
  align-items: center;
  margin-left: 1rem;
  margin-right: 1rem;
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
  height: 2.25rem;
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
