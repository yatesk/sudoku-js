(this["webpackJsonpsudoku-js"]=this["webpackJsonpsudoku-js"]||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(1),c=n(8),l=n.n(c),r=n(3),s=n(2);var d=function(e,t,n,a,c,l){return Object(i.jsx)("div",{style:l?{marginRight:"5px",pointerEvents:"none",opacity:"0.4"}:{marginRight:"5px"},children:Object(i.jsxs)("div",{className:a?"cellNumberRevealed":"cellNumber",onContextMenu:function(e){e.preventDefault()},onMouseDown:function(t){t.preventDefault(),!1===a&&1===t.button&&n(e,0)},children:[t,Object(i.jsx)("div",{className:c?"invalidCellNumber":""})]})})};var u=function(e,t,n,a,c,l,r,s){function d(){return c&&1===n.length}function u(t){return l&&r[e].includes(t)}return Object(i.jsxs)("div",{style:s?{marginRight:"5px",pointerEvents:"none",opacity:"0.4"}:{marginRight:"5px"},className:"cell",onClick:function(n){t(e,parseInt(n.target.id))},onContextMenu:function(t){t.preventDefault(),a(e,parseInt(t.target.id))},onMouseDown:function(e){e.preventDefault()},children:[n.includes(1)?Object(i.jsx)("div",{id:"1",className:"candidateCell ".concat(d()||u(1)?"redText":"blackText"),children:"1"}):Object(i.jsx)("div",{id:"1",className:"candidateCell"}),n.includes(2)?Object(i.jsx)("div",{id:"2",className:"candidateCell ".concat(d()||u(2)?"redText":"blackText"),children:"2"}):Object(i.jsx)("div",{id:"2",className:"candidateCell"}),n.includes(3)?Object(i.jsx)("div",{id:"3",className:"candidateCell ".concat(d()||u(3)?"redText":"blackText"),children:"3"}):Object(i.jsx)("div",{id:"3",className:"candidateCell"}),n.includes(4)?Object(i.jsx)("div",{id:"4",className:"candidateCell ".concat(d()||u(4)?"redText":"blackText"),children:"4"}):Object(i.jsx)("div",{id:"4",className:"candidateCell"}),n.includes(5)?Object(i.jsx)("div",{id:"5",className:"candidateCell ".concat(d()||u(5)?"redText":"blackText"),children:"5"}):Object(i.jsx)("div",{id:"5",className:"candidateCell"}),n.includes(6)?Object(i.jsx)("div",{id:"6",className:"candidateCell ".concat(d()||u(6)?"redText":"blackText"),children:"6"}):Object(i.jsx)("div",{id:"6",className:"candidateCell"}),n.includes(7)?Object(i.jsx)("div",{id:"7",className:"candidateCell ".concat(d()||u(7)?"redText":"blackText"),children:"7"}):Object(i.jsx)("div",{id:"7",className:"candidateCell"}),n.includes(8)?Object(i.jsx)("div",{id:"8",className:"candidateCell ".concat(d()||u(8)?"redText":"blackText"),children:"8"}):Object(i.jsx)("div",{id:"8",className:"candidateCell"}),n.includes(9)?Object(i.jsx)("div",{id:"9",className:"candidateCell ".concat(d()||u(9)?"redText":"blackText"),children:"9"}):Object(i.jsx)("div",{id:"9",className:"candidateCell"})]})};n(4);var o=function(e){var t=e.gridID,n=e.value,a=e.updateGrid,c=e.revealedCell,l=e.invalidCellNumber,r=e.candidates,s=e.updateCandidates,o=e.nakedSinglesToggle,j=e.hiddenSinglesToggle,f=e.hiddenSingles,b=e.isGamePaused;return Object(i.jsx)(i.Fragment,{children:0===n?u(t,a,r,s,o,j,f,b):d(t,n,a,c,l,b)})};var j=function(e){var t=e.grid,n=e.setGrid,c=e.starterGrid,l=e.candidates,d=e.updateCandidates,u=e.nakedSinglesToggle,j=e.hiddenSinglesToggle,f=e.hiddenSingles,b=e.isGamePaused,v=e.puzzleCompleted,h=e.setIsPuzzleSolvable,O=Object(a.useState)([Array(81).fill(!1)]),g=Object(s.a)(O,2),x=g[0],p=g[1];function m(e,i){var a=Object(r.a)(t);a[e]=i,n(a)}return Object(a.useEffect)((function(){var e=function(){for(var e=[],n=0;n<81;n+=9)for(var i={},a=0+n;a<9+n;a++){var c=t[a];c>0&&(c in i?(e.push(i[c]),e.push(a)):i[c]=a)}for(var l=0;l<9;l++){i={};for(var r=0+l;r<81+l;r+=9)(c=t[r])>0&&(c in i?(e.push(i[c]),e.push(r)):i[c]=r)}for(var s=0;s<9;s++){i={};for(var d=27*Math.floor(s/3)+s%3*3,u=d;u<3+d;u++)for(var o=0;o<20;o+=9)(c=t[u+o])>0&&(c in i?(e.push(i[c]),e.push(u+o)):i[c]=u+o)}return e}();!function(e){for(var t=Array(81).fill(!1),n=0;n<e.length;n++)t[e[n]]=!0;p(t)}(e),e.length>0?h(!1):h(!0),function(e){for(var n=0,i=0;i<t.length;i++)0!==t[i]&&(n+=1);return 81===n&&0===e.length}(e)&&v()}),[t]),Object(i.jsx)("div",{className:"gameBoardGrid",children:t.map((function(e,t){return Object(i.jsx)(o,{gridID:t,value:e,updateGrid:m,revealedCell:0!==c[t],invalidCellNumber:x[t],candidates:l[t],updateCandidates:d,nakedSinglesToggle:u,hiddenSinglesToggle:j,hiddenSingles:f,isGamePaused:b},t)}))})};var f=function(e){var t=e.showCandidatesToggle,n=e.setShowCandidatesToggle,a=e.hiddenSinglesToggle,c=e.setHiddenSinglesToggle,l=e.nakedSinglesToggle,r=e.setNakedSinglesToggle;return Object(i.jsxs)("div",{children:[Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{type:"checkbox",checked:a,onChange:function(){c(!a)}}),"Show Hidden Singles"]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{type:"checkbox",checked:l,onChange:function(){r(!l)}}),"Show Naked Singles"]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{type:"checkbox",onChange:function(){n(!t)}}),"Show Candidates"]})]})};var b=function(){return Object(i.jsxs)("div",{className:"gridDisplay select",children:[Object(i.jsx)("label",{htmlFor:"puzzleSource",children:"Puzzle Source:"}),Object(i.jsxs)("select",{id:"puzzleSource",name:"puzzleSource",children:[Object(i.jsx)("option",{value:"nyTimes",children:"NY Times"}),Object(i.jsx)("option",{value:"qqWing",children:"QQ Wing"}),Object(i.jsx)("option",{value:"random",children:"Random"}),Object(i.jsx)("option",{value:"other",children:"Other"})]}),Object(i.jsx)("label",{htmlFor:"puzzleDifficulty",children:"Puzzle Difficulty:"}),Object(i.jsxs)("select",{id:"puzzleDifficulty",name:"puzzleDifficulty",children:[Object(i.jsx)("option",{value:"easy",children:"Easy"}),Object(i.jsx)("option",{value:"medium",children:"Medium"}),Object(i.jsx)("option",{value:"hard",children:"Hard"})]})]})};var v=function(e){var t=e.isGamePaused,n=e.isPuzzleCompleted,c=e.resetTimer,l=e.setResetTimer,r=Object(a.useState)(0),d=Object(s.a)(r,2),u=d[0],o=d[1];return Object(a.useEffect)((function(){!0===c&&(o(0),l(!1))}),[c]),Object(a.useEffect)((function(){var e=setTimeout((function(){t||n||o(u+1)}),1e3);return function(){return clearInterval(e)}})),Object(i.jsx)(i.Fragment,{children:function(e){var i="0:00";if(e>0){var a=e,c=Math.floor(a/3600);a%=3600;var l=Math.floor(a/60);a%=60;var r=Math.floor(a);i=c>0?c+":":"",l>0?(l<10&&(i+="0"),i+=l+":"):i+="0:",r>0?(r<10&&(i+="0"),i+=r):i+="00"}return t?i+=" (PAUSED)":n&&(i+=" (Puzzle Completed!)"),i}(u)})};var h=function(e){var t=e.grid,n=e.setGrid,c=e.findSubGrid,l=e.isPuzzleSolvable,d=Object(a.useState)(!1),u=Object(s.a)(d,2),o=u[0],j=u[1];function f(e,t,n){for(var i=Math.floor(t/9),a=t%9,l=9*i;l<9*i+9;l++)if(e[l]===n)return!1;for(var r=a;r<81;r+=9)if(e[r]===n)return!1;for(var s=c(a,i),d=27*Math.floor(s/3)+s%3*3,u=0;u<3;u++)for(var o=0;o<3;o++)if(e[d+u+9*o]===n)return!1;return!0}function b(e,t){if(81===t)return n(e),!0;if(e[t]>0)return b(e,t+1);for(var i=1;i<=9;i++){if(f(e,t,i)&&(e[t]=i,b(e,t+1)))return!0;e[t]=0}return!1}return Object(a.useEffect)((function(){!0===o&&(!0===b(Object(r.a)(t),0)?(console.log("Puzzle Solved!"),j(!1)):console.log("Not Solvable!"))}),[o]),Object(i.jsx)("input",{type:"button",id:"solvePuzzleButton",value:"Solve Puzzle",disabled:!l,onClick:function(){j(!0)}})};var O=function(e){var t=e.newGame,n=e.pauseGame,a=e.isGamePaused,c=e.resetPuzzle,l=e.resetTimer,r=e.setResetTimer,s=e.grid,d=e.setGrid,u=e.findSubGrid,o=e.isPuzzleCompleted,j=e.isPuzzleSolvable;return Object(i.jsxs)("div",{className:"theButtons",children:[Object(i.jsx)("div",{children:Object(i.jsx)("input",{type:"button",id:"newGameButton",value:"New Game",onClick:t})}),Object(i.jsx)("div",{children:Object(i.jsx)("input",{type:"button",id:"pauseGameButton",value:"Pause Game",onClick:n})}),Object(i.jsx)("div",{children:Object(i.jsx)(v,{isGamePaused:a,isPuzzleCompleted:o,resetTimer:l,setResetTimer:r})}),Object(i.jsx)("div",{children:Object(i.jsx)("input",{type:"button",id:"resetPuzzleButton",value:"Reset Puzzle",onClick:c})}),Object(i.jsx)("div",{children:Object(i.jsx)(h,{grid:s,setGrid:d,findSubGrid:u,isPuzzleSolvable:j})})]})};var g=function(){var e=Object(a.useState)(1),t=Object(s.a)(e,2),n=t[0],c=(t[1],Object(a.useState)(!1)),l=Object(s.a)(c,2),d=l[0],u=l[1],o=Object(a.useState)(!1),v=Object(s.a)(o,2),h=v[0],g=v[1],x=Object(a.useState)(!1),p=Object(s.a)(x,2),m=p[0],S=p[1],z=Object(a.useState)(!1),T=Object(s.a)(z,2),C=T[0],N=T[1],k=Object(a.useState)(!1),y=Object(s.a)(k,2),G=y[0],P=y[1],w=Object(a.useState)(!1),D=Object(s.a)(w,2),M=D[0],E=D[1],R=Object(a.useState)(!0),A=Object(s.a)(R,2),I=A[0],B=A[1],F=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],H=Object(a.useState)(F),q=Object(s.a)(H,2),J=q[0],Q=q[1],W=Object(a.useState)(Array(81).fill([])),U=Object(s.a)(W,2),Y=U[0],K=U[1],L=Object(a.useState)(Array(81).fill([])),V=Object(s.a)(L,2),X=V[0],Z=V[1];function $(e){for(var t=0,n=[];t<e.length;t++)-1===e.indexOf(e[t],e.indexOf(e[t])+1)&&n.push(e[t]);return n}function _(e,t){if(t<3){if(e<3)return 0;if(e<6)return 1;if(e<9)return 2}else if(t<6){if(e<3)return 3;if(e<6)return 4;if(e<9)return 5}else if(t<9){if(e<3)return 6;if(e<6)return 7;if(e<9)return 8}}return Object(a.useEffect)((function(){!0===h&&function(){for(var e=[],t=0;t<81;t+=9){for(var n=[],i=t;i<t+9;i++)n=n.concat(Y[i]);e.push($(n))}for(var a=[],c=0;c<9;c++){for(var l=[],r=c;r<81;r+=9)l=l.concat(Y[r]);a.push($(l))}for(var s=[0,3,6,27,30,33,54,57,60],d=[],u=0;u<9;u++){for(var o=s[u],j=[],f=o;f<3+o;f++)for(var b=0;b<20;b+=9)j=j.concat(Y[b+f]);d.push($(j))}for(var v=[],h=0;h<81;h++){for(var O=[],g=0;g<Y[h].length;g++){var x=Math.floor(h/9),p=h%9,m=_(p,x);(e[x].includes(Y[h][g])||a[p].includes(Y[h][g])||d[m].includes(Y[h][g]))&&O.push(Y[h][g])}O.length>0?v.push(O):v.push([])}Z(v)}()}),[Y]),Object(a.useEffect)((function(){!function(){for(var e=[],t=0;t<81;t+=9){for(var n=[],i=0;i<9;i++)J[t+i]>0&&n.push(J[t+i]);e.push(n)}for(var a=[],c=0;c<9;c++){for(var l=[],r=0;r<81;r+=9)J[r+c]>0&&l.push(J[r+c]);a.push(l)}for(var s=[],d=0;d<9;d++){for(var u=27*Math.floor(d/3)+d%3*3,o=[],j=u;j<3+u;j++)for(var f=0;f<20;f+=9)J[f+j]>0&&o.push(J[f+j]);s.push(o)}for(var b=[1,2,3,4,5,6,7,8,9],v=Array(81).fill([]),h=0;h<J.length;h++)0===J[h]?function(){var t=Math.floor(h/9),n=h%9,i=_(n,t),c=e[t].concat(a[n],s[i]),l=b.filter((function(e){return!c.includes(e)}));v[h]=l}():v[h]=[J[h]];K(v)}(),!1===C&&(g(!1),S(!1),K(Array(81).fill([])))}),[h,m,C,J]),Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Sudoku"}),Object(i.jsxs)("div",{className:"gridDisplay",children:[Object(i.jsx)(j,{grid:J,setGrid:Q,starterGrid:F,candidates:Y,updateCandidates:function(e,t){var n=Object(r.a)(Y),i=n[e].indexOf(t);-1===i?n[e]=[].concat(Object(r.a)(n[e]),[t]):n[e].splice(i,1),K(n)},nakedSinglesToggle:m,hiddenSinglesToggle:h,hiddenSingles:X,isGamePaused:G,puzzleCompleted:function(){E(!0),console.log("winner")},setIsPuzzleSolvable:B},n),Object(i.jsxs)("div",{children:[Object(i.jsx)(b,{}),Object(i.jsx)(O,{newGame:function(){fetch("https://cors-anywhere.herokuapp.com/https://www.nytimes.com/puzzles/sudoku/medium").then((function(e){return e.text()})).then((function(e){return console.log(e),e})).catch((function(e){console.log(e.statusText)}))},pauseGame:function(){P(!G)},isGamePaused:G,resetPuzzle:function(){Q(F),K(Array(81).fill([])),Z(Array(81).fill([])),u(!0),P(!1),E(!1)},resetTimer:d,setResetTimer:u,grid:J,setGrid:Q,findSubGrid:_,isPuzzleCompleted:M,isPuzzleSolvable:I})]}),Object(i.jsx)(f,{showCandidatesToggle:C,setShowCandidatesToggle:N,hiddenSinglesToggle:h,setHiddenSinglesToggle:g,nakedSinglesToggle:m,setNakedSinglesToggle:S})]})]})},x=document.getElementById("container");function p(){return Object(i.jsx)("div",{children:Object(i.jsx)(g,{})})}l.a.render(Object(i.jsx)(p,{}),x)},4:function(e,t,n){}},[[14,1,2]]]);
//# sourceMappingURL=main.d9a579f0.chunk.js.map