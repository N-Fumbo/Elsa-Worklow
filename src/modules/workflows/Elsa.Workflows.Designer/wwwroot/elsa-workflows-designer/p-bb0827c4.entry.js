import{r as t,h as s}from"./p-a7a3baa1.js";import{l as e}from"./p-e71312f9.js";import{R as n,m as o}from"./p-dd7ad463.js";import"./p-fcfa9e22.js";import"./p-1de51046.js";import{P as a,T as i}from"./p-2ad6994e.js";import"./p-72dc819a.js";import"./p-144a434e.js";import"./p-4031f4ff.js";const l=class{constructor(s){t(this,s),this.supportedSyntaxes=[n.JavaScript,n.Literal],this.updateActivity=()=>{const t=this.inputContext,s=this.inputContext.activity,a=t.inputDescriptor.name;s[e.camelCase(a)]=this.cases,this.inputContext.notifyInputChanged()},this.inputContext=void 0,this.cases=[]}onInputContextChanged(t){this.updateCases()}componentWillLoad(){this.updateCases()}updateCases(){const t=this.inputContext,s=this.inputContext.activity,a=t.inputDescriptor.name,i=e.camelCase(a);this.cases=s[i]||[]}onAddCaseClick(){const t={label:`Case ${this.cases.length+1}`,condition:{type:n.JavaScript,value:""}};this.cases=[...this.cases,t],this.updateActivity()}onDeleteCaseClick(t){this.cases=this.cases.filter((s=>s!=t)),this.updateActivity()}onCaseLabelChanged(t,s){s.label=t.currentTarget.value.trim(),this.updateActivity()}onCaseExpressionChanged(t,s){s.condition={type:s.condition.type,value:t.detail.value},this.updateActivity()}onCaseSyntaxChanged(t,s){const e=t.currentTarget.value;s.condition=Object.assign(Object.assign({},s.condition),{type:e}),this.cases=[...this.cases],this.updateActivity()}render(){const t=this.inputContext.inputDescriptor.displayName,e=this.cases,n=this.supportedSyntaxes;return s("div",null,s("div",{class:"tw-p-4"},s("label",null,t)),s("table",{class:"tw-mt-1"},s("thead",null,s("tr",null,s("th",{class:"tw-w-3/12"},"Name"),s("th",{class:"tw-w-8/12"},"Expression"),s("th",{class:"tw-w-1/12"}," "))),s("tbody",null,e.map(((t,e)=>{const a=t.condition,l=a.value,p=a.type,c=o(a.type);return s("tr",{key:`case-${e}`},s("td",{class:"tw-py-2 tw-pr-5"},s("input",{type:"text",value:t.label,onChange:s=>this.onCaseLabelChanged(s,t)})),s("td",{class:"tw-py-2 tw-pl-5"},s("div",{class:"tw-mt-1 tw-relative tw-rounded-md tw-shadow-sm tw-h-full"},s("elsa-monaco-editor",{key:`monaco-editor-${e}`,value:l,language:c,singleLineMode:!0,editorHeight:"2.75em",padding:"tw-pt-1.5 tw-pl-1 tw-pr-28",onValueChanged:s=>this.onCaseExpressionChanged(s,t)}),s("div",{class:"tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-items-center"},s("select",{onChange:s=>this.onCaseSyntaxChanged(s,t),class:"focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-h-full tw-py-0 tw-pl-2 tw-pr-7 tw-border-transparent tw-bg-transparent tw-text-gray-500 sm:tw-text-sm tw-rounded-md"},n.map((t=>s("option",{selected:t==p},t))))))),s("td",null,s("button",{type:"button",onClick:()=>this.onDeleteCaseClick(t),class:"elsa-icon-button"},s(i,null))))})))),s("div",{class:"tw-p-4"},s("button",{type:"button",onClick:()=>this.onAddCaseClick(),class:"elsa-btn"},s(a,null),"Add Case")))}static get watchers(){return{inputContext:["onInputContextChanged"]}}};export{l as elsa_switch_editor};