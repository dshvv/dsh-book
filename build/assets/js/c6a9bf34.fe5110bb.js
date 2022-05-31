"use strict";(self.webpackChunkdsh_book=self.webpackChunkdsh_book||[]).push([[55],{2227:function(e,t,r){r.r(t),r.d(t,{assets:function(){return C},contentTitle:function(){return g},default:function(){return w},frontMatter:function(){return T},metadata:function(){return y},toc:function(){return N}});var n=r(7462),a=r(3366),o=r(7294),l=r(3905),u=r(2389),s=r(7392),i=r(7094),c=r(2466),d=r(6010),p="tabList_uSqn",m="tabItem_LplD";function f(e){var t,r,a,l=e.lazy,u=e.block,f=e.defaultValue,v=e.values,b=e.groupId,k=e.className,x=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=v?v:x.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),T=(0,s.l)(h,(function(e,t){return e.value===t.value}));if(T.length>0)throw new Error('Docusaurus error: Duplicate values "'+T.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===f?f:null!=(t=null!=f?f:null==(r=x.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(a=x[0])?void 0:a.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.U)(),C=y.tabGroupChoices,N=y.setTabGroupChoices,Z=(0,o.useState)(g),w=Z[0],E=Z[1],j=[],D=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var I=C[b];null!=I&&I!==w&&h.some((function(e){return e.value===I}))&&E(I)}var A=function(e){var t=e.currentTarget,r=j.indexOf(t),n=h[r].value;n!==w&&(D(t),E(n),null!=b&&N(b,n))},_=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=j.indexOf(e.currentTarget)+1;r=j[n]||j[0];break;case"ArrowLeft":var a=j.indexOf(e.currentTarget)-1;r=j[a]||j[j.length-1]}null==(t=r)||t.focus()};return o.createElement("div",{className:(0,d.Z)("tabs-container",p)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":u},k)},h.map((function(e){var t=e.value,r=e.label,a=e.attributes;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return j.push(e)},onKeyDown:_,onFocus:A,onClick:A},a,{className:(0,d.Z)("tabs__item",m,null==a?void 0:a.className,{"tabs__item--active":w===t})}),null!=r?r:t)}))),l?(0,o.cloneElement)(x.filter((function(e){return e.props.value===w}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},x.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function v(e){var t=(0,u.Z)();return o.createElement(f,(0,n.Z)({key:String(t)},e))}var b="tabItem_OmH5";function k(e){var t=e.children,r=e.hidden,n=e.className;return o.createElement("div",{role:"tabpanel",className:(0,d.Z)(b,n),hidden:r},t)}var x=r(2258),h=["components"],T={hide_title:!0},g=void 0,y={unversionedId:"4\u3001\u7ed3\u5408react-redux",id:"4\u3001\u7ed3\u5408react-redux",title:"4\u3001\u7ed3\u5408react-redux",description:"",source:"@site/docs\\redux\\4\u3001\u7ed3\u5408react-redux.mdx",sourceDirName:".",slug:"/4\u3001\u7ed3\u5408react-redux",permalink:"/dsh-book/build/redux/4\u3001\u7ed3\u5408react-redux",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"3\u3001\u7ed3\u5408redux-toolkit",permalink:"/dsh-book/build/redux/3\u3001\u7ed3\u5408redux-toolkit"}},C={},N=[{value:"\u6ce8\u5165\u5230 React",id:"\u6ce8\u5165\u5230-react",level:2},{value:"\u4f7f\u7528\u72b6\u6001",id:"\u4f7f\u7528\u72b6\u6001",level:2},{value:"\u66f4\u65b0\u72b6\u6001",id:"\u66f4\u65b0\u72b6\u6001",level:2}],Z={toc:N};function w(e){var t=e.components,o=(0,a.Z)(e,h);return(0,l.kt)("wrapper",(0,n.Z)({},Z,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"4.1",src:r(9692).Z,width:"1000",height:"420"}),(0,l.kt)("br",{parentName:"p"}),"\n","\ud83d\udc49",(0,l.kt)("a",{parentName:"p",href:"https://react-redux.js.org"},"react-redux \u5b98\u65b9\u6587\u6863")," \ud83d\udc48"),(0,l.kt)("p",null,"\u56e0\u4e3a redux \u548c react \u7ec4\u4ef6\u7684\u7ec4\u5408\u4f7f\u7528\u8026\u5408\u5ea6\u592a\u9ad8\uff0c\u4e3a\u4e86\u89e3\u8026redux\u5b98\u65b9\u989d\u5916\u8bbe\u8ba1\u4e86react-redux \uff0c\u6709\u4e86\u5b83\u6211\u4eec\u4fbf\u4e0d\u518d\u9700\u8981\u4f7f\u7528 store \u7684 subscribe \u81ea\u5df1\u53bb\u8ba2\u9605\u72b6\u6001\u4e86\u3002"),(0,l.kt)("p",null,"\u901a\u8fc7 react-redux \u5e2e\u6211\u4eec\u628aredux\u548creact\u76f8\u8fde\u63a5\uff0creact\u9879\u76ee\u4e2d\u4f7f\u7528redux\u5c06\u7075\u6d3b\u800c\u9ad8\u6548\u3002"),(0,l.kt)("h2",{id:"\u6ce8\u5165\u5230-react"},"\u6ce8\u5165\u5230 React"),(0,l.kt)("p",null,"\u6ce8\u5165 the redux store \u5230 react"),(0,l.kt)(x.Z,{language:"jsx",title:"src/index.jsx",mdxType:"CodeBlock"},"import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport App from './App';\nimport { Provider } from 'react-redux'\nimport store from './store'\n\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<Provider store={store}> <App /> </Provider>);\n"),(0,l.kt)("h2",{id:"\u4f7f\u7528\u72b6\u6001"},"\u4f7f\u7528\u72b6\u6001"),(0,l.kt)("p",null,"\u8fd9\u91cc\u5206\u522b\u793a\u4f8b\u4e24\u79cd\u5199\u6cd5\uff0c\u65b0\u7248\u7684 hooks \u7528\u6cd5\uff0c\u548c\u8001\u5f0f\u7684 connect \u7528\u6cd5\u3002"),(0,l.kt)(v,{mdxType:"Tabs"},(0,l.kt)(k,{value:"\u65b0\u7248\u7528\u6cd5",label:"\u65b0\u7248\u7528\u6cd5",default:!0,mdxType:"TabItem"},(0,l.kt)(x.Z,{language:"jsx",title:"src/App.jsx",mdxType:"CodeBlock"},"import Tips from './compnents/TipsUseHooks'\nimport { useSelector } from 'react-redux'\n\nexport default () => {\n  const msg = useSelector((state) => state.msg)\n  return (\n    <div className=\"App\">\n      <Tips />\n      <div>{msg}</div>\n    </div>\n  );\n}")),(0,l.kt)(k,{value:"\u4f20\u7edf\u7528\u6cd5",label:"\u4f20\u7edf\u7528\u6cd5",mdxType:"TabItem"},(0,l.kt)(x.Z,{language:"jsx",title:"src/App.jsx",mdxType:"CodeBlock"},'import Tips from \'./compnents/Tips\'\nimport { connect } from "react-redux";\n\nconst App = (props) => {\n  return (\n    <div className="App">\n      <Tips />\n      <div>{props.msg}</div>\n    </div>\n  );\n}\n\nconst mapStateToProps = state => {\n  return {\n    msg: state.msg\n  }\n}\nexport default connect(mapStateToProps)(App);'))),(0,l.kt)("h2",{id:"\u66f4\u65b0\u72b6\u6001"},"\u66f4\u65b0\u72b6\u6001"),(0,l.kt)("p",null,"\u540c\u6837\u7684\uff0c\u8fd9\u91cc\u4e5f\u5206\u522b\u793a\u4f8b\u4e24\u79cd\u5199\u6cd5\uff0c\u65b0\u7248\u7684 hooks \u7528\u6cd5\uff0c\u548c\u8001\u5f0f\u7684 connect \u7528\u6cd5\u3002"),(0,l.kt)(v,{mdxType:"Tabs"},(0,l.kt)(k,{value:"\u65b0\u7248\u7528\u6cd5",label:"\u65b0\u7248\u7528\u6cd5",default:!0,mdxType:"TabItem"},(0,l.kt)(x.Z,{language:"jsx",title:"src/components/Tips.jsx",mdxType:"CodeBlock"},"import { useDispatch } from 'react-redux'\r\n\r\nexport default () => {\r\n    const dispatch = useDispatch();\r\n    const btnClick = () => {\r\n        dispatch(setMsg('\u674e\u56db'));\r\n    }\r\n    return (\r\n        <button className=\"Tips\" onClick={btnClick}>\r\n            \u5b50\u7ec4\u4ef6\u6309\u94ae\r\n        </button>\r\n    );\r\n}\r\n")),(0,l.kt)(k,{value:"\u4f20\u7edf\u7528\u6cd5",label:"\u4f20\u7edf\u7528\u6cd5",mdxType:"TabItem"},(0,l.kt)(x.Z,{language:"jsx",title:"src/components/Tips.jsx",mdxType:"CodeBlock"},"import { connect } from \"react-redux\";\r\nimport { setMsg } from '../store/action-creator'\r\n\r\nconst Tips = (props) => {\r\n    const btnClick = () => {\r\n        props.dispatch(setMsg('\u674e\u56db'));\r\n    }\r\n    return (\r\n        <button className=\"Tips\" onClick={btnClick}>\r\n            \u5b50\u7ec4\u4ef6\u6309\u94ae\r\n        </button>\r\n    );\r\n}\r\n\r\nexport default connect()(Tips);"))))}w.isMDXComponent=!0},9692:function(e,t,r){t.Z=r.p+"assets/images/4.1-f40e7758eace702c2d93d778dd55875f.jpg"}}]);