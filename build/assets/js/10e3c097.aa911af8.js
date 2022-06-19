"use strict";(self.webpackChunkdsh_book=self.webpackChunkdsh_book||[]).push([[380],{4769:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return l},default:function(){return L},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return g}});var n=a(7462),r=a(3366),s=(a(7294),a(3905)),i=a(6852),u=a(3745),o=["components"],c={hide_title:!0},l=void 0,p={unversionedId:"1\u3001\u521d\u8bc6",id:"1\u3001\u521d\u8bc6",title:"1\u3001\u521d\u8bc6",description:"",source:"@site/docs\\redux\\1\u3001\u521d\u8bc6.mdx",sourceDirName:".",slug:"/1\u3001\u521d\u8bc6",permalink:"/dsh-book/build/redux/1\u3001\u521d\u8bc6",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0},sidebar:"tutorialSidebar",next:{title:"2\u3001\u88f8\u7528redux",permalink:"/dsh-book/build/redux/2\u3001\u88f8\u7528redux"}},d={},g=[{value:"Redux \u672f\u8bed",id:"redux-\u672f\u8bed",level:2},{value:"state",id:"state",level:3},{value:"action",id:"action",level:3},{value:"reducer",id:"reducer",level:3},{value:"store",id:"store",level:3},{value:"Redux \u6570\u636e\u6d41",id:"redux-\u6570\u636e\u6d41",level:2}],N=function(t){return function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)}},m=N("Tabs"),M=N("TabItem"),k={toc:g};function L(t){var e=t.components,c=(0,r.Z)(t,o);return(0,s.kt)("wrapper",(0,n.Z)({},k,c,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"tu",src:a(9078).Z,width:"100",height:"100"})),(0,s.kt)("p",null,"Redux \u662f JavaScript \u5e94\u7528\u7684\u72b6\u6001\u5bb9\u5668\uff0c\u5e2e\u4f60\u7ba1\u7406\u201c\u5168\u5c40\u201d\u72b6\u6001\u3002  "),(0,s.kt)("p",null,"Redux \u4f53\u5c0f\u800c\u7cbe\u608d\uff0c \u662f\u4e00\u4e2a\u72ec\u7acb\u7684 JS \u5e93\uff0c\u4e0d\u9650\u5236\u4efb\u4f55js\u6846\u67b6\u5747\u53ef\u4f7f\u7528\uff0c\u5373\u4f7f\u60a8\u6ca1\u6709\u8bbe\u7f6e\u7528\u6237\u754c\u9762\uff0c\u60a8\u4e5f\u53ef\u4ee5\u521b\u5efa\u548c\u4f7f\u7528 Redux Store\u3002"),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"\u8fd9\u4e5f\u610f\u5473\u7740\u60a8\u53ef\u4ee5\u5c06 Redux \u4e0e\u4efb\u4f55 UI \u6846\u67b6\uff08\u751a\u81f3\u6ca1\u6709\u4efb\u4f55UI \u6846\u67b6\u5982\u670d\u52a1\u5668\u4e0a\uff09\u4e00\u8d77\u4f7f\u7528\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528 React\u3001Vue\u3001Angular\u3001jQuery \u7f16\u5199 Redux \u5e94\u7528\u7a0b\u5e8f\u3002"))),(0,s.kt)("h2",{id:"redux-\u672f\u8bed"},"Redux \u672f\u8bed"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"1.2",src:a(3669).Z,width:"1280",height:"866"}),(0,s.kt)("br",{parentName:"p"}),"\n","\u56fe1-2"),(0,s.kt)("p",null,"\u4ece\u7ec4\u4ef6\u4e2d\u63d0\u53d6\u5171\u4eab state\uff0c\u5e76\u5c06\u5176\u653e\u5165\u7ec4\u4ef6\u6811\u4e4b\u5916\u7684\u4e00\u4e2a\u96c6\u4e2d\u4f4d\u7f6e\u3002\u8fd9\u6837\uff0c\u6211\u4eec\u7684\u7ec4\u4ef6\u6811\u5c31\u53d8\u6210\u4e86\u4e00\u4e2a\u5927\u201cview\u201d\uff0c\u4efb\u4f55\u7ec4\u4ef6\u90fd\u53ef\u4ee5\u8bbf\u95ee state \u6216\u89e6\u53d1 action\uff0c\u65e0\u8bba\u5b83\u4eec\u5728\u6811\u4e2d\u7684\u54ea\u4e2a\u4f4d\u7f6e\uff01"),(0,s.kt)("p",null,"\u901a\u8fc7\u5b9a\u4e49\u548c\u5206\u79bb state \u7ba1\u7406\u4e2d\u6d89\u53ca\u7684\u6982\u5ff5\u5e76\u5f3a\u5236\u6267\u884c\u7ef4\u62a4 view \u548c state \u4e4b\u95f4\u72ec\u7acb\u6027\u7684\u89c4\u5219\uff0c\u4ee3\u7801\u53d8\u5f97\u66f4\u7ed3\u6784\u5316\u548c\u6613\u4e8e\u7ef4\u62a4\u3002"),(0,s.kt)("p",null,"\u8fd9\u5c31\u662f Redux \u80cc\u540e\u7684\u57fa\u672c\u601d\u60f3\uff1a\u5e94\u7528\u4e2d\u4f7f\u7528\u96c6\u4e2d\u5f0f\u7684\u5168\u5c40\u72b6\u6001\u6765\u7ba1\u7406\uff0c\u5e76\u660e\u786e\u66f4\u65b0\u72b6\u6001\u7684\u6a21\u5f0f\uff0c\u4ee5\u4fbf\u8ba9\u4ee3\u7801\u5177\u6709\u53ef\u9884\u6d4b\u6027\u3002"),(0,s.kt)("h3",{id:"state"},"state"),(0,s.kt)("p",null,"state\u5c31\u662f\u4f60\u5b58\u5728\u5168\u5c40\u7684\u72b6\u6001\uff0c\u4e00\u4e2a\u7eafjs\u5bf9\u8c61\u3002\u6bd4\u5982"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const state = {\n  msg: '\u5f20\u4e09'\n}\n")),(0,s.kt)("p",null,"\u6211\u4eec\u4e0d\u80fd\u76f4\u63a5\u4fee\u6539state\u7684\u503c\uff0c\u56e0\u4e3a\u8fd9\u56de\u9020\u6210\u6570\u636e\u6765\u6e90\u4e0d\u53ef\u9884\u4f30\uff0c\u65e0\u6cd5\u8ddf\u8e2a\u3002\u51b5\u4e14redux\u4e5f\u4e0d\u5141\u8bb8\u76f4\u63a5\u4fee\u6539\uff0c\u8981\u6c42\u5fc5\u987b\u5f3a\u5236\u4f7f\u7528 action\u6765\u4fee\u6539\uff0c\u4e0b\u8fb9\u6765\u5177\u4f53\u8bf4action\u3002"),(0,s.kt)("h3",{id:"action"},"action"),(0,s.kt)("p",null,"action \u662f\u4e00\u4e2a\u5177\u6709 type \u5b57\u6bb5\u7684\u666e\u901a JavaScript \u5bf9\u8c61\u3002\u4f60\u53ef\u4ee5\u5c06 action \u89c6\u4e3a\u63cf\u8ff0\u5e94\u7528\u7a0b\u5e8f\u4e2d",(0,s.kt)("inlineCode",{parentName:"p"},"\u53d1\u751f\u4e86\u4ec0\u4e48"),"\u3002",(0,s.kt)("br",{parentName:"p"}),"\n","action \u5bf9\u8c61\u53ef\u4ee5\u6709\u5176\u4ed6\u5b57\u6bb5\uff0c\u6309\u7167\u60ef\u4f8b\uff0c\u6211\u4eec\u5c06\u8be5\u4fe1\u606f\u653e\u5728\u540d\u4e3a payload \u7684\u5b57\u6bb5\u4e2d\u3002",(0,s.kt)("br",{parentName:"p"}),"\n","\u4e00\u4e2a\u5178\u578b\u7684 action \u5bf9\u8c61\u53ef\u80fd\u5982\u4e0b\u6240\u793a\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'const setMsgAction = {\n  type: "SET_MSG",\n  payload: "\u674e\u56db",\n};\n')),(0,s.kt)("p",null,"\u4e3a\u4e86\u628a action \u548c state \u4e32\u8d77\u6765\uff0c\u5f00\u53d1\u4e00\u4e9b\u51fd\u6570\uff0c\u8fd9\u5c31\u662f reducer\u3002\u4e0b\u8fb9\u6765\u5177\u4f53\u8bf4reducer\u3002"),(0,s.kt)("h3",{id:"reducer"},"reducer"),(0,s.kt)("p",null,"reducer \u53ea\u662f\u4e00\u4e2a\u63a5\u6536 state \u548c action\uff0c\u5e76\u8fd4\u56de\u65b0\u7684 state \u7684\u51fd\u6570"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'const initialState = { msg: "\u5f20\u4e09" };\n\nfunction reducer(state = initialState, action) {\n  if (action.type === "SET_MSG") {\n    // \u68c0\u67e5 reducer \u662f\u5426\u5173\u5fc3\u8fd9\u4e2a action\n    return { ...state, msg: action.payload };\n  }\n  return state; // \u8fd4\u56de\u539f\u6765\u7684 state \u4e0d\u53d8\n}\n')),(0,s.kt)("p",null,"\u8fd9\u5dee\u4e0d\u591a\u5c31\u662f Redux \u601d\u60f3\u7684\u5168\u90e8\uff0c\u81f3\u6b64\u6211\u4eec\u8fd8\u6ca1\u6709\u4f7f\u7528\u4efb\u4f55 Redux \u7684 API\uff0c\u4f46\u662f\u5df2\u7ecf\u5b8c\u6210\u4e86\u4e00\u4e2a\u5168\u5c40\u72b6\u6001\uff0c\u5e76\u4e14\u53ef\u4ee5\u4f7f\u7528\uff0c\u5982\u4e0b"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="/src/pages/index.tsx"',title:'"/src/pages/index.tsx"'},'reducer({ type: "SET_MSG", payload: "\u674e\u56db" })\nconsole.log(initialState)\n')),(0,s.kt)("p",null,"Redux \u91cc\u6709\u4e00\u4e9b\u65b9\u6cd5\u6765\u7b80\u5316\u8fd9\u79cd\u6a21\u5f0f\uff0c\u4f46\u662f\u4e3b\u8981\u7684\u60f3\u6cd5\u662f\u5982\u4f55\u6839\u636e\u8fd9\u4e9b action \u5bf9\u8c61\u6765\u66f4\u65b0 state\uff0c90% \u7684\u4ee3\u7801\u90fd\u662f\u7eaf JavaScript\uff0c\u5e76\u6ca1\u6709\u5176\u4ed6\u7279\u522b\u9ad8\u6df1\u7684\u4e1c\u897f\u3002\u4e0b\u8fb9\u6765\u804a\u804a store\uff08\u4e5f\u5c31\u662fRedux\uff09"),(0,s.kt)("h3",{id:"store"},"store"),(0,s.kt)("p",null,"store \u662fRedux\u7684\u6838\u5fc3\u7684\u4e3b\u8981\u4f53\u73b0\u3002   "),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"store \u662f\u901a\u8fc7\u4f20\u5165\u4e00\u4e2a reducer \u6765\u521b\u5efa\u7684\uff08createStore\u63a5\u53d7\u4e00\u4e2areducer\u4f5c\u4e3a\u53c2\u6570\uff09\uff0cstore \u7684\u5bf9\u8c61\u91cc\u5b58\u5165\u4e86\u5f53\u524d Redux \u5e94\u7528\u7684\u72b6\u6001\uff0cstore \u91cc\u8fd8\u63d0\u4f9b\u4e86\u8bfb\u5199\u72b6\u6001\u6570\u636e\u7684\u64cd\u4f5c\u3002"))),(0,s.kt)(i.Z,{language:"js",title:"src/store/index.js",mdxType:"CodeBlock"},u.Z),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"getState"),(0,s.kt)("br",{parentName:"p"}),"\n","\u83b7\u53d6\u5f53\u524d state \u72b6\u6001\u503c"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="/src/pages/App.tsx"',title:'"/src/pages/App.tsx"'},'import store from "/src/store/index.tsx";\nconst { msg } = store.getState();\nconsole.log(msg); // \u5f20\u4e09\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"dispatch"),(0,s.kt)("br",{parentName:"p"}),"\n","Redux store \u6709\u4e00\u4e2a\u65b9\u6cd5\u53eb dispatch\u3002",(0,s.kt)("br",{parentName:"p"}),"\n","\u66f4\u65b0 state \u7684\u552f\u4e00\u65b9\u6cd5\u662f\u8c03\u7528 store.dispatch() \u5e76\u4f20\u5165\u4e00\u4e2a action \u5bf9\u8c61\u3002",(0,s.kt)("br",{parentName:"p"}),"\n","store \u5c06\u6267\u884c\u6240\u6709 reducer \u51fd\u6570\u5e76\u8ba1\u7b97\u51fa\u66f4\u65b0\u540e\u7684 state\uff0c\u8c03\u7528 getState() \u53ef\u4ee5\u83b7\u53d6\u65b0 state\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="/src/components/Tips.tsx"',title:'"/src/components/Tips.tsx"'},'import store from "/src/store/index.tsx";\n\nstore.dispatch({ type: "SET_MSG", payload: "\u674e\u56db" });\nconst { msg } = store.getState();\nconsole.log(msg); // \u674e\u56db\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"subscribe"),(0,s.kt)("br",{parentName:"p"}),"\n","state \u53d8\u5316\u76d1\u542c\u5668\u3002\u6bcf\u5f53 dispatch action \u7684\u65f6\u5019\u5c31\u4f1a\u6267\u884c\u3002",(0,s.kt)("br",{parentName:"p"}),"\n","\u4f60\u53ef\u4ee5\u5728\u56de\u8c03\u51fd\u6570\u91cc\u8c03\u7528 getState() \u6765\u62ff\u5230\u5f53\u524d state\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="/src/pages/App.tsx"',title:'"/src/pages/App.tsx"'},'import store from "/src/store/index.tsx";\n\nstore.subscribe(() => {\n  const { msg } = store.getState();\n  console.log(msg); // \u674e\u56db\n});\n')),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"redux\u63d0\u4f9b\u7684dispatch\u548csubscribe\u662f\u4e0d\u662f\u548c\u53d1\u5e03\u8ba2\u9605\u8005\u6a21\u5f0f\u7684emit\u548con\u53ca\u5176\u7c7b\u4f3c\uff1f\u6ca1\u9519\u5176\u5b9e\u672c\u8d28\u5c31\u662f\u8fd9\u6837\u7684\u3002 redux\u60f3\u505a\u7684\u5c31\u662f\u6539\u53d8\u4e86\u72b6\u6001\u4e4b\u540e\uff0c\u8fd8\u9700\u8981\u901a\u77e5\u8ba2\u9605\u8005\u3002\u8fd9\u5c31\u662f\u662fredux\u5e2e\u5fd9\u6211\u4eec\u5185\u90e8\u5b9e\u73b0\u597d\u63d0\u4f9b\u7ed9\u6211\u4eec\u7528\u7684\u5de5\u5177\u4e4b\u4e00\u3002"))),(0,s.kt)("h2",{id:"redux-\u6570\u636e\u6d41"},"Redux \u6570\u636e\u6d41"),(0,s.kt)("p",null,"\u5982\u56fe1-2\uff0cRedux\u72b6\u6001\u7684\u7ba1\u7406\uff0c\u5176\u5b9e\u662f\u5355\u9879\u6d41\u52a8\u7684\uff0c\u7b80\u79f0\u201c\u5355\u5411\u6570\u636e\u6d41\u201d\uff0c\u5b83\u63cf\u8ff0\u4e86\u66f4\u65b0\u5e94\u7528\u7a0b\u5e8f\u7684\u4ee5\u4e0b\u6b65\u9aa4\u5e8f\u5217\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"1. State \u63cf\u8ff0\u4e86\u5e94\u7528\u7a0b\u5e8f\u5728\u7279\u5b9a\u65f6\u95f4\u70b9\u7684\u72b6\u51b5\n2. \u57fa\u4e8e state \u6765\u6e32\u67d3 UI\n3. \u5f53\u53d1\u751f\u67d0\u4e9b\u4e8b\u60c5\u65f6\uff08\u4f8b\u5982\u7528\u6237\u5355\u51fb\u6309\u94ae\uff09\uff0cstate \u4f1a\u6839\u636e\u53d1\u751f\u7684\u4e8b\u60c5\u8fdb\u884c\u66f4\u65b0\n4. \u57fa\u4e8e\u65b0\u7684 state \u91cd\u65b0\u6e32\u67d3 UI\n")),(0,s.kt)("p",null,"\u5177\u4f53\u6765\u8bf4\uff0c\u5bf9\u4e8e Redux\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u8fd9\u4e9b\u6b65\u9aa4\u5206\u89e3\u4e3a\u66f4\u8be6\u7ec6\u7684\u5185\u5bb9\uff1a"),(0,s.kt)(m,{mdxType:"Tabs"},(0,s.kt)(M,{value:"\u521d\u59cb\u542f\u52a8",label:"\u521d\u59cb\u542f\u52a8",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"1. \u4f7f\u7528\u6700\u9876\u5c42\u7684 root reducer \u51fd\u6570\u521b\u5efa Redux store\n2. store \u8c03\u7528\u4e00\u6b21 root reducer\uff0c\u5e76\u5c06\u8fd4\u56de\u503c\u4fdd\u5b58\u4e3a\u5b83\u7684\u521d\u59cb state\n3. \u5f53 UI \u9996\u6b21\u6e32\u67d3\u65f6\uff0cUI \u7ec4\u4ef6\u8bbf\u95ee Redux store \u7684\u5f53\u524d state\uff0c\u5e76\u4f7f\u7528\u8be5\u6570\u636e\u6765\u51b3\u5b9a\u8981\u5448\u73b0\u7684\u5185\u5bb9\u3002\u540c\u65f6\u76d1\u542c store \u7684\u66f4\u65b0\uff0c\u4ee5\u4fbf\u4ed6\u4eec\u53ef\u4ee5\u77e5\u9053 state \u662f\u5426\u5df2\u66f4\u6539\u3002\n"))),(0,s.kt)(M,{value:"\u66f4\u65b0\u73af\u8282",label:"\u66f4\u65b0\u73af\u8282",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"1. \u5e94\u7528\u7a0b\u5e8f\u4e2d\u53d1\u751f\u4e86\u67d0\u4e9b\u4e8b\u60c5\uff0c\u4f8b\u5982\u7528\u6237\u5355\u51fb\u6309\u94ae\n2. dispatch \u4e00\u4e2a action \u5230 Redux store\uff0c\u4f8b\u5982 dispatch({type: 'counter/increment'})\n3. store \u7528\u4e4b\u524d\u7684 state \u548c\u5f53\u524d\u7684 action \u518d\u6b21\u8fd0\u884c reducer \u51fd\u6570\uff0c\u5e76\u5c06\u8fd4\u56de\u503c\u4fdd\u5b58\u4e3a\u65b0\u7684 state\n4. store \u901a\u77e5\u6240\u6709\u8ba2\u9605\u8fc7\u7684 UI\uff0c\u901a\u77e5\u5b83\u4eec store \u53d1\u751f\u66f4\u65b0\n5. \u6bcf\u4e2a\u8ba2\u9605\u8fc7 store \u6570\u636e\u7684 UI \u7ec4\u4ef6\u90fd\u4f1a\u68c0\u67e5\u5b83\u4eec\u9700\u8981\u7684 state \u90e8\u5206\u662f\u5426\u88ab\u66f4\u65b0\u3002\n6. \u53d1\u73b0\u6570\u636e\u88ab\u66f4\u65b0\u7684\u6bcf\u4e2a\u7ec4\u4ef6\u90fd\u5f3a\u5236\u4f7f\u7528\u65b0\u6570\u636e\u91cd\u65b0\u6e32\u67d3\uff0c\u7d27\u63a5\u7740\u66f4\u65b0\u7f51\u9875\n")))),(0,s.kt)("p",null,"\u52a8\u753b\u7684\u65b9\u5f0f\u6765\u8868\u8fbe\u6570\u636e\u6d41\u66f4\u65b0\uff1a",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("img",{alt:"1.3",src:a(2844).Z,width:"1440",height:"1080"})))}L.isMDXComponent=!0},3745:function(t,e){e.Z='import { createStore } from "redux";\r\n\r\n// state\r\nconst initialState = {\r\n  msg: "\u5f20\u4e09",\r\n};\r\n\r\n// reducer\r\nconst reducer = (state = initialState, action) => {\r\n  switch (action.type) {\r\n    case "SET_MSG":\r\n      return { ...state, ...{ msg: action.payload } };\r\n    default:\r\n      return state;\r\n  }\r\n};\r\n\r\n// store\r\nexport default createStore(reducer);'},9078:function(t,e){e.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZyBmaWxsPSIjNzY0QUJDIj48cGF0aCBkPSJNNjUuNiA2NS40YzIuOS0uMyA1LjEtMi44IDUtNS44LS4xLTMtMi42LTUuNC01LjYtNS40aC0uMmMtMy4xLjEtNS41IDIuNy01LjQgNS44LjEgMS41LjcgMi44IDEuNiAzLjctMy40IDYuNy04LjYgMTEuNi0xNi40IDE1LjctNS4zIDIuOC0xMC44IDMuOC0xNi4zIDMuMS00LjUtLjYtOC0yLjYtMTAuMi01LjktMy4yLTQuOS0zLjUtMTAuMi0uOC0xNS41IDEuOS0zLjggNC45LTYuNiA2LjgtOC0uNC0xLjMtMS0zLjUtMS4zLTUuMS0xNC41IDEwLjUtMTMgMjQuNy04LjYgMzEuNCAzLjMgNSAxMCA4LjEgMTcuNCA4LjEgMiAwIDQtLjIgNi0uNyAxMi44LTIuNSAyMi41LTEwLjEgMjgtMjEuNHoiLz48cGF0aCBkPSJNODMuMiA1M2MtNy42LTguOS0xOC44LTEzLjgtMzEuNi0xMy44SDUwYy0uOS0xLjgtMi44LTMtNC45LTNoLS4yYy0zLjEuMS01LjUgMi43LTUuNCA1LjguMSAzIDIuNiA1LjQgNS42IDUuNGguMmMyLjItLjEgNC4xLTEuNSA0LjktMy40SDUyYzcuNiAwIDE0LjggMi4yIDIxLjMgNi41IDUgMy4zIDguNiA3LjYgMTAuNiAxMi44IDEuNyA0LjIgMS42IDguMy0uMiAxMS44LTIuOCA1LjMtNy41IDguMi0xMy43IDguMi00IDAtNy44LTEuMi05LjgtMi4xLTEuMSAxLTMuMSAyLjYtNC41IDMuNiA0LjMgMiA4LjcgMy4xIDEyLjkgMy4xIDkuNiAwIDE2LjctNS4zIDE5LjQtMTAuNiAyLjktNS44IDIuNy0xNS44LTQuOC0yNC4zeiIvPjxwYXRoIGQ9Ik0zMi40IDY3LjFjLjEgMyAyLjYgNS40IDUuNiA1LjRoLjJjMy4xLS4xIDUuNS0yLjcgNS40LTUuOC0uMS0zLTIuNi01LjQtNS42LTUuNGgtLjJjLS4yIDAtLjUgMC0uNy4xLTQuMS02LjgtNS44LTE0LjItNS4yLTIyLjIuNC02IDIuNC0xMS4yIDUuOS0xNS41IDIuOS0zLjcgOC41LTUuNSAxMi4zLTUuNiAxMC42LS4yIDE1LjEgMTMgMTUuNCAxOC4zIDEuMy4zIDMuNSAxIDUgMS41LTEuMi0xNi4yLTExLjItMjQuNi0yMC44LTI0LjYtOSAwLTE3LjMgNi41LTIwLjYgMTYuMS00LjYgMTIuOC0xLjYgMjUuMSA0IDM0LjgtLjUuNy0uOCAxLjgtLjcgMi45eiIvPjwvZz48L3N2Zz4="},3669:function(t,e,a){e.Z=a.p+"assets/images/1.2-04fe46332c1ccb3497ecb04b94e55b97.png"},2844:function(t,e,a){e.Z=a.p+"assets/images/1.3-49fa8c3968371d9ef6f2a1486bd40a26.gif"}}]);