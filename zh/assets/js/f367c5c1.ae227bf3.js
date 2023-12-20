"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[7393],{8669:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var i=s(5893),l=s(1151);const r={title:"\u7f51\u7edc\u9009\u9879",weight:25},c=void 0,d={id:"installation/network-options",title:"\u7f51\u7edc\u9009\u9879",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 K3s \u7f51\u7edc\u914d\u7f6e\u9009\u9879\uff0c\u5305\u62ec\u914d\u7f6e\u6216\u66ff\u6362 Flannel\uff0c\u4ee5\u53ca\u914d\u7f6e IPv6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/installation/network-options.md",sourceDirName:"installation",slug:"/installation/network-options",permalink:"/zh/installation/network-options",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/network-options.md",tags:[],version:"current",lastUpdatedAt:1703094153,formattedLastUpdatedAt:"2023\u5e7412\u670820\u65e5",frontMatter:{title:"\u7f51\u7edc\u9009\u9879",weight:25},sidebar:"mySidebar",previous:{title:"\u914d\u7f6e\u9009\u9879",permalink:"/zh/installation/configuration"},next:{title:"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u914d\u7f6e",permalink:"/zh/installation/private-registry"}},t={},a=[{value:"Flannel \u9009\u9879",id:"flannel-\u9009\u9879",level:2},{value:"\u4ece <code>wireguard</code> \u6216 <code>ipsec</code> \u8fc1\u79fb\u5230 <code>wireguard-native</code>",id:"\u4ece-wireguard-\u6216-ipsec-\u8fc1\u79fb\u5230-wireguard-native",level:3},{value:"\u81ea\u5b9a\u4e49 CNI",id:"\u81ea\u5b9a\u4e49-cni",level:2},{value:"Control Plane Egress \u9009\u62e9\u5668\u914d\u7f6e",id:"control-plane-egress-\u9009\u62e9\u5668\u914d\u7f6e",level:2},{value:"\u53cc\u6808 (IPv4 + IPv6) \u7f51\u7edc",id:"\u53cc\u6808-ipv4--ipv6-\u7f51\u7edc",level:2},{value:"\u5355\u6808 IPv6 \u7f51\u7edc",id:"\u5355\u6808-ipv6-\u7f51\u7edc",level:2},{value:"\u5206\u5e03\u5f0f\u6df7\u5408\u6216\u591a\u4e91\u96c6\u7fa4",id:"\u5206\u5e03\u5f0f\u6df7\u5408\u6216\u591a\u4e91\u96c6\u7fa4",level:2},{value:"\u5d4c\u5165\u5f0f k3s \u591a\u4e91\u89e3\u51b3\u65b9\u6848",id:"\u5d4c\u5165\u5f0f-k3s-\u591a\u4e91\u89e3\u51b3\u65b9\u6848",level:3},{value:"\u96c6\u6210 Tailscale VPN \u63d0\u4f9b\u7a0b\u5e8f\uff08\u5b9e\u9a8c\u6027\uff09",id:"\u96c6\u6210-tailscale-vpn-\u63d0\u4f9b\u7a0b\u5e8f\u5b9e\u9a8c\u6027",level:3}];function o(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{TabItem:s,Tabs:r}=n;return s||x("TabItem",!0),r||x("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u672c\u6587\u4ecb\u7ecd\u4e86 K3s \u7f51\u7edc\u914d\u7f6e\u9009\u9879\uff0c\u5305\u62ec\u914d\u7f6e\u6216\u66ff\u6362 Flannel\uff0c\u4ee5\u53ca\u914d\u7f6e IPv6\u3002"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u6ce8\u610f"}),"\uff1a\u6709\u5173 CoreDNS\u3001Traefik \u548c Service LB \u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.jsx)(n.a,{href:"/zh/networking",children:"\u7f51\u7edc"}),"\u9875\u9762\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"flannel-\u9009\u9879",children:"Flannel \u9009\u9879"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/flannel-io/flannel/blob/master/README.md",children:"Flannel"})," \u662f\u7b2c 3 \u5c42\u7f51\u7edc\u7ed3\u6784\u7684\u8f7b\u91cf\u7ea7\u63d0\u4f9b\u7a0b\u5e8f\uff0c\u5b83\u5b9e\u73b0\u4e86 Kubernetes \u5bb9\u5668\u7f51\u7edc\u63a5\u53e3 (CNI)\u3002\u5b83\u5c31\u662f\u901a\u5e38\u6240\u8bf4\u7684 CNI \u63d2\u4ef6\u3002"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Flannel \u53ea\u80fd\u5728 Server \u8282\u70b9\u4e0a\u8bbe\u7f6e\u9009\u9879\uff0c\u5e76\u4e14\u96c6\u7fa4\u4e2d\u7684\u6240\u6709 Server \u4e0a\u90fd\u5fc5\u987b\u76f8\u540c\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Flannel \u7684\u9ed8\u8ba4\u540e\u7aef\u662f ",(0,i.jsx)(n.code,{children:"vxlan"}),"\u3002\u8981\u542f\u7528\u52a0\u5bc6\uff0c\u8bf7\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"wireguard-native"})," \u540e\u7aef\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5728 Rasperry Pi \u4e0a\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"vxlan"})," \u548c\u6700\u65b0\u7248\u672c\u7684 Ubuntu \u9700\u8981",(0,i.jsx)(n.a,{href:"/zh/advanced#raspberry-pi",children:"\u989d\u5916\u7684\u51c6\u5907\u5de5\u4f5c"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5728\u67d0\u4e9b Linux \u53d1\u884c\u7248\u4e0a\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"wireguard-native"})," \u4f5c\u4e3a Flannel \u540e\u7aef\u53ef\u80fd\u9700\u8981\u989d\u5916\u7684\u6a21\u5757\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,i.jsx)(n.a,{href:"https://www.wireguard.com/install/",children:"WireGuard \u5b89\u88c5\u6307\u5357"}),"\u3002\nWireGuard \u7684\u5b89\u88c5\u6b65\u9aa4\u5c06\u786e\u4fdd\u4e3a\u4f60\u7684\u64cd\u4f5c\u7cfb\u7edf\u5b89\u88c5\u9002\u5f53\u7684\u5185\u6838\u6a21\u5757\u3002\n\u5728\u5c1d\u8bd5\u4f7f\u7528 WireGuard Flannel \u540e\u7aef\u4e4b\u524d\uff0c\u4f60\u5fc5\u987b\u786e\u4fdd WireGuard \u5185\u6838\u6a21\u5757\u5728\u6bcf\u4e2a\u8282\u70b9\uff08\u5305\u62ec Server \u548c Agent\uff09\u4e0a\u90fd\u53ef\u7528\u3002"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"CLI \u6807\u5fd7\u548c\u503c"}),(0,i.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--flannel-ipv6-masq"})}),(0,i.jsxs)(n.td,{children:["\u5c06\u4f2a\u88c5\u89c4\u5219\u5e94\u7528\u4e8e IPv6 \u6d41\u91cf\uff08\u9ed8\u8ba4\u4e3a IPv4\uff09\u3002\u4ec5\u9002\u7528\u4e8e\u53cc\u6808\u6216\u4ec5\u4f7f\u7528 IPv6 \u7684\u96c6\u7fa4\u3002\u4e0e ",(0,i.jsx)(n.code,{children:"none"})," \u4ee5\u5916\u7684\u4efb\u4f55 Flannel \u540e\u7aef\u517c\u5bb9\u3002"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--flannel-external-ip"})}),(0,i.jsxs)(n.td,{children:["\u4f7f\u7528\u8282\u70b9\u5916\u90e8 IP \u5730\u5740\u4f5c\u4e3a Flannel \u6d41\u91cf\u7684\u76ee\u7684\u5730\uff0c\u800c\u4e0d\u662f\u4f7f\u7528\u5185\u90e8 IP\u3002\u4ec5\u5f53\u8282\u70b9\u4e0a\u8bbe\u7f6e\u4e86 ",(0,i.jsx)(n.code,{children:"--node-external-ip"})," \u65f6\u9002\u7528\u3002"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--flannel-backend=vxlan"})}),(0,i.jsx)(n.td,{children:"\u4f7f\u7528 VXLAN \u5c01\u88c5\u6570\u636e\u5305\u3002\u5728 Raspberry Pi \u4e0a\u53ef\u80fd\u9700\u8981\u989d\u5916\u7684\u5185\u6838\u6a21\u5757\u3002"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--flannel-backend=host-gw"})}),(0,i.jsx)(n.td,{children:"\u901a\u8fc7\u8282\u70b9 IP \u4f7f\u7528 IP \u8def\u7531\u5230 pod \u5b50\u7f51\u3002\u96c6\u7fa4\u4e2d\u6240\u6709\u8282\u70b9\u4e4b\u95f4\u90fd\u9700\u8981\u76f4\u63a5\u7684\u7b2c 2 \u5c42\u8fde\u63a5\u3002"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--flannel-backend=wireguard-native"})}),(0,i.jsx)(n.td,{children:"\u4f7f\u7528 WireGuard \u5c01\u88c5\u548c\u52a0\u5bc6\u7f51\u7edc\u6d41\u91cf\u3002\u53ef\u80fd\u9700\u8981\u989d\u5916\u7684\u5185\u6838\u6a21\u5757\u3002"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--flannel-backend=ipsec"})}),(0,i.jsxs)(n.td,{children:["\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"swanctl"})," \u4e8c\u8fdb\u5236\u6587\u4ef6\u4f7f\u7528 strongSwan IPSec \u6765\u52a0\u5bc6\u7f51\u7edc\u6d41\u91cf\u3002\uff08\u5df2\u5f03\u7528\uff1b\u5c06\u5728 v1.27.0 \u4e2d\u5220\u9664\uff09"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--flannel-backend=wireguard"})}),(0,i.jsxs)(n.td,{children:["\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"wg"})," \u4e8c\u8fdb\u5236\u6587\u4ef6\u4f7f\u7528 WireGuard \u6765\u52a0\u5bc6\u7f51\u7edc\u6d41\u91cf\u3002\u53ef\u80fd\u9700\u8981\u989d\u5916\u7684\u5185\u6838\u6a21\u5757\u548c\u914d\u7f6e\u3002\uff08\u5df2\u5f03\u7528\uff1b\u5c06\u5728 v1.26.0 \u4e2d\u5220\u9664\uff09"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"--flannel-backend=none"})}),(0,i.jsx)(n.td,{children:"\u5b8c\u5168\u7981\u7528 Flannel\u3002"})]})]})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"\u7248\u672c",type:"info",children:(0,i.jsxs)(n.p,{children:["\u4ece 2022-12 \u7248\u672c\uff08v1.26.0+k3s1, v1.25.5+k3s1, v1.24.9+k3s1, v1.23.15+k3s1\uff09\u5f00\u59cb\uff0cK3s \u4e0d\u518d\u5305\u542b strongSwan ",(0,i.jsx)(n.code,{children:"swanctl"})," \u548c ",(0,i.jsx)(n.code,{children:"charon"})," \u4e8c\u8fdb\u5236\u6587\u4ef6\u3002\u5982\u679c\u4f60\u60f3\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"ipsec"})," \u540e\u7aef\uff0c\u8bf7\u5728\u5347\u7ea7\u6216\u5b89\u88c5\u8fd9\u4e9b\u7248\u672c\u4e4b\u524d\u5728\u8282\u70b9\u4e0a\u5b89\u88c5\u6b63\u786e\u7684\u5305\u3002"]})}),"\n",(0,i.jsxs)(n.h3,{id:"\u4ece-wireguard-\u6216-ipsec-\u8fc1\u79fb\u5230-wireguard-native",children:["\u4ece ",(0,i.jsx)(n.code,{children:"wireguard"})," \u6216 ",(0,i.jsx)(n.code,{children:"ipsec"})," \u8fc1\u79fb\u5230 ",(0,i.jsx)(n.code,{children:"wireguard-native"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u65e7\u7248 ",(0,i.jsx)(n.code,{children:"wireguard"})," \u540e\u7aef\u9700\u8981\u5728\u4e3b\u673a\u4e0a\u5b89\u88c5 ",(0,i.jsx)(n.code,{children:"wg"})," \u5de5\u5177\u3002\u8be5\u540e\u7aef\u5c06\u5728 K3s v1.26 \u4e2d\u5220\u9664\uff0c\u53d6\u800c\u4ee3\u4e4b\u7684\u662f\u76f4\u63a5\u4e0e\u5185\u6838\u4ea4\u4e92\u7684 ",(0,i.jsx)(n.code,{children:"wireguard-native"})," \u540e\u7aef\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u65e7\u7248 ",(0,i.jsx)(n.code,{children:"ipsec"})," \u540e\u7aef\u9700\u8981\u5728\u4e3b\u673a\u4e0a\u5b89\u88c5 ",(0,i.jsx)(n.code,{children:"swanctl"})," \u548c ",(0,i.jsx)(n.code,{children:"charon"})," \u4e8c\u8fdb\u5236\u6587\u4ef6\u3002\u8be5\u540e\u7aef\u5c06\u5728 K3s v1.27 \u4e2d\u5220\u9664\uff0c\u4ee5\u652f\u6301 ",(0,i.jsx)(n.code,{children:"wireguard-native"})," \u540e\u7aef\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u4eec\u5efa\u8bae\u7528\u6237\u5c3d\u5feb\u8fc1\u79fb\u5230\u65b0\u7684\u540e\u7aef\u3002\u8282\u70b9\u6709\u4e86\u65b0\u914d\u7f6e\u540e\uff0c\u8fc1\u79fb\u4e0d\u4f1a\u82b1\u8d39\u5f88\u957f\u7684\u505c\u673a\u65f6\u95f4\u3002\u4f60\u53ef\u4ee5\u9075\u5faa\u4ee5\u4e0b\u4e24\u4e2a\u6b65\u9aa4\u8fdb\u884c\u64cd\u4f5c\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u66f4\u65b0\u6240\u6709 Server \u8282\u70b9\u4e0a\u7684 K3s \u914d\u7f6e\u3002\u5982\u679c\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\uff0c",(0,i.jsx)(n.code,{children:"/etc/rancher/k3s/config.yaml"})," \u5e94\u8be5\u5305\u62ec ",(0,i.jsx)(n.code,{children:"flannel-backend: wireguard-native"})," \u800c\u4e0d\u662f ",(0,i.jsx)(n.code,{children:"flannel-backend: wireguard"})," \u6216 ",(0,i.jsx)(n.code,{children:"flannel-backend: ipsec"}),"\u3002\u5982\u679c\u4f60\u5728 systemd \u5355\u5143\u4e2d\u901a\u8fc7 CLI \u6807\u5fd7\u914d\u7f6e K3s\uff0c\u5219\u5e94\u66f4\u6539\u5bf9\u5e94\u7684\u6807\u5fd7\u3002"]}),"\n",(0,i.jsx)(n.li,{children:"\u4ece Server \u8282\u70b9\u5f00\u59cb\u91cd\u65b0\u542f\u52a8\u6240\u6709\u8282\u70b9\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u81ea\u5b9a\u4e49-cni",children:"\u81ea\u5b9a\u4e49 CNI"}),"\n",(0,i.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"--flannel-backend=none"})," \u542f\u52a8 K3s \u5e76\u5b89\u88c5\u4f60\u9009\u62e9\u7684 CNI\u3002\u5927\u591a\u6570 CNI \u63d2\u4ef6\u90fd\u6709\u81ea\u5df1\u7684\u7f51\u7edc\u7b56\u7565\u5f15\u64ce\uff0c\u56e0\u6b64\u5efa\u8bae\u540c\u65f6\u8bbe\u7f6e ",(0,i.jsx)(n.code,{children:"--disable-network-policy"})," \u4ee5\u907f\u514d\u51b2\u7a81\u3002\u9700\u8981\u8003\u8651\u7684\u91cd\u8981\u4fe1\u606f\uff1a"]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsxs)(s,{value:"Canal",default:!0,children:[(0,i.jsxs)(n.p,{children:["\u8bbf\u95ee ",(0,i.jsx)(n.a,{href:"https://docs.tigera.io/calico/latest/getting-started/kubernetes/flannel/install-for-flannel#installing-calico-for-policy-and-flannel-aka-canal-for-networking",children:"Canal Docs"})," \u7f51\u7ad9\u3002\u6309\u7167\u6b65\u9aa4\u5b89\u88c5 Canal\u3002\u4fee\u6539 Canal YAML \u4ee5\u4fbf\u5728 ",(0,i.jsx)(n.code,{children:"container_settings"})," \u4e2d\u5141\u8bb8 IP \u8f6c\u53d1\uff0c\u4f8b\u5982\uff1a"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'"container_settings": {\n  "allow_ip_forwarding": true\n}\n'})}),(0,i.jsx)(n.p,{children:"\u5e94\u7528 Canal YAML\u3002"}),(0,i.jsx)(n.p,{children:"\u901a\u8fc7\u5728\u4e3b\u673a\u4e0a\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u786e\u4fdd\u8bbe\u7f6e\u5df2\u88ab\u5e94\u7528\uff1a"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cat /etc/cni/net.d/10-canal.conflist\n"})}),(0,i.jsx)(n.p,{children:"\u4f60\u5e94\u8be5\u770b\u5230 IP \u8f6c\u53d1\u88ab\u8bbe\u7f6e\u4e3a true\u3002"})]}),(0,i.jsxs)(s,{value:"Calico",default:!0,children:[(0,i.jsxs)(n.p,{children:["\u9075\u5faa ",(0,i.jsx)(n.a,{href:"https://docs.tigera.io/calico/latest/reference/configure-cni-plugins",children:"Calico CNI \u63d2\u4ef6\u6307\u5357"}),"\u3002\u4fee\u6539 Calico YAML \u4ee5\u4fbf\u5728 ",(0,i.jsx)(n.code,{children:"container_settings"})," \u4e2d\u5141\u8bb8 IP \u8f6c\u53d1\uff0c\u4f8b\u5982\uff1a"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'"container_settings": {\n  "allow_ip_forwarding": true\n}\n'})}),(0,i.jsx)(n.p,{children:"\u5e94\u7528 Calico YAML\u3002"}),(0,i.jsx)(n.p,{children:"\u901a\u8fc7\u5728\u4e3b\u673a\u4e0a\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u786e\u4fdd\u8bbe\u7f6e\u5df2\u88ab\u5e94\u7528\uff1a"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cat /etc/cni/net.d/10-calico.conflist\n"})}),(0,i.jsx)(n.p,{children:"\u4f60\u5e94\u8be5\u770b\u5230 IP \u8f6c\u53d1\u88ab\u8bbe\u7f6e\u4e3a true\u3002"})]}),(0,i.jsxs)(s,{value:"Cilium",default:!0,children:[(0,i.jsxs)(n.p,{children:["\u8fd0\u884c ",(0,i.jsx)(n.code,{children:"k3s-killall.sh"})," \u6216 ",(0,i.jsx)(n.code,{children:"k3s-uninstall.sh"}),"\u4e4b\u524d\uff0c\u4f60\u5fc5\u987b\u624b\u52a8\u5220\u9664 ",(0,i.jsx)(n.code,{children:"cilium_host"}),"\u3001",(0,i.jsx)(n.code,{children:"cilium_net"})," \u548c ",(0,i.jsx)(n.code,{children:"cilium_vxlan"})," \u63a5\u53e3\u3002\u5982\u679c\u4e0d\u8fd9\u6837\u505a\uff0c\u4f60\u53ef\u80fd\u4f1a\u5728 K3s \u505c\u6b62\u65f6\u4e22\u5931\u4e0e\u4e3b\u673a\u7684\u7f51\u7edc\u8fde\u63a5"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ip link delete cilium_host\nip link delete cilium_net\nip link delete cilium_vxlan\n"})}),(0,i.jsx)(n.p,{children:"\u6b64\u5916\uff0c\u4f60\u9700\u8981\u5220\u9664 cilium \u7684 iptables \u89c4\u5219\uff1a"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"iptables-save | grep -iv cilium | iptables-restore\nip6tables-save | grep -iv cilium | ip6tables-restore\n"})})]})]}),"\n",(0,i.jsx)(n.h2,{id:"control-plane-egress-\u9009\u62e9\u5668\u914d\u7f6e",children:"Control Plane Egress \u9009\u62e9\u5668\u914d\u7f6e"}),"\n",(0,i.jsxs)(n.p,{children:["K3s Agent \u548c Server \u7ef4\u62a4\u8282\u70b9\u4e4b\u95f4\u7684 websocket \u96a7\u9053\uff0c\u8fd9\u4e9b\u96a7\u9053\u7528\u4e8e\u5c01\u88c5 control plane\uff08apiserver\uff09\u548c Agent\uff08kubelet \u548c containerd\uff09\u7ec4\u4ef6\u4e4b\u95f4\u7684\u53cc\u5411\u901a\u4fe1\u3002\n\u8fd9\u5141\u8bb8 Agent \u5728\u4e0d\u5c06 kubelet \u548c\u5bb9\u5668\u8fd0\u884c\u65f6\u6d41\u7aef\u53e3\u66b4\u9732\u7ed9\u4f20\u5165\u8fde\u63a5\u7684\u60c5\u51b5\u4e0b\u8fd0\u884c\uff0c\u5e76\u5141\u8bb8 control plane \u5728\u7981\u7528 Agent \u7684\u60c5\u51b5\u4e0b\u8fde\u63a5\u5230\u96c6\u7fa4\u670d\u52a1\u3002\n\u6b64\u529f\u80fd\u7b49\u540c\u4e8e\u5176\u4ed6 Kubernetes \u53d1\u884c\u7248\u4e0a\u5e38\u7528\u7684 ",(0,i.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/extend-kubernetes/setup-konnectivity/",children:"Konnectivity"})," \u670d\u52a1\uff0c\u901a\u8fc7 apiserver \u7684 Egress \u9009\u62e9\u5668\u914d\u7f6e\u8fdb\u884c\u7ba1\u7406\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"--egress-selector-mode"})," \u6807\u5fd7\u5728 Server \u4e0a\u914d\u7f6e Egress \u9009\u62e9\u5668\u6a21\u5f0f\uff0c\u652f\u6301\u56db\u79cd\u6a21\u5f0f\uff1a"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"disabled"}),"\uff1aapiserver \u4e0d\u4f7f\u7528 Agent \u96a7\u9053\u4e0e kubelet \u6216\u96c6\u7fa4\u7aef\u70b9\u901a\u4fe1\u3002\n\u6b64\u6a21\u5f0f\u8981\u6c42 Server \u8fd0\u884c kubelet\u3001CNI \u548c kube-proxy\uff0c\u5e76\u4e0e Agent \u76f4\u63a5\u8fde\u63a5\uff0c\u5426\u5219 apiserver \u5c06\u65e0\u6cd5\u8bbf\u95ee Service \u7aef\u70b9\u6216\u6267\u884c ",(0,i.jsx)(n.code,{children:"kubectl exec"})," \u548c ",(0,i.jsx)(n.code,{children:"kubectl logs"}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"agent"}),"\uff08\u9ed8\u8ba4\uff09\uff1aapiserver \u4f7f\u7528 Agent \u96a7\u9053\u4e0e kubelet \u901a\u4fe1\u3002\n\u8fd9\u79cd\u6a21\u5f0f\u8981\u6c42 Server \u4e5f\u8fd0\u884c kubelet\u3001CNI \u548c kube-proxy\uff0c\u5426\u5219 apiserver \u5c06\u65e0\u6cd5\u8bbf\u95ee Service \u7aef\u70b9\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pod"}),"\uff1aapiserver \u4f7f\u7528 Agent \u96a7\u9053\u4e0e kubelets \u548c Service \u7aef\u70b9\u901a\u4fe1\uff0c\u901a\u8fc7\u76d1\u89c6\u8282\u70b9\u5c06\u7aef\u70b9\u8fde\u63a5\u8def\u7531\u5230\u6b63\u786e\u7684 Agent\u3002\n",(0,i.jsx)(n.strong,{children:"\u6ce8\u610f"}),"\uff1a\u5982\u679c CNI \u4f7f\u7528\u81ea\u5df1\u7684 IPAM\uff0c\u800c\u4e14\u4e0d\u8003\u8651\u8282\u70b9\u7684 PodCIDR \u5206\u914d\uff0c\u8fd9\u5c06\u4e0d\u8d77\u4f5c\u7528\u3002\u8fd9\u4e9b CNI \u9700\u8981\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"cluster"})," \u6216 ",(0,i.jsx)(n.code,{children:"agent"}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cluster"}),"\uff1aapiserver \u4f7f\u7528 Agent \u96a7\u9053\u4e0e kubelets \u548c Service \u7aef\u70b9\u901a\u4fe1\uff0c\u901a\u8fc7\u76d1\u89c6\u7aef\u70b9\u5c06\u7aef\u70b9\u8fde\u63a5\u8def\u7531\u5230\u6b63\u786e\u7684 Agent\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u53cc\u6808-ipv4--ipv6-\u7f51\u7edc",children:"\u53cc\u6808 (IPv4 + IPv6) \u7f51\u7edc"}),"\n",(0,i.jsx)(n.admonition,{title:"\u7248\u672c",type:"info",children:(0,i.jsxs)(n.p,{children:["\u4ece ",(0,i.jsx)(n.a,{href:"https://github.com/k3s-io/k3s/releases/tag/v1.21.0%2Bk3s1",children:"v1.21.0+k3s1"})," \u5f00\u59cb\u63d0\u4f9b\u5b9e\u9a8c\u6027\u652f\u6301\u3002",(0,i.jsx)(n.br,{}),"\n","\u4ece ",(0,i.jsx)(n.a,{href:"https://github.com/k3s-io/k3s/releases/tag/v1.23.7%2Bk3s1",children:"v1.23.7+k3s1"})," \u5f00\u59cb\u63d0\u4f9b\u7a33\u5b9a\u652f\u6301\u3002"]})}),"\n",(0,i.jsxs)(n.admonition,{title:"\u5df2\u77e5\u95ee\u9898",type:"warning",children:[(0,i.jsxs)(n.p,{children:["Kubernetes ",(0,i.jsx)(n.a,{href:"https://github.com/kubernetes/kubernetes/issues/111695",children:"Issue #111695"})," \u5bfc\u81f4\u4e86\u4e00\u4e2a\u95ee\u9898\u3002\u5982\u679c\u4f60\u6709\u4e00\u4e2a\u53cc\u6808\u73af\u5883\u800c\u4e14\u4f60\u6ca1\u6709\u4e3a\u96c6\u7fa4\u6d41\u91cf\u4f7f\u7528\u4e3b\u8981\u7f51\u5361\uff0c\u90a3\u4e48 Kubelet \u4f1a\u5ffd\u7565\u8282\u70b9 IPv6 \u5730\u5740\u3002\u4e3a\u907f\u514d\u6b64\u9519\u8bef\uff0c\u8bf7\u5c06\u4ee5\u4e0b\u6807\u5fd7\u6dfb\u52a0\u5230 K3s Server \u548c Agent \uff1a"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'--kubelet-arg="node-ip=0.0.0.0" # To proritize IPv4 traffic\n#OR\n--kubelet-arg="node-ip=::" # To proritize IPv6 traffic\n'})})]}),"\n",(0,i.jsx)(n.p,{children:"\u9996\u6b21\u521b\u5efa\u96c6\u7fa4\u65f6\u5fc5\u987b\u914d\u7f6e\u53cc\u6808\u7ec4\u7f51\u3002\u4e00\u65e6\u4ec5\u4f7f\u7528 IPv4 \u542f\u52a8\uff0c\u5b83\u5c31\u65e0\u6cd5\u5728\u73b0\u6709\u96c6\u7fa4\u4e0a\u542f\u7528\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u8981\u5728 K3s \u4e2d\u542f\u7528\u53cc\u6808\uff0c\u4f60\u5fc5\u987b\u5728\u6240\u6709 server \u8282\u70b9\u4e0a\u63d0\u4f9b\u6709\u6548\u7684\u53cc\u6808 ",(0,i.jsx)(n.code,{children:"cluster-cidr"})," \u548c ",(0,i.jsx)(n.code,{children:"service-cidr"}),"\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a\u6709\u6548\u914d\u7f6e\u7684\u793a\u4f8b\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"--cluster-cidr=10.42.0.0/16,2001:cafe:42::/56 --service-cidr=10.43.0.0/16,2001:cafe:43::/112\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8bf7\u6ce8\u610f\uff0c\u4f60\u53ef\u4ee5\u914d\u7f6e\u4efb\u4f55\u6709\u6548\u7684 ",(0,i.jsx)(n.code,{children:"cluster-cidr"})," \u548c ",(0,i.jsx)(n.code,{children:"service-cidr"})," \u503c\uff0c\u4f46\u5efa\u8bae\u4f7f\u7528\u4e0a\u8ff0\u63a9\u7801\u3002\u5982\u679c\u66f4\u6539 ",(0,i.jsx)(n.code,{children:"cluster-cidr"})," \u63a9\u7801\uff0c\u5219\u8fd8\u5e94\u66f4\u6539 ",(0,i.jsx)(n.code,{children:"node-cidr-mask-size-ipv4"})," \u548c ",(0,i.jsx)(n.code,{children:"node-cidr-mask-size-ipv6"})," \u503c\u4ee5\u5339\u914d\u6bcf\u4e2a\u8282\u70b9\u7684\u8ba1\u5212 pod \u548c\u8282\u70b9\u603b\u6570\u3002\u5bf9\u4e8e IPv4\uff0c\u652f\u6301\u7684\u6700\u5927 ",(0,i.jsx)(n.code,{children:"service-cidr"})," \u63a9\u7801\u662f /12\uff0c\u800c IPv6 \u7684\u662f /112\u3002\u5982\u679c\u4f60\u5728\u516c\u5171\u4e91\u4e2d\u90e8\u7f72\uff0c\u8bf7\u8bb0\u4f4f\u5141\u8bb8 ipv6 \u6d41\u91cf\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f\u81ea\u5b9a\u4e49 CNI \u63d2\u4ef6\uff0c\u5373 Flannel \u4ee5\u5916\u7684 CNI \u63d2\u4ef6\uff0c\u5219\u53ef\u80fd\u9700\u8981\u989d\u5916\u7684\u914d\u7f6e\u3002\u8bf7\u53c2\u9605\u4f60\u4f7f\u7528\u7684\u63d2\u4ef6\u7684\u53cc\u6808\u6587\u6863\uff0c\u5e76\u9a8c\u8bc1\u662f\u5426\u53ef\u4ee5\u542f\u7528\u7f51\u7edc\u7b56\u7565\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u5355\u6808-ipv6-\u7f51\u7edc",children:"\u5355\u6808 IPv6 \u7f51\u7edc"}),"\n",(0,i.jsx)(n.admonition,{title:"\u7248\u672c",type:"info",children:(0,i.jsxs)(n.p,{children:["\u4ece ",(0,i.jsx)(n.a,{href:"https://github.com/k3s-io/k3s/releases/tag/v1.22.9%2Bk3s1",children:"v1.22.9+k3s1"})," \u8d77\u53ef\u7528"]})}),"\n",(0,i.jsx)(n.admonition,{title:"\u5df2\u77e5\u95ee\u9898",type:"warning",children:(0,i.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u7684 IPv6 \u9ed8\u8ba4\u8def\u7531\u662f\u7531\u8def\u7531\u5668\u516c\u544a\uff08RA\uff09\u8bbe\u7f6e\u7684\uff0c\u4f60\u9700\u8981\u8bbe\u7f6e sysctl ",(0,i.jsx)(n.code,{children:"net.ipv6.conf.all.accept_ra=2"}),"\u3002\u5426\u5219\uff0c\u4e00\u65e6\u9ed8\u8ba4\u8def\u7531\u8fc7\u671f\uff0c\u8282\u70b9\u5c06\u653e\u5f03\u8be5\u8def\u7531\u3002\u8bf7\u6ce8\u610f\uff0c\u63a5\u53d7 RA \u53ef\u80fd\u4f1a\u589e\u52a0",(0,i.jsx)(n.a,{href:"https://github.com/kubernetes/kubernetes/issues/91507",children:"\u4e2d\u95f4\u4eba\u653b\u51fb"}),"\u7684\u98ce\u9669\u3002"]})}),"\n",(0,i.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"--cluster-cidr"})," \u548c ",(0,i.jsx)(n.code,{children:"--service-cidr"})," \u6807\u5fd7\u5728 K3s \u4e0a\u4f7f\u7528\u5355\u6808 IPv6 \u96c6\u7fa4\uff08\u6ca1\u6709 IPv4 \u7684\u96c6\u7fa4\uff09\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a\u6709\u6548\u914d\u7f6e\u7684\u793a\u4f8b\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"--cluster-cidr=2001:cafe:42::/56 --service-cidr=2001:cafe:43::/112\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u5206\u5e03\u5f0f\u6df7\u5408\u6216\u591a\u4e91\u96c6\u7fa4",children:"\u5206\u5e03\u5f0f\u6df7\u5408\u6216\u591a\u4e91\u96c6\u7fa4"}),"\n",(0,i.jsxs)(n.p,{children:["K3s \u96c6\u7fa4\u4ecd\u7136\u53ef\u4ee5\u90e8\u7f72\u5728\u4e0d\u5171\u4eab\u516c\u5171\u79c1\u6709\u7f51\u7edc\u4e14\u4e0d\u76f4\u63a5\u8fde\u63a5\u7684\u8282\u70b9\u4e0a\uff08\u4f8b\u5982\u4e0d\u540c\u516c\u6709\u4e91\u4e2d\u7684\u8282\u70b9\uff09\u3002\u6709\u4e24\u79cd\u9009\u62e9\u53ef\u4ee5\u5b9e\u73b0\u8fd9\u4e00\u70b9\uff1a\u5d4c\u5165\u5f0f k3s \u591a\u4e91\u89e3\u51b3\u65b9\u6848\u548c\u96c6\u6210 ",(0,i.jsx)(n.code,{children:"tailscale"})," VPN \u63d0\u4f9b\u7a0b\u5e8f\u3002"]}),"\n",(0,i.jsx)(n.admonition,{title:"\u8b66\u544a",type:"warning",children:(0,i.jsx)(n.p,{children:"\u5982\u679c\u5916\u90e8\u8fde\u63a5\u9700\u8981\u66f4\u591a\u7684\u8dc3\u70b9\uff0c\u90a3\u4e48\u8282\u70b9\u4e4b\u95f4\u7684\u5ef6\u8fdf\u4f1a\u53d8\u9ad8\u3002\u5ef6\u8fdf\u592a\u9ad8\u4f1a\u964d\u4f4e\u7f51\u7edc\u6027\u80fd\uff0c\u8fd8\u53ef\u80fd\u5f71\u54cd\u96c6\u7fa4\u7684\u8fd0\u884c\u3002"})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"\u6b64\u7c7b\u90e8\u7f72\u4e0d\u652f\u6301\u5d4c\u5165\u5f0f etcd\u3002\u5982\u679c\u4f7f\u7528\u5d4c\u5165\u5f0f etcd\uff0c\u6240\u6709 Server \u8282\u70b9\u5fc5\u987b\u53ef\u4ee5\u901a\u8fc7\u5176\u79c1\u6709 IP \u76f8\u4e92\u8bbf\u95ee\u3002Agent \u53ef\u80fd\u5206\u5e03\u5728\u591a\u4e2a\u7f51\u7edc\u4e0a\uff0c\u4f46\u6240\u6709 server \u90fd\u5e94\u8be5\u4f4d\u4e8e\u540c\u4e00\u4f4d\u7f6e\u3002"})}),"\n",(0,i.jsx)(n.h3,{id:"\u5d4c\u5165\u5f0f-k3s-\u591a\u4e91\u89e3\u51b3\u65b9\u6848",children:"\u5d4c\u5165\u5f0f k3s \u591a\u4e91\u89e3\u51b3\u65b9\u6848"}),"\n",(0,i.jsx)(n.p,{children:"K3s \u4f7f\u7528 wireguard \u4e3a\u96c6\u7fa4\u6d41\u91cf\u5efa\u7acb VPN \u7f51\u683c\u3002\u6bcf\u4e2a\u8282\u70b9\u90fd\u5fc5\u987b\u5177\u6709\u552f\u4e00\u7684 IP\uff0c\u53ef\u4ee5\u901a\u8fc7 IP \u8bbf\u95ee\u8282\u70b9\uff08\u901a\u5e38\u662f\u516c\u5171 IP\uff09\u3002K3s supervisor \u6d41\u91cf\u5c06\u4f7f\u7528 websocket \u96a7\u9053\uff0c\u96c6\u7fa4 (CNI) \u6d41\u91cf\u5c06\u4f7f\u7528 wireguard \u96a7\u9053\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u8981\u542f\u7528\u8fd9\u79cd\u7c7b\u578b\u7684\u90e8\u7f72\uff0c\u4f60\u5fc5\u987b\u5728 Server \u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u53c2\u6570\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"--node-external-ip=<SERVER_EXTERNAL_IP> --flannel-backend=wireguard-native --flannel-external-ip\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5728 Agent \u4e0a\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"--node-external-ip=<AGENT_EXTERNAL_IP>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5176\u4e2d ",(0,i.jsx)(n.code,{children:"SERVER_EXTERNAL_IP"})," \u662f\u8bbf\u95ee Server \u8282\u70b9\u7684 IP\uff0c",(0,i.jsx)(n.code,{children:"AGENT_EXTERNAL_IP"})," \u662f\u8bbf\u95ee Agent \u8282\u70b9\u7684 IP\u3002\u8bf7\u6ce8\u610f\uff0cAgent \u4e2d\u7684 ",(0,i.jsx)(n.code,{children:"K3S_URL"})," \u914d\u7f6e\u53c2\u6570\u9700\u8981\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"SERVER_EXTERNAL_IP"})," \u624d\u80fd\u8fde\u63a5\u3002\u8bf7\u8bb0\u4f4f\u68c0\u67e5",(0,i.jsx)(n.a,{href:"/zh/installation/requirements#%E7%BD%91%E7%BB%9C",children:"\u7f51\u7edc\u8981\u6c42"}),"\uff0c\u5e76\u5141\u8bb8\u8bbf\u95ee\u5185\u90e8\u548c\u5916\u90e8\u5730\u5740\u4e0a\u5217\u51fa\u7684\u7aef\u53e3\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"SERVER_EXTERNAL_IP"})," \u548c ",(0,i.jsx)(n.code,{children:"AGENT_EXTERNAL_IP"})," \u4e4b\u95f4\u9700\u8981\u4fdd\u6301\u8fde\u63a5\uff0c\u5e76\u4e14\u901a\u5e38\u4f7f\u7528\u516c\u5171 IP\u3002"]}),"\n",(0,i.jsxs)(n.admonition,{title:"\u52a8\u6001 IP",type:"info",children:[(0,i.jsxs)(n.p,{children:["\u5982\u679c\u4e3a\u8282\u70b9\u5206\u914d\u52a8\u6001 IP \u5e76\u4e14 IP \u53d1\u751f\u53d8\u5316\uff08\u4f8b\u5982\u5728 AWS \u4e2d\uff09\uff0c\u5219\u5fc5\u987b\u4fee\u6539 ",(0,i.jsx)(n.code,{children:"--node-external-ip"})," \u53c2\u6570\u6765\u53cd\u6620\u65b0 IP\u3002\u5982\u679c\u5c06 K3s \u4f5c\u4e3a Service \u8fd0\u884c\uff0c\u5219\u5fc5\u987b\u4fee\u6539 ",(0,i.jsx)(n.code,{children:"/etc/systemd/system/k3s.service"})," \u7136\u540e\u8fd0\u884c\uff1a"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"systemctl daemon-reload\nsystemctl restart k3s\n"})})]}),"\n",(0,i.jsx)(n.h3,{id:"\u96c6\u6210-tailscale-vpn-\u63d0\u4f9b\u7a0b\u5e8f\u5b9e\u9a8c\u6027",children:"\u96c6\u6210 Tailscale VPN \u63d0\u4f9b\u7a0b\u5e8f\uff08\u5b9e\u9a8c\u6027\uff09"}),"\n",(0,i.jsx)(n.p,{children:"\u5728 v1.27.3\u3001v1.26.6\u3001v1.25.11 \u548c\u66f4\u65b0\u7248\u672c\u4e2d\u53ef\u7528\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["K3s \u53ef\u4ee5\u4e0e ",(0,i.jsx)(n.a,{href:"https://tailscale.com/",children:"Tailscale"})," \u96c6\u6210\uff0c\u4ee5\u4fbf\u8282\u70b9\u4f7f\u7528 Tailscale VPN \u670d\u52a1\u5728\u8282\u70b9\u4e4b\u95f4\u6784\u5efa\u7f51\u683c\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u90e8\u7f72 K3s \u4e4b\u524d\uff0cTailscale \u9700\u8981\u5b8c\u6210\u56db\u4e2a\u6b65\u9aa4\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u767b\u5f55\u5230\u4f60\u7684 Tailscale \u5e10\u6237"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5728 ",(0,i.jsx)(n.code,{children:"Settings > Keys"})," \u4e2d\uff0c\u751f\u6210\u4e00\u4e2a\u6388\u6743\u5bc6\u94a5\uff08$AUTH-KEY\uff09\uff0c\u5b83\u53ef\u4ee5\u88ab\u96c6\u7fa4\u4e2d\u7684\u6240\u6709\u8282\u70b9\u91cd\u590d\u4f7f\u7528"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u51b3\u5b9a\u96c6\u7fa4\u5c06\u4f7f\u7528\u7684 podCIDR\uff08\u9ed8\u8ba4 ",(0,i.jsx)(n.code,{children:"10.42.0.0/16"}),"\uff09\u3002\u5728 Access \u63a7\u5236\u4e2d\u9644\u52a0 CIDR\uff08\u6216\u53cc\u6808\u7684 CIDR\uff09\uff1a"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'"autoApprovers": {\n        "routes": {\n            "10.42.0.0/16":        ["your_account@xyz.com"],\n            "2001:cafe:42::/56": ["your_account@xyz.com"],\n        },\n    },\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"\u5728\u8282\u70b9\u4e2d\u5b89\u88c5 Tailscale\uff1a"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl -fsSL https://tailscale.com/install.sh | sh\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u8981\u90e8\u7f72\u542f\u7528\u4e86 Tailscale \u96c6\u6210\u7684 K3s\uff0c\u4f60\u5fc5\u987b\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u6dfb\u52a0\u4ee5\u4e0b\u53c2\u6570\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'--vpn-auth="name=tailscale,joinKey=$AUTH-KEY\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u6216\u5728\u6587\u4ef6\u4e2d\u63d0\u4f9b\u8be5\u4fe1\u606f\u5e76\u4f7f\u7528\u53c2\u6570\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"--vpn-auth-file=$PATH_TO_FILE\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6216\u8005\uff0c\u5982\u679c\u4f60\u6709\u81ea\u5df1\u7684 Tailscale \u670d\u52a1\u5668\uff08\u4f8b\u5982 headscale\uff09\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7\u5c06 ",(0,i.jsx)(n.code,{children:",controlServerURL=$URL"})," \u9644\u52a0\u5230 vpn-auth \u53c2\u6570\u6765\u8fde\u63a5\u5b83\u3002"]}),"\n",(0,i.jsx)(n.admonition,{title:"\u8b66\u544a",type:"warning",children:(0,i.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u8ba1\u5212\u4f7f\u7528\u540c\u4e00\u4e2a tailscale \u7f51\u7edc\u8fd0\u884c\u591a\u4e2a K3s \u96c6\u7fa4\uff0c\u8bf7\u521b\u5efa\u9002\u5f53\u7684 ",(0,i.jsx)(n.a,{href:"https://tailscale.com/kb/1018/acls/",children:"ACL"})," \u6765\u907f\u514d IP \u51b2\u7a81\uff0c\u6216\u4e3a\u6bcf\u4e2a\u96c6\u7fa4\u4f7f\u7528\u4e0d\u540c\u7684 podCIDR \u5b50\u7f51\u3002"]})})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}function x(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>c});var i=s(7294);const l={},r=i.createContext(l);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);