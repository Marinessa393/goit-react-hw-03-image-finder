(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{27:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),i=(n(27),n(11)),s=n(5),l=n(6),u=n(8),h=n(7),m=n(21),d=n.n(m);function g(e,t){return d.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat("19822472-14ec0e3f9ba277805ee5b06f8","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))}var j=n(9),b=(n(20),n(1)),f=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){if(t.preventDefault(),""===e.state.query.trim())return j.b.error("Enter word");e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsx)("header",{className:"Searchbar",children:Object(b.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(b.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(b.jsx)("span",{className:"SearchForm-button"})}),Object(b.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.query,onChange:this.handleChange})]})})}}]),n}(a.Component);function p(e){var t=e.children;return Object(b.jsx)("ul",{className:"ImageGallery",children:t})}function y(e){var t=e.images,n=e.onClick;return t.map((function(e){var t=e.id,a=e.webformatURL;return Object(b.jsx)("li",{className:"ImageGalleryItem",onClick:function(){return n(t)},children:Object(b.jsx)("img",{className:"ImageGalleryItem-image",src:a,alt:""})},t)}))}function O(e){var t=e.onClick;return Object(b.jsx)("button",{type:"button",onClick:t,className:"Button",children:"Load more..."})}n(47);var v=n(22),x=n.n(v);function w(){return Object(b.jsx)("div",{className:"Loader",children:Object(b.jsx)(x.a,{type:"Hearts",color:"#e91184",height:160,width:160,timeout:3e3})})}var S=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(b.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(b.jsx)("div",{className:"Modal",children:Object(b.jsx)("img",{src:this.props.src,alt:""})})}),document.querySelector("#modal-root"))}}]),n}(a.Component),k=(n(68),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],searchQuery:"",largeImage:"",currentPage:1,isLoading:!1,showModal:!1,error:null},e.onSearchImages=function(t){e.setState({images:[],searchQuery:t,currentPage:1})},e.onFetchImages=function(){e.setState({isLoading:!0}),g(e.state.searchQuery,e.state.currentPage).then((function(t){if(0===t.length)return e.setState({error:"Oops, I can`t find any images..."});e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(t)),currentPage:e.currentPage+1,error:null}})),e.scrolling()})).catch((function(t){return e.setState({error:"Try Again"})})).finally((function(){return e.setState({isLoading:!1})}))},e.scrolling=function(){setTimeout((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),400)},e.openImage=function(t){var n=e.state.images.find((function(e){return e.id===t}));e.setState({largeImage:n.largeImageURL}),e.toggleModal()},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.onFetchImages()}},{key:"render",value:function(){var e=this.onSearchImages,t=this.openImage,n=this.onFetchImages,a=this.toggleModal,r=this.state,o=r.isLoading,c=r.showModal,i=r.largeImage,s=r.images,l=r.error,u=s.length>0&&!o;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f,{onSubmit:e}),Object(b.jsx)(p,{children:Object(b.jsx)(y,{images:s,onClick:t})}),u&&Object(b.jsx)(O,{onClick:n}),o&&Object(b.jsx)(w,{}),c&&Object(b.jsx)(S,{onClose:a,src:i}),l&&Object(b.jsx)("p",{className:"Error",children:l}),Object(b.jsx)(j.a,{autoClose:2e3})]})}}]),n}(a.Component));c.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.68d65bf2.chunk.js.map