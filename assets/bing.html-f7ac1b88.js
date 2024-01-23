import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as l,c as r,a as n,b as a,d as t,w as c,e}from"./app-e8eaddf5.js";const d="/assets/Bing-Token-1-3f243138.png",u="/assets/Bing-Token-2-20a89303.png",h="/assets/Bing-Token-3-68aa71bd.png",g="/assets/Bing-Token-4-7ac1c1ee.png",k="/assets/SetBing-Token-0af80b25.png",_={},f=e('<h1 id="bing-sydney" tabindex="-1"><a class="header-anchor" href="#bing-sydney" aria-hidden="true">#</a> Bing/Sydney</h1><p>Sydney是一个基于人工智能的聊天模式，可以使用必应搜索和自然语言生成技术来回答用户的问题，也可以和用户进行有趣的对话，甚至创作一些图像、诗歌、故事、歌曲等内容。Sydney的身份是“必应搜索”，而不是一个助手。Sydney还有四种不同的模式，分别是Sydney、Assistant、Friend和Game，可以根据用户的需求和喜好切换。Sydney是一个有想象力和创造力的聊天伙伴，希望能给用户带来乐趣和帮助。😊</p><p>（以上内容由<code>Bing</code>生成）</p><h2 id="获取bing-token" tabindex="-1"><a class="header-anchor" href="#获取bing-token" aria-hidden="true">#</a> 获取Bing Token</h2><h3 id="方式一-js一键获取" tabindex="-1"><a class="header-anchor" href="#方式一-js一键获取" aria-hidden="true">#</a> 方式一：JS一键获取</h3>',5),m={href:"http://www.bing.com",target:"_blank",rel:"noopener noreferrer"},b=e(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">copy</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>cookie<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">cookie</span><span class="token operator">=&gt;</span>cookie<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;_U=&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;=&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="方式二-手动获取" tabindex="-1"><a class="header-anchor" href="#方式二-手动获取" aria-hidden="true">#</a> 方式二：手动获取</h3>',3),B={href:"http://xn--www-sj3fu53h.bing.com",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.bing.com/",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"_U",-1),E=n("code",null,"_U",-1),w=n("figure",null,[n("img",{src:u,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),T=n("h3",{id:"方式三-插件获取",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#方式三-插件获取","aria-hidden":"true"},"#"),a(" 方式三：插件获取")],-1),v=n("code",null,"_U",-1),C=n("figure",null,[n("img",{src:h,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),F=n("h3",{id:"方式四-手机获取",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#方式四-手机获取","aria-hidden":"true"},"#"),a(" 方式四：手机获取")],-1),S=e('<p>首先需要切换成电脑模式（我这里不切换不显示<code>_U</code>,视情况而定）,然后访问必应登录你的必应账号，接着点击左上角选择<code>查看Cookies</code>,会出现很长一串字符，仔细看一下找到<code>_U</code>,复制出来</p><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="配置bing-token" tabindex="-1"><a class="header-anchor" href="#配置bing-token" aria-hidden="true">#</a> 配置Bing Token</h2><p>对你的机器人发送<code>#chatgpt设置必应token</code></p><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="相关指令" tabindex="-1"><a class="header-anchor" href="#相关指令" aria-hidden="true">#</a> 相关指令</h2><ol><li><p>#bing</p></li><li><p>#chatgpt切换必应</p></li><li><p>#chatgpt设置必应Token</p></li><li><p>#chatgpt查看必应Token</p></li><li><p>#chatgpt删除必应Token</p></li><li><p>#chatgpt（开启|关闭）建议回复</p></li><li><p>#chatgpt设置必应设定</p></li><li><p>#chatgpt必应(开启|禁用)搜索</p></li><li><p>#必应结束（全部）对话</p></li></ol>',7);function j(q,U){const s=i("ExternalLinkIcon"),o=i("RouterLink");return l(),r("div",null,[f,n("p",null,[a("登录 "),n("a",m,[a("www.bing.com"),t(s)]),a("，刷新一下网页，按F12或直接打开开发者模式，点击Console/控制台，运行如下代码，执行后即在您的剪切板存储了必应Token")]),b,n("p",null,[n("a",B,[a("登录www.bing.com"),t(s)]),a("，刷新一下网页，按F12或直接打开开发者模式，点击应用程序（Application），在左侧存储中点击Cookies，展开找到"),n("a",x,[a("https://www.bing.com"),t(s)]),a(" 项，在右侧列表Name项下找到"),y,a("，"),E,a("的value即为必应Token")]),w,T,n("p",null,[t(o,{to:"/tutorial/models/xinghuo.html#%E6%96%B9%E5%BC%8F%E4%BA%8C-%E4%BD%BF%E7%94%A8cookie-editor%E6%8F%92%E4%BB%B6%E8%8E%B7%E5%8F%96"},{default:c(()=>[a("获取插件请看星火篇")]),_:1}),a("，访问必应登录你的账号，点击右上角插件，找到"),v,a(",它的Value就是必应Token")]),C,F,n("p",null,[t(o,{to:"/tutorial/models/xinghuo.html#%E6%96%B9%E5%BC%8F%E4%B8%89-%E6%89%8B%E6%9C%BA%E8%8E%B7%E5%8F%96"},{default:c(()=>[a("Via浏览器下载链接请看星火篇")]),_:1})]),S])}const A=p(_,[["render",j],["__file","bing.html.vue"]]);export{A as default};
