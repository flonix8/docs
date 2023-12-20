"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[6842],{246:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var r=n(5893),t=n(1151);const d={title:"\u9ad8\u53ef\u7528\u5d4c\u5165\u5f0f etcd",weight:40},c=void 0,i={id:"datastore/ha-embedded",title:"\u9ad8\u53ef\u7528\u5d4c\u5165\u5f0f etcd",description:"\u5d4c\u5165\u5f0f etcd (HA) \u5728\u901f\u5ea6\u8f83\u6162\u7684\u78c1\u76d8\uff08\u4f8b\u5982\u4f7f\u7528 SD \u5361\u8fd0\u884c\u7684 Raspberry Pi\uff09\u4e0a\u53ef\u80fd\u4f1a\u51fa\u73b0\u6027\u80fd\u95ee\u9898\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/datastore/ha-embedded.md",sourceDirName:"datastore",slug:"/datastore/ha-embedded",permalink:"/zh/datastore/ha-embedded",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/datastore/ha-embedded.md",tags:[],version:"current",lastUpdatedAt:1703094153,formattedLastUpdatedAt:"2023\u5e7412\u670820\u65e5",frontMatter:{title:"\u9ad8\u53ef\u7528\u5d4c\u5165\u5f0f etcd",weight:40},sidebar:"mySidebar",previous:{title:"\u5907\u4efd\u548c\u6062\u590d",permalink:"/zh/datastore/backup-restore"},next:{title:"\u9ad8\u53ef\u7528\u5916\u90e8\u6570\u636e\u5e93",permalink:"/zh/datastore/ha"}},o={},l=[{value:"\u73b0\u6709\u7684\u5355\u8282\u70b9\u96c6\u7fa4",id:"\u73b0\u6709\u7684\u5355\u8282\u70b9\u96c6\u7fa4",level:2}];function a(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.admonition,{type:"warning",children:(0,r.jsx)(s.p,{children:"\u5d4c\u5165\u5f0f etcd (HA) \u5728\u901f\u5ea6\u8f83\u6162\u7684\u78c1\u76d8\uff08\u4f8b\u5982\u4f7f\u7528 SD \u5361\u8fd0\u884c\u7684 Raspberry Pi\uff09\u4e0a\u53ef\u80fd\u4f1a\u51fa\u73b0\u6027\u80fd\u95ee\u9898\u3002"})}),"\n",(0,r.jsx)(s.admonition,{type:"info",children:(0,r.jsx)(s.p,{children:"HA \u5d4c\u5165\u5f0f etcd \u96c6\u7fa4\u5fc5\u987b\u7531\u5947\u6570\u4e2a Server \u8282\u70b9\u7ec4\u6210\uff0c\u4ee5\u4fbf etcd \u7ef4\u6301 quorum\u3002\u5bf9\u4e8e\u6709 n \u4e2a server \u7684\u96c6\u7fa4\uff0cquorum \u662f (n/2)+1\u3002\u5982\u679c\u96c6\u7fa4\u8282\u70b9\u6570\u91cf\u662f\u5947\u6570\uff0c\u6bcf\u65b0\u589e\u4e00\u4e2a\u8282\u70b9\uff0c\u90fd\u4f1a\u589e\u52a0 quorum \u6240\u9700\u8282\u70b9\u6570\u3002\u867d\u7136\u5c06\u8282\u70b9\u6dfb\u52a0\u5230\u5947\u6570\u8282\u70b9\u6570\u91cf\u7684\u96c6\u7fa4\u589e\u52a0\u4e86\u673a\u5668\uff0c\u770b\u8d77\u6765\u66f4\u597d\uff0c\u4f46\u5176\u5b9e\u96c6\u7fa4\u7684\u5bb9\u9519\u6027\u4f1a\u53d8\u5dee\uff0c\u8fd9\u662f\u56e0\u4e3a\u5b8c\u5168\u76f8\u540c\u6570\u91cf\u7684\u8282\u70b9\u53ef\u80fd\u5931\u8d25\u800c\u4e0d\u4e22\u5931 quorum\uff0c\u4f46\u6709\u66f4\u591a\u7684\u8282\u70b9\u53ef\u80fd\u5931\u8d25\u3002"})}),"\n",(0,r.jsx)(s.p,{children:"\u5177\u6709\u5d4c\u5165\u5f0f etcd \u7684 HA K3s \u96c6\u7fa4\u7531\u4ee5\u4e0b\u90e8\u5206\u7ec4\u6210\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\u4e09\u4e2a\u6216\u591a\u4e2a ",(0,r.jsx)(s.strong,{children:"Server \u8282\u70b9"}),"\u4e3a Kubernetes API \u63d0\u4f9b\u670d\u52a1\u5e76\u8fd0\u884c\u5176\u4ed6 control plane \u670d\u52a1\uff0c\u4ee5\u53ca\u6258\u7ba1\u5d4c\u5165\u5f0f etcd \u6570\u636e\u5b58\u50a8\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:["\u53ef\u9009\uff1a\u96f6\u4e2a\u6216\u591a\u4e2a ",(0,r.jsx)(s.strong,{children:"Agent \u8282\u70b9"}),"\uff0c\u7528\u4e8e\u8fd0\u884c\u4f60\u7684\u5e94\u7528\u548c\u670d\u52a1"]}),"\n",(0,r.jsxs)(s.li,{children:["\u53ef\u9009\uff1a",(0,r.jsx)(s.strong,{children:"\u56fa\u5b9a\u6ce8\u518c\u5730\u5740"}),"\uff0c\u4f9b Agent \u8282\u70b9\u6ce8\u518c\u5230\u96c6\u7fa4"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["\u9996\u5148\uff0c\u542f\u52a8\u4e00\u4e2a\u5e26\u6709 ",(0,r.jsx)(s.code,{children:"cluster-init"})," \u6807\u5fd7\u7684 Server \u8282\u70b9\u6765\u542f\u7528\u96c6\u7fa4\u548c\u4e00\u4e2a\u4ee4\u724c\uff0c\u8be5\u4ee4\u724c\u5c06\u4f5c\u4e3a\u5171\u4eab secret\uff0c\u7528\u4e8e\u5c06\u5176\u4ed6 Server \u52a0\u5165\u96c6\u7fa4\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"curl -sfL https://get.k3s.io | K3S_TOKEN=SECRET sh -s - server \\\n    --cluster-init \\\n    --tls-san=<FIXED_IP> # Optional, needed if using a fixed registration address\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u542f\u52a8\u7b2c\u4e00\u53f0\u670d\u52a1\u5668\u540e\uff0c\u4f7f\u7528\u5171\u4eab secret  \u5c06\u7b2c\u4e8c\u53f0\u548c\u7b2c\u4e09\u53f0\u670d\u52a1\u5668\u52a0\u5165\u96c6\u7fa4\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"curl -sfL https://get.k3s.io | K3S_TOKEN=SECRET sh -s - server \\\n    --server https://<ip or hostname of server1>:6443 \\\n    --tls-san=<FIXED_IP> # Optional, needed if using a fixed registration address\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u68c0\u67e5\u7b2c\u4e8c\u4e2a\u548c\u7b2c\u4e09\u4e2a\u670d\u52a1\u5668\u662f\u5426\u5df2\u52a0\u5165\u96c6\u7fa4\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"$ kubectl get nodes\nNAME        STATUS   ROLES                       AGE   VERSION\nserver1     Ready    control-plane,etcd,master   28m   vX.Y.Z\nserver2     Ready    control-plane,etcd,master   13m   vX.Y.Z\nserver3     Ready    control-plane,etcd,master   10m   vX.Y.Z\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u73b0\u5728\u4f60\u6709\u4e86\u4e00\u4e2a\u9ad8\u53ef\u7528\u7684 control plane\u3002\u4f60\u53ef\u4ee5\u5728 ",(0,r.jsx)(s.code,{children:"--server"})," \u53c2\u6570\u4e2d\u4f7f\u7528\u4efb\u4f55\u96c6\u7fa4 server\uff0c\u4ece\u800c\u52a0\u5165\u5176\u4ed6 server \u548c agent \u8282\u70b9\u3002\u5c06\u5176\u4ed6 agent \u8282\u70b9\u52a0\u5165\u5230\u96c6\u7fa4\u4e2d\uff0c\u6b65\u9aa4\u4e0e server \u76f8\u540c\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"curl -sfL https://get.k3s.io | K3S_TOKEN=SECRET sh -s - agent --server https://<ip or hostname of server>:6443\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u6709\u51e0\u4e2a\u914d\u7f6e\u6807\u5fd7\u5728\u6240\u6709 Server \u8282\u70b9\u4e2d\u5fc5\u987b\u662f\u76f8\u540c\u7684:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\u7f51\u7edc\u76f8\u5173\u6807\u5fd7\uff1a",(0,r.jsx)(s.code,{children:"--cluster-dns"}),"\u3001",(0,r.jsx)(s.code,{children:"--cluster-domain"}),"\u3001",(0,r.jsx)(s.code,{children:"--cluster-cidr"}),"\u3001",(0,r.jsx)(s.code,{children:"--service- cidr"})]}),"\n",(0,r.jsxs)(s.li,{children:["\u63a7\u5236\u67d0\u4e9b\u7ec4\u4ef6\u90e8\u7f72\u7684\u6807\u5fd7\uff1a",(0,r.jsx)(s.code,{children:"--disable-helm-controller"}),"\u3001",(0,r.jsx)(s.code,{children:"--disable-kube-proxy"}),"\u3001",(0,r.jsx)(s.code,{children:"--disable-network-policy"})," \u548c\u4efb\u4f55\u4f20\u9012\u7ed9 ",(0,r.jsx)(s.code,{children:"--disable"})," \u7684\u7ec4\u4ef6"]}),"\n",(0,r.jsxs)(s.li,{children:["\u529f\u80fd\u76f8\u5173\u6807\u5fd7\uff1a",(0,r.jsx)(s.code,{children:"--secrets-encryption"})]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"\u73b0\u6709\u7684\u5355\u8282\u70b9\u96c6\u7fa4",children:"\u73b0\u6709\u7684\u5355\u8282\u70b9\u96c6\u7fa4"}),"\n",(0,r.jsx)(s.admonition,{title:"\u7248\u672c",type:"info",children:(0,r.jsxs)(s.p,{children:["\u4ece ",(0,r.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/releases/tag/v1.22.2%2Bk3s1",children:"v1.22.2+k3s1"})," \u8d77\u53ef\u7528"]})}),"\n",(0,r.jsxs)(s.p,{children:["\u5982\u679c\u4f60\u6709\u4e00\u4e2a\u4f7f\u7528\u9ed8\u8ba4\u5d4c\u5165\u5f0f SQLite \u6570\u636e\u5e93\u7684\u73b0\u6709\u96c6\u7fa4\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528 ",(0,r.jsx)(s.code,{children:"--cluster-init"})," \u6807\u5fd7\u91cd\u65b0\u542f\u52a8\u4f60\u7684 K3s server\uff0c\u4ece\u800c\u5c06\u5176\u8f6c\u6362\u4e3a etcd\u3002\u5b8c\u6210\u6b64\u64cd\u4f5c\u540e\uff0c\u4f60\u5c06\u80fd\u591f\u5982\u4e0a\u6240\u8ff0\u6dfb\u52a0\u5176\u4ed6\u5b9e\u4f8b\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u5982\u679c\u7531\u4e8e\u8282\u70b9\u5df2\u7ecf\u521d\u59cb\u5316\u6216\u52a0\u5165\u4e86\u4e00\u4e2a\u96c6\u7fa4\uff0c\u5bfc\u81f4\u5728\u78c1\u76d8\u4e0a\u53d1\u73b0\u4e00\u4e2a etcd \u6570\u636e\u5b58\u50a8\uff0c\u90a3\u4e48\u6570\u636e\u5b58\u50a8\u53c2\u6570\uff08",(0,r.jsx)(s.code,{children:"--cluster-init"}),"\u3001",(0,r.jsx)(s.code,{children:"--server"}),"\u3001",(0,r.jsx)(s.code,{children:"--datastore-endpoint"})," \u7b49\uff09\u5c06\u88ab\u5ffd\u7565\u3002"]})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>i,a:()=>c});var r=n(7294);const t={},d=r.createContext(t);function c(e){const s=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(d.Provider,{value:s},e.children)}}}]);