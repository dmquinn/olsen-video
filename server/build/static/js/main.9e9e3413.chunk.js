(this.webpackJsonpspotify=this.webpackJsonpspotify||[]).push([[0],{121:function(e,t,a){},135:function(e,t,a){},138:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(12),n=a.n(s),i=(a(35),a(17)),r=a(20),l=a(51),o="ADD_PLAYLIST_ITEM_REQUEST",u="ADD_PLAYLIST_ITEM_SUCCESS",d="ADD_PLAYLIST_ITEM_FAIL",b="LIST_PLAYLIST_ITEMS_REQUEST",p="LIST_PLAYLIST_ITEMS_SUCCESS",j="LIST_PLAYLIST_ITEMS_FAIL",m=Object(i.combineReducers)({playlistItem:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return{loading:!0};case u:return{loading:!1,playlistItem:t.payload};case d:return{loading:!1,error:t.payload};default:return e}},listPlaylists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{playlist:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return{loading:!0};case p:return{loading:!1,playlist:t.payload};case j:return{loading:!1,error:t.payload};default:return e}}}),h=(localStorage.getItem("playlist")&&JSON.parse(localStorage.getItem("playlist")),[r.a]),f=Object(i.createStore)(m,Object(l.composeWithDevTools)(i.applyMiddleware.apply(void 0,h))),O=a(2);function y(){return Object(O.jsx)("div",{className:"d-flex justify-content-center align-items-center",style:{minHeight:"100vh"},children:Object(O.jsx)("a",{href:"https://accounts.spotify.com/authorize?client_id=d9eef23f8ad74b80b1e7535609cfc4cf&response_type=code&redirect_uri=https://olsenvideo.herokuapp.com//&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state",className:"button",children:Object(O.jsx)("h4",{children:"LET'S START!"})})})}var v=a(7),g=a(9),S=a.n(g),T=a(31);var x=a(143),I=a(31),_=a.n(I);function k(e){var t=e.track,a=e.showPlayer,c=e.setPlaylistVideo;return Object(O.jsxs)("div",{className:"d-flex m-2 align-items-center",style:{cursor:"pointer"},onClick:function(){c(null);var e=t.artist+" "+t.title;a(e)},search:"",children:[Object(O.jsx)("img",{src:t.albumUrl,style:{height:"84px",width:"84px"},alt:""}),Object(O.jsxs)("div",{className:"ml-3",children:[Object(O.jsx)("div",{children:t.title}),Object(O.jsx)("div",{className:"text-muted",children:t.artist})]})]})}var w=a(10),E=a(18),N=a.n(E),P=a(33);a(121);var C=function(e){var t=e.selectedTrack,a=e.playlistVideo,s=e.userId,n=e.setTempPlaylist,i=(e.tempPlaylist,Object(w.b)()),r="AIzaSyDUppjf_r8veyOTZQ9PCFwlburDc9693-c",l=Object(c.useState)(""),b=Object(v.a)(l,2),p=b[0],j=b[1],m=Object(c.useState)(""),h=Object(v.a)(m,2),f=(h[0],h[1]);Object(w.c)((function(e){return e.playlist}));var y="https://www.youtube.com/embed/".concat(p),g=y.substring(y.length-11),T=[];return Object(c.useEffect)((function(){S.a.get("https://www.googleapis.com/youtube/v3/search/?key=".concat(r,"&part=snippet&q=youtu.be/").concat(t)).then((function(e){j(e.data.items[0].id.videoId)})).catch((function(e){f(!0),console.log(e.response)})),console.log("userId from vp",s)}),[t,r,p,a]),Object(O.jsxs)("div",{className:"player",children:[Object(O.jsxs)("p",{className:"",children:["Add to playlist"," ",Object(O.jsx)("i",{className:"ml-3 fas fa-plus",onClick:function(){var e={title:t,thumb:y};T.push(e),n(T),i(function(e,t,a){return function(){var c=Object(P.a)(N.a.mark((function c(s){var n,i;return N.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,s({type:o}),c.next=4,S.a.post("https://olsenvideo.herokuapp.com//playlist/",{videoSrc:e,selectedTrack:t,userId:a});case 4:n=c.sent,i=n.data,s({type:u,payload:i}),localStorage.setItem("playlistitems",JSON.stringify(i)),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(0),s({type:d,payload:c.t0.response&&c.t0.response.data.message?c.t0.response.data.message:c.t0.message});case 13:case"end":return c.stop()}}),c,null,[[0,10]])})));return function(e){return c.apply(this,arguments)}}()}(g,t,s))}})]}),Object(O.jsx)("iframe",{src:y+"?rel=0&amp;controls=1&amp&amp;showinfo=0&amp;modestbranding=1&controls=0&autoplay=1&modestbranding=1",allowFullScreen:!0,allowautoplay:"1",title:"Video player",className:"iframe"})]})},A=a(56),L=a(142),R=a(34),D=a.n(R),F=(a(134),[{title:"Nick Cave best of",tracks:[{thumbnail:"https://img.youtube.com/vi/oSl4KX7zBTQ/sddefault.jpg",title:"Nick Cave Tupelo",embed:""},{thumbnail:"https://img.youtube.com/vi/Ahr4KFl79WI/sddefault.jpg",title:"Nick Cave The Mercy Seat"},{thumbnail:"https://img.youtube.com/vi/cDh3-ZXXsi8/sddefault.jpg",title:"Nick Cave And No More shall we part"},{thumbnail:"https://img.youtube.com/vi/4sfhvxTZ0wo/sddefault.jpg",title:"Nick Cave fifteen feet of pure white snow"},{thumbnail:"https://img.youtube.com/vi/TqhOVY58zIo/sddefault.jpg",title:"Nick Cave fifteen feet of pure white snow"}]},{title:"Fun Stuff",tracks:[{thumbnail:"https://img.youtube.com/vi/bIIGKV27FaY/sddefault.jpg",title:"Grauzone Eisbaer"},{thumbnail:"https://img.youtube.com/vi/lE2B8PfsvGk/sddefault.jpg",title:"Tiga Shoes"},{thumbnail:"https://img.youtube.com/vi/wCDIYvFmgW8/sddefault.jpg",title:"Fatboy Slim Weapon of Choice"}]}]),U={superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5},desktop:{breakpoint:{max:3e3,min:1024},items:3},tablet:{breakpoint:{max:1024,min:464},items:2},mobile:{breakpoint:{max:464,min:0},items:1}};a(135);var Y=function(e){var t=e.showPlayer,a=e.userId,s=e.tempPlaylist,n=Object(w.b)(),i=Object(c.useState)(""),r=Object(v.a)(i,2),l=r[0],o=r[1],u=Object(c.useState)([]),d=Object(v.a)(u,2),m=d[0],h=d[1],f=Object(c.useState)([]),y=Object(v.a)(f,2),g=y[0],T=y[1],x=Object(c.useState)([]),I=Object(v.a)(x,2),_=I[0],k=I[1],E=Object(w.c)((function(e){return e.listPlaylists}));console.log("loop",_);var C=function(e){t(e)},R=function(e){T([]),o(e)};return Object(c.useEffect)((function(){F.map((function(e,t){e.title===l&&h(e.tracks)}))}),[l]),Object(c.useEffect)((function(){console.log("video",a),g.map((function(e,t){a===e.createdBy&&console.log("match",e.createdBy)})),n(function(){var e=Object(P.a)(N.a.mark((function e(t){var a,c,s;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:b}),e.next=4,S.a.get("https://olsenvideo.herokuapp.com//playlist",{});case 4:a=e.sent,c=a.data,t({type:p,payload:c}),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),s=e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message,t({type:j,payload:s});case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(c.useLayoutEffect)((function(){k((function(e){return[].concat(Object(A.a)(e),[s[0]])}))}),[s]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"button",children:Object(O.jsxs)(L.a,{children:[Object(O.jsx)(L.a.Toggle,{"data-toggle":"",children:"PLAYLISTS"}),Object(O.jsxs)(L.a.Menu,{children:[F.map((function(e,t){return Object(O.jsxs)(L.a.Item,{href:"",eventKey:e.title,onSelect:R,children:[e.title," "]},t)})),Object(O.jsx)(L.a.Item,{href:"",onSelect:function(e){h(null),E&&T(E.playlist)},children:"My Playlist"})]})]})}),m?Object(O.jsx)(D.a,{responsive:U,children:m.map((function(e,t){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("img",{className:"playlistImage",alt:"",src:e.thumbnail,value:e.title,onClick:function(t){return C(e.title)}},t),Object(O.jsx)("h6",{className:"button offset-1",children:e.title})]})}))}):Object(O.jsxs)(D.a,{responsive:U,children:[g.map((function(e,t){return a===e.createdBy&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("img",{className:"playlistImage",alt:"",src:"https://img.youtube.com/vi/".concat(e.playlistItem,"/sddefault.jpg"),value:e.title,onClick:function(t){return C(e.title)}}),Object(O.jsx)("h6",{className:"button offset-1",children:e.title})," "]})})),_.length>1&&_.map((function(e,t){return void 0!==e&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("img",{className:"playlistImage",alt:"",src:"https://img.youtube.com/vi/".concat(e.thumb.substring(e.thumb.length-11),"/sddefault.jpg"),value:e.title,onClick:function(t){return C(e.thumb)}},t),Object(O.jsx)("h6",{className:"button offset-1",children:e.title})]})}))]})]})},M=new _.a({clientId:"d9eef23f8ad74b80b1e7535609cfc4cf"});function B(e){var t=function(e){var t=Object(c.useState)(),a=Object(v.a)(t,2),s=a[0],n=a[1],i=Object(c.useState)(),r=Object(v.a)(i,2),l=r[0],o=r[1],u=Object(c.useState)(),d=Object(v.a)(u,2),b=d[0],p=d[1];return new T({redirectUri:"https://olsenvideo.herokuapp.com//",clientId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_REDIRECT_URI:"https://olsenvideo.herokuapp.com//",REACT_APP_YOUTUBE_API:"AIzaSyDUppjf_r8veyOTZQ9PCFwlburDc9693-c"}).REACT_APP_CLIENT_ID,clientSecret:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_REDIRECT_URI:"https://olsenvideo.herokuapp.com//",REACT_APP_YOUTUBE_API:"AIzaSyDUppjf_r8veyOTZQ9PCFwlburDc9693-c"}).REACT_APP_CLIENT_SECRET,refreshToken:l}),Object(c.useEffect)((function(){S.a.post("https://olsenvideo.herokuapp.com//login",{code:e}).then((function(e){n(e.data.accessToken),o(e.data.refreshToken),p(e.data.expiresIn),window.history.pushState({},null,"/")})).catch((function(){window.location="/"}))}),[e]),Object(c.useEffect)((function(){if(l&&b){var e=setInterval((function(){S.a.post("https://olsenvideo.herokuapp.com//refresh",{refreshToken:l}).then((function(e){n(e.data.accessToken),p(e.data.expiresIn)})).catch((function(){window.location="/"}))}),1e3*(b-60));return function(){return clearInterval(e)}}}),[l,b]),s}(e.code),a=Object(c.useState)(""),s=Object(v.a)(a,2),n=s[0],i=s[1],r=Object(c.useState)([]),l=Object(v.a)(r,2),o=l[0],u=l[1],d=Object(c.useState)(""),b=Object(v.a)(d,2),p=b[0],j=b[1],m=Object(c.useState)(""),h=Object(v.a)(m,2),f=(h[0],h[1],Object(c.useState)("")),y=Object(v.a)(f,2),g=y[0],I=y[1],_=Object(c.useState)(""),w=Object(v.a)(_,2),E=w[0],N=w[1],P=Object(c.useState)(""),A=Object(v.a)(P,2),L=A[0],R=A[1],D=Object(c.useState)(!1),F=Object(v.a)(D,2),U=F[0],B=F[1],W=Object(c.useState)(""),K=Object(v.a)(W,2),V=K[0],H=K[1],z=Object(c.useState)(!1),Q=Object(v.a)(z,2),Z=(Q[0],Q[1]),J=Object(c.useRef)(null);Object(c.useEffect)((function(){t&&(M.setAccessToken(t),M.getMe().then((function(e){N(e.body.display_name),R(e.body.id)}),(function(e){console.log("Something went wrong!",e)})))}),[t,E]),Object(c.useEffect)((function(){if(!n)return u([]);if(t){var e=!1;return M.searchTracks(n).then((function(t){e||u(t.body.tracks.items.map((function(e,t){var a=e.album.images.reduce((function(e,t){return t.height<e.height?t:e}),e.album.images[0]);return{artist:e.artists[0].name,title:e.name,uri:e.uri,albumUrl:a.url}})))})),function(){return e=!0}}}),[n,t]);var G=function(e){j(e)};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{ref:J,className:"playlistContainer ".concat(U?"active":"inactive"),children:Object(O.jsx)(Y,{isActive:U,showPlayer:G,setSelectedTrack:j,userId:L,setLoading:Z,tempPlaylist:V})}),Object(O.jsxs)("div",{className:"row w-100",children:[Object(O.jsxs)("p",{className:"ml-5 mt-2",style:{letterSpacing:"1.9px",color:"grey"},children:[Object(O.jsx)("i",{className:"fas fa-user",children:" "})," ",E]}),Object(O.jsxs)("div",{className:"offset-2 playlistsTab",onClick:function(){return B(!U)},children:["PLAYLISTS"," ",Object(O.jsx)("i",{ref:J,className:" ".concat(U?"fas fa-arrow-up":"fas fa-arrow-down"),style:{color:"black"},children:" "})]})]}),Object(O.jsxs)("div",{className:"p-5",children:[Object(O.jsxs)("div",{className:"",children:[Object(O.jsx)("div",{className:"searchBar mr-auto",children:Object(O.jsx)(x.a.Control,{type:"search",placeholder:"Search Songs/Artists",value:n,onChange:function(e){i(e.target.value)},showPlayer:G})}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"mt-4 searchResults col-lg-6",children:o.map((function(e,t){return Object(O.jsx)(k,{track:e,showPlayer:G,setPlaylistVideo:I,setSelectedTrack:j},e.uri)}))}),p&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("p",{className:"closeButton button",onClick:function(){j("")},children:"CLOSE VIDEO"}),o&&Object(O.jsx)("div",{className:"col-lg-6 ",children:Object(O.jsx)(C,{selectedTrack:p,playlistVideo:g,userId:L,setTempPlaylist:H})})]})]})]}),Object(O.jsx)("div",{className:"Row hotRow",children:!p&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("p",{className:"hotTitle",children:"WHAT'S HOT TODAY?"}),Object(O.jsxs)("p",{children:["Angel Olsen's banger ",Object(O.jsx)("i",{children:"Shut Up Kiss Me"})," will brighten your day probably . . ."]}),Object(O.jsx)("button",{className:"button",onClick:function(){j("angel olsen shut up kiss me")},children:"PLAY NOW"})]})})]})]})}var W=new URLSearchParams(window.location.search).get("code");var K=function(e){var t=e.userName;return W?Object(O.jsx)(B,{code:W,userName:t}):Object(O.jsx)(y,{})};r.a;n.a.render(Object(O.jsx)(w.a,{store:f,children:Object(O.jsx)(K,{})}),document.getElementById("root"))},35:function(e,t,a){},98:function(e,t){}},[[138,1,2]]]);
//# sourceMappingURL=main.9e9e3413.chunk.js.map