(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{187:function(t,o,e){"use strict";e.r(o);e(35);var r,l=e(5),n=e(185),c=(e(178),{components:{},data:function(){return{formData:{date:"",number:"",name:"",zipcode:"",address1:"",address2:"",client:"",terms:"",bank:"",branch:"",account:"",deadline:"",list:[{title:"",quantity:"",unit:"",price:""}]},errors:null}},methods:{resolveAddress:(r=Object(l.a)(regeneratorRuntime.mark((function t(){var address;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(n.a)(this.formData.zipcode).then((function(data){return data.pop()})).catch((function(){return null}));case 2:if(address=t.sent){t.next=6;break}return this.formData.address1="",t.abrupt("return");case 6:this.formData.address1=address.join("");case 7:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)}),addList:function(){10!=this.formData.list.length?this.formData.list.push({title:"",quantity:"",unit:"",price:""}):alert("10個まで作成可能です。")},deleteList:function(t){this.formData.list.splice(t,1)},saveCondition:function(){this.$cookies.set("invoice-conditions",this.formData)},loadCondition:function(){this.formData=this.$cookies.get("invoice-conditions"),this.resolveAddress()},goToPrintPage:function(){this.$store.commit("setFormData",this.formData),this.$router.push({name:"print",force:!0})}}}),m=e(31),component=Object(m.a)(c,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("nav",{staticClass:"navbar navbar-light bg-light fixed-top"},[e("nuxt-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("請求書作成アプリ")])],1),t._v(" "),e("div",{staticClass:"container",staticStyle:{"margin-top":"70px"}},[e("div",{staticClass:"form-group row"},[e("div",{staticClass:"col-6"},[e("button",{staticClass:"btn btn-dark",on:{click:function(o){return o.preventDefault(),t.saveCondition()}}},[t._v("情報保存")])]),t._v(" "),e("div",{staticClass:"col-6"},[e("button",{staticClass:"btn btn-light",on:{click:function(o){return o.preventDefault(),t.loadCondition()}}},[t._v("情報ロード")])])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("div",{staticClass:"col-12"},[e("button",{staticClass:"btn btn-primary",on:{click:function(o){return o.preventDefault(),t.goToPrintPage()}}},[t._v("請求書生成")])])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-12 col-form-label",attrs:{for:"date"}},[t._v("請求日")]),t._v(" "),e("div",{staticClass:"col-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.date,expression:"formData.date"}],staticClass:"form-control",attrs:{type:"date",id:"date"},domProps:{value:t.formData.date},on:{input:function(o){o.target.composing||t.$set(t.formData,"date",o.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-12 col-form-label",attrs:{for:"number"}},[t._v("請求番号")]),t._v(" "),e("div",{staticClass:"col-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.number,expression:"formData.number"}],staticClass:"form-control",attrs:{type:"text",id:"number"},domProps:{value:t.formData.number},on:{input:function(o){o.target.composing||t.$set(t.formData,"number",o.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-12 col-form-label",attrs:{for:"name"}},[t._v("お名前")]),t._v(" "),e("div",{staticClass:"col-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.name,expression:"formData.name"}],staticClass:"form-control",attrs:{type:"text",id:"name"},domProps:{value:t.formData.name},on:{input:function(o){o.target.composing||t.$set(t.formData,"name",o.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-12 col-form-label",attrs:{for:"zipcode"}},[t._v("郵便番号")]),t._v(" "),e("div",{staticClass:"col-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.zipcode,expression:"formData.zipcode"}],staticClass:"form-control",attrs:{type:"text",id:"zipcode"},domProps:{value:t.formData.zipcode},on:{change:function(o){return t.resolveAddress()},input:function(o){o.target.composing||t.$set(t.formData,"zipcode",o.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-12 col-form-label",attrs:{for:"address1"}},[t._v("アドレス１")]),t._v(" "),e("div",{staticClass:"col-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.address1,expression:"formData.address1"}],staticClass:"form-control bg-light",attrs:{type:"text",id:"address1",readonly:"true"},domProps:{value:t.formData.address1},on:{input:function(o){o.target.composing||t.$set(t.formData,"address1",o.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-12 col-form-label",attrs:{for:"address2"}},[t._v("アドレス２")]),t._v(" "),e("div",{staticClass:"col-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.address2,expression:"formData.address2"}],staticClass:"form-control",attrs:{type:"text",id:"address2"},domProps:{value:t.formData.address2},on:{input:function(o){o.target.composing||t.$set(t.formData,"address2",o.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-12 col-form-label",attrs:{for:"client"}},[t._v("クライアント名")]),t._v(" "),e("div",{staticClass:"col-12"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.client,expression:"formData.client"}],staticClass:"form-control",attrs:{id:"client",rows:"3"},domProps:{value:t.formData.client},on:{input:function(o){o.target.composing||t.$set(t.formData,"client",o.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-12 col-form-label",attrs:{for:"terms"}},[t._v("請求期間")]),t._v(" "),e("div",{staticClass:"col-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.terms,expression:"formData.terms"}],staticClass:"form-control",attrs:{type:"text",id:"terms"},domProps:{value:t.formData.terms},on:{input:function(o){o.target.composing||t.$set(t.formData,"terms",o.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-12 col-form-label",attrs:{for:"bank"}},[t._v("銀行名")]),t._v(" "),e("div",{staticClass:"col-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.bank,expression:"formData.bank"}],staticClass:"form-control",attrs:{type:"text",id:"bank"},domProps:{value:t.formData.bank},on:{input:function(o){o.target.composing||t.$set(t.formData,"bank",o.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-12 col-form-label",attrs:{for:"branch"}},[t._v("支店名")]),t._v(" "),e("div",{staticClass:"col-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.branch,expression:"formData.branch"}],staticClass:"form-control",attrs:{type:"text",id:"branch"},domProps:{value:t.formData.branch},on:{input:function(o){o.target.composing||t.$set(t.formData,"branch",o.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-12 col-form-label",attrs:{for:"account"}},[t._v("口座番号")]),t._v(" "),e("div",{staticClass:"col-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.account,expression:"formData.account"}],staticClass:"form-control",attrs:{type:"text",id:"account"},domProps:{value:t.formData.account},on:{input:function(o){o.target.composing||t.$set(t.formData,"account",o.target.value)}}})])]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-12 col-form-label",attrs:{for:"deadline"}},[t._v("お支払い期限")]),t._v(" "),e("div",{staticClass:"col-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.deadline,expression:"formData.deadline"}],staticClass:"form-control",attrs:{type:"text",id:"deadline"},domProps:{value:t.formData.deadline},on:{input:function(o){o.target.composing||t.$set(t.formData,"deadline",o.target.value)}}})])]),t._v(" "),e("div",{staticClass:"dropdown-divider"}),t._v(" "),t._l(t.formData.list,(function(o,r){return e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-12 col-form-label"},[e("span",[t._v("請求情報"+t._s(r+1))]),t._v(" "),r>0?e("button",{staticClass:"btn btn-danger",on:{click:function(o){return o.preventDefault(),t.deleteList(r)}}},[t._v("請求情報削除")]):t._e()]),t._v(" "),e("div",{staticClass:"col-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.list[r].title,expression:"formData.list[idx].title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"品番•品名"},domProps:{value:t.formData.list[r].title},on:{input:function(o){o.target.composing||t.$set(t.formData.list[r],"title",o.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.list[r].quantity,expression:"formData.list[idx].quantity"}],staticClass:"form-control",attrs:{type:"number",placeholder:"数量"},domProps:{value:t.formData.list[r].quantity},on:{input:function(o){o.target.composing||t.$set(t.formData.list[r],"quantity",o.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.list[r].unit,expression:"formData.list[idx].unit"}],staticClass:"form-control",attrs:{type:"text",placeholder:"単位"},domProps:{value:t.formData.list[r].unit},on:{input:function(o){o.target.composing||t.$set(t.formData.list[r],"unit",o.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.list[r].price,expression:"formData.list[idx].price"}],staticClass:"form-control",attrs:{type:"number",placeholder:"金額"},domProps:{value:t.formData.list[r].price},on:{input:function(o){o.target.composing||t.$set(t.formData.list[r],"price",o.target.value)}}})])])})),t._v(" "),e("div",{staticClass:"form-group row"},[e("div",{staticClass:"col-12"},[e("button",{staticClass:"btn btn-primary",on:{click:function(o){return o.preventDefault(),t.addList()}}},[t._v("請求情報追加")])])])],2)])}),[],!1,null,null,null);o.default=component.exports}}]);