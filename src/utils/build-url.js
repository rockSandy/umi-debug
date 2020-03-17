export default (opt) => {
  if (process.env.NODE_ENV === "development") {
    opt.host = "//localhost:5678";
    opt.path = "/data/mock" + opt.path;
  }
  return opt;
};
