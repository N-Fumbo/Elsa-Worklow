import{r as t,h as s}from"./p-a7a3baa1.js";import{R as o,l as i}from"./p-dd7ad463.js";import"./p-fcfa9e22.js";import"./p-1de51046.js";import"./p-144a434e.js";import"./p-72dc819a.js";import"./p-e71312f9.js";import"./p-4031f4ff.js";const n=class{constructor(e){t(this,e),this.onPropertyEditorChanged=t=>{const e=t.target;this.inputContext.inputChanged(e.value,o.Literal)},this.onExpressionChanged=t=>{this.inputContext.inputChanged(t.detail.expression,t.detail.syntax)},this.inputContext=void 0}render(){var t,e,n;const o=this.inputContext,a=o.inputDescriptor,r=a.name,p=a.name,l=a.displayName,d=a.description,u=i(o),h=a.defaultValue,x=this.getValueOrDefault(null===(t=null==u?void 0:u.expression)||void 0===t?void 0:t.value,h),m=null!==(n=null===(e=null==u?void 0:u.expression)||void 0===e?void 0:e.type)&&void 0!==n?n:a.defaultSyntax;return s("elsa-input-control-switch",{label:l,hint:d,syntax:m,expression:x,onExpressionChanged:this.onExpressionChanged},s("input",{type:"text",name:r,id:p,value:x,onChange:this.onPropertyEditorChanged}))}getValueOrDefault(t,e){var n;return null!==(n=null!=t?t:e)&&void 0!==n?n:""}};export{n as elsa_single_line_input};