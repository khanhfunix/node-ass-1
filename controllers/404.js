exports.get404 = (req, res, next) => {
  res.status(404).send({ message: "Page Not Found", status: 404 });
};
//Controller quanly loi 404
