import{r as s,h as t}from"./p-a7a3baa1.js";import{F as o}from"./p-93025d0a.js";import{n as a}from"./p-dd7ad463.js";import"./p-fcfa9e22.js";import"./p-1de51046.js";import"./p-ec4413cd.js";import"./p-144a434e.js";import"./p-72dc819a.js";import"./p-e71312f9.js";import"./p-4031f4ff.js";const r=class{constructor(t){s(this,t),this.onPropertyEditorChanged=t=>{var s;const o=t.detail,e=this.inputContext.activity,i=null!==(s=e.expectedStatusCodes)&&void 0!==s?s:[];for(const t of o)-1==i.findIndex((s=>s.statusCode.toString()==t))&&i.push({statusCode:parseInt(t)});for(let t=i.length-1;t>=0;t--){const s=i[t].statusCode.toString();-1==o.findIndex((t=>t==s))&&i.splice(t,1)}e.expectedStatusCodes=i,this.inputContext.notifyInputChanged()},this.inputContext=void 0}render(){var s;const e=this.inputContext,i=e.inputDescriptor,d=i.name,n=i.displayName,r=i.description,p=(null!==(s=a(e))&&void 0!==s?s:[]).map((t=>t.statusCode.toString()));return t(o,{fieldId:d,label:n,hint:r},t("elsa-input-tags",{fieldId:d,values:p,onValueChanged:this.onPropertyEditorChanged,placeHolder:"Add status code"}))}};export{r as elsa_http_status_codes_editor};