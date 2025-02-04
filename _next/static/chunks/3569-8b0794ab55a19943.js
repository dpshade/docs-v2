"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3569],{3569:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var i=r(95155),a=r(76046),s=r(67396),l=r(43463),o=r(38495);let d=()=>{let e=(0,a.usePathname)(),t=e.startsWith("/build/")?o.r:o.s;console.log("Current Pathname:",e);let r=(e,t)=>{for(let i of e){if(i.href&&i.href===t)return i;for(let e of[...i.links||[],...i.children||[]]){if(e.href&&e.href===t)return e;let i=r(e.children||[],t);if(i)return i}}return null},d=r(t,e),n=d?.links??d?.children??[];return 0===n.length?(0,i.jsx)("div",{className:"text-zinc-900 dark:text-white",children:"No related pages found."}):(0,i.jsxs)("div",{className:"mt-6",children:[(0,i.jsx)("h2",{className:"text-lg font-bold text-zinc-900 dark:text-white",children:"Related Pages"}),(0,i.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4",children:n.map((e,t)=>(0,i.jsxs)("div",{className:(0,l.A)("p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-sm flex flex-col","hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"),children:[e.href?(0,i.jsx)(s.default,{href:e.href,className:"flex-grow",children:(0,i.jsx)("h3",{className:"text-md font-semibold text-zinc-900 dark:text-white",children:e.title})}):(0,i.jsx)("h3",{className:"text-md font-semibold text-zinc-900 dark:text-white",children:e.title}),e.children&&e.children.length>0&&(0,i.jsxs)("div",{className:"mt-2 text-sm text-zinc-600 dark:text-zinc-400",children:["Contains ",e.children.length," subpages"]})]},e.href||`${e.title}-${t}`))})]})}},38495:(e,t,r)=>{r.d(t,{r:()=>a,s:()=>i});let i=[{title:"General",links:[{title:"Introduction",href:"/learn/introduction"},{title:"Arweave Name System (ArNS)",href:"/learn/arns"},{title:"Network Composition",href:"/learn/network-composition"},{title:"Smart Contract",href:"/learn/ario-contract"},{title:"Token",href:"/learn/token"},{title:"Staking",href:"/learn/staking"},{title:"Glossary",href:"/learn/glossary"}]},{title:"Concepts",links:[{title:"Manifests",href:"/learn/concepts/manifests"},{title:"Normalized Addresses",href:"/learn/concepts/normalized-addresses"},{title:"Sandboxing",href:"/learn/concepts/sandboxing"},{title:"Wayfinder",href:"/learn/concepts/wayfinder"}]},{title:"Guides",links:[{title:"ANTs on Bazar",href:"/learn/guides/ants-on-bazar"}]}],a=[{title:"AR.IO SDK",links:[{title:"Info",href:"/build/ar-io-sdk"},{title:"Getting Started",href:"/build/ar-io-sdk/getting-started"},{title:"Release Notes",href:"/build/ar-io-sdk/release-notes"},{title:"ARIO Class",children:[{title:"Configuration",href:"/build/ar-io-sdk/ario/configuration"},{title:"General",children:[{title:"getInfo",href:"/build/ar-io-sdk/ario/general/get-info"},{title:"getTokenSupply",href:"/build/ar-io-sdk/ario/general/get-token-supply"},{title:"getBalance",href:"/build/ar-io-sdk/ario/general/get-balance"},{title:"getBalances",href:"/build/ar-io-sdk/ario/general/get-balances"},{title:"transfer",href:"/build/ar-io-sdk/ario/general/transfer"}]},{title:"Gateways",children:[{title:"getGateway",href:"/build/ar-io-sdk/ario/gateways/get-gateway"},{title:"getGateways",href:"/build/ar-io-sdk/ario/gateways/get-gateways"},{title:"joinNetwork",href:"/build/ar-io-sdk/ario/gateways/join-network"},{title:"leaveNetwork",href:"/build/ar-io-sdk/ario/gateways/leave-network"},{title:"updateGatewaySettings",href:"/build/ar-io-sdk/ario/gateways/update-gateway-settings"},{title:"increaseOperatorStake",href:"/build/ar-io-sdk/ario/gateways/increase-operator-stake"},{title:"decreaseOperatorStake",href:"/build/ar-io-sdk/ario/gateways/decrease-operator-stake"},{title:"increaseDelegateStake",href:"/build/ar-io-sdk/ario/gateways/increase-delegate-stake"},{title:"decreaseDelegateStake",href:"/build/ar-io-sdk/ario/gateways/decrease-delegate-stake"},{title:"instantWithdrawal",href:"/build/ar-io-sdk/ario/gateways/instant-withdrawal"},{title:"cancelWithdrawal",href:"/build/ar-io-sdk/ario/gateways/cancel-withdrawal"},{title:"redelegateStake",href:"/build/ar-io-sdk/ario/gateways/redelegate-stake"},{title:"getRedelegationFee",href:"/build/ar-io-sdk/ario/gateways/get-redelegation-fee"},{title:"getDelegations",href:"/build/ar-io-sdk/ario/gateways/get-delegations"},{title:"getAllowedDelegates",href:"/build/ar-io-sdk/ario/gateways/get-allowed-delegates"},{title:"getGatewayDelegates",href:"/build/ar-io-sdk/ario/gateways/get-gateway-delegates"},{title:"getGatewayVaults",href:"/build/ar-io-sdk/ario/gateways/get-gateway-vaults"}]},{title:"Vaults",children:[{title:"getVault",href:"/build/ar-io-sdk/ario/vaults/get-vault"},{title:"getVaults",href:"/build/ar-io-sdk/ario/vaults/get-vaults"}]},{title:"Epochs",children:[{title:"getEpoch",href:"/build/ar-io-sdk/ario/epochs/get-epoch"},{title:"getCurrentEpoch",href:"/build/ar-io-sdk/ario/epochs/get-current-epoch"},{title:"getDistributions",href:"/build/ar-io-sdk/ario/epochs/get-distributions"},{title:"getPrescribedObservers",href:"/build/ar-io-sdk/ario/epochs/get-prescribed-observers"},{title:"getObservations",href:"/build/ar-io-sdk/ario/epochs/get-observations"},{title:"saveObservations",href:"/build/ar-io-sdk/ario/epochs/save-observations"}]},{title:"ArNS",children:[{title:"buyRecord",href:"/build/ar-io-sdk/ario/arns/buy-record"},{title:"extendLease",href:"/build/ar-io-sdk/ario/arns/extend-lease"},{title:"getArNSRecord",href:"/build/ar-io-sdk/ario/arns/get-arns-record"},{title:"getArNSRecords",href:"/build/ar-io-sdk/ario/arns/get-arns-records"},{title:"getTokenCost",href:"/build/ar-io-sdk/ario/arns/get-token-cost"},{title:"getDemandFactor",href:"/build/ar-io-sdk/ario/arns/get-demand-factor"},{title:"increaseUndernameLimit",href:"/build/ar-io-sdk/ario/arns/increase-undername-limit"},{title:"getArNSAuction",href:"/build/ar-io-sdk/ario/arns/get-arns-auction"},{title:"getArNSAuctions",href:"/build/ar-io-sdk/ario/arns/get-arns-auctions"},{title:"getArNSReturnedName",href:"/build/ar-io-sdk/ario/arns/get-arns-returned-name"},{title:"getArNSReturnedNames",href:"/build/ar-io-sdk/ario/arns/get-arns-returned-names"},{title:"getArNSAuctionPrices",href:"/build/ar-io-sdk/ario/arns/get-arns-auction-prices"},{title:"submitAuctionBid",href:"/build/ar-io-sdk/ario/arns/submit-auction-bid"}]},{title:"Primary Names",children:[{title:"getPrimaryName",href:"/build/ar-io-sdk/ario/primary-names/get-primary-name"},{title:"getPrimaryNames",href:"/build/ar-io-sdk/ario/primary-names/get-primary-names"},{title:"getPrimaryNameRequest",href:"/build/ar-io-sdk/ario/primary-names/get-primary-name-request"},{title:"requestPrimaryName",href:"/build/ar-io-sdk/ario/primary-names/request-primary-name"}]}]},{title:"ANT Class",children:[{title:"Configuration",href:"/build/ar-io-sdk/ants/configuration"},{title:"getInfo",href:"/build/ar-io-sdk/ants/get-info"},{title:"getLogo",href:"/build/ar-io-sdk/ants/get-logo"},{title:"getState",href:"/build/ar-io-sdk/ants/get-state"},{title:"getOwner",href:"/build/ar-io-sdk/ants/get-owner"},{title:"getControllers",href:"/build/ar-io-sdk/ants/get-controllers"},{title:"getHandlers",href:"/build/ar-io-sdk/ants/get-handlers"},{title:"getRecords",href:"/build/ar-io-sdk/ants/get-records"},{title:"setRecord",href:"/build/ar-io-sdk/ants/set-record"},{title:"setName",href:"/build/ar-io-sdk/ants/set-name"},{title:"setLogo",href:"/build/ar-io-sdk/ants/set-logo"},{title:"setTicker",href:"/build/ar-io-sdk/ants/set-ticker"},{title:"setDescription",href:"/build/ar-io-sdk/ants/set-description"},{title:"setKeywords",href:"/build/ar-io-sdk/ants/set-keywords"},{title:"setController",href:"/build/ar-io-sdk/ants/set-controller"},{title:"removeController",href:"/build/ar-io-sdk/ants/remove-controller"},{title:"removeRecord",href:"/build/ar-io-sdk/ants/remove-record"},{title:"removePrimaryName",href:"/build/ar-io-sdk/ants/remove-primary-name"},{title:"approvePrimaryNameRequest",href:"/build/ar-io-sdk/ants/approve-primary-name-request"},{title:"releaseName",href:"/build/ar-io-sdk/ants/release-name"},{title:"reassignName",href:"/build/ar-io-sdk/ants/reassign-name"},{title:"transfer",href:"/build/ar-io-sdk/ants/transfer"}]},{title:"ANTRegistry Class",children:[{title:"Info",href:"/build/ar-io-sdk/ant-registry"},{title:"accessControlList",href:"/build/ar-io-sdk/ant-registry/access-control-list"},{title:"register",href:"/build/ar-io-sdk/ant-registry/register"}]}]},{title:"Gateways",links:[{title:"Architecture",href:"/build/gateways"},{title:"Gateway Network",href:"/build/gateways/gateway-network"},{title:"Setup and Operation",href:"/build/gateways/setup-and-operation",children:[{title:"Linux Setup",href:"/build/gateways/linux-setup"},{title:"Windows Setup",href:"/build/gateways/windows-setup"},{title:"Join The Network",href:"/build/gateways/join-network"},{title:"ArNS Resolution",href:"/build/gateways/arns-resolution"},{title:"Admin Configurations",href:"/build/gateways/admin"},{title:"Advanced Configurations",href:"/build/gateways/advanced"},{title:"Environmental Variables",href:"/build/gateways/env"},{title:"Troubleshooting",href:"/build/gateways/troubleshooting"},{title:"Upgrading",href:"/build/gateways/upgrading"},{title:"Moderation",href:"/build/gateways/moderation"},{title:"Bundler Sidecar",href:"/build/gateways/bundler"},{title:"Automating SSL",href:"/build/gateways/networking",children:[{title:"Cloudflare",href:"/build/gateways/networking/certbot/cloudflare"},{title:"Namecheap",href:"/build/gateways/networking/certbot/namecheap"}]}]},{title:"Observer",href:"/build/gateways/observer"},{title:"Release Notes",href:"/build/gateways/release-notes"}]},{title:"Guides",href:"/build/guides",links:[{title:"GQL",href:"/build/guides/gql"},{title:"Managing Undernames",href:"/build/guides/managing-undernames"},{title:"Deploy to Arweave",children:[{title:"Permaweb Deploy",href:"/build/guides/permaweb-deploy"},{title:"Arlink",href:"/build/guides/arlink"}]},{title:"Projects",children:[{title:"ArNS Viewer",href:"/build/guides/arns-viewer"}]}]}]}}]);