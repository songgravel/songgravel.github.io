webpackJsonp([1],{MeJq:function(e,n){},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("7+uW"),r={name:"ARScene",mounted:function(){console.log("ARScene mounted"),THREEx.ArToolkitContext.baseURL="../../static";var e=new THREE.WebGLRenderer({antialias:!0,alpha:!0});e.setClearColor(new THREE.Color("lightgrey"),0),e.setSize(640,480),e.domElement.style.position="absolute",e.domElement.style.top="0px",e.domElement.style.left="0px",document.body.appendChild(e.domElement);var n=[],t=new THREE.Scene,o=new THREE.Camera;t.add(o);var r=new THREEx.ArToolkitSource({sourceType:"webcam"});function a(){r.onResizeElement(),r.copyElementSizeTo(e.domElement),null!==i.arController&&r.copyElementSizeTo(i.arController.canvas)}r.init(function(){setTimeout(function(){a()},2e3)}),window.addEventListener("resize",function(){a()});var i=new THREEx.ArToolkitContext({cameraParametersUrl:THREEx.ArToolkitContext.baseURL+"/data/data/camera_para.dat",detectionMode:"mono"});i.init(function(){o.projectionMatrix.copy(i.getProjectionMatrix())}),n.push(function(){!1!==r.ready&&(i.update(r.domElement),t.visible=o.visible)});new THREEx.ArMarkerControls(i,o,{type:"pattern",patternUrl:THREEx.ArToolkitContext.baseURL+"/data/data/patt.hiro",changeMatrixMode:"cameraTransformMatrix"});t.visible=!1;var l=new THREE.BoxGeometry(1,1,1),s=new THREE.MeshNormalMaterial({transparent:!0,opacity:.5,side:THREE.DoubleSide});(c=new THREE.Mesh(l,s)).position.y=l.parameters.height/2,t.add(c);var c;l=new THREE.TorusKnotGeometry(.3,.1,64,16),s=new THREE.MeshNormalMaterial;(c=new THREE.Mesh(l,s)).position.y=.5,t.add(c),n.push(function(e){c.rotation.x+=Math.PI*e}),n.push(function(){e.render(t,o)});var u=null;requestAnimationFrame(function e(t){requestAnimationFrame(e),u=u||t-1e3/60;var o=Math.min(200,t-u);u=t,n.forEach(function(e){e(o/1e3,t/1e3)})})}},a={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"ARScene"}})},staticRenderFns:[]};var i={name:"App",components:{ARScene:t("VU/8")(r,a,!1,function(e){t("MeJq")},null,null).exports}},l={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[n("ARScene")],1)},staticRenderFns:[]};var s=t("VU/8")(i,l,!1,function(e){t("g9/B")},null,null).exports,c=t("Lw6n"),u=t.n(c);o.a.config.productionTip=!1,new o.a({render:function(e){return e(s)}}).$mount("#app"),new u.a},"g9/B":function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.d995b07c8830ebe834de.js.map