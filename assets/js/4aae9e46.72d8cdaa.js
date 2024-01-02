"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[4443],{2198:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var s=n(5893),i=n(1151);const a={title:"Stopping K3s",weight:4},r=void 0,l={id:"upgrades/killall",title:"Stopping K3s",description:"To allow high availability during upgrades, the K3s containers continue running when the K3s service is stopped.",source:"@site/docs/upgrades/killall.md",sourceDirName:"upgrades",slug:"/upgrades/killall",permalink:"/upgrades/killall",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/upgrades/killall.md",tags:[],version:"current",lastUpdatedAt:1704219286,formattedLastUpdatedAt:"Jan 2, 2024",frontMatter:{title:"Stopping K3s",weight:4},sidebar:"mySidebar",previous:{title:"Upgrades",permalink:"/upgrades/"},next:{title:"Manual Upgrades",permalink:"/upgrades/manual"}},o={},c=[];function d(e){const t={code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"To allow high availability during upgrades, the K3s containers continue running when the K3s service is stopped."}),"\n",(0,s.jsxs)(t.p,{children:["To stop all of the K3s containers and reset the containerd state, the ",(0,s.jsx)(t.code,{children:"k3s-killall.sh"})," script can be used."]}),"\n",(0,s.jsx)(t.p,{children:"The killall script cleans up containers, K3s directories, and networking components while also removing the iptables chain with all the associated rules. The cluster data will not be deleted."}),"\n",(0,s.jsx)(t.p,{children:"To run the killall script from a server node, run:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"/usr/local/bin/k3s-killall.sh\n"})})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>r});var s=n(7294);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);