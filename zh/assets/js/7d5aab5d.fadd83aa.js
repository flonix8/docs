"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[3219],{8977:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>d,default:()=>o,frontMatter:()=>i,metadata:()=>t,toc:()=>c});var r=n(5893),l=n(1151);const i={title:"\u79bb\u7ebf\u5b89\u88c5",weight:60},d=void 0,t={id:"installation/airgap",title:"\u79bb\u7ebf\u5b89\u88c5",description:"\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e24\u79cd\u4e0d\u540c\u7684\u65b9\u6cd5\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u5b89\u88c5 K3s\u3002\u79bb\u7ebf\u73af\u5883\u6307\u7684\u662f\u4e0d\u76f4\u63a5\u8fde\u63a5\u5230 Internet \u7684\u73af\u5883\u3002\u4f60\u53ef\u4ee5\u90e8\u7f72\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u548c mirror docker.io\uff0c\u4e5f\u53ef\u4ee5\u624b\u52a8\u90e8\u7f72\u955c\u50cf\uff0c\u4f8b\u5982\u7528\u4e8e\u5c0f\u578b\u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/installation/airgap.md",sourceDirName:"installation",slug:"/installation/airgap",permalink:"/zh/installation/airgap",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/airgap.md",tags:[],version:"current",lastUpdatedAt:1703094153,formattedLastUpdatedAt:"2023\u5e7412\u670820\u65e5",frontMatter:{title:"\u79bb\u7ebf\u5b89\u88c5",weight:60},sidebar:"mySidebar",previous:{title:"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u914d\u7f6e",permalink:"/zh/installation/private-registry"},next:{title:"\u7ba1\u7406 Server \u89d2\u8272",permalink:"/zh/installation/server-roles"}},a={},c=[{value:"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93",id:"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93",level:2},{value:"\u521b\u5efa\u955c\u50cf\u4ed3\u5e93 YAML",id:"\u521b\u5efa\u955c\u50cf\u4ed3\u5e93-yaml",level:3},{value:"\u624b\u52a8\u90e8\u7f72\u955c\u50cf",id:"\u624b\u52a8\u90e8\u7f72\u955c\u50cf",level:2},{value:"\u51c6\u5907\u955c\u50cf\u76ee\u5f55\u548c K3s \u4e8c\u8fdb\u5236\u6587\u4ef6",id:"\u51c6\u5907\u955c\u50cf\u76ee\u5f55\u548c-k3s-\u4e8c\u8fdb\u5236\u6587\u4ef6",level:3},{value:"\u5b89\u88c5 K3s",id:"\u5b89\u88c5-k3s",level:2},{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:3},{value:"\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u5b89\u88c5 K3s",id:"\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u5b89\u88c5-k3s",level:3},{value:"\u5347\u7ea7",id:"\u5347\u7ea7",level:2},{value:"\u5b89\u88c5\u811a\u672c\u65b9\u6cd5",id:"\u5b89\u88c5\u811a\u672c\u65b9\u6cd5",level:3},{value:"\u81ea\u52a8\u5347\u7ea7",id:"\u81ea\u52a8\u5347\u7ea7",level:3}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components},{TabItem:n,Tabs:i}=s;return n||p("TabItem",!0),i||p("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e24\u79cd\u4e0d\u540c\u7684\u65b9\u6cd5\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u5b89\u88c5 K3s\u3002\u79bb\u7ebf\u73af\u5883\u6307\u7684\u662f\u4e0d\u76f4\u63a5\u8fde\u63a5\u5230 Internet \u7684\u73af\u5883\u3002\u4f60\u53ef\u4ee5\u90e8\u7f72\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u548c mirror docker.io\uff0c\u4e5f\u53ef\u4ee5\u624b\u52a8\u90e8\u7f72\u955c\u50cf\uff0c\u4f8b\u5982\u7528\u4e8e\u5c0f\u578b\u96c6\u7fa4\u3002"}),"\n",(0,r.jsx)(s.h2,{id:"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93",children:"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93"}),"\n",(0,r.jsx)(s.p,{children:"\u672c\u6587\u6863\u5047\u8bbe\u4f60\u5df2\u7ecf\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u521b\u5efa\u4e86\u8282\u70b9\uff0c\u5e76\u4e14\u5728\u5821\u5792\u4e3b\u673a\u4e0a\u62e5\u6709 Docker \u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u3002"}),"\n",(0,r.jsxs)(s.p,{children:["\u5982\u679c\u4f60\u5c1a\u672a\u8bbe\u7f6e\u79c1\u6709 Docker \u955c\u50cf\u4ed3\u5e93\uff0c\u8bf7\u53c2\u9605",(0,r.jsx)(s.a,{href:"https://docs.docker.com/registry/deploying/#run-an-externally-accessible-registry",children:"\u5b98\u65b9\u6587\u6863"}),"\u3002"]}),"\n",(0,r.jsx)(s.h3,{id:"\u521b\u5efa\u955c\u50cf\u4ed3\u5e93-yaml",children:"\u521b\u5efa\u955c\u50cf\u4ed3\u5e93 YAML"}),"\n",(0,r.jsxs)(s.p,{children:["\u6309\u7167",(0,r.jsx)(s.a,{href:"/zh/installation/private-registry",children:"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u914d\u7f6e"}),"\u6307\u5357\u521b\u5efa\u548c\u914d\u7f6e registry.yaml \u6587\u4ef6\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u5b8c\u6210\u6b64\u64cd\u4f5c\u540e\uff0c\u4f60\u73b0\u5728\u53ef\u4ee5\u8f6c\u5230\u4e0b\u9762\u7684",(0,r.jsx)(s.a,{href:"#%E5%AE%89%E8%A3%85-k3s",children:"\u5b89\u88c5 K3s"})," \u90e8\u5206\u3002"]}),"\n",(0,r.jsx)(s.h2,{id:"\u624b\u52a8\u90e8\u7f72\u955c\u50cf",children:"\u624b\u52a8\u90e8\u7f72\u955c\u50cf"}),"\n",(0,r.jsx)(s.p,{children:"\u6211\u4eec\u5047\u8bbe\u4f60\u5df2\u7ecf\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u521b\u5efa\u4e86\u8282\u70b9\u5e76\u4f7f\u7528 Containerd \u4f5c\u4e3a\u5bb9\u5668\u8fd0\u884c\u65f6\u3002\n\u6b64\u65b9\u6cd5\u9700\u8981\u4f60\u624b\u52a8\u5c06\u5fc5\u8981\u7684\u955c\u50cf\u90e8\u7f72\u5230\u6bcf\u4e2a\u8282\u70b9\uff0c\u9002\u7528\u4e8e\u65e0\u6cd5\u8fd0\u884c\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u7684\u8fb9\u7f18\u90e8\u7f72\u3002"}),"\n",(0,r.jsx)(s.h3,{id:"\u51c6\u5907\u955c\u50cf\u76ee\u5f55\u548c-k3s-\u4e8c\u8fdb\u5236\u6587\u4ef6",children:"\u51c6\u5907\u955c\u50cf\u76ee\u5f55\u548c K3s \u4e8c\u8fdb\u5236\u6587\u4ef6"}),"\n",(0,r.jsxs)(s.p,{children:["\u4ece ",(0,r.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/releases",children:"Releases"})," \u9875\u9762\u83b7\u53d6\u8981\u8fd0\u884c\u7684 K3s \u7248\u672c\u7684\u955c\u50cf tar \u6587\u4ef6\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u5c06 tar \u6587\u4ef6\u653e\u5728 ",(0,r.jsx)(s.code,{children:"images"})," \u76ee\u5f55\u4e0b\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"sudo mkdir -p /var/lib/rancher/k3s/agent/images/\nsudo cp ./k3s-airgap-images-$ARCH.tar /var/lib/rancher/k3s/agent/images/\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u5b8c\u6210\u6b64\u64cd\u4f5c\u540e\uff0c\u4f60\u73b0\u5728\u53ef\u4ee5\u8f6c\u5230\u4e0b\u9762\u7684",(0,r.jsx)(s.a,{href:"#%E5%AE%89%E8%A3%85-k3s",children:"\u5b89\u88c5 K3s"})," \u90e8\u5206\u3002"]}),"\n",(0,r.jsx)(s.h2,{id:"\u5b89\u88c5-k3s",children:"\u5b89\u88c5 K3s"}),"\n",(0,r.jsx)(s.h3,{id:"\u5148\u51b3\u6761\u4ef6",children:"\u5148\u51b3\u6761\u4ef6"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\u5728\u5b89\u88c5 K3s \u4e4b\u524d\uff0c\u5b8c\u6210\u4e0a\u9762\u7684",(0,r.jsx)(s.a,{href:"#%E7%A7%81%E6%9C%89%E9%95%9C%E5%83%8F%E4%BB%93%E5%BA%93",children:"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93"}),"\u6216",(0,r.jsx)(s.a,{href:"#%E6%89%8B%E5%8A%A8%E9%83%A8%E7%BD%B2%E9%95%9C%E5%83%8F",children:"\u624b\u52a8\u90e8\u7f72\u955c\u50cf"}),"\u64cd\u4f5c\uff0c\u9884\u586b\u5145 K3s \u9700\u8981\u5b89\u88c5\u7684\u955c\u50cf\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:["\u4ece ",(0,r.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/releases",children:"Releases"})," \u9875\u9762\u4e0b\u8f7d K3s \u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u8be5\u6587\u4ef6\u9700\u8981\u5339\u914d\u7528\u4e8e\u83b7\u53d6\u79bb\u7ebf\u955c\u50cf\u7684\u7248\u672c\u3002\u5c06\u4e8c\u8fdb\u5236\u6587\u4ef6\u653e\u5728\u6bcf\u4e2a\u79bb\u7ebf\u8282\u70b9\u4e0a\u7684 ",(0,r.jsx)(s.code,{children:"/usr/local/bin"})," \u4e2d\uff0c\u5e76\u786e\u4fdd\u6587\u4ef6\u662f\u53ef\u6267\u884c\u7684\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:["\u5728 ",(0,r.jsx)(s.a,{href:"https://get.k3s.io",children:"get.k3s.io"})," \u4e0b\u8f7d K3s \u5b89\u88c5\u811a\u672c\u3002\u5c06\u5b89\u88c5\u811a\u672c\u653e\u5728\u6bcf\u4e2a\u79bb\u7ebf\u8282\u70b9\u4e0a\u7684\u4efb\u4f55\u4f4d\u7f6e\uff0c\u5e76\u5c06\u5176\u547d\u540d\u4e3a ",(0,r.jsx)(s.code,{children:"install.sh"}),"\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:["\u5982\u679c\u4f60\u7684\u8282\u70b9\u6ca1\u6709\u5e26\u9ed8\u8ba4\u8def\u7531\u7684\u63a5\u53e3\uff0c\u5219\u5fc5\u987b\u914d\u7f6e\u9ed8\u8ba4\u8def\u7531\uff0c\u4f7f\u7528\u865a\u62df\u63a5\u53e3\u7684\u9ed1\u6d1e\u8def\u7531\u4e5f\u8db3\u591f\u4e86\u3002K3s \u9700\u8981\u4e00\u4e2a\u9ed8\u8ba4\u8def\u7531\u6765\u81ea\u52a8\u68c0\u6d4b\u8282\u70b9\u7684\u4e3b IP\uff0c\u5e76\u4f7f kube-proxy ClusterIP \u8def\u7531\u6b63\u5e38\u8fd0\u884c\u3002\u8981\u6dfb\u52a0\u865a\u62df\u8def\u7531\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a","\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"ip link add dummy0 type dummy\nip link set dummy0 up\nip addr add 169.254.255.254/31 dev dummy0\nip route add default via 169.254.255.255 dev dummy0 metric 1000\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["\u4f7f\u7528 ",(0,r.jsx)(s.code,{children:"INSTALL_K3S_SKIP_DOWNLOAD"})," \u73af\u5883\u53d8\u91cf\u8fd0\u884c K3s \u811a\u672c\u65f6\uff0cK3s \u5c06\u4f7f\u7528\u811a\u672c\u7684\u672c\u5730\u7248\u672c\u548c\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002"]}),"\n",(0,r.jsx)(s.h3,{id:"\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u5b89\u88c5-k3s",children:"\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u5b89\u88c5 K3s"}),"\n",(0,r.jsx)(s.p,{children:"\u4f60\u53ef\u4ee5\u5728\u4e00\u53f0\u6216\u591a\u53f0\u670d\u52a1\u5668\u4e0a\u5b89\u88c5 K3s\uff0c\u5982\u4e0b\u6240\u8ff0\u3002"}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsxs)(n,{value:"\u5355\u8282\u70b9\u914d\u7f6e",default:!0,children:[(0,r.jsx)(s.p,{children:"\u8981\u5728\u5355\u4e2a\u670d\u52a1\u5668\u4e0a\u5b89\u88c5 K3s\uff0c\u53ea\u9700\u5728 Server \u8282\u70b9\u4e0a\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"INSTALL_K3S_SKIP_DOWNLOAD=true ./install.sh\n"})}),(0,r.jsx)(s.p,{children:"\u8981\u6dfb\u52a0\u5176\u4ed6 Agent\uff0c\u8bf7\u5728\u6bcf\u4e2a Agent \u8282\u70b9\u4e0a\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\u3002"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"INSTALL_K3S_SKIP_DOWNLOAD=true K3S_URL=https://<SERVER_IP>:6443 K3S_TOKEN=<YOUR_TOKEN> ./install.sh\n"})}),(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["Server \u7684 Token \u901a\u5e38\u4f4d\u4e8e ",(0,r.jsx)(s.code,{children:"/var/lib/rancher/k3s/server/token"}),"\u3002"]})})]}),(0,r.jsxs)(n,{value:"\u9ad8\u53ef\u7528\u914d\u7f6e",default:!0,children:[(0,r.jsxs)(s.p,{children:["\u53c2\u8003",(0,r.jsx)(s.a,{href:"/zh/datastore/ha",children:"\u5177\u6709\u5916\u90e8\u6570\u636e\u5e93\u7684\u9ad8\u53ef\u7528"}),"\u6216",(0,r.jsx)(s.a,{href:"/zh/datastore/ha-embedded",children:"\u5177\u6709\u5d4c\u5165\u5f0f\u6570\u636e\u5e93\u7684\u9ad8\u53ef\u7528"}),"\u6307\u5357\u3002\u4f60\u9700\u8981\u8c03\u6574\u5b89\u88c5\u547d\u4ee4\u6765\u6307\u5b9a ",(0,r.jsx)(s.code,{children:"INSTALL_K3S_SKIP_DOWNLOAD=true"}),"\uff0c\u5e76\u5728\u672c\u5730\u8fd0\u884c\u5b89\u88c5\u811a\u672c\uff0c\u800c\u4e0d\u662f\u4f7f\u7528 curl\u3002\u4f60\u8fd8\u5c06\u4f7f\u7528 ",(0,r.jsx)(s.code,{children:"INSTALL_K3S_EXEC='args'"})," \u4e3a K3s \u63d0\u4f9b\u53c2\u6570\u3002"]}),(0,r.jsx)(s.p,{children:"\u4f8b\u5982\uff0c\u5177\u6709\u5916\u90e8\u6570\u636e\u5e93\u7684\u9ad8\u53ef\u7528\u6307\u5357\u7684\u7b2c\u4e8c\u6b65\u63d0\u5230\u4e86\u4ee5\u4e0b\u5185\u5bb9\uff1a"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'curl -sfL https://get.k3s.io | sh -s - server \\\n  --token=SECRET \\\n  --datastore-endpoint="mysql://username:password@tcp(hostname:3306)/database-name"\n'})}),(0,r.jsx)(s.p,{children:"\u4f60\u9700\u8981\u4fee\u6539\u6b64\u7c7b\u793a\u4f8b\uff0c\u5982\u4e0b\u6240\u793a\uff1a"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"INSTALL_K3S_SKIP_DOWNLOAD=true INSTALL_K3S_EXEC='server --token=SECRET' \\\nK3S_DATASTORE_ENDPOINT='mysql://username:password@tcp(hostname:3306)/database-name' \\\n./install.sh\n"})})]})]}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["K3s \u8fd8\u4e3a kubelet \u63d0\u4f9b\u4e86\u4e00\u4e2a ",(0,r.jsx)(s.code,{children:"--resolv-conf"})," \u6807\u5fd7\uff0c\u6709\u52a9\u4e8e\u5728\u79bb\u7ebf\u7f51\u7edc\u4e2d\u914d\u7f6e DNS\u3002"]})}),"\n",(0,r.jsx)(s.h2,{id:"\u5347\u7ea7",children:"\u5347\u7ea7"}),"\n",(0,r.jsx)(s.h3,{id:"\u5b89\u88c5\u811a\u672c\u65b9\u6cd5",children:"\u5b89\u88c5\u811a\u672c\u65b9\u6cd5"}),"\n",(0,r.jsx)(s.p,{children:"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u5b8c\u6210\u79bb\u7ebf\u73af\u5883\u7684\u5347\u7ea7\uff1a"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\u4ece ",(0,r.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/releases",children:"Releases"})," \u9875\u9762\u4e0b\u8f7d\u8981\u5347\u7ea7\u7684 K3s \u7248\u672c\u7684\u65b0\u79bb\u7ebf\u955c\u50cf tar \u5305\u3002\u5c06 tar \u6587\u4ef6\u653e\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u7684 ",(0,r.jsx)(s.code,{children:"/var/lib/rancher/k3s/agent/images/"})," \u76ee\u5f55\u4e2d\u3002\u5220\u9664\u65e7\u7684 tar \u6587\u4ef6\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:["\u590d\u5236\u5e76\u66ff\u6362\u6bcf\u4e2a\u8282\u70b9\u4e0a ",(0,r.jsx)(s.code,{children:"/usr/local/bin"})," \u4e2d\u7684\u65e7 K3s \u4e8c\u8fdb\u5236\u6587\u4ef6\u3002\u590d\u5236 ",(0,r.jsx)(s.a,{href:"https://get.k3s.io",children:"K3s \u5b89\u88c5\u811a\u672c"}),"\uff08\u56e0\u4e3a\u811a\u672c\u53ef\u80fd\u81ea\u4e0a\u6b21\u7248\u672c\u53d1\u5e03\u4ee5\u6765\u5df2\u66f4\u6539\uff09\u3002\u4f7f\u7528\u76f8\u540c\u7684\u73af\u5883\u53d8\u91cf\u518d\u6b21\u8fd0\u884c\u811a\u672c\u3002"]}),"\n",(0,r.jsx)(s.li,{children:"\u91cd\u542f K3s \u670d\u52a1\uff08\u5982\u679c\u5b89\u88c5\u7a0b\u5e8f\u6ca1\u6709\u81ea\u52a8\u91cd\u542f K3s \u7684\u8bdd\uff09\u3002"}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"\u81ea\u52a8\u5347\u7ea7",children:"\u81ea\u52a8\u5347\u7ea7"}),"\n",(0,r.jsxs)(s.p,{children:["K3s \u652f\u6301",(0,r.jsx)(s.a,{href:"/zh/upgrades/automated",children:"\u81ea\u52a8\u5347\u7ea7"}),"\u3002\u8981\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u542f\u7528\u6b64\u529f\u80fd\uff0c\u4f60\u5fc5\u987b\u786e\u4fdd\u6240\u9700\u7684\u955c\u50cf\u5728\u4f60\u7684\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u4e2d\u53ef\u7528\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u4f60\u5c06\u9700\u8981\u4e0e\u4f60\u6253\u7b97\u5347\u7ea7\u5230\u7684 K3s \u7248\u672c\u76f8\u5bf9\u5e94\u7684 rancher/k3s-upgrade \u7248\u672c\u3002\u6ce8\u610f\uff0c\u955c\u50cf\u6807\u7b7e\u5c06 K3s \u7248\u672c\u4e2d\u7684 ",(0,r.jsx)(s.code,{children:"+"})," \u66ff\u6362\u4e3a ",(0,r.jsx)(s.code,{children:"-"}),"\uff0c\u56e0\u4e3a Docker \u955c\u50cf\u4e0d\u652f\u6301 ",(0,r.jsx)(s.code,{children:"+"}),"\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u4f60\u8fd8\u9700\u8981\u5728\u4f60\u8981\u90e8\u7f72\u7684 ",(0,r.jsx)(s.code,{children:"system-upgrade-controller"})," \u6e05\u5355 YAML \u4e2d\u6307\u5b9a\u7684 ",(0,r.jsx)(s.code,{children:"system-upgrade-controller"})," \u548c ",(0,r.jsx)(s.code,{children:"kubectl"})," \u7248\u672c\u3002\u5728",(0,r.jsx)(s.a,{href:"https://github.com/rancher/system-upgrade-controller/releases/latest",children:"\u8fd9\u91cc"}),"\u68c0\u67e5 ",(0,r.jsx)(s.code,{children:"system-upgrad-controller"})," \u7684\u6700\u65b0\u7248\u672c\uff0c\u5e76\u4e0b\u8f7d ",(0,r.jsx)(s.code,{children:"system-upgrade-controller.yaml"})," \u6765\u786e\u5b9a\u4f60\u9700\u8981\u63a8\u9001\u5230\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u7684\u7248\u672c\u3002\u4f8b\u5982\uff0c\u5728 ",(0,r.jsx)(s.code,{children:"system-upgrade-controller"})," \u7684 v0.4.0 \u7248\u672c\u4e2d\uff0c\u6e05\u5355 YAML \u4e2d\u6307\u5b9a\u4e86\u8fd9\u4e9b\u955c\u50cf\uff1a"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"rancher/system-upgrade-controller:v0.4.0\nrancher/kubectl:v0.17.0\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u5c06\u5fc5\u8981\u7684 rancher/k3s-upgrade\u3001rancher/system-upgrade-controller \u548c rancher/kubectl \u955c\u50cf\u6dfb\u52a0\u5230\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u540e\uff0c\u8bf7\u6309\u7167",(0,r.jsx)(s.a,{href:"/zh/upgrades/automated",children:"\u81ea\u52a8\u5347\u7ea7"}),"\u6307\u5357\u8fdb\u884c\u64cd\u4f5c\u3002"]})]})}function o(e={}){const{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}function p(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,s,n)=>{n.d(s,{Z:()=>t,a:()=>d});var r=n(7294);const l={},i=r.createContext(l);function d(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);