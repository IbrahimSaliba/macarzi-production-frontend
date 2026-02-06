import{Jc as ne,Nc as M,Oc as I,Pc as le,Qc as se,Sc as ae,Tc as ce,Uc as ue,dd as H,ec as ie,gc as te,hc as oe,j as ee,k as T,m as L,p as E,vc as re}from"./chunk-2BYPWJHQ.js";import{a as J}from"./chunk-KCCW6LK5.js";import{$ as P,$a as Q,Db as g,Eb as v,Fb as b,Gc as K,Hc as W,Ja as h,Oa as F,Tb as Z,Vb as D,W as B,Wa as $,Wb as x,X as O,Xa as X,Y as R,_a as z,cb as d,db as k,eb as G,ga as l,ha as s,hb as U,jc as C,ka as A,kc as Y,oa as y,ob as f,pb as w,qb as S,tc as j,ub as V,vc as q,wb as _,xb as n,zc as N}from"./chunk-MSHI2ENP.js";var me=["container"],fe=["input"],ge=["colorSelector"],ve=["colorHandle"],be=["hue"],ke=["hueHandle"],we=(o,m)=>({"p-colorpicker p-component":!0,"p-colorpicker-overlay":o,"p-colorpicker-dragging":m}),_e=o=>({"p-disabled":o}),Ce=(o,m)=>({"p-colorpicker-panel":!0,"p-colorpicker-panel-inline":o,"p-disabled":m}),ye=(o,m)=>({showTransitionParams:o,hideTransitionParams:m}),xe=o=>({value:"visible",params:o});function Me(o,m){if(o&1){let e=V();f(0,"input",9,1),_("click",function(){l(e);let t=n();return s(t.onInputClick())})("keydown",function(t){l(e);let r=n();return s(r.onInputKeydown(t))})("focus",function(){l(e);let t=n();return s(t.onInputFocus())}),w()}if(o&2){let e=n();G("background-color",e.inputBgColor),k("ngClass",D(9,_e,e.disabled))("disabled",e.disabled)("pAutoFocus",e.autofocus),d("tabindex",e.tabindex)("id",e.inputId)("data-pc-section","input")("aria-label",e.ariaLabel)}}function He(o,m){if(o&1){let e=V();f(0,"div",10),_("click",function(t){l(e);let r=n();return s(r.onOverlayClick(t))})("@overlayAnimation.start",function(t){l(e);let r=n();return s(r.onOverlayAnimationStart(t))})("@overlayAnimation.done",function(t){l(e);let r=n();return s(r.onOverlayAnimationEnd(t))}),f(1,"div",11)(2,"div",12,2),_("touchstart",function(t){l(e);let r=n();return s(r.onColorDragStart(t))})("touchmove",function(t){l(e);let r=n();return s(r.onDrag(t))})("touchend",function(){l(e);let t=n();return s(t.onDragEnd())})("mousedown",function(t){l(e);let r=n();return s(r.onColorMousedown(t))}),f(4,"div",13),S(5,"div",14,3),w()(),f(7,"div",15,4),_("mousedown",function(t){l(e);let r=n();return s(r.onHueMousedown(t))})("touchstart",function(t){l(e);let r=n();return s(r.onHueDragStart(t))})("touchmove",function(t){l(e);let r=n();return s(r.onDrag(t))})("touchend",function(){l(e);let t=n();return s(t.onDragEnd())}),S(9,"div",16,5),w()()()}if(o&2){let e=n();k("ngClass",x(10,Ce,e.inline,e.disabled))("@overlayAnimation",D(16,xe,x(13,ye,e.showTransitionOptions,e.hideTransitionOptions)))("@.disabled",e.inline===!0),d("data-pc-section","panel"),h(),d("data-pc-section","content"),h(),d("data-pc-section","selector"),h(2),d("data-pc-section","color"),h(),d("data-pc-section","colorHandle"),h(2),d("data-pc-section","hue"),h(2),d("data-pc-section","hueHandle")}}var Se=({dt:o})=>`
.p-colorpicker {
    display: inline-block;
    position: relative;
}

.p-colorpicker-dragging {
    cursor: pointer;
}

.p-colorpicker-preview {
    width: ${o("colorpicker.preview.width")};
    height: ${o("colorpicker.preview.height")};
    padding: 0;
    border: 0 none;
    border-radius: ${o("colorpicker.preview.border.radius")};
    transition: background ${o("colorpicker.transition.duration")}, color ${o("colorpicker.transition.duration")}, border-color ${o("colorpicker.transition.duration")}, outline-color ${o("colorpicker.transition.duration")}, box-shadow ${o("colorpicker.transition.duration")};
    outline-color: transparent;
    cursor: pointer;
}

.p-colorpicker-preview:enabled:focus-visible {
    border-color: ${o("colorpicker.preview.focus.border.color")};
    box-shadow: ${o("colorpicker.preview.focus.ring.shadow")};
    outline: ${o("colorpicker.preview.focus.ring.width")} ${o("colorpicker.preview.focus.ring.style")} ${o("colorpicker.preview.focus.ring.color")};
    outline-offset: ${o("colorpicker.preview.focus.ring.offset")};
}

.p-colorpicker-panel {
    background: ${o("colorpicker.panel.background")};
    border: 1px solid ${o("colorpicker.panel.border.color")};
    border-radius: ${o("colorpicker.panel.border.radius")};
    box-shadow: ${o("colorpicker.panel.shadow")};
    width: 193px;
    height: 166px;
    position: absolute;
    top: 0;
    left: 0;
}

.p-colorpicker-panel:dir(rtl) {
    left: auto;
    right: 0;
}

.p-colorpicker-panel-inline {
    box-shadow: none;
    position: static;
}

.p-colorpicker-content {
    position: relative;
}

.p-colorpicker-color-selector {
    width: 150px;
    height: 150px;
    top: 8px;
    left: 8px;
    position: absolute;
}

.p-colorpicker-color-selector:dir(rtl) {
    left: auto;
    right: 8px;
}

.p-colorpicker-color-background {
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #000 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
}

.p-colorpicker-color-handle {
    position: absolute;
    top: 0px;
    left: 150px;
    border-radius: 100%;
    width: 10px;
    height: 10px;
    border-width: 1px;
    border-style: solid;
    margin: -5px 0 0 -5px;
    cursor: pointer;
    opacity: 0.85;
    border-color: ${o("colorpicker.handle.color")};
}

.p-colorpicker-color-handle:dir(rtl) {
    left: auto;
    right: 150px;
    margin: -5px -5px 0 0;
}

.p-colorpicker-hue {
    width: 17px;
    height: 150px;
    top: 8px;
    left: 167px;
    position: absolute;
    opacity: 0.85;
    background: linear-gradient(0deg,
        red 0,
        #ff0 17%,
        #0f0 33%,
        #0ff 50%,
        #00f 67%,
        #f0f 83%,
        red);
}

.p-colorpicker-hue:dir(rtl) {
    left: auto;
    right: 167px;
}

.p-colorpicker-hue-handle {
    position: absolute;
    top: 150px;
    left: 0px;
    width: 21px;
    margin-left: -2px;
    margin-top: -5px;
    height: 10px;
    border-width: 2px;
    border-style: solid;
    opacity: 0.85;
    cursor: pointer;
    border-color: ${o("colorpicker.handle.color")};
}

.p-colorpicker-hue-handle:dir(rtl) {
    left: auto;
    right: 0px;
    margin-left: 0;
    margin-right: -2px;
}
`,Ve={root:"p-colorpicker p-component",preview:({props:o})=>["p-colorpicker-preview",{"p-disabled":o.disabled}],panel:({props:o})=>["p-colorpicker-panel",{"p-colorpicker-panel-inline":o.inline,"p-disabled":o.disabled}],content:"p-colorpicker-content",colorSelector:"p-colorpicker-color-selector",colorBackground:"p-colorpicker-color-background",colorHandle:"p-colorpicker-color-handle",hue:"p-colorpicker-hue",hueHandle:"p-colorpicker-hue-handle"},de=(()=>{class o extends le{name="colorpicker";theme=Se;classes=Ve;static \u0275fac=(()=>{let e;return function(t){return(e||(e=A(o)))(t||o)}})();static \u0275prov=O({token:o,factory:o.\u0275fac})}return o})();var De={provide:J,useExisting:B(()=>he),multi:!0},he=(()=>{class o extends se{overlayService;style;styleClass;inline;format="hex";appendTo;disabled;tabindex;inputId;autoZIndex=!0;baseZIndex=0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";autofocus;onChange=new y;onShow=new y;onHide=new y;containerViewChild;inputViewChild;value={h:0,s:100,b:100};inputBgColor;shown;overlayVisible;defaultColor="ff0000";onModelChange=()=>{};onModelTouched=()=>{};documentClickListener;documentResizeListener;documentMousemoveListener;documentMouseupListener;documentHueMoveListener;scrollHandler;selfClick;colorDragging;hueDragging;overlay;colorSelectorViewChild;colorHandleViewChild;hueViewChild;hueHandleViewChild;_componentStyle=P(de);constructor(e){super(),this.overlayService=e}set colorSelector(e){this.colorSelectorViewChild=e}set colorHandle(e){this.colorHandleViewChild=e}set hue(e){this.hueViewChild=e}set hueHandle(e){this.hueHandleViewChild=e}get ariaLabel(){return this.config?.getTranslation(I.ARIA)[I.SELECT_COLOR]}onHueMousedown(e){this.disabled||(this.bindDocumentMousemoveListener(),this.bindDocumentMouseupListener(),this.hueDragging=!0,this.pickHue(e))}onHueDragStart(e){this.disabled||(this.hueDragging=!0,this.pickHue(e,e.changedTouches[0]))}onColorDragStart(e){this.disabled||(this.colorDragging=!0,this.pickColor(e,e.changedTouches[0]))}pickHue(e,i){let t=i?i.pageY:e.pageY,r=this.hueViewChild?.nativeElement.getBoundingClientRect().top+(this.document.defaultView.pageYOffset||this.document.documentElement.scrollTop||this.document.body.scrollTop||0);this.value=this.validateHSB({h:Math.floor(360*(150-Math.max(0,Math.min(150,t-r)))/150),s:this.value.s,b:this.value.b}),this.updateColorSelector(),this.updateUI(),this.updateModel(),this.onChange.emit({originalEvent:e,value:this.getValueToUpdate()})}onColorMousedown(e){this.disabled||(this.bindDocumentMousemoveListener(),this.bindDocumentMouseupListener(),this.colorDragging=!0,this.pickColor(e))}onDrag(e){this.colorDragging&&(this.pickColor(e,e.changedTouches[0]),e.preventDefault()),this.hueDragging&&(this.pickHue(e,e.changedTouches[0]),e.preventDefault())}onDragEnd(){this.colorDragging=!1,this.hueDragging=!1,this.unbindDocumentMousemoveListener(),this.unbindDocumentMouseupListener()}pickColor(e,i){let t=i?i.pageX:e.pageX,r=i?i.pageY:e.pageY,a=this.colorSelectorViewChild?.nativeElement.getBoundingClientRect(),c=a.top+(this.document.defaultView.pageYOffset||this.document.documentElement.scrollTop||this.document.body.scrollTop||0),u=a.left+this.document.body.scrollLeft,p=Math.floor(100*Math.max(0,Math.min(150,t-u))/150),pe=Math.floor(100*(150-Math.max(0,Math.min(150,r-c)))/150);this.value=this.validateHSB({h:this.value.h,s:p,b:pe}),this.updateUI(),this.updateModel(),this.onChange.emit({originalEvent:e,value:this.getValueToUpdate()})}getValueToUpdate(){let e;switch(this.format){case"hex":e="#"+this.HSBtoHEX(this.value);break;case"rgb":e=this.HSBtoRGB(this.value);break;case"hsb":e=this.value;break}return e}updateModel(){this.onModelChange(this.getValueToUpdate()),this.cd.markForCheck()}writeValue(e){if(e)switch(this.format){case"hex":this.value=this.HEXtoHSB(e);break;case"rgb":this.value=this.RGBtoHSB(e);break;case"hsb":this.value=e;break}else this.value=this.HEXtoHSB(this.defaultColor);this.updateColorSelector(),this.updateUI(),this.cd.markForCheck()}updateColorSelector(){if(this.colorSelectorViewChild){let e={};e.s=100,e.b=100,e.h=this.value.h,this.colorSelectorViewChild.nativeElement.style.backgroundColor="#"+this.HSBtoHEX(e)}}updateUI(){this.colorHandleViewChild&&this.hueHandleViewChild?.nativeElement&&(this.colorHandleViewChild.nativeElement.style.left=Math.floor(150*this.value.s/100)+"px",this.colorHandleViewChild.nativeElement.style.top=Math.floor(150*(100-this.value.b)/100)+"px",this.hueHandleViewChild.nativeElement.style.top=Math.floor(150-150*this.value.h/360)+"px"),this.inputBgColor="#"+this.HSBtoHEX(this.value)}onInputFocus(){this.onModelTouched()}show(){this.overlayVisible=!0,this.cd.markForCheck()}onOverlayAnimationStart(e){switch(e.toState){case"visible":this.inline||(this.overlay=e.element,this.appendOverlay(),this.autoZIndex&&H.set("overlay",this.overlay,this.config.zIndex.overlay),this.alignOverlay(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),this.updateColorSelector(),this.updateUI());break;case"void":this.onOverlayHide();break}}onOverlayAnimationEnd(e){switch(e.toState){case"visible":this.inline||this.onShow.emit({});break;case"void":this.autoZIndex&&H.clear(e.element),this.onHide.emit({});break}}appendOverlay(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.overlay):oe(this.appendTo,this.overlay))}restoreOverlayAppend(){this.overlay&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.overlay)}alignOverlay(){this.appendTo?ie(this.overlay,this.inputViewChild?.nativeElement):te(this.overlay,this.inputViewChild?.nativeElement)}hide(){this.overlayVisible=!1,this.cd.markForCheck()}onInputClick(){this.selfClick=!0,this.togglePanel()}togglePanel(){this.overlayVisible?this.hide():this.show()}onInputKeydown(e){switch(e.code){case"Space":this.togglePanel(),e.preventDefault();break;case"Escape":case"Tab":this.hide();break;default:break}}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.selfClick=!0}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}bindDocumentClickListener(){if(!this.documentClickListener){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentClickListener=this.renderer.listen(e,"click",()=>{this.selfClick||(this.overlayVisible=!1,this.unbindDocumentClickListener()),this.selfClick=!1,this.cd.markForCheck()})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentMousemoveListener(){if(!this.documentMousemoveListener){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentMousemoveListener=this.renderer.listen(e,"mousemove",i=>{this.colorDragging&&this.pickColor(i),this.hueDragging&&this.pickHue(i)})}}unbindDocumentMousemoveListener(){this.documentMousemoveListener&&(this.documentMousemoveListener(),this.documentMousemoveListener=null)}bindDocumentMouseupListener(){if(!this.documentMouseupListener){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentMouseupListener=this.renderer.listen(e,"mouseup",()=>{this.colorDragging=!1,this.hueDragging=!1,this.unbindDocumentMousemoveListener(),this.unbindDocumentMouseupListener()})}}unbindDocumentMouseupListener(){this.documentMouseupListener&&(this.documentMouseupListener(),this.documentMouseupListener=null)}bindDocumentResizeListener(){W(this.platformId)&&(this.documentResizeListener=this.renderer.listen(this.document.defaultView,"resize",this.onWindowResize.bind(this)))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}onWindowResize(){this.overlayVisible&&!re()&&this.hide()}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new ae(this.containerViewChild?.nativeElement,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}validateHSB(e){return{h:Math.min(360,Math.max(0,e.h)),s:Math.min(100,Math.max(0,e.s)),b:Math.min(100,Math.max(0,e.b))}}validateRGB(e){return{r:Math.min(255,Math.max(0,e.r)),g:Math.min(255,Math.max(0,e.g)),b:Math.min(255,Math.max(0,e.b))}}validateHEX(e){var i=6-e.length;if(i>0){for(var t=[],r=0;r<i;r++)t.push("0");t.push(e),e=t.join("")}return e}HEXtoRGB(e){let i=parseInt(e.indexOf("#")>-1?e.substring(1):e,16);return{r:i>>16,g:(i&65280)>>8,b:i&255}}HEXtoHSB(e){return this.RGBtoHSB(this.HEXtoRGB(e))}RGBtoHSB(e){var i={h:0,s:0,b:0},t=Math.min(e.r,e.g,e.b),r=Math.max(e.r,e.g,e.b),a=r-t;return i.b=r,i.s=r!=0?255*a/r:0,i.s!=0?e.r==r?i.h=(e.g-e.b)/a:e.g==r?i.h=2+(e.b-e.r)/a:i.h=4+(e.r-e.g)/a:i.h=-1,i.h*=60,i.h<0&&(i.h+=360),i.s*=100/255,i.b*=100/255,i}HSBtoRGB(e){var i={r:0,g:0,b:0};let t=e.h,r=e.s*255/100,a=e.b*255/100;if(r==0)i={r:a,g:a,b:a};else{let c=a,u=(255-r)*a/255,p=(c-u)*(t%60)/60;t==360&&(t=0),t<60?(i.r=c,i.b=u,i.g=u+p):t<120?(i.g=c,i.b=u,i.r=c-p):t<180?(i.g=c,i.r=u,i.b=u+p):t<240?(i.b=c,i.r=u,i.g=c-p):t<300?(i.b=c,i.g=u,i.r=u+p):t<360?(i.r=c,i.g=u,i.b=c-p):(i.r=0,i.g=0,i.b=0)}return{r:Math.round(i.r),g:Math.round(i.g),b:Math.round(i.b)}}RGBtoHEX(e){var i=[e.r.toString(16),e.g.toString(16),e.b.toString(16)];for(var t in i)i[t].length==1&&(i[t]="0"+i[t]);return i.join("")}HSBtoHEX(e){return this.RGBtoHEX(this.HSBtoRGB(e))}onOverlayHide(){this.unbindScrollListener(),this.unbindDocumentResizeListener(),this.unbindDocumentClickListener(),this.overlay=null}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&this.autoZIndex&&H.clear(this.overlay),this.restoreOverlayAppend(),this.onOverlayHide()}static \u0275fac=function(i){return new(i||o)(F(ne))};static \u0275cmp=$({type:o,selectors:[["p-colorPicker"],["p-colorpicker"],["p-color-picker"]],viewQuery:function(i,t){if(i&1&&(g(me,5),g(fe,5),g(ge,5),g(ve,5),g(be,5),g(ke,5)),i&2){let r;v(r=b())&&(t.containerViewChild=r.first),v(r=b())&&(t.inputViewChild=r.first),v(r=b())&&(t.colorSelector=r.first),v(r=b())&&(t.colorHandle=r.first),v(r=b())&&(t.hue=r.first),v(r=b())&&(t.hueHandle=r.first)}},inputs:{style:"style",styleClass:"styleClass",inline:[2,"inline","inline",C],format:"format",appendTo:"appendTo",disabled:[2,"disabled","disabled",C],tabindex:"tabindex",inputId:"inputId",autoZIndex:[2,"autoZIndex","autoZIndex",C],baseZIndex:[2,"baseZIndex","baseZIndex",Y],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autofocus:[2,"autofocus","autofocus",C]},outputs:{onChange:"onChange",onShow:"onShow",onHide:"onHide"},features:[Z([De,de]),z],decls:4,vars:11,consts:[["container",""],["input",""],["colorSelector",""],["colorHandle",""],["hue",""],["hueHandle",""],[3,"ngStyle","ngClass"],["type","text","class","p-colorpicker-preview","readonly","readonly",3,"ngClass","disabled","backgroundColor","pAutoFocus","click","keydown","focus",4,"ngIf"],[3,"ngClass","click",4,"ngIf"],["type","text","readonly","readonly",1,"p-colorpicker-preview",3,"click","keydown","focus","ngClass","disabled","pAutoFocus"],[3,"click","ngClass"],[1,"p-colorpicker-content"],[1,"p-colorpicker-color-selector",3,"touchstart","touchmove","touchend","mousedown"],[1,"p-colorpicker-color-background"],[1,"p-colorpicker-color-handle"],[1,"p-colorpicker-hue",3,"mousedown","touchstart","touchmove","touchend"],[1,"p-colorpicker-hue-handle"]],template:function(i,t){i&1&&(f(0,"div",6,0),Q(2,Me,2,11,"input",7)(3,He,11,18,"div",8),w()),i&2&&(U(t.styleClass),k("ngStyle",t.style)("ngClass",x(8,we,!t.inline,t.colorDragging||t.hueDragging)),d("data-pc-name","colorpicker")("data-pc-section","root"),h(2),k("ngIf",!t.inline),h(),k("ngIf",t.inline||t.overlayVisible))},dependencies:[K,j,q,N,ue,ce,M],encapsulation:2,data:{animation:[ee("overlayAnimation",[E(":enter",[L({opacity:0,transform:"scaleY(0.8)"}),T("{{showTransitionParams}}")]),E(":leave",[T("{{hideTransitionParams}}",L({opacity:0}))])])]},changeDetection:0})}return o})(),Je=(()=>{class o{static \u0275fac=function(i){return new(i||o)};static \u0275mod=X({type:o});static \u0275inj=R({imports:[he,M,M]})}return o})();export{he as a,Je as b};
