import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  BiLinkedin,
  BiGithub,
  ViFileTypeHtml,
  ViFileTypeCss,
  ViFileTypeReactjs,
  ViFileTypeVue,
  ViFileTypeTailwind,
  ViFileTypeNext,
  ViFileTypeCsharp2,
  ViFileTypeJsOfficial,
  ViFileTypeTypescriptOfficial,
} from "oh-vue-icons/icons";

addIcons(
  BiLinkedin,
  BiGithub,
  ViFileTypeCsharp2,
  ViFileTypeCss,
  ViFileTypeHtml,
  ViFileTypeJsOfficial,
  ViFileTypeNext,
  ViFileTypeReactjs,
  ViFileTypeTailwind,
  ViFileTypeTypescriptOfficial,
  ViFileTypeVue,
);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount("#app");
