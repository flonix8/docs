"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[4902],{1036:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=i(5893),n=i(1151);const s={title:"Private Registry Configuration",weight:55},o=void 0,c={id:"installation/private-registry",title:"Private Registry Configuration",description:"Containerd can be configured to connect to private registries and use them to pull private images on the node.",source:"@site/docs/installation/private-registry.md",sourceDirName:"installation",slug:"/installation/private-registry",permalink:"/installation/private-registry",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/private-registry.md",tags:[],version:"current",lastUpdatedAt:1704219286,formattedLastUpdatedAt:"Jan 2, 2024",frontMatter:{title:"Private Registry Configuration",weight:55},sidebar:"mySidebar",previous:{title:"Network Options",permalink:"/installation/network-options"},next:{title:"Air-Gap Install",permalink:"/installation/airgap"}},a={},d=[{value:"Registries Configuration File",id:"registries-configuration-file",level:2},{value:"Mirrors",id:"mirrors",level:3},{value:"Redirects",id:"redirects",level:4},{value:"Rewrites",id:"rewrites",level:4},{value:"Configs",id:"configs",level:3},{value:"With TLS",id:"with-tls",level:3},{value:"Without TLS",id:"without-tls",level:3},{value:"Adding Images to the Private Registry",id:"adding-images-to-the-private-registry",level:2}];function l(e){const r={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components},{TabItem:i,Tabs:s}=r;return i||u("TabItem",!0),s||u("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"Containerd can be configured to connect to private registries and use them to pull private images on the node."}),"\n",(0,t.jsxs)(r.p,{children:["Upon startup, K3s will check to see if a ",(0,t.jsx)(r.code,{children:"registries.yaml"})," file exists at ",(0,t.jsx)(r.code,{children:"/etc/rancher/k3s/"})," and instruct containerd to use any registries defined in the file. If you wish to use a private registry, then you will need to create this file as root on each node that will be using the registry."]}),"\n",(0,t.jsxs)(r.p,{children:["Note that server nodes are schedulable by default. If you have not tainted the server nodes and will be running workloads on them, please ensure you also create the ",(0,t.jsx)(r.code,{children:"registries.yaml"})," file on each server as well."]}),"\n",(0,t.jsxs)(r.p,{children:["Configuration in containerd can be used to connect to a private registry with a TLS connection and with registries that enable authentication as well. The following section will explain the ",(0,t.jsx)(r.code,{children:"registries.yaml"})," file and give different examples of using private registry configuration in K3s."]}),"\n",(0,t.jsx)(r.h2,{id:"registries-configuration-file",children:"Registries Configuration File"}),"\n",(0,t.jsx)(r.p,{children:"The file consists of two main sections:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"mirrors"}),"\n",(0,t.jsx)(r.li,{children:"configs"}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"mirrors",children:"Mirrors"}),"\n",(0,t.jsx)(r.p,{children:"Mirrors is a directive that defines the names and endpoints of the private registries, for example:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'mirrors:\n  mycustomreg.com:\n    endpoint:\n      - "https://mycustomreg.com:5000"\n'})}),"\n",(0,t.jsx)(r.p,{children:"Each mirror must have a name and set of endpoints. When pulling an image from a registry, containerd will try these endpoint URLs one by one, and use the first working one."}),"\n",(0,t.jsx)(r.h4,{id:"redirects",children:"Redirects"}),"\n",(0,t.jsxs)(r.p,{children:["If a public registry is used as a mirror, such as when configuring a ",(0,t.jsx)(r.a,{href:"https://docs.docker.com/registry/recipes/mirror/",children:"pull through cache"}),", images pulls are transparently redirected."]}),"\n",(0,t.jsxs)(r.p,{children:["For example, if you have a mirror configured for ",(0,t.jsx)(r.code,{children:"docker.io"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:'mirrors:\n  docker.io:\n    endpoint:\n      - "https://mycustomreg.com:5000"\n'})}),"\n",(0,t.jsxs)(r.p,{children:["Then pulling ",(0,t.jsx)(r.code,{children:"docker.io/rancher/coredns-coredns:1.6.3"})," will transparently pull the image from ",(0,t.jsx)(r.code,{children:"https://mycustomreg.com:5000/rancher/coredns-coredns:1.6.3"}),"."]}),"\n",(0,t.jsx)(r.h4,{id:"rewrites",children:"Rewrites"}),"\n",(0,t.jsx)(r.p,{children:"Each mirror can have a set of rewrites. Rewrites can change the tag of an image based on a regular expression. This is useful if the organization/project structure in the mirror registry is different to the upstream one."}),"\n",(0,t.jsxs)(r.p,{children:["For example, the following configuration would transparently pull the image ",(0,t.jsx)(r.code,{children:"docker.io/rancher/coredns-coredns:1.6.3"})," from ",(0,t.jsx)(r.code,{children:"registry.example.com:5000/mirrorproject/rancher-images/coredns-coredns:1.6.3"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'mirrors:\n  docker.io:\n    endpoint:\n      - "https://registry.example.com:5000"\n    rewrite:\n      "^rancher/(.*)": "mirrorproject/rancher-images/$1"\n'})}),"\n",(0,t.jsxs)(r.p,{children:["The image will still be stored under the original name so that a ",(0,t.jsx)(r.code,{children:"crictl image ls"})," will show ",(0,t.jsx)(r.code,{children:"docker.io/rancher/coredns-coredns:1.6.3"})," as available on the node, even though the image was pulled from the mirrored registry with a different name."]}),"\n",(0,t.jsx)(r.h3,{id:"configs",children:"Configs"}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"configs"})," section defines the TLS and credential configuration for each mirror. For each mirror you can define ",(0,t.jsx)(r.code,{children:"auth"})," and/or ",(0,t.jsx)(r.code,{children:"tls"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"tls"})," part consists of:"]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Directive"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"cert_file"})}),(0,t.jsx)(r.td,{children:"The client certificate path that will be used to authenticate with the registry"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"key_file"})}),(0,t.jsx)(r.td,{children:"The client key path that will be used to authenticate with the registry"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"ca_file"})}),(0,t.jsx)(r.td,{children:"Defines the CA certificate path to be used to verify the registry's server cert file"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"insecure_skip_verify"})}),(0,t.jsx)(r.td,{children:"Boolean that defines if TLS verification should be skipped for the registry"})]})]})]}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"auth"})," part consists of either username/password or authentication token:"]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Directive"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"username"})}),(0,t.jsx)(r.td,{children:"user name of the private registry basic auth"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"password"})}),(0,t.jsx)(r.td,{children:"user password of the private registry basic auth"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"auth"})}),(0,t.jsx)(r.td,{children:"authentication token of the private registry basic auth"})]})]})]}),"\n",(0,t.jsx)(r.p,{children:"Below are basic examples of using private registries in different modes:"}),"\n",(0,t.jsx)(r.h3,{id:"with-tls",children:"With TLS"}),"\n",(0,t.jsxs)(r.p,{children:["Below are examples showing how you may configure ",(0,t.jsx)(r.code,{children:"/etc/rancher/k3s/registries.yaml"})," on each node when using TLS."]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)(i,{value:"With Authentication",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:'mirrors:\n  docker.io:\n    endpoint:\n      - "https://mycustomreg.com:5000"\nconfigs:\n  "mycustomreg:5000":\n    auth:\n      username: xxxxxx # this is the registry username\n      password: xxxxxx # this is the registry password\n    tls:\n      cert_file: # path to the cert file used in the registry\n      key_file:  # path to the key file used in the registry\n      ca_file:   # path to the ca file used in the registry\n'})})}),(0,t.jsx)(i,{value:"Without Authentication",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:'mirrors:\n  docker.io:\n    endpoint:\n      - "https://mycustomreg.com:5000"\nconfigs:\n  "mycustomreg:5000":\n    tls:\n      cert_file: # path to the cert file used in the registry\n      key_file:  # path to the key file used in the registry\n      ca_file:   # path to the ca file used in the registry\n'})})})]}),"\n",(0,t.jsx)(r.h3,{id:"without-tls",children:"Without TLS"}),"\n",(0,t.jsxs)(r.p,{children:["Below are examples showing how you may configure ",(0,t.jsx)(r.code,{children:"/etc/rancher/k3s/registries.yaml"})," on each node when ",(0,t.jsx)(r.em,{children:"not"})," using TLS."]}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)(i,{value:"With Authentication",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:'mirrors:\n  docker.io:\n    endpoint:\n      - "http://mycustomreg.com:5000"\nconfigs:\n  "mycustomreg:5000":\n    auth:\n      username: xxxxxx # this is the registry username\n      password: xxxxxx # this is the registry password\n'})})}),(0,t.jsx)(i,{value:"Without Authentication",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:'mirrors:\n  docker.io:\n    endpoint:\n      - "http://mycustomreg.com:5000"\n'})})})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["In case of no TLS communication, you need to specify ",(0,t.jsx)(r.code,{children:"http://"})," for the endpoints, otherwise it will default to https."]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"In order for the registry changes to take effect, you need to restart K3s on each node."}),"\n",(0,t.jsx)(r.h2,{id:"adding-images-to-the-private-registry",children:"Adding Images to the Private Registry"}),"\n",(0,t.jsxs)(r.p,{children:["First, obtain the ",(0,t.jsx)(r.code,{children:"k3s-images.txt"})," file from GitHub for the release you are working with.\nPull the K3s images listed on the k3s-images.txt file from docker.io"]}),"\n",(0,t.jsxs)(r.p,{children:["Example: ",(0,t.jsx)(r.code,{children:"docker pull docker.io/rancher/coredns-coredns:1.6.3"})]}),"\n",(0,t.jsx)(r.p,{children:"Then, retag the images to the private registry."}),"\n",(0,t.jsxs)(r.p,{children:["Example: ",(0,t.jsx)(r.code,{children:"docker tag rancher/coredns-coredns:1.6.3 mycustomreg.com:5000/coredns-coredns"})]}),"\n",(0,t.jsx)(r.p,{children:"Last, push the images to the private registry."}),"\n",(0,t.jsxs)(r.p,{children:["Example: ",(0,t.jsx)(r.code,{children:"docker push mycustomreg.com:5000/coredns-coredns"})]})]})}function h(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}function u(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,r,i)=>{i.d(r,{Z:()=>c,a:()=>o});var t=i(7294);const n={},s=t.createContext(n);function o(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);