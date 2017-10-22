webpackJsonp([2],{362:function(e,t,a){"use strict";function n(e){var t=e.entities.projects,n=e.ui;return{staticContent:a.i(g.a)(),count:r()(t).length,ui:n}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(44),r=a.n(l),o=a(12),u=a.n(o),s=a(13),c=a.n(s),i=a(14),d=a.n(i),p=a(16),f=a.n(p),m=a(15),h=a.n(m),E=a(0),b=a(11),y=a(405),v=a(6),g=a(146),w=function(e){function t(){return c()(this,t),f()(this,(t.__proto__||u()(t)).apply(this,arguments))}return h()(t,e),d()(t,[{key:"render",value:function(){a.i(v.a)("Render the <AboutPage> container",this.props);var e=this.props,t=e.staticContent,n=e.project,l=e.count,r=e.ui;return E.default.createElement(y.a,{project:n,staticContent:t,count:l,ui:r})}}]),t}(E.Component);t.default=a.i(b.b)(n,{})(w)},405:function(e,t,a){"use strict";var n=a(0),l=a(35),r=a(406),o=a(6),u=a(78),s=function(e){var t=e.staticContent,s=e.count;a.i(o.a)("Render the <About> component");var c=t.repo,i=t.projectName;return n.default.createElement(l.a,{style:{paddingTop:"2rem"}},n.default.createElement("div",{className:"card markdown-body",style:{padding:"2rem"}},n.default.createElement("h1",null,"About"),n.default.createElement(r.a,{url:c}),n.default.createElement("h2",null,"Why ",i," ?"),n.default.createElement("p",null,"Javascript, HTML and CSS are advancing faster than ever, we are going fullspeed on innovation.",n.default.createElement("br",null),"Amazing open-source projects are released almost everyday."),n.default.createElement("ul",null,n.default.createElement("li",null,"How to stay up-to-date about the latest tendencies ?"),n.default.createElement("li",null,"How to check quickly the projects that really matter,"," ",n.default.createElement("i",{className:"special"},"now")," and not 6 months ago ?")),n.default.createElement("p",null,i," was creaded to address these questions."),n.default.createElement("h2",null,"Concept"),n.default.createElement("p",null,"Checking the number of stars on GitHub is a good way to check project popularity but it does not tell you when the stars have been added."," "),n.default.createElement("p",null,i,' takes "snapshot" of GitHub stars every day, for a curated list of ',s," projects, to detect the trends over the last months."),n.default.createElement("h2",null,"How it works"),n.default.createElement("p",null,"First, a list of projects related to the web platform (JavaScript of course but also HTML and CSS) is stored in a database."),n.default.createElement("p",null,"Everytime we find a new project, we add it to the database."),n.default.createElement("p",null,"Then everyday, an automatic task checks project data from GitHub, for every project stored and generates data consumed by the web application."),n.default.createElement("p",null,"The web application displays the total number of stars and their variation over the last days."),n.default.createElement("h2",null,"Do you want more projects ?"),n.default.createElement("p",null,'Rather than scanning all existing projects on GitHub, We decided to focus on a curated list of projets we find "interesting", based on our experience and on things we read on the internet.'),n.default.createElement("p",null,"As a result, some great projects must be missing!"),n.default.createElement("p",null,"Create a GitHub issue ",n.default.createElement(u.a,null,"here")," to suggest a new project to add."),n.default.createElement("h2",null,"Show your support!"),n.default.createElement("p",null,"If you like the application, please star the project on"," ",n.default.createElement("a",{href:c},"GitHub"),"..."),n.default.createElement("p",null,"...we are all made of stars"," ",n.default.createElement("img",{src:"images/star.png",width:"16",height:"16",alt:"star"})," !"),n.default.createElement("p",null,"Thank you for your support!")))};t.a=s},406:function(e,t,a){"use strict";var n=a(0),l=function(e){var t=e.url;return n.default.createElement("a",{className:"btn",id:"star-button",href:t},n.default.createElement("span",{className:"octicon octicon-octoface"})," Star on GitHub")};t.a=l}});