(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(56)},30:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){e.exports=a.p+"static/media/icon-low.4c0f8edd.svg"},41:function(e,t,a){e.exports=a.p+"static/media/icon-high.2191c1b5.svg"},42:function(e,t,a){},45:function(e,t,a){e.exports=a.p+"static/media/icon-search.87a42f03.svg"},46:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){e.exports=a.p+"static/media/icon-heart.e22f6384.svg"},55:function(e,t,a){e.exports=a.p+"static/media/favicon.59368f90.ico"},56:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(15),l=a.n(c),i=a(7),o=a(8),s=a(11),u=a(9),m=a(12),d=a(5),h=a(59),f=a(58),p=a(16),E=a.n(p),y=a(17),b=a.n(y);var w=function(e){return Math.round(5/9*(e-32))};var v=function(e){e=Array.isArray(e)?e:[e];var t='text="'.concat(e.join('" or text="'),'"'),a="select woeid from geo.places(1) where ".concat(t),r="select * from weather.forecast where woeid in (".concat(a,") and u='c'");return"https://query.yahooapis.com/v1/public/yql?q=".concat(r,"&format=json")},_=function(e){return{city:e.location.city,region:e.location.region,country:e.location.country,forecastList:e.item.forecast.map(function(e){return e.high=Number(e.high),e.low=Number(e.low),e}),currentTemperature:Number(e.item.condition.temp),currentConditionText:e.item.condition.text,windSpeed:Math.round(e.wind.speed),windChill:w(e.wind.chill),humidity:Number(e.atmosphere.humidity)}},g={getForecast:function(e){return new Promise(function(t,a){fetch(v(e)).then(function(e){return e.json()}).then(function(e){if(!e||!e.query||!e.query.count)return t(null);var a=e.query.results.channel;return(Array.isArray(a)?a:[a]).map(_)}).then(t).catch(a)})},mountUrl:v},N=(a(30),a(32),function(e){return n.a.createElement("div",{className:"error-message"},e.message)}),C=(a(34),function(){return n.a.createElement("header",{className:"header"},n.a.createElement("h1",{className:"header__title"},"Weather forecast"))}),k=a(57),j=a(1),F=(Object(j.shape)({city:j.string.isRequired,region:j.string.isRequired,country:j.string.isRequired,forecastList:Object(j.arrayOf)(Object(j.shape)({day:j.string.isRequired,high:j.number.isRequired,low:j.number.isRequired,text:j.string.isRequired})).isRequired,currentTemperature:j.number.isRequired,currentConditionText:j.string.isRequired,windSpeed:j.number.isRequired,windChill:j.number.isRequired,humidity:j.number.isRequired}),a(4)),O=a.n(F),q={SUN:"Sunday",MON:"Monday",TUE:"Tuesday",WED:"Wednesday",THU:"Thursday",FRI:"Friday",SAT:"Saturday"};var R=function(e){return q[e.toUpperCase()]||null},S=(a(38),a(40)),x=a(41),T=function(e){var t=e.forecast;t=t||{};var a=Boolean(t.city),r=a?t.forecastList[0]:null,c=a?t.forecastList.slice(1,6):null;return n.a.createElement("section",{className:"weather-card"},n.a.createElement(F.SkeletonTheme,{color:"#F1D5B2",highlightColor:"#FDB46D"},n.a.createElement(k.a,{to:"?",className:"weather-card__close",title:"Close"},"x"),n.a.createElement("div",{className:"weather-card__body"},n.a.createElement("div",{className:"weather-card__city app__skeleton"},a?n.a.createElement("span",null,t.city,", ",t.region," - ",t.country):n.a.createElement(O.a,{width:250})),n.a.createElement("h2",{className:"weather-card__temperature"},a?"".concat(t.currentTemperature,"\xbaC"):n.a.createElement(O.a,null),"\xa0\xa0",n.a.createElement("span",{title:a?t.currentConditionText:""},a?t.currentConditionText:n.a.createElement(O.a,null))),n.a.createElement("table",{className:"weather-card__now"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",{className:"weather-card__now__first-column"},a?n.a.createElement("img",{src:S,width:"12",height:"12",alt:"Low"}):"",a?n.a.createElement("b",null,r.low,"\xba"):n.a.createElement(O.a,{width:45}),"\xa0\xa0\xa0",a?n.a.createElement("img",{src:x,width:"12",height:"12",alt:"High"}):"",a?n.a.createElement("b",null,r.high,"\xba"):n.a.createElement(O.a,{width:45})),n.a.createElement("td",null,a?n.a.createElement("span",null,"Wind chill ",n.a.createElement("b",null,t.windChill,"\xbaC")):n.a.createElement(O.a,{width:120}))),n.a.createElement("tr",null,n.a.createElement("td",null,a?n.a.createElement("span",null,"Wind ",n.a.createElement("b",null,t.windSpeed,"km/h")):n.a.createElement(O.a,{width:100})),n.a.createElement("td",null,a?n.a.createElement("span",null,"Humidity ",n.a.createElement("b",null,t.humidity,"%")):n.a.createElement(O.a,{width:120})))))),n.a.createElement("table",{className:"weather-card__footer"},n.a.createElement("tbody",null,n.a.createElement("tr",null,a?c.map(function(e,t){return n.a.createElement("td",{className:"weather-card__weekday",key:t,"data-order":t},n.a.createElement("div",null,R(e.day)),n.a.createElement("div",{className:"weather-card__weekdays__temp"},e.low,"\xba\xa0\xa0",e.high,"\xba"))}):n.a.createElement("td",null,n.a.createElement(O.a,{height:42})))))))},M=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={forecast:null,error:null},a.loadForecast=a.loadForecast.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.loadForecast()}},{key:"shouldComponentUpdate",value:function(e,t){var a=this.state.forecast&&e.city===this.state.forecast.city,r=t.forecast===this.state.forecast;return!a||!r}},{key:"componentDidUpdate",value:function(e,t){e.city!==this.props.city&&this.loadForecast()}},{key:"loadForecast",value:function(){var e=this;this.setState({forecast:null,error:null});var t=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e.setState({forecast:t,error:a})};g.getForecast(this.props.city).then(function(e){e?t(e[0]):t(null,"City not found")}).catch(function(e){return t(null,"Error: could not load weather card data.\n(".concat(e.toString(),")"))})}},{key:"render",value:function(){return this.state.error?n.a.createElement(N,{message:this.state.error}):n.a.createElement(T,{forecast:this.state.forecast})}}]),t}(n.a.Component),W=(a(42),function(){var e="";function t(t){e=t.target.value}return n.a.createElement(f.a,{render:function(r){var c=r.history;return n.a.createElement("section",{className:"search-bar"},n.a.createElement("form",{className:"search-bar__form",onSubmit:function(t){return function(t,a){t.preventDefault(),e.length&&a.push({search:"?city=".concat(e)})}(t,c)}},n.a.createElement("input",{className:"search-bar__input",type:"search",placeholder:"Search a city",pattern:".*\\S.*",title:"Must contain at least one non-empty character.",required:!0,autoFocus:!0,defaultValue:e,onChange:t}),n.a.createElement("button",{className:"search-bar__submit",type:"submit",title:"Search"},n.a.createElement("img",{src:a(45),width:"22",height:"22",alt:"Search"}))))}})});var A=function(e){return{firstChunk:(e=Array.isArray(e)?e:[]).slice(0,e.length/2),secondChunk:e.slice(e.length/2)}},D=(a(46),a(48),a(50),function(e){var t=e.city;return n.a.createElement(k.a,{className:"capital__link",to:"?city=".concat(t)},t)}),L=function(e){var t=e.forecast;return n.a.createElement("tr",null,n.a.createElement("td",{className:"capitals-column__temperature"},t.forecastList[0].low,"\xba"),n.a.createElement("td",{className:"capitals-column__temperature"},t.forecastList[0].high,"\xba"),n.a.createElement("td",null,n.a.createElement(D,{city:t.city})))},B=function(e){var t=e.order,a=e.forecasts;return n.a.createElement("div",{className:"capitals__column-wrapper","data-order":t},n.a.createElement("table",{className:"capitals__table",border:"0"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{className:"capitals-column__temperature"},"Min"),n.a.createElement("th",{className:"capitals-column__temperature"},"Max"),n.a.createElement("th",null))),n.a.createElement("tbody",null,a.map(function(e,t){return n.a.createElement(L,{key:t,forecast:e})}))))};B.defaultProps={order:1};var U=B,H=(a(52),function(){return n.a.createElement("div",{className:"author"},"Made with",n.a.createElement("img",{className:"author-heart",src:a(54),alt:"Heart",width:"16",height:"16"}),"by ",n.a.createElement("a",{className:"author-link",href:"https://blog.andersonmamede.com.br/"},"Anderson Mamede"))}),P=function(e){var t=e.forecasts,a=A(t),r=a.firstChunk,c=a.secondChunk;return n.a.createElement("footer",{className:"footer"},n.a.createElement("h3",{className:"footer__title"},"Capitals"),n.a.createElement("div",{className:"foooter__capitals"},n.a.createElement(U,{order:1,forecasts:r}),n.a.createElement(U,{order:2,forecasts:c})),n.a.createElement(H,null))},I=a(55),J=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={capitalsForecasts:null,capitalsError:null},a.loadCapitalsForecasts=a.loadCapitalsForecasts.bind(Object(d.a)(Object(d.a)(a))),a.handleRenderWeatherCardContainer=a.handleRenderWeatherCardContainer.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.loadCapitalsForecasts()}},{key:"loadCapitalsForecasts",value:function(){var e=this,t=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e.setState({capitalsForecasts:t,capitalsError:a})};g.getForecast(this.props.capitals).then(function(e){e?t(e):t(null,"Capitals forecasts not found")}).catch(function(e){return t(null,"Error: could not load capitals.\n(".concat(e.toString(),")"))})}},{key:"handleRenderWeatherCardContainer",value:function(){var e=E.a.parse(window.location.search).city;return e?(document.title="".concat(e," - Weather forecast"),window.scrollTo(0,0),n.a.createElement(M,{city:e})):null}},{key:"render",value:function(){return n.a.createElement(h.a,null,n.a.createElement("div",{className:"app"},n.a.createElement(b.a,{url:I}),n.a.createElement("div",{className:"app__wrapper"},n.a.createElement(C,null),n.a.createElement("div",{className:"app__main"},n.a.createElement(f.a,{path:"/",render:this.handleRenderWeatherCardContainer}),n.a.createElement(W,null)),this.state.capitalsError&&n.a.createElement(N,{message:this.state.capitalsError}),this.state.capitalsForecasts&&n.a.createElement(P,{forecasts:this.state.capitalsForecasts}))))}}]),t}(n.a.Component);l.a.render(n.a.createElement(J,{capitals:["Bras\xedlia","Amsterdam","London","Dublin","Berlin","Tokyo","Lisbon","Paris","Brussels","Madrid"]}),document.getElementById("root"))}},[[19,2,1]]]);
//# sourceMappingURL=main.f7edac5b.chunk.js.map