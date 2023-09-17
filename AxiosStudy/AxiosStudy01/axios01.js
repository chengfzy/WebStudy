const axios = require("axios").default;

const baseUrl = "http://127.0.0.1:4523/m1/3306642-0-default";

// get
axios.get(`${baseUrl}/pet/1`).then((res) => {
  console.log("get01");
  console.log(res.data);
});

axios
  .get(`${baseUrl}/pet/DDD`)
  .then(function (response) {
    // 处理成功情况
    console.log("get02");
    console.log("status: " + response.status);
    console.log("data:", response.data);
  })
  .catch(function (error) {
    // 处理错误情况
    console.log("Error:", error.status, ". message: ", error.response.data);
  })
  .finally(function () {
    // 总是会执行
    console.log("finish get02");
  });

// post
axios
  .post(`${baseUrl}/pet`, {
    name: "Hello Kitty",
    status: "sold",
  })
  .then(function (response) {
    // 处理成功情况
    console.log("post01");
    console.log("status: " + response.status);
    console.log("data:", response.data);
  })
  .catch(function (error) {
    // 处理错误情况
    console.log("Error:", error.status, ". message: ", error.response.data);
  })
  .finally(function () {
    // 总是会执行
    console.log("finish post01");
  });
