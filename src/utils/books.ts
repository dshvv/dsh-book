// @ts-nocheck
import meImg from '../../static/img/home/me.jpg';
import feImg from '../../static/img/home/fe.png';
import reduxImg from '../../static/img/home/redux.png';
import redImg from '../../static/img/home/red.jpg';
import cnblogsImg from '../../static/img/home/cnblogs.png';
import githubImg from '../../static/img/home/github.png';
import webpackImg from '../../static/img/home/webpack.png';
import babelImg from '../../static/img/home/babel.png';



export default [
    {
        title:'前端学习',
        description:'小白新手指导',
        logo: feImg,
        path: '/fe/第1章_前言'
    },
    {
        title:'Babel教程',
        description:'Babel教程',
        logo: babelImg,
        path: '/babel/第1章_前言'
    },
    {
        title:'Webpack教程',
        description:'Webpack教程',
        logo: webpackImg,
        path: '/webpack/第1章_前言'
    },
    {
        title:'Redux教程',
        description:'Redux使用说明',
        logo: reduxImg,
        path: '/redux/1、初识'
    },
    {
        title:'红宝书',
        description:'第四版JS高编',
        logo: redImg,
        path: 'https://dshvv.github.io/red-treasure-book/dist'
    }
]

export const apps =  [
    {
        title:'关于我',
        logo: meImg,
        path:'/life/认识我'
    },
    {
        title:'博客园',
        logo: cnblogsImg,
        path:'https://www.cnblogs.com/dingshaohua'
    },
    {
        title:'github',
        logo: githubImg,
        path:'https://github.com/dshvv'
    }
]