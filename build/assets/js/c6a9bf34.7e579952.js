"use strict";(self.webpackChunkdsh_book=self.webpackChunkdsh_book||[]).push([[55],{5162:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(7294),a=r(6010),o="tabItem_Ymn6";function u(e){var t=e.children,r=e.hidden,u=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,u),hidden:r},t)}},5488:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(7462),a=r(7294),o=r(6010),u=r(2389),l=r(7392),s=r(7094),i=r(2466),c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,r,u=e.lazy,p=e.block,m=e.defaultValue,f=e.values,v=e.groupId,b=e.className,k=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),x=null!=f?f:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,l.l)(x,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var T=null===m?m:null!=(t=null!=m?m:null==(r=k.find((function(e){return e.props.default})))?void 0:r.props.value)?t:k[0].props.value;if(null!==T&&!x.some((function(e){return e.value===T})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+T+'" but none of its children has the corresponding value. Available values are: '+x.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,s.U)(),y=g.tabGroupChoices,Z=g.setTabGroupChoices,C=(0,a.useState)(T),N=C[0],w=C[1],E=[],j=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var I=y[v];null!=I&&I!==N&&x.some((function(e){return e.value===I}))&&w(I)}var A=function(e){var t=e.currentTarget,r=E.indexOf(t),n=x[r].value;n!==N&&(j(t),w(n),null!=v&&Z(v,String(n)))},D=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n,a=E.indexOf(e.currentTarget)+1;r=null!=(n=E[a])?n:E[0];break;case"ArrowLeft":var o,u=E.indexOf(e.currentTarget)-1;r=null!=(o=E[u])?o:E[E.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},b)},x.map((function(e){var t=e.value,r=e.label,u=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return E.push(e)},onKeyDown:D,onFocus:A,onClick:A},u,{className:(0,o.Z)("tabs__item",d,null==u?void 0:u.className,{"tabs__item--active":N===t})}),null!=r?r:t)}))),u?(0,a.cloneElement)(k.filter((function(e){return e.props.value===N}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function m(e){var t=(0,u.Z)();return a.createElement(p,(0,n.Z)({key:String(t)},e))}},5006:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return f}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),u=r(5488),l=r(5162),s=r(6852),i=["components"],c={hide_title:!0},d=void 0,p={unversionedId:"4\u3001\u7ed3\u5408react-redux",id:"4\u3001\u7ed3\u5408react-redux",title:"4\u3001\u7ed3\u5408react-redux",description:"",source:"@site/docs\\redux\\4\u3001\u7ed3\u5408react-redux.mdx",sourceDirName:".",slug:"/4\u3001\u7ed3\u5408react-redux",permalink:"/dsh-book/build/redux/4\u3001\u7ed3\u5408react-redux",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"3\u3001\u7ed3\u5408redux-toolkit",permalink:"/dsh-book/build/redux/3\u3001\u7ed3\u5408redux-toolkit"}},m={},f=[{value:"\u6ce8\u5165\u5230 React",id:"\u6ce8\u5165\u5230-react",level:2},{value:"\u4f7f\u7528\u72b6\u6001",id:"\u4f7f\u7528\u72b6\u6001",level:2},{value:"\u66f4\u65b0\u72b6\u6001",id:"\u66f4\u65b0\u72b6\u6001",level:2}],v={toc:f};function b(e){var t=e.components,c=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},v,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"4.1",src:r(9692).Z,width:"1000",height:"420"}),(0,o.kt)("br",{parentName:"p"}),"\n","\ud83d\udc49",(0,o.kt)("a",{parentName:"p",href:"https://react-redux.js.org"},"react-redux \u5b98\u65b9\u6587\u6863")," \ud83d\udc48"),(0,o.kt)("p",null,"\u56e0\u4e3a redux \u548c react \u7ec4\u4ef6\u7684\u7ec4\u5408\u4f7f\u7528\u8026\u5408\u5ea6\u592a\u9ad8\uff0c\u4e3a\u4e86\u89e3\u8026redux\u5b98\u65b9\u989d\u5916\u8bbe\u8ba1\u4e86react-redux \uff0c\u6709\u4e86\u5b83\u6211\u4eec\u4fbf\u4e0d\u518d\u9700\u8981\u4f7f\u7528 store \u7684 subscribe \u81ea\u5df1\u53bb\u8ba2\u9605\u72b6\u6001\u4e86\u3002"),(0,o.kt)("p",null,"\u901a\u8fc7 react-redux \u5e2e\u6211\u4eec\u628aredux\u548creact\u76f8\u8fde\u63a5\uff0creact\u9879\u76ee\u4e2d\u4f7f\u7528redux\u5c06\u7075\u6d3b\u800c\u9ad8\u6548\u3002"),(0,o.kt)("h2",{id:"\u6ce8\u5165\u5230-react"},"\u6ce8\u5165\u5230 React"),(0,o.kt)("p",null,"\u6ce8\u5165 the redux store \u5230 react"),(0,o.kt)(s.Z,{language:"jsx",title:"src/index.jsx",mdxType:"CodeBlock"},"import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport App from './App';\nimport { Provider } from 'react-redux'\nimport store from './store'\n\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<Provider store={store}> <App /> </Provider>);\n"),(0,o.kt)("h2",{id:"\u4f7f\u7528\u72b6\u6001"},"\u4f7f\u7528\u72b6\u6001"),(0,o.kt)("p",null,"\u8fd9\u91cc\u5206\u522b\u793a\u4f8b\u4e24\u79cd\u5199\u6cd5\uff0c\u65b0\u7248\u7684 hooks \u7528\u6cd5\uff0c\u548c\u8001\u5f0f\u7684 connect \u7528\u6cd5\u3002"),(0,o.kt)(u.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"\u65b0\u7248\u7528\u6cd5",label:"\u65b0\u7248\u7528\u6cd5",default:!0,mdxType:"TabItem"},(0,o.kt)(s.Z,{language:"jsx",title:"src/App.jsx",mdxType:"CodeBlock"},"import Tips from './compnents/TipsUseHooks'\nimport { useSelector } from 'react-redux'\n\nexport default () => {\n  const msg = useSelector((state) => state.msg)\n  return (\n    <div className=\"App\">\n      <Tips />\n      <div>{msg}</div>\n    </div>\n  );\n}")),(0,o.kt)(l.Z,{value:"\u4f20\u7edf\u7528\u6cd5",label:"\u4f20\u7edf\u7528\u6cd5",mdxType:"TabItem"},(0,o.kt)(s.Z,{language:"jsx",title:"src/App.jsx",mdxType:"CodeBlock"},'import Tips from \'./compnents/Tips\'\nimport { connect } from "react-redux";\n\nconst App = (props) => {\n  return (\n    <div className="App">\n      <Tips />\n      <div>{props.msg}</div>\n    </div>\n  );\n}\n\nconst mapStateToProps = state => {\n  return {\n    msg: state.msg\n  }\n}\nexport default connect(mapStateToProps)(App);'))),(0,o.kt)("h2",{id:"\u66f4\u65b0\u72b6\u6001"},"\u66f4\u65b0\u72b6\u6001"),(0,o.kt)("p",null,"\u540c\u6837\u7684\uff0c\u8fd9\u91cc\u4e5f\u5206\u522b\u793a\u4f8b\u4e24\u79cd\u5199\u6cd5\uff0c\u65b0\u7248\u7684 hooks \u7528\u6cd5\uff0c\u548c\u8001\u5f0f\u7684 connect \u7528\u6cd5\u3002"),(0,o.kt)(u.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"\u65b0\u7248\u7528\u6cd5",label:"\u65b0\u7248\u7528\u6cd5",default:!0,mdxType:"TabItem"},(0,o.kt)(s.Z,{language:"jsx",title:"src/components/Tips.jsx",mdxType:"CodeBlock"},"import { useDispatch } from 'react-redux'\r\n\r\nexport default () => {\r\n    const dispatch = useDispatch();\r\n    const btnClick = () => {\r\n        dispatch(setMsg('\u674e\u56db'));\r\n    }\r\n    return (\r\n        <button className=\"Tips\" onClick={btnClick}>\r\n            \u5b50\u7ec4\u4ef6\u6309\u94ae\r\n        </button>\r\n    );\r\n}\r\n")),(0,o.kt)(l.Z,{value:"\u4f20\u7edf\u7528\u6cd5",label:"\u4f20\u7edf\u7528\u6cd5",mdxType:"TabItem"},(0,o.kt)(s.Z,{language:"jsx",title:"src/components/Tips.jsx",mdxType:"CodeBlock"},"import { connect } from \"react-redux\";\r\nimport { setMsg } from '../store/action-creator'\r\n\r\nconst Tips = (props) => {\r\n    const btnClick = () => {\r\n        props.dispatch(setMsg('\u674e\u56db'));\r\n    }\r\n    return (\r\n        <button className=\"Tips\" onClick={btnClick}>\r\n            \u5b50\u7ec4\u4ef6\u6309\u94ae\r\n        </button>\r\n    );\r\n}\r\n\r\nexport default connect()(Tips);"))))}b.isMDXComponent=!0},9692:function(e,t,r){t.Z=r.p+"assets/images/4.1-f40e7758eace702c2d93d778dd55875f.jpg"}}]);