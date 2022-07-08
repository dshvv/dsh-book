"use strict";(self.webpackChunkdsh_book=self.webpackChunkdsh_book||[]).push([[652],{1667:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=r(3066),c=["components"],s={hide_title:!0},d=void 0,u={unversionedId:"3\u3001\u7ed3\u5408redux-toolkit",id:"3\u3001\u7ed3\u5408redux-toolkit",title:"3\u3001\u7ed3\u5408redux-toolkit",description:"\ud83d\udc49redux-toolkit \u5b98\u65b9\u6587\u6863 \ud83d\udc48",source:"@site/docs/redux/3\u3001\u7ed3\u5408redux-toolkit.mdx",sourceDirName:".",slug:"/3\u3001\u7ed3\u5408redux-toolkit",permalink:"/dsh-book/redux/3\u3001\u7ed3\u5408redux-toolkit",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"2\u3001\u88f8\u7528redux",permalink:"/dsh-book/redux/2\u3001\u88f8\u7528redux"},next:{title:"4\u3001\u7ed3\u5408react-redux",permalink:"/dsh-book/redux/4\u3001\u7ed3\u5408react-redux"}},l={},p=[{value:"\u8fd9\u662f\u5565",id:"\u8fd9\u662f\u5565",level:2},{value:"chrome \u63d2\u4ef6\u652f\u6301",id:"chrome-\u63d2\u4ef6\u652f\u6301",level:2},{value:"\u7f16\u5199 action creator",id:"\u7f16\u5199-action-creator",level:2},{value:"\u7f16\u5199 reducer",id:"\u7f16\u5199-reducer",level:2},{value:"\u4f7f\u7528\u5207\u7247",id:"\u4f7f\u7528\u5207\u7247",level:2}],k={toc:p};function m(e){var t=e.components,s=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},k,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\ud83d\udc49",(0,a.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org"},"redux-toolkit \u5b98\u65b9\u6587\u6863")," \ud83d\udc48"),(0,a.kt)("h2",{id:"\u8fd9\u662f\u5565"},"\u8fd9\u662f\u5565"),(0,a.kt)("p",null,"redux-toolkit \u662f Redux \u5b98\u65b9\u51fa\u7684\u5de5\u5177\u5305\uff0c\u7528\u4e8e\u9ad8\u6548\u7684 Redux \u5f00\u53d1\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @reduxjs/toolkit\n")),(0,a.kt)("h2",{id:"chrome-\u63d2\u4ef6\u652f\u6301"},"chrome \u63d2\u4ef6\u652f\u6301"),(0,a.kt)("p",null,"\u539f\u751f\u7684\u5199\u6cd5\u4e0d\u652f\u6301\u6d4f\u89c8\u5668\u4f7f\u7528\u63d2\u4ef6\u8fdb\u884c\u8ddf\u8e2a debug\u3002redux-toolkit \u521b\u5efa\u7684 store \u5219\u53ef\u4ee5\n",(0,a.kt)("img",{alt:"3.1",src:r(7436).Z,width:"739",height:"251"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/src/store/index.jsx"',title:'"/src/store/index.jsx"'},'import { configureStore } from "@reduxjs/toolkit";\n\n// state\nconst initialState = {\n  msg: "\u5f20\u4e09",\n};\n\n// reducer\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case "SET_MSG":\n      return { ...state, ...{ msg: action.payload } };\n    default:\n      return state;\n  }\n};\n\n// store\nexport default configureStore({ reducer });\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"3.2",src:r(4538).Z,width:"795",height:"589"})),(0,a.kt)("h2",{id:"\u7f16\u5199-action-creator"},"\u7f16\u5199 action creator"),(0,a.kt)(i.Z,{language:"js",title:"src/store/action-creator.js",mdxType:"CodeBlock"},"import { createAction as createActionCreator } from \"@reduxjs/toolkit\";\n\n /**\n  * \u5229\u7528createActionCreator\u6765\u5b9a\u4e49\u4e00\u4e2aactioCreator\uff0c\u7528\u4e8e \u521b\u5efatype\u4e3aSET_MSG \u7684action,\n  * @param payload\u4e3aaction\u4e2d\u7684\u72b6\u6001\u5c5e\u6027\n  * @return action\n  */\nexport const setMsg = createActionCreator('SET_MSG');"),(0,a.kt)("h2",{id:"\u7f16\u5199-reducer"},"\u7f16\u5199 reducer"),(0,a.kt)(i.Z,{language:"js",title:"src/store/index.js",mdxType:"CodeBlock"},"import { configureStore, createReducer } from \"@reduxjs/toolkit\";\nimport { setMsg } from './action-creator'\n\n// state\nconst initialState = {\n  msg: '\u5f20\u4e09'\n};\n\n// reducer\nconst reducer = createReducer(initialState, (builder) => {\n  builder\n    .addCase(setMsg, (state, action) => {\n      state.msg = action.payload;\n    })\n})\n\n// store\nexport default configureStore({ reducer });"),(0,a.kt)("h2",{id:"\u4f7f\u7528\u5207\u7247"},"\u4f7f\u7528\u5207\u7247"),(0,a.kt)("p",null,"\u5f53\u7136\u8fd8\u6709\u66f4\u8fdb\u4e00\u6b65\u7684\u4f18\u5316\u5199\u6cd5\uff0c\u5c31\u662f\u5207\u7247 Slice\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u5de5\u5177\u5305\u63d0\u4f9b\u4e00\u4e2a createSlice \u51fd\u6570\uff0c\u5b83\u63a5\u53d7\u521d\u59cb\u72b6\u6001\u3001reducer \u51fd\u6570\u7684\u5bf9\u8c61\uff0c\u5e76\u81ea\u52a8\u751f\u6210 reducer \u548c action creators \u548c action types\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u5982\u6b64\u4e00\u6765\u4fbf\u4e0d\u518d\u9700\u8981\u8f85\u52a9\u51fd\u6570",(0,a.kt)("inlineCode",{parentName:"p"},"creatActionCreator"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"creatReducer"),"\uff0c\u4ee5\u53ca\u5b9a\u4e49",(0,a.kt)("inlineCode",{parentName:"p"},"action-creator"),"\u4e86\u3002\n\u6765\u8ba9\u6211\u4eec\u4f7f\u7528\u5207\u7247\u6765\u5b9a\u4e49\u4e00\u4e2a store"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/src/store/index.jsx"',title:'"/src/store/index.jsx"'},'import { configureStore, createSlice } from "@reduxjs/toolkit";\n\n// state\nconst initialState = {\n  msg: "\u5f20\u4e09",\n};\n\n// slice\n// slice\u5305\u542b action\u3001reducer,\u5982\u679c\u6709\u9700\u8981\u53ef\u4ee5\u540e\u671f\u7ed3\u6784\u51fa\u6765\u7528\nconst slice = createSlice({\n  name: "app",\n  initialState,\n  reducers: {\n    setMsg(state, action) {\n      state.msg = action.payload;\n    },\n  },\n});\n\n// actionCreator\n// \u5de5\u5177\u4f1a\u6839\u636e\u5207\u7247\u91cc\u7684reducers\u81ea\u52a8\u751f\u6210\u4e0e\u5176\u540c\u540d\u7684actionCreator\n// actionCreator\u901a\u8fc7\uff08\u540c\u6837\u81ea\u52a8\u751f\u6210\u7684\uff09type\u548creducer\u8fdb\u884c\u5173\u8054\uff0c\u6765\u8fbe\u5230\u66f4\u65b0state\u7684\u76ee\u7684\nexport const { setMsg } = slice.actions;\n\n// store\nexport default configureStore({\n  reducer: slice.reducer,\n});\n')))}m.isMDXComponent=!0},7436:function(e,t,r){t.Z=r.p+"assets/images/3.1-19e28abec95d3fee211e24ce45c0df40.png"},4538:function(e,t,r){t.Z=r.p+"assets/images/3.2-541ce48d57ea0a8f1555fbec8020d47f.gif"}}]);