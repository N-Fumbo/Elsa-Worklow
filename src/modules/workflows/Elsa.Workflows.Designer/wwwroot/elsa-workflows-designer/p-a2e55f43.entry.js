import{r as t,h as o}from"./p-a7a3baa1.js";import{R as s,l as i}from"./p-dd7ad463.js";import"./p-fcfa9e22.js";import"./p-1de51046.js";import{F as e}from"./p-93025d0a.js";import"./p-144a434e.js";import"./p-72dc819a.js";import"./p-e71312f9.js";import"./p-4031f4ff.js";import"./p-ec4413cd.js";const r=class{constructor(e){t(this,e),this.onChange=t=>{const e=t.detail.value;this.inputContext.inputChanged(e,s.Literal)},this.inputContext=void 0}render(){var t;const a=this.inputContext,s=a.inputDescriptor,r=s.name,n=s.displayName,l=s.description,p=s.options||{},u=s.defaultValue,d=i(a);let m=this.getValueOrDefault(null===(t=null==d?void 0:d.expression)||void 0===t?void 0:t.value,u);return null==m&&(m=s.defaultValue),o(e,{label:n,fieldId:r,hint:l},o("elsa-monaco-editor",Object.assign({value:m},p,{onValueChanged:this.onChange})))}getValueOrDefault(t,e){var a;return null!==(a=null!=t?t:e)&&void 0!==a?a:""}};export{r as elsa_code_editor_input};