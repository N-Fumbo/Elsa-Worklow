import{r as t,h as s}from"./p-a7a3baa1.js";import{R as o,l as i}from"./p-dd7ad463.js";import"./p-fcfa9e22.js";import"./p-1de51046.js";import"./p-144a434e.js";import"./p-72dc819a.js";import"./p-e71312f9.js";import"./p-4031f4ff.js";const n=class{constructor(e){t(this,e),this.getEditorHeight=t=>"Large"===(t.editorHeight||"Default")?{propertyEditor:"20em",textArea:10}:{propertyEditor:"15em",textArea:6},this.onPropertyEditorChanged=t=>{const e=t.target;this.inputContext.inputChanged(e.value,o.Literal)},this.onExpressionChanged=t=>{this.inputContext.inputChanged(t.detail.expression,t.detail.syntax)},this.inputContext=void 0}render(){var t,e,o;const n=this.inputContext,r=n.inputDescriptor,a=r.name,p=r.name,l=r.displayName,d=r.description,u=i(n),h=r.options||{},x=this.getEditorHeight(h),g=r.defaultValue,m=this.getValueOrDefault(null===(t=null==u?void 0:u.expression)||void 0===t?void 0:t.value,g),v=null!==(o=null===(e=null==u?void 0:u.expression)||void 0===e?void 0:e.type)&&void 0!==o?o:r.defaultSyntax;return s("elsa-input-control-switch",{label:l,hint:d,syntax:v,expression:m,onExpressionChanged:this.onExpressionChanged},s("textarea",{name:a,id:p,value:m,rows:x.textArea,onChange:this.onPropertyEditorChanged}))}getValueOrDefault(t,e){var i;return null!==(i=null!=t?t:e)&&void 0!==i?i:""}};export{n as elsa_multi_line_input};