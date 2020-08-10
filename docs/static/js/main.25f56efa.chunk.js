(this.webpackJsonp01=this.webpackJsonp01||[]).push([[0],[,,,,,,,,,,,function(e,a,t){},,,,,,,function(e,a,t){e.exports=t(36)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),c=t.n(l),i=t(6),s=t(9),m=t(1),u=function(){return fetch("https://rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,name:e.name,status:e.status,species:e.species,image:e.image,origin:e.origin.name,gender:e.gender,episodes:e.episode.length}}))}))},o=(t(23),t(24),t(25),t(26),t(27),t(11),function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"label-name",htmlFor:"name"}),r.a.createElement("input",{className:"input-name",type:"text",name:"name",id:"name",value:e.filterName,onChange:function(a){e.handleFilter({value:a.target.value,key:"nameFilter"})},placeholder:"Filter by name"}))}),d=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"label-status",htmlFor:"status"},"Status:"),r.a.createElement("select",{id:"status",name:"status",className:"form__input-text",value:e.filterStatus,onChange:function(a){e.handleFilter({value:a.target.value,key:"status"})}},r.a.createElement("option",{value:"all"},"All"),r.a.createElement("option",{value:"Alive"},"Alive"),r.a.createElement("option",{value:"Dead"},"Dead"),r.a.createElement("option",{value:"unknown"},"Unknown")))},f=function(e){return r.a.createElement("section",null,r.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(e)}},r.a.createElement(o,{handleFilter:e.handleFilter,nameFilter:e.filterName}),r.a.createElement(d,{handleFilter:e.handleFilter,statusFilter:e.filterStatus})))},E=(t(28),t(29),function(e){return r.a.createElement("article",{className:"card"},r.a.createElement(i.b,{to:"/character/".concat(e.id)},r.a.createElement("img",{src:e.image,className:"card__img",alt:e.name}),r.a.createElement("div",{className:"atributes"},r.a.createElement("h3",{className:"card__title"},e.name),r.a.createElement("p",{className:"card__species"},e.species),r.a.createElement("p",{className:"card__status"},e.status))))}),p=function(e){if(0===e.characters.length)return r.a.createElement("p",{className:"error"},"Character not found, try again!");var a=e.characters.map((function(e){return r.a.createElement(E,{key:e.id,id:e.id,image:e.image,name:e.name,status:e.status,species:e.species,origin:e.origin,episodes:e.episodes})}));return r.a.createElement("section",{className:"cards"},a)},h=(t(35),function(e){return r.a.createElement(i.b,{to:"/"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal__dialog"},r.a.createElement("div",{className:"modal__content",onClick:function(e){e.preventDefault()}},r.a.createElement("header",{className:"modal__header"},r.a.createElement("h2",{className:"modal__title"}," Character: ",e.name),r.a.createElement(i.b,{to:"/"},r.a.createElement("span",{className:"return"},"Return"))),r.a.createElement("section",null,r.a.createElement("img",{className:"card__img",src:e.image,alt:e.name}),r.a.createElement("ul",{className:"card__detail"},r.a.createElement("li",null," Specie: ","Human"===e.specie?"\ud83e\uddd1":"\ud83d\udc7d"," "),r.a.createElement("li",null," Status: ","Alive"===e.status?"\ud83d\udc4d":"\ud83d\udc80"," "),r.a.createElement("li",null," Origin: ",e.origin," "),r.a.createElement("li",null," Gender: ",e.gender," "),r.a.createElement("li",null," Episodes: ",e.episodes," "))))))))}),g=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(""),i=Object(s.a)(c,2),o=i[0],d=i[1],E=Object(n.useState)("all"),g=Object(s.a)(E,2),N=g[0],v=g[1];Object(n.useEffect)((function(){u().then((function(e){l(e)}))}),[]),t.sort((function(e,a){return e.name<a.name?-1:e.name>a.name?1:0}));var _=t.filter((function(e){return e.name.toUpperCase().includes(o.toUpperCase())})).filter((function(e){return"all"===N||e.status===N}));return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"header"},r.a.createElement("h1",null," ")),r.a.createElement("main",{className:"main"},r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/"},r.a.createElement(f,{handleFilter:function(e){"nameFilter"===e.key?d(e.value):"status"===e.key&&v(e.value)},filterName:o,filterStatus:N}),r.a.createElement(p,{characters:_,filterName:o})),r.a.createElement(m.a,{path:"/character/:characterId",render:function(e){var a=parseInt(e.match.params.characterId),n=t.find((function(e){return e.id===a}));return n?r.a.createElement(h,{image:n.image,name:n.name,status:n.status,specie:n.species,origin:n.origin,gender:n.gender,episodes:n.episodes}):r.a.createElement("p",null,"Character not found")}}))),r.a.createElement("footer",{className:"footer"},r.a.createElement("h4",null,"\xa9 2020 Christina Lorenzo Montes")))};c.a.render(r.a.createElement(i.a,null,r.a.createElement(g,null)),document.querySelector("#root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.25f56efa.chunk.js.map