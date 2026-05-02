import{C as e,D as t,E as n,O as r,S as i,T as a,_ as o,a as s,b as c,c as l,d as u,f as d,g as f,h as p,i as m,k as h,l as g,m as _,n as v,o as y,p as b,r as x,s as S,t as C,u as w,v as T,w as E,x as D,y as O}from"./index-CRpQk3BS.js";function k(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=k(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function A(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=k(e))&&(r&&(r+=` `),r+=t);return r}var j={data:``},M=e=>{if(typeof window==`object`){let t=(e?e.querySelector(`#_goober`):window._goober)||Object.assign(document.createElement(`style`),{innerHTML:` `,id:`_goober`});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||j},N=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,P=/\/\*[^]*?\*\/|  +/g,F=/\n+/g,I=(e,t)=>{let n=``,r=``,i=``;for(let a in e){let o=e[a];a[0]==`@`?a[1]==`i`?n=a+` `+o+`;`:r+=a[1]==`f`?I(o,a):a+`{`+I(o,a[1]==`k`?``:t)+`}`:typeof o==`object`?r+=I(o,t?t.replace(/([^,])+/g,e=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+` `+t:t)):a):o!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,`-$&`).toLowerCase(),i+=I.p?I.p(a,o):a+`:`+o+`;`)}return n+(t&&i?t+`{`+i+`}`:i)+r},L={},R=e=>{if(typeof e==`object`){let t=``;for(let n in e)t+=n+R(e[n]);return t}return e},z=(e,t,n,r,i)=>{let a=R(e),o=L[a]||(L[a]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return`go`+n})(a));if(!L[o]){let t=a===e?(e=>{let t,n,r=[{}];for(;t=N.exec(e.replace(P,``));)t[4]?r.shift():t[3]?(n=t[3].replace(F,` `).trim(),r.unshift(r[0][n]=r[0][n]||{})):r[0][t[1]]=t[2].replace(F,` `).trim();return r[0]})(e):e;L[o]=I(i?{[`@keyframes `+o]:t}:t,n?``:`.`+o)}let s=n&&L.g?L.g:null;return n&&(L.g=L[o]),((e,t,n,r)=>{r?t.data=t.data.replace(r,e):t.data.indexOf(e)===-1&&(t.data=n?e+t.data:t.data+e)})(L[o],t,r,s),o},B=(e,t,n)=>e.reduce((e,r,i)=>{let a=t[i];if(a&&a.call){let e=a(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;a=t?`.`+t:e&&typeof e==`object`?e.props?``:I(e,``):!1===e?``:e}return e+r+(a??``)},``);function V(e){let t=this||{},n=e.call?e(t.p):e;return z(n.unshift?n.raw?B(n,[].slice.call(arguments,1),t.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(t.p):n),{}):n,M(t.target),t.g,t.o,t.k)}V.bind({g:1}),V.bind({k:1});var H={colors:{inherit:`inherit`,current:`currentColor`,transparent:`transparent`,black:`#000000`,white:`#ffffff`,neutral:{50:`#f9fafb`,100:`#f2f4f7`,200:`#eaecf0`,300:`#d0d5dd`,400:`#98a2b3`,500:`#667085`,600:`#475467`,700:`#344054`,800:`#1d2939`,900:`#101828`},darkGray:{50:`#525c7a`,100:`#49536e`,200:`#414962`,300:`#394056`,400:`#313749`,500:`#292e3d`,600:`#212530`,700:`#191c24`,800:`#111318`,900:`#0b0d10`},gray:{50:`#f9fafb`,100:`#f2f4f7`,200:`#eaecf0`,300:`#d0d5dd`,400:`#98a2b3`,500:`#667085`,600:`#475467`,700:`#344054`,800:`#1d2939`,900:`#101828`},blue:{25:`#F5FAFF`,50:`#EFF8FF`,100:`#D1E9FF`,200:`#B2DDFF`,300:`#84CAFF`,400:`#53B1FD`,500:`#2E90FA`,600:`#1570EF`,700:`#175CD3`,800:`#1849A9`,900:`#194185`},green:{25:`#F6FEF9`,50:`#ECFDF3`,100:`#D1FADF`,200:`#A6F4C5`,300:`#6CE9A6`,400:`#32D583`,500:`#12B76A`,600:`#039855`,700:`#027A48`,800:`#05603A`,900:`#054F31`},red:{50:`#fef2f2`,100:`#fee2e2`,200:`#fecaca`,300:`#fca5a5`,400:`#f87171`,500:`#ef4444`,600:`#dc2626`,700:`#b91c1c`,800:`#991b1b`,900:`#7f1d1d`,950:`#450a0a`},yellow:{25:`#FFFCF5`,50:`#FFFAEB`,100:`#FEF0C7`,200:`#FEDF89`,300:`#FEC84B`,400:`#FDB022`,500:`#F79009`,600:`#DC6803`,700:`#B54708`,800:`#93370D`,900:`#7A2E0E`},purple:{25:`#FAFAFF`,50:`#F4F3FF`,100:`#EBE9FE`,200:`#D9D6FE`,300:`#BDB4FE`,400:`#9B8AFB`,500:`#7A5AF8`,600:`#6938EF`,700:`#5925DC`,800:`#4A1FB8`,900:`#3E1C96`},teal:{25:`#F6FEFC`,50:`#F0FDF9`,100:`#CCFBEF`,200:`#99F6E0`,300:`#5FE9D0`,400:`#2ED3B7`,500:`#15B79E`,600:`#0E9384`,700:`#107569`,800:`#125D56`,900:`#134E48`},pink:{25:`#fdf2f8`,50:`#fce7f3`,100:`#fbcfe8`,200:`#f9a8d4`,300:`#f472b6`,400:`#ec4899`,500:`#db2777`,600:`#be185d`,700:`#9d174d`,800:`#831843`,900:`#500724`},cyan:{25:`#ecfeff`,50:`#cffafe`,100:`#a5f3fc`,200:`#67e8f9`,300:`#22d3ee`,400:`#06b6d4`,500:`#0891b2`,600:`#0e7490`,700:`#155e75`,800:`#164e63`,900:`#083344`}},alpha:{100:`ff`,90:`e5`,80:`cc`,70:`b3`,60:`99`,50:`80`,40:`66`,30:`4d`,20:`33`,10:`1a`,0:`00`},font:{size:{"2xs":`calc(var(--tsrd-font-size) * 0.625)`,xs:`calc(var(--tsrd-font-size) * 0.75)`,sm:`calc(var(--tsrd-font-size) * 0.875)`,md:`var(--tsrd-font-size)`,lg:`calc(var(--tsrd-font-size) * 1.125)`,xl:`calc(var(--tsrd-font-size) * 1.25)`,"2xl":`calc(var(--tsrd-font-size) * 1.5)`,"3xl":`calc(var(--tsrd-font-size) * 1.875)`,"4xl":`calc(var(--tsrd-font-size) * 2.25)`,"5xl":`calc(var(--tsrd-font-size) * 3)`,"6xl":`calc(var(--tsrd-font-size) * 3.75)`,"7xl":`calc(var(--tsrd-font-size) * 4.5)`,"8xl":`calc(var(--tsrd-font-size) * 6)`,"9xl":`calc(var(--tsrd-font-size) * 8)`},lineHeight:{"3xs":`calc(var(--tsrd-font-size) * 0.75)`,"2xs":`calc(var(--tsrd-font-size) * 0.875)`,xs:`calc(var(--tsrd-font-size) * 1)`,sm:`calc(var(--tsrd-font-size) * 1.25)`,md:`calc(var(--tsrd-font-size) * 1.5)`,lg:`calc(var(--tsrd-font-size) * 1.75)`,xl:`calc(var(--tsrd-font-size) * 2)`,"2xl":`calc(var(--tsrd-font-size) * 2.25)`,"3xl":`calc(var(--tsrd-font-size) * 2.5)`,"4xl":`calc(var(--tsrd-font-size) * 2.75)`,"5xl":`calc(var(--tsrd-font-size) * 3)`,"6xl":`calc(var(--tsrd-font-size) * 3.25)`,"7xl":`calc(var(--tsrd-font-size) * 3.5)`,"8xl":`calc(var(--tsrd-font-size) * 3.75)`,"9xl":`calc(var(--tsrd-font-size) * 4)`},weight:{thin:`100`,extralight:`200`,light:`300`,normal:`400`,medium:`500`,semibold:`600`,bold:`700`,extrabold:`800`,black:`900`},fontFamily:{sans:`ui-sans-serif, Inter, system-ui, sans-serif, sans-serif`,mono:`ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`}},breakpoints:{xs:`320px`,sm:`640px`,md:`768px`,lg:`1024px`,xl:`1280px`,"2xl":`1536px`},border:{radius:{none:`0px`,xs:`calc(var(--tsrd-font-size) * 0.125)`,sm:`calc(var(--tsrd-font-size) * 0.25)`,md:`calc(var(--tsrd-font-size) * 0.375)`,lg:`calc(var(--tsrd-font-size) * 0.5)`,xl:`calc(var(--tsrd-font-size) * 0.75)`,"2xl":`calc(var(--tsrd-font-size) * 1)`,"3xl":`calc(var(--tsrd-font-size) * 1.5)`,full:`9999px`}},size:{0:`0px`,.25:`calc(var(--tsrd-font-size) * 0.0625)`,.5:`calc(var(--tsrd-font-size) * 0.125)`,1:`calc(var(--tsrd-font-size) * 0.25)`,1.5:`calc(var(--tsrd-font-size) * 0.375)`,2:`calc(var(--tsrd-font-size) * 0.5)`,2.5:`calc(var(--tsrd-font-size) * 0.625)`,3:`calc(var(--tsrd-font-size) * 0.75)`,3.5:`calc(var(--tsrd-font-size) * 0.875)`,4:`calc(var(--tsrd-font-size) * 1)`,4.5:`calc(var(--tsrd-font-size) * 1.125)`,5:`calc(var(--tsrd-font-size) * 1.25)`,5.5:`calc(var(--tsrd-font-size) * 1.375)`,6:`calc(var(--tsrd-font-size) * 1.5)`,6.5:`calc(var(--tsrd-font-size) * 1.625)`,7:`calc(var(--tsrd-font-size) * 1.75)`,8:`calc(var(--tsrd-font-size) * 2)`,9:`calc(var(--tsrd-font-size) * 2.25)`,10:`calc(var(--tsrd-font-size) * 2.5)`,11:`calc(var(--tsrd-font-size) * 2.75)`,12:`calc(var(--tsrd-font-size) * 3)`,14:`calc(var(--tsrd-font-size) * 3.5)`,16:`calc(var(--tsrd-font-size) * 4)`,20:`calc(var(--tsrd-font-size) * 5)`,24:`calc(var(--tsrd-font-size) * 6)`,28:`calc(var(--tsrd-font-size) * 7)`,32:`calc(var(--tsrd-font-size) * 8)`,36:`calc(var(--tsrd-font-size) * 9)`,40:`calc(var(--tsrd-font-size) * 10)`,44:`calc(var(--tsrd-font-size) * 11)`,48:`calc(var(--tsrd-font-size) * 12)`,52:`calc(var(--tsrd-font-size) * 13)`,56:`calc(var(--tsrd-font-size) * 14)`,60:`calc(var(--tsrd-font-size) * 15)`,64:`calc(var(--tsrd-font-size) * 16)`,72:`calc(var(--tsrd-font-size) * 18)`,80:`calc(var(--tsrd-font-size) * 20)`,96:`calc(var(--tsrd-font-size) * 24)`},shadow:{xs:(e=`rgb(0 0 0 / 0.1)`)=>`0 1px 2px 0 rgb(0 0 0 / 0.05)`,sm:(e=`rgb(0 0 0 / 0.1)`)=>`0 1px 3px 0 ${e}, 0 1px 2px -1px ${e}`,md:(e=`rgb(0 0 0 / 0.1)`)=>`0 4px 6px -1px ${e}, 0 2px 4px -2px ${e}`,lg:(e=`rgb(0 0 0 / 0.1)`)=>`0 10px 15px -3px ${e}, 0 4px 6px -4px ${e}`,xl:(e=`rgb(0 0 0 / 0.1)`)=>`0 20px 25px -5px ${e}, 0 8px 10px -6px ${e}`,"2xl":(e=`rgb(0 0 0 / 0.25)`)=>`0 25px 50px -12px ${e}`,inner:(e=`rgb(0 0 0 / 0.05)`)=>`inset 0 2px 4px 0 ${e}`,none:()=>`none`},zIndices:{hide:-1,auto:`auto`,base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800}},U=e=>{let{colors:t,font:n,size:r,alpha:i,shadow:a,border:o}=H,{fontFamily:s,lineHeight:c,size:l}=n,u=e?V.bind({target:e}):V;return{devtoolsPanelContainer:u`
      direction: ltr;
      position: fixed;
      bottom: 0;
      right: 0;
      z-index: 99999;
      width: 100%;
      max-height: 90%;
      border-top: 1px solid ${t.gray[700]};
      transform-origin: top;
    `,devtoolsPanelContainerVisibility:e=>u`
        visibility: ${e?`visible`:`hidden`};
      `,devtoolsPanelContainerResizing:e=>e()?u`
          transition: none;
        `:u`
        transition: all 0.4s ease;
      `,devtoolsPanelContainerAnimation:(e,t)=>e?u`
          pointer-events: auto;
          transform: translateY(0);
        `:u`
        pointer-events: none;
        transform: translateY(${t}px);
      `,logo:u`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      font-family: ${s.sans};
      gap: ${H.size[.5]};
      padding: 0px;
      &:hover {
        opacity: 0.7;
      }
      &:focus-visible {
        outline-offset: 4px;
        border-radius: ${o.radius.xs};
        outline: 2px solid ${t.blue[800]};
      }
    `,tanstackLogo:u`
      font-size: ${n.size.md};
      font-weight: ${n.weight.bold};
      line-height: ${n.lineHeight.xs};
      white-space: nowrap;
      color: ${t.gray[300]};
    `,routerLogo:u`
      font-weight: ${n.weight.semibold};
      font-size: ${n.size.xs};
      background: linear-gradient(to right, #84cc16, #10b981);
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,devtoolsPanel:u`
      display: flex;
      font-size: ${l.sm};
      font-family: ${s.sans};
      background-color: ${t.darkGray[700]};
      color: ${t.gray[300]};

      @media (max-width: 700px) {
        flex-direction: column;
      }
      @media (max-width: 600px) {
        font-size: ${l.xs};
      }
    `,dragHandle:u`
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 4px;
      cursor: row-resize;
      z-index: 100000;
      &:hover {
        background-color: ${t.purple[400]}${i[90]};
      }
    `,firstContainer:u`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      border-right: 1px solid ${t.gray[700]};
      display: flex;
      flex-direction: column;
    `,routerExplorerContainer:u`
      overflow-y: auto;
      flex: 1;
    `,routerExplorer:u`
      padding: ${H.size[2]};
    `,row:u`
      display: flex;
      align-items: center;
      padding: ${H.size[2]} ${H.size[2.5]};
      gap: ${H.size[2.5]};
      border-bottom: ${t.darkGray[500]} 1px solid;
      align-items: center;
    `,detailsHeader:u`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      position: sticky;
      top: 0;
      z-index: 2;
      background-color: ${t.darkGray[600]};
      padding: 0px ${H.size[2]};
      font-weight: ${n.weight.medium};
      font-size: ${n.size.xs};
      min-height: ${H.size[8]};
      line-height: ${n.lineHeight.xs};
      text-align: left;
      display: flex;
      align-items: center;
    `,maskedBadge:u`
      background: ${t.yellow[900]}${i[70]};
      color: ${t.yellow[300]};
      display: inline-block;
      padding: ${H.size[0]} ${H.size[2.5]};
      border-radius: ${o.radius.full};
      font-size: ${n.size.xs};
      font-weight: ${n.weight.normal};
      border: 1px solid ${t.yellow[300]};
    `,maskedLocation:u`
      color: ${t.yellow[300]};
    `,detailsContent:u`
      padding: ${H.size[1.5]} ${H.size[2]};
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: ${n.size.xs};
    `,routeMatchesToggle:u`
      display: flex;
      align-items: center;
      border: 1px solid ${t.gray[500]};
      border-radius: ${o.radius.sm};
      overflow: hidden;
    `,routeMatchesToggleBtn:(e,r)=>{let a=[u`
        appearance: none;
        border: none;
        font-size: 12px;
        padding: 4px 8px;
        background: transparent;
        cursor: pointer;
        font-family: ${s.sans};
        font-weight: ${n.weight.medium};
      `];if(e){let e=u`
          background: ${t.darkGray[400]};
          color: ${t.gray[300]};
        `;a.push(e)}else{let e=u`
          color: ${t.gray[500]};
          background: ${t.darkGray[800]}${i[20]};
        `;a.push(e)}return r&&a.push(u`
          border-right: 1px solid ${H.colors.gray[500]};
        `),a},detailsHeaderInfo:u`
      flex: 1;
      justify-content: flex-end;
      display: flex;
      align-items: center;
      font-weight: ${n.weight.normal};
      color: ${t.gray[400]};
    `,matchRow:e=>{let n=[u`
        display: flex;
        border-bottom: 1px solid ${t.darkGray[400]};
        cursor: pointer;
        align-items: center;
        padding: ${r[1]} ${r[2]};
        gap: ${r[2]};
        font-size: ${l.xs};
        color: ${t.gray[300]};
      `];if(e){let e=u`
          background: ${t.darkGray[500]};
        `;n.push(e)}return n},matchIndicator:e=>{let n=[u`
        flex: 0 0 auto;
        width: ${r[3]};
        height: ${r[3]};
        background: ${t[e][900]};
        border: 1px solid ${t[e][500]};
        border-radius: ${o.radius.full};
        transition: all 0.25s ease-out;
        box-sizing: border-box;
      `];if(e===`gray`){let e=u`
          background: ${t.gray[700]};
          border-color: ${t.gray[400]};
        `;n.push(e)}return n},matchID:u`
      flex: 1;
      line-height: ${c.xs};
    `,ageTicker:e=>{let n=[u`
        display: flex;
        gap: ${r[1]};
        font-size: ${l.xs};
        color: ${t.gray[400]};
        font-variant-numeric: tabular-nums;
        line-height: ${c.xs};
      `];if(e){let e=u`
          color: ${t.yellow[400]};
        `;n.push(e)}return n},secondContainer:u`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      border-right: 1px solid ${t.gray[700]};
      display: flex;
      flex-direction: column;
    `,thirdContainer:u`
      flex: 1 1 500px;
      overflow: auto;
      display: flex;
      flex-direction: column;
      height: 100%;
      border-right: 1px solid ${t.gray[700]};

      @media (max-width: 700px) {
        border-top: 2px solid ${t.gray[700]};
      }
    `,fourthContainer:u`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      display: flex;
      flex-direction: column;
    `,routesContainer:u`
      overflow-x: auto;
      overflow-y: visible;
    `,routesRowContainer:(e,n)=>{let i=[u`
        display: flex;
        border-bottom: 1px solid ${t.darkGray[400]};
        align-items: center;
        padding: ${r[1]} ${r[2]};
        gap: ${r[2]};
        font-size: ${l.xs};
        color: ${t.gray[300]};
        cursor: ${n?`pointer`:`default`};
        line-height: ${c.xs};
      `];if(e){let e=u`
          background: ${t.darkGray[500]};
        `;i.push(e)}return i},routesRow:e=>{let n=[u`
        flex: 1 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: ${l.xs};
        line-height: ${c.xs};
      `];if(!e){let e=u`
          color: ${t.gray[400]};
        `;n.push(e)}return n},routesRowInner:u`
      display: 'flex';
      align-items: 'center';
      flex-grow: 1;
      min-width: 0;
    `,routeParamInfo:u`
      color: ${t.gray[400]};
      font-size: ${l.xs};
      line-height: ${c.xs};
    `,nestedRouteRow:e=>u`
        margin-left: ${e?0:r[3.5]};
        border-left: ${e?``:`solid 1px ${t.gray[700]}`};
      `,code:u`
      font-size: ${l.xs};
      line-height: ${c.xs};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `,matchesContainer:u`
      flex: 1 1 auto;
      overflow-y: auto;
    `,cachedMatchesContainer:u`
      flex: 1 1 auto;
      overflow-y: auto;
      max-height: 50%;
    `,historyContainer:u`
      display: flex;
      flex: 1 1 auto;
      overflow-y: auto;
      max-height: 50%;
    `,historyOverflowContainer:u`
      padding: ${r[1]} ${r[2]};
      font-size: ${H.font.size.xs};
    `,maskedBadgeContainer:u`
      flex: 1;
      justify-content: flex-end;
      display: flex;
    `,matchDetails:u`
      display: flex;
      flex-direction: column;
      padding: ${H.size[2]};
      font-size: ${H.font.size.xs};
      color: ${H.colors.gray[300]};
      line-height: ${H.font.lineHeight.sm};
    `,matchStatus:(e,t)=>{let n=t&&e===`success`?t===`beforeLoad`?`purple`:`blue`:{pending:`yellow`,success:`green`,error:`red`,notFound:`purple`,redirected:`gray`}[e];return u`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        border-radius: ${H.border.radius.sm};
        font-weight: ${H.font.weight.normal};
        background-color: ${H.colors[n][900]}${H.alpha[90]};
        color: ${H.colors[n][300]};
        border: 1px solid ${H.colors[n][600]};
        margin-bottom: ${H.size[2]};
        transition: all 0.25s ease-out;
      `},matchDetailsInfo:u`
      display: flex;
      justify-content: flex-end;
      flex: 1;
    `,matchDetailsInfoLabel:u`
      display: flex;
    `,mainCloseBtn:u`
      background: ${t.darkGray[700]};
      padding: ${r[1]} ${r[2]} ${r[1]} ${r[1.5]};
      border-radius: ${o.radius.md};
      position: fixed;
      z-index: 99999;
      display: inline-flex;
      width: fit-content;
      cursor: pointer;
      appearance: none;
      border: 0;
      gap: 8px;
      align-items: center;
      border: 1px solid ${t.gray[500]};
      font-size: ${n.size.xs};
      cursor: pointer;
      transition: all 0.25s ease-out;

      &:hover {
        background: ${t.darkGray[500]};
      }
    `,mainCloseBtnPosition:e=>u`
        ${e===`top-left`?`top: ${r[2]}; left: ${r[2]};`:``}
        ${e===`top-right`?`top: ${r[2]}; right: ${r[2]};`:``}
        ${e===`bottom-left`?`bottom: ${r[2]}; left: ${r[2]};`:``}
        ${e===`bottom-right`?`bottom: ${r[2]}; right: ${r[2]};`:``}
      `,mainCloseBtnAnimation:e=>e?u`
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
      `:u`
          opacity: 1;
          pointer-events: auto;
          visibility: visible;
        `,routerLogoCloseButton:u`
      font-weight: ${n.weight.semibold};
      font-size: ${n.size.xs};
      background: linear-gradient(to right, #98f30c, #00f4a3);
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,mainCloseBtnDivider:u`
      width: 1px;
      background: ${H.colors.gray[600]};
      height: 100%;
      border-radius: 999999px;
      color: transparent;
    `,mainCloseBtnIconContainer:u`
      position: relative;
      width: ${r[5]};
      height: ${r[5]};
      background: pink;
      border-radius: 999999px;
      overflow: hidden;
    `,mainCloseBtnIconOuter:u`
      width: ${r[5]};
      height: ${r[5]};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      filter: blur(3px) saturate(1.8) contrast(2);
    `,mainCloseBtnIconInner:u`
      width: ${r[4]};
      height: ${r[4]};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `,panelCloseBtn:u`
      position: absolute;
      cursor: pointer;
      z-index: 100001;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      background-color: ${t.darkGray[700]};
      &:hover {
        background-color: ${t.darkGray[500]};
      }

      top: 0;
      right: ${r[2]};
      transform: translate(0, -100%);
      border-right: ${t.darkGray[300]} 1px solid;
      border-left: ${t.darkGray[300]} 1px solid;
      border-top: ${t.darkGray[300]} 1px solid;
      border-bottom: none;
      border-radius: ${o.radius.sm} ${o.radius.sm} 0px 0px;
      padding: ${r[1]} ${r[1.5]} ${r[.5]} ${r[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        top: 100%;
        left: -${r[2.5]};
        height: ${r[1.5]};
        width: calc(100% + ${r[5]});
      }
    `,panelCloseBtnIcon:u`
      color: ${t.gray[400]};
      width: ${r[2]};
      height: ${r[2]};
    `,navigateButton:u`
      background: none;
      border: none;
      padding: 0 0 0 4px;
      margin: 0;
      color: ${t.gray[400]};
      font-size: ${l.md};
      cursor: pointer;
      line-height: 1;
      vertical-align: middle;
      margin-right: 0.5ch;
      flex-shrink: 0;
      &:hover {
        color: ${t.blue[300]};
      }
    `}};function W(){let[e]=_(U(a(s)));return e}var ee=e=>{try{let t=localStorage.getItem(e);return typeof t==`string`?JSON.parse(t):void 0}catch{return}};function G(e,t){let[n,r]=_();return u(()=>{r(ee(e)??(typeof t==`function`?t():t))}),[n,t=>{r(n=>{let r=t;typeof t==`function`&&(r=t(n));try{localStorage.setItem(e,JSON.stringify(r))}catch{}return r})}]}var K=typeof window>`u`;function q(e){return e.isFetching&&e.status===`success`?e.isFetching===`beforeLoad`?`purple`:`blue`:{pending:`yellow`,success:`green`,error:`red`,notFound:`purple`,redirected:`gray`}[e.status]}function te(e,t){let n=e.find(e=>e.routeId===t.id);return n?q(n):`gray`}function ne(){let[e,t]=_(!1);return(K?u:b)(()=>{t(!0)}),e}var re=e=>{let t=Object.getOwnPropertyNames(Object(e)),n=typeof e==`bigint`?`${e.toString()}n`:e;try{return JSON.stringify(n,t)}catch{return`unable to stringify`}};function J(e,t=[e=>e]){return e.map((e,t)=>[e,t]).sort(([e,n],[r,i])=>{for(let n of t){let t=n(e),i=n(r);if(t===void 0){if(i===void 0)continue;return 1}if(t!==i)return t>i?1:-1}return n-i}).map(([e])=>e)}var ie=e(`<span><svg xmlns=http://www.w3.org/2000/svg width=12 height=12 fill=none viewBox="0 0 24 24"><path stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M9 18l6-6-6-6">`),Y=e(`<div>`),ae=e(`<button><span> `),X=e(`<div><div><button> [<!> ... <!>]`),oe=e(`<button><span></span> 🔄 `),se=e(`<span>:`),ce=e(`<span>`),le=({expanded:e,style:t={}})=>{let n=pe();return(()=>{var t=ie(),r=t.firstChild;return b(i=>{var a=n().expander,o=A(n().expanderIcon(e));return a!==i.e&&g(t,i.e=a),o!==i.t&&D(r,`class`,i.t=o),i},{e:void 0,t:void 0}),t})()};function ue(e,t){if(t<1)return[];let n=0,r=[];for(;n<e.length;)r.push(e.slice(n,n+t)),n+=t;return r}function de(e){return Symbol.iterator in e}function Z({value:e,defaultExpanded:t,pageSize:n=100,filterSubEntries:r,...i}){let[a,s]=_(!!t),c=()=>s(e=>!e),l=d(()=>typeof e()),u=d(()=>{let n=[],i=e=>{let n=t===!0?{[e.label]:!0}:t?.[e.label];return{...e,value:()=>e.value,defaultExpanded:n}};return Array.isArray(e())?n=e().map((e,t)=>i({label:t.toString(),value:e})):e()!==null&&typeof e()==`object`&&de(e())&&typeof e()[Symbol.iterator]==`function`?n=Array.from(e(),(e,t)=>i({label:t.toString(),value:e})):typeof e()==`object`&&e()!==null&&(n=Object.entries(e()).map(([e,t])=>i({label:e,value:t}))),r?r(n):n}),f=d(()=>ue(u(),n)),[p,m]=_([]),[h,v]=_(void 0),y=pe(),x=()=>{v(e()())},S=t=>w(Z,O({value:e,filterSubEntries:r},i,t));return(()=>{var t=Y();return o(t,(()=>{var t=T(()=>!!f().length);return()=>t()?[(()=>{var e=ae(),t=e.firstChild,n=t.firstChild;return e.$$click=()=>c(),o(e,w(le,{get expanded(){return a()??!1}}),t),o(e,()=>i.label,t),o(t,()=>String(l).toLowerCase()===`iterable`?`(Iterable) `:``,n),o(t,()=>u().length,n),o(t,()=>u().length>1?`items`:`item`,null),b(n=>{var r=y().expandButton,i=y().info;return r!==n.e&&g(e,n.e=r),i!==n.t&&g(t,n.t=i),n},{e:void 0,t:void 0}),e})(),T(()=>T(()=>!!(a()??!1))()?T(()=>f().length===1)()?(()=>{var e=Y();return o(e,()=>u().map((e,t)=>S(e))),b(()=>g(e,y().subEntries)),e})():(()=>{var e=Y();return o(e,()=>f().map((e,t)=>(()=>{var r=X(),i=r.firstChild,a=i.firstChild,s=a.firstChild,c=s.nextSibling,l=c.nextSibling.nextSibling;return l.nextSibling,a.$$click=()=>m(e=>e.includes(t)?e.filter(e=>e!==t):[...e,t]),o(a,w(le,{get expanded(){return p().includes(t)}}),s),o(a,t*n,c),o(a,t*n+n-1,l),o(i,(()=>{var n=T(()=>!!p().includes(t));return()=>n()?(()=>{var t=Y();return o(t,()=>e.map(e=>S(e))),b(()=>g(t,y().subEntries)),t})():null})(),null),b(e=>{var t=y().entry,n=A(y().labelButton,`labelButton`);return t!==e.e&&g(i,e.e=t),n!==e.t&&g(a,e.t=n),e},{e:void 0,t:void 0}),r})())),b(()=>g(e,y().subEntries)),e})():null)]:T(()=>l()===`function`)()?w(Z,{get label(){return(()=>{var e=oe(),t=e.firstChild;return e.$$click=x,o(t,()=>i.label),b(()=>g(e,y().refreshValueBtn)),e})()},value:h,defaultExpanded:{}}):[(()=>{var e=se(),t=e.firstChild;return o(e,()=>i.label,t),e})(),` `,(()=>{var t=ce();return o(t,()=>re(e())),b(()=>g(t,y().value)),t})()]})()),b(()=>g(t,y().entry)),t})()}var fe=e=>{let{colors:t,font:n,size:r,alpha:i,shadow:a,border:o}=H,{fontFamily:s,lineHeight:c,size:l}=n,u=e?V.bind({target:e}):V;return{entry:u`
      font-family: ${s.mono};
      font-size: ${l.xs};
      line-height: ${c.sm};
      outline: none;
      word-break: break-word;
    `,labelButton:u`
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      background: transparent;
      border: none;
      padding: 0;
    `,expander:u`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: ${r[3]};
      height: ${r[3]};
      padding-left: 3px;
      box-sizing: content-box;
    `,expanderIcon:e=>e?u`
          transform: rotate(90deg);
          transition: transform 0.1s ease;
        `:u`
        transform: rotate(0deg);
        transition: transform 0.1s ease;
      `,expandButton:u`
      display: flex;
      gap: ${r[1]};
      align-items: center;
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      background: transparent;
      border: none;
      padding: 0;
    `,value:u`
      color: ${t.purple[400]};
    `,subEntries:u`
      margin-left: ${r[2]};
      padding-left: ${r[2]};
      border-left: 2px solid ${t.darkGray[400]};
    `,info:u`
      color: ${t.gray[500]};
      font-size: ${l[`2xs`]};
      padding-left: ${r[1]};
    `,refreshValueBtn:u`
      appearance: none;
      border: 0;
      cursor: pointer;
      background: transparent;
      color: inherit;
      padding: 0;
      font-family: ${s.mono};
      font-size: ${l.xs};
    `}};function pe(){let[e]=_(fe(a(s)));return e}f([`click`]);var me=e(`<div><div></div><div>/</div><div></div><div>/</div><div>`);function he(e){let t=[`s`,`min`,`h`,`d`],n=[e/1e3,e/6e4,e/36e5,e/864e5],r=0;for(let e=1;e<n.length&&!(n[e]<1);e++)r=e;return new Intl.NumberFormat(navigator.language,{compactDisplay:`short`,notation:`compact`,maximumFractionDigits:0}).format(n[r])+t[r]}function ge({match:e,router:t}){let n=W();if(!e)return null;let r=t().looseRoutesById[e.routeId];if(!r.options.loader)return null;let i=Date.now()-e.updatedAt,a=r.options.staleTime??t().options.defaultStaleTime??0,s=r.options.gcTime??t().options.defaultGcTime??1800*1e3;return(()=>{var e=me(),t=e.firstChild,r=t.nextSibling.nextSibling,c=r.nextSibling.nextSibling;return o(t,()=>he(i)),o(r,()=>he(a)),o(c,()=>he(s)),b(()=>g(e,A(n().ageTicker(i>a)))),e})()}var _e=e(`<button type=button>➔`);function ve({to:e,params:t,search:n,router:r}){let i=W();return(()=>{var a=_e();return a.$$click=i=>{i.stopPropagation(),r().navigate({to:e,params:t,search:n})},D(a,`title`,`Navigate to ${e}`),b(()=>g(a,i().navigateButton)),a})()}f([`click`]);var ye=e(`<button><div>TANSTACK</div><div>TanStack Router v1`),be=e(`<div style=display:flex;align-items:center;width:100%><div style=flex-grow:1;min-width:0>`),xe=e(`<code> `),Q=e(`<code>`),Se=e(`<div><div role=button><div>`),$=e(`<div>`),Ce=e(`<div><ul>`),we=e(`<div><button><svg xmlns=http://www.w3.org/2000/svg width=10 height=6 fill=none viewBox="0 0 10 6"><path stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=1.667 d="M1 1l4 4 4-4"></path></svg></button><div><div></div><div><div></div></div></div><div><div><div><span>Pathname</span></div><div><code></code></div><div><div><button type=button>Routes</button><button type=button>Matches</button><button type=button>History</button></div><div><div>age / staleTime / gcTime</div></div></div><div>`),Te=e(`<div><span>masked`),Ee=e(`<div role=button><div>`),De=e(`<li><div>`),Oe=e(`<li>This panel displays the most recent 15 navigations.`),ke=e(`<div><div><div>Cached Matches</div><div>age / staleTime / gcTime</div></div><div>`),Ae=e(`<div><div>Match Details</div><div><div><div><div></div></div><div><div>ID:</div><div><code></code></div></div><div><div>State:</div><div></div></div><div><div>Last Updated:</div><div></div></div></div></div><div>Explorer</div><div>`),je=e(`<div>Loader Data`),Me=e(`<div><div><span>Search Params</span></div><div>`),Ne=e(`<span style=margin-left:0.5rem>`),Pe=e(`<button type=button aria-label="Copy value to clipboard"style=cursor:pointer>`),Fe=15;function Ie(e){let{className:t,...n}=e,r=W();return(()=>{var e=ye(),a=e.firstChild,o=a.nextSibling;return i(e,O(n,{get class(){return A(r().logo,t?t():``)}}),!1,!0),b(e=>{var t=r().tanstackLogo,n=r().routerLogo;return t!==e.e&&g(a,e.e=t),n!==e.t&&g(o,e.t=n),e},{e:void 0,t:void 0}),e})()}function Le(e){return(()=>{var t=be(),n=t.firstChild;return o(t,()=>e.left,n),o(n,()=>e.children),o(t,()=>e.right,null),b(()=>g(t,e.class)),t})()}function Re({routerState:e,pendingMatches:n,router:i,route:a,isRoot:s,activeId:c,setActiveId:l}){let u=W(),f=d(()=>n().length?n():e().matches),p=d(()=>e().matches.find(e=>e.routeId===a.id)),m=d(()=>{try{if(p()?.params){let e=p()?.params,t=a.path||h(a.id);if(t.startsWith(`$`)){let n=t.slice(1);if(e[n])return`(${e[n]})`}}return``}catch{return``}}),_=d(()=>{if(s||!a.path)return;let e=Object.assign({},...f().map(e=>e.params)),t=r({path:a.fullPath,params:e,decoder:i().pathParamsDecoder});return t.isMissingParams?void 0:t.interpolatedPath});return(()=>{var r=Se(),d=r.firstChild,v=d.firstChild;return d.$$click=()=>{p()&&l(c()===a.id?``:a.id)},o(d,w(Le,{get class(){return A(u().routesRow(!!p()))},get left(){return w(y,{get when(){return _()},children:e=>w(ve,{get to(){return e()},router:i})})},get right(){return w(ge,{get match(){return p()},router:i})},get children(){return[(()=>{var e=xe(),n=e.firstChild;return o(e,()=>s?t:a.path||h(a.id),n),b(()=>g(e,u().code)),e})(),(()=>{var e=Q();return o(e,m),b(()=>g(e,u().routeParamInfo)),e})()]}}),null),o(r,(()=>{var t=T(()=>!!a.children?.length);return()=>t()?(()=>{var t=$();return o(t,()=>[...a.children].sort((e,t)=>e.rank-t.rank).map(t=>w(Re,{routerState:e,pendingMatches:n,router:i,route:t,activeId:c,setActiveId:l}))),b(()=>g(t,u().nestedRouteRow(!!s))),t})():null})(),null),b(e=>{var t=`Open match details for ${a.id}`,n=A(u().routesRowContainer(a.id===c(),!!p())),r=A(u().matchIndicator(te(f(),a)));return t!==e.e&&D(d,`aria-label`,e.e=t),n!==e.t&&g(d,e.t=n),r!==e.a&&g(v,e.a=r),e},{e:void 0,t:void 0,a:void 0}),r})()}var ze=function({...e}){let{isOpen:r=!0,setIsOpen:a,handleDragStart:s,router:f,routerState:p,shadowDOMTarget:h,...v}=e,{onCloseClick:y}=n(),C=W(),{className:k,style:j,...M}=v,[N,P]=G(`tanstackRouterDevtoolsActiveTab`,`routes`),[F,I]=G(`tanstackRouterDevtoolsActiveRouteId`,``),[L,R]=_([]),[z,B]=_(!1),V,H;if(`subscribe`in f().stores.pendingMatchesSnapshot){let[e,t]=_([]);V=e;let[n,r]=_([]);H=n,u(()=>{let e=f().stores.pendingMatchesSnapshot;t(e.state);let n=e.subscribe(()=>{t(e.state)});c(()=>n.unsubscribe())}),u(()=>{let e=f().stores.cachedMatchesSnapshot;r(e.state);let t=e.subscribe(()=>{r(e.state)});c(()=>t.unsubscribe())})}else V=()=>f().stores.pendingMatchesSnapshot.state,H=()=>f().stores.cachedMatchesSnapshot.state;u(()=>{let e=p().matches,t=e[e.length-1];if(!t)return;let n=E(()=>L()),r=n[0],i=r&&r.pathname===t.pathname&&JSON.stringify(r.search??{})===JSON.stringify(t.search??{});(!r||!i)&&(n.length>=Fe&&B(!0),R(e=>{let n=[t,...e];return n.splice(Fe),n}))});let U=d(()=>[...V(),...p().matches,...H()].find(e=>e.routeId===F()||e.id===F())),ee=d(()=>Object.keys(p().location.search).length),K=d(()=>({...f(),state:p()})),te=d(()=>Object.fromEntries(J(Object.keys(K()),[`state`,`routesById`,`routesByPath`,`options`,`manifest`].map(e=>t=>t!==e)).map(e=>[e,K()[e]]).filter(e=>typeof e[1]!=`function`&&![`stores`,`basepath`,`injectedHtml`,`subscribers`,`latestLoadPromise`,`navigateTimeout`,`resetNextScroll`,`tempLocationKey`,`latestLocation`,`routeTree`,`history`].includes(e[0])))),ne=d(()=>U()?.loaderData),re=d(()=>U()),ie=d(()=>p().location.search);return(()=>{var e=we(),n=e.firstChild,r=n.firstChild,c=n.nextSibling,u=c.firstChild,d=u.nextSibling,h=d.firstChild,_=c.nextSibling,v=_.firstChild,E=v.firstChild;E.firstChild;var R=E.nextSibling,B=R.firstChild,W=R.nextSibling,G=W.firstChild,K=G.firstChild,J=K.nextSibling,Y=J.nextSibling,ae=G.nextSibling,X=W.nextSibling;return i(e,O({get class(){return A(C().devtoolsPanel,`TanStackRouterDevtoolsPanel`,k?k():``)},get style(){return j?j():``}},M),!1,!0),o(e,s?(()=>{var e=$();return l(e,`mousedown`,s,!0),b(()=>g(e,C().dragHandle)),e})():null,n),n.$$click=e=>{a&&a(!1),y(e)},o(u,w(Ie,{"aria-hidden":!0,onClick:e=>{a&&a(!1),y(e)}})),o(h,w(Z,{label:`Router`,value:te,defaultExpanded:{state:{},context:{},options:{}},filterSubEntries:e=>e.filter(e=>typeof e.value()!=`function`)})),o(E,(()=>{var e=T(()=>!!p().location.maskedLocation);return()=>e()?(()=>{var e=Te(),t=e.firstChild;return b(n=>{var r=C().maskedBadgeContainer,i=C().maskedBadge;return r!==n.e&&g(e,n.e=r),i!==n.t&&g(t,n.t=i),n},{e:void 0,t:void 0}),e})():null})(),null),o(B,()=>p().location.pathname),o(R,(()=>{var e=T(()=>!!p().location.maskedLocation);return()=>e()?(()=>{var e=Q();return o(e,()=>p().location.maskedLocation?.pathname),b(()=>g(e,C().maskedLocation)),e})():null})(),null),K.$$click=()=>{P(`routes`)},J.$$click=()=>{P(`matches`)},Y.$$click=()=>{P(`history`)},o(X,w(S,{get children(){return[w(m,{get when(){return N()===`routes`},get children(){return w(Re,{routerState:p,pendingMatches:V,router:f,get route(){return f().routeTree},isRoot:!0,activeId:F,setActiveId:I})}}),w(m,{get when(){return N()===`matches`},get children(){var e=$();return o(e,()=>(V().length?V():p().matches).map((e,n)=>(()=>{var n=Ee(),r=n.firstChild;return n.$$click=()=>I(F()===e.id?``:e.id),o(n,w(Le,{get left(){return w(ve,{get to(){return e.pathname},get params(){return e.params},get search(){return e.search},router:f})},get right(){return w(ge,{match:e,router:f})},get children(){var n=Q();return o(n,()=>`${e.routeId===`__root__`?t:e.pathname}`),b(()=>g(n,C().matchID)),n}}),null),b(t=>{var i=`Open match details for ${e.id}`,a=A(C().matchRow(e===U())),o=A(C().matchIndicator(q(e)));return i!==t.e&&D(n,`aria-label`,t.e=i),a!==t.t&&g(n,t.t=a),o!==t.a&&g(r,t.a=o),t},{e:void 0,t:void 0,a:void 0}),n})())),e}}),w(m,{get when(){return N()===`history`},get children(){var e=Ce(),n=e.firstChild;return o(n,w(x,{get each(){return L()},children:(e,n)=>(()=>{var r=De(),i=r.firstChild;return o(r,w(Le,{get left(){return w(ve,{get to(){return e.pathname},get params(){return e.params},get search(){return e.search},router:f})},get right(){return w(ge,{match:e,router:f})},get children(){var n=Q();return o(n,()=>`${e.routeId===`__root__`?t:e.pathname}`),b(()=>g(n,C().matchID)),n}}),null),b(t=>{var a=A(C().matchRow(e===U())),o=A(C().matchIndicator(n()===0?`green`:`gray`));return a!==t.e&&g(r,t.e=a),o!==t.t&&g(i,t.t=o),t},{e:void 0,t:void 0}),r})()}),null),o(n,(()=>{var e=T(()=>!!z());return()=>e()?(()=>{var e=Oe();return b(()=>g(e,C().historyOverflowContainer)),e})():null})(),null),e}})]}})),o(_,(()=>{var e=T(()=>!!H().length);return()=>e()?(()=>{var e=ke(),t=e.firstChild,n=t.firstChild.nextSibling,r=t.nextSibling;return o(r,()=>H().map(e=>(()=>{var t=Ee(),n=t.firstChild;return t.$$click=()=>I(F()===e.id?``:e.id),o(t,w(Le,{get left(){return w(ve,{get to(){return e.pathname},get params(){return e.params},get search(){return e.search},router:f})},get right(){return w(ge,{match:e,router:f})},get children(){var t=Q();return o(t,()=>`${e.id}`),b(()=>g(t,C().matchID)),t}}),null),b(r=>{var i=`Open match details for ${e.id}`,a=A(C().matchRow(e===U())),o=A(C().matchIndicator(q(e)));return i!==r.e&&D(t,`aria-label`,r.e=i),a!==r.t&&g(t,r.t=a),o!==r.a&&g(n,r.a=o),r},{e:void 0,t:void 0,a:void 0}),t})())),b(r=>{var i=C().cachedMatchesContainer,a=C().detailsHeader,o=C().detailsHeaderInfo;return i!==r.e&&g(e,r.e=i),a!==r.t&&g(t,r.t=a),o!==r.a&&g(n,r.a=o),r},{e:void 0,t:void 0,a:void 0}),e})():null})(),null),o(e,(()=>{var e=T(()=>!!(U()&&U()?.status));return()=>e()?(()=>{var e=Ae(),t=e.firstChild,n=t.nextSibling,r=n.firstChild,i=r.firstChild,a=i.firstChild,s=i.nextSibling,c=s.firstChild.nextSibling,l=c.firstChild,u=s.nextSibling,d=u.firstChild.nextSibling,f=u.nextSibling,m=f.firstChild.nextSibling,h=n.nextSibling,_=h.nextSibling;return o(a,(()=>{var e=T(()=>!!(U()?.status===`success`&&U()?.isFetching));return()=>e()?`fetching`:U()?.status})()),o(l,()=>U()?.id),o(d,(()=>{var e=T(()=>!!V().find(e=>e.id===U()?.id));return()=>e()?`Pending`:p().matches.find(e=>e.id===U()?.id)?`Active`:`Cached`})()),o(m,(()=>{var e=T(()=>!!U()?.updatedAt);return()=>e()?new Date(U()?.updatedAt).toLocaleTimeString():`N/A`})()),o(e,(()=>{var e=T(()=>!!ne());return()=>e()?[(()=>{var e=je();return b(()=>g(e,C().detailsHeader)),e})(),(()=>{var e=$();return o(e,w(Z,{label:`loaderData`,value:ne,defaultExpanded:{}})),b(()=>g(e,C().detailsContent)),e})()]:null})(),h),o(_,w(Z,{label:`Match`,value:re,defaultExpanded:{}})),b(n=>{var a=C().thirdContainer,o=C().detailsHeader,l=C().matchDetails,p=C().matchStatus(U()?.status,U()?.isFetching),v=C().matchDetailsInfoLabel,y=C().matchDetailsInfo,b=C().matchDetailsInfoLabel,x=C().matchDetailsInfo,S=C().matchDetailsInfoLabel,w=C().matchDetailsInfo,T=C().detailsHeader,E=C().detailsContent;return a!==n.e&&g(e,n.e=a),o!==n.t&&g(t,n.t=o),l!==n.a&&g(r,n.a=l),p!==n.o&&g(i,n.o=p),v!==n.i&&g(s,n.i=v),y!==n.n&&g(c,n.n=y),b!==n.s&&g(u,n.s=b),x!==n.h&&g(d,n.h=x),S!==n.r&&g(f,n.r=S),w!==n.d&&g(m,n.d=w),T!==n.l&&g(h,n.l=T),E!==n.u&&g(_,n.u=E),n},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0}),e})():null})(),null),o(e,(()=>{var e=T(()=>!!ee());return()=>e()?(()=>{var e=Me(),t=e.firstChild;t.firstChild;var n=t.nextSibling;return o(t,typeof navigator<`u`?(()=>{var e=Ne();return o(e,w(Be,{getValue:()=>{let e=p().location.search;return JSON.stringify(e)}})),e})():null,null),o(n,w(Z,{value:ie,get defaultExpanded(){return Object.keys(p().location.search).reduce((e,t)=>(e[t]={},e),{})}})),b(r=>{var i=C().fourthContainer,a=C().detailsHeader,o=C().detailsContent;return i!==r.e&&g(e,r.e=i),a!==r.t&&g(t,r.t=a),o!==r.a&&g(n,r.a=o),r},{e:void 0,t:void 0,a:void 0}),e})():null})(),null),b(e=>{var t=C().panelCloseBtn,i=C().panelCloseBtnIcon,a=C().firstContainer,o=C().row,s=C().routerExplorerContainer,l=C().routerExplorer,f=C().secondContainer,p=C().matchesContainer,m=C().detailsHeader,y=C().detailsContent,b=C().detailsHeader,x=C().routeMatchesToggle,S=N()===`routes`,w=A(C().routeMatchesToggleBtn(N()===`routes`,!0)),T=N()===`matches`,O=A(C().routeMatchesToggleBtn(N()===`matches`,!0)),k=N()===`history`,j=A(C().routeMatchesToggleBtn(N()===`history`,!1)),M=C().detailsHeaderInfo,P=A(C().routesContainer);return t!==e.e&&g(n,e.e=t),i!==e.t&&D(r,`class`,e.t=i),a!==e.a&&g(c,e.a=a),o!==e.o&&g(u,e.o=o),s!==e.i&&g(d,e.i=s),l!==e.n&&g(h,e.n=l),f!==e.s&&g(_,e.s=f),p!==e.h&&g(v,e.h=p),m!==e.r&&g(E,e.r=m),y!==e.d&&g(R,e.d=y),b!==e.l&&g(W,e.l=b),x!==e.u&&g(G,e.u=x),S!==e.c&&(K.disabled=e.c=S),w!==e.w&&g(K,e.w=w),T!==e.m&&(J.disabled=e.m=T),O!==e.f&&g(J,e.f=O),k!==e.y&&(Y.disabled=e.y=k),j!==e.g&&g(Y,e.g=j),M!==e.p&&g(ae,e.p=M),P!==e.b&&g(X,e.b=P),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0,p:void 0,b:void 0}),e})()};function Be({getValue:e}){let[t,n]=_(!1),r=null,i=async()=>{if(typeof navigator>`u`||!navigator.clipboard?.writeText){console.warn(`TanStack Router Devtools: Clipboard API unavailable`);return}try{let t=e();await navigator.clipboard.writeText(t),n(!0),r&&clearTimeout(r),r=setTimeout(()=>n(!1),2500)}catch(e){console.error(`TanStack Router Devtools: Failed to copy`,e)}};return c(()=>{r&&clearTimeout(r)}),(()=>{var e=Pe();return e.$$click=i,o(e,()=>t()?`✅`:`📋`),b(()=>D(e,`title`,t()?`Copied!`:`Copy`)),e})()}f([`click`,`mousedown`]);var Ve=e(`<svg xmlns=http://www.w3.org/2000/svg enable-background="new 0 0 634 633"viewBox="0 0 634 633"><g transform=translate(1)><linearGradient x1=-641.486 x2=-641.486 y1=856.648 y2=855.931 gradientTransform="matrix(633 0 0 -633 406377 542258)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#6bdaff></stop><stop offset=0.319 stop-color=#f9ffb5></stop><stop offset=0.706 stop-color=#ffa770></stop><stop offset=1 stop-color=#ff7373></stop></linearGradient><circle cx=316.5 cy=316.5 r=316.5 fill-rule=evenodd clip-rule=evenodd></circle><defs><filter width=454 height=396.9 x=-137.5 y=412 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=-137.5 y=412 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=89.5 cy=610.5 fill=#015064 fill-rule=evenodd stroke=#00CFE2 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=316.5 y=412 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=316.5 y=412 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=543.5 cy=610.5 fill=#015064 fill-rule=evenodd stroke=#00CFE2 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=-137.5 y=450 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=-137.5 y=450 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=89.5 cy=648.5 fill=#015064 fill-rule=evenodd stroke=#00A8B8 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=316.5 y=450 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=316.5 y=450 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=543.5 cy=648.5 fill=#015064 fill-rule=evenodd stroke=#00A8B8 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=-137.5 y=486 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=-137.5 y=486 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=89.5 cy=684.5 fill=#015064 fill-rule=evenodd stroke=#007782 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=316.5 y=486 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=316.5 y=486 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=543.5 cy=684.5 fill=#015064 fill-rule=evenodd stroke=#007782 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=176.9 height=129.3 x=272.2 y=308 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=176.9 height=129.3 x=272.2 y=308 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><g><path fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11 d="M436 403.2l-5 28.6m-140-90.3l-10.9 62m52.8-19.4l-4.3 27.1"></path><linearGradient x1=-645.656 x2=-646.499 y1=854.878 y2=854.788 gradientTransform="matrix(-184.159 -32.4722 11.4608 -64.9973 -128419.844 34938.836)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ee2700></stop><stop offset=1 stop-color=#ff008e></stop></linearGradient><path fill-rule=evenodd d="M344.1 363l97.7 17.2c5.8 2.1 8.2 6.2 7.1 12.1-1 5.9-4.7 9.2-11 9.9l-106-18.7-57.5-59.2c-3.2-4.8-2.9-9.1.8-12.8 3.7-3.7 8.3-4.4 13.7-2.1l55.2 53.6z"clip-rule=evenodd></path><path fill=#D8D8D8 fill-rule=evenodd stroke=#FFF stroke-linecap=round stroke-linejoin=bevel stroke-width=7 d="M428.3 384.5l.9-6.5m-33.9 1.5l.9-6.5m-34 .5l.9-6.1m-38.9-16.1l4.2-3.9m-25.2-16.1l4.2-3.9"clip-rule=evenodd></path></g><defs><filter width=280.6 height=317.4 x=73.2 y=113.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=280.6 height=317.4 x=73.2 y=113.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><g><linearGradient x1=-646.8 x2=-646.8 y1=854.844 y2=853.844 gradientTransform="matrix(-100.1751 48.8587 -97.9753 -200.879 19124.773 203538.61)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#a17500></stop><stop offset=1 stop-color=#5d2100></stop></linearGradient><path fill-rule=evenodd d="M192.3 203c8.1 37.3 14 73.6 17.8 109.1 3.8 35.4 2.8 75.2-2.9 119.2l61.2-16.7c-15.6-59-25.2-97.9-28.6-116.6-3.4-18.7-10.8-51.8-22.2-99.6l-25.3 4.6"clip-rule=evenodd></path><linearGradient x1=-635.467 x2=-635.467 y1=852.115 y2=851.115 gradientTransform="matrix(92.6873 4.8575 2.0257 -38.6535 57323.695 36176.047)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M195 183.9s-12.6-22.1-36.5-29.9c-15.9-5.2-34.4-1.5-55.5 11.1 15.9 14.3 29.5 22.6 40.7 24.9 16.8 3.6 51.3-6.1 51.3-6.1z"clip-rule=evenodd></path><linearGradient x1=-636.573 x2=-636.573 y1=855.444 y2=854.444 gradientTransform="matrix(109.9945 5.7646 6.3597 -121.3507 64719.133 107659.336)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5s-47.5-8.5-83.2 15.7c-23.8 16.2-34.3 49.3-31.6 99.3 30.3-27.8 52.1-48.5 65.2-61.9 19.8-20 49.6-53.1 49.6-53.1z"clip-rule=evenodd></path><linearGradient x1=-632.145 x2=-632.145 y1=854.174 y2=853.174 gradientTransform="matrix(62.9558 3.2994 3.5021 -66.8246 37035.367 59284.227)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M195 183.9c-.8-21.9 6-38 20.6-48.2 14.6-10.2 29.8-15.3 45.5-15.3-6.1 21.4-14.5 35.8-25.2 43.4-10.7 7.5-24.4 14.2-40.9 20.1z"clip-rule=evenodd></path><linearGradient x1=-638.224 x2=-638.224 y1=853.801 y2=852.801 gradientTransform="matrix(152.4666 7.9904 3.0934 -59.0251 94939.86 55646.855)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5c31.9-30 64.1-39.7 96.7-29 32.6 10.7 50.8 30.4 54.6 59.1-35.2-5.5-60.4-9.6-75.8-12.1-15.3-2.6-40.5-8.6-75.5-18z"clip-rule=evenodd></path><linearGradient x1=-637.723 x2=-637.723 y1=855.103 y2=854.103 gradientTransform="matrix(136.467 7.1519 5.2165 -99.5377 82830.875 89859.578)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5c35.8-7.6 65.6-.2 89.2 22 23.6 22.2 37.7 49 42.3 80.3-39.8-9.7-68.3-23.8-85.5-42.4-17.2-18.5-32.5-38.5-46-59.9z"clip-rule=evenodd></path><linearGradient x1=-631.79 x2=-631.79 y1=855.872 y2=854.872 gradientTransform="matrix(60.8683 3.19 8.7771 -167.4773 31110.818 145537.61)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5c-33.6 13.8-53.6 35.7-60.1 65.6-6.5 29.9-3.6 63.1 8.7 99.6 27.4-40.3 43.2-69.6 47.4-88 4.2-18.3 5.5-44.1 4-77.2z"clip-rule=evenodd></path><path fill=none stroke=#2F8A00 stroke-linecap=round stroke-width=8 d="M196.5 182.3c-14.8 21.6-25.1 41.4-30.8 59.4-5.7 18-9.4 33-11.1 45.1"></path><path fill=none stroke=#2F8A00 stroke-linecap=round stroke-width=8 d="M194.8 185.7c-24.4 1.7-43.8 9-58.1 21.8-14.3 12.8-24.7 25.4-31.3 37.8m99.1-68.9c29.7-6.7 52-8.4 67-5 15 3.4 26.9 8.7 35.8 15.9m-110.8-5.9c20.3 9.9 38.2 20.5 53.9 31.9 15.7 11.4 27.4 22.1 35.1 32"></path></g><defs><filter width=532 height=633 x=50.5 y=399 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=532 height=633 x=50.5 y=399 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><linearGradient x1=-641.104 x2=-641.278 y1=856.577 y2=856.183 gradientTransform="matrix(532 0 0 -633 341484.5 542657)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#fff400></stop><stop offset=1 stop-color=#3c8700></stop></linearGradient><ellipse cx=316.5 cy=715.5 fill-rule=evenodd clip-rule=evenodd rx=266 ry=316.5></ellipse><defs><filter width=288 height=283 x=391 y=-24 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=288 height=283 x=391 y=-24 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><g><g transform="translate(397 -24)"><linearGradient x1=-1036.672 x2=-1036.672 y1=880.018 y2=879.018 gradientTransform="matrix(227 0 0 -227 235493 199764)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffdf00></stop><stop offset=1 stop-color=#ff9d00></stop></linearGradient><circle cx=168.5 cy=113.5 r=113.5 fill-rule=evenodd clip-rule=evenodd></circle><linearGradient x1=-1017.329 x2=-1018.602 y1=658.003 y2=657.998 gradientTransform="matrix(30 0 0 -1 30558 771)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M30 113H0"></path><linearGradient x1=-1014.501 x2=-1015.774 y1=839.985 y2=839.935 gradientTransform="matrix(26.5 0 0 -5.5 26925 4696.5)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M33.5 79.5L7 74"></path><linearGradient x1=-1016.59 x2=-1017.862 y1=852.671 y2=852.595 gradientTransform="matrix(29 0 0 -8 29523 6971)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M34 146l-29 8"></path><linearGradient x1=-1011.984 x2=-1013.257 y1=863.523 y2=863.229 gradientTransform="matrix(24 0 0 -13 24339 11407)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M45 177l-24 13"></path><linearGradient x1=-1006.673 x2=-1007.946 y1=869.279 y2=868.376 gradientTransform="matrix(20 0 0 -19 20205 16720)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M67 204l-20 19"></path><linearGradient x1=-992.85 x2=-993.317 y1=871.258 y2=870.258 gradientTransform="matrix(13.8339 0 0 -22.8467 13825.796 20131.938)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M94.4 227l-13.8 22.8"></path><linearGradient x1=-953.835 x2=-953.965 y1=871.9 y2=870.9 gradientTransform="matrix(7.5 0 0 -24.5 7278 21605)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M127.5 243.5L120 268"></path><linearGradient x1=244.504 x2=244.496 y1=871.898 y2=870.898 gradientTransform="matrix(.5 0 0 -24.5 45.5 21614)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M167.5 252.5l.5 24.5">`);function He(){let e=p();return(()=>{var t=Ve(),n=t.firstChild.firstChild,r=n.nextSibling,i=r.nextSibling,a=i.firstChild,o=i.nextSibling,s=o.firstChild,c=o.nextSibling,l=c.nextSibling,u=l.firstChild,d=l.nextSibling,f=d.firstChild,p=d.nextSibling,m=p.nextSibling,h=m.firstChild,g=m.nextSibling,_=g.firstChild,v=g.nextSibling,y=v.nextSibling,b=y.firstChild,x=y.nextSibling,S=x.firstChild,C=x.nextSibling,w=C.nextSibling,T=w.firstChild,E=w.nextSibling,O=E.firstChild,k=E.nextSibling,A=k.nextSibling,j=A.firstChild,M=A.nextSibling,N=M.firstChild,P=M.nextSibling,F=P.nextSibling,I=F.firstChild,L=F.nextSibling,R=L.firstChild,z=L.nextSibling,B=z.firstChild.nextSibling,V=B.nextSibling,H=z.nextSibling,U=H.firstChild,W=H.nextSibling,ee=W.firstChild,G=W.nextSibling,K=G.firstChild,q=K.nextSibling,te=q.nextSibling,ne=te.nextSibling,re=ne.nextSibling,J=re.nextSibling,ie=J.nextSibling,Y=ie.nextSibling,ae=Y.nextSibling,X=ae.nextSibling,oe=X.nextSibling,se=oe.nextSibling,ce=se.nextSibling,le=ce.nextSibling,ue=G.nextSibling,de=ue.firstChild,Z=ue.nextSibling,fe=Z.firstChild,pe=Z.nextSibling,me=pe.nextSibling,he=me.nextSibling,ge=he.firstChild,_e=he.nextSibling,ve=_e.firstChild,ye=_e.nextSibling,be=ye.firstChild.firstChild,xe=be.nextSibling,Q=xe.nextSibling,Se=Q.nextSibling,$=Se.nextSibling,Ce=$.nextSibling,we=Ce.nextSibling,Te=we.nextSibling,Ee=Te.nextSibling,De=Ee.nextSibling,Oe=De.nextSibling,ke=Oe.nextSibling,Ae=ke.nextSibling,je=Ae.nextSibling,Me=je.nextSibling,Ne=Me.nextSibling,Pe=Ne.nextSibling,Fe=Pe.nextSibling;return D(n,`id`,`a-${e}`),D(r,`fill`,`url(#a-${e})`),D(a,`id`,`b-${e}`),D(o,`id`,`c-${e}`),D(s,`filter`,`url(#b-${e})`),D(c,`mask`,`url(#c-${e})`),D(u,`id`,`d-${e}`),D(d,`id`,`e-${e}`),D(f,`filter`,`url(#d-${e})`),D(p,`mask`,`url(#e-${e})`),D(h,`id`,`f-${e}`),D(g,`id`,`g-${e}`),D(_,`filter`,`url(#f-${e})`),D(v,`mask`,`url(#g-${e})`),D(b,`id`,`h-${e}`),D(x,`id`,`i-${e}`),D(S,`filter`,`url(#h-${e})`),D(C,`mask`,`url(#i-${e})`),D(T,`id`,`j-${e}`),D(E,`id`,`k-${e}`),D(O,`filter`,`url(#j-${e})`),D(k,`mask`,`url(#k-${e})`),D(j,`id`,`l-${e}`),D(M,`id`,`m-${e}`),D(N,`filter`,`url(#l-${e})`),D(P,`mask`,`url(#m-${e})`),D(I,`id`,`n-${e}`),D(L,`id`,`o-${e}`),D(R,`filter`,`url(#n-${e})`),D(z,`mask`,`url(#o-${e})`),D(B,`id`,`p-${e}`),D(V,`fill`,`url(#p-${e})`),D(U,`id`,`q-${e}`),D(W,`id`,`r-${e}`),D(ee,`filter`,`url(#q-${e})`),D(G,`mask`,`url(#r-${e})`),D(K,`id`,`s-${e}`),D(q,`fill`,`url(#s-${e})`),D(te,`id`,`t-${e}`),D(ne,`fill`,`url(#t-${e})`),D(re,`id`,`u-${e}`),D(J,`fill`,`url(#u-${e})`),D(ie,`id`,`v-${e}`),D(Y,`fill`,`url(#v-${e})`),D(ae,`id`,`w-${e}`),D(X,`fill`,`url(#w-${e})`),D(oe,`id`,`x-${e}`),D(se,`fill`,`url(#x-${e})`),D(ce,`id`,`y-${e}`),D(le,`fill`,`url(#y-${e})`),D(de,`id`,`z-${e}`),D(Z,`id`,`A-${e}`),D(fe,`filter`,`url(#z-${e})`),D(pe,`id`,`B-${e}`),D(me,`fill`,`url(#B-${e})`),D(me,`mask`,`url(#A-${e})`),D(ge,`id`,`C-${e}`),D(_e,`id`,`D-${e}`),D(ve,`filter`,`url(#C-${e})`),D(ye,`mask`,`url(#D-${e})`),D(be,`id`,`E-${e}`),D(xe,`fill`,`url(#E-${e})`),D(Q,`id`,`F-${e}`),D(Se,`stroke`,`url(#F-${e})`),D($,`id`,`G-${e}`),D(Ce,`stroke`,`url(#G-${e})`),D(we,`id`,`H-${e}`),D(Te,`stroke`,`url(#H-${e})`),D(Ee,`id`,`I-${e}`),D(De,`stroke`,`url(#I-${e})`),D(Oe,`id`,`J-${e}`),D(ke,`stroke`,`url(#J-${e})`),D(Ae,`id`,`K-${e}`),D(je,`stroke`,`url(#K-${e})`),D(Me,`id`,`L-${e}`),D(Ne,`stroke`,`url(#L-${e})`),D(Pe,`id`,`M-${e}`),D(Fe,`stroke`,`url(#M-${e})`),t})()}var Ue=e(`<button type=button><div><div></div><div></div></div><div>-</div><div>TanStack Router`);function We({initialIsOpen:e,panelProps:t={},closeButtonProps:n={},toggleButtonProps:r={},position:a=`bottom-left`,containerElement:s=`footer`,router:c,routerState:l,shadowDOMTarget:f}){let[p,m]=_(),h,[y,x]=G(`tanstackRouterDevtoolsOpen`,e),[S,T]=G(`tanstackRouterDevtoolsHeight`,null),[E,D]=_(!1),[k,j]=_(!1),M=ne(),N=W(),P=(e,t)=>{if(t.button!==0)return;j(!0);let n={originalHeight:e?.getBoundingClientRect().height??0,pageY:t.pageY},r=e=>{let t=n.pageY-e.pageY,r=n.originalHeight+t;T(r),x(!(r<70))},i=()=>{j(!1),document.removeEventListener(`mousemove`,r),document.removeEventListener(`mouseUp`,i)};document.addEventListener(`mousemove`,r),document.addEventListener(`mouseup`,i)};y(),u(()=>{D(y()??!1)}),u(()=>{if(E()){let e=p()?.parentElement?.style.paddingBottom,t=()=>{let e=h.getBoundingClientRect().height;p()?.parentElement&&m(t=>(t?.parentElement&&(t.parentElement.style.paddingBottom=`${e}px`),t))};if(t(),typeof window<`u`)return window.addEventListener(`resize`,t),()=>{window.removeEventListener(`resize`,t),p()?.parentElement&&typeof e==`string`&&m(t=>(t.parentElement.style.paddingBottom=e,t))}}else p()?.parentElement&&m(e=>(e?.parentElement&&e.parentElement.removeAttribute(`style`),e))}),u(()=>{if(p()){let e=p(),t=getComputedStyle(e).fontSize;e?.style.setProperty(`--tsrd-font-size`,t)}});let{style:F={},...I}=t,{style:L={},onClick:R,...z}=n,{onClick:B,class:V,...H}=r;if(!M())return null;let U=d(()=>S()??500),ee=d(()=>A(N().devtoolsPanelContainer,N().devtoolsPanelContainerVisibility(!!y()),N().devtoolsPanelContainerResizing(k),N().devtoolsPanelContainerAnimation(E(),U()+16))),K=d(()=>({height:`${U()}px`,...F||{}})),q=d(()=>A(N().mainCloseBtn,N().mainCloseBtnPosition(a),N().mainCloseBtnAnimation(!!y()),V));return w(v,{component:s,ref:m,class:`TanStackRouterDevtools`,get children(){return[w(C.Provider,{value:{onCloseClick:R??(()=>{})},get children(){return w(ze,O({ref(e){var t=h;typeof t==`function`?t(e):h=e}},I,{router:c,routerState:l,className:ee,style:K,get isOpen(){return E()},setIsOpen:x,handleDragStart:e=>P(h,e),shadowDOMTarget:f}))}}),(()=>{var e=Ue(),t=e.firstChild,n=t.firstChild,r=n.nextSibling,a=t.nextSibling,s=a.nextSibling;return i(e,O(H,{"aria-label":`Open TanStack Router Devtools`,onClick:e=>{x(!0),B&&B(e)},get class(){return q()}}),!1,!0),o(n,w(He,{})),o(r,w(He,{})),b(e=>{var i=N().mainCloseBtnIconContainer,o=N().mainCloseBtnIconOuter,c=N().mainCloseBtnIconInner,l=N().mainCloseBtnDivider,u=N().routerLogoCloseButton;return i!==e.e&&g(t,e.e=i),o!==e.t&&g(n,e.t=o),c!==e.a&&g(r,e.a=c),l!==e.o&&g(a,e.o=l),u!==e.i&&g(s,e.i=u),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),e})()]}})}export{We as FloatingTanStackRouterDevtools,We as default};