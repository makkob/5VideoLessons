<template>
  <div class="container">
    <h1 class="heading">
      Як заробляти <span style="color: orange">від $100</span> в день на
      налаштуванні рекламних кампаній в Facebook + Instagram
    </h1>
    <p class="text">
      <span style="color: orange">Епізод 1:</span> {{ fakeApi[0].title }}
    </p>
    <br />
    <p class="text">{{ fakeApi[0].subtitle }}</p>

    <div class="grid">
      <div class="main-video-container">
        <q-video :src="fakeApi[0].video_url"></q-video>
      </div>
      <div class="extra-videos-container">
        <div
          class="extra-videos-item"
          v-for="(lesson, index) in fakeApi"
          :key="index"
        >
          <q-img
            src="https://i.ytimg.com/vi/k3_tw44QsZQ/hq720.jpg"
            class="thumbnail"
          />
          <q-p class="extra-videos-item-text"> {{ lesson.title }}</q-p>
        </div>
      </div>

      <div class="video-description-container">
        <q-p class="text-cursive">У цьому епізоді ви дізнаєтесь:</q-p>
        <q-list class="list">
          <q-item key="1">1. {{ fakeApi[0].description }}</q-item>
        </q-list>
      </div>

      <div class="next-episode">
        <b>Вже переглянули? Отримайте доступ до наступного:</b><br /><br />
        <q-btn color="orange">Наступний епізод</q-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import fakeApi from '../fakeApi';
console.log('www');
import {useCounterStore} from "../store"
console.log(useCounterStore)

export default defineComponent({
  name: 'VideosComponent',
  props: {},
  setup() {
    return {
      fakeApi,
    };
  },
});
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
