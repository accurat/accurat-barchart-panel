define(["@grafana/data","react","@emotion/css","@grafana/ui","@grafana/runtime"],((e,t,a,o,r)=>(()=>{"use strict";var n={89:e=>{e.exports=a},781:t=>{t.exports=e},531:e=>{e.exports=r},7:e=>{e.exports=o},959:e=>{e.exports=t}},i={};function s(e){var t=i[e];if(void 0!==t)return t.exports;var a=i[e]={exports:{}};return n[e](a,a.exports,s),a.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var l={};return(()=>{s.r(l),s.d(l,{plugin:()=>p});var e=s(781),t=s(959),a=s.n(t),o=s(89),r=s(7),n=s(531);const i=()=>({wrapper:o.css`
      font-family: Open Sans;
      position: relative;
    `,svg:o.css`
      position: absolute;
      top: 0;
      left: 0;
    `,textBox:o.css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    `}),p=new e.PanelPlugin((({options:e,data:t,width:s,height:l,fieldConfig:p,id:d})=>{const u=(0,r.useTheme2)(),c=(0,r.useStyles2)(i);return 0===t.series.length?a().createElement(n.PanelDataErrorView,{fieldConfig:p,panelId:d,data:t,needsStringField:!0}):a().createElement("div",{className:(0,o.cx)(c.wrapper,o.css`
          width: ${s}px;
          height: ${l}px;
        `)},a().createElement("svg",{className:c.svg,width:s,height:l,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:`-${s/2} -${l/2} ${s} ${l}`},a().createElement("g",null,a().createElement("circle",{"data-testid":"simple-panel-circle",style:{fill:u.colors.primary.main},r:100}))),a().createElement("div",{className:c.textBox},e.showSeriesCount&&a().createElement("div",{"data-testid":"simple-panel-series-counter"},"Number of series: ",t.series.length),a().createElement("div",null,"Text option value: ",e.text)))})).setPanelOptions((e=>e.addTextInput({path:"text",name:"Simple text option",description:"Description of panel option",defaultValue:"Default value of text input option"}).addBooleanSwitch({path:"showSeriesCount",name:"Show series counter",defaultValue:!1}).addRadio({path:"seriesCountSize",defaultValue:"sm",name:"Series counter size",settings:{options:[{value:"sm",label:"Small"},{value:"md",label:"Medium"},{value:"lg",label:"Large"}]},showIf:e=>e.showSeriesCount})))})(),l})()));
//# sourceMappingURL=module.js.map