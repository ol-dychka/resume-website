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
  ViFileTypeCsharp2,
  ViFileTypeJsOfficial,
  ViFileTypeTypescriptOfficial,
  SiMui,
  GiStrikingArrows,
  LaJava,
  ViFileTypeAngular,
  ViFileTypeSass,
  IoLogoDocker,
  FaAws,
  ViFileTypeTerraform,
  ViFileTypePgsql,
  ViFileTypeMongo,
  MdExtensionSharp,
} from "oh-vue-icons/icons";

addIcons(
  BiLinkedin,
  BiGithub,
  ViFileTypeCsharp2,
  ViFileTypeCss,
  ViFileTypeHtml,
  ViFileTypeJsOfficial,
  ViFileTypeReactjs,
  ViFileTypeTailwind,
  ViFileTypeTypescriptOfficial,
  ViFileTypeVue,
  SiMui,
  GiStrikingArrows,
  LaJava,
  ViFileTypeAngular,
  ViFileTypeSass,
  IoLogoDocker,
  FaAws,
  ViFileTypeTerraform,
  ViFileTypePgsql,
  ViFileTypeMongo,
  MdExtensionSharp,
);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount("#app");
