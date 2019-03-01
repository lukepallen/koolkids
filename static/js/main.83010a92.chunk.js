(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{158:function(e,t,a){},160:function(e,t,a){},162:function(e,t,a){},164:function(e,t,a){},166:function(e,t,a){},168:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(31),c=a.n(o),l=(a(77),a(3)),i=a(4),s=a(6),m=a(5),u=a(7),p=a(173),d=a(174),h=a(169),f=a(172),b="/about",v="/home",E="/dashboard",g="/profile",y="/home/report",O=(a(79),a(171)),j=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header-title"},r.a.createElement("h3",null,"workSafe")),r.a.createElement("div",{className:"navbar"},r.a.createElement(O.a,{to:v,activeClassName:"selected",className:"link"},"Home"),r.a.createElement(O.a,{exact:!0,to:E,activeClassName:"selected",className:"link"},"Dashboard"),r.a.createElement(O.a,{to:b,activeClassName:"selected",className:"link"},"About"),r.a.createElement(O.a,{to:g,activeClassName:"selected",className:"link"},"Profile")))}}]),t}(r.a.Component),N=(a(85),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"getPos",value:function(){switch(this.props.pos){case 0:return"right";case 1:return"center";case 2:return"left";default:return"right"}}},{key:"render",value:function(){return r.a.createElement("div",{className:"tile parallax",style:{backgroundImage:"url("+this.props.imgSrc+")"}},r.a.createElement("div",{className:"text "+this.getPos()},this.props.text?r.a.createElement("div",null,r.a.createElement("p",null,this.props.text[0]),this.props.text[1]?r.a.createElement("p",null,r.a.createElement("br",null),this.props.text[1]):r.a.createElement("span",null)):r.a.createElement("p",null,"Some placeholder text that will be changed down the road")))}}]),t}(r.a.Component)),k=(a(87),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"divider"},r.a.createElement("div",{className:"cornerBorder topLeft"}),"teamInfo"===this.props.fact?r.a.createElement("div",{className:"dividerText"},r.a.createElement("p",null,"OUR TEAM:  We are all Seniors in the Informatics program. Our specialties are Data Science, Product Development and Interaction Design."),r.a.createElement("ul",null,r.a.createElement("li",null,"Ally Picker -  With a love of design and innovative product development, she enjoys learning new methods for solving old problems as well as using technology to advocate for others."),r.a.createElement("li",null,"Anukriti Goyal \u2013 Her passion lies in the power of data science to change processes and bring people together."),r.a.createElement("li",null,"Luke Allen \u2013 An avid software developer, he loves finding and solving unique problems using technology"),r.a.createElement("li",null,"Sagar Surana \u2013 As a back end developer, he hopes to build scalable systems that are efficiently built and help to improve people\u2019s lives"))):r.a.createElement("div",{className:"dividerText"},r.a.createElement("p",null,"This is a placeholder fact for user research and data on MVP")),r.a.createElement("div",{className:"cornerBorder botRight"}))}}]),t}(r.a.Component)),w=(a(89),a(68)),x=a.n(w),S=a(69),C=a.n(S),A=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).missionStatement="PROBLEM: Harassment in the workplace has increased over the past decade despite continued efforts to implement inclusive policies and practices. One aspect of this is company\u2019s failure to implement efficient reporting mechanisms that instill confidence that they will diligently evaluate and exact justice for any given report. \n\n",a.solutionStatement="SOLUTION: Our solution is an enterprise wide reporting system that allows employees to privately report any identity based harassment or generalized aggressive behavior. Both HR personnel and reporters can track how their report is being processed via this tool, adding a layer of accountability that was not present prior to this tool.",a.contactInfo="Researchers, workers, Human Resources experts, and individuals who would be willing to test the software or answer exploratory design questionnaires feel free to contact the team at Arp32@uw.edu!",a.pos=-1,a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"putPos",value:function(){return this.pos+=1,this.pos>3&&(this.pos=0),this.pos}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N,{imgSrc:x.a,text:[this.missionStatement,this.solutionStatement],pos:this.putPos()}),r.a.createElement(k,{fact:"teamInfo"}),r.a.createElement(N,{imgSrc:C.a,text:[this.contactInfo],pos:this.putPos()}),r.a.createElement(k,{fact:"placeholder"}),r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"Created by Ally Picker, Anukriti Goyal, Luke Allen, and Sagar Surana as part of the University of Washington iSchool"),r.a.createElement("p",null,"For questions or additional information, contact ",r.a.createElement("span",{style:{textDecoration:"underline"}},"Arp32@uw.edu"))))}}]),t}(r.a.Component),I=a(84),T=(a(91),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"buttonDiv"},r.a.createElement(I.a,{to:y},r.a.createElement("button",{className:"btn btn-block"},"Employee")))}}]),t}(r.a.Component)),D=a(70),P=a.n(D),R=a(71),H=a(55),B=a.n(H);B.a.initializeApp({apiKey:"AIzaSyDNjt0ZQR50uFWwvHiLMs3dR3OckvzteLo",authDomain:"worksafe-630dd.firebaseapp.com",databaseURL:"https://worksafe-630dd.firebaseio.com",projectId:"worksafe-630dd",storageBucket:"worksafe-630dd.appspot.com",messagingSenderId:"866713004286"});var L=B.a,W=function(){function e(){Object(l.a)(this,e),this.db=L.firestore().collection("reports")}return Object(i.a)(e,[{key:"add",value:function(e){this.db.add(e).then(function(e){console.log(e.id)})}},{key:"get",value:function(e){var t=[];return this.db.where("name","==",e).get().then(function(e){return e.forEach(function(e){return t.push(Object(R.a)({},e.id,e.data()))}),t})}}]),e}(),U=(a(158),a(160),a(30)),z=a.n(U),F=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).checkDate=function(e){return e-z()(new Date)<=0},e.reportInfo={name:"Test User",datetime:"",location:"",type:"",description:"",status:"Awaiting Review"},e.firebase=new W,e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e,t){this.reportInfo[e]=t}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"report"},r.a.createElement("div",{className:"form"},r.a.createElement("div",{className:"name formSection"},r.a.createElement("p",{className:"label"},"Name"),r.a.createElement("p",null,"Test User")),r.a.createElement("div",{className:"dateTime formSection short"},r.a.createElement("div",{className:"date"},r.a.createElement("p",{className:"label"},"Date and Approximate Time of Occurence"),r.a.createElement(P.a,{onChange:function(t){return e.handleChange("datetime",z.a.utc(t).format())},isValidDate:this.checkDate}))),r.a.createElement("div",{className:"location formSection short"},r.a.createElement("p",{className:"label"},"Location"),r.a.createElement("input",{type:"text",className:"form-control form-control-sm","aria-describedby":"locationInput",onChange:function(t){return e.handleChange("location",t.currentTarget.value)}})),r.a.createElement("div",{className:"type formSection short"},r.a.createElement("p",{className:"label"},"Type of Harassment"),r.a.createElement("select",{type:"text",className:"form-control form-control-sm",onChange:function(t){return e.handleChange("type",t.currentTarget.value)}},r.a.createElement("option",{value:"",selected:!0,disabled:!0,hidden:!0},"Select Harassment Type"),r.a.createElement("option",null,"Sexual Harassment"),r.a.createElement("option",null,"Workplace Bullying"),r.a.createElement("option",null,"Retaliation"),r.a.createElement("option",null,"Ageism"),r.a.createElement("option",null,"Racial Harassment"),r.a.createElement("option",null,"Disability-Based Harassment"))),r.a.createElement("div",{className:"bystander formSection short"},r.a.createElement("p",{className:"label"},"Bystanders Present *"),r.a.createElement("input",{type:"text",className:"form-control form-control-sm","aria-describedby":"bystanderInput",onChange:function(t){return e.handleChange("bystanders",t.currentTarget.value)}})),r.a.createElement("div",{className:"description formSection"},r.a.createElement("p",{className:"label"},"Description *"),r.a.createElement("textarea",{type:"text",className:"form-control form-control-sm",rows:"2",onChange:function(t){return e.handleChange("description",t.currentTarget.value)}})),r.a.createElement("div",{className:"evidence formSection short"},r.a.createElement("p",{className:"label"},"Additional Evidence"),r.a.createElement("input",{type:"file",className:"form-control-file",id:"exampleFormControlFile1"}))),r.a.createElement("div",{className:"submit"},r.a.createElement("button",{className:"btn",onClick:function(){return e.firebase.add(e.reportInfo)}},"Submit")))}}]),t}(r.a.Component),M=(a(162),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"home"},r.a.createElement(h.a,{exact:!0,path:v,component:T}),r.a.createElement(h.a,{exact:!0,path:y,component:F}))}}]),t}(r.a.Component)),q=(a(164),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"dashboard"},r.a.createElement("p",null,"This is a placeholder for the Dashboard page"))}}]),t}(r.a.Component)),G=(a(166),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"profile"},r.a.createElement("p",null,"This is a placeholder for the Profile page"))}}]),t}(r.a.Component)),J=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"body"},r.a.createElement("div",null,r.a.createElement(j,null)),r.a.createElement("div",{className:"main"},r.a.createElement(d.a,null,r.a.createElement(h.a,{path:b,component:A}),r.a.createElement(h.a,{path:v,component:M}),r.a.createElement(h.a,{path:g,component:G}),r.a.createElement(h.a,{path:E,component:q}),r.a.createElement(f.a,{to:b})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},68:function(e,t,a){e.exports=a.p+"static/media/placeholder_image1.b6028d25.jpg"},69:function(e,t,a){e.exports=a.p+"static/media/placeholder_image2.a01eeb56.jpg"},72:function(e,t,a){e.exports=a(168)},77:function(e,t,a){},79:function(e,t,a){},85:function(e,t,a){},87:function(e,t,a){},89:function(e,t,a){},91:function(e,t,a){}},[[72,2,1]]]);
//# sourceMappingURL=main.83010a92.chunk.js.map