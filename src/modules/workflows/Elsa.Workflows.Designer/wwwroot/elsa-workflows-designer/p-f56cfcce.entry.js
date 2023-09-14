import{r as t,c as e,h as i,H as r}from"./p-a7a3baa1.js";import{l as s,t as o}from"./p-3ff104be.js";import{l as n}from"./p-e71312f9.js";import{D as a}from"./p-615b6ee0.js";import"./p-72dc819a.js";const w=class{constructor(i){t(this,i),this.itemSelected=e(this,"itemSelected",7),this.menuOpened=e(this,"menuOpened",7),this.renderIcon=()=>this.icon?this.icon:void 0,this.text=void 0,this.icon=void 0,this.handler=void 0,this.origin=a.TopLeft,this.items=[],this.theme="Primary",this.disabled=void 0}render(){var t;const e=this.disabled,n="Secondary"==this.theme?"tw-border-gray-300 tw-bg-white tw-text-gray-700 hover:tw-bg-gray-50 focus:tw-ring-blue-500 hover:tw-border-blue-500"+(1==e?" tw-opacity-50":""):"tw-border-blue-600 tw-bg-blue-600 tw-text-white hover:tw-bg-blue-700 focus:tw-ring-blue-600 hover:tw-border-blue-700"+(1==e?" tw-opacity-50":""),o="Secondary"==this.theme?"tw-border-gray-300 tw-bg-white tw-text-gray-700 hover:tw-bg-gray-50 hover:tw-border-blue-500"+(1==e?" tw-opacity-50":""):"tw-border-blue-600 tw-bg-blue-600 tw-text-white hover:tw-bg-blue-700 hover:tw-border-blue-700"+(1==e?" tw-opacity-50":""),s=null!==(t=this.handler)&&void 0!==t?t:()=>this.toggleMenu();return i(r,{class:"tw-block",ref:t=>this.element=t},i("span",{class:"tw-relative tw-z-0 tw-inline-flex tw-shadow-sm tw-rounded-md"},i("button",{type:"button",disabled:e,class:`tw-relative tw-inline-flex tw-items-center tw-px-4 tw-py-2 tw-rounded-l-md tw-border tw-text-sm tw-font-medium focus:tw-z-10 focus:tw-outline-none ${n}`,onClick:s},this.renderIcon(),this.text),i("div",{class:"-tw-ml-px tw-block"},i("button",{type:"button",disabled:e,class:`tw-relative tw-inline-flex tw-items-center tw-px-2 tw-py-2 tw-rounded-r-md tw-border tw-text-sm tw-font-medium focus:tw-z-10 focus:tw-outline-none ${o}`,onClick:()=>this.toggleMenu(),"aria-expanded":"true","aria-haspopup":"true"},i("svg",{class:"tw-h-5 tw-w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},i("path",{"fill-rule":"evenodd",d:"M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z","clip-rule":"evenodd"}))),this.renderMenu())))}renderMenu(){if(0==this.items.length)return;const t=this.getOriginClass();return i("div",{ref:t=>this.contextMenu=t,"data-transition-enter":"tw-transition tw-ease-out tw-duration-100","data-transition-enter-start":"tw-transform tw-opacity-0 tw-scale-95","data-transition-leave":"tw-transition tw-ease-in tw-duration-75","data-transition-leave-start":"tw-transform tw-opacity-100 tw-scale-100","data-transition-leave-end":"tw-transform tw-opacity-0 tw-scale-95",class:`hidden ${t} tw-z-10 tw-absolute tw-mt-2 tw-w-56 tw-rounded-md tw-shadow-lg tw-bg-white tw-ring-1 tw-ring-black tw-ring-opacity-5`},i("div",{class:"tw-py-1",role:"menu","aria-orientation":"vertical"},this.renderItems()))}renderItems(){const t=n.groupBy(this.items,(t=>{var e;return null!==(e=t.group)&&void 0!==e?e:0}));return i("div",{class:"tw-divide-y tw-divide-gray-100 focus:tw-outline-none",role:"menu","aria-orientation":"vertical","aria-labelledby":"option-menu"},n.map(t,(t=>i("div",{class:"tw-py-1",role:"none"},t.map((t=>{const e=t.isSelected?"tw-bg-blue-600 hover:tw-bg-blue-700 tw-text-white":"hover:tw-bg-gray-100 tw-text-gray-700 hover:tw-text-gray-900";return i("div",{class:"tw-py-1",role:"none"},i("a",{href:"#",onClick:e=>this.onItemClick(e,t),class:`tw-block tw-px-4 tw-py-2 tw-text-sm ${e}`,role:"menuitem"},t.text))}))))))}closeContextMenu(){this.contextMenu&&s(this.contextMenu)}toggleMenu(){this.contextMenu&&(o(this.contextMenu),this.menuOpened.emit())}getOriginClass(){switch(this.origin){case a.TopLeft:return"tw-left-0 tw-origin-top-left";case a.TopRight:default:return"tw-right-0 tw-origin-top-right"}}async onItemClick(t,e){t.preventDefault(),e.handler&&e.handler(),this.itemSelected.emit(e),this.closeContextMenu()}onWindowClicked(t){const e=t.target;this.element.contains(e)||this.closeContextMenu()}};export{w as elsa_dropdown_button};