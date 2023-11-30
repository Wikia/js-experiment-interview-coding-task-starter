import waitForEvent from "./waitForEvent";

interface MediaWikiWindow extends Window {
  mw: {
    config: {
      get: (key: string) => number;
    };
  };
}

declare let window: MediaWikiWindow;

export const getWikiData = waitForEvent<{
  wikiId: number;
  articleId: number;
} | null>({
  eventCheck: () => {
    return !!window.mw.config.get("wgCityId") && !!window.mw.config.get("wgArticleId");
  },
  intervalTime: 50,
  maxWaitTime: 5000,
  onReject: () => null,
  onResolve: () => ({
    wikiId: window.mw.config.get("wgCityId"),
    articleId: window.mw.config.get("wgArticleId"),
  }),
});
