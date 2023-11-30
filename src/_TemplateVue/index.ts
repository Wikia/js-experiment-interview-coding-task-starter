import { createApp } from "vue";

import { getLogger } from "../../utils/logger";
import { renderExperiment } from "../../utils/renderExperiment";

import App from "./App.vue";

// @ts-ignore //bundle sass to text
import * as cssText from "bundle-text:./styles.scss";

const logger = getLogger("ExperimentVue");
const API = `https://services.fandom.com`;

/**
 * API DOCUMENTATION
 * GET recommendations/recommendations
 *  @param wikiId
 *  @param articleId
 */

const render = async (wikiId: number, articleId: number) => {
  logger.trace("Run TemplateVue", { wikiId, articleId });

  const mainDiv = document.createElement("div");
  mainDiv.setAttribute("id", "vue-root");
  document.documentElement.appendChild(mainDiv);

  const app = createApp(App);
  app.mount("#vue-root");
};

renderExperiment(render, cssText, logger);
