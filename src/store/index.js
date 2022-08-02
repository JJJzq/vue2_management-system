import vuex from 'vuex'
import vue from 'vue'
import axios from 'axios'

vue.use(vuex)

export default new vuex.Store({

    state: {
        keywords: '',   //搜索关键词
        userList: [],    //用户列表
        userSearchRes:[],   //用户搜索结果
        token: '',        //token验证
        newUser: {}      //新添加的用户信息
    },

    mutations: {
        //获取数据库中的用户信息
        getUserInfo(state) {
            state.userList = []
            axios.get("/api/getUserList").then(res => {
                console.log("获取用户数据：", res.data);
                // state.userList = res.data;
                for (let i = 0; i < res.data.length; i++) {
                    // console.log(res.data[i]);
                    state.userList.push(res.data[i])
                }
            });
        }
    }

})