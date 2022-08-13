<template>
  <div>
    <input type="file" id="file" ref="file" />
    <button @click="upload">上传图片</button>
    <button @click="download" download>下载图片</button>
    <a href="api/downLoadImg" download>下载</a>
    <button @click="showImg">显示图片</button>
    <img :src="imgUrl" />
  </div>
</template>

<script>
import axios from "axios";

import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      imgUrl: ""
    };
  },
  methods: {
    upload() {
      let file = document.getElementById("file").files[0];
      //创建空的formData对象
      let formdata = new FormData();
      formdata.append("file", file);
      // console.log("@@@", formdata.get("file"));

      axios
        .post("api/upLoadImg", formdata, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(res => {
          console.log("@@@", res);
        });

      // axios({
      //   url: "api/upLoadImg",
      //   method: "POST",
      //   data: {
      //     id: uuidv4().slice(0, 7),
      //     filename: filename,
      //     formdata: formdata
      //   },
      //   headers: { "Content-Type": "application/json" }
      // }).then(res => {
      //   console.log("@@@", res);
      // });
    },
    download() {
      // axios.get("api/downLoadImg").then(res => {
      //   console.log(res);
      // });
    },
    showImg() {
      axios({
        url: "api/getImg",
        method: "get",
        responseType: "blob",
        params: {
          id: "942611522"
        }
      }).then(res => {
        console.log(res.data);
        // let blob = new Blob([res], {
        //   type: "image/jpeg"
        // });
        // console.log('!!!',blob)
        // let src = URL.createObjectURL(blob);
        // console.log(src);
        // this.imgUrl = src;

        let wj = new FormData();
        wj.append("file", res.data);
        console.log("@@@", wj.get("file"));
        let src = URL.createObjectURL(wj.get("file"));
        console.log(src);
        this.imgUrl = src;
      });
    }
  }
};
</script>
<style>
</style>