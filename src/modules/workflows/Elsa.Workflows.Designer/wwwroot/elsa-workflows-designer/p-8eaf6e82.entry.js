import{r as t,h as r}from"./p-a7a3baa1.js";const e=class{constructor(n){t(this,n),this.renderButtons=()=>{const t=this.buttons;if(0!=t.length)return r("div",{class:"tw-py-1"},t.map(this.renderButton))},this.renderButton=(t,n)=>{const o=1==this.buttons.length?"tw-relative tw-rounded-l-md tw-rounded-r-md":0==n?"tw-relative tw-rounded-l-md":n==this.buttons.length-1?"-tw-ml-px tw-rounded-r-md":"-tw-ml-px";return r("button",{onClick:r=>e.onButtonClick(r,t),type:"button",class:`${o} tw-inline-flex tw-items-center tw-px-4 tw-py-2 tw-border tw-border-gray-300 tw-bg-white tw-text-sm tw-font-medium tw-text-gray-700 hover:tw-bg-gray-50 focus:tw-z-10 focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-blue-500 focus:tw-border-blue-500`},t.text)},this.buttons=[]}render(){return r("span",{class:"tw-relative tw-z-0 tw-inline-flex tw-rounded-md"},this.renderButtons())}static async onButtonClick(t,e){t.preventDefault(),e.clickHandler&&e.clickHandler(t)}};export{e as elsa_button_group};