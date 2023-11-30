export const injectStyles = (css:string, id: string) => {
  if (!document.getElementById(id)) {
    let style = document.createElement("style");
    style.textContent = css;
    style.id = id;
    style.media="all";
    document.head.appendChild(style);
    }
};