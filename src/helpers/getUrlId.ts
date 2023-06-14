export const getUrlId = (url: string) => {
  const urlArr = url.split("/");
  const urlId = urlArr[urlArr.length - 1];
  return urlId;
};
