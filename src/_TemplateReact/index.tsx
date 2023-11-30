import React from "react";
import { createRoot } from "react-dom/client";
import { getLogger } from "../../utils/logger";
import { renderExperiment } from "../../utils/renderExperiment";

// @ts-ignore //bundle sass to text
import * as cssText from "bundle-text:./styles.scss";

const logger = getLogger("ExperimentReact");
const API = `https://services.fandom.com`;
/**
 * API DOCUMENTATION
 * GET recommendations/recommendations
 *  @param wikiId
 *  @param articleId
 */

const App = ({
  wikiId,
  articleId,
}: {
  wikiId: number;
  articleId: number;
}) => {
  logger.info("Run TemplateReact", { wikiId, articleId });

  return <div>Experiment</div>;
};

const render = async (wikiId: number, articleId: number) => {
  const mainDiv = document.createElement("div");
  mainDiv.setAttribute("id", "react-root");
  document.documentElement.appendChild(mainDiv);

  const root = createRoot(document.getElementById("react-root")!);
  root.render(<App wikiId={wikiId} articleId={articleId} />);
};

renderExperiment(render, cssText, logger);
