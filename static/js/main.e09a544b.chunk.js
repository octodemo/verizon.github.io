(this["webpackJsonpverizon-os-react"]=this["webpackJsonpverizon-os-react"]||[]).push([[0],{51:function(e,t,i){},73:function(e,t,i){},96:function(e,t,i){"use strict";i.r(t);var r=i(3),s=i(1),n=i.n(s),c=i(36),a=i.n(c),o=(i(73),i(22)),l=i(18),d=i(24),j=i(25),h=i(35),b=i(27),u=i(26),A=i.p+"static/media/vz_300_rgb_p.e5fffdf2.jpg",p=i(8),m=i(48),O=[{val:"home",name:"Home"},{val:"community",name:"Community"},{val:"projects",name:"Projects"},{val:"attributions",name:"Attributions"}],g=[{val:"/home",name:"Home"},{val:"/community",name:"Community"},{val:"/projects",name:"Projects"}],x=function(e){Object(b.a)(i,e);var t=Object(u.a)(i);function i(e){var r;return Object(d.a)(this,i),(r=t.call(this,e)).state={selectedValue:r.props.selectedValue,redirect:null},r.handleClick=r.handleClick.bind(Object(h.a)(r)),r.handleChange=r.handleChange.bind(Object(h.a)(r)),r}return Object(j.a)(i,[{key:"handleChange",value:function(e){"Attributions"!==e.target.value&&null!==e.target.value?this.setState({redirect:"/"+e.target.value.charAt(0).toLowerCase()+e.target.value.slice(1)}):"undefined"!==typeof window&&window.open("https://www.verizon.com/support/residential/internet/equipment/open-source-software","_blank")}},{key:"handleClick",value:function(e){this.setState({selectedValue:e})}},{key:"render",value:function(){var e=this;return this.state.redirect?Object(r.jsx)(l.a,{to:this.state.redirect}):Object(r.jsx)("header",{children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"inner-header",children:[Object(r.jsx)("div",{className:"logo",children:Object(r.jsx)(o.b,{to:"/home",onClick:function(t){return e.handleClick("Home")},children:Object(r.jsx)("img",{src:A,alt:"VzLogo"})})}),Object(r.jsx)("div",{className:"navigation",children:Object(r.jsxs)("nav",{children:[g.map((function(t,i){return Object(r.jsx)(o.b,{style:{textDecoration:"underline",textDecorationColor:"black"},to:t.val,onClick:function(i){return e.handleClick(t.name,i)},children:Object(r.jsxs)(p.d,{viewport:"mobile",size:"large",bold:!0,children:[t.name," "]})},i)})),Object(r.jsx)("a",{href:"https://www.verizon.com/support/residential/internet/equipment/open-source-software",style:{textDecoration:"underline",textDecorationColor:"black"},target:"_blank",rel:"noreferrer",children:Object(r.jsx)(p.d,{viewport:"mobile",size:"large",bold:!0,children:"Attributions"})})]})}),Object(r.jsx)("div",{className:"navMobile",children:Object(r.jsx)(m.a,{onChange:function(t){return e.handleChange(t)},value:this.state.selectedValue,children:O.map((function(e,t){return Object(r.jsx)("option",{children:e.name},t)}))})}),Object(r.jsx)("div",{className:"OsText",children:Object(r.jsx)(p.e,{primitive:"h4",viewport:"mobile",size:"large",children:"Open Source"})})]})})})}}]),i}(s.Component),w=function(){return Object(r.jsx)("footer",{children:Object(r.jsxs)("div",{className:"inner-footer",children:[Object(r.jsx)("div",{className:"navigation",children:Object(r.jsxs)("nav",{children:[Object(r.jsx)(o.b,{to:"/projects",style:{textDecoration:"underline",textDecorationColor:"white"},children:Object(r.jsx)(p.a,{size:"large",bold:!0,color:"#FFFFFF",children:"Projects"})}),Object(r.jsx)(o.b,{to:"/community",style:{textDecoration:"underline",textDecorationColor:"white"},children:Object(r.jsx)(p.a,{size:"large",bold:!0,color:"#FFFFFF",children:"Community"})}),Object(r.jsx)("a",{href:"https://github.com/Verizon",target:"_blank",rel:"noreferrer",style:{textDecoration:"underline",textDecorationColor:"white"},children:Object(r.jsx)(p.a,{size:"large",bold:!0,color:"#FFFFFF",children:"Github"})})]})}),Object(r.jsx)("div",{className:"logos",children:Object(r.jsx)(p.c,{viewport:"mobile",color:"#FFFFFF",children:"\xa9  2020 Verizon"})})]})})},v=function(){return Object(r.jsxs)("div",{className:"callToAction",children:[Object(r.jsx)("div",{className:"manageOsText",children:Object(r.jsx)(p.e,{size:"large",children:"How we manage open source"})}),Object(r.jsxs)("div",{className:"innerCallToAction",children:[Object(r.jsxs)("div",{className:"action1",children:[Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABFCAYAAAACRBuaAAAACXBIWXMAAC4jAAAuIwF4pT92AAAB70lEQVR4nO2c4W3CMBBG76oOkA2aDcoGZQRG6Agdod2gI7BBGQE2YIR0g2xw1dFDSoMDfKqdhPZ7kn8QBd/lYV8slFhF5FXIVbgso6rruLuFJOcCZQFQFsB94tRPEVnPNuPxeBaRh260VIHfmdnyD148hKpuReSp+x1OQwDKAqAsAMoCoCwAygKgLADKAqAsAMoCoCwAygKgLADKAqAsAMoCoCwAygKgLADKAqAsAMoCoCwAygKgLADKAqAsAMoCoCwAygKgLADKAqAsAMoCoCyA1AO4lar++2dK3UP/AN+wAOA0BKAsAMoC8AK/u5lsJ0bNWN+vhdMQgLIAKAsgtYKfjHgT6wdzekNtVgVeVU+SMTOdJptTOA0BKAuAsgAoC4CyACZbOqjqQkRqEVnEoXrgPN8JoImPvrRozWw/XqadXMZaOqjqSkSW0R4zdLkLeZvR5LmsUi1GjY+MNv6RLdV85L376Cx6PUU6/R4928KChprHXc5e1sSS+i27tGw1K2rSB/AV38ZlH63pFPEUdedmsOhve3KBNzPLs0dY5pHVnPml26hfLrX6ZZwq+rlUD9ucdSy3rFUi4Y0fzxlnIO4mEfsla5wCiR9r1rr03SkRu464h5qVu//s6yxVPSwuzexcDSpK5OBTPd/6S0S+APSuU9CfmXSyAAAAAElFTkSuQmCC",alt:"use"}),Object(r.jsx)("a",{href:"https://github.com/Verizon",target:"_blank",rel:"noreferrer",children:Object(r.jsx)(p.e,{viewport:"mobile",size:"large",children:"Use"})}),Object(r.jsx)(p.d,{size:"large",viewport:"mobile",primitive:"h2",children:"our code"})]}),Object(r.jsxs)("div",{className:"action2",children:[Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAAC4jAAAuIwF4pT92AAABcUlEQVR4nO3b0WnDMBRA0afSAbJJMkJHSjdoJ+hIzQjOJukEr7h1/xSqC0/xzz2QHxNkcUEJWFZERO78ecvM+O+zfm/vuT6FhhkLMBbw3PnqV0Qsk+53iIhj4XjXiLgVjvenO89erCUzXyZMIFpr67ifhUOeM/NSON6Pe/N0GQLGAowFGAswFmAswFiAsQBjAcYCjAUYCzAWYCzAWICxAGMBxgKMBRgLMBbQ2905bLsbM5yKxzy11h42z16sY/F21Uwfj7yZyxAwFmAsYP3Net95DqPb7+Xb9FTbXhTTAJchYCzAWICxAGMBxgKMBRgLaNvJhT1dRl6i3R4bzXp0NMzjKB5HqWcswFhA77HyesTjPOl+p+JHwa+Tjs5059mLdZtxxCN+/9Gqh1wmHUfpXncZAsYCjAUYCzAWYCzAWICxAGMBxgKMBRgLMBZgLMBYgLEAYwHGAowFGAvwhMWdcXsXPWEBuAwBYwHGAow1KiK+Abr04q9X6AgRAAAAAElFTkSuQmCC",alt:"contribute"}),Object(r.jsx)(o.b,{to:"/projects",children:Object(r.jsx)(p.e,{viewport:"mobile",size:"large",children:"Contribute"})}),Object(r.jsx)(p.d,{size:"large",viewport:"mobile",primitive:"h2",children:"to our projects"})]}),Object(r.jsxs)("div",{className:"action3",children:[Object(r.jsx)("img",{src:"data:image/png;base64,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",alt:"community"}),Object(r.jsx)(o.b,{to:"/community",children:Object(r.jsx)(p.e,{viewport:"mobile",size:"large",children:"Join"})}),Object(r.jsx)(p.d,{size:"large",viewport:"mobile",primitive:"h2",children:" us today"})]})]})]})},f=(i(51),i(46)),C=i(5),y=i.p+"static/media/open-source-1.27b80a84.jpg",F=i.p+"static/media/open-source-2.0bb1c5bd.jpg",k=i.p+"static/media/open-source-3.9ad1d0a8.jpg",S=i.p+"static/media/open-source-4.8526b51d.jpg",z=i(38),B=function(e){Object(b.a)(i,e);var t=Object(u.a)(i);function i(){return Object(d.a)(this,i),t.apply(this,arguments)}return Object(j.a)(i,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"slideData",children:[Object(r.jsx)("img",{src:y,alt:"os1"}),Object(r.jsxs)("div",{className:"slide",children:[Object(r.jsxs)("div",{className:"slideTitle",children:[Object(r.jsxs)(p.e,{size:"large",viewport:"mobile",color:"#FFFFFF",children:[" Welcome to Verizon Open Source. ",Object(r.jsx)("br",{})," "]}),Object(r.jsx)("br",{}),Object(r.jsx)(p.e,{size:"small",color:"#FFFFFF",children:" We welcome and encourage contributions. "}),Object(r.jsx)("br",{}),Object(r.jsx)(p.e,{size:"small",viewport:"mobile",color:"#FFFFFF",children:"Innovate. Collaborate. Learn. "})]}),Object(r.jsx)("div",{className:"slideButton",children:Object(r.jsxs)(o.b,{to:"/community",children:[" ",Object(r.jsx)(z.a,{viewport:"mobile",children:"Learn More"})]})})]})]})}}]),i}(s.Component),N=function(e){Object(b.a)(i,e);var t=Object(u.a)(i);function i(){return Object(d.a)(this,i),t.apply(this,arguments)}return Object(j.a)(i,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"slideData",children:[Object(r.jsx)("img",{src:F,alt:"os2"}),Object(r.jsxs)("div",{className:"slide",children:[Object(r.jsxs)("div",{className:"slideTitle",children:[Object(r.jsx)(p.e,{size:"large",viewport:"mobile",color:"#FFFFFF",children:"YANG Validator"}),Object(r.jsx)("br",{}),Object(r.jsx)(p.e,{size:"small",viewport:"mobile",bold:!0,color:"#FFFFFF",children:"A project to help equipment vendors validate against OpenConfig YANG."})]}),Object(r.jsx)("div",{className:"slideButton",children:Object(r.jsxs)("a",{href:"https://github.com/Verizon/YANG-validator",target:"_blank",rel:"noreferrer",children:[" ",Object(r.jsx)(z.a,{viewport:"mobile",children:"Project Info"})]})})]})]})}}]),i}(s.Component),M=function(e){Object(b.a)(i,e);var t=Object(u.a)(i);function i(){return Object(d.a)(this,i),t.apply(this,arguments)}return Object(j.a)(i,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"slideData",children:[Object(r.jsx)("img",{src:k,alt:"os3"}),Object(r.jsxs)("div",{className:"slide",children:[Object(r.jsxs)("div",{className:"slideTitle",children:[Object(r.jsx)(p.e,{size:"large",viewport:"mobile",color:"#FFFFFF",children:" Safecache "}),Object(r.jsx)("br",{}),Object(r.jsx)(p.e,{size:"small",viewport:"mobile",bold:!0,color:"#FFFFFF",children:"Thread-safe. Mutation-safe."})]}),Object(r.jsx)("div",{className:"slideButton",children:Object(r.jsxs)("a",{href:"https://github.com/Verizon/safecache",target:"_blank",rel:"noreferrer",children:[" ",Object(r.jsx)(z.a,{viewport:"mobile",children:"Project Info"})]})})]})]})}}]),i}(s.Component),Y=function(e){Object(b.a)(i,e);var t=Object(u.a)(i);function i(){return Object(d.a)(this,i),t.apply(this,arguments)}return Object(j.a)(i,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"slideData",children:[Object(r.jsx)("img",{src:S,alt:"os4"}),Object(r.jsxs)("div",{className:"slide",children:[Object(r.jsxs)("div",{className:"slideTitle",children:[Object(r.jsx)(p.e,{size:"large",viewport:"mobile",color:"#000000",children:"Redshell"}),Object(r.jsx)("br",{}),Object(r.jsx)(p.e,{size:"small",viewport:"mobile",bold:!0,color:"#000000",children:"Execute commands through proxychains. Automatically log them on a Cobalt Strike team server."})]}),Object(r.jsx)("div",{className:"slideButton",children:Object(r.jsx)("a",{href:"https://github.com/Verizon/redshell",target:"_blank",rel:"noreferrer",children:Object(r.jsx)(z.a,{viewport:"mobile",children:"Project Info"})})})]})]})}}]),i}(s.Component),V=i(67);function L(){var e=Object(f.a)(["\n    display: flex; \n    padding-top: 100px;\n    padding-left: 235px; \n "]);return L=function(){return e},e}var D=C.b.div(L()),E=function(e){Object(b.a)(i,e);var t=Object(u.a)(i);function i(){var e;Object(d.a)(this,i);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={selectedSlide:0,showHide1:!0,showHide2:!1,showHide3:!1,showHide4:!1,index:0},e.goToSlide=function(t){e.setState((function(){return{selectedSlide:t,index:t}})),e.hideComponent(t+1)},e}return Object(j.a)(i,[{key:"componentDidMount",value:function(){this.setState({index:0,selectedSlide:0})}},{key:"hideComponent",value:function(e){switch(e){case 1:this.setState({showHide1:!0}),this.setState({showHide2:!1}),this.setState({showHide3:!1}),this.setState({showHide4:!1});break;case 2:this.setState({showHide1:!1}),this.setState({showHide2:!0}),this.setState({showHide3:!1}),this.setState({showHide4:!1});break;case 3:this.setState({showHide1:!1}),this.setState({showHide2:!1}),this.setState({showHide3:!0}),this.setState({showHide4:!1});break;case 4:this.setState({showHide1:!1}),this.setState({showHide2:!1}),this.setState({showHide3:!1}),this.setState({showHide4:!0})}}},{key:"render",value:function(){var e=this.state,t=e.selectedSlide,i=e.showHide1,s=e.showHide2,n=e.showHide3,c=e.showHide4;return Object(r.jsxs)(D,{style:{display:"block",paddingBottom:"10px",border:"1px",paddingLeft:"0px",paddingTop:"0px"},children:[i&&Object(r.jsx)(B,{}),s&&Object(r.jsx)(N,{}),n&&Object(r.jsx)(M,{}),c&&Object(r.jsx)(Y,{}),Object(r.jsx)(V.a,{style:{position:"relative",left:"45%",width:"10%"},uniqueId:"carousel-bars-default-example-id",activeSlide:t,slideCount:4,goToSlide:this.goToSlide})]})}}]),i}(s.Component),T=function(){return Object(r.jsxs)("div",{className:"OspoFrontPage",children:[Object(r.jsx)(p.e,{size:"large",children:"Learn about open source"}),Object(r.jsxs)("div",{className:"innerOspo",children:[Object(r.jsx)("div",{className:"Video1",children:Object(r.jsx)("iframe",{src:"https://www.youtube.com/embed/KHyVJzYnRT8",frameBorder:"0",width:"100%",height:"100%",allow:"autoplay; encrypted-media",allowFullScreen:!0,title:"video"})}),Object(r.jsx)("div",{className:"Video1",children:Object(r.jsx)("iframe",{src:"https://www.youtube.com/embed/V3c5p2JopzQ",frameBorder:"0",width:"100%",height:"100%",allow:"autoplay; encrypted-media",allowFullScreen:!0,title:"video"})}),Object(r.jsx)("div",{className:"Video1",children:Object(r.jsx)("iframe",{src:"https://www.youtube.com/embed/Z4KzklUB6Jw",frameBorder:"0",width:"100%",height:"100%",allow:"autoplay; encrypted-media",allowFullScreen:!0,title:"video"})})]})]})},R=function(){return Object(r.jsxs)("div",{className:"featuredProjects",children:[Object(r.jsx)("div",{className:"ftProjectsTitle",children:Object(r.jsx)(o.b,{to:"/projects",children:Object(r.jsx)(p.e,{size:"large",children:"Featured projects"})})}),Object(r.jsxs)("div",{className:"innerFeaturedProjects",children:[Object(r.jsxs)("div",{className:"project1",children:[Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAA2CAYAAACY0PQ8AAAACXBIWXMAACxKAAAsSgF3enRNAAADGklEQVRoge2a4XWbMBDH7/ryPe4EYYN6g3iDeAQ6QdMJ6k5Qb1BnA2eDblA8QZ0N7AkuT/jswumEISAhML/39MFCIdKfO53uAIjI2QBgBQA0grZyrdG0TzAxiQCTCCfurJ5qdgDwXDkiDtYA8MWXCAci+mP1RgYiHprM6ObdASYRTjR1h0YgYgoAaQe32hDRxurtCK8iAEACAI9Wb3O87kM37w4wiXDCtztI3ox/W702Zh95sHo9EVqEPRGtrF4BIi5CinDz7gARi5CI341OgE3xLcJe/H5ExJk1qgBfl66QWQM7xLcI2uSXVs/169p9OsOrCESUcUQocm1jlCfMHREN2h1ACYkPiKgKgYhL5YS5tQZ2TAgRTG5/FH0/OK+4gIhzRbAj/71XvIvApqwVYn4jYt7PApj84F6MWft2BQgVIjkDfLEuAPxCxK1DgF0IK4DA54RnXpjkSRHAuEEawgogpAi8oIXDIooYARYcWYIQ9MRohCCitEIIYynzkAJAX8dmFuK76N6xBchTpnd6yx2IyGx6X/nnCxHNQ+0BktCpdAkTNRAxC23+kt6zyL4FgKmecOKaO8i8PnGd+yNDzrsa7X39uXE9YAzfJ2y19Z0b8mIt+Dz/17owXD67ok/VntDFm6OY0Io1OVWWsBdlrjelXBYzc5GTvBKRLoTmI3wD6VdLbWysjRM2uYaZNl+XO0hXOBKR9wpPx2jzVS3BJYIcrN0wajgHkal7PRE4KsiSd/RfpziQD+9JK/lrlqBFhcFZAqPN27IGTQQ56NUVX2PHUfK3RCgdmx2uoKlZC36x2hXZBx+Gmf+3wu/cJUr3EqFxXTesXGuOMNumpR3OI60KkfLJtXEFrczeBsuM6+BwifI6C4ol1xRroL52r9ZN+1815yMt/FC8XtwTNKXbRIWfVk9LEDH5YA1yI/aFe/PK73IALKiVCbUyTdWhNv7Gobi+TWlPMAor3wJ7+26wJ6RVXyz/7A6aK6T8lngsyGrTf5dwuMKttNwlkBX6N6In3gSTHc/MnjAmk29K7hJmTzC7ZufhbDAAHN4B57sk7k4xYRIAAAAASUVORK5CYII=",alt:"fp1"}),Object(r.jsx)(p.e,{viewport:"mobile",size:"large",children:"Caching"}),Object(r.jsx)("a",{href:"https://github.com/Verizon/safecache",target:"_blank",rel:"noreferrer",children:Object(r.jsx)(p.d,{viewport:"mobile",size:"large",children:"Safecache"})})]}),Object(r.jsxs)("div",{className:"project2",children:[Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAA/CAYAAACo/TU9AAAACXBIWXMAAC4jAAAuIwF4pT92AAAD0ElEQVR4nO1b/3UaMQyW8vJ/yQS9ThA6QdggZAOyAdmADUo2YAQ6QegEJRMkmaDJBOpTqqOHkX3nu8M2nL/37iXgH0gfliXZAokIXEDEJQCMnZ3OA1simrs0uWygJhN1MwCyanGRuHxJIZPlgUyWB5rsWRoeeENMQYGW4H34h+/QtmSx59gcQ4sQQMRWn5LN0AOZLA9ksjyQyfJA2w3+KEBETjemlbnXRLRMRb4kyELEEQCwd702mm4QcQYAEyJ6jyTeDqmY4VwhqsS1tEdHSmR1aQ+CVMj60rE9CLI39EAqZP3s2B4EQclCxAIRF+L9qlgAwIdl2Ie0V+cZyTzF0YWugo+VXY+4dP6n+kzqxmkPAKxkDg4DFtU+chJgfha/Hhv9FjKeX6xayjFRdNrUjgtFlkXAVwCYGf0K6VsY78+k/7FkSYqstTJPdQWpc4pimgzlsz5HsoqKGVoVL1eU9HcRTDJf0UKWtMnyWCnUsL2rDN5kBQ8d+ISViFjYOwB4s3SzXb1x/zseH+OkNlqcRUS81xRynt8ED9yfx8WSOWpQiogT40jGhan0j4YoZElwyivkyeO2m/s98bjgwaggdAQ/ktqJFwC4tXT7BQD38lcDj3vheZRM4LgI6Q0lHLB5uFdzXvFaWiBaPt5hw8l4QyJixR+Ntzn3u5fNe2P034gTuFdyx0eZLxwixFkjye3eJc8beYxbVMY2Gtfnygp+Bs9n6XKuvvVZGXIGzycNK0mug5/JR7mw6BIrCcFhzU+QT0o9kMnyQCbLA032LC1a5oAw+qVnB2jBbG1W4KxWlrTiJY4+UfDN5aHrzLBpknsucOpbR9ZsYGQ59bWa4QBNsITVFF0bvLYkn1Mp0ugJS6UgZSrvH8KRP22V/GneNh9L8ZEv3tRxa5NVNUOHCTq9xanBV0/bBq+a4DkRBf/zzGelSfWKNrI0r7DqJlqy0PRSveKBGQ7FBEv46KutrEGYYAkfU9TI0pbgyf70pCE0/Q542DNDuS35owz8TkSdftgkd35HufcjokWDblYgIpc7/Vbar/ZOZI3YaqbduvQRI1nitr6ecQ/yabdIe+VQphlq+1Xn63JZVbbS7T7QR8Kv6bk/r3F7on3TfXxrdaVGXR9r1O0h49giw+4W6dLK4j+8dd2rBIXjhjkJsJ6IyFU6Xw15prtYrMKsVji2PKdcsMHqWmoFdnt7lnhBrfbg3EMGE9q+dVvWVJQbvGaCHzFroWJAyge0EvNPfi6rL0wg4tBWlg2f+xaKF9QC0Yx9XF0M8FKiLaaZrOaYorjHjDoAwF934Q4CA+WrTgAAAABJRU5ErkJggg==",alt:"fp2"}),Object(r.jsx)(p.e,{viewport:"mobile",size:"large",children:"YANG"}),Object(r.jsx)("a",{href:"https://github.com/Verizon/YANG-validator",target:"_blank",rel:"noreferrer",children:Object(r.jsx)(p.d,{viewport:"mobile",size:"large",children:"Validator"})}),Object(r.jsx)("a",{href:"https://github.com/Verizon/YANG-transformer",target:"_blank",rel:"noreferrer",children:Object(r.jsx)(p.d,{viewport:"mobile",size:"large",children:"Transformer"})})]}),Object(r.jsxs)("div",{className:"project3",children:[Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAA9CAYAAAAH6Y9PAAAACXBIWXMAAC4jAAAuIwF4pT92AAADZ0lEQVR42u2a3ZWbMBCF73D8bjpYd2A6WKeCJRWYVBBKcAfrDpZ04HSgrSBsBSEVxK5g8jLsIVoJCxCsDZpz9CJ+LD7PjK5GImaGzYhoAyDDMqxi5uLqXcxsbQB2AHghTbWxqFuEYJ0sAAvAxrVVj2e+MLO69w8nIgXgMXhYCMkALACbIN/ERBQHYI6wACgA6hag3YOHHQFspRUBWLt3FQD2ja4n6QvAHGDVtieifJHAiOhIREkHWLU9E1G2GGAy6xUAvksyTxrX8iuwansxwZ4dsMasV0NZAygEYgbg2fDYmzTd1NTQVhPDSgCcADxol7YASkN/DWsHIJZ71o1rawAnIkqY+TwrDxNYygIFbbCY+czMlYC7GJ6bTKNFE8HKAPzSvOOavcOqO5i5hLlkPplGiyaAdQDwYrn8aum/AEhNYcbMJwDfDM9Mo9F61PR3LrVveb6AuX5+FiCQnKZfSxzefbS8O3Mcm0KPmv4owCRBqxZYiXZv2QWWwx+S3Q0wAJsGAL2VADYWwGUXWAbYnbz0JoABSGSwxm0sAHEXIGNC6wts5TG5pxIia0sSVwByIur7E5U0kxUGwVsL4p1XjebDw2Sqv9UN2tLk2X09LPLgWUWLbLgF28qM+rk6rLGA3uP2be9Low3xMHUnsJrQBpeEVgNyX4I7MzmNNN8S9QirmioAW1KJOgBbgPVJ+kciqpXzYwDmJgRDSFpsE4KwG7B0QSycnINsx85lU+Gv1v0mFdI5WALgSev7KiXw7tUKSwUi813P+qwmHqV/32lItcIUjnPxrlr165swT9e266KWcNTd9edUm6UTmqmCkfVJ+rP2roaXFfi4MZwHYO2mf9dD23mNaMHh+L5yMfTlXTwsdYz1uYRlCeCPq/6MHJLe5ao2mZ+XrW3V2f+Eq1Qkf2v3/GDmzMeoJDf4PmVTDk0XFpH+ysy7VuEqsauLuXREoeijFZ7GdzK8e9O6842PO8hnj8q6wHh7jxsP40sN7z1YgVk8wNe/t8O4m7UHT+OstPdWbUujMbXXYeSknXs6gWjSZKkx6RNRqRUHL8wce0r2hwlmumLorpDTpDd2ON5hFUMZWMR6SC5pKTRsQW6ZHUPTTgA1PHA0fTS3ltQhmSKYi2UAQBKO28Djql2YOV5Jcj8FHm6y4x91CyOrh8XJXAAAAABJRU5ErkJggg==",alt:"fp3"}),Object(r.jsx)(p.e,{viewport:"mobile",size:"large",children:"Proxy"}),Object(r.jsx)("a",{href:"https://github.com/Verizon/redshell",target:"_blank",rel:"noreferrer",children:Object(r.jsx)(p.d,{viewport:"mobile",size:"large",children:"Redshell"})})]})]})]})},I=function(e){Object(b.a)(i,e);var t=Object(u.a)(i);function i(){return Object(d.a)(this,i),t.apply(this,arguments)}return Object(j.a)(i,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"scrollContainer",children:[Object(r.jsx)(x,{selectedValue:"Home"}),Object(r.jsx)(E,{}),Object(r.jsx)(T,{}),Object(r.jsx)(R,{}),Object(r.jsx)(v,{}),Object(r.jsx)(w,{})]})}}]),i}(s.Component),P=i(56),Q=i.n(P),K=i(66),W=i(17),H=i(42);function U(){var e=Object(f.a)(["\n  margin-bottom: ",";\n"]);return U=function(){return e},e}var G=C.b.div(U(),"undefined"!==typeof window&&W.c.medium),J=function(e){Object(b.a)(i,e);var t=Object(u.a)(i);function i(){var e;return Object(d.a)(this,i),(e=t.call(this))._isMounted=!1,e.state={alphabetize:!1,alphabetizeLabel:"(a - z)",sort:!1,sortLabel:"(asc)",value:"",showProjects:[],returnedProjects:[],redirect:null},e.handleChange=e.handleChange.bind(Object(h.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(h.a)(e)),e}return Object(j.a)(i,[{key:"componentDidMount",value:function(){var e=Object(K.a)(Q.a.mark((function e(){var t,i,r,s;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._isMounted=!0,e.next=3,fetch("https://api.github.com/orgs/Verizon/repos?page=1&per_page=100",{method:"GET"});case 3:return t=e.sent,e.next=6,t.headers;case 6:return i=e.sent,r=Number(i.get("x-ratelimit-remaining")),console.log(r),r<2&&this._isMounted&&(this.setState({redirect:"/home"}),"undefined"!==typeof window&&window.open("https://github.com/Verizon","_blank")),e.next=12,t.json();case 12:s=e.sent,this._isMounted&&this.setState({showProjects:s,returnedProjects:s});case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"handleChange",value:function(e){this.setState({value:e.target.value}),this.handleSubmit(e)}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.returnedProjects.filter((function(t){return t.language===e.target.value}));this.setState({showProjects:t})}},{key:"showAll",value:function(){this.setState({showProjects:this.state.returnedProjects})}},{key:"alphabetize",value:function(){this.state.alphabetize||(this.alphabetizeAToZ(),this.setState({alphabetize:!this.state.alphabetize,alphabetizeLabel:"(z - a)"})),this.state.alphabetize&&(this.alphabetizeZtoA(),this.setState({alphabetize:!this.state.alphabetize,alphabetizeLabel:"(a - z)"}))}},{key:"alphabetizeAToZ",value:function(){var e=this.state.showProjects.sort((function(e,t){var i=e.name.toUpperCase(),r=t.name.toUpperCase();return i<r?-1:i>r?1:0}));this.setState({showProjects:e})}},{key:"alphabetizeZtoA",value:function(){var e=this.state.showProjects.sort((function(e,t){var i=e.name.toUpperCase(),r=t.name.toUpperCase();return i>r?-1:i<r?1:0}));this.setState({showProjects:e})}},{key:"sortByDate",value:function(){this.state.sort?(this.sortByDateDescending(),this.setState({sort:!this.state.sort,sortLabel:"(asc)"})):(this.sortByDateAscending(),this.setState({sort:!this.state.sort,sortLabel:"(desc)"}))}},{key:"sortByDateAscending",value:function(){var e=this.state.showProjects.sort((function(e,t){var i=e.created_at,r=t.created_at;return i<r?-1:i>r?1:0}));this.setState({showProjects:e})}},{key:"sortByDateDescending",value:function(){var e=this.state.showProjects.sort((function(e,t){var i=e.created_at,r=t.created_at;return i>r?-1:i<r?1:0}));this.setState({showProjects:e})}},{key:"render",value:function(){var e=this;if(this.state.redirect)return Object(r.jsx)(l.a,{to:this.state.redirect});var t=this.state,i=t.showProjects,n=t.returnedProjects,c=t.alphabetizeLabel,a=t.sortLabel,o="Alphabetize ".concat(c),d="Creation Date ".concat(a),j=n.map((function(e){return e.language})).reduce((function(e,t){return e.includes(t)||e.push(t),e}),[]),h=i.filter((function(e){return!1===e.archived})).map((function(e){var t=e.description?e.description.split(" ").slice(0,10).filter((function(e){return e.length<70})).join(" ").replace(/\s(?=[^\s]*$)/g,"\xa0"):"",i="".concat(e.language).toLowerCase();return Object(r.jsxs)("article",{children:[Object(r.jsxs)("div",{className:"project-card-text",children:[Object(r.jsx)("div",{className:"project-card-title",children:Object(r.jsx)(p.e,{size:"small",children:e.name})}),Object(r.jsx)("div",{className:"project-card-body",children:Object(r.jsx)(p.a,{children:t})})]}),Object(r.jsx)("div",{className:"project-card-button",children:Object(r.jsx)("a",{href:e.html_url,target:"_blank",rel:"noreferrer",children:Object(r.jsx)(z.a,{size:"small",children:"Visit"})})}),Object(r.jsx)("div",{className:"project-card-tag",children:Object(r.jsx)("a",{target:"_self",value:i,href:i,rel:"noreferrer",onClick:function(e){return console.log("value",e.target.value)},children:Object(r.jsx)(p.c,{viewport:"desktop",primitive:"h2",children:i})})})]},e.id)}));return Object(r.jsxs)("div",{className:"projectLayout",children:[Object(r.jsx)("div",{className:"projectLayoutHeading",children:Object(r.jsx)(p.e,{size:"large",children:"Verizon Open Source Projects"})}),Object(r.jsxs)("div",{className:"projectMenuButtons",children:[Object(r.jsxs)(H.b,{children:[Object(r.jsx)(H.a,{label:"Show All",onClick:function(){return e.showAll()}}),Object(r.jsx)(H.a,{label:o,onClick:function(){return e.alphabetize()}}),Object(r.jsx)(H.a,{label:d,onClick:function(){return e.sortByDate()}})]}),Object(r.jsx)(s.Fragment,{children:Object(r.jsx)(G,{children:Object(r.jsx)(m.a,{label:"Language",width:"200px",inlineLabel:!0,value:this.state.value,onChange:function(t){return e.handleChange(t)},children:j.map((function(e,t){return Object(r.jsx)("option",{value:e,children:e},t)}))})})})]}),Object(r.jsx)("div",{className:"project-grid",children:h})]})}}]),i}(s.Component),q=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(x,{selectedValue:"Projects"}),Object(r.jsx)(J,{}),Object(r.jsx)(w,{})]})},X=function(){return Object(r.jsxs)("div",{className:"notFound",children:[Object(r.jsx)(p.e,{size:"XLarge",children:"404"}),Object(r.jsx)("br",{}),Object(r.jsx)(p.d,{children:"Uh oh! I think you've reached a bad URL!"})]})},Z=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(x,{selectedValue:"Community"}),Object(r.jsxs)("div",{className:"ospage",children:[Object(r.jsxs)("div",{className:"ospoTitle",children:[Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABHCAYAAABPjLqRAAAACXBIWXMAAC4jAAAuIwF4pT92AAAD+UlEQVR4nO1b7XHaQBDdzeR/6AA6gA6MK4hTgekg6cC4gjgVBHdAKrCoIHIFIRUEV7CZyyyO9Dh9LJwYJO+buRnD3UnH8+7bvT2JRYT2YOYZET3Q5SIXkS8V682JaEdEmY7bJf8Vgax9I6J5+OqCW2ZYb65ETopzTmnvLtiKTsWUiD4T0S9mzph5fuoFh0xWEVdE9KSkzY69yPtOlnY+bInoXu820XZVc/fQ95OZ70VkaV0lCnww1ScY80xEr6J6RgQL+Aq324hIozsx8w0R7duHimGb0G8KBC0EM0slkJaWYi1ENCKipUbJqiDQOgAMWrOC1ai7Bff8FhkSgkDOzJM21+s1WUE2mFm0BfFeMfOCmUfFcUpakJJPRPQClwluusY5MQzJsoJ43xLRdyL6o8SVLEZE1ureSFiwsHXTDYbshreaYz0UrUZEcnVLJOyKmWsj5FvIs0JiWsqvNALGLOyuTr/6TlawkmttId/6UTFuGiEszF1Exq4q75YiddDNa7E9QP8iMmbRcM1j1zLRHxxLFXaYKqhW4bh59NqJFlg7R3MdHLPsgiyYv43lVpFcDPOw9eDyrCDcmj4c7PdEJNNdwDN0TYtCrvqFZamPMe3qu2bNdHsW9nvbQAJEvrZCHqvh3eAXQ4qG40CCZuQY+Q5+uEpDccwj9B/MSVV1uIbPuDldqagXsU10b8RYI99cI94/l2TmR8299kAyMug/rF70eSOtblhVKQ3/jBFESRxzA0JfGxV77YbBckSE1bJRyMfFPEpEtpEx80J/8Ibf0F8S+UFolka+eYQMrMPh/g+jKErD8Mii/5aBe7sxVBNy6MdKA+pqCYPaG2pVAVG0Hgw804ZLlshMEg1DLQm+wvO9RWQfthKR6n3Y8cDInMPf2F9aE1hXidxUqUPdIQFVHCTUmvyxUP2KQl21rn9bl9K8laOwJHCyDOjbueGkqZqZGFnJrXuWwZ+7lcpI7oYGOFkGOFkG9E3gu3zuIvZsRQl9I2tXl3SeAmZunJ3EDQtH6K9H6dC/jIw5ZwqQBK5ZBjhZBvSeLHiSpm07SvdSCfwGPmORbRsZ09WBRWdIQlbTo4tat+qidnVWuGYZ4GQZ0PdHu/eV0eaMMgHcsgxIdWCBAr/bH51r/wTP4EI01Jp3b5DKDfFFg03xtFdPdu5gzH3knO+i4UmpAa5ZBjhZBvh2xwDf7hjgSakBrlkGOFkGOFkGJNWslocQWcoTmopXlZvQ6vVhRGqBxy1NFTo5zuoa7oYGOFkGOFkGeFJqgFuWAU6WAU6WAU6WAQwJ4ijyisZLpD5VhaaXB0jfvGpTyzp1LVbE7ldaK+vTv44WcDc0wMkywMlqCyL6C3ousv3Oyt4iAAAAAElFTkSuQmCC",alt:"ospo1"}),Object(r.jsx)(p.e,{size:"large",viewport:"mobile",children:"How We Manage Open Source"})]}),Object(r.jsx)("div",{className:"ospoSubtitle",children:Object(r.jsx)(p.e,{size:"large",viewport:"mobile",children:"About the Verizon Media Open Source Program Office"})}),Object(r.jsxs)("div",{className:"ospoBody",children:[Object(r.jsxs)(p.d,{size:"large",viewport:"mobile",children:["An open source program office (OSPO) helps developers at your company successfully use, contribute, and publish open source projects. Typically OSPOs perform governance, management, support, and strategy consulting functions to support your company\u2019s open source goals. Every company is different and their OSPOs differ too. We\u2019ve been active participants of the TODO Group and have benefited greatly from (and contributed back to) the shared body of work about OSPOs. You can read more about their work ",Object(r.jsx)("a",{href:"https://www.linuxfoundation.org/resources/open-source-guides/",children:"if you click here"}),". "]}),Object(r.jsx)("br",{}),Object(r.jsx)(p.d,{size:"large",viewport:"mobile",children:" Our OSPO focuses on in the following areas:"}),Object(r.jsxs)("ul",{children:[Object(r.jsxs)("li",{children:[Object(r.jsx)(p.e,{bold:!0,size:"medium",viewport:"mobile",children:"Publication Review and Support"}),Object(r.jsx)(p.d,{size:"large",viewport:"mobile",children:"We review projects and stage them for open source publication on a branded and managed GitHub organization."})]}),Object(r.jsxs)("li",{children:[Object(r.jsx)(p.e,{bold:!0,size:"medium",viewport:"mobile",children:"License Compliance"}),Object(r.jsx)(p.d,{size:"large",viewport:"mobile",children:"We run a scan process during the build process on our mobile apps and other products to help us prepare open source display credits and ensure that our apps contain exactly what we want them to contain, and nothing else."})]}),Object(r.jsxs)("li",{children:[Object(r.jsx)(p.e,{bold:!0,size:"medium",viewport:"mobile",children:"Contribution Support"}),Object(r.jsx)(p.d,{size:"large",viewport:"mobile",children:"We support contributions to open source projects, specifically in cases where they require a contributor license agreement to be signed or where other factors require our involvement."})]}),Object(r.jsxs)("li",{children:[Object(r.jsx)(p.e,{bold:!0,size:"medium",viewport:"mobile",children:"Strategy review"}),Object(r.jsx)(p.d,{size:"large",viewport:"mobile",children:"We work with our technology leadership to ensure we use, contribute to, and create open source projects in a manner that will help reduce tech-debt, improve business outcomes, and support our goals to achieve engineering excellence."})]})]}),Object(r.jsx)(p.d,{size:"large",viewport:"mobile",children:"By running an OSPO, we help our engineers focus on their engineering challenges, their sprints, and their products, while knowing that we have their back when it comes to questions about open source licenses, copyrights, and communities. This way fosters an open and collaborative working environment, just like you find in successful open source communities. We thrive on transparency and operate the program as an open source project encouraging collaboration and publishing all our work in the open. At Verizon Media, nearly all our platforms are built upon open source projects. We strive to be an open source friendly company for engineers as we believe that together we can create the future, in the open."}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)(p.d,{size:"large",viewport:"mobile",children:["We know that engineers love working at companies that support open source. We love working with engineers who embody open source principles in their work. Check out this site to see what we have published, how you can work with us, and maybe even work at Verizon Media. ",Object(r.jsx)("a",{href:"https://www.verizonmedia.com/careers/",children:"We\u2019re hiring."})]}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)(p.d,{size:"large",viewport:"mobile",children:Object(r.jsx)("a",{href:"https://verizonmedia.github.io/oss-guide/",children:"Verizon Media Open Source Developer Guide"})})]})]}),Object(r.jsx)(w,{})]})};var _=function(){return Object(r.jsx)("div",{className:"scrollContainer",children:Object(r.jsx)(o.a,{children:Object(r.jsxs)("div",{children:[Object(r.jsx)(x,{}),Object(r.jsxs)(l.d,{children:[Object(r.jsx)(l.b,{exact:!0,path:"/",component:I}),Object(r.jsx)(l.b,{path:"/home",component:I}),Object(r.jsx)(l.b,{path:"/community",component:Z}),Object(r.jsx)(l.b,{path:"/projects",component:q}),Object(r.jsx)(l.b,{component:X})]}),Object(r.jsx)(w,{})]})})})},$=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,97)).then((function(t){var i=t.getCLS,r=t.getFID,s=t.getFCP,n=t.getLCP,c=t.getTTFB;i(e),r(e),s(e),n(e),c(e)}))};a.a.render(Object(r.jsx)(n.a.Fragment,{children:Object(r.jsx)(_,{})}),document.getElementById("root")),$()}},[[96,1,2]]]);
//# sourceMappingURL=main.e09a544b.chunk.js.map