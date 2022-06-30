"use strict";(self.webpackChunkdsh_book=self.webpackChunkdsh_book||[]).push([[952],{2348:function(t,e,M){M.r(e),M.d(e,{assets:function(){return I},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return u},metadata:function(){return o},toc:function(){return D}});var r=M(7462),n=M(3366),i=(M(7294),M(3905)),N=M(6852),j=M(3745),a=["components"],u={hide_title:!0},c=void 0,o={unversionedId:"2\u3001\u88f8\u7528redux",id:"2\u3001\u88f8\u7528redux",title:"2\u3001\u88f8\u7528redux",description:"",source:"@site/docs\\redux\\2\u3001\u88f8\u7528redux.mdx",sourceDirName:".",slug:"/2\u3001\u88f8\u7528redux",permalink:"/dsh-book/build/redux/2\u3001\u88f8\u7528redux",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"1\u3001\u521d\u8bc6",permalink:"/dsh-book/build/redux/1\u3001\u521d\u8bc6"},next:{title:"3\u3001\u7ed3\u5408redux-toolkit",permalink:"/dsh-book/build/redux/3\u3001\u7ed3\u5408redux-toolkit"}},I={},D=[{value:"\u5b9a\u4e49 store",id:"\u5b9a\u4e49-store",level:2},{value:"\u4f7f\u7528\u72b6\u6001",id:"\u4f7f\u7528\u72b6\u6001",level:2},{value:"\u66f4\u65b0\u72b6\u6001",id:"\u66f4\u65b0\u72b6\u6001",level:2},{value:"\u4f18\u5316\u4ee3\u7801",id:"\u4f18\u5316\u4ee3\u7801",level:2}],s={toc:D};function g(t){var e=t.components,u=(0,n.Z)(t,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,u,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"tu",src:M(9078).Z,width:"100",height:"100"}),(0,i.kt)("br",{parentName:"p"}),"\n","\ud83d\udc49",(0,i.kt)("a",{parentName:"p",href:"http://cn.redux.js.org/introduction/getting-started"},"redux \u5b98\u65b9\u6587\u6863")," \ud83d\udc48"),(0,i.kt)("p",null,"\u88f8\u7528\u7684\u610f\u601d\u662f\uff0c\u53ea\u7528\u4e00\u4e2aredux\u5e93\uff0c\u5176\u4ed6\u4ec0\u4e48\u8f85\u52a9\u5305\u90fd\u4e0d\u5b89\u88c5\u4f7f\u7528\u3002"),(0,i.kt)("h2",{id:"\u5b9a\u4e49-store"},"\u5b9a\u4e49 store"),(0,i.kt)(N.Z,{language:"js",title:"src/store/index.js",mdxType:"CodeBlock"},j.Z),(0,i.kt)("h2",{id:"\u4f7f\u7528\u72b6\u6001"},"\u4f7f\u7528\u72b6\u6001"),(0,i.kt)(N.Z,{language:"jsx",title:"src/App.jsx",mdxType:"CodeBlock"},"import store from './store'\nimport { useEffect, useState } from 'react'\nimport Tips from './compnents/Tips'\n\nexport default () => {\n  useEffect(() => {\n    store.subscribe(() => {\n      setMsg(store.getState().msg);\n    })\n  }, [])\n  const [msg, setMsg] = useState(store.getState().msg);\n  return (\n    <div className=\"App\">\n      <Tips />\n      <div>{msg}</div>\n    </div>\n  );\n}"),(0,i.kt)("h2",{id:"\u66f4\u65b0\u72b6\u6001"},"\u66f4\u65b0\u72b6\u6001"),(0,i.kt)(N.Z,{language:"jsx",title:"src/components/Tips.jsx",mdxType:"CodeBlock"},"import store from '../store'\r\n\r\nexport default () => {\r\n    const btnClick = () => {\r\n        store.dispatch({\r\n            type: 'SET_MSG',\r\n            payload: '\u674e\u56db'\r\n        });\r\n    }\r\n    return (\r\n        <button className=\"Tips\" onClick={btnClick}>\r\n            \u5b50\u7ec4\u4ef6\u6309\u94ae\r\n        </button>\r\n    );\r\n}\r\n"),(0,i.kt)("h2",{id:"\u4f18\u5316\u4ee3\u7801"},"\u4f18\u5316\u4ee3\u7801"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"2.1",src:M(2759).Z,width:"200",height:"200"})),(0,i.kt)("p",null,"\u4ee5\u4e0a\u7684\u5199\u6cd5\u548c\u7528\u6cd5\u90fd\u6ca1\u4ec0\u4e48\u95ee\u9898\uff0c\u662f\u6700\u57fa\u672c\u7684\u6807\u51c6\u7684\u7528\u6cd5\uff0c\u4f46\u5728\u5b9e\u9645\u5e94\u7528\u4e0a\uff0c\u6211\u4eec\u4f1a\u53d1\u73b0\u6709\u5f88\u591a\u4f18\u5316\u7684\u5730\u65b9\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\ud83d\udc69\u200d\ud83d\udd27 \u4f18\u5316 action"),(0,i.kt)("br",{parentName:"p"}),"\n","\u5728\u5927\u578b\u9879\u76ee\u4e2d\uff0c\u76f4\u63a5\u628a action \u5199\u5728\u7ec4\u4ef6\u4e2d\uff0c\u4f1a\u5f88\u6563\u4e71\uff0c\u4e0d\u597d\u7edf\u4e00\u7ba1\u7406\uff0c\u800c\u4e14\u4e5f\u65e0\u6cd5\u8fbe\u5230\u590d\u7528\u6027\uff0c\u6240\u4ee5\u5982\u679c action \u591a\u4e86\u7684\u8bdd\uff0c\u6211\u4eec\u53ef\u4ee5\u5b9a\u4e00\u4e2a\u8f85\u52a9\u7528\u51fd\u6570\u6765\u751f\u6210\uff0c\u8fd9\u4e2a\u51fd\u6570\u4fd7\u79f0 action creator\uff0c\u5373 action \u751f\u6210\u5668\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u63d0\u53d6\u51fa\u4e00\u4e2a action \u751f\u6210\u5668\uff1a"),(0,i.kt)(N.Z,{language:"js",title:"src/store/action-creator.js",mdxType:"CodeBlock"}," /**\r\n  * \u5b9a\u4e49\u4e00\u4e2aactioCreator\uff0c\u7528\u4e8e \u521b\u5efatype\u4e3aSET_MSG \u7684action,\r\n  * @param payload\u4e3aaction\u4e2d\u7684\u72b6\u6001\u5c5e\u6027\r\n  * @return action\r\n  */\r\nexport const setMsg = (payload) => {\r\n  return {\r\n    type: 'SET_MSG',\r\n    payload\r\n  }\r\n}"),(0,i.kt)("p",null,"\u7136\u540e\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528"),(0,i.kt)(N.Z,{language:"jsx",title:"src/components/Tips.jsx",mdxType:"CodeBlock"},"import store from '../store'\r\nimport { setMsg } from '../store/action-creator'\r\n\r\nexport default () => {\r\n    const btnClick = () => {\r\n        store.dispatch(setMsg('\u674e\u56db'));\r\n    }\r\n    return (\r\n        <button className=\"Tips\" onClick={btnClick}>\r\n            \u5b50\u7ec4\u4ef6\u6309\u94ae\r\n        </button>\r\n    );\r\n}\r\n"),(0,i.kt)("p",null,"\u751a\u81f3\u6211\u4eec\u53ef\u4ee5\u66f4\u8fd1\u4e00\u6b65\u5c01\u88c5, \u5c06 action creator \u7684\u521b\u5efa\u4e5f\u63d0\u53d6\u51fa\u6765"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="src/store/redux-helper.js"',title:'"src/store/redux-helper.js"'},"/**\n * \u751f\u6210actionCreator\n * @param action\u7684type\u5b57\u6bb5\n * @return actionCreator\n */\nexport const creatActionCreator = (type) => {\n  const actionCreator = (payload) => {\n    return { type, payload };\n  };\n  return actionCreator;\n};\n")),(0,i.kt)("p",null,"\u7136\u540e\u6211\u4eec\u518d\u6765\u521b\u5efa\u4e00\u4e2a action creater\uff0c \u770b\u770b\u662f\u4e0d\u662f\u53d8\u5f97\u66f4\u7b80\u6d01\u4e86"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="src/store/action-creator.js"',title:'"src/store/action-creator.js"'},'import { creatActionCreator } from "./redux-helper";\n\n// creatActionCreator \u6765\u521b\u5efatype\u4e3aSET_MSG \u7684actionCreator\nexport const setMsg = creatActionCreator("SET_MSG");\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\ud83d\udc69\u200d\ud83d\udd27 \u4f18\u5316 reducer"),(0,i.kt)("br",{parentName:"p"}),"\n","Reducer \u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u5b83\u63a5\u53d7\u5f53\u524d\u7684 state \u548c action\uff0c\uff08\u901a\u8fc7\u5185\u90e8\u7684\u903b\u8f91\u5904\u7406\uff0c\u5b83\u6765\u51b3\u5b9a\u5982\u4f55\u66f4\u65b0\u6570\u636e\u5373\uff09\u8fd4\u56de\u65b0\u7684 state\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u540c\u6837\u7684\uff0c\u539f\u751f\u5199\u6cd5\u4e5f\u8fc7\u4e8e\u6837\u677f\u5316\uff0c\u4ee3\u7801\u5f88\u591a\u662f\u91cd\u590d\u7684\uff0c\u6240\u4ee5\u6211\u4eec\u4e5f\u53ef\u4ee5\u5bf9\u5176\u4f18\u5316\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u63d0\u53d6\u51fa\u4e00\u4e2a reducer \u751f\u6210\u5668\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="src/store/redux-helper.js"',title:'"src/store/redux-helper.js"'},"/**\n * \u751f\u6210\u4e00\u4e2areducer\n * @param handlers\u4fee\u6539\u72b6\u6001\u7684\u903b\u8f91\u51fd\u6570\uff0cinitialState\u4e3a\u72b6\u6001\u521d\u59cb\u503c\n * @return \u8fd4\u56de\u4e00\u4e2areducer\u51fd\u6570\n */\nexport const creatReducer = (handlers, initialState) => {\n  const reducer = (state = initialState, action) => {\n    let finallyState = initialState;\n    for (const key in handlers) {\n      if (action.type === key) {\n        finallyState = handlers[key](state, action);\n      }\n    }\n    return finallyState;\n  };\n  return reducer;\n};\n")),(0,i.kt)("p",null,"\u7136\u540e\u770b\u770b\u4f7f\u7528\uff0c\u662f\u4e0d\u662f\u53d8\u5f97\u7b80\u6d01\u8d77\u6765\u4e86"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/store/index.js"',title:'"src/store/index.js"'},'import { createStore } from "redux";\nimport { creatReducer } from "./redux-helper";\nimport { setMsg } from "./action-creator";\n\n// state\nconst initialState = {\n  msg: "\u5f20\u4e09",\n};\n\n// reducer\nconst reducer = creatReducer(\n  {\n    [setMsg().type](state, action) {\n      return { ...state, ...{ msg: action.payload } };\n    },\n  },\n  initialState\n);\n\n// store\nexport default createStore(reducer);\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u603b\u7ed3"),(0,i.kt)("br",{parentName:"p"}),"\n","\u5982\u4e0a\u8bf4\u7684\u4f18\u5316\uff0c\u5176\u5b9e\u5c31\u662f\u63d0\u4f9b\u4e86\u4e24\u4e2a\u751f\u6210\u5668\uff0c\u4e00\u4e2a\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"creatActionCreator"),",\u4e00\u4e2a\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"creatReducer"),"\u3002"),(0,i.kt)("p",null,"\u5176\u5b9e\u8fd9\u4e9b\u5df2\u7ecf\u6709\u4eba\u5e2e\u6211\u4eec\u5199\u4e86\uff0c\u5e76\u4e14\u8fd8\u6253\u5305\u4e0a\u4f20\u5230 npm \u4e0a\uff0c\u6211\u4eec\u53ea\u9700\u8981\u4e0b\u8f7d\u65e2\u53ef\u4ee5\u662f\u5373\u53ef\uff0c\u53eb\u505a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/redux-utilities/redux-actions"},"redux-actions"),"\u3002\n\u5728\u4ee5\u524d\u5927\u5bb6\u90fd\u7528\u8fd9\u4e2a\u5305\uff0c\u6765\u7b80\u5316 redux \u7684\u4f7f\u7528\u3002\u4e0d\u5e78\u7684\u662f\uff0c\u4f5c\u8005\u8c8c\u4f3c\u5df2\u7ecf\u4e0d\u600e\u4e48\u7ef4\u62a4\u8fd9\u4e2a\u5e93\u4e86\uff0c\u800c\u4e14\u5b83\u8fd8\u4e0d\u662f\u5b98\u65b9\u51fa\u7684\u3002"),(0,i.kt)("p",null,"\u5e78\u8fd0\u7684\u662f\uff0cfaceBook \u5b98\u65b9\u5df2\u7ecf\u6ce8\u610f\u5230\u4e86\u8fd9\u4e2a\u60c5\u51b5\uff0c\u4e8e\u662f\u81ea\u5df1\u5728\u5f88\u65e9\u4e4b\u524d\u7740\u624b\u5e76\u4e14\u73b0\u5728\u5df2\u7ecf\u53d1\u884c\u4e86\u5b98\u65b9\u7684 redux \u8f85\u52a9\u5de5\u5177\u5305\uff0c\u53eb\u505a",(0,i.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org"},"redux-toolkit"),"\uff0c\u91cc\u8fb9\u63d0\u4f9b\u4e86\u5f88\u591a\u4f7f\u7528\u7684\u4e1c\u897f\uff0c\u5176\u4e2d\u5c31\u5c31\u5305\u62ec\u4ee5\u4e0a\u4e24\u4e2a\u751f\u6210\u5668\u3002"))}g.isMDXComponent=!0},3745:function(t,e){e.Z='import { createStore } from "redux";\r\n\r\n// state\r\nconst initialState = {\r\n  msg: "\u5f20\u4e09",\r\n};\r\n\r\n// reducer\r\nconst reducer = (state = initialState, action) => {\r\n  switch (action.type) {\r\n    case "SET_MSG":\r\n      return { ...state, ...{ msg: action.payload } };\r\n    default:\r\n      return state;\r\n  }\r\n};\r\n\r\n// store\r\nexport default createStore(reducer);'},9078:function(t,e){e.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZyBmaWxsPSIjNzY0QUJDIj48cGF0aCBkPSJNNjUuNiA2NS40YzIuOS0uMyA1LjEtMi44IDUtNS44LS4xLTMtMi42LTUuNC01LjYtNS40aC0uMmMtMy4xLjEtNS41IDIuNy01LjQgNS44LjEgMS41LjcgMi44IDEuNiAzLjctMy40IDYuNy04LjYgMTEuNi0xNi40IDE1LjctNS4zIDIuOC0xMC44IDMuOC0xNi4zIDMuMS00LjUtLjYtOC0yLjYtMTAuMi01LjktMy4yLTQuOS0zLjUtMTAuMi0uOC0xNS41IDEuOS0zLjggNC45LTYuNiA2LjgtOC0uNC0xLjMtMS0zLjUtMS4zLTUuMS0xNC41IDEwLjUtMTMgMjQuNy04LjYgMzEuNCAzLjMgNSAxMCA4LjEgMTcuNCA4LjEgMiAwIDQtLjIgNi0uNyAxMi44LTIuNSAyMi41LTEwLjEgMjgtMjEuNHoiLz48cGF0aCBkPSJNODMuMiA1M2MtNy42LTguOS0xOC44LTEzLjgtMzEuNi0xMy44SDUwYy0uOS0xLjgtMi44LTMtNC45LTNoLS4yYy0zLjEuMS01LjUgMi43LTUuNCA1LjguMSAzIDIuNiA1LjQgNS42IDUuNGguMmMyLjItLjEgNC4xLTEuNSA0LjktMy40SDUyYzcuNiAwIDE0LjggMi4yIDIxLjMgNi41IDUgMy4zIDguNiA3LjYgMTAuNiAxMi44IDEuNyA0LjIgMS42IDguMy0uMiAxMS44LTIuOCA1LjMtNy41IDguMi0xMy43IDguMi00IDAtNy44LTEuMi05LjgtMi4xLTEuMSAxLTMuMSAyLjYtNC41IDMuNiA0LjMgMiA4LjcgMy4xIDEyLjkgMy4xIDkuNiAwIDE2LjctNS4zIDE5LjQtMTAuNiAyLjktNS44IDIuNy0xNS44LTQuOC0yNC4zeiIvPjxwYXRoIGQ9Ik0zMi40IDY3LjFjLjEgMyAyLjYgNS40IDUuNiA1LjRoLjJjMy4xLS4xIDUuNS0yLjcgNS40LTUuOC0uMS0zLTIuNi01LjQtNS42LTUuNGgtLjJjLS4yIDAtLjUgMC0uNy4xLTQuMS02LjgtNS44LTE0LjItNS4yLTIyLjIuNC02IDIuNC0xMS4yIDUuOS0xNS41IDIuOS0zLjcgOC41LTUuNSAxMi4zLTUuNiAxMC42LS4yIDE1LjEgMTMgMTUuNCAxOC4zIDEuMy4zIDMuNSAxIDUgMS41LTEuMi0xNi4yLTExLjItMjQuNi0yMC44LTI0LjYtOSAwLTE3LjMgNi41LTIwLjYgMTYuMS00LjYgMTIuOC0xLjYgMjUuMSA0IDM0LjgtLjUuNy0uOCAxLjgtLjcgMi45eiIvPjwvZz48L3N2Zz4="},2759:function(t,e){e.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjUzODM2NDYzMTM0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI1NTgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNDMwLjc5Nzg5IDEwMjRMMy45Nzc0NzQgODM3Ljg2NzQ0N2w0MjYuODIwNDE2LTE4Ni4xMzI1NTQgNDI2LjgxMjE0MiAxODYuMTMyNTU0eiIgZmlsbD0iI0ZBREJCQyIgcC1pZD0iMjU1OSI+PC9wYXRoPjxwYXRoIGQ9Ik00MzAuNzk3ODkgODYyLjY2NzE5NUwzLjk3NzQ3NCA2NzYuNTM0NjQxbDQyNi44MjA0MTYtMTg2LjEzMjU1MyA0MjYuODEyMTQyIDE4Ni4xMzI1NTN6IiBmaWxsPSIjRkZGRjcwIiBwLWlkPSIyNTYwIj48L3BhdGg+PHBhdGggZD0iTTQzMC43OTc4OSAxMDI0di0xNjEuMzMyODA1TDMuOTc3NDc0IDY3Ni41MzQ2NDF2MTYxLjMzMjgwNnoiIGZpbGw9IiMwMEEwQzYiIHAtaWQ9IjI1NjEiPjwvcGF0aD48cGF0aCBkPSJNODU3LjYxMDAzMiA2NzYuNTM0NjQxdjE2MS4zMzI4MDZsLTQyNi44MTIxNDIgMTg2LjEzMjU1M3YtMTYxLjMzMjgwNXoiIGZpbGw9IiM2MUUwRkYiIHAtaWQ9IjI1NjIiPjwvcGF0aD48cGF0aCBkPSJNNDMwLjc5Nzg5IDg2Mi45NTY3NjZMMy45Nzc0NzQgNjc2LjgyNDIxM2w0MjYuODIwNDE2LTE4Ni4xMzI1NTQgNDI2LjgxMjE0MiAxODYuMTMyNTU0eiIgZmlsbD0iI0ZBREJCQyIgcC1pZD0iMjU2MyI+PC9wYXRoPjxwYXRoIGQ9Ik00MzAuNzk3ODkgNzAxLjYyMzk2MUwzLjk3NzQ3NCA1MTUuNDkxNDA3bDQyNi44MjA0MTYtMTg2LjEzMjU1MyA0MjYuODEyMTQyIDE4Ni4xMzI1NTN6IiBmaWxsPSIjRkZGRjcwIiBwLWlkPSIyNTY0Ij48L3BhdGg+PHBhdGggZD0iTTQzMC43OTc4OSA4NjIuOTU2NzY2di0xNjEuMzMyODA1TDMuOTc3NDc0IDUxNS40OTE0MDd2MTYxLjMzMjgwNnoiIGZpbGw9IiNEMDEwQjEiIHAtaWQ9IjI1NjUiPjwvcGF0aD48cGF0aCBkPSJNODU3LjYxMDAzMiA1MTUuNDkxNDA3djE2MS4zMzI4MDZsLTQyNi44MTIxNDIgMTg2LjEzMjU1M3YtMTYxLjMzMjgwNXoiIGZpbGw9IiNGRjgwRUEiIHAtaWQ9IjI1NjYiPjwvcGF0aD48cGF0aCBkPSJNNDMwLjc5Nzg5IDcwMC42MjcwMDdMMy45Nzc0NzQgNTE0LjQ5NDQ1M2w0MjYuODIwNDE2LTE4Ni4xMzY2OSA0MjYuODEyMTQyIDE4Ni4xMzY2OXoiIGZpbGw9IiNGQURCQkMiIHAtaWQ9IjI1NjciPjwvcGF0aD48cGF0aCBkPSJNNDMwLjc5Nzg5IDUzOS4yOTQyMDFMMy45Nzc0NzQgMzUzLjE2MTY0OGw0MjYuODIwNDE2LTE4Ni4xMzY2OSA0MjYuODEyMTQyIDE4Ni4xMzY2OXoiIGZpbGw9IiNGRkZGNzAiIHAtaWQ9IjI1NjgiPjwvcGF0aD48cGF0aCBkPSJNNDMwLjc5Nzg5IDcwMC42MjcwMDd2LTE2MS4zMzI4MDZMMy45Nzc0NzQgMzUzLjE2MTY0OHYxNjEuMzMyODA1eiIgZmlsbD0iI0ZGMDA5OSIgcC1pZD0iMjU2OSI+PC9wYXRoPjxwYXRoIGQ9Ik04NTcuNjEwMDMyIDM1My4xNjE2NDh2MTYxLjMzMjgwNWwtNDI2LjgxMjE0MiAxODYuMTMyNTU0di0xNjEuMzMyODA2eiIgZmlsbD0iI0ZGN0FDQSIgcC1pZD0iMjU3MCI+PC9wYXRoPjxwYXRoIGQ9Ik00MzAuNzk3ODkgNTM5LjI5NDIwMUwzLjk3NzQ3NCAzNTMuMTYxNjQ4bDQyNi44MjA0MTYtMTg2LjEzNjY5IDQyNi44MTIxNDIgMTg2LjEzNjY5eiIgZmlsbD0iI0ZBREJCQyIgcC1pZD0iMjU3MSI+PC9wYXRoPjxwYXRoIGQ9Ik00MzAuNzk3ODkgMzc3Ljk2MTM5NkwzLjk3NzQ3NCAxOTEuODI4ODQyIDQzMC43OTc4OSA1LjY5MjE1Mmw0MjYuODEyMTQyIDE4Ni4xMzY2OXoiIGZpbGw9IiNGRkZGMDAiIHAtaWQ9IjI1NzIiPjwvcGF0aD48cGF0aCBkPSJNNDMwLjc5Nzg5IDUzOS4yOTQyMDF2LTE2MS4zMzI4MDVMMy45Nzc0NzQgMTkxLjgyODg0MnYxNjEuMzMyODA2eiIgZmlsbD0iI0ZGQkYwMCIgcC1pZD0iMjU3MyI+PC9wYXRoPjxwYXRoIGQ9Ik04NTcuNjEwMDMyIDE5MS44Mjg4NDJ2MTYxLjMzMjgwNmwtNDI2LjgxMjE0MiAxODYuMTMyNTUzdi0xNjEuMzMyODA1eiIgZmlsbD0iI0ZGRTYwMCIgcC1pZD0iMjU3NCI+PC9wYXRoPjxwYXRoIGQ9Ik0xMDIwLjAyMjUyNiAzMTMuNzYzMzQ5TDkzMi4zNTY3NjEgMGwtMjgxLjQ1OTU1NyAxNDcuNjUyNjExIDEyMC4xMzUwMjUgNTUuMzUzNjk5Yy0xOS44MTA4NDEgMzkuODQ5MjAzLTM3LjY3MzI3OCAxMDAuNzQxOTk1LTc5Ljg1MTQ2NSAxODIuNTQxODY0LTEyMS44MTQ1NDIgMjM2LjI0NTAwNS0xMzIuNDQ1OTYgNzQuNTMxNjE5LTM2MS40MjY4NTEgNTMuNzExNDE0LTI3My4wOTkyMDktMjQuODIwNDMyLTIwNy4yOTYxMDggNDY0Ljg4MjU0Ny0yMDcuNjk3MzcyIDQ1Mi4zNjQ3NzdsMTAzLjQ3NjM3OSA0Mi44NjA3NDhjLTEzLjYyMjI4LTE2Mi42MTkzMzEgMjcuNDM0ODUtNDAyLjI3NzE0NSAxNjUuMTY3NTYyLTM1Ni4xNzMxOTMgMTgyLjY4MjUxMyA2MS4xNTc1NDMgMjY1LjY0ODk0MyAxNjUuMjI1NDc2IDM2NS40Mzk0ODgtMjguMzExODM5IDYzLjY1NjEzNC0xMjMuNDY1MSAxMDguNjUxNDM5LTIyNC43MzI0NjEgMTM3LjA5OTc5MS0yOTMuMjk0NzY3bDEyNi43ODI3NjUgNTcuMDU4MDM1eiIgZmlsbD0iIzdGRkZFMSIgcC1pZD0iMjU3NSI+PC9wYXRoPjwvc3ZnPg=="}}]);