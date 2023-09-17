// pagination
exports.sendDataPerPage = (params, data) => {
  let perPage = 20;
  let page = +params;
  if (!params) {
    page = 1;
  }
  let totalPage = Math.ceil(data.length / perPage);
  data.splice(perPage * page);
  data.splice(0, perPage * (page - 1));
};
