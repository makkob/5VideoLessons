"use strict";(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[651],{6651:(e,t,i)=>{i.r(t),i.d(t,{default:()=>F});var s=i(9835);function o(e,t,i,o,r,n){const l=(0,s.up)("videos-component"),a=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(a,{class:"row items-center justify-evenly"},{default:(0,s.w5)((()=>[(0,s.Wm)(l,{title:"Example component",active:""})])),_:1})}var r=i(6970);const n={class:"container"},l=(0,s._)("h1",{class:"heading"},[(0,s.Uk)(" Як заробляти "),(0,s._)("span",{style:{color:"orange"}},"від $100"),(0,s.Uk)(" в день на налаштуванні рекламних кампаній в Facebook + Instagram ")],-1),a={class:"text"},u={style:{color:"orange"}},d=(0,s._)("br",null,null,-1),c={class:"text"},m={class:"grid"},p={class:"main-video-container"},h={class:"extra-videos-container"},v=["onClick"],b={class:"extra-videos-item-text"},w={class:"video-description-container"},_=(0,s._)("p",{class:"text-cursive"},"У цьому епізоді ви дізнаєтесь:",-1),g={class:"next-episode"},V=(0,s._)("b",null,"Вже переглянули? Отримайте доступ до наступного:",-1),k=(0,s._)("br",null,null,-1),x=(0,s._)("br",null,null,-1);function f(e,t,i,o,f,y){const Z=(0,s.up)("q-video"),D=(0,s.up)("q-img"),A=(0,s.up)("q-item"),q=(0,s.up)("q-list"),C=(0,s.up)("q-btn");return(0,s.wg)(),(0,s.iD)("div",n,[l,(0,s._)("p",a,[(0,s._)("span",u,"Епізод "+(0,r.zw)(e.store.currentVideo+1)+":",1),(0,s.Uk)(" "+(0,r.zw)(e.fakeApi[e.store.currentVideo].title),1)]),d,(0,s._)("p",c,(0,r.zw)(e.fakeApi[e.store.currentVideo].subtitle),1),(0,s._)("div",m,[(0,s._)("div",p,[(0,s.Wm)(Z,{ref:"videoPlayer",src:e.fakeApi[e.store.currentVideo].video_url,ratio:16/9,onMouseover:t[0]||(t[0]=t=>e.store.timer.id?e.store.timerPause():e.store.timerStart(e.fakeApi[e.store.currentVideo].video_time))},null,8,["src"])]),(0,s._)("div",h,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.fakeApi,((t,i)=>((0,s.wg)(),(0,s.iD)("div",{class:(0,r.C_)(["extra-videos-item",[{inactive:i>=e.store.maxVideo}]]),key:i,onClick:t=>e.store.$state.maxVideo>i&&e.store.setVideo(i)},[(0,s.Wm)(D,{src:e.getThumbnailUrl(t.video_url),class:"thumbnail",ratio:16/9},null,8,["src"]),(0,s._)("p",b,(0,r.zw)(t.title),1)],10,v)))),128))]),(0,s._)("div",w,[_,(0,s.Wm)(q,{class:"list"},{default:(0,s.w5)((()=>[(0,s.Wm)(A,{key:"1"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,r.zw)(e.fakeApi[e.store.currentVideo].description),1)])),_:1})])),_:1})]),(0,s._)("div",g,[V,k,x,(0,s.Wm)(C,{color:"orange",onClick:t[1]||(t[1]=t=>e.store.next()),disabled:e.store.isButtonDisabled},{default:(0,s.w5)((()=>[(0,s.Uk)("Наступний епізод")])),_:1},8,["disabled"])])])])}const y=[{title:"Знайомство зі спікером",subtitle:"Підзаголовок уроку 1",video_url:"https://www.youtube.com/embed/xIbbOaY8hO4",video_time:5e3,description:"Опис уроку 1"},{title:"Друге знайомство",subtitle:"Підзаголовок уроку 2",video_url:"https://www.youtube.com/embed/a9sHJdyVZ28",video_time:1e4,description:"Опис уроку 2"},{title:"Третій спікер",subtitle:"Підзаголовок уроку 3",video_url:"https://www.youtube.com/embed/aZfQF2LL6Xo",video_time:5e3,description:"Опис уроку 3"},{title:"Четверте",subtitle:"Підзаголовок уроку 4",video_url:"https://www.youtube.com/embed/fRKW53K-OZU",video_time:14e3,description:"Опис уроку 4"},{title:"Перед фінал",subtitle:"Підзаголовок уроку 5",video_url:"https://www.youtube.com/embed/xAx6ugvcxio",video_time:29e3,description:"Опис уроку 5"},{title:"Фінал",subtitle:"Підзаголовок уроку 6",video_url:"https://www.youtube.com/embed/X8zzP1Z7BAA",video_time:32e3,description:"Опис уроку 6"}],Z=y;var D=i(3746);const A=(0,D.Q_)("videos",{state:()=>({isButtonDisabled:!0,currentVideo:0,maxVideo:1,timer:{id:null,time:null,paused:!0}}),actions:{next(){Z.length>this.currentVideo&&this.currentVideo===this.maxVideo-1?(this.currentVideo++,this.maxVideo++,this.timerReset(),this.isButtonDisabled=!0,console.log(this.$state)):(this.currentVideo++,this.timerReset(),console.log(this.$state))},previous(){this.currentVideo--},setVideo(e){this.currentVideo=e},timerStart(e){console.log("timer started"),this.timer.time||(this.timer.time=e+Date.now()),this.timer.paused=!1,this.timer.id=setTimeout((()=>{this.isButtonDisabled=!1,alert("Вам доступний новий урок!")}),this.timer.time-Date.now()),console.log(this.$state)},timerPause(){if(this.timer.id&&!this.timer.paused&&this.timer.time){clearTimeout(this.timer.id);const e=Date.now()-this.timer.time,t=this.timer.time-e;this.timer.id=null,this.timer.time=t,this.timer.paused=!0,console.log("timer paused"),console.log(this.$state)}},timerReset(){console.log("timer reset"),this.timer.id=null,this.timer.time=null,this.timer.paused=!1,this.isButtonDisabled=!0,console.log(this.$state)}}}),q=(0,s.aZ)({name:"VideosComponent",props:{},setup(){const e=A();return{fakeApi:Z,store:e,getThumbnailUrl:Q}}}),C=e=>{const t=e.match(/(?:[?&]v=|\/embed\/|\/\d\/|\/vi\/|https?:\/\/(?:www\.)?youtu\.be\/)([^&\n?#]+)/);return t&&t[1]},Q=e=>{const t=C(e);return t?`https://img.youtube.com/vi/${t}/hqdefault.jpg`:""};var U=i(1639),$=i(1005),z=i(1487),B=i(3246),W=i(490),P=i(7065),T=i(9984),j=i.n(T);const I=(0,U.Z)(q,[["render",f]]),R=I;j()(q,"components",{QVideo:$.Z,QImg:z.Z,QList:B.Z,QItem:W.Z,QBtn:P.Z});const K=(0,s.aZ)({name:"IndexPage",components:{VideosComponent:R}});var L=i(9885);const O=(0,U.Z)(K,[["render",o]]),F=O;j()(K,"components",{QPage:L.Z})}}]);