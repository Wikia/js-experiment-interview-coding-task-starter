import { getLogger } from "../../utils/logger";
import { renderExperiment } from "../../utils/renderExperiment";

// @ts-ignore //bundle sass to text
import * as cssText from "bundle-text:./styles.scss";

const logger = getLogger("ExperimentJS");
const API = `https://services.fandom.com`;

/**
 * API DOCUMENTATION
 * GET recommendations/recommendations
 *  @param wikiId
 *  @param articleId
 */

const render = (wikiId, articleId) => {
  logger.info("Run TemplateJS", { wikiId, articleId });
  /**
   * Start HERE
   */
};

renderExperiment(render, cssText, logger);
