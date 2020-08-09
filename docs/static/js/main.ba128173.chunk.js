(this.webpackJsonp01=this.webpackJsonp01||[]).push([[0],[,,,,,,,,,,,function(e,a,t){},,,,,,function(e,a,t){e.exports=t.p+"static/media/logo.75509f2e.png"},,function(e,a,t){e.exports=t(34)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),c=t.n(l),i=t(6),s=t(9),m=t(1),u=t(17),o=t.n(u),d=function(){return fetch("https://rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,name:e.name,status:e.status,species:e.species,image:e.image,origin:e.origin.name,gender:e.gender,episodes:e.episode.length}}))}))},p=(t(24),t(25),t(11),function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"label-name",htmlFor:"name"}),r.a.createElement("input",{className:"input-name",type:"text",name:"name",id:"name",value:e.filterName,onChange:function(a){e.handleFilter({value:a.target.value,key:"nameFilter"})},placeholder:"Filter by name"}))}),E=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"label-status",htmlFor:"status"},"Status:"),r.a.createElement("select",{id:"status",name:"status",className:"form__input-text",value:e.filterStatus,onChange:function(a){e.handleFilter({value:a.target.value,key:"status"})}},r.a.createElement("option",{value:"all"},"All"),r.a.createElement("option",{value:"Alive"},"Alive"),r.a.createElement("option",{value:"Dead"},"Dead"),r.a.createElement("option",{value:"unknown"},"Unknown")))},f=function(e){return r.a.createElement("section",null,r.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(e)}},r.a.createElement(p,{handleFilter:e.handleFilter,nameFilter:e.filterName}),r.a.createElement(E,{handleFilter:e.handleFilter,statusFilter:e.filterStatus})))},h=(t(26),t(27),function(e){return r.a.createElement("article",{className:"card"},r.a.createElement("img",{src:e.image,className:"card__img",alt:e.name}),r.a.createElement("div",{className:"atributes"},r.a.createElement("h3",{className:"card__title"},e.name),r.a.createElement("p",{className:"card__species"},e.species),r.a.createElement("p",{className:"card__status"},e.status)),r.a.createElement(i.b,{to:"/character/".concat(e.id)},r.a.createElement("button",{className:"card__btn"},"Click here to see in detail")))}),g=function(e){if(0===e.characters.length)return r.a.createElement("p",{className:"error"},"Character not found, try again!");var a=e.characters.map((function(e){return r.a.createElement(h,{key:e.id,id:e.id,image:e.image,name:e.name,status:e.status,species:e.species,origin:e.origin,episodes:e.episodes})}));return r.a.createElement("section",{className:"cards"},a)},N=(t(33),function(e){return r.a.createElement(i.b,{to:"/"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal__dialog"},r.a.createElement("div",{className:"modal__content",onClick:function(e){e.preventDefault()}},r.a.createElement("header",{className:"modal__header"},r.a.createElement("h2",{className:"modal__title"}," Character: ",e.name),r.a.createElement(i.b,{to:"/"},r.a.createElement("span",{className:"return"},"Return"))),r.a.createElement("section",null,r.a.createElement("img",{className:"card__img",src:e.image,alt:e.name}),r.a.createElement("ul",{className:"card__detail"},r.a.createElement("li",null," Specie: ",e.specie," "),r.a.createElement("li",null," Status: ",e.status," "),r.a.createElement("li",null," Origin: ",e.origin," "),r.a.createElement("li",null," Gender: ",e.gender," "),r.a.createElement("li",null," Episodes: ",e.episodes," "))))))))}),v=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(""),i=Object(s.a)(c,2),u=i[0],p=i[1],E=Object(n.useState)("all"),h=Object(s.a)(E,2),v=h[0],_=h[1];Object(n.useEffect)((function(){d().then((function(e){l(e)}))}),[]),t.sort((function(e,a){return e.name<a.name?-1:e.name>a.name?1:0}));var b=t.filter((function(e){return e.name.toUpperCase().includes(u.toUpperCase())})).filter((function(e){return"all"===v||e.status===v}));return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null," ",r.a.createElement("img",{className:"logo",src:o.a,alt:"logo",title:"Logo Rick & Morty"}))),r.a.createElement("main",null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/"},r.a.createElement(f,{handleFilter:function(e){"nameFilter"===e.key?p(e.value):"status"===e.key&&_(e.value)},filterName:u,filterStatus:v}),r.a.createElement(g,{characters:b,filterName:u})),r.a.createElement(m.a,{path:"/character/:characterId",render:function(e){console.log(e);var a=parseInt(e.match.params.characterId),n=t.find((function(e){return e.id===a}));return n?r.a.createElement(N,{image:n.image,name:n.name,status:n.status,specie:n.species,origin:n.origin,gender:n.gender,episodes:n.episodes}):r.a.createElement("p",null,"Character not found")}}))))};c.a.render(r.a.createElement(i.a,null,r.a.createElement(v,null)),document.querySelector("#root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.ba128173.chunk.js.map