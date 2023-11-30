import { Logger } from "./logger";
import { getWikiData } from "./getWikiData";
import { injectStyles } from "./loadStyles";

type RenderFunc = (wikiId: number, articleId: number) => void;

export const renderExperiment = (
  render: RenderFunc,
  cssText: string,
  logger: Logger
) => {
  (async () => {
    const data = await getWikiData();

    if (!data) {
      logger.error("ArticleId and wikiId not found");
      return;
    }

    const { wikiId, articleId } = data;
    try {
      render(wikiId, articleId);
      injectStyles(cssText, `experimentjs-styles`);
    } catch (error) {
      logger.error(`During running an experiment an error occurred:`, error);
    }

    return null;
  })();
};
