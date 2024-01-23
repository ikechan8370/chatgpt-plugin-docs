import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as l,c as r,a,b as e,d as n,w as d,e as s}from"./app-e8eaddf5.js";const u="/assets/Claude2-OrganizationId-1-9316b601.png",h="/assets/Claude2-OrganizationId-2-5712c294.png",p="/assets/Claude2-SessionKey-1-45a119a9.png",_="/assets/Claude2-SessionKey-2-df9a9458.png",g="/assets/Claude2-SessionKey-3-2942143c.png",f="/assets/Claude2-Fingerprint-UA-963a3e12.png",m="/assets/SetClaude2-3ea6be01.png",b={},k=s('<h1 id="claude" tabindex="-1"><a class="header-anchor" href="#claude" aria-hidden="true">#</a> Claude</h1><h1 id="claude2" tabindex="-1"><a class="header-anchor" href="#claude2" aria-hidden="true">#</a> Claude2</h1><h2 id="获取organizationid" tabindex="-1"><a class="header-anchor" href="#获取organizationid" aria-hidden="true">#</a> 获取OrganizationId</h2><h3 id="方式一-控制台获取" tabindex="-1"><a class="header-anchor" href="#方式一-控制台获取" aria-hidden="true">#</a> 方式一：控制台获取</h3>',4),x={href:"https://claude.ai",target:"_blank",rel:"noopener noreferrer"},v=a("code",null,"F12",-1),C=a("code",null,"控制台（Console）",-1),E=a("code",null,"OrganizationId",-1),B=s(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&quot;lastActiveOrg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="方式二-地址栏获取" tabindex="-1"><a class="header-anchor" href="#方式二-地址栏获取" aria-hidden="true">#</a> 方式二：地址栏获取</h3>',3),y={href:"https://claude.ai",target:"_blank",rel:"noopener noreferrer"},z=a("code",null,"javascript:",-1),F=s(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">alert</span><span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&quot;lastActiveOrg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="获取sessionkey" tabindex="-1"><a class="header-anchor" href="#获取sessionkey" aria-hidden="true">#</a> 获取SessionKey</h2><h3 id="方式一-手动获取" tabindex="-1"><a class="header-anchor" href="#方式一-手动获取" aria-hidden="true">#</a> 方式一：手动获取</h3>',4),j=a("code",null,"F12",-1),S=a("code",null,"Cookies",-1),A={href:"https://claude.ai",target:"_blank",rel:"noopener noreferrer"},I=a("code",null,"sessionKey",-1),K=a("figure",null,[a("img",{src:p,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),V=a("h3",{id:"方式二-插件获取",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#方式二-插件获取","aria-hidden":"true"},"#"),e(" 方式二：插件获取")],-1),O=a("p",null,[e("登录你的账号，点击右上角插件，找到"),a("code",null,"sessionKey"),e(",它的Value就是"),a("code",null,"SessionKey")],-1),q=a("figure",null,[a("img",{src:_,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),L=a("h3",{id:"方式三-手机获取",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#方式三-手机获取","aria-hidden":"true"},"#"),e(" 方式三：手机获取")],-1),N=a("img",{src:g,style:{zoom:"25%"}},null,-1),w=a("h2",{id:"获取浏览器指纹和ua",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#获取浏览器指纹和ua","aria-hidden":"true"},"#"),e(" 获取浏览器指纹和UA")],-1),R=a("p",null,"如果用了反代就不需要操作了",-1),U={href:"https://ja3.zone/check",target:"_blank",rel:"noopener noreferrer"},D=s('<figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="配置claude2" tabindex="-1"><a class="header-anchor" href="#配置claude2" aria-hidden="true">#</a> 配置Claude2</h2><p>登录锅巴，<code>Ctrl + F</code>搜索<code>Claude2</code>，填写上面获得的信息，填写完成点击保存即可。</p><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="相关指令" tabindex="-1"><a class="header-anchor" href="#相关指令" aria-hidden="true">#</a> 相关指令</h2><ol><li>#claude2</li><li>#chatgpt切换claude2</li><li>#克劳德2结束（全部）对话</li></ol>',6);function T(G,H){const t=o("ExternalLinkIcon"),i=o("RouterLink");return l(),r("div",null,[k,a("p",null,[e("访问 "),a("a",x,[e("https://claude.ai"),n(t)]),e(" 登录你的账号，按下"),v,e(",点击"),C,e("，复制下面代码并回车，即可获得"),E,e("。")]),B,a("p",null,[e("在"),a("a",y,[e("https://claude.ai"),n(t)]),e(" 界面的地址栏手动输入"),z,e("复制下面代码粘贴在后面，回车就会出现以下界面（手机操作同理）")]),F,a("p",null,[e("登录账号按"),j,e("或直接打开开发者模式,点击应用（应用程序，Application），在左侧存储中点击"),S,e("，展开找到"),a("a",A,[e("https://claude.ai"),n(t)]),e(" 项，在右侧列表找到"),I,e("，复制它的值。")]),K,V,O,a("p",null,[n(i,{to:"/tutorial/models/xinghuo.html#%E6%96%B9%E5%BC%8F%E4%BA%8C-%E4%BD%BF%E7%94%A8cookie-editor%E6%8F%92%E4%BB%B6%E8%8E%B7%E5%8F%96"},{default:d(()=>[e("获取插件请看星火篇")]),_:1})]),q,L,a("p",null,[e("使用Via浏览器登录账号，按步骤操作即可，"),n(i,{to:"/tutorial/models/xinghuo.html#%E6%96%B9%E5%BC%8F%E4%B8%89-%E6%89%8B%E6%9C%BA%E8%8E%B7%E5%8F%96"},{default:d(()=>[e("Via浏览器下载链接请看星火篇")]),_:1})]),N,w,R,a("p",null,[e("使用登录Claude的浏览器访问 "),a("a",U,[e("https://ja3.zone/check"),n(t)]),e(" ，如下所示：")]),D])}const P=c(b,[["render",T],["__file","claude.html.vue"]]);export{P as default};
