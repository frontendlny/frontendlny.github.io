import Vue from 'vue'
import * as filters from './filters'  //相当于取出所有，别名   filters是一个对象

Object.keys(filters).forEach(key=>{
    console.log(key);
    console.log(filters[key]);
    Vue.filter(key,filters[key])
})

