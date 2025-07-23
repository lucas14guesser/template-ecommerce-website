import{a as t}from"./index-NIGUFBhG.js";const e=async r=>{const o=await t.get("http://localhost:3000/ecommerce/produtos");o.data.error?console.error(o.data.error):r(o.data.result)};export{e as g};
