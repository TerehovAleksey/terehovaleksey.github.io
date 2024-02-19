import{j as e,a as m,F as p,r as f,k as V,l as E,m as L,s as P}from"./index-ded9a347.js";import{P as T}from"./PageTitle-ce693048.js";import{F as w,u as y}from"./FloatingInputArea-5e90e232.js";import{C as N,F as d}from"./FloatingInputText-55b1dd4e.js";import{h as C,i as j}from"./index.esm-9f5defca.js";import"./iconBase-ae07134d.js";const g={logo:{name:"",logoPath:"",position:""},contacts:[],education:{title:"",items:[]},language:{title:"",items:[]},profile:{title:"",content:""},experience:{title:"",items:[]},skills:{title:"",items:[]},interests:{title:"",items:[]}},x=t=>t?(t.logo||(t.logo=g.logo),t.contacts||(t.contacts=g.contacts),t.education||(t.education=g.education),t.language||(t.language=g.language),t.profile||(t.profile=g.profile),t.experience||(t.experience=g.experience),t.skills||(t.skills=g.skills),t.interests||(t.interests=g.interests),t):g,A=({value:t,onValueChanged:s})=>e(N,{title:"Лого",children:m(p,{children:[e(d,{label:"Имя:",value:t.name,onValueChanged:c=>s({...t,name:c})}),e(d,{label:"Позиция:",value:t.position,onValueChanged:c=>s({...t,position:c})}),e(d,{label:"Ссылка на лого:",value:t.logoPath,onValueChanged:c=>s({...t,logoPath:c})})]})}),$=({value:t,onValueChanged:s})=>e(N,{title:"Обо мне",children:m(p,{children:[e(d,{label:"Заголовок:",value:t.title,onValueChanged:c=>s({...t,title:c})}),e(w,{label:"Содержимое:",value:t.content,onValueChanged:c=>s({...t,content:c})})]})}),B=({value:t,onValueChanged:s,onItemDelete:c})=>m("div",{className:"list-group-item p-0 mt-3",children:[e(d,{label:"Id (сортировка):",value:t.id.toString(),onValueChanged:i=>s({...t,id:Number.parseInt(i)})}),e(d,{label:"Даты:",value:t.years,onValueChanged:i=>s({...t,years:i})}),e(d,{label:"Организация:",value:t.company,onValueChanged:i=>s({...t,company:i})}),e(d,{label:"Должность:",value:t.position,onValueChanged:i=>s({...t,position:i})}),e(w,{label:"Описание:",value:t.description,onValueChanged:i=>s({...t,description:i})}),e("button",{className:"btn btn-sm btn-outline-danger mb-3",type:"button",onClick:c,children:"Удалить"})]}),G=({value:t,onValueChanged:s})=>{const c=l=>{const n={...t,title:l};s(n)},i=()=>{const l={...t};l.items.push({id:0,years:"",position:"",company:"",description:""}),s(l)},u=(l,n)=>{const a={...t};a.items[l]=n,s(a)},h=l=>{const n={...t};n.items.splice(l,1),s(n)};return e(N,{title:"Опыт",children:m(p,{children:[e(d,{label:"Заголовок:",value:t.title,onValueChanged:c}),e("div",{className:"list-group list-group-flush",children:t.items.map((l,n)=>e(B,{value:l,onItemDelete:()=>h(n),onValueChanged:a=>u(n,a)},n))}),e("button",{className:"btn btn-sm btn-outline-success mt-3",type:"button",onClick:i,children:"Добавить"})]})})},_=({value:t,onValueChanged:s,onItemDelete:c})=>m("div",{className:"list-group-item p-0 mt-3 d-flex align-items-center justify-content-between",children:[e(d,{label:"Навык:",value:t.skill,className:"w-100 me-3",onValueChanged:i=>s({...t,skill:i})}),e(d,{label:"Уровень:",value:t.level.toString(),className:"w-50 me-3",onValueChanged:i=>s({...t,level:Number.parseInt(i)})}),e("button",{className:"btn btn-sm btn-outline-danger",type:"button",onClick:c,children:e(C,{})})]}),q=({value:t,onValueChanged:s})=>{const c=l=>{const n={...t,title:l};s(n)},i=()=>{const l={...t};l.items.push({skill:"",level:0}),s(l)},u=(l,n)=>{const a={...t};a.items[l]=n,s(a)},h=l=>{const n={...t};n.items.splice(l,1),s(n)};return e(N,{title:"Ключевые навыки",children:m(p,{children:[e(d,{label:"Заголовок:",value:t.title,onValueChanged:c}),e("div",{className:"list-group list-group-flush",children:t.items.map((l,n)=>e(_,{value:l,onValueChanged:a=>u(n,a),onItemDelete:()=>h(n)},n))}),e("button",{className:"btn btn-sm btn-outline-success mt-3",type:"button",onClick:i,children:"Добавить"})]})})},z=({value:t,onValueChanged:s,onItemDelete:c})=>m("div",{className:"list-group-item p-0 mt-2 d-flex align-items-center justify-content-between",children:[e(d,{label:"Название:",value:t.title,className:"w-50 me-3",onValueChanged:i=>s({...t,title:i})}),e(d,{label:"Иконка:",value:t.icon,className:"w-50 me-3",onValueChanged:i=>s({...t,icon:i})}),e("button",{className:"btn btn-sm btn-outline-danger",type:"button",onClick:c,children:e(C,{})})]}),H=({value:t,onValueChanged:s})=>{const c=l=>{const n={...t,title:l};s(n)},i=()=>{const l={...t};l.items.push({title:"",icon:""}),s(l)},u=(l,n)=>{const a={...t};a.items[l]=n,s(a)},h=l=>{const n={...t};n.items.splice(l,1),s(n)};return e(N,{title:"Интересы",children:m(p,{children:[e(d,{label:"Заголовок:",value:t.title,onValueChanged:c}),e("div",{className:"list-group list-group-flush",children:t.items.map((l,n)=>e(z,{value:l,onValueChanged:a=>u(n,a),onItemDelete:()=>h(n)},n))}),e("button",{className:"btn btn-sm btn-outline-success mt-3",type:"button",onClick:i,children:"Добавить"})]})})},J=({value:t,onValueChanged:s,onItemDelete:c})=>e("div",{className:"list-group-item p-0 mt-2",children:m("div",{className:"row",children:[e("div",{className:"col-sm-12 col-lg-3",children:e(d,{label:"Даты:",value:t.years,onValueChanged:i=>s({...t,years:i})})}),e("div",{className:"col-sm-12 col-lg-4",children:e(d,{label:"Специальность:",value:t.skill,onValueChanged:i=>s({...t,skill:i})})}),e("div",{className:"col-sm-12 col-lg-4",children:e(d,{label:"Шарага:",value:t.place,onValueChanged:i=>s({...t,place:i})})}),e("div",{className:"col-lg-1 mb-3 mb-lg-0 d-flex align-items-center",children:e("button",{className:"btn btn-sm btn-outline-danger",type:"button",onClick:c,children:e(C,{})})})]})}),K=({value:t,onValueChanged:s})=>{const c=l=>{const n={...t,title:l};s(n)},i=()=>{const l={...t};l.items.push({skill:"",place:"",years:""}),s(l)},u=(l,n)=>{const a={...t};a.items[l]=n,s(a)},h=l=>{const n={...t};n.items.splice(l,1),s(n)};return e(N,{title:"Образование",children:m(p,{children:[e(d,{label:"Заголовок:",value:t.title,onValueChanged:c}),e("div",{className:"list-group list-group-flush",children:t.items.map((l,n)=>e(J,{value:l,onValueChanged:a=>u(n,a),onItemDelete:()=>h(n)},n))}),e("button",{className:"btn btn-sm btn-outline-success mt-3",type:"button",onClick:i,children:"Добавить"})]})})},M=({value:t,onValueChanged:s,onItemDelete:c})=>e("div",{className:"list-group-item p-0 mt-2",children:m("div",{className:"row",children:[e("div",{className:"col-sm-12 col-lg-6",children:e(d,{label:"Язык:",value:t.language,onValueChanged:i=>s({...t,language:i})})}),e("div",{className:"col-10 col-lg-5",children:e(d,{label:"Уровень:",value:t.level.toString(),onValueChanged:i=>s({...t,level:Number.parseInt(i)})})}),e("div",{className:"col-2 col-lg-1 d-flex align-items-center",children:e("button",{className:"btn btn-sm btn-outline-danger",type:"button",onClick:c,children:e(C,{})})})]})}),O=({value:t,onValueChanged:s})=>{const c=l=>{const n={...t,title:l};s(n)},i=()=>{const l={...t};l.items.push({language:"",level:0}),s(l)},u=(l,n)=>{const a={...t};a.items[l]=n,s(a)},h=l=>{const n={...t};n.items.splice(l,1),s(n)};return e(N,{title:"Языки",children:m(p,{children:[e(d,{label:"Заголовок:",value:t.title,onValueChanged:c}),e("div",{className:"list-group list-group-flush",children:t.items.map((l,n)=>e(M,{value:l,onValueChanged:a=>u(n,a),onItemDelete:()=>h(n)},n))}),e("button",{className:"btn btn-sm btn-outline-success mt-3",type:"button",onClick:i,children:"Добавить"})]})})},Q=({value:t,onValueChanged:s,onItemDelete:c})=>e("div",{className:"list-group-item p-0 mt-2",children:m("div",{className:"row",children:[e("div",{className:"col-sm-12 col-lg-4",children:e(d,{label:"Название:",value:t.title,onValueChanged:i=>s({...t,title:i})})}),e("div",{className:"col-sm-12 col-lg-4",children:e(d,{label:"Ссылка:",value:t.link,onValueChanged:i=>s({...t,link:i})})}),e("div",{className:"col-lg-3",children:e(d,{label:"Иконка:",value:t.icon,onValueChanged:i=>s({...t,icon:i})})}),e("div",{className:"col-lg-1 mb-3 mb-lg-0 d-flex align-items-center",children:e("button",{className:"btn btn-sm btn-outline-danger",type:"button",onClick:c,children:e(C,{})})})]})}),R=({value:t,onValueChanged:s,onItemDelete:c})=>{const i=()=>{const l={...t};l.items.push({title:"",icon:"",link:""}),s(l)},u=(l,n)=>{const a={...t};a.items[l]=n,s(a)},h=l=>{const n={...t};n.items.splice(l,1),s(n)};return m("div",{className:"mt-3",children:[e("label",{className:"form-label",children:"Название секции:"}),m("div",{className:"input-group",children:[e("input",{className:"form-control",value:t.title,onChange:l=>s({...t,title:l.target.value})}),e("button",{className:"btn btn-outline-success",type:"button",onClick:i,children:e(j,{})}),e("button",{className:"btn btn-outline-danger",type:"button",onClick:c,children:e(C,{})})]}),e("div",{className:"list-group list-group-flush",children:t.items.map((l,n)=>e(Q,{value:l,onValueChanged:a=>u(n,a),onItemDelete:()=>h(n)},n))})]})},U=({value:t,onValueChanged:s})=>{const c=()=>{const h=[...t];h.push({title:"",items:[]}),s(h)},i=(h,l)=>{const n=[...t];n[h]=l,s(n)},u=h=>{const l=[...t];l.splice(h,1),s(l)};return e(N,{title:"Контакты",children:m(p,{children:[e("div",{className:"list-group list-group-flush",children:t.map((h,l)=>e(R,{value:h,onValueChanged:n=>i(l,n),onItemDelete:()=>u(l)},l))}),e("button",{className:"btn btn-sm btn-outline-success mt-3",type:"button",onClick:c,children:"Добавить"})]})})},W=window.location.origin,ne=()=>{const[t,s]=f.useState([]),[c,i]=f.useState(void 0),[u,h]=f.useState("en"),[l,n]=f.useState({}),[a,b]=f.useState(g),D=()=>{let o=W;const r=u==="ru"?u:"",v=c?c.toString():"";return(r||v)&&(o+="/?"),v&&(o+=`ver=${v}`),r&&(v?o+=`&lang=${r}`:o+=`lang=${r}`),o};f.useEffect(()=>{I()},[]),f.useEffect(()=>{b(u==="en"?x(l.en):u==="ru"?x(l.ru):g)},[l,u]);const I=()=>{V().then(o=>{s(o),k(0)})},k=o=>{E(o).then(r=>{r.id||(r.id=y()),n(r),i(r.version)})},S=()=>{L(l.id).then(()=>{alert("Удалено!"),I()})},F=o=>{o.preventDefault();const r={...l};r.version!==c&&(r.version=c??0,r.id=y()),u==="en"?r.en=a:u==="ru"&&(r.ru=a),P(r).then(()=>{alert("Сохранено!"),I()})};return m(p,{children:[e(T,{title:"Редактор"}),m("div",{className:"container-fluid mt-3",children:[m("div",{className:"row mb-3",children:[m("div",{className:"col-md-6",children:[e("label",{htmlFor:"cv-select",className:"form-label",children:"Список доступных резюме:"}),m("select",{className:"form-select",id:"cv-select","aria-label":"cv-select-label",value:c,onChange:o=>k(Number.parseInt(o.target.value)),children:[e("option",{selected:!0,disabled:!0,children:"Выберете вариант..."}),t.map((o,r)=>e("option",{value:o.version,children:o.description},r))]})]}),m("div",{className:"col-md-6 mt-sm-3 mt-md-0",children:[e("label",{htmlFor:"cv-lang",className:"form-label",children:"Язык:"}),m("select",{className:"form-select",id:"cv-lang","aria-label":"cv-select-label",value:u,onChange:o=>h(o.target.value),children:[e("option",{value:"en",children:"English"}),e("option",{value:"ru",children:"Русский"})]})]})]}),m("div",{className:"alert alert-info",role:"alert",children:["Для создания нового варианта резюме просто измените описание и версию, отредактируйте данные и сохраните! ",e("hr",{})," Резюме будет доступно по сгенерированной ссылке."]}),m("div",{className:"alert alert-warning",role:"alert",children:["Иконки только Fa*! ",e("hr",{})," Остальные не подключены, иначе большой js-файл получается."]}),m("form",{onSubmit:F,children:[m("div",{className:"row mb-3",children:[m("div",{className:"col-md-7",children:[e("label",{htmlFor:"cv-desc",className:"form-label",children:"Описание:"}),e("input",{type:"text",className:"form-control",id:"cv-desc",value:l.description,onChange:o=>n(r=>({...r,description:o.target.value}))})]}),m("div",{className:"col-md-4 mt-3 mt-md-0",children:[e("label",{className:"form-label",children:"Версия:"}),e("input",{type:"number",className:"form-control",min:0,value:c,onChange:o=>i(Number.parseInt(o.target.value))})]}),e("div",{className:"col-md-1 mt-3 mt-md-0 d-flex align-items-end",children:e("button",{className:"btn btn-outline-danger",type:"button",disabled:c===0,onClick:S,children:e(C,{})})})]}),e("div",{className:"row mb-3",children:m("div",{className:"col",children:[e("label",{htmlFor:"cv-link",className:"form-label",children:"Ссылка:"}),e("input",{type:"url",className:"form-control",id:"cv-link",disabled:!0,value:D()})]})}),e("div",{className:"row",children:m("div",{className:"col",children:[e("h4",{children:"Левая секция"}),a.logo&&e(A,{value:a.logo,onValueChanged:o=>b(r=>({...r,logo:o}))}),a.contacts&&e(U,{value:a.contacts,onValueChanged:o=>b(r=>({...r,contacts:o}))}),a.education&&e(K,{value:a.education,onValueChanged:o=>b(r=>({...r,education:o}))}),a.language&&e(O,{value:a.language,onValueChanged:o=>b(r=>({...r,language:o}))})]})}),e("div",{className:"row mt-3",children:m("div",{className:"col",children:[e("h4",{children:"Правая секция"}),a.profile&&e($,{value:a.profile,onValueChanged:o=>b(r=>({...r,profile:o}))}),a.experience&&e(G,{value:a.experience,onValueChanged:o=>b(r=>({...r,experience:o}))}),a.skills&&e(q,{value:a.skills,onValueChanged:o=>b(r=>({...r,skills:o}))}),a.interests&&e(H,{value:a.interests,onValueChanged:o=>b(r=>({...r,interests:o}))})]})}),e("div",{className:"row mb-5",children:e("div",{className:"col",children:e("button",{className:"btn btn-primary",type:"submit",children:"Сохранить"})})})]})]})]})};export{ne as default};