(this["webpackJsonpcolour-in-the-lines"]=this["webpackJsonpcolour-in-the-lines"]||[]).push([[0],{27:function(e,t,a){e.exports=a(56)},32:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(24),s=a.n(o),c=(a(32),a(2)),l=a(3),i=a(5),u=a(4),m=a(6),d=a(8),p=a.n(d);var h=function(e){var t=p()("AppTitle__heading",{"AppTitle__heading--expand":e.expand});return n.a.createElement("div",{className:"AppTitle"},n.a.createElement("h1",{className:t},"Colour in the Lines"))},f=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("header",{className:"HeaderComponent"},n.a.createElement("section",{className:"wrapper u-centerText"},n.a.createElement(h,{expand:this.props.formFocused})))}}]),t}(r.Component),b=a(9),g=a(13),y=a.n(g),v=a(25),E=a(11),C=a.n(E),k=a(7),F=a.n(k),j=function(e){return(299*parseInt(e.substr(0,2),16)+587*parseInt(e.substr(2,2),16)+114*parseInt(e.substr(4,2),16))/1e3>=128?"black":"white"},S=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).throwErrorMessage=function(e){a.setState({errorMessage:e}),a.props.formSubmitted(!0)},a.analyzeText=function(){return F()({method:"post",url:"https://colour-in-the-lines.cognitiveservices.azure.com/text/analytics/v2.1/keyPhrases",dataResponse:"json",headers:{"Ocp-Apim-Subscription-Key":"1d55c7079d974fd99d1dfea5696ef96b","Content-Type":"application/json"},data:{documents:[{language:"en",id:"1",text:a.state.stringToQuery}]}})},a.getColourPalettes=function(e){var t=e.data.documents[0].keyPhrases,r="",n=[];if(t.length)if(1===t.length)r=t[0],n=t;else{r=t[Math.floor(Math.random()*t.length)],n=t}else r=a.state.stringToQuery;F()({method:"get",url:"https://proxy.hackeryou.com",dataResponse:"json",paramsSerializer:function(e){return C.a.stringify(e,{arrayFormat:"brackets"})},params:{reqUrl:"http://www.colourlovers.com/api/palettes",params:{keywords:r,numResults:10,format:"json"}}}).then((function(e){e.data.length?(a.props.dataHandler(e.data,n),a.setState({errorMessage:""})):a.throwErrorMessage("Sorry, we couldn't find any matching palettes for your text. Try again!")})).catch((function(e){a.throwErrorMessage("Sorry, something went wrong: ".concat(e,"."))}))},a.handleFormSubmit=function(){var e=Object(v.a)(y.a.mark((function e(t){var r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a.props.formSubmitted(),!a.state.stringToQuery){e.next=9;break}return e.next=5,a.analyzeText();case 5:r=e.sent,a.getColourPalettes(r),e.next=10;break;case 9:a.throwErrorMessage("Please type something into the text field.");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleTextInput=function(e){a.setState({stringToQuery:e.target.value})},a.closeErrorMessage=function(){a.setState({errorMessage:""})},a.state={stringToQuery:"",errorMessage:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("section",{className:"FormComponent col-1-of-2--lg"},n.a.createElement("div",{className:"wrapper"},n.a.createElement("form",{className:"FormComponent__form",onSubmit:this.handleFormSubmit},n.a.createElement("label",{htmlFor:"textInput",className:"FormComponent__label"},"Write some text here!"),n.a.createElement("textarea",{rows:"3",className:"FormComponent__textarea",id:"textInput",value:this.props.stringToQuery,onChange:this.handleTextInput,onFocus:this.props.formFocusListener,onBlur:this.props.formFocusListener,style:this.props.textBackground?{background:"#".concat(this.props.textBackground),color:j(this.props.textBackground)}:null}),n.a.createElement("button",{type:"submit",className:"button FormComponent__button"},"Get Colours"),this.state.errorMessage?n.a.createElement("div",{className:"FormComponent__error-container"},n.a.createElement("button",{className:"FormComponent__error-button",onClick:this.closeErrorMessage},"X"),n.a.createElement("p",{className:"FormComponent__error"},this.state.errorMessage)):null)))}}]),t}(r.Component);var _=function(e){var t=p()("button","PalettesSelectionButton",{"PalettesSelectionButton--disabled":e.disabled});return n.a.createElement("button",{className:t,disabled:e.disabled,onClick:function(t){return e.selectionHandler(e.direction)}},e.direction)};var x=function(e){var t=e.descriptorWord,r=e.colour,o=e.clickHandler,s=e.isChosen,c=p()("ColourButton",{"ColourButton--selected":s}),l=a(53).from({maroon:"#800000",red:"#e6194B",pink:"#fabebe",brown:"#9A6324",orange:"#f58231",apricot:"#ffd8b1",olive:"#808000",yellow:"#ffe119",beige:"#fffac8",lime:"#bfef45",green:"#3cb44b",mint:"#aaffc3",teal:"#469990",cyan:"#42d4f4",navy:"#000075",blue:"#4363d8",purple:"#911eb4",lavender:"#e6beff",magenta:"#f032e6",white:"#ffffff",grey:"#a9a9a9",black:"#000000"})(r).name;return n.a.createElement("button",{className:c,onClick:function(e){return o(e,r)},style:{color:j(r),background:"#".concat(r)}},t?t+" "+l:l)},O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).changeColourChoice=function(e,t){a.props.colourButtonListener(t),a.setState({colourChoice:t})},a.state={colourChoice:a.props.paletteInfo.colors[0]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("ul",{className:"Palette"},Object(b.a)(this.props.paletteInfo.colors).map((function(t,a){return n.a.createElement("li",{className:"Palette__item",key:a},n.a.createElement(x,{isChosen:t===e.state.colourChoice,colour:t,clickHandler:e.changeColourChoice,descriptorWord:e.props.keyWordsArray[a]}))})))}}]),t}(r.Component),w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).changePalettes=function(e){var t={previous:a.state.currentIndex-1,next:a.state.currentIndex+1}[e];void 0!==a.props.palettesArray[t]&&a.setState({currentIndex:t})},a.state={currentIndex:0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.palettesArray,a=e.colourButtonListener,r=e.keyWordsArray,o=e.loadingState,s=this.state.currentIndex,c=t[this.state.currentIndex];return o?n.a.createElement("h2",{className:"PalettesSelection__preloader"},"LOADING"):n.a.createElement("section",{className:"PalettesSelection col-1-of-2--lg"},n.a.createElement("div",{className:"wrapper PalettesSelection__container"},n.a.createElement("div",{className:"PalettesSelection__button PalettesSelection__button--left"},n.a.createElement(_,{direction:"previous",selectionHandler:this.changePalettes,disabled:0===s})),n.a.createElement(O,{paletteInfo:c,colourButtonListener:a,keyWordsArray:r}),n.a.createElement("div",{className:"PalettesSelection__button PalettesSelection__button--right"},n.a.createElement(_,{direction:"next",selectionHandler:this.changePalettes,disabled:this.state.currentIndex===t.length-1}))))}}]),t}(r.Component),N=a(26),A=function(e){for(var t=Object(N.a)(e).slice(0),a=t.length;a;){var r=Math.floor(Math.random()*a--),n=[t[r],t[a]];t[a]=n[0],t[r]=n[1]}return t},P=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).setPalettes=function(e,t){var r=[];t.forEach((function(e){var t=e.split(" ").map((function(e){return F()({method:"get",url:"https://proxy.hackeryou.com",dataResponse:"json",paramsSerializer:function(e){return C.a.stringify(e,{arrayFormat:"brackets"})},params:{reqUrl:"".concat("https://words.bighugelabs.com/api/2/ec3c25411fa2b50905a24702a1dfd2d3/").concat(e,"/json")}})}));r.push.apply(r,Object(b.a)(t))})),F.a.all(r).then(F.a.spread((function(){for(var t=[],r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];n.forEach((function(e){var a=e.data;!function(){for(var e=arguments.length,a=new Array(e),r=0;r<e;r++)a[r]=arguments[r];a.forEach((function(e){void 0!==e&&t.push.apply(t,Object(b.a)(e.syn))}))}(a.noun,a.verb,a.adjective)})),t.length?a.setState({isLoading:!1,allPalettesArray:e,keyWordsArray:A(t)}):a.setState({isLoading:!1,allPalettesArray:e,keyWordsArray:[]})}))).catch((function(){a.setState({isLoading:!1,allPalettesArray:e,keyWordsArray:[]})}))},a.handleColourChoice=function(e){a.setState({colourSelection:e})},a.formHandler=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e?a.setState({didFormSubmit:!1,isLoading:!1}):a.setState({didFormSubmit:!0,isLoading:!0})},a.state={didFormSubmit:!1,isLoading:!0,allPalettesArray:[],colourSelection:null,keyWordsArray:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.didFormSubmit,a=e.allPalettesArray,r=e.keyWordsArray,o=e.colourSelection,s=e.isLoading;return n.a.createElement("main",{className:"flexGrid wrapper"},n.a.createElement(S,{dataHandler:this.setPalettes,formFocusListener:this.props.formFocusListener,textBackground:o,formSubmitted:this.formHandler}),t?n.a.createElement(w,{palettesArray:a,colourButtonListener:this.handleColourChoice,keyWordsArray:r,loadingState:s}):null)}}]),t}(r.Component);var I=function(){return n.a.createElement("footer",{className:"FooterComponent"},n.a.createElement("div",{className:"wrapper FooterComponent__container flexGrid"},n.a.createElement("div",{className:"col-1-of-2"},n.a.createElement("ul",{className:"FooterCredits__list"},n.a.createElement("li",{className:"FooterCredits__item"},n.a.createElement("p",null,"Colour Palettes from"," ",n.a.createElement("a",{href:"https://www.colourlovers.com/"},"COLOURLovers"))),n.a.createElement("li",{className:"FooterCredits__item"},n.a.createElement("p",null,"Text Analytics by"," ",n.a.createElement("a",{href:"https://azure.microsoft.com/en-ca/services/cognitive-services/text-analytics/"},"Microsoft Azure"))))),n.a.createElement("div",{className:"col-1-of-2"},n.a.createElement("p",{className:"FooterComponent__personalInfo"},"Created by ",n.a.createElement("a",{href:"http://russellbentulan.com"},"Russell Bentulan "),"2019"))))},L=(a(55),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).handleFormFocus=function(){e.setState({didFormFocus:!e.state.didFormFocus})},e.state={didFormFocus:!1},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(f,{formFocused:this.state.didFormFocus}),n.a.createElement(P,{formFocusListener:this.handleFormFocus}),n.a.createElement(I,null))}}]),t}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.6fab18cc.chunk.js.map