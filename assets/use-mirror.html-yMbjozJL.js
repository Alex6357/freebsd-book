import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as e,f as i,d as a,e as l,a as t,r as p,o}from"./app-CaD2MaUo.js";const u={};function c(h,s){const n=p("RouteLink");return o(),r("div",null,[s[12]||(s[12]=e("h1",{id:"第-1-节-换源",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#第-1-节-换源"},[e("span",null,"第 1 节 换源")])],-1)),s[13]||(s[13]=e("p",null,"由于 FreeBSD 官方的镜像源都设在大陆之外，使用官方源的网速可能会很慢。因此我们可能要手动使用一些非官方源。但这些非官方源可能常常出现一些问题，所以如果不是网速真的很慢，尽量使用官方源。如果使用镜像源出现了什么问题，也可以切换官方源重新尝试一下。",-1)),s[14]||(s[14]=e("h2",{id:"pkg-换源",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pkg-换源"},[e("span",null,[e("code",null,"pkg"),i(" 换源")])])],-1)),e("p",null,[s[1]||(s[1]=i("可以先参考 ")),a(n,{to:"/pkg-and-ports/pkg.html"},{default:l(()=>s[0]||(s[0]=[e("code",null,"pkg",-1)])),_:1}),s[2]||(s[2]=i("。"))]),s[15]||(s[15]=t(`<p>创建并编辑用户级 <code>pkg</code> 配置文件：</p><div class="language-shellsession line-numbers-mode" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">root@freebsd:~ # mkdir -p /usr/local/etc/pkg/repos</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">root@freebsd:~ # ee /usr/local/etc/pkg/repos/mirrors.conf</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>选择一项写入：</p><h3 id="网易镜像站" tabindex="-1"><a class="header-anchor" href="#网易镜像站"><span>网易镜像站</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span>163: {</span></span>
<span class="line"><span>url: &quot;https://mirrors.163.com/freebsd-pkg/\${ABI}/quarterly&quot;,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>FreeBSD: { enabled: no }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ustc-镜像站" tabindex="-1"><a class="header-anchor" href="#ustc-镜像站"><span>USTC 镜像站</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span>USTC: {</span></span>
<span class="line"><span>url: &quot;https://mirrors.ustc.edu.cn/freebsd-pkg/\${ABI}/quarterly&quot;,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>FreeBSD: { enabled: no }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>换源完成后使用 <code>pkg update</code> 更新。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p><code>pkg</code> 源分为 <code>quarterly</code> 源和 <code>latest</code> 源。一般情况下，<code>RELEASE</code> 系统使用 <code>quarterly</code> 源，<code>STABLE</code> 和 <code>CURRENT</code> 系统使用 <code>latest</code> 源。可以先查看 <code>/etc/pkg/FreeBSD.conf</code> 文件确认自己默认使用的是什么源。</p><p><code>quarterly</code> 和 <code>latest</code> 源的区别是：<code>quarterly</code> 源更新较慢，一般较稳定；<code>latest</code> 源则是最新的。</p><p>需要注意 <code>CURRENT</code> 系统只有 <code>latest</code> 源，<code>STABLE</code> 和 <code>RELEASE</code> 则两个源都有。不过一般不建议切换，可能有一定的兼容问题。</p></div><h2 id="ports-换源" tabindex="-1"><a class="header-anchor" href="#ports-换源"><span><code>ports</code> 换源</span></a></h2>`,10)),e("p",null,[s[4]||(s[4]=i("可以先参考 ")),a(n,{to:"/pkg-and-ports/ports.html"},{default:l(()=>s[3]||(s[3]=[e("code",null,"ports",-1)])),_:1}),s[5]||(s[5]=i("。"))]),s[16]||(s[16]=e("p",null,[e("code",null,"ports"),i(" 换源分为两部分，这部分的获取 "),e("code",null,"ports"),i(" 树的源，和下一部分的 "),e("code",null,"distfiles"),i(" 源。")],-1)),e("p",null,[s[7]||(s[7]=i("获取 ")),s[8]||(s[8]=e("code",null,"ports",-1)),s[9]||(s[9]=i(" 树，使用 ")),a(n,{to:"/pkg-and-ports/gitup.html"},{default:l(()=>s[6]||(s[6]=[e("code",null,"gitup",-1)])),_:1}),s[10]||(s[10]=i(" 可能更简单。同时请参考 ")),s[11]||(s[11]=e("a",{href:"#gitup-%E6%8D%A2%E6%BA%90"},[e("code",null,"gitup"),i(" 换源")],-1))]),s[17]||(s[17]=t(`<h3 id="通过-git-获取" tabindex="-1"><a class="header-anchor" href="#通过-git-获取"><span>通过 <code>git</code> 获取</span></a></h3><p>首先安装 <code>git</code>：</p><div class="language-shellsession line-numbers-mode" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">root@freebsd:~ # pkg install git</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>然后选择一个源获取 <code>ports</code> 树：</p><h4 id="使用-ustc-git-源" tabindex="-1"><a class="header-anchor" href="#使用-ustc-git-源"><span>使用 USTC git 源</span></a></h4><div class="language-shellsession line-numbers-mode" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">root@freebsd:~ # git clone --depth 1 https://mirrors.ustc.edu.cn/freebsd-ports/ports.git /usr/ports</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="使用-nju-git-源" tabindex="-1"><a class="header-anchor" href="#使用-nju-git-源"><span>使用 NJU git 源</span></a></h4><div class="language-shellsession line-numbers-mode" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">root@freebsd:~ # git clone --depth 1 https://mirrors.nju.edu.cn/freebsd-ports/ports.git /usr/ports</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="通过压缩包获取" tabindex="-1"><a class="header-anchor" href="#通过压缩包获取"><span>通过压缩包获取</span></a></h3><p>选择一个镜像源，下载压缩包：</p><h4 id="使用-ustc-源" tabindex="-1"><a class="header-anchor" href="#使用-ustc-源"><span>使用 USTC 源</span></a></h4><div class="language-shellsession line-numbers-mode" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">root@freebsd:~ # fetch https://mirrors.ustc.edu.cn/freebsd-ports/ports.tar.gz</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="使用-nju-源" tabindex="-1"><a class="header-anchor" href="#使用-nju-源"><span>使用 NJU 源</span></a></h4><div class="language-shellsession line-numbers-mode" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">root@freebsd:~ # fetch https://mirrors.nju.edu.cn/freebsd-ports/ports.tar.gz</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>然后解压：</p><div class="language-shellsession line-numbers-mode" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">root@freebsd:~ # tar -xvf ports.tar.gz -C /usr/ports</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">root@freebsd:~ # rm ports.tar.gz  </span><span style="--shiki-light:#008000;--shiki-dark:#6A9955;"># 可选，删除解压完成的压缩包</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gitup-换源" tabindex="-1"><a class="header-anchor" href="#gitup-换源"><span><code>gitup</code> 换源</span></a></h2><p>以 <code>14.1-RELEASE</code> 为例：</p><p>首先要安装 <code>gitup</code>：</p><div class="language-shellsession line-numbers-mode" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">root@freebsd:~ # pkg install gitup</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>复制一份配置文件示例并编辑：</p><div class="language-shellsession line-numbers-mode" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">root@freebsd:~ # cp /usr/local/etc/gitup.conf.sample /usr/local/etc/gitup.conf</span></span>
<span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">root@freebsd:~ # ee /usr/local/etc/gitup.conf</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>需要改动以下四处内容：</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span># $FreeBSD$</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># Default configuration options for gitup.conf.</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>        &quot;defaults&quot; : {</span></span>
<span class="line"><span>                &quot;host&quot;           : &quot;git.freebsd.org&quot;,</span></span>
<span class="line"><span>                &quot;port&quot;           : 443,</span></span>
<span class="line"><span>#               &quot;proxy_host&quot;     : &quot;&quot;,</span></span>
<span class="line"><span>#               &quot;proxy_port&quot;     : 0,</span></span>
<span class="line"><span>#               &quot;proxy_username&quot; : &quot;&quot;,</span></span>
<span class="line"><span>#               &quot;proxy_password&quot; : &quot;&quot;,</span></span>
<span class="line"><span>#               &quot;source_address&quot; : &quot;&quot;,</span></span>
<span class="line"><span>                &quot;low_memory&quot;     : false,</span></span>
<span class="line"><span>                &quot;display_depth&quot;  : 0,</span></span>
<span class="line"><span>                &quot;verbosity&quot;      : 1,</span></span>
<span class="line"><span>                &quot;work_directory&quot; : &quot;/var/db/gitup&quot;,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &quot;ports&quot; : {</span></span>
<span class="line"><span>                &quot;host&quot;             : &quot;mirrors.ustc.edu.cn&quot;,  # 1 增加此行，也可以用 mirrors.nju.edu.cn</span></span>
<span class="line"><span>                &quot;repository_path&quot;  : &quot;/freebsd-ports/ports.git&quot;,  # 2 更改此行</span></span>
<span class="line"><span>                &quot;branch&quot;           : &quot;main&quot;,</span></span>
<span class="line"><span>                &quot;target_directory&quot; : &quot;/usr/ports&quot;,</span></span>
<span class="line"><span>                &quot;ignores&quot;          : [],</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &quot;quarterly&quot; : {</span></span>
<span class="line"><span>                &quot;host&quot;             : &quot;mirrors.ustc.edu.cn&quot;,  # 3 增加此行，也可以用 mirrors.nju.edu.cn</span></span>
<span class="line"><span>                &quot;repository_path&quot;  : &quot;/freebsd-ports/ports.git&quot;,  # 4 更改此行</span></span>
<span class="line"><span>                &quot;branch&quot;           : &quot;quarterly&quot;,</span></span>
<span class="line"><span>                &quot;target_directory&quot; : &quot;/usr/ports&quot;,</span></span>
<span class="line"><span>                &quot;ignores&quot;          : [],</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &quot;release&quot; : {</span></span>
<span class="line"><span>                &quot;repository_path&quot;  : &quot;/src.git&quot;,</span></span>
<span class="line"><span>                &quot;branch&quot;           : &quot;releng/13.2&quot;,</span></span>
<span class="line"><span>                &quot;target_directory&quot; : &quot;/usr/src&quot;,</span></span>
<span class="line"><span>                &quot;ignores&quot;          : [</span></span>
<span class="line"><span>                        &quot;sys/[^\\/]+/conf&quot;,</span></span>
<span class="line"><span>                ],</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &quot;stable&quot; : {</span></span>
<span class="line"><span>                &quot;repository_path&quot;  : &quot;/src.git&quot;,</span></span>
<span class="line"><span>                &quot;branch&quot;           : &quot;stable/14&quot;,</span></span>
<span class="line"><span>                &quot;target_directory&quot; : &quot;/usr/src&quot;,</span></span>
<span class="line"><span>                &quot;ignores&quot;          : [</span></span>
<span class="line"><span>                        &quot;sys/[^\\/]+/conf&quot;,</span></span>
<span class="line"><span>                ],</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &quot;current&quot; : {</span></span>
<span class="line"><span>                &quot;repository_path&quot;  : &quot;/src.git&quot;,</span></span>
<span class="line"><span>                &quot;branch&quot;           : &quot;main&quot;,</span></span>
<span class="line"><span>                &quot;target_directory&quot; : &quot;/usr/src&quot;,</span></span>
<span class="line"><span>                &quot;ignores&quot;          : [</span></span>
<span class="line"><span>                        &quot;sys/[^\\/]+/conf&quot;,</span></span>
<span class="line"><span>                ],</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之后可以以 <code>root</code> 身份执行 <code>gitup ports</code> 获取最新 <code>ports</code>，或 <code>gitup quarterly</code> 获取季度 <code>ports</code>。</p><p>另外，由于 FreeBSD src 暂时没有源，所以 <code>gitup</code> 配置中保留了官方源。</p><div class="hint-container warning"><p class="hint-container-title">警告</p><p>截止到本文写成时间 2024/07/18，USTC 源存在<a href="https://github.com/ustclug/discussions/issues/464" target="_blank" rel="noopener noreferrer">问题</a>，请使用 NJU 源。如果问题解决会更新本文。</p></div><h2 id="distfiles-换源" tabindex="-1"><a class="header-anchor" href="#distfiles-换源"><span><code>distfiles</code> 换源</span></a></h2><p><code>distfiles</code> 指的是实际使用 <code>ports</code> 时需要下载的内容。相当于 <code>ports</code> 是你的购物清单，<code>distfiles</code> 是你要买的商品。</p><p>需要选择一个镜像源并写入 <code>/etc/make.conf</code>：</p><div class="language-shellsession line-numbers-mode" data-highlighter="shiki" data-ext="shellsession" data-title="shellsession" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span style="--shiki-light:#000000;--shiki-dark:#D4D4D4;">root@freebsd:~ # ee /etc/make.conf</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="使用-ustc-distfiles-源" tabindex="-1"><a class="header-anchor" href="#使用-ustc-distfiles-源"><span>使用 USTC <code>distfiles</code> 源</span></a></h3><p>另起一行写入：</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span>MASTER_SITE_OVERRIDE?=http://mirrors.ustc.edu.cn/freebsd-ports/distfiles/\${DIST_SUBDIR}/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="使用-nju-distfiles-源" tabindex="-1"><a class="header-anchor" href="#使用-nju-distfiles-源"><span>使用 NJU <code>distfiles</code> 源</span></a></h3><p>另起一行写入：</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#000000;--shiki-dark:#D4D4D4;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes light-plus dark-plus vp-code"><code><span class="line"><span>MASTER_SITE_OVERRIDE?=http://mirrors.nju.edu.cn/freebsd-ports/distfiles/\${DIST_SUBDIR}/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,37))])}const k=d(u,[["render",c],["__file","use-mirror.html.vue"]]),b=JSON.parse('{"path":"/pkg-and-ports/use-mirror.html","title":"第 1 节 换源","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"pkg 换源","slug":"pkg-换源","link":"#pkg-换源","children":[{"level":3,"title":"网易镜像站","slug":"网易镜像站","link":"#网易镜像站","children":[]},{"level":3,"title":"USTC 镜像站","slug":"ustc-镜像站","link":"#ustc-镜像站","children":[]}]},{"level":2,"title":"ports 换源","slug":"ports-换源","link":"#ports-换源","children":[{"level":3,"title":"通过 git 获取","slug":"通过-git-获取","link":"#通过-git-获取","children":[{"level":4,"title":"使用 USTC git 源","slug":"使用-ustc-git-源","link":"#使用-ustc-git-源","children":[]},{"level":4,"title":"使用 NJU git 源","slug":"使用-nju-git-源","link":"#使用-nju-git-源","children":[]}]},{"level":3,"title":"通过压缩包获取","slug":"通过压缩包获取","link":"#通过压缩包获取","children":[{"level":4,"title":"使用 USTC 源","slug":"使用-ustc-源","link":"#使用-ustc-源","children":[]},{"level":4,"title":"使用 NJU 源","slug":"使用-nju-源","link":"#使用-nju-源","children":[]}]}]},{"level":2,"title":"gitup 换源","slug":"gitup-换源","link":"#gitup-换源","children":[]},{"level":2,"title":"distfiles 换源","slug":"distfiles-换源","link":"#distfiles-换源","children":[{"level":3,"title":"使用 USTC distfiles 源","slug":"使用-ustc-distfiles-源","link":"#使用-ustc-distfiles-源","children":[]},{"level":3,"title":"使用 NJU distfiles 源","slug":"使用-nju-distfiles-源","link":"#使用-nju-distfiles-源","children":[]}]}],"git":{"createdTime":1721296902000,"updatedTime":1721296902000,"contributors":[{"name":"Alex6357","email":"73743056+Alex6357@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.77,"words":832},"filePathRelative":"pkg-and-ports/use-mirror.md","localizedDate":"2024年7月18日","excerpt":"\\n<p>由于 FreeBSD 官方的镜像源都设在大陆之外，使用官方源的网速可能会很慢。因此我们可能要手动使用一些非官方源。但这些非官方源可能常常出现一些问题，所以如果不是网速真的很慢，尽量使用官方源。如果使用镜像源出现了什么问题，也可以切换官方源重新尝试一下。</p>\\n<h2><code>pkg</code> 换源</h2>\\n<p>可以先参考 <a href=\\"/freebsd-book/pkg-and-ports/pkg.html\\" target=\\"_blank\\"><code>pkg</code></a>。</p>\\n<p>创建并编辑用户级 <code>pkg</code> 配置文件：</p>"}');export{k as comp,b as data};