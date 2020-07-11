(this.webpackJsonpweather_app=this.webpackJsonpweather_app||[]).push([[0],{13:function(e,t,a){e.exports=a(29)},18:function(e,t,a){},20:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(11),c=a.n(i),o=(a(18),a(9)),l=a.n(o),s=a(12),m=a(1),u=a(2),p=a(4),d=a(3),h=(a(20),a(21),a(6)),f=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h7",{className:"title-container__title ",style:{color:"white"}},"KevJac"),n.a.createElement("p",{className:"title-container__subtitle",style:{color:"white"}},"KevJac provides you with latest Temperature ,Humidity & real time rain, storm &snow reports."),n.a.createElement("p",{style:{color:"white",marginTop:"80px"}},"Developed by ",n.a.createElement("h3",null,"Kevin Jacob")," ,Connect me via"),n.a.createElement(h.SocialIcon,{url:"http://github.com/kevinjacob2001",bgColor:"#9400D3",fgColor:"#ffffff"}),n.a.createElement(h.SocialIcon,{url:"http://instagram.com/kevinjacob2001",fgColor:"#ffffff"}),n.a.createElement(h.SocialIcon,{url:"https://www.linkedin.com/in/kevinjacob2001/",fgColor:"#ffffff"}))}}]),a}(r.Component),y=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("form",{onSubmit:this.props.getWeather},n.a.createElement("input",{type:"text",name:"city",placeholder:"City..."}),n.a.createElement("input",{type:"text",name:"country",placeholder:"Country..."}),n.a.createElement("button",{style:{marginRight:"30px"}},"Get weather!")))}}]),a}(r.Component);var v=function(e){return n.a.createElement("div",null,e.country&&e.city&&n.a.createElement("h6",{className:"weather__key"},"Location:",n.a.createElement("span",null,e.city,",",e.country)),e.temperature&&n.a.createElement("p",{className:"weather__key"},"Current temperature:",n.a.createElement("span",null," "," ",e.temperature,"\xb0C"," but feels like ",e.feels,"\xb0C")),e.description&&n.a.createElement("p",{className:"weather__key"},"Current weather:",n.a.createElement("span",null," ",e.description)),e.humidity&&n.a.createElement("p",{className:"weather__key"},"Humidity:",n.a.createElement("span",null," ",e.humidity,"%")),e.humidity&&n.a.createElement("p",{className:"weather__key"},"Wind Speed:",n.a.createElement("span",null," ",e.windSpeed,"km/hr")),e.error&&n.a.createElement("h2",{className:"weather__error"},e.error))},w="ba83f1e9b9127f1c19738fc56ba4aa3e",E=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={country:void 0,city:void 0,temperature:void 0,humidity:void 0,description:void 0,error:void 0,feels:void 0,windSpeed:void 0},e.getWeather=function(){var t=Object(s.a)(l.a.mark((function t(a){var r,n,i,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),r=a.target.elements.city.value,n=a.target.elements.country.value,t.next=5,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(r,",").concat(n,"&appid=").concat(w,"&units=metric"));case 5:return i=t.sent,t.next=8,i.json();case 8:c=t.sent,r&&n?(e.setState({city:c.name}),e.setState({country:c.sys.country}),e.setState({temperature:c.main.temp}),e.setState({feels:c.main.feels_like}),e.setState({humidity:c.main.humidity}),e.setState({description:c.weather[0].description}),e.setState({windSpeed:c.wind.speed}),e.setState({error:""})):(e.setState({city:void 0}),e.setState({country:void 0}),e.setState({temperature:void 0}),e.setState({feels:void 0}),e.setState({humidity:void 0}),e.setState({description:void 0}),e.setState({windSpeed:void 0}),e.setState({error:"Please fill up the input fields!"}));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:"main"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-6 title-container"},n.a.createElement(f,null)),n.a.createElement("div",{className:"col-6 form-container"},n.a.createElement(y,{getWeather:this.getWeather}),n.a.createElement(v,{country:this.state.country,city:this.state.city,temperature:this.state.temperature,feels:this.state.feels,humidity:this.state.humidity,description:this.state.description,windSpeed:this.state.windSpeed,error:this.state.error})))))))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.7699618b.chunk.js.map