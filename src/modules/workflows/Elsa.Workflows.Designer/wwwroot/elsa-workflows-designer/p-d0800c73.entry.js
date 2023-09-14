import{r as t,c as i,h as s}from"./p-a7a3baa1.js";import{l as o}from"./p-e71312f9.js";import{ah as e,o as n,C as a,D as l,B as r,ai as c,N as d,aj as h,Y as u}from"./p-dd7ad463.js";import"./p-fcfa9e22.js";import{s as w}from"./p-1de51046.js";import{C as v,F as p}from"./p-93025d0a.js";import{I as f}from"./p-95042f88.js";import{I as y}from"./p-5b99439b.js";import{W as b}from"./p-d3b33631.js";import"./p-72dc819a.js";import"./p-144a434e.js";import"./p-4031f4ff.js";import"./p-ec4413cd.js";import"./p-37e9f5c1.js";const m=class{constructor(c){t(this,c),this.activityUpdated=i(this,"activityUpdated",7),this.deleteActivityRequested=i(this,"deleteActivityRequested",7),this.getSelectedTabIndex=t=>{let e=this.selectedTabIndex;return e>=t.length&&(e=t.length-1),e<0&&(e=0),e},this.createTabs=()=>{const t=this.findActivityDescriptor(),e=t.kind==d.Task,i=t?[{displayText:"Settings",order:10,content:()=>this.renderInputTab()},{displayText:"General",order:0,content:()=>this.renderCommonTab()}]:[];if(t.outputs.length>0){const t={displayText:"Output",order:11,content:()=>this.renderOutputTab()};i.push(t)}if(e){const t={displayText:"Task",order:12,content:()=>this.renderTaskTab()};i.push(t)}return i},this.createInputs=()=>{const t=this.activity,e=t.id,i=this.findActivityDescriptor(),o=this.inputDriverRegistry,n=o=>this.activityUpdated.emit({newId:e,originalId:e,activity:t,activityDescriptor:i}),a=i.inputs.filter((t=>t.isBrowsable));return a.map((e=>{const a={activity:t,activityDescriptor:i,inputDescriptor:e,notifyInputChanged:()=>n(),inputChanged:(t,i)=>this.onInputPropertyEditorChanged(e,t,i)},r=o.get(a),d=this.workflowDefinitionId,l=i.typeName,c=e.name;return{inputContext:a,inputControl:s(f.Provider,{state:{workflowDefinitionId:d,activityType:l,propertyName:c}},null==r?void 0:r.renderInput(a))}}))},this.findActivityDescriptor=()=>this.activity?w.activityDescriptors.find((t=>t.typeName==this.activity.type&&t.version==this.activity.version)):null,this.onSelectedTabIndexChanged=t=>this.selectedTabIndex=t.detail.selectedTabIndex,this.onActivityIdChanged=t=>{const e=this.activity,i=e.id,o=t.target.value,s=this.findActivityDescriptor();e.id=o,this.activityUpdated.emit({newId:o,originalId:i,activity:e,activityDescriptor:s})},this.onInputPropertyEditorChanged=(t,i,s)=>{const n=this.activity,a=t.name,r=t.isWrapped,d=o.camelCase(a);if(r){let o=n[d];const a={type:s,value:i};o||(o={typeName:t.typeName,memoryReference:{id:e()},expression:a}),o.expression=a,n[d]=o}else n[d]=i;this.updateActivity(a)},this.onOutputPropertyEditorChanged=(t,e)=>{const i=this.activity,s=t.name,n=o.camelCase(s),a=e.split("::")[1],r={typeName:t.typeName,memoryReference:{id:a}};i[n]=r,this.updateActivity(s)},this.updateActivity=(t,e)=>{const i=this.findActivityDescriptor(),o=this.activity,s=o.id;this.activityUpdated.emit({newId:s,originalId:s,activity:o,activityDescriptor:i})},this.renderCommonTab=()=>{var t,e,i,o,n,a,r;const{activity:d}=this.renderContext,l=d.id,c=null!==(e=null===(t=d.metadata)||void 0===t?void 0:t.displayText)&&void 0!==e?e:"",h=null!==(r=null!==(a=null!==(o=null===(i=d.customProperties)||void 0===i?void 0:i.canStartWorkflow)&&void 0!==o?o:null===(n=null==d?void 0:d.customProperties)||void 0===n?void 0:n.CanStartWorkflow)&&void 0!==a?a:d.canStartWorkflow)&&void 0!==r&&r;return s("div",{key:`${l}`},s(p,{fieldId:"ActivityId",label:"ID",hint:"The ID of the activity."},s("input",{type:"text",name:"ActivityId",id:"ActivityId",value:l,onChange:t=>this.onActivityIdChanged(t)})),s(p,{fieldId:"ActivityDisplayText",label:"Display Text",hint:"The text to display on the activity in the designer."},s("input",{type:"text",name:"ActivityDisplayText",id:"ActivityDisplayText",value:c,onChange:t=>this.onActivityDisplayTextChanged(t)})),s(v,{fieldId:"CanStartWorkflow",label:"Can start workflow",hint:"When enabled, this activity can be used as a trigger to automatically start the workflow."},s("input",{type:"checkbox",name:"CanStartWorkflow",id:"CanStartWorkflow",value:"true",checked:h,onChange:t=>this.onCanStartWorkflowChanged(t)})))},this.renderInputTab=()=>{const{activity:t,inputs:e}=this.renderContext,i=t.id;return s("div",{key:`${i}`},e.filter((t=>!!t.inputControl)).map((e=>{const i=`${t.id}-${e.inputContext.inputDescriptor.name}`;return s("div",{key:i},e.inputControl)})))},this.renderOutputTab=()=>{const{activity:t,activityDescriptor:e}=this.renderContext,i=e.outputs,a=this.outputs||[],r=this.variables||[],d=`${t.id}`,l=[null];return r.length>0&&l.push({label:"Variables",items:[...r.map((t=>({value:t.id,name:t.name})))],kind:"variable"}),a.length>0&&l.push({label:"Outputs",items:[...a.map((t=>({value:t.name,name:t.name})))],kind:"output"}),s("div",{key:d},i.map((e=>{var i;const a=`${t.id}-${e.name}`,r=n(e.displayName)?e.name:e.displayName,d=o.camelCase(e.name),c=t[d],h=e.typeName,u=w.variableDescriptors.find((t=>t.typeName==h)),y=null!==(i=null==u?void 0:u.displayName)&&void 0!==i?i:h;return s("div",{key:a},s(p,{fieldId:a,label:r,hint:e.description},s("div",{class:"tw-relative"},s("select",{onChange:t=>this.onOutputPropertyEditorChanged(e,t.currentTarget.value)},l.map((t=>{var e;if(!t)return s("option",{value:"",selected:!(null===(e=null==c?void 0:c.memoryReference)||void 0===e?void 0:e.id)},"-");const i=t.items;return s("optgroup",{label:t.label},i.map((e=>{var i;const o=(null===(i=null==c?void 0:c.memoryReference)||void 0===i?void 0:i.id)==e.value;return s("option",{value:`${t.kind}::${e.value}`,selected:o},e.name)})))}))),s("div",{class:"tw-pointer-events-none tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-items-center pr-10"},s("span",{class:"tw-text-gray-500 sm:tw-text-sm"},y)))))})))},this.renderTaskTab=()=>{var t,e,i;const{activity:o}=this.renderContext,n=o.id,a=null!==(i=null!==(e=null===(t=o.customProperties)||void 0===t?void 0:t.RunAsynchronously)&&void 0!==e?e:o.runAsynchronously)&&void 0!==i&&i;return s("div",{key:`${n}:task`},s(v,{fieldId:"RunAsynchronously",label:"Execute asynchronously",hint:"When enabled, this activity will execute asynchronously and suspend workflow execution until the activity is finished."},s("input",{type:"checkbox",name:"RunAsynchronously",id:"RunAsynchronously",value:"true",checked:a,onChange:t=>this.onRunAsynchronouslyChanged(t)})))},this.workflowDefinitionId=void 0,this.activity=void 0,this.variables=[],this.outputs=[],this.isReadonly=void 0,this.selectedTabIndex=0,this.inputDriverRegistry=a.get(l),this.eventBus=a.get(r)}async show(){await this.slideOverPanel.show()}async hide(){await this.slideOverPanel.hide()}async componentWillRender(){var t,e;const i=this.activity,o=this.findActivityDescriptor(),s=null!==(e=null!==(t=null==o?void 0:o.displayName)&&void 0!==t?t:null==o?void 0:o.typeName)&&void 0!==e?e:"Unknown Activity",n=this.createInputs(),a=this.createTabs(),r=()=>this.activityUpdated.emit({activity:i,activityDescriptor:o});this.renderContext={activity:i,activityDescriptor:o,title:s,inputs:n,tabs:a,notifyActivityChanged:()=>r()},await this.eventBus.emit(c.Displaying,this,this.renderContext)}render(){const{activity:t,activityDescriptor:e,tabs:i}=this.renderContext,o=t.id,n=e.displayName,a=this.getSelectedTabIndex(i);return s("elsa-form-panel",{isReadonly:this.isReadonly,mainTitle:o,subTitle:n,orientation:"Landscape",tabs:i,selectedTabIndex:a,onSelectedTabIndexChanged:t=>this.onSelectedTabIndexChanged(t),actions:[]})}onActivityDisplayTextChanged(t){const e=this.activity,i=t.target;e.metadata=Object.assign(Object.assign({},e.metadata),{displayText:i.value}),this.updateActivity()}onCanStartWorkflowChanged(t){const e=this.activity,i=t.target;e.customProperties.canStartWorkflow=i.checked,this.updateActivity()}onRunAsynchronouslyChanged(t){const e=this.activity,i=t.target;e.customProperties.RunAsynchronously=i.checked,this.updateActivity()}},k=class{constructor(e){t(this,e),this.autoLayout=i(this,"autoLayout",7),this.zoomToFit=void 0}render(){return s("div",{class:"elsa-panel-toolbar tw-flex tw-justify-center tw-absolute tw-border-b tw-border-gray-200 tw-top-0 tw-px-1 tw-pl-4 tw-pb-2 tw-text-sm tw-bg-white tw-z-10 tw-space-x-2"},s("elsa-dropdown-button",{text:"Auto-layout",theme:"Primary",items:[{text:"Horizontally",handler:()=>this.autoLayout.emit("LR")},{text:"Vertically",handler:()=>this.autoLayout.emit("TB")}],class:"tw-mt-2"}),s("button",{onClick:this.zoomToFit,class:"elsa-btn elsa-btn-primary"},"Zoom to fit"))}},g=class{constructor(e){t(this,e),this.onTabSelected=(t,e)=>{t.preventDefault(),this.selectedTabIndex=e},this.graph=void 0,this.isReadonly=void 0,this.selectedTabIndex=0}render(){const t=this.selectedTabIndex;return s("div",{class:"activity-list tw-absolute tw-inset-0 tw-overflow-hidden"},s("div",{class:"tw-h-full tw-flex tw-flex-col"},s("div",{class:"tw-border-b tw-border-gray-200"},s("nav",{class:"-tw-mb-px tw-flex","aria-label":"Tabs"},s("a",{href:"#",onClick:t=>this.onTabSelected(t,0),class:(0==t?"tw-border-blue-500 tw-text-blue-600":"tw-border-transparent tw-text-gray-500 hover:tw-text-gray-700 hover:tw-border-gray-300")+" tw-w-1/2 tw-py-4 tw-px-1 tw-text-center tw-border-b-2 tw-font-medium tw-text-sm"},"Activities"))),s("div",{class:"tw-flex-1 tw-relative"},s("div",{class:"tw-absolute tw-inset-0 tw-overflow-y-scroll"},s("elsa-workflow-definition-editor-toolbox-activities",{isReadonly:this.isReadonly,graph:this.graph,class:0==t?"":"hidden"})))))}},x=class{constructor(e){t(this,e),this.workflowPropsUpdated=i(this,"workflowPropsUpdated",7),this.versionSelected=i(this,"versionSelected",7),this.deleteVersionClicked=i(this,"deleteVersionClicked",7),this.revertVersionClicked=i(this,"revertVersionClicked",7),this.createModel=async()=>{var t,e,i;const o={tabModels:[]},a=this.workflowDefinition,r=a.options||{},d=null!==(t=r.autoUpdateConsumingWorkflows)&&void 0!==t&&t,l=null!==(e=r.usableAsActivity)&&void 0!==e&&e;if(!a)return void(this.model=o);const c={name:"properties",tab:null,Widgets:[{name:"workflowName",content:()=>{const t=this.workflowDefinition;return s(p,{label:"Name",fieldId:"workflowName",hint:"The name of the workflow."},s("input",{type:"text",name:"workflowName",id:"workflowName",value:t.name,onChange:t=>this.onPropertyEditorChanged((e=>e.name=t.target.value))}))},order:0},{name:"workflowDescription",content:()=>{const t=this.workflowDefinition;return s(p,{label:"Description",fieldId:"workflowDescription",hint:"A brief description about the workflow."},s("textarea",{name:"workflowDescription",id:"workflowDescription",value:t.description,rows:6,onChange:t=>this.onPropertyEditorChanged((e=>e.description=t.target.value))}))},order:5},{name:"workflowInfo",content:()=>{const t=this.workflowDefinition,e={"Definition ID":n(t.definitionId)?"(new)":t.definitionId,"Version ID":n(t.id)?"(new)":t.id,Version:t.version.toString(),Status:t.isPublished?"Published":"Draft",Readonly:t.isReadonly?"Yes":"No"};return s(y,{title:"Information",dictionary:e})},order:10}]};c.tab={displayText:"Properties",order:0,content:()=>this.renderPropertiesTab(c)};const u={name:"variables",tab:{displayText:"Variables",order:5,content:()=>this.renderVariablesTab()}},f=w.workflowActivationStrategyDescriptors,m=f.length>0?f[0]:null,b=null!==(i=null==m?void 0:m.description)&&void 0!==i?i:"",g=[{name:"workflowActivationValidator",order:0,content:()=>s(p,{label:"Activation Strategy",fieldId:"workflowActivationStrategyType",hint:b},s("select",{name:"workflowActivationStrategyType",onChange:t=>this.onPropertyEditorChanged((e=>{const i=t.target;r.activationStrategyType=i.value,e.options=r;const o=i.closest(".form-entry").getElementsByClassName("form-field-hint")[0],s=f.find((t=>t.typeName==i.value));o.innerText=s.description}))},f.map((t=>s("option",{value:t.typeName,selected:t.typeName==r.activationStrategyType},t.displayName)))))},{name:"usableAsActivity",order:0,content:()=>s(v,{label:"Usable As Activity",fieldId:"UsableAsActivity",hint:"Allow this workflow to be used as an activity."},s("input",{type:"checkbox",id:"UsableAsActivity",name:"UsableAsActivity",checked:l,onChange:t=>this.onPropertyEditorChanged((e=>{const i=t.target;e.options.usableAsActivity=i.checked,this.createModel()}))}))},{name:"autoUpdateConsumingWorkflows",order:0,content:()=>s(v,{fieldId:"UpdateConsumingWorkflows",label:"Auto-update consuming workflows",hint:"When you publish a new version, all of the consuming workflows will be updated to point to the new version of this workflow."},s("input",{type:"checkbox",name:"UpdateConsumingWorkflows",id:"UpdateConsumingWorkflows",checked:d,onChange:t=>this.onPropertyEditorChanged((e=>{const i=t.target;r.autoUpdateConsumingWorkflows=i.checked,e.options=r}))}))}],k={name:"settings",tab:{displayText:"Settings",order:10,content:()=>s("elsa-widgets",{widgets:g})}},x={name:"input-output",tab:{displayText:"Input/output",order:15,content:()=>this.renderInputOutputTab()}},C={name:"versionHistory",tab:{displayText:"Version History",order:20,content:()=>this.renderVersionHistoryTab()}};o.tabModels=[c,u,k,C,x];const T={workflowDefinition:a,model:o,notifyWorkflowDefinitionChanged:()=>this.onWorkflowDefinitionUpdated()};await this.eventBus.emit(h.Displaying,this,T),this.model=o},this.renderPropertiesTab=t=>s("elsa-widgets",{widgets:t.Widgets}),this.renderVariablesTab=()=>{var t,e;const i=null!==(e=null===(t=this.workflowDefinition)||void 0===t?void 0:t.variables)&&void 0!==e?e:[];return s("div",null,s("elsa-variables-editor",{variables:i,onVariablesChanged:t=>this.onVariablesUpdated(t)}))},this.renderInputOutputTab=()=>{var t,e,i,o,n,a;const r=null!==(e=null===(t=this.workflowDefinition)||void 0===t?void 0:t.inputs)&&void 0!==e?e:[],d=null!==(o=null===(i=this.workflowDefinition)||void 0===i?void 0:i.outputs)&&void 0!==o?o:[],l=null!==(a=null===(n=this.workflowDefinition)||void 0===n?void 0:n.outcomes)&&void 0!==a?a:[];return s("div",null,s("elsa-workflow-definition-input-output-settings",{inputs:r,outputs:d,outcomes:l,onInputsChanged:t=>this.onInputsUpdated(t),onOutputsChanged:t=>this.onOutputsUpdated(t),onOutcomesChanged:t=>this.onOutcomesUpdated(t)}))},this.renderVersionHistoryTab=()=>s("div",null,s("elsa-workflow-definition-version-history",{selectedVersion:this.workflowDefinition,workflowVersions:this.workflowVersions})),this.onSelectedTabIndexChanged=t=>this.selectedTabIndex=t.detail.selectedTabIndex,this.onPropertyEditorChanged=t=>{const e=this.workflowDefinition;t(e),this.workflowPropsUpdated.emit({workflowDefinition:e})},this.onVariablesUpdated=async t=>this.onPropsUpdated("variables",t.detail),this.onInputsUpdated=async t=>this.onPropsUpdated("inputs",t.detail),this.onOutputsUpdated=async t=>this.onPropsUpdated("outputs",t.detail),this.onOutcomesUpdated=async t=>this.onPropsUpdated("outcomes",t.detail),this.onPropsUpdated=async(t,e)=>{const i=this.workflowDefinition;if(!i||!i.isLatest)return void console.debug("onPropsUpdated: workflowDefinition is not latest");i[t]=e;const o=this.getPropEditorSectionByPropName(t);this.workflowPropsUpdated.emit({workflowDefinition:i,updatedTab:o}),await this.createModel()},this.onWorkflowDefinitionUpdated=()=>{const t=this.workflowDefinition;this.workflowPropsUpdated.emit({workflowDefinition:t})},this.workflowDefinition=void 0,this.workflowVersions=void 0,this.readonly=void 0,this.model=void 0,this.selectedTabIndex=0,this.eventBus=a.get(r),this.workflowDefinitionApi=a.get(u),this.model={tabModels:[]}}async show(){await this.slideOverPanel.show()}async hide(){await this.slideOverPanel.hide()}async onWorkflowDefinitionChanged(){await this.createModel()}async onWorkflowVersionsChanged(){await this.createModel()}async componentWillLoad(){await this.createModel()}render(){var t;const e=this.workflowDefinition,i=null!==(t=null==e?void 0:e.name)&&void 0!==t?t:"Untitled",o=this.model.tabModels.map((t=>t.tab));return s("elsa-form-panel",{isReadonly:this.readonly,mainTitle:i,subTitle:"Workflow Definition",tabs:o,selectedTabIndex:this.selectedTabIndex,onSelectedTabIndexChanged:t=>this.onSelectedTabIndexChanged(t)})}getPropEditorSectionByPropName(t){const e=Object.keys(b).find((e=>b[e]===t));return e?b[e]:null}static get watchers(){return{workflowDefinition:["onWorkflowDefinitionChanged"],workflowVersions:["onWorkflowVersionsChanged"]}}};export{m as elsa_activity_properties_editor,k as elsa_workflow_definition_editor_toolbar,g as elsa_workflow_definition_editor_toolbox,x as elsa_workflow_definition_properties_editor};