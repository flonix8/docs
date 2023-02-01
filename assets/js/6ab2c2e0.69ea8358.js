"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[981],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,f=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7473:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return m}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),l=["components"],o={title:"Environment Variables",weight:3},s=void 0,d={unversionedId:"reference/env-variables",id:"reference/env-variables",title:"Environment Variables",description:"As mentioned in the Quick-Start Guide, you can use the installation script available at https://get.k3s.io to install K3s as a service on systemd and openrc based systems.",source:"@site/docs/reference/env-variables.md",sourceDirName:"reference",slug:"/reference/env-variables",permalink:"/reference/env-variables",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/reference/env-variables.md",tags:[],version:"current",lastUpdatedAt:1675214459,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{title:"Environment Variables",weight:3},sidebar:"mySidebar",previous:{title:"K3s Agent Configuration",permalink:"/reference/agent-config"},next:{title:"K3s Binary Tools",permalink:"/reference/binary-tools"}},p={},m=[],u={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"As mentioned in the ",(0,i.kt)("a",{parentName:"p",href:"/quick-start/"},"Quick-Start Guide"),", you can use the installation script available at ",(0,i.kt)("a",{parentName:"p",href:"https://get.k3s.io"},"https://get.k3s.io")," to install K3s as a service on systemd and openrc based systems."),(0,i.kt)("p",null,"The simplest form of this command is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sfL https://get.k3s.io | sh -\n")),(0,i.kt)("p",null,"When using this method to install K3s, the following environment variables can be used to configure the installation:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"INSTALL_K3S_SKIP_DOWNLOAD")),(0,i.kt)("td",{parentName:"tr",align:null},"If set to true will not download K3s hash or binary.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"INSTALL_K3S_SYMLINK")),(0,i.kt)("td",{parentName:"tr",align:null},"By default will create symlinks for the kubectl, crictl, and ctr binaries if the commands do not already exist in path. If set to 'skip' will not create symlinks and 'force' will overwrite.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"INSTALL_K3S_SKIP_ENABLE")),(0,i.kt)("td",{parentName:"tr",align:null},"If set to true will not enable or start K3s service.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"INSTALL_K3S_SKIP_START")),(0,i.kt)("td",{parentName:"tr",align:null},"If set to true will not start K3s service.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"INSTALL_K3S_VERSION")),(0,i.kt)("td",{parentName:"tr",align:null},"Version of K3s to download from Github. Will attempt to download from the stable channel if not specified.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"INSTALL_K3S_BIN_DIR")),(0,i.kt)("td",{parentName:"tr",align:null},"Directory to install K3s binary, links, and uninstall script to, or use ",(0,i.kt)("inlineCode",{parentName:"td"},"/usr/local/bin")," as the default.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"INSTALL_K3S_BIN_DIR_READ_ONLY")),(0,i.kt)("td",{parentName:"tr",align:null},"If set to true will not write files to ",(0,i.kt)("inlineCode",{parentName:"td"},"INSTALL_K3S_BIN_DIR"),", forces setting ",(0,i.kt)("inlineCode",{parentName:"td"},"INSTALL_K3S_SKIP_DOWNLOAD=true"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"INSTALL_K3S_SYSTEMD_DIR")),(0,i.kt)("td",{parentName:"tr",align:null},"Directory to install systemd service and environment files to, or use ",(0,i.kt)("inlineCode",{parentName:"td"},"/etc/systemd/system")," as the default.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"INSTALL_K3S_EXEC")),(0,i.kt)("td",{parentName:"tr",align:null},"Command with flags to use for launching K3s in the service. If the command is not specified, and the ",(0,i.kt)("inlineCode",{parentName:"td"},"K3S_URL"),' is set, it will default to "agent." If ',(0,i.kt)("inlineCode",{parentName:"td"},"K3S_URL"),' not set, it will default to "server." For help, refer to ',(0,i.kt)("a",{parentName:"td",href:"/installation/configuration#configuration-with-install-script"},"this example."))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"INSTALL_K3S_NAME")),(0,i.kt)("td",{parentName:"tr",align:null},"Name of systemd service to create, will default to 'k3s' if running k3s as a server and 'k3s-agent' if running k3s as an agent. If specified the name will be prefixed with 'k3s-'.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"INSTALL_K3S_TYPE")),(0,i.kt)("td",{parentName:"tr",align:null},"Type of systemd service to create, will default from the K3s exec command if not specified.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"INSTALL_K3S_SELINUX_WARN")),(0,i.kt)("td",{parentName:"tr",align:null},"If set to true will continue if k3s-selinux policy is not found.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"INSTALL_K3S_SKIP_SELINUX_RPM")),(0,i.kt)("td",{parentName:"tr",align:null},"If set to true will skip automatic installation of the k3s RPM.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"INSTALL_K3S_CHANNEL_URL")),(0,i.kt)("td",{parentName:"tr",align:null},"Channel URL for fetching K3s download URL. Defaults to ",(0,i.kt)("a",{parentName:"td",href:"https://update.k3s.io/v1-release/channels"},"https://update.k3s.io/v1-release/channels"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"INSTALL_K3S_CHANNEL")),(0,i.kt)("td",{parentName:"tr",align:null},'Channel to use for fetching K3s download URL. Defaults to "stable". Options include: ',(0,i.kt)("inlineCode",{parentName:"td"},"stable"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"latest"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"testing"),".")))),(0,i.kt)("p",null,"This example shows where to place aforementioned environment variables as options (after the pipe):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sfL https://get.k3s.io | INSTALL_K3S_CHANNEL=latest sh -\n")),(0,i.kt)("p",null,"Environment variables which begin with ",(0,i.kt)("inlineCode",{parentName:"p"},"K3S_")," will be preserved for the systemd and openrc services to use."),(0,i.kt)("p",null,"Setting ",(0,i.kt)("inlineCode",{parentName:"p"},"K3S_URL"),' without explicitly setting an exec command will default the command to "agent".'),(0,i.kt)("p",null,"When running the agent, ",(0,i.kt)("inlineCode",{parentName:"p"},"K3S_TOKEN")," must also be set."))}c.isMDXComponent=!0}}]);