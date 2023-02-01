"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[219],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a=n(4334),l="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(3117),a=n(7294),l=n(4334),i=n(2389),o=n(7392),s=n(7094),u=n(2466),p="tabList__CuJ",c="tabItem_LNqP";function m(e){var t,n,i=e.lazy,m=e.block,d=e.defaultValue,k=e.values,h=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=k?k:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,o.l)(b,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===d?d:null!=(t=null!=d?d:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==N&&!b.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,s.U)(),E=y.tabGroupChoices,K=y.setTabGroupChoices,O=(0,a.useState)(N),C=O[0],T=O[1],_=[],S=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var A=E[h];null!=A&&A!==C&&b.some((function(e){return e.value===A}))&&T(A)}var w=function(e){var t=e.currentTarget,n=_.indexOf(t),r=b[n].value;r!==C&&(S(t),T(r),null!=h&&K(h,String(r)))},D=function(e){var t,n=null;switch(e.key){case"Enter":w(e);break;case"ArrowRight":var r,a=_.indexOf(e.currentTarget)+1;n=null!=(r=_[a])?r:_[0];break;case"ArrowLeft":var l,i=_.indexOf(e.currentTarget)-1;n=null!=(l=_[i])?l:_[_.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},f)},b.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return _.push(e)},onKeyDown:D,onClick:w},i,{className:(0,l.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function d(e){var t=(0,i.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},4799:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var r=n(3117),a=n(102),l=(n(7294),n(3905)),i=n(5488),o=n(5162),s=["components"],u={title:"\u79bb\u7ebf\u5b89\u88c5",weight:60},p=void 0,c={unversionedId:"installation/airgap",id:"installation/airgap",title:"\u79bb\u7ebf\u5b89\u88c5",description:"\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e24\u79cd\u4e0d\u540c\u7684\u65b9\u6cd5\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u5b89\u88c5 K3s\u3002\u79bb\u7ebf\u73af\u5883\u6307\u7684\u662f\u4e0d\u76f4\u63a5\u8fde\u63a5\u5230 Internet \u7684\u73af\u5883\u3002\u4f60\u53ef\u4ee5\u90e8\u7f72\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u548c mirror docker.io\uff0c\u4e5f\u53ef\u4ee5\u624b\u52a8\u90e8\u7f72\u955c\u50cf\uff0c\u4f8b\u5982\u7528\u4e8e\u5c0f\u578b\u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/installation/airgap.md",sourceDirName:"installation",slug:"/installation/airgap",permalink:"/zh/installation/airgap",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/airgap.md",tags:[],version:"current",lastUpdatedAt:1675214459,formattedLastUpdatedAt:"2023\u5e742\u67081\u65e5",frontMatter:{title:"\u79bb\u7ebf\u5b89\u88c5",weight:60},sidebar:"mySidebar",previous:{title:"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u914d\u7f6e",permalink:"/zh/installation/private-registry"},next:{title:"\u7981\u7528\u7ec4\u4ef6\u6807\u5fd7",permalink:"/zh/installation/disable-flags"}},m={},d=[{value:"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93",id:"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93",level:2},{value:"\u521b\u5efa\u955c\u50cf\u4ed3\u5e93 YAML",id:"\u521b\u5efa\u955c\u50cf\u4ed3\u5e93-yaml",level:3},{value:"\u624b\u52a8\u90e8\u7f72\u955c\u50cf",id:"\u624b\u52a8\u90e8\u7f72\u955c\u50cf",level:2},{value:"\u51c6\u5907\u955c\u50cf\u76ee\u5f55\u548c K3s \u4e8c\u8fdb\u5236\u6587\u4ef6",id:"\u51c6\u5907\u955c\u50cf\u76ee\u5f55\u548c-k3s-\u4e8c\u8fdb\u5236\u6587\u4ef6",level:3},{value:"\u5b89\u88c5 K3s",id:"\u5b89\u88c5-k3s",level:2},{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:3},{value:"\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u5b89\u88c5 K3s",id:"\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u5b89\u88c5-k3s",level:3},{value:"\u5347\u7ea7",id:"\u5347\u7ea7",level:2},{value:"\u5b89\u88c5\u811a\u672c\u65b9\u6cd5",id:"\u5b89\u88c5\u811a\u672c\u65b9\u6cd5",level:3},{value:"\u81ea\u52a8\u5347\u7ea7",id:"\u81ea\u52a8\u5347\u7ea7",level:3}],k={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e24\u79cd\u4e0d\u540c\u7684\u65b9\u6cd5\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u5b89\u88c5 K3s\u3002\u79bb\u7ebf\u73af\u5883\u6307\u7684\u662f\u4e0d\u76f4\u63a5\u8fde\u63a5\u5230 Internet \u7684\u73af\u5883\u3002\u4f60\u53ef\u4ee5\u90e8\u7f72\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u548c mirror docker.io\uff0c\u4e5f\u53ef\u4ee5\u624b\u52a8\u90e8\u7f72\u955c\u50cf\uff0c\u4f8b\u5982\u7528\u4e8e\u5c0f\u578b\u96c6\u7fa4\u3002"),(0,l.kt)("h2",{id:"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93"},"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93"),(0,l.kt)("p",null,"\u672c\u6587\u6863\u5047\u8bbe\u4f60\u5df2\u7ecf\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u521b\u5efa\u4e86\u8282\u70b9\uff0c\u5e76\u4e14\u5728\u5821\u5792\u4e3b\u673a\u4e0a\u62e5\u6709 Docker \u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u5c1a\u672a\u8bbe\u7f6e\u79c1\u6709 Docker \u955c\u50cf\u4ed3\u5e93\uff0c\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"https://docs.docker.com/registry/deploying/#run-an-externally-accessible-registry"},"\u5b98\u65b9\u6587\u6863"),"\u3002"),(0,l.kt)("h3",{id:"\u521b\u5efa\u955c\u50cf\u4ed3\u5e93-yaml"},"\u521b\u5efa\u955c\u50cf\u4ed3\u5e93 YAML"),(0,l.kt)("p",null,"\u6309\u7167",(0,l.kt)("a",{parentName:"p",href:"/zh/installation/private-registry"},"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u914d\u7f6e"),"\u6307\u5357\u521b\u5efa\u548c\u914d\u7f6e registry.yaml \u6587\u4ef6\u3002"),(0,l.kt)("p",null,"\u5b8c\u6210\u6b64\u64cd\u4f5c\u540e\uff0c\u4f60\u73b0\u5728\u53ef\u4ee5\u8f6c\u5230\u4e0b\u9762\u7684",(0,l.kt)("a",{parentName:"p",href:"#%E5%AE%89%E8%A3%85-k3s"},"\u5b89\u88c5 K3s")," \u90e8\u5206\u3002"),(0,l.kt)("h2",{id:"\u624b\u52a8\u90e8\u7f72\u955c\u50cf"},"\u624b\u52a8\u90e8\u7f72\u955c\u50cf"),(0,l.kt)("p",null,"\u6211\u4eec\u5047\u8bbe\u4f60\u5df2\u7ecf\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u521b\u5efa\u4e86\u8282\u70b9\u3002\n\u6b64\u65b9\u6cd5\u9700\u8981\u4f60\u624b\u52a8\u5c06\u5fc5\u8981\u7684\u955c\u50cf\u90e8\u7f72\u5230\u6bcf\u4e2a\u8282\u70b9\uff0c\u9002\u7528\u4e8e\u65e0\u6cd5\u8fd0\u884c\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u7684\u8fb9\u7f18\u90e8\u7f72\u3002"),(0,l.kt)("h3",{id:"\u51c6\u5907\u955c\u50cf\u76ee\u5f55\u548c-k3s-\u4e8c\u8fdb\u5236\u6587\u4ef6"},"\u51c6\u5907\u955c\u50cf\u76ee\u5f55\u548c K3s \u4e8c\u8fdb\u5236\u6587\u4ef6"),(0,l.kt)("p",null,"\u4ece ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rancher/k3s/releases"},"Releases")," \u9875\u9762\u83b7\u53d6\u8981\u8fd0\u884c\u7684 K3s \u7248\u672c\u7684\u955c\u50cf tar \u6587\u4ef6\u3002"),(0,l.kt)("p",null,"\u5c06 tar \u6587\u4ef6\u653e\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"images")," \u76ee\u5f55\u4e0b\uff0c\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir -p /var/lib/rancher/k3s/agent/images/\nsudo cp ./k3s-airgap-images-$ARCH.tar /var/lib/rancher/k3s/agent/images/\n")),(0,l.kt)("p",null,"\u5c06 K3s \u4e8c\u8fdb\u5236\u6587\u4ef6\u653e\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/k3s")," \u4e2d\uff0c\u5e76\u786e\u4fdd\u6587\u4ef6\u662f\u53ef\u6267\u884c\u7684\u3002"),(0,l.kt)("p",null,"\u6309\u7167\u4e0b\u4e00\u8282\u4e2d\u7684\u6b65\u9aa4\u5b89\u88c5 K3s\u3002"),(0,l.kt)("h2",{id:"\u5b89\u88c5-k3s"},"\u5b89\u88c5 K3s"),(0,l.kt)("h3",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u5b89\u88c5 K3s \u4e4b\u524d\uff0c\u5b8c\u6210\u4e0a\u9762\u7684",(0,l.kt)("a",{parentName:"li",href:"#%E7%A7%81%E6%9C%89%E9%95%9C%E5%83%8F%E4%BB%93%E5%BA%93"},"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93"),"\u6216",(0,l.kt)("a",{parentName:"li",href:"#%E6%89%8B%E5%8A%A8%E9%83%A8%E7%BD%B2%E9%95%9C%E5%83%8F"},"\u624b\u52a8\u90e8\u7f72\u955c\u50cf"),"\u64cd\u4f5c\uff0c\u9884\u586b\u5145 K3s \u9700\u8981\u5b89\u88c5\u7684\u955c\u50cf\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4ece ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/rancher/k3s/releases"},"Releases")," \u9875\u9762\u4e0b\u8f7d K3s \u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u8be5\u6587\u4ef6\u9700\u8981\u5339\u914d\u7528\u4e8e\u83b7\u53d6\u79bb\u7ebf\u955c\u50cf\u7684\u7248\u672c\u3002\u5c06\u4e8c\u8fdb\u5236\u6587\u4ef6\u653e\u5728\u6bcf\u4e2a\u79bb\u7ebf\u8282\u70b9\u4e0a\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"/usr/local/bin")," \u4e2d\uff0c\u5e76\u786e\u4fdd\u6587\u4ef6\u662f\u53ef\u6267\u884c\u7684\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5728 ",(0,l.kt)("a",{parentName:"li",href:"https://get.k3s.io"},"https://get.k3s.io")," \u4e0b\u8f7d K3s \u5b89\u88c5\u811a\u672c\u3002\u5c06\u5b89\u88c5\u811a\u672c\u653e\u5728\u6bcf\u4e2a\u79bb\u7ebf\u8282\u70b9\u4e0a\u7684\u4efb\u4f55\u4f4d\u7f6e\uff0c\u5e76\u5c06\u5176\u547d\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"install.sh"),"\u3002")),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"INSTALL_K3S_SKIP_DOWNLOAD")," \u73af\u5883\u53d8\u91cf\u8fd0\u884c K3s \u811a\u672c\u65f6\uff0cK3s \u5c06\u4f7f\u7528\u811a\u672c\u7684\u672c\u5730\u7248\u672c\u548c\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002"),(0,l.kt)("h3",{id:"\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u5b89\u88c5-k3s"},"\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u5b89\u88c5 K3s"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u4e00\u53f0\u6216\u591a\u53f0\u670d\u52a1\u5668\u4e0a\u5b89\u88c5 K3s\uff0c\u5982\u4e0b\u6240\u8ff0\u3002"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"\u5355\u8282\u70b9\u914d\u7f6e",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"\u8981\u5728\u5355\u4e2a\u670d\u52a1\u5668\u4e0a\u5b89\u88c5 K3s\uff0c\u53ea\u9700\u5728 Server \u8282\u70b9\u4e0a\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"INSTALL_K3S_SKIP_DOWNLOAD=true ./install.sh\n")),(0,l.kt)("p",null,"\u7136\u540e\uff0c\u5982\u679c\u8981\u6dfb\u52a0\u5176\u4ed6 Agent\uff0c\u8bf7\u5728\u6bcf\u4e2a Agent \u8282\u70b9\u4e0a\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\u3002\u8bf7\u786e\u4fdd\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"myserver")," \u66ff\u6362\u4e3a\u670d\u52a1\u5668\u7684 IP \u6216\u6709\u6548 DNS\uff0c\u5e76\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"mynodetoken")," \u66ff\u6362\u4e3a\u670d\u52a1\u5668\u7684\u8282\u70b9\u4ee4\u724c\uff08\u901a\u5e38\u4f4d\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"/var/lib/ rancher/k3s/server/node-token"),"\uff09\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"INSTALL_K3S_SKIP_DOWNLOAD=true K3S_URL=https://myserver:6443 K3S_TOKEN=mynodetoken ./install.sh\n"))),(0,l.kt)(o.Z,{value:"\u9ad8\u53ef\u7528\u914d\u7f6e",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"/zh/installation/ha"},"\u5177\u6709\u5916\u90e8\u6570\u636e\u5e93\u7684\u9ad8\u53ef\u7528"),"\u6216",(0,l.kt)("a",{parentName:"p",href:"/zh/installation/ha-embedded"},"\u5177\u6709\u5d4c\u5165\u5f0f\u6570\u636e\u5e93\u7684\u9ad8\u53ef\u7528"),"\u6307\u5357\u3002\u4f60\u9700\u8981\u8c03\u6574\u5b89\u88c5\u547d\u4ee4\u6765\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"INSTALL_K3S_SKIP_DOWNLOAD=true"),"\uff0c\u5e76\u5728\u672c\u5730\u8fd0\u884c\u5b89\u88c5\u811a\u672c\uff0c\u800c\u4e0d\u662f\u4f7f\u7528 curl\u3002\u4f60\u8fd8\u5c06\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"INSTALL_K3S_EXEC='args'")," \u4e3a K3s \u63d0\u4f9b\u53c2\u6570\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u5177\u6709\u5916\u90e8\u6570\u636e\u5e93\u7684\u9ad8\u53ef\u7528\u6307\u5357\u7684\u7b2c\u4e8c\u6b65\u63d0\u5230\u4e86\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sfL https://get.k3s.io | sh -s - server \\\n  --datastore-endpoint='mysql://username:password@tcp(hostname:3306)/database-name'\n")),(0,l.kt)("p",null,"\u4f60\u9700\u8981\u4fee\u6539\u6b64\u7c7b\u793a\u4f8b\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"INSTALL_K3S_SKIP_DOWNLOAD=true INSTALL_K3S_EXEC='server' K3S_DATASTORE_ENDPOINT='mysql://username:password@tcp(hostname:3306)/database-name' ./install.sh\n")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1aK3s \u8fd8\u4e3a kubelet \u63d0\u4f9b\u4e86\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"--resolv-conf")," \u6807\u5fd7\uff0c\u8fd9\u53ef\u80fd\u6709\u52a9\u4e8e\u5728\u79bb\u7ebf\u7f51\u7edc\u4e2d\u914d\u7f6e DNS\u3002")),(0,l.kt)("h2",{id:"\u5347\u7ea7"},"\u5347\u7ea7"),(0,l.kt)("h3",{id:"\u5b89\u88c5\u811a\u672c\u65b9\u6cd5"},"\u5b89\u88c5\u811a\u672c\u65b9\u6cd5"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u5b8c\u6210\u79bb\u7ebf\u73af\u5883\u7684\u5347\u7ea7\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4ece ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/rancher/k3s/releases"},"Releases")," \u9875\u9762\u4e0b\u8f7d\u8981\u5347\u7ea7\u7684 K3s \u7248\u672c\u7684\u65b0\u79bb\u7ebf\u955c\u50cf tar \u5305\u3002\u5c06 tar \u6587\u4ef6\u653e\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"/var/lib/rancher/k3s/agent/images/")," \u76ee\u5f55\u4e2d\u3002\u5220\u9664\u65e7\u7684 tar \u6587\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u590d\u5236\u5e76\u66ff\u6362\u6bcf\u4e2a\u8282\u70b9\u4e0a ",(0,l.kt)("inlineCode",{parentName:"li"},"/usr/local/bin")," \u4e2d\u7684\u65e7 K3s \u4e8c\u8fdb\u5236\u6587\u4ef6\u3002\u590d\u5236 ",(0,l.kt)("a",{parentName:"li",href:"https://get.k3s.io"},"K3s \u5b89\u88c5\u811a\u672c"),"\uff08\u56e0\u4e3a\u811a\u672c\u53ef\u80fd\u81ea\u4e0a\u6b21\u7248\u672c\u53d1\u5e03\u4ee5\u6765\u5df2\u66f4\u6539\uff09\u3002\u4f7f\u7528\u76f8\u540c\u7684\u73af\u5883\u53d8\u91cf\u518d\u6b21\u8fd0\u884c\u811a\u672c\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u91cd\u542f K3s \u670d\u52a1\uff08\u5982\u679c\u5b89\u88c5\u7a0b\u5e8f\u6ca1\u6709\u81ea\u52a8\u91cd\u542f K3s \u7684\u8bdd\uff09\u3002")),(0,l.kt)("h3",{id:"\u81ea\u52a8\u5347\u7ea7"},"\u81ea\u52a8\u5347\u7ea7"),(0,l.kt)("p",null,"\u4ece v1.17.4+k3s1 \u5f00\u59cb\uff0cK3s \u652f\u6301",(0,l.kt)("a",{parentName:"p",href:"/zh/upgrades/automated"},"\u81ea\u52a8\u5347\u7ea7"),"\u3002\u8981\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u542f\u7528\u6b64\u529f\u80fd\uff0c\u4f60\u5fc5\u987b\u786e\u4fdd\u6240\u9700\u7684\u955c\u50cf\u5728\u4f60\u7684\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u4e2d\u53ef\u7528\u3002"),(0,l.kt)("p",null,"\u4f60\u5c06\u9700\u8981\u4e0e\u4f60\u6253\u7b97\u5347\u7ea7\u5230\u7684 K3s \u7248\u672c\u76f8\u5bf9\u5e94\u7684 rancher/k3s-upgrade \u7248\u672c\u3002\u6ce8\u610f\uff0c\u955c\u50cf\u6807\u7b7e\u5c06 K3s \u7248\u672c\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"+")," \u66ff\u6362\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"-"),"\uff0c\u56e0\u4e3a Docker \u955c\u50cf\u4e0d\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"p"},"+"),"\u3002"),(0,l.kt)("p",null,"\u4f60\u8fd8\u9700\u8981\u5728\u4f60\u8981\u90e8\u7f72\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"system-upgrade-controller")," \u6e05\u5355 YAML \u4e2d\u6307\u5b9a\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"system-upgrade-controller")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," \u7248\u672c\u3002\u5728",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rancher/system-upgrade-controller/releases/latest"},"\u8fd9\u91cc"),"\u68c0\u67e5 ",(0,l.kt)("inlineCode",{parentName:"p"},"system-upgrad-controller")," \u7684\u6700\u65b0\u7248\u672c\uff0c\u5e76\u4e0b\u8f7d ",(0,l.kt)("inlineCode",{parentName:"p"},"system-upgrade-controller.yaml")," \u6765\u786e\u5b9a\u4f60\u9700\u8981\u63a8\u9001\u5230\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u7684\u7248\u672c\u3002\u4f8b\u5982\uff0c\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"system-upgrade-controller")," \u7684 v0.4.0 \u7248\u672c\u4e2d\uff0c\u6e05\u5355 YAML \u4e2d\u6307\u5b9a\u4e86\u8fd9\u4e9b\u955c\u50cf\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rancher/system-upgrade-controller:v0.4.0\nrancher/kubectl:v0.17.0\n")),(0,l.kt)("p",null,"\u5c06\u5fc5\u8981\u7684 rancher/k3s-upgrade\u3001rancher/system-upgrade-controller \u548c rancher/kubectl \u955c\u50cf\u6dfb\u52a0\u5230\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u540e\uff0c\u8bf7\u6309\u7167",(0,l.kt)("a",{parentName:"p",href:"/zh/upgrades/automated"},"\u81ea\u52a8\u5347\u7ea7"),"\u6307\u5357\u8fdb\u884c\u64cd\u4f5c\u3002"))}h.isMDXComponent=!0}}]);