(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{208:function(e,t,n){e.exports=n(436)},213:function(e,t,n){},436:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"addBlockToProject",function(){return b}),n.d(a,"blockClicked",function(){return h}),n.d(a,"blocksToLink",function(){return y}),n.d(a,"moveBlock",function(){return E}),n.d(a,"deleteBlock",function(){return g}),n.d(a,"deleteLink",function(){return j}),n.d(a,"pauseBlock",function(){return v}),n.d(a,"selectLink",function(){return x}),n.d(a,"updateBlockValue",function(){return O}),n.d(a,"updateBlockData",function(){return L}),n.d(a,"updateCurrentProject",function(){return C}),n.d(a,"updateDropDown",function(){return B});var r=n(206),i=n(0),c=n.n(i),o=n(22),l=n.n(o),s=(n(213),n(437)),u=n(438),d=n(26),m=n(6),p=n.n(m),f=n(13),k=n(21),b=Object(k.b)("ADD_TO_PROJECT"),h=Object(k.b)("BLOCK_CLICKED"),y=Object(k.b)("BLOCKS_TO_LINK"),E=Object(k.b)("MOVE_BLOCK"),g=Object(k.b)("DELETE_BLOCK"),j=function(e){return e.block.links=e.block.links.filter(function(t){return t!==e.link}),e.block.linked=!1,e.block.data=[],e.block.render=!1,{type:"DELETE_LINK",payload:e}},v=Object(k.b)("PAUSE_BLOCK"),x=Object(k.b)("SELECT_LINK"),O=Object(k.b)("UPDATE_BLOCK_VALUE"),L=Object(k.b)("UPDATE_BLOCK_DATA"),C=Object(k.b)("UPDATE_CURRENT_PROJECT"),B=function(e){return{type:"UPDATE_DROPDOWN",payload:e}},w=n(28),A=n(29),S=n(31),P=n(30),T=n(32),D=n(181),q=n.n(D),F=n(24),N=n(131),I=function(e){return e.mainPage.present.projects[e.mainPage.present.currentProject].blocks},K=Object(N.createSelector)(function(e,t){return t.block},I,function(e,t){return e.links.map(function(e){return p.a.find(t,function(t){return t.id===e})})}),V=function(e,t){return e.mainPage.present.projects[e.mainPage.present.currentProject].blocks.indexOf(t.block)};Object(N.createSelector)(I,function(e){e.sort(function(e){var t=1;"-"===e[0]&&(t=-1,e=e.substr(1));return function(n,a){var r=n[e]<a[e]?-1:n[e]>a[e]?1:0;return r*t}}("priority"))});var W=function(e){var t=Object(i.useRef)();return Object(i.useEffect)(function(){t.current=e}),t.current},R=n(27),_=n(70),M=n(204),U=function(e){function t(e){var n;return Object(w.a)(this,t),(n=Object(S.a)(this,Object(P.a)(t).call(this,e))).renderAxis=n.renderAxis.bind(Object(_.a)(Object(_.a)(n))),n}return Object(T.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){this.renderAxis()}},{key:"componentDidUpdate",value:function(){this.renderAxis()}},{key:"renderAxis",value:function(){var e=this.props,t=e.scale,n=e.axis,a=e.tickValues,r=this.refs.axis;n(t).tickValues(a)(Object(M.a)(r))}},{key:"render",value:function(){return c.a.createElement("g",{ref:"axis",transform:this.props.transform})}}]),t}(c.a.Component),Y=n(135),z=function(e){var t=e.xScale,n=e.yScale,a=e.data;if(!a.length)return null;var r=function(e){var t=[];return e.forEach(function(e,n){t.push({x:n,y:e})}),t}(a);r.forEach(function(e){e.x=t(e.x),e.y=n(e.y)});var i=Object(Y.b)().curve(Y.a).x(function(e){return e.x}).y(function(e){return e.y})(r);return c.a.createElement("path",{d:i,style:{stroke:"#00887a",strokeWidth:3,fill:"none"}})},X=n(72),G=function(e){var t=p.a.clone(e),n=t.shift();return t.push(n),t},H=function(e){return J(e).map(function(t){return t/e})},J=function(e){return Array(e).fill(null).map(function(e,t){return t})},$=function(e,t,n,a,r){var i={xLine:0,yLine:0,yAxis:0,tickValues:0},c=function(e,t){var n=t-1,a=Number.MAX_SAFE_INTEGER,r=Number.MIN_SAFE_INTEGER;return p.a.map(e,function(e){e<a?a=e:e>r&&(r=e)}),{minX:0,maxX:n,minY:a,maxY:r}}(e,a),o=c.minX,l=c.maxX,s=c.minY,u=c.maxY;return i.xLine=Object(X.a)().domain([o.toFixed(2),l.toFixed(2)]).range([30,t.width-30]),i.yLine=Object(X.a)().domain([s.toFixed(2),u.toFixed(2)]).range([t.height-20,20]),"Data"===n?(i.yAxis=Object(X.a)().domain([0,1]).range([t.height-20,20]),i.tickValues=[-1,0,1]):(i.yAxis=Object(X.a)().domain([-r/2,r/2]).range([t.height-20,20]),i.tickValues=[-r/2,0,r/2]),i},Q=function(e){return e.map(function(e){return 1===e?1:0})},Z=function(e,t,n){return p.a.clone(p.a.find(t,function(t){return(t.id===n[0]||t.id===n[1])&&t.name===e}))},ee="Data",te="Carrier Wave",ne=function(e,t){var n=e/t.length,a=0,r=[];return t.forEach(function(e){for(var t=0;t<n;t++)r[a++]=e}),r},ae=Object(f.b)(function(e,t){return{clickedBlock:e.mainPage.present.clickedBlock,indexOfBlock:V(e,t)}},{updateBlockData:L})(function(e){var t=W(e),n=e.resolution,a=e.block,r=e.dimensions,o=e.updateBlockData,l=ne(n,a.binary),s=$(l,r,a.name,n),u=Object(i.useState)(l),d=Object(F.a)(u,2),m=d[0],p=d[1],f=Object(i.useRef)(),k=function e(){a.paused||p(function(e){return G(e)}),f.current=requestAnimationFrame(e)};return Object(i.useEffect)(function(){if(t){if(t.block.binary!==a.binary){var e=ne(n,a.binary);p(e),o({id:a.id,data:e})}}else o({id:a.id,data:l});return f.current=requestAnimationFrame(k),function(){return cancelAnimationFrame(f.current)}},[a.binary]),c.a.createElement("g",null,c.a.createElement(z,{xScale:s.xLine,yScale:s.yLine,data:m}),c.a.createElement(U,{axis:R.a,tickValues:s.tickValues,scale:s.yAxis}))}),re=Object(f.b)(function(e,t){return{blocks:e.mainPage.present.projects[0].blocks}},{updateBlockData:L})(function(e){var t=e.blocks,n=e.block,a=e.resolution,r=e.dimensions,o=function(e,t){var n=Z(ee,e,t).data,a=Z(te,e,t),r=a.amplitude;return{binaryData:n,carrierData:a.data,carrierAmplitude:r}}(t,n.links),l=o.binaryData,s=o.carrierData,u=o.carrierAmplitude,d=Object(i.useState)([]),m=Object(F.a)(d,2),p=m[0],f=m[1],k=$(p,r,n,a,u),b=Object(i.useRef)(),h=function e(){n.paused||f(function(e){return G(e)}),b.current=requestAnimationFrame(e)};return Object(i.useEffect)(function(){var e,t=(e=l,s.map(function(t,n){return t*e[n]||0}));return f(t),L({id:n.id,data:t}),b.current=requestAnimationFrame(h),function(){return cancelAnimationFrame(b.current)}},[s]),c.a.createElement("g",null,c.a.createElement(z,{xScale:k.xLine,yScale:k.yLine,data:p,focused:!1}),c.a.createElement(U,{axis:R.a,tickValues:k.tickValues,scale:k.yAxis}))}),ie=Object(f.b)(function(e,t){return{blocks:e.mainPage.present.projects[0].blocks}},{updateBlockData:L})(function(e){var t=e.blocks,n=e.block,a=e.resolution,r=e.dimensions,o=function(e,t){var n=Z(ee,e,t).data,a=Z(te,e,t),r=a.amplitude;return{binaryData:n,carrierData:a.data,carrierAmplitude:r,carrierFrequency:a.frequency}}(t,n.links),l=o.binaryData,s=o.carrierData,u=o.carrierAmplitude,d=o.carrierFrequency,m=Object(i.useState)([]),p=Object(F.a)(m,2),f=p[0],k=p[1],b=$(f,r,n,a,u),h=Object(i.useRef)(),y=function e(){n.paused||k(function(e){return G(e)}),h.current=requestAnimationFrame(e)};return Object(i.useEffect)(function(){var e=function(e,t,n,a,r){var i=H(r);return t.map(function(t,r){if(1===e[r])return t;var c=2*Math.PI*(2*a)*i[r];return n*Math.sin(c)})}(l,s,u,d,a);return k(e),L({id:n.id,data:e}),h.current=requestAnimationFrame(y),function(){return cancelAnimationFrame(h.current)}},[s]),c.a.createElement("g",null,c.a.createElement(z,{xScale:b.xLine,yScale:b.yLine,data:f,focused:!1}),c.a.createElement(U,{axis:R.a,tickValues:b.tickValues,scale:b.yAxis}))}),ce=n(182),oe=Object(f.b)(function(e,t){return{blocks:e.mainPage.present.projects[0].blocks,linkedBlocks:K(e,t)}},{updateBlockData:L})(function(e){var t=e.block,n=e.resolution,a=e.dimensions,r=e.linkedBlocks[0].data,o=r.amplitude||1,l=Object(i.useState)([]),s=Object(F.a)(l,2),u=s[0],d=s[1],m=$(u,a,t,n,o),p=Object(i.useRef)(),f=function e(){t.paused||d(function(e){return G(e)}),p.current=requestAnimationFrame(e)};return Object(i.useEffect)(function(){var e=r.map(function(e){return e+Object(ce.rnorm)()});return d(e),L({id:t.id,data:e}),p.current=requestAnimationFrame(f),function(){return cancelAnimationFrame(p.current)}},[r]),c.a.createElement("g",null,c.a.createElement(z,{xScale:m.xLine,yScale:m.yLine,data:u}),c.a.createElement(U,{axis:R.a,tickValues:m.tickValues,scale:m.yAxis}))}),le=Object(f.b)(function(e,t){return{blocks:e.mainPage.present.projects[0].blocks}},{updateBlockData:L})(function(e){var t=e.blocks,n=e.block,a=e.resolution,r=e.dimensions,o=function(e,t){var n=Z(ee,e,t).data,a=Z(te,e,t),r=a.amplitude;return{binaryData:n,carrierData:a.data,carrierAmplitude:r}}(t,n.links),l=o.binaryData,s=o.carrierData,u=o.carrierAmplitude,d=Object(i.useState)([]),m=Object(F.a)(d,2),p=m[0],f=m[1],k=$(p,r,n,a,u),b=Object(i.useRef)(),h=function e(){n.paused||f(function(e){return G(e)}),b.current=requestAnimationFrame(e)};return Object(i.useEffect)(function(){var e=function(e,t,n){return t.map(function(t,a){return(-1===e[a]?t:t*(2*n))||0})}(l,s);return f(e),L({id:n.id,data:e}),b.current=requestAnimationFrame(h),function(){return cancelAnimationFrame(b.current)}},[s]),c.a.createElement("g",null,c.a.createElement(z,{xScale:k.xLine,yScale:k.yLine,data:p,focused:!1}),c.a.createElement(U,{axis:R.a,tickValues:k.tickValues,scale:k.yAxis}))}),se=Object(f.b)(function(e,t){return{blocks:I(e)}},{updateBlockValue:O,updateBlockData:L})(function(e){var t=e.resolution,n=e.block,a=e.dimensions,r=e.updateBlockData,o=n.frequency,l=n.amplitude,s=Object(i.useState)([]),u=Object(F.a)(s,2),d=u[0],m=u[1],p=$(d,a,n.name,t,l),f=Object(i.useRef)(),k=function e(){n.paused||m(function(e){return G(e)}),f.current=requestAnimationFrame(e)};return Object(i.useEffect)(function(){var e=function(e,t,n){var a=H(e),r=2*Math.PI*t;return a.map(function(e){var t=r*e;return n*Math.sin(t)})}(t,n.frequency,n.amplitude);return m(e),r({id:n.id,data:e}),f.current=requestAnimationFrame(k),function(){return cancelAnimationFrame(f.current)}},[o,l]),c.a.createElement("g",null,c.a.createElement(z,{xScale:p.xLine,yScale:p.yLine,data:d}),c.a.createElement(U,{axis:R.a,tickValues:p.tickValues,scale:p.yAxis}))}),ue=function(e){function t(){return Object(w.a)(this,t),Object(S.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){var e,t=this.props.block,n=this.props.containerWidth,a=164;return this.props.expanded&&(a=780),"Data"===t.name&&(e=c.a.createElement(ae,{dimensions:{width:n,height:a},resolution:1200,block:t})),"Carrier Wave"===t.name&&(e=c.a.createElement(se,{dimensions:{width:n,height:a},resolution:1200,block:t})),t.linked&&("BPSK"===t.name&&(e=c.a.createElement(re,{dimensions:{width:n,height:a},resolution:1200,block:t})),"FSK"===t.name&&(e=c.a.createElement(ie,{dimensions:{width:n,height:a},resolution:1200,block:t})),"ASK"===t.name&&(e=c.a.createElement(le,{dimensions:{width:n,height:a},resolution:1200,block:t})),"AWGN"===t.name&&(e=c.a.createElement(oe,{dimensions:{width:n,height:a},resolution:1200,block:t}))),c.a.createElement("svg",{height:a,width:n},e)}}]),t}(c.a.Component),de=q()()(ue),me=n(185),pe=n.n(me),fe=n(56),ke=n.n(fe),be=n(88),he=n.n(be),ye=n(89),Ee=n.n(ye),ge=n(17),je=n.n(ge),ve=n(90),xe=n.n(ve),Oe=n(127),Le=n.n(Oe),Ce=n(23),Be=n.n(Ce),we=n(184),Ae=n.n(we),Se=n(183);function Pe(e){return c.a.createElement(Le.a,Object.assign({direction:"up"},e))}var Te=function(e){function t(){var e,n;Object(w.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(S.a)(this,(e=Object(P.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1},n.handleClickOpen=function(){n.setState({open:!0})},n.handleClose=function(){n.setState({open:!1})},n.onClickHandler=function(e,t,a){n.props.updateBlockValue({value:t,key:a,id:e.id}),n.props.blockUpdated({block:e,updated:!0})},n}return Object(T.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.block,a=!1;p.a.isNil(n.frequency)||(a=!0);var r=a?c.a.createElement("div",{className:t.flex},c.a.createElement(je.a,{color:"inherit"},"Frequency: ",n.frequency),c.a.createElement(je.a,{color:"inherit"},"Amplitude: ",n.amplitude)):c.a.createElement("div",null);return c.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}},c.a.createElement(Ae.a,{onClick:this.handleClickOpen}),c.a.createElement(pe.a,{fullScreen:!0,open:this.state.open,onClose:this.handleClose,TransitionComponent:Pe},c.a.createElement(ke.a,{className:t.appBar,color:"primary"},c.a.createElement(he.a,null,c.a.createElement(Ee.a,{color:"inherit",onClick:this.handleClose,"aria-label":"Close"},c.a.createElement(xe.a,null)),c.a.createElement(je.a,{variant:"title",color:"inherit",className:t.flex},n.name),r)),c.a.createElement(Be.a,{style:{height:"100%"}},c.a.createElement(Se.Col,{center:"xs",style:{height:"90%",textAlign:"center"}},c.a.createElement("div",{style:{height:"5%"}}),c.a.createElement("div",{style:{height:"100%",paddingLeft:16}},c.a.createElement(de,{block:n,key:n.id,expanded:!0}))))))}}]),t}(c.a.Component),De=Object(d.withStyles)({iconStyle:{position:"relative",top:"6px"},appBar:{position:"relative"},flex:{flex:1}})(Te),qe=Object(f.b)(function(e){return{amplitude:e.mainPage.present.amplitude}},a)(De),Fe=n(9),Ne=n.n(Fe),Ie=n(187),Ke=n.n(Ie),Ve=n(186),We=n.n(Ve),Re=n(68),_e=n.n(Re),Me={height:200},Ue=_e()()(Object(f.b)(function(e,t){return{blocks:I(e)}},{pauseBlock:v})(function(e){var t=p.a.filter(e.blocks,function(e){return e.render}).length;Me=function(e,t){var n={height:200};return 0===t?n:n="xs"===e?{height:200*t}:"sm"===e?{height:200*Math.ceil(t/3)}:{height:200*Math.ceil(t/4)}}(e.width,t);var n=p.a.map(e.blocks,function(t){if(t.render)return c.a.createElement(Ne.a,{priority:t.neededLinks,key:t.id,container:!0,item:!0,xs:12,sm:4,md:3},c.a.createElement(Ne.a,{xs:2,container:!0,item:!0,style:{display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}},t.paused?c.a.createElement(We.a,{onClick:function(n){return e.pauseBlock({id:t.id})}}):c.a.createElement(Ke.a,{onClick:function(n){return e.pauseBlock({id:t.id})}})),c.a.createElement(Ne.a,{xs:8,container:!0,item:!0},c.a.createElement(je.a,{variant:"subheading",align:"center",style:{marginTop:5,width:"90%"}},c.a.createElement("b",null,t.name))),c.a.createElement(Ne.a,{xs:2,container:!0,item:!0,justify:"center"},c.a.createElement(qe,{block:t})),c.a.createElement(Ne.a,{style:{height:180,paddingLeft:16},container:!0,item:!0,xs:12,spacing:16},c.a.createElement(Ne.a,{xs:12,item:!0},c.a.createElement(de,{block:t,key:t.id}))))});return c.a.createElement(Be.a,{elevation:0,square:!0,style:Me},c.a.createElement(Ne.a,{container:!0},n))})),Ye=n(95),ze=n.n(Ye),Xe=n(193),Ge=n.n(Xe),He=n(194),Je=n.n(He),$e=n(205),Qe=n(91),Ze=n(132),et=n(189),tt=n.n(et),nt=n(190),at=n.n(nt),rt=n(191),it=n.n(rt),ct=n(192),ot=n.n(ct),lt=n(128),st=n.n(lt),ut=n(69),dt=n.n(ut),mt=n(92),pt=n.n(mt),ft=n(93),kt=n.n(ft),bt={fontWeight:"bold"},ht=function(){return"_"+Math.random().toString(36).substr(2,9)},yt=Object(f.b)(function(e){return{clickedBlock:e.mainPage.present.clickedBlock}},{updateBlockValue:O,updateDropDown:B})(function(e){var t=m.map(e.clickedBlock.requiredLinks,function(e,t){return console.log(e),"None"===e?c.a.createElement(je.a,{key:ht()},e):c.a.createElement(je.a,{key:ht()},e," :")});return c.a.createElement(Be.a,{elevation:0,square:!0,key:e.clickedBlock.id,style:{height:"100%",paddingTop:16}},m.isEmpty(e.clickedBlock)?c.a.createElement(je.a,{variant:"title",gutterBottom:!0,align:"center"},"Block Details"):c.a.createElement(je.a,{variant:"title",gutterBottom:!0,align:"center"},e.clickedBlock.name),c.a.createElement(dt.a,null,c.a.createElement(pt.a,null,c.a.createElement(kt.a,{style:bt,primary:c.a.createElement(i.Fragment,null,c.a.createElement(je.a,{variant:"body1"},e.clickedBlock.description),c.a.createElement("p",null),!m.isEmpty(e.clickedBlock)&&c.a.createElement(je.a,{variant:"subheading",gutterBottom:!0,align:"center"},c.a.createElement("b",null,"Required Links")),t)}))))}),Et=160,gt=108,jt=Et,vt=.1*jt,xt=.1*gt,Ot={borderStyle:"solid",borderWidth:"1px 1px 1px 1px",borderColor:"#77a6f7",backgroundColor:"#d3e3fc",zIndex:2},Lt={cursor:"pointer",maxWidth:"100%",backgroundColor:"#00887a"},Ct={cursor:"pointer",maxWidth:"100%",backgroundColor:"#77a6f7"},Bt={position:"relative",top:"7px",cursor:"pointer"},wt={display:"flex",alignItems:"center",justifyContent:"center"},At=195,St=5,Pt=function(e){function t(e){var n;return Object(w.a)(this,t),(n=Object(S.a)(this,Object(P.a)(t).call(this,e))).componentDidMount=function(){jt="xs"===n.props.width?Et:Et+(0===n.props.block.neededLinks?vt:2*vt),n.props.blockClicked(n.props.block),n.calculateOffset("projectTab")},n.calculateOffset=function(e){var t=document.getElementsByClassName(e)[0].getBoundingClientRect(),a=window.pageXOffset+t.left,r=window.pageYOffset+t.top;n.setState({projectTabOffset:t,offsetX:a,offsetY:r})},n.getBounds=function(){return{left:0,top:0,right:n.state.projectTabOffset.width-jt,bottom:n.state.projectTabOffset.height-gt}},n.handleClick=function(e){n.props.block!==n.props.clickedBlock&&n.props.blockClicked(n.props.block),"xs"!==n.props.width&&"sm"!==n.props.width||n.setState({anchorEl:e.currentTarget})},n.handleClose=function(){n.setState({anchorEl:null})},n.handleDrag=function(e,t){var a=n.props.block.position,r=a.x,i=a.y,c={x:r+t.deltaX,y:i+t.deltaY};n.props.moveBlock({value:c,block:n.props.block,indexOfBlock:n.props.indexOfBlock})},n.linkBlocks=function(e){var t=n.props,a=t.blocksToLinkArray,r=t.block;n.setState({position:e}),e===At&&(0===a.length||0===r.data.length)||r.links.length>r.neededLinks&&0!==r.neededLinks||n.blocksToLinkArrayIsFull()||p.a.includes(a,n.props.block)||n.props.blocksToLink({block:r})},n.hasInput=function(e){return!!e.neededLinks&&e.neededLinks>0},n.blocksToLinkArrayIsFull=function(){return n.props.blocksToLinkArray.length>=2},n.renderLines=function(){var e=n.props,t=e.selectLink,a=e.block,r=e.projects,i=e.selectedLink,o=e.currentProject,l=e.width,s=n.state,u=s.offsetX,d=s.offsetY;return 0===a.neededLinks?null:a.links.map(function(e){var n,s,m,f,k=p.a.find(r[o].blocks,function(t){return t.id===e}),b="solid";return i.id===a.id&&i.linkPosition===e&&(b="dashed"),"xs"===l?(n=a.position.x+jt/2+u,m=a.position.y+d+xt/2,s=k.position.x+jt/2+u,f=k.position.y+d+gt-xt/2):(n=a.position.x+8+u,m=a.position.y+gt/2+d,s=k.position.x+u+jt+vt/2,f=k.position.y+gt/2+d),c.a.createElement("div",{key:e,onClick:function(n){return t({id:a.id,linkPosition:e})}},c.a.createElement(Ze.Line,{borderWidth:3,borderStyle:b,borderColor:"black",zIndex:1,x0:n,y0:m,x1:s,y1:f}))})},n.renderLineToCursor=function(e){var t=n.props,a=t.block,r=t.cursorPosition,i=n.state,o=i.offsetX,l=i.offsetY;return n.isLinking(a)?c.a.createElement(Ze.Line,{borderWidth:3,borderStyle:"solid",borderColor:"black",zIndex:1,x0:a.position.x+e+o,y0:a.position.y+gt/2+l,x1:r.x+o,y1:r.y+l}):null},n.isLinking=function(e){return p.a.includes(n.props.blocksToLinkArray,e)},n.showProperties=function(e){return p.a.map(e.keysToShow,function(t){var a=e[t];if("binary"===t)return c.a.createElement(je.a,{key:t,variant:"body1",style:{marginLeft:4}},c.a.createElement("b",null,p.a.capitalize(t),":"),Q(a));var r="frequency"===t?6:1;return c.a.createElement(je.a,{key:t,variant:"body1",style:{marginLeft:4}},c.a.createElement("b",null,p.a.capitalize(t),":"),c.a.createElement(at.a,{onClick:function(){return n.updateBlockOnClick(n.props.block[t]-r,t)},style:Bt}),a,c.a.createElement(it.a,{onClick:function(){return n.updateBlockOnClick(n.props.block[t]+r,t)},style:Bt}))})},n.updateBlockOnClick=function(e,t){n.props.updateBlockValue({value:e,key:t,blockId:n.props.block.id})},n.render=function(){var e,t,a,r,o,l,s=n.props,u=s.block,d=s.width,m=n.getBounds(),f=n.getPosition(m);return"xs"===d?(jt=Et,e="row",t=12,o=12,a={height:"10%"},l=n.hasInput(u)?"80%":"100%",r=3):(jt=Et+2*vt,e="column",o=10,t=1,a={height:"100%"},l="100%",r=4),c.a.createElement(i.Fragment,null,c.a.createElement(tt.a,{grid:[10,10],bounds:m,onDrag:n.handleDrag,position:f},c.a.createElement(Ne.a,{container:!0,style:{height:gt,width:jt,position:"absolute",zIndex:2}},n.hasInput(u)&&c.a.createElement(Ne.a,{item:!0,container:!0,direction:e,xs:t,style:a,justify:"center"},c.a.createElement(Ne.a,{item:!0,xs:r,style:Lt,onClick:function(){return n.linkBlocks(St)}})),c.a.createElement(Ne.a,{item:!0,container:!0,xs:o,style:Object(Qe.a)({},Ot,{height:l}),direction:"row"},c.a.createElement(Ne.a,{item:!0,container:!0,xs:12,style:{height:"30%"}},c.a.createElement(Ne.a,{item:!0,xs:2,style:wt},c.a.createElement(ot.a,{style:{fontSize:"larger",cursor:"pointer"},onClick:n.handleClick})),c.a.createElement(Ne.a,{item:!0,xs:8,style:wt},c.a.createElement(je.a,{variant:"subheading",gutterBottom:!0,align:"center",style:{margin:"0px"}},c.a.createElement("b",null,u.name))),c.a.createElement(Ne.a,{item:!0,xs:2,style:wt},c.a.createElement(xe.a,{style:{fontSize:"larger",cursor:"pointer"},onClick:function(){return n.props.deleteBlock({block:u})}}))),c.a.createElement(Ne.a,{item:!0,container:!0,xs:12,style:{height:"70%"}},n.showProperties(u))),c.a.createElement(Ne.a,{item:!0,container:!0,direction:e,xs:t,style:a,justify:"center"},c.a.createElement(Ne.a,{item:!0,xs:r,style:Ct,onClick:function(){return n.linkBlocks(At)}})),c.a.createElement(st.a,{id:"simple-popper",open:Boolean(n.state.anchorEl),anchorEl:n.state.anchorEl,onClose:n.handleClose,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},c.a.createElement(yt,null)))),p.a.isNil(u.links)?[]:n.renderLines(),n.renderLineToCursor(n.state.position))},n.state={projectTabOffset:0,offsetX:0,offsetY:0,mouseClicked:!1,position:St,blockPosition:e.block.position,anchorEl:null},n}return Object(T.a)(t,e),Object(A.a)(t,[{key:"getPosition",value:function(e){var t=this.props.block.position;return t.x>e.right&&(t.x=e.right),t.y>e.bottom&&(t.y=e.bottom),t}}]),t}(c.a.Component),Tt=_e()()(Object(f.b)(function(e,t){var n=e.mainPage.present;return{clickedBlock:n.clickedBlock,projects:n.projects,selectedLink:n.selectedLink,currentProject:n.currentProject,blocksToLinkArray:n.blocksToLinkArray,linkedBlocks:K(e,t),indexOfBlock:V(e,t)}},a)(Pt)),Dt={height:600,zIndex:-10},qt=function(e){var t=p.a.map(e.blocks,function(t){return c.a.createElement(Tt,{cursorPosition:e.position,key:t.id,block:t,dimensions:e.elementDimensions})});return c.a.createElement(Be.a,{square:!0,elevation:0,className:"projectTab",style:Dt},t)},Ft=Object(f.b)(function(e){return{project:e.mainPage.present.projects[0]}},{updateCurrentProject:C})(function(e){return c.a.createElement(i.Fragment,null,c.a.createElement(ke.a,{elevation:1,square:!0,position:"static"},c.a.createElement(Ge.a,{value:0},c.a.createElement(Je.a,{label:e.project.name,key:e.project.id,value:e.project.id}))),c.a.createElement($e.a,null,c.a.createElement(qt,{key:"0",blocks:e.project.blocks})))}),Nt=n(71),It=n.n(Nt),Kt=n(39),Vt=n.n(Kt),Wt=n(195),Rt=n.n(Wt);var _t=Object(d.withStyles)({root:{flexGrow:1},flex:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(function(e){var t=e.classes;return c.a.createElement(ke.a,{elevation:0,square:!0,position:"static",color:"primary"},c.a.createElement(he.a,null,c.a.createElement(Ee.a,{className:t.menuButton,color:"inherit","aria-label":"Menu"},c.a.createElement(Rt.a,null)),c.a.createElement(je.a,{variant:"title",color:"inherit",className:t.flex},"TCC"),c.a.createElement(Vt.a,{color:"inherit"},"Lucas")))}),Mt=n(196),Ut=n.n(Mt),Yt=n(197),zt=n.n(Yt),Xt=Object(f.b)(function(e){return{blocks:e.mainPage.present.blocks,idCounter:e.mainPage.present.idCounter}},{addBlockToProject:b})(function(e){var t=Object(i.useState)(!1),n=Object(F.a)(t,2),a=n[0],r=n[1],o=p.a.map(e.blocks,function(t){return c.a.createElement(pt.a,{key:t.name,button:!0,onClick:function(){return function(t){e.addBlockToProject({block:t,idCounter:e.idCounter})}(t)}},c.a.createElement(kt.a,{primary:t.name}))}),l=c.a.createElement(dt.a,{component:"nav",subheader:c.a.createElement(Ut.a,{component:"div",style:{position:"inherit"}},"Blocks")},o);return c.a.createElement(i.Fragment,null,c.a.createElement(It.a,{smUp:!0},c.a.createElement(Vt.a,{onClick:function(){return r(!0)}},"New Block"),c.a.createElement(zt.a,{open:a,onClose:function(){return r(!1)}},c.a.createElement("div",{tabIndex:0,role:"button",onClick:function(){return r(!1)},onKeyDown:function(){return r(!1)}},c.a.createElement("div",{style:{width:250}},l)))),c.a.createElement(It.a,{xsDown:!0},c.a.createElement(Be.a,{elevation:0,square:!0,style:{height:"100%"}},l)))}),Gt=n(42),Ht=n.n(Gt),Jt=n(94),$t=n.n(Jt),Qt=function(e){return{root:{flexGrow:1},paper:{padding:2*e.spacing.unit,textAlign:"center",color:e.palette.text.secondary}}},Zt=function(e){return e.isAuthenticated?c.a.createElement("div",{style:{paddingRight:16}},c.a.createElement(Ht.a,{keyEventName:Gt.KEYPRESS,keyValue:"q",onKeyHandle:function(){return e.deleteBlock(e.clickedBlock)}}),c.a.createElement(Ht.a,{keyEventName:Gt.KEYPRESS,keyValue:"x",onKeyHandle:function(){return e.deleteLink({block:p.a.find(e.blocks,function(t){return t.id===e.selectedLink.id}),link:e.selectedLink.linkPosition})}}),c.a.createElement(Ht.a,{keyEventName:Gt.KEYPRESS,keyValue:"z",onKeyHandle:function(){return e.undo()}}),c.a.createElement(ze.a,null),c.a.createElement(Ne.a,{container:!0,justify:"flex-end",spacing:16},c.a.createElement(Ne.a,{container:!0,item:!0,xs:12,spacing:16},c.a.createElement(Ne.a,{xs:!0,item:!0},c.a.createElement(_t,null))),c.a.createElement(Ne.a,{container:!0,item:!0,xs:12,spacing:16},c.a.createElement(Ne.a,{xs:12,sm:3,md:2,item:!0},c.a.createElement(Xt,null)),c.a.createElement(Ne.a,{xs:12,sm:9,md:8,item:!0},c.a.createElement(Ft,null)),c.a.createElement(It.a,{smDown:!0},c.a.createElement(Ne.a,{md:2,item:!0},c.a.createElement(yt,null)))),c.a.createElement(Ne.a,{container:!0,item:!0,xs:12,spacing:16},c.a.createElement(Ne.a,{xs:12,item:!0,style:{textAlign:"center"}},c.a.createElement(je.a,{variant:"title",color:"inherit"},"Block Graphs")),c.a.createElement(Ne.a,{xs:12,item:!0},c.a.createElement(Ue,null))))):c.a.createElement(s.a,{to:"/"})},en=(Object(u.a)(Object(d.withStyles)(Qt)(Zt)),Object(d.withStyles)(Qt)(Zt)),tn=Object(f.b)(function(e){return{isAuthenticated:e.mainPage.present.isAuthenticated,clickedBlock:e.mainPage.present.clickedBlock,selectedLink:e.mainPage.present.selectedLink,blocks:I(e)}},function(e){return{deleteLink:function(t){e(j(t))},deleteBlock:function(t){e(g(t))},undo:function(){e(Jt.ActionCreators.undo())}}})(en),nn=n(133),an=n.n(nn),rn=n(198),cn=n(20),on=n(134),ln=n.n(on),sn=n(199),un=n.n(sn),dn=n(202),mn=n.n(dn),pn=n(201),fn=n.n(pn),kn=n(200),bn=n.n(kn),hn=function(e){function t(e){var n;return Object(w.a)(this,t),(n=Object(S.a)(this,Object(P.a)(t).call(this,e))).validateForm=function(){return n.state.usuario.length>0&&n.state.senha.length>0},n.handleChange=function(e){n.setState(Object(cn.a)({},e.target.id,e.target.value))},n.handleSubmit=function(){var e=Object(rn.a)(an.a.mark(function e(t){return an.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),"admin"===n.state.usuario&&"admin"===n.state.senha?n.props.history.push("/Home"):alert("Usu\xe1rio ou senha inv\xe1lidos.");case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.state={usuario:"",senha:""},n}return Object(T.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){var e=this.props.classes;return c.a.createElement("div",null,c.a.createElement(ze.a,null),c.a.createElement(Ne.a,{container:!0,justify:"center",alignItems:"center",style:{minHeight:"100vh"}},c.a.createElement(Ne.a,{item:!0,xs:3,justify:"center"},c.a.createElement(un.a,{style:{textAlign:"center"},className:e.card},c.a.createElement(bn.a,{title:"Login"}),c.a.createElement("form",{onSubmit:this.handleSubmit,className:e.container,noValidate:!0,autoComplete:"off"},c.a.createElement(fn.a,null,c.a.createElement(ln.a,{autoFocus:!0,id:"usuario",label:"Usu\xe1rio",className:e.textField,value:this.state.name,onChange:this.handleChange,margin:"normal"}),c.a.createElement("div",null),c.a.createElement(ln.a,{id:"senha",label:"Senha",className:e.textField,type:"password",autoComplete:"current-password",onChange:this.handleChange,margisn:"normal"})),c.a.createElement(mn.a,{style:{justifyContent:"center"}},c.a.createElement(Vt.a,{type:"submit",disabled:!this.validateForm(),variant:"contained",color:"primary",className:e.button},"Login")))))))}}]),t}(c.a.Component),yn=(Object(u.a)(Object(d.withStyles)(function(e){return{root:Object(Qe.a)({},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit,height:200,textAlign:"center"}),media:{height:140}}})(hn)),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function En(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(434);var gn,jn=Object(k.c)({isAuthenticated:!0,user:"Lucas",currentProject:0,idCounter:0,selectedLink:{id:2,linkPosition:0},amplitude:3,blocksToLinkArray:[],clickedBlock:{},projects:{0:{id:0,name:"Project 1",totalBlocks:0,blocks:[]},1:{id:1,name:"Project 2",totalBlocks:1,blocks:{1:{id:1,name:"Carrier Wave",frequency:4,amplitude:4,type:"sine",position:{x:0,y:300},paused:!1}}}},blocks:[{binary:[1,1,1,-1,1,-1],data:[],linked:!1,links:[],name:"Data",neededLinks:0,paused:!1,position:{x:0,y:0},priority:1,requiredLinks:["None"],type:"square",updated:!1,render:!0,keysToShow:["binary"]},{amplitude:3,data:[],frequency:12,linked:!1,links:[],name:"Carrier Wave",neededLinks:0,paused:!1,position:{x:0,y:0},priority:1,requiredLinks:["None"],type:"sine",updated:!1,render:!0,description:"A carrier wave, carrier signal, or just carrier, is a waveform (usually sinusoidal) that is modulated (modified) with an input signal for the purpose of conveying information.",keysToShow:["amplitude","frequency"]},{data:[],linked:!1,links:[],name:"BPSK",neededLinks:2,paused:!1,position:{x:0,y:0},priority:2,requiredLinks:["Data","Carrier Wave"],type:"bpsk",updated:!1,render:!1,description:"Binary Phase Shift Keying (BPSK) is a two phase modulation scheme, where the 0\u2019s and 1\u2019s in a binary message are represented by two different phase states in the carrier signal: \u03b8=0\xb0 for binary 1 and \u03b8=180\xb0 for binary 0.",keysToShow:[]},{data:[],linked:!1,links:[],name:"AWGN",neededLinks:1,paused:!1,position:{x:0,y:0},priority:3,requiredLinks:["Data"],type:"awgn",updated:!1,render:!1,description:"Additive white Gaussian noise (AWGN) is a basic noise model used in Information theory to mimic the effect of many random processes that occur in nature.",keysToShow:[]},{data:[],linked:!1,links:[],name:"FSK",neededLinks:2,paused:!1,position:{x:0,y:0},priority:2,requiredLinks:["Data","Carrier Wave"],type:"fsk",updated:!1,render:!1,description:"In Frequency Shify Keying (FSK) the frequency of the Carrier Wave is varied in accordance with baseband digital input. Binary 1 and 0 is represented by two different carrier frequencies.",keysToShow:[]},{data:[],linked:!1,links:[],name:"ASK",neededLinks:2,paused:!1,position:{x:0,y:0},priority:2,requiredLinks:["Data","Carrier Wave"],type:"ask",updated:!1,render:!1,description:"In an ASK system, the binary symbol 1 is represented by transmitting a fixed-amplitude carrier wave and fixed frequency for a bit duration of T seconds. If the signal value is 1 then thecarrier signal will be transmitted; otherwise, a signal value of 0 will be transmitted.",keysToShow:[]}]},(gn={},Object(cn.a)(gn,b,function(e,t){var n=p.a.clone(t.payload.block);n.id=e.idCounter++,e.projects[e.currentProject].blocks.push(n),e.projects[e.currentProject].blocks=p.a.sortBy(e.projects[e.currentProject].blocks,["priority"])}),Object(cn.a)(gn,h,function(e,t){e.clickedBlock=t.payload}),Object(cn.a)(gn,y,function(e,t){if(e.blocksToLinkArray.push(t.payload.block),2===e.blocksToLinkArray.length){var n=e.blocksToLinkArray[0],a=e.blocksToLinkArray[1],r=p.a.find(e.projects[e.currentProject].blocks,{id:n.id});r.links.push(a.id),r.links.length>=r.neededLinks&&(r.linked=!0,r.render=!0),e.blocksToLinkArray=[]}}),Object(cn.a)(gn,g,function(e,t){var n=t.payload.block,a=vn(e.projects[e.currentProject].blocks,n);e.projects[e.currentProject].blocks.map(function(e){return e.links=e.links.filter(function(e){return e!==n.id}),e.links.length<e.neededLinks&&(e.linked=!1,e.data=[],e.render=!1),e}),e.projects[e.currentProject].blocks.splice(a,1)}),Object(cn.a)(gn,j,function(e,t){var n=p.a.clone(t.payload.block);n.links=n.links.filter(function(e){return e!==t.payload.link}),n.linked=!1,n.data=[],n.render=!1;var a=e.projects[e.currentProject].blocks.findIndex(function(e){return e.id===t.payload.block.id});e.projects[e.currentProject].blocks[a]=n}),Object(cn.a)(gn,E,function(e,t){e.projects[e.currentProject].blocks[t.payload.indexOfBlock].position=t.payload.value}),Object(cn.a)(gn,v,function(e,t){var n=t.payload.id,a=p.a.find(e.projects[e.currentProject].blocks,{id:n});a.paused=!a.paused}),Object(cn.a)(gn,x,function(e,t){e.selectedLink=t.payload}),Object(cn.a)(gn,O,function(e,t){var n=t.payload,a=n.blockId,r=n.key,i=n.value,c=e.projects[e.currentProject].blocks;p.a.find(c,{id:a})[r]=i}),Object(cn.a)(gn,L,function(e,t){var n=t.payload,a=n.id,r=n.data,i=e.projects[e.currentProject].blocks;p.a.find(i,{id:a}).data=r}),Object(cn.a)(gn,C,function(e,t){e.currentProject=t.payload,e.clickedBlock={}}),gn)),vn=function(e,t){return e.findIndex(function(e){return e.id===t.id})},xn=jn,On=(n(435),n(203)),Ln=n.n(On),Cn={mainPage:$t()(xn,{limit:5})},Bn=[].concat(Object(r.a)(Object(k.d)()),[Ln.a]),wn=Object(k.a)({reducer:Cn,middleware:Bn,devTools:!1}),An=Object(d.createMuiTheme)({palette:{background:{default:"#d3e3fc",paper:"#ffffff"},primary:{main:"#77a6f7"},secondary:{main:"#a8d0e6"}}});l.a.render(c.a.createElement(i.Fragment,null,c.a.createElement(f.a,{store:wn},c.a.createElement(d.MuiThemeProvider,{theme:An},c.a.createElement(tn,null)))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/tcc",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/tcc","/service-worker.js");yn?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):En(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):En(e)})}}()}},[[208,1,2]]]);
//# sourceMappingURL=main.ed9ccc51.chunk.js.map