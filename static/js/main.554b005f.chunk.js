(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{149:function(e,t,a){},151:function(e,t,a){},153:function(e,t,a){},155:function(e,t,a){},157:function(e,t,a){},159:function(e,t,a){},161:function(e,t,a){},163:function(e,t,a){},165:function(e,t,a){},167:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(31),l=a.n(c),s=(a(77),a(3)),o=a(4),i=a(6),u=a(5),m=a(7),d=a(170),p=a(169),h="/employee",f="/employee/dashboard",b="/employee/profile",E="/employee/report",v="/hr",y="hr/report-page",O=(a(79),a(173)),j=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header-title"},r.a.createElement("h3",null,"workSafe")),r.a.createElement("div",{className:"navbar"},r.a.createElement(O.a,{to:E,activeClassName:"selected",className:"link"},"Report"),r.a.createElement(O.a,{exact:!0,to:f,activeClassName:"selected",className:"link"},"Dashboard"),r.a.createElement(O.a,{to:b,activeClassName:"selected",className:"link"},"Profile")))}}]),t}(r.a.Component),N=a(69),k=a.n(N),g=a(56),w=a(40),C=a.n(w);C.a.apps.length||C.a.initializeApp({apiKey:"AIzaSyDNjt0ZQR50uFWwvHiLMs3dR3OckvzteLo",authDomain:"worksafe-630dd.firebaseapp.com",databaseURL:"https://worksafe-630dd.firebaseio.com",projectId:"worksafe-630dd",storageBucket:"worksafe-630dd.appspot.com",messagingSenderId:"866713004286"});var D=C.a,S=function(){function e(){Object(s.a)(this,e),this.db=D.firestore().collection("reports")}return Object(o.a)(e,[{key:"add",value:function(e){return this.db.add(e)}},{key:"get",value:function(e){var t=[];return this.db.where("name","==",e).get().then(function(e){return e.forEach(function(e){return t.push(Object(g.a)({},e.id,e.data()))}),t})}},{key:"getAll",value:function(){var e=[];return this.db.get().then(function(t){return t.forEach(function(t){return e.push(Object(g.a)({},t.id,t.data()))}),e})}},{key:"getByStatus",value:function(e){var t=[];return this.db.where("status","==",e).get().then(function(e){return e.forEach(function(e){return t.push(e.data())}),t})}}]),e}(),R=a(171),T=a(14),I=a.n(T),B=(a(149),a(151),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).checkDate=function(e){return e-I()(new Date)<=0},e.state={userType:"",toDashboard:!1},e.reportInfo={name:"Jane Doe",datetime:"",location:"",type:"",description:"",status:"Awaiting Review"},e.firebase=new S,e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e,t){this.reportInfo[e]=t}},{key:"fileReport",value:function(){var e=this;this.reportInfo.timeFiled=I()().format(),this.firebase.add(this.reportInfo).then(function(){return e.setState({toDashboard:!0})})}},{key:"render",value:function(){var e=this;return!0===this.state.toDashboard?r.a.createElement(R.a,{to:b}):r.a.createElement("div",{className:"report"},this.state.userType?r.a.createElement("div",{className:"buffer"},r.a.createElement("div",{className:"form"},r.a.createElement("div",{className:"name formSection"},r.a.createElement("p",{className:"label"},"Name"),r.a.createElement("p",null,this.reportInfo.name)),r.a.createElement("div",{className:"dateTime formSection short"},r.a.createElement("div",{className:"date"},r.a.createElement("p",{className:"label"},"Date and Approximate Time of Occurence"),r.a.createElement(k.a,{onChange:function(t){return e.handleChange("datetime",I.a.utc(t).format())},isValidDate:this.checkDate}))),r.a.createElement("div",{className:"location formSection short"},r.a.createElement("p",{className:"label"},"Location"),r.a.createElement("input",{type:"text",className:"form-control form-control-sm","aria-describedby":"locationInput",onChange:function(t){return e.handleChange("location",t.currentTarget.value)}})),r.a.createElement("div",{className:"type formSection short"},r.a.createElement("p",{className:"label"},"Type of Harassment"),r.a.createElement("select",{type:"text",className:"form-control form-control-sm",onChange:function(t){return e.handleChange("type",t.currentTarget.value)}},r.a.createElement("option",{value:"",selected:!0,disabled:!0,hidden:!0},"Select Harassment Type"),r.a.createElement("option",null,"Sexual Harassment"),r.a.createElement("option",null,"Workplace Bullying"),r.a.createElement("option",null,"Retaliation"),r.a.createElement("option",null,"Ageism"),r.a.createElement("option",null,"Racial Harassment"),r.a.createElement("option",null,"Disability-Based Harassment"))),r.a.createElement("div",{className:"bystander formSection short"},r.a.createElement("p",{className:"label"},"bystander"===this.state.userType?"Parties ":"Bystanders"," Present "),r.a.createElement("input",{type:"text",className:"form-control form-control-sm","aria-describedby":"bystanderInput",onChange:function(t){var a="bystander"===e.state.userType?"parties ":"bystanders";e.handleChange(a,t.currentTarget.value)}})),r.a.createElement("div",{className:"description formSection"},r.a.createElement("p",{className:"label"},"Description *"),r.a.createElement("textarea",{type:"text",className:"form-control form-control-sm",rows:"2",onChange:function(t){return e.handleChange("description",t.currentTarget.value)}})),r.a.createElement("div",{className:"evidence formSection short"},r.a.createElement("p",{className:"label"},"Additional Evidence"),r.a.createElement("input",{type:"file",className:"form-control-file",id:"exampleFormControlFile1"}))),r.a.createElement("div",{className:"submit"},r.a.createElement("button",{className:"btn submitBtn",onClick:function(){return e.fileReport()}},"Submit"))):r.a.createElement("div",{className:"select"},r.a.createElement("div",{className:"select-btns"},r.a.createElement("button",{className:"btn",onClick:function(){return e.setState({userType:"bystander"})}},"Bystander"),r.a.createElement("button",{className:"btn",onClick:function(){return e.setState({userType:"firstHand"})}},"First Hand"))))}}]),t}(r.a.Component)),x=(a(153),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"dashboard"},r.a.createElement("p",null,"This is a placeholder for the Dashboard page"))}}]),t}(r.a.Component)),F=(a(155),a(157),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("p",{className:"label"},"Status:"),r.a.createElement("p",{className:"content"},this.props.status),r.a.createElement("p",{className:"label"},"Description:"),r.a.createElement("p",{className:"content"},this.props.desc),r.a.createElement("p",{className:"label"},"Date and Time of Occurence:"),r.a.createElement("p",{className:"content"},I()(this.props.datetime).format("LLLL")))}}]),t}(r.a.Component)),A=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={rows:[]},e.firebase=new S,e.fetchData(),e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"fetchData",value:function(){var e=this;this.firebase.get("Jane Doe").then(function(t){console.log(t);var a=t.map(function(e){var t;return Object.keys(e).forEach(function(a){return t=e[a]}),t});e.setState({rows:a})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"profile"},r.a.createElement("div",{className:"reports"},r.a.createElement("p",{className:"label"},"Reports Filed"),r.a.createElement("div",null,this.state.rows.map(function(e){return r.a.createElement(F,{desc:e.description,time:e.datetime,status:e.status})}))))}}]),t}(r.a.Component),H=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"body"},r.a.createElement("div",null,r.a.createElement(j,null)),r.a.createElement("div",{className:"main"},r.a.createElement(p.a,{path:E,component:B}),r.a.createElement(p.a,{path:b,component:A}),r.a.createElement(p.a,{path:f,component:x}),r.a.createElement(d.a,{to:E})))}}]),t}(n.Component),L=(a(159),a(161),a(70)),M=a.n(L),W=a(71),J=a.n(W),z=(a(163),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null," WorkSafe "),r.a.createElement("div",{className:"tabs"},r.a.createElement("button",{onClick:this.showTable,className:"tab"},r.a.createElement("img",{src:M.a,alt:"reports"})),r.a.createElement("button",{className:"tab",onClick:this.hideTable},r.a.createElement("img",{src:J.a,alt:"validated"}))))}},{key:"showTable",value:function(){document.getElementById("table1").style.display="block",document.getElementById("table2").style.display="none"}},{key:"hideTable",value:function(){document.getElementById("table1").style.display="none",document.getElementById("table2").style.display="block"}}]),t}(n.Component)),P=(a(165),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(z,null),r.a.createElement(V,null))}}]),t}(n.Component)),V=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(q,null))}}]),t}(n.Component),q=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"form"},r.a.createElement("div",{id:"header"},r.a.createElement("h3",null,"Report Name"),r.a.createElement("div",null,r.a.createElement("select",null,r.a.createElement("option",{selected:"selected",value:"validated"},"Validated"),r.a.createElement("option",{value:"tbd"},"Awaiting Response"),r.a.createElement("option",{value:"validated"},"Mediation"),r.a.createElement("option",{value:"tbd"},"Formal Consequences"),r.a.createElement("option",{value:"final"},"Final Investigative Report Submitted")))),r.a.createElement("div",{className:"reponse"}," Name:",r.a.createElement("p",null," Test User ")),r.a.createElement("div",{className:"reponse"}," ",r.a.createElement("p",null," Date: "),r.a.createElement("p",null," Date ")),r.a.createElement("div",{className:"reponse"}," Type:",r.a.createElement("p",null," Type ")),r.a.createElement("div",{className:"reponse"}," Description:",r.a.createElement("p",null," Description ")),r.a.createElement("div",{className:"reponse"}," Your Response:",r.a.createElement("p",null," Current Status ")))}}]),t}(n.Component),U=a(172),K=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(U.a,null,r.a.createElement(p.a,{path:y,component:P})),r.a.createElement(z,null),r.a.createElement(Q,null),r.a.createElement(Y,null))}}]),t}(n.Component),Q=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={shouldRedirect:!1,rows:[]},a.firebase=new S,a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(){this.setState({shouldRedirect:!0})}},{key:"componentDidMount",value:function(){this.createRows()}},{key:"handleData",value:function(e){this.setState({rows:e})}},{key:"createRows",value:function(){for(var e=this,t=[],a=["Awaiting Review","Validated","Mediation","Formal Consequences","Final Investigative Report Submitted"],n=0;n<a.length;n++)this.firebase.getByStatus(a[n]).then(function(a){for(var n=0;n<a.length;n++){var c="t1row"+a[n].datetime+n;t.push(r.a.createElement("button",{key:c,onClick:function(){return e.handleClick()}},r.a.createElement("div",{className:"rows"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"head"},r.a.createElement("h2",null," ",a[n].name," "),r.a.createElement("p",{className:a[n].status.replace(/\s+/g,"")}," ",a[n].status," ")),r.a.createElement("p",{className:"date"}," ",a[n].datetime," "),r.a.createElement("p",{className:"type"}," ",a[n].type," ")))))}e.handleData(t)})}},{key:"render",value:function(){return this.state.shouldRedirect?r.a.createElement(R.a,{push:!0,to:"/report-page"}):r.a.createElement("div",{id:"table1"},this.state.rows)}}]),t}(n.Component),Y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={shouldRedirect:!1,rows:[]},a.firebase=new S,a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.createRows()}},{key:"handleClick",value:function(){this.setState({shouldRedirect:!0})}},{key:"handleData",value:function(e){this.setState({rows:e})}},{key:"createRows",value:function(){var e=this,t=[];this.firebase.getByStatus("Resolved").then(function(a){for(var n=0;n<a.length;n++){var c="t2row"+n;if(t.push(r.a.createElement("button",{key:c,onClick:function(){return e.handleClick()}},r.a.createElement("div",{className:"rows"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"head"},r.a.createElement("h2",null," ",a[n].name," "),r.a.createElement("p",{className:a[n].status.replace(/\s+/g,"")}," ",a[n].status," ")),r.a.createElement("p",{className:"date"}," ",a[n].datetime," "),r.a.createElement("p",{className:"type"}," ",a[n].type," "))))),e.state.shouldRedirect)return r.a.createElement(R.a,{push:!0,to:"/report-page"})}e.handleData(t)})}},{key:"render",value:function(){return r.a.createElement("div",{id:"table2"},this.state.rows)}}]),t}(n.Component),Z=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(K,null)}}]),t}(n.Component),$=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(p.a,{path:h,component:H}),r.a.createElement(p.a,{path:v,component:Z})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},70:function(e,t,a){e.exports=a.p+"static/media/reports.9fdc5bde.png"},71:function(e,t,a){e.exports=a.p+"static/media/validated.2143001a.png"},72:function(e,t,a){e.exports=a(167)},77:function(e,t,a){},79:function(e,t,a){}},[[72,2,1]]]);
//# sourceMappingURL=main.554b005f.chunk.js.map