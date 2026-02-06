import{Cc as Pe,Gc as Ie,Mc as pe,Nc as $,Pc as Ve,Qc as _,ad as ze,b as we,c as Te,d as De,e as ke,ed as ae,j as Be,jc as Ee,k as ie,m as ne,n as re,p as oe,qd as Ne,rd as je,sd as Oe,td as Qe,ud as Ge,wd as We}from"./chunk-2BYPWJHQ.js";import"./chunk-WACMVKXJ.js";import"./chunk-2QSN2QZ4.js";import"./chunk-G2XYFENO.js";import"./chunk-A6GTVXL6.js";import{C as Me,d as Se,f as te,i as _e,j as ye,o as Ce,r as xe,s as Fe,y as $e}from"./chunk-KCCW6LK5.js";import{a as be}from"./chunk-KV7E3DUU.js";import{$ as E,$a as c,Ac as Z,Cb as j,Eb as O,Fb as Q,Gb as F,Gc as h,Ib as R,Ja as l,Jb as K,Kb as p,Lb as he,Oa as ge,Sa as q,Ta as L,Tb as ve,Ua as V,Vb as G,W as y,Wa as g,X as de,Xa as T,Xb as U,Y as w,Zc as ee,_a as b,cb as D,db as u,fb as S,ga as P,ha as I,jb as k,ka as v,mc as m,nc as X,ob as r,pb as o,qb as d,sa as W,tb as J,ub as A,va as fe,wb as z,xb as N,yb as C,zb as x}from"./chunk-MSHI2ENP.js";import"./chunk-EQDQRRRY.js";function Ke(e,s){e&1&&p(0,"Fill out your name")}function Ue(e,s){e&1&&p(0,"Fill out your address")}function Xe(e,s){e&1&&p(0,"Done")}function Ze(e,s){e&1&&p(0,"Fill out your name")}function et(e,s){e&1&&p(0,"Fill out your address")}function tt(e,s){e&1&&p(0,"Done")}var qe=(()=>{class e{constructor(t){this._formBuilder=t,this.routes=be,this.firstFormGroup=this._formBuilder.group({firstCtrl:["",te.required]}),this.secondFormGroup=this._formBuilder.group({secondCtrl:["",te.required]})}static{this.\u0275fac=function(n){return new(n||e)(ge(Me))}}static{this.\u0275cmp=g({type:e,selectors:[["app-form-wizard"]],standalone:!1,decls:90,vars:8,consts:[["stepper",""],["stepperTwo",""],[1,"page-header"],[1,"row"],[1,"col-sm-12"],[1,"page-title"],[1,"col-md-12"],[1,"card"],[1,"card-body"],["errorMessage","Name is required.",3,"stepControl"],[3,"formGroup"],["matStepLabel",""],["appearance","fill"],["matInput","","formControlName","firstCtrl","required","",1,"form-control"],["mat-button","","matStepperNext","",1,"btn","btn-primary"],["errorMessage","Address is required.",3,"stepControl"],["matInput","","formControlName","secondCtrl","required",""],["mat-button","","matStepperPrevious","",1,"btn","btn-primary","me-1"],["mat-button","",1,"btn","btn-primary",3,"click"],["mode","determinate","value","33"],["mode","determinate","value","66"],["mode","determinate","value","100"]],template:function(n,i){if(n&1){let a=A();r(0,"div",2)(1,"div",3)(2,"div",4)(3,"h3",5),p(4,"Form Wizard"),o()()()(),r(5,"div",3)(6,"div",6)(7,"div",7)(8,"div",8)(9,"mat-stepper",null,0)(11,"mat-step",9)(12,"form",10),c(13,Ke,1,0,"ng-template",11),r(14,"mat-form-field",12)(15,"mat-label"),p(16,"Name"),o(),d(17,"input",13),o(),r(18,"div")(19,"p"),p(20,"Go to a different step to see the error state"),o(),r(21,"button",14),p(22,"Next"),o()()()(),r(23,"mat-step",15)(24,"form",10),c(25,Ue,1,0,"ng-template",11),r(26,"mat-form-field",12)(27,"mat-label"),p(28,"Address"),o(),d(29,"input",16),o(),r(30,"div")(31,"p"),p(32,"Go to a different step to see the error state"),o(),r(33,"button",17),p(34,"Back"),o(),r(35,"button",14),p(36,"Next"),o()()()(),r(37,"mat-step"),c(38,Xe,1,0,"ng-template",11),r(39,"p"),p(40,"You are now done."),o(),r(41,"div")(42,"button",17),p(43,"Back"),o(),r(44,"button",18),z("click",function(){P(a);let Y=K(10);return I(Y.reset())}),p(45,"Reset"),o()()()()()()()(),r(46,"div",3)(47,"div",6)(48,"div",7)(49,"div",8)(50,"mat-stepper",null,1)(52,"mat-step",9),d(53,"mat-progress-bar",19),r(54,"form",10),c(55,Ze,1,0,"ng-template",11),r(56,"mat-form-field",12)(57,"mat-label"),p(58,"Name"),o(),d(59,"input",13),o(),r(60,"div")(61,"p"),p(62,"Go to a different step to see the error state"),o(),r(63,"button",14),p(64,"Next"),o()()()(),r(65,"mat-step",15),d(66,"mat-progress-bar",20),r(67,"form",10),c(68,et,1,0,"ng-template",11),r(69,"mat-form-field",12)(70,"mat-label"),p(71,"Address"),o(),d(72,"input",16),o(),r(73,"div")(74,"p"),p(75,"Go to a different step to see the error state"),o(),r(76,"button",17),p(77,"Back"),o(),r(78,"button",14),p(79,"Next"),o()()()(),r(80,"mat-step"),d(81,"mat-progress-bar",21),c(82,tt,1,0,"ng-template",11),r(83,"p"),p(84,"You are now done."),o(),r(85,"div")(86,"button",17),p(87,"Back"),o(),r(88,"button",18),z("click",function(){P(a);let Y=K(51);return I(Y.reset())}),p(89,"Reset"),o()()()()()()()()}n&2&&(l(11),u("stepControl",i.firstFormGroup),l(),u("formGroup",i.firstFormGroup),l(11),u("stepControl",i.secondFormGroup),l(),u("formGroup",i.secondFormGroup),l(28),u("stepControl",i.firstFormGroup),l(2),u("formGroup",i.firstFormGroup),l(11),u("stepControl",i.secondFormGroup),l(2),u("formGroup",i.secondFormGroup))},dependencies:[Te,we,ke,De,Ce,Se,_e,ye,$e,xe,Fe,je,Ne,Oe,Qe,Ge],styles:[".p-ripple[_ngcontent-%COMP%], .p-element[_ngcontent-%COMP%], .p-button[_ngcontent-%COMP%], .p-component[_ngcontent-%COMP%]{background:#f26522!important}.h-12rem[_ngcontent-%COMP%]{min-height:200px}.form_wizard-content[_ngcontent-%COMP%]{background:#fef1eb;border:2px dashed #6B7280;border-radius:5px}"]})}}return e})();var it=[{path:"",component:qe}],Le=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=T({type:e})}static{this.\u0275inj=w({imports:[ee.forChild(it),ee]})}}return e})();var B=["*"],He=["content"],Ye=(e,s,t)=>({activateCallback:e,value:s,active:t});function nt(e,s){e&1&&d(0,"p-stepper-separator")}function rt(e,s){if(e&1){let t=A();r(0,"button",0),z("click",function(){P(t);let i=N();return I(i.onStepClick())}),r(1,"span",1),p(2),o(),r(3,"span",2),x(4),o()(),c(5,nt,1,0,"p-stepper-separator")}if(e&2){let t=N();u("tabindex",t.isStepDisabled()?-1:void 0)("disabled",t.isStepDisabled()),D("id",t.id())("role","tab")("aria-controls",t.ariaControls()),l(2),he(t.value()),l(3),k(t.isSeparatorVisible()?5:-1)}}function ot(e,s){e&1&&J(0)}function pt(e,s){e&1&&d(0,"p-stepper-separator")}function at(e,s){if(e&1&&c(0,ot,1,0,"ng-container",3)(1,pt,1,0,"p-stepper-separator"),e&2){let t=N();u("ngTemplateOutlet",t.content||t._contentTemplate)("ngTemplateOutletContext",U(3,Ye,t.onStepClick.bind(t),t.value(),t.active())),l(),k(t.isSeparatorVisible()?1:-1)}}var Ae=e=>({transitionParams:e}),st=e=>({value:"visible",params:e}),lt=e=>({value:"hidden",params:e});function ct(e,s){e&1&&d(0,"p-stepper-separator")}function ut(e,s){e&1&&J(0)}function mt(e,s){if(e&1&&c(0,ut,1,0,"ng-container",1),e&2){let t=N();u("ngTemplateOutlet",t.contentTemplate||t._contentTemplate)("ngTemplateOutletContext",U(2,Ye,t.updateValue.bind(t),t.value(),t.active()))}}var dt=({dt:e})=>`
.p-steplist {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
    overflow-x: auto;
}

.p-step {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    gap: ${e("stepper.step.gap")};
    padding: ${e("stepper.step.padding")};
}

.p-step:last-of-type {
    flex: initial;
}

.p-step-header {
    border: 0 none;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    transition: background ${e("stepper.transition.duration")}, color ${e("stepper.transition.duration")}, border-color ${e("stepper.transition.duration")}, outline-color ${e("stepper.transition.duration")}, box-shadow ${e("stepper.transition.duration")};
    border-radius: ${e("stepper.step.header.border.radius")};
    outline-color: transparent;
    background: transparent;
    padding: ${e("stepper.step.header.padding")};
    gap: ${e("stepper.step.header.gap")};
}

.p-step-header:focus-visible {
    box-shadow: ${e("stepper.step.header.focus.ring.shadow")};
    outline: ${e("stepper.step.header.focus.ring.width")} ${e("stepper.step.header.focus.ring.style")} ${e("stepper.step.header.focus.ring.color")};
    outline-offset: ${e("stepper.step.header.focus.ring.offset")};
}

.p-stepper.p-stepper-readonly .p-step {
    cursor: auto;
}

.p-step-title {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    color: ${e("stepper.step.title.color")};
    font-weight: ${e("stepper.step.title.font.weight")};
    transition: background ${e("stepper.transition.duration")}, color ${e("stepper.transition.duration")}, border-color ${e("stepper.transition.duration")}, box-shadow ${e("stepper.transition.duration")}, outline-color ${e("stepper.transition.duration")};
}

.p-step-number {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${e("stepper.step.number.color")};
    border: 2px solid ${e("stepper.step.number.border.color")};
    background: ${e("stepper.step.number.background")};
    min-width: ${e("stepper.step.number.size")};
    height: ${e("stepper.step.number.size")};
    line-height: ${e("stepper.step.number.size")};
    font-size: ${e("stepper.step.number.font.size")};
    z-index: 1;
    border-radius: ${e("stepper.step.number.border.radius")};
    position: relative;
    font-weight: ${e("stepper.step.number.font.weight")};
}

.p-step-number::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${e("stepper.step.number.border.radius")};
    box-shadow: ${e("stepper.step.number.shadow")};
}

.p-step-active .p-step-header {
    cursor: default;
}

.p-step-active .p-step-number {
    background: ${e("stepper.step.number.active.background")};
    border-color: ${e("stepper.step.number.active.border.color")};
    color: ${e("stepper.step.number.active.color")};
}

.p-step-active .p-step-title {
    color: ${e("stepper.step.title.active.color")};
}

.p-step:not(.p-disabled):focus-visible {
    outline: ${e("focus.ring.width")} ${e("focus.ring.style")} ${e("focus.ring.color")};
    outline-offset: ${e("focus.ring.offset")};
}

.p-step:has(~ .p-step-active) .p-stepper-separator {
    background: ${e("stepper.separator.active.background")};
}

.p-stepper-separator {
    flex: 1 1 0;
    background: ${e("stepper.separator.background")};
    width: 100%;
    height: ${e("stepper.separator.size")};
    transition: background ${e("stepper.transition.duration")}, color ${e("stepper.transition.duration")}, border-color ${e("stepper.transition.duration")}, box-shadow ${e("stepper.transition.duration")}, outline-color ${e("stepper.transition.duration")};
}

.p-steppanels {
    padding: ${e("stepper.steppanels.padding")};
}

.p-steppanel {
    background: ${e("stepper.steppanel.background")};
    color: ${e("stepper.steppanel.color")};
}

.p-stepper:has(.p-stepitem) {
    display: flex;
    flex-direction: column;
}

.p-stepitem {
    display: flex;
    flex-direction: column;
    flex: initial;
}

.p-stepitem.p-stepitem-active {
    flex: 1 1 auto;
}

.p-stepitem .p-step {
    flex: initial;
}

.p-stepitem .p-steppanel-content {
    width: 100%;
    padding: ${e("stepper.steppanel.padding")};
    margin-inline-start: 1rem;
}

.p-stepitem .p-steppanel {
    display: flex;
    flex: 1 1 auto;
}

.p-stepitem .p-stepper-separator {
    flex: 0 0 auto;
    width: ${e("stepper.separator.size")};
    height: auto;
    margin: ${e("stepper.separator.margin")};
    position: relative;
    left: calc(-1 * ${e("stepper.separator.size")});
}

.p-stepitem .p-stepper-separator:dir(rtl) {
    left: calc(-9 * ${e("stepper.separator.size")});
}

.p-stepitem:has(~ .p-stepitem-active) .p-stepper-separator {
    background: ${e("stepper.separator.active.background")};
}

.p-stepitem:last-of-type .p-steppanel {
    padding-inline-start: ${e("stepper.step.number.size")};
}
/* For PrimeNG */
.p-steppanel {
    overflow: hidden;
}

.p-stepppanel:not(.ng-animating) {
    overflow: inherit;
}
`,ft={root:({props:e})=>["p-stepper p-component",{"p-readonly":e.linear}],separator:"p-stepper-separator"},Re=(()=>{class e extends Ve{name="stepper";theme=dt;classes=ft;static \u0275fac=(()=>{let t;return function(i){return(t||(t=v(e)))(i||e)}})();static \u0275prov=de({token:e,factory:e.\u0275fac})}return e})();var le=(()=>{class e extends _{steps=L(y(()=>M));static \u0275fac=(()=>{let t;return function(i){return(t||(t=v(e)))(i||e)}})();static \u0275cmp=g({type:e,selectors:[["p-step-list"]],contentQueries:function(n,i,a){n&1&&F(a,i.steps,M,4),n&2&&R()},hostVars:4,hostBindings:function(n,i){n&2&&S("p-steplist",!0)("p-component",!0)},features:[b],ngContentSelectors:B,decls:1,vars:0,template:function(n,i){n&1&&(C(),x(0))},dependencies:[h],encapsulation:2,changeDetection:0})}return e})(),me=(()=>{class e extends _{static \u0275fac=(()=>{let t;return function(i){return(t||(t=v(e)))(i||e)}})();static \u0275cmp=g({type:e,selectors:[["p-stepper-separator"]],hostVars:4,hostBindings:function(n,i){n&2&&S("p-stepper-separator",!0)("p-component",!0)},features:[b],ngContentSelectors:B,decls:1,vars:0,template:function(n,i){n&1&&(C(),x(0))},dependencies:[h],encapsulation:2,changeDetection:0})}return e})(),ce=(()=>{class e extends _{pcStepper=E(y(()=>H));value=V();isActive=m(()=>this.pcStepper.value()===this.value());step=q(y(()=>M));stepPanel=q(y(()=>ue));constructor(){super(),X(()=>{this.step().value.set(this.value())}),X(()=>{this.stepPanel().value.set(this.value())})}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=g({type:e,selectors:[["p-step-item"]],contentQueries:function(n,i,a){n&1&&(F(a,i.step,M,5),F(a,i.stepPanel,ue,5)),n&2&&R(2)},hostVars:5,hostBindings:function(n,i){n&2&&(D("data-p-active",i.isActive()),S("p-stepitem",!0)("p-component",!0))},inputs:{value:[1,"value"]},outputs:{value:"valueChange"},features:[b],ngContentSelectors:B,decls:1,vars:0,template:function(n,i){n&1&&(C(),x(0))},dependencies:[h],encapsulation:2,changeDetection:0})}return e})(),M=(()=>{class e extends _{pcStepper=E(y(()=>H));value=V();disabled=W(!1,{transform:t=>ae(t)});active=m(()=>this.pcStepper.isStepActive(this.value()));isStepDisabled=m(()=>!this.active()&&(this.pcStepper.linear()||this.disabled()));id=m(()=>`${this.pcStepper.id()}_step_${this.value()}`);ariaControls=m(()=>`${this.pcStepper.id()}_steppanel_${this.value()}`);isSeparatorVisible=m(()=>{if(this.pcStepper.stepList()){let t=this.pcStepper.stepList().steps(),n=t.indexOf(this),i=t.length;return n!==i-1}else return!1});content;templates;_contentTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break}})}onStepClick(){this.pcStepper.updateValue(this.value())}static \u0275fac=(()=>{let t;return function(i){return(t||(t=v(e)))(i||e)}})();static \u0275cmp=g({type:e,selectors:[["p-step"]],contentQueries:function(n,i,a){if(n&1&&(j(a,He,4),j(a,pe,4)),n&2){let f;O(f=Q())&&(i.content=f.first),O(f=Q())&&(i.templates=f)}},hostVars:13,hostBindings:function(n,i){n&2&&(D("aria-current",i.active()?"step":void 0)("role","presentation")("data-p-active",i.active())("data-p-disabled",i.isStepDisabled())("data-pc-name","step"),S("p-step",!0)("p-step-active",i.active())("p-disabled",i.isStepDisabled())("p-component",!0))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[b],ngContentSelectors:B,decls:2,vars:1,consts:[[1,"p-step-header",3,"click","tabindex","disabled"],[1,"p-step-number"],[1,"p-step-title"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,i){n&1&&(C(),c(0,rt,6,7)(1,at,2,7)),n&2&&k(!i.content&&!i._contentTemplate?0:1)},dependencies:[h,Z,me,$],encapsulation:2,changeDetection:0})}return e})(),ue=(()=>{class e extends _{pcStepper=E(y(()=>H));transitionOptions=m(()=>this.pcStepper.transitionOptions());value=V(void 0);active=m(()=>this.pcStepper.value()===this.value());ariaControls=m(()=>`${this.pcStepper.id()}_step_${this.value()}`);id=m(()=>`${this.pcStepper.id()}_steppanel_${this.value()}`);isVertical=m(()=>this.pcStepper.stepItems().length>0);isSeparatorVisible=m(()=>{if(this.pcStepper.stepItems()){let t=this.pcStepper.stepItems().length,n=Ee(this.pcStepper.el.nativeElement,'[data-pc-name="steppanel"]');return Pe(this.el.nativeElement,n)!==t-1}});contentTemplate;templates;_contentTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break}})}updateValue(t){this.pcStepper.updateValue(t)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=v(e)))(i||e)}})();static \u0275cmp=g({type:e,selectors:[["p-step-panel"]],contentQueries:function(n,i,a){if(n&1&&(j(a,He,5),j(a,pe,4)),n&2){let f;O(f=Q())&&(i.contentTemplate=f.first),O(f=Q())&&(i.templates=f)}},hostVars:11,hostBindings:function(n,i){n&2&&(D("role","tabpanel")("aria-controls",i.ariaControls())("id",i.id())("data-p-active",i.active())("data-pc-name","steppanel"),S("p-steppanel",!0)("p-component",!0)("p-steppanel-active",i.active()))},inputs:{value:[1,"value"]},outputs:{value:"valueChange"},features:[b],decls:3,vars:11,consts:[[1,"p-steppanel-content"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,i){n&1&&(c(0,ct,1,0,"p-stepper-separator"),r(1,"div",0),c(2,mt,1,6,"ng-container"),o()),n&2&&(k(i.isSeparatorVisible()?0:-1),l(),u("@content",i.isVertical()?i.active()?G(5,st,G(3,Ae,i.transitionOptions())):G(9,lt,G(7,Ae,i.transitionOptions())):void 0),l(),k(i.active()?2:-1))},dependencies:[h,Z,me,$],encapsulation:2,data:{animation:[Be("content",[re("hidden",ne({height:"0",visibility:"hidden"})),re("visible",ne({height:"*",visibility:"visible"})),oe("visible <=> hidden",[ie("250ms cubic-bezier(0.86, 0, 0.07, 1)")]),oe("void => *",ie(0))])]},changeDetection:0})}return e})(),gt=(()=>{class e extends _{static \u0275fac=(()=>{let t;return function(i){return(t||(t=v(e)))(i||e)}})();static \u0275cmp=g({type:e,selectors:[["p-step-panels"]],hostVars:4,hostBindings:function(n,i){n&2&&S("p-steppanels",!0)("p-component",!0)},features:[b],ngContentSelectors:B,decls:1,vars:0,template:function(n,i){n&1&&(C(),x(0))},dependencies:[h,$],encapsulation:2,changeDetection:0})}return e})(),H=(()=>{class e extends _{value=V(void 0);linear=W(!1,{transform:t=>ae(t)});transitionOptions=W("400ms cubic-bezier(0.86, 0, 0.07, 1)");_componentStyle=E(Re);id=fe(Ie("pn_id_"));stepItems=L(ce);steps=L(M);stepList=q(le);updateValue(t){this.value.set(t)}isStepActive(t){return this.value()===t}static \u0275fac=(()=>{let t;return function(i){return(t||(t=v(e)))(i||e)}})();static \u0275cmp=g({type:e,selectors:[["p-stepper"]],contentQueries:function(n,i,a){n&1&&(F(a,i.stepItems,ce,4),F(a,i.steps,M,4),F(a,i.stepList,le,5)),n&2&&R(3)},hostVars:6,hostBindings:function(n,i){n&2&&(D("role","tablist")("id",i.id()),S("p-stepper",!0)("p-component",!0))},inputs:{value:[1,"value"],linear:[1,"linear"],transitionOptions:[1,"transitionOptions"]},outputs:{value:"valueChange"},features:[ve([Re]),b],ngContentSelectors:B,decls:1,vars:0,template:function(n,i){n&1&&(C(),x(0))},dependencies:[h,$],encapsulation:2,changeDetection:0})}return e})(),Je=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=T({type:e});static \u0275inj=w({imports:[H,le,gt,ue,ce,M,me,$,$]})}return e})();var Ut=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=T({type:e})}static{this.\u0275inj=w({imports:[h,Le,Je,We,ze]})}}return e})();export{Ut as FormWizardModule};
