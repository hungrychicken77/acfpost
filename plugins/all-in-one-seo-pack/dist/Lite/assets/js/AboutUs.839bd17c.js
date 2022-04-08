var g=Object.defineProperty,f=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var o=(e,a,s)=>a in e?g(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,l=(e,a)=>{for(var s in a||(a={}))m.call(a,s)&&o(e,s,a[s]);if(n)for(var s of n(a))p.call(a,s)&&o(e,s,a[s]);return e},r=(e,a)=>f(e,u(a));import{f as h}from"./index.aff2f9f0.js";import{e as v}from"./em.e81bf4a7.js";import{G as w,a as y}from"./Row.13b6f3f1.js";import{S as b}from"./External.8868c638.js";import{n as P}from"./vueComponentNormalizer.87056a83.js";var I="images/team.3ed1e959.jpg",_="images/om.0afa29dd.png",C="images/wpforms.e4bb2893.png",S="images/mi.b3a4b48a.png",W="images/smtp.90e4ffc1.png",$="images/sp.d75c9a95.png",U="images/tp.cb8065a4.png",T="images/rafflepress.cda6b4e0.png",k="images/ff.4f882f43.png",F="images/if.4735a5da.png",E="images/tf.75d64979.png",A="images/yf.28cad2d7.png",M="images/pe.3e9da367.png",D="svg/swp.10222930.svg",O="images/afwp.57d92ab4.png",x="images/wpsp.100012d1.png",B="images/edd.c2984766.png",L="images/sc.5c5e705b.png",j=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"aioseo-about-us"},[s("div",{staticClass:"aioseo-about-us-welcome"},[s("div",{staticClass:"welcome-intro"},[s("div",[e._v(e._s(e.strings.welcome.p1))]),s("div",[e._v(e._s(e.strings.welcome.p2))]),s("div",[e._v(e._s(e.strings.welcome.p3))]),s("div",[e._v(e._s(e.strings.welcome.p4))]),s("div",[e._v(e._s(e.strings.welcome.p5))])]),s("div",{staticClass:"welcome-image"},[s("figure",[s("img",{attrs:{src:e.$getImgUrl(e.teamImg),alt:e.strings.welcome.imageCaption}}),s("figcaption",[e._v(e._s(e.strings.welcome.imageCaption))])])])]),s("div",{staticClass:"aioseo-about-us-plugins"},[s("grid-row",e._l(e.localPlugins,function(i,t){return s("grid-column",{key:t,staticClass:"plugin",attrs:{sm:"12",md:"6",id:t}},[s("div",{staticClass:"plugin-main"},[s("div",[s("img",{attrs:{src:e.plugins[t].icon}})]),s("div",[s("div",{staticClass:"main-name"},[e._v(e._s(e.plugins[t].name))]),s("div",[e._v(e._s(e.plugins[t].description))])])]),s("div",{staticClass:"plugin-footer"},[s("div",{staticClass:"footer-status"},[s("div",{staticClass:"footer-status-label"},[e._v(e._s(e.strings.plugins.status))]),e.plugins[t].installed?e._e():s("div",{staticClass:"footer-status footer-status-not-installed"},[e._v(" "+e._s(e.strings.plugins.statuses.notInstalled)+" ")]),e.plugins[t].installed&&!e.plugins[t].activated?s("div",{staticClass:"footer-status footer-status-deactivated"},[e._v(" "+e._s(e.strings.plugins.statuses.deactivated)+" ")]):e._e(),e.plugins[t].installed&&e.plugins[t].activated?s("div",{staticClass:"footer-status footer-status-activated"},[e._v(" "+e._s(e.strings.plugins.statuses.activated)+" ")]):e._e()]),s("div",{staticClass:"footer-action"},[!e.plugins[t].installed&&e.plugins[t].canInstall?s("base-button",{attrs:{type:"blue",loading:e.plugins[t].loading},on:{click:function(c){return e.activate(t)}}},[e._v(" "+e._s(e.strings.plugins.actions.install)+" ")]):e._e(),!e.plugins[t].installed&&!e.plugins[t].canInstall?s("base-button",{attrs:{type:"blue",tag:"a",target:"_blank",href:i.wpLink}},[s("svg-external"),e._v(" "+e._s(e.strings.plugins.actions.install)+" ")],1):e._e(),e.plugins[t].installed&&!e.plugins[t].activated?s("base-button",{attrs:{type:"green",disabled:!e.plugins[t].canActivate,loading:e.plugins[t].loading},on:{click:function(c){return e.activate(t)}}},[e._v(" "+e._s(e.strings.plugins.actions.activate)+" ")]):e._e(),e.plugins[t].installed&&e.plugins[t].activated&&i.adminUrl.length!==0?s("base-button",{attrs:{type:"gray",tag:"a",href:i.adminUrl}},[e._v(" "+e._s(e.strings.plugins.actions.manage)+" ")]):e._e()],1)])])}),1)],1)])},z=[];const G={components:{GridColumn:w,GridRow:y,SvgExternal:b},data(){return{teamImg:I,localPlugins:[],strings:{welcome:{p1:this.$t.sprintf("Welcome to %1$s, the original SEO plugin for WordPress. At %2$s, we build software that helps you rank your website in search results and gain organic traffic.","All in One SEO","All in One SEO"),p2:"Over the years, we found that most other WordPress SEO plugins were bloated, buggy, slow, and very hard to use. So we designed our plugin as an easy and powerful tool.",p3:"Our goal is to take the pain out of optimizing your website for search engines.",p4:this.$t.sprintf("%1$s is brought to you by %2$s, the same team that\u2019s behind the largest WordPress resource site, WPBeginner, the most popular lead-generation software, OptinMonster, the best WordPress analytics plugin, MonsterInsights and many more.","All in One SEO","Awesome Motive"),p5:"Yup, we know a thing or two about building awesome products that customers love.",imageCaption:this.$t.sprintf("The %1$s Team","Awesome Motive")},plugins:{actions:{install:"Install Plugin",activate:"Activate",manage:"Manage"},status:"Status:",statuses:{activated:"Activated",deactivated:"Deactivated",notInstalled:"Not Installed"}}},pluginData:{optinMonster:{name:"OptinMonster",description:"Instantly get more subscribers, leads, and sales with the #1 conversion optimization toolkit. Create high converting popups, announcement bars, spin a wheel, and more with smart targeting and personalization.",icon:this.$getImgUrl(_),installed:!1,canInstall:!1,activated:!1,loading:!1},wpForms:{name:"WPForms",description:"The best drag & drop WordPress form builder. Easily create beautiful contact forms, surveys, payment forms, and more with our 100+ form templates. Trusted by over 4 million websites as the best forms plugin.",icon:this.$getImgUrl(C),installed:!1,canInstall:!1,activated:!1,loading:!1},wpFormsPro:{name:"WPForms Pro",free:"wpForms",installed:!1,canInstall:!1,activated:!1,loading:!1},miLite:{name:"MonsterInsights",description:"The leading WordPress analytics plugin that shows you how people find and use your website, so you can make data driven decisions to grow your business. Properly set up Google Analytics without writing code.",icon:this.$getImgUrl(S),installed:!1,canInstall:!1,activated:!1,loading:!1},miPro:{name:"MonsterInsights Pro",free:"miLite",installed:!1,canInstall:!1,activated:!1,loading:!1},emLite:{name:"ExactMetrics",description:"The ExactMetrics Google Analytics for WordPress plugin helps you properly setup all the powerful Google Analytics tracking features without writing any code or hiring a developer.",icon:this.$getImgUrl(v),installed:!1,canInstall:!1,activated:!1,loading:!1},emPro:{name:"ExactMetrics Pro",free:"emLite",installed:!1,canInstall:!1,activated:!1,loading:!1},wpMail:{name:"WP Mail SMTP",description:"Improve your WordPress email deliverability and make sure that your website emails reach user\u2019s inbox with the #1 SMTP plugin for WordPress. Over 2 million websites use it to fix WordPress email issues.",icon:this.$getImgUrl(W),installed:!1,canInstall:!1,activated:!1,loading:!1},wpMailPro:{name:"WP Mail SMTP Pro",free:"wpMail",installed:!1,canInstall:!1,activated:!1,loading:!1},seedProd:{name:"SeedProd Coming Soon",description:"The fastest drag & drop landing page builder for WordPress. Create custom landing pages without writing code, connect them with your CRM, collect subscribers, and grow your audience. Trusted by 1 million sites.",icon:this.$getImgUrl($),installed:!1,canInstall:!1,activated:!1,loading:!1},seedProdPro:{name:"SeedProd Coming Soon Pro",free:"seedProd",installed:!1,canInstall:!1,activated:!1,loading:!1},trustPulse:{name:"TrustPulse",description:"Boost your sales and conversions by up to 15% with real-time social proof notifications. TrustPulse helps you show live user activity and purchases to help convince other users to purchase.",icon:this.$getImgUrl(U),installed:!1,canInstall:!1,activated:!1,loading:!1},rafflePress:{name:"RafflePress",description:"Turn your website visitors into brand ambassadors! Easily grow your email list, website traffic, and social media followers with the most powerful giveaways & contests plugin for WordPress.",icon:this.$getImgUrl(T),installed:!1,canInstall:!1,activated:!1,loading:!1},rafflePressPro:{name:"RafflePress Pro",free:"rafflePress",installed:!1,canInstall:!1,activated:!1,loading:!1},facebookFeed:{name:"Smash Balloon Facebook Feeds",description:"Easily display Facebook content on your WordPress site without writing any code. Comes with multiple templates, ability to embed albums, group content, reviews, live videos, comments, and reactions.",icon:this.$getImgUrl(k),installed:!1,canInstall:!1,activated:!1,loading:!1},facebookFeedPro:{name:"Smash Balloon Facebook Feeds Pro",free:"facebookFeed",installed:!1,canInstall:!1,activated:!1,loading:!1},instagramFeed:{name:"Smash Balloon Instagram Feeds",description:"Easily display Instagram content on your WordPress site without writing any code. Comes with multiple templates, ability to show content from multiple accounts, hashtags, and more. Trusted by 1 million websites.",icon:this.$getImgUrl(F),installed:!1,canInstall:!1,activated:!1,loading:!1},instagramFeedPro:{name:"Smash Balloon Instagram Feeds Pro",free:"instagramFeed",installed:!1,canInstall:!1,activated:!1,loading:!1},twitterFeed:{name:"Smash Balloon Twitter Feeds",description:"Easily display Twitter content in WordPress without writing any code. Comes with multiple layouts, ability to combine multiple Twitter feeds, Twitter card support, tweet moderation, and more.",icon:this.$getImgUrl(E),installed:!1,canInstall:!1,activated:!1,loading:!1},twitterFeedPro:{name:"Smash Balloon Twitter Feeds Pro",free:"twitterFeed",installed:!1,canInstall:!1,activated:!1,loading:!1},youTubeFeed:{name:"Smash Balloon YouTube Feeds",description:"Easily display YouTube videos on your WordPress site without writing any code. Comes with multiple layouts, ability to embed live streams, video filtering, ability to combine multiple channel videos, and more.",icon:this.$getImgUrl(A),installed:!1,canInstall:!1,activated:!1,loading:!1},youTubeFeedPro:{name:"Smash Balloon YouTube Feeds Pro",free:"youTubeFeed",installed:!1,canInstall:!1,activated:!1,loading:!1},pushEngage:{name:"PushEngage",description:"Connect with your visitors after they leave your website with the leading web push notification software. Over 10,000+ businesses worldwide use PushEngage to send 9 billion notifications each month.",icon:this.$getImgUrl(M),installed:!1,canInstall:!1,activated:!1,loading:!1},searchWp:{name:"SearchWP",description:"The most advanced WordPress search plugin. Customize your WordPress search algorithm, reorder search results, track search metrics, and everything you need to leverage search to grow your business.",icon:this.$getImgUrl(D),installed:!1,canInstall:!1,activated:!1,loading:!1,installUrl:this.$links.utmUrl("aioseo","about-us","https://searchwp.com/")},affiliateWp:{name:"AffiliateWP",description:"The #1 affiliate management plugin for WordPress. Easily create an affiliate program for your eCommerce store or membership site within minutes and start growing your sales with the power of referral marketing.",icon:this.$getImgUrl(O),installed:!1,canInstall:!1,activated:!1,loading:!1,installUrl:this.$links.utmUrl("aioseo","about-us","https://affiliatewp.com/")},wpSimplePay:{name:"WP Simple Pay",description:"The #1 Stripe payments plugin for WordPress. Start accepting one-time and recurring payments on your WordPress site without setting up a shopping cart. No code required.",icon:this.$getImgUrl(x),installed:!1,canInstall:!1,activated:!1,loading:!1},wpSimplePayPro:{name:"WP Simple Pay Pro",free:"wpSimplePay",installed:!1,canInstall:!1,activated:!1,loading:!1},easyDigitalDownloads:{name:"Easy Digital Downloads",description:"The best WordPress eCommerce plugin for selling digital downloads. Start selling eBooks, software, music, digital art, and more within minutes. Accept payments, manage subscriptions, advanced access control, and more.",icon:this.$getImgUrl(B),installed:!1,canInstall:!1,activated:!1,loading:!1},sugarCalendar:{name:"Sugar Calendar",description:"A simple & powerful event calendar plugin for WordPress that comes with all the event management features including payments, scheduling, timezones, ticketing, recurring events, and more.",icon:this.$getImgUrl(L),installed:!1,canInstall:!1,activated:!1,loading:!1},sugarCalendarPro:{name:"Sugar Calendar Pro",free:"sugarCalendar",installed:!1,canInstall:!1,activated:!1,loading:!1}}}},methods:r(l({},h(["installPlugins"])),{activate(e){if(!this.plugins[e].installed&&this.plugins[e].installUrl){window.open(this.plugins[e].installUrl,"_blank").focus();return}this.plugins[e].loading=!0,this.installPlugins([{plugin:e,type:"plugin"}]).then(a=>{if(this.plugins[e].loading=!1,Object.keys(a.body.completed).length)this.plugins[e].installed=!0,this.plugins[e].activated=!0;else if(Object.keys(a.body.failed).length)throw new Error(a.body.failed)}).catch(a=>{this.plugins[e].loading=!1,console.error(`Unable to install ${e}: ${a}`)})}}),computed:{plugins(){return Object.keys(this.localPlugins).forEach(e=>{this.pluginData[e].free&&(this.pluginData[e].description=this.pluginData[this.pluginData[e].free].description,this.pluginData[e].icon=this.pluginData[this.pluginData[e].free].icon)}),this.pluginData}},mounted(){this.localPlugins=l({},this.$aioseo.plugins),Object.keys(this.localPlugins).forEach(e=>{this.pluginData[e].installed=this.localPlugins[e].installed,this.pluginData[e].canInstall=this.localPlugins[e].canInstall,this.pluginData[e].canActivate=this.localPlugins[e].canActivate,this.pluginData[e].activated=this.localPlugins[e].activated,this.plugins[e].free&&(this.localPlugins[e].installed?delete this.localPlugins[this.plugins[e].free]:delete this.localPlugins[e])})}},d={};var R=P(G,j,z,!1,Y,null,null,null);function Y(e){for(let a in d)this[a]=d[a]}var X=function(){return R.exports}();export{X as default};
