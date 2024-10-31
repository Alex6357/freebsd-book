import{_ as o,a as i,b as a,c as r,d as c,e as n,f as s,g as l,h as p,i as g,j as f,k as h,l as b,m as u,n as m}from"./13-14-manual-configuration-CVYlzVgh.js";import{_}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as S,a as y,o as F}from"./app-CaD2MaUo.js";const D="/freebsd-book/assets/14-boot-menu-B4RdsnI4.png",k="/freebsd-book/assets/14-welcone-page-DwE5rxwI.png",x="/freebsd-book/assets/14-set-hostname-BW84a2NG.png",B="/freebsd-book/assets/14-partitioning-g11Mn8ZO.png",z="/freebsd-book/assets/13-14-choose-zfs-disk-Dmwd88z_.png",d="/freebsd-book/assets/14-verify-distribution-BCRyjKw5.png",e="/freebsd-book/assets/14-extract-distribution-BCSyy09h.png",v="/freebsd-book/assets/14-ufs-multi-disks-DW9kkhyd.png",I="/freebsd-book/assets/14-ufs-single-disk-BDgzEqkW.png",P="/freebsd-book/assets/14-ufs-choose-partition-scheme-BUc9t7or.png",U="/freebsd-book/assets/14-ufs-default-partition-B7CSEvb0.png",C="/freebsd-book/assets/14-ufs-confirm-partition-D_38bgo5.png",E="/freebsd-book/assets/14-making-partitions-BUhoVZEO.png",H="/freebsd-book/assets/14-choose-network-interface-DOoKHgcF.png",w="/freebsd-book/assets/14-setup-ipv4-B5RcdxSH.png",Z="/freebsd-book/assets/14-setup-dhcp-CpAivseH.png",R="/freebsd-book/assets/14-acquire-dhcp-Cpl1GvyB.png",L="/freebsd-book/assets/14-set-ipv6-DRRnSTi-.png",A="/freebsd-book/assets/14-set-slaac-YJ2L_IW0.png",T="/freebsd-book/assets/14-acquire-slaac-DLvTa_fl.png",N="/freebsd-book/assets/14-set-dns-DIbk_70D.png",O="/freebsd-book/assets/14-time-zone-1-Dpb8JoMQ.png",M="/freebsd-book/assets/14-time-zone-2-DLzBL1Y8.png",W="/freebsd-book/assets/14-time-zone-3-gDHlCINP.png",K="/freebsd-book/assets/14-time-zone-4-Bd97Twcg.png",G="/freebsd-book/assets/14-set-date-CNsn9Lu9.png",V="/freebsd-book/assets/14-set-time-CMv7fS03.png",J="/freebsd-book/assets/14-service-configuration-CJR6L3UJ.png",j="/freebsd-book/assets/14-security-options-C7Yw1nQq.png",q="/freebsd-book/assets/14-add-user-7VDOF7Fp.png",Y="/freebsd-book/assets/14-reboot-JF0yhIsz.png",Q={};function X($,t){return F(),S("div",null,t[0]||(t[0]=[y('<h1 id="第-3-节-安装-freebsd-14" tabindex="-1"><a class="header-anchor" href="#第-3-节-安装-freebsd-14"><span>第 3 节 安装 FreeBSD 14</span></a></h1><p>本章以 <code>FreeBSD-14.0-RELEASE-amd64-disc1.iso</code> 为例演示 FreeBSD 14 的安装流程。</p><h2 id="freebsd-启动菜单" tabindex="-1"><a class="header-anchor" href="#freebsd-启动菜单"><span>FreeBSD 启动菜单</span></a></h2><figure><img src="'+D+'" alt="FreeBSD 启动菜单" tabindex="0" loading="lazy"><figcaption>FreeBSD 启动菜单</figcaption></figure><p>默认等待十秒钟之后会执行默认选项 <code>Boot Installer</code>。期间可以按空格键打断倒计时，也可以用数字键、回车、和突出显示的按键快速执行选项。</p><table><thead><tr><th>选项</th><th>说明</th><th>快捷键</th></tr></thead><tbody><tr><td><code>Boot Installer</code></td><td>启动进多用户模式。默认的启动选项。</td><td><code>1</code>、<code>B</code>、<code>Enter</code></td></tr><tr><td><code>Boot Single user</code></td><td>启动进单用户模式。会以 <code>root</code> 身份直接登录到系统，且不会执行部分启动流程。一般在配置出错导致无法启动或忘记 <code>root</code> 密码而进行恢复时使用。</td><td><code>2</code>、<code>S</code></td></tr><tr><td><code>Escape to loader prompt</code></td><td>退回到 loader 的提示符。可以进行部分启动的配置。一般在启动环境配置错误导致单用户模式也无法启动时使用。</td><td><code>3</code>、<code>Esc</code></td></tr><tr><td><code>Reboot</code></td><td>重启</td><td><code>4</code>、<code>R</code></td></tr><tr><td><code>Cons:</code></td><td>允许通过video、serial、Dual (serial primary)或Dual (Video primary)继续安装。一般用不到。</td><td><code>5</code>、<code>C</code></td></tr><tr><td><code>Kernel:</code></td><td>在启动根目录中含有多个内核时进行选择。</td><td><code>6</code>、<code>K</code></td></tr><tr><td><code>Boot Options</code></td><td>进入启动选项菜单。</td><td><code>7</code>、<code>O</code></td></tr></tbody></table><h3 id="启动选项菜单" tabindex="-1"><a class="header-anchor" href="#启动选项菜单"><span>启动选项菜单</span></a></h3><p>如果在启动菜单时按 <code>7</code> 或 <code>O</code>，可以进入启动选项菜单。</p><figure><img src="'+o+'" alt="启动选项菜单" tabindex="0" loading="lazy"><figcaption>启动选项菜单</figcaption></figure><table><thead><tr><th>选项</th><th>说明</th><th>快捷键</th></tr></thead><tbody><tr><td><code>Back to main menu</code></td><td>返回到主菜单。</td><td><code>1</code>、<code>Backspace</code></td></tr><tr><td><code>Load System Defaults</code></td><td>恢复默认设置。</td><td><code>2</code>、<code>D</code></td></tr><tr><td><code>Save Mode</code></td><td>安全模式。如果系统无法启动可以尝试开启此选项。</td><td><code>3</code>、<code>M</code></td></tr><tr><td><code>Single user</code></td><td>单用户模式。打开后与主菜单的 <code>Boot Single user</code> 效果相同。</td><td><code>4</code>、<code>S</code></td></tr><tr><td><code>Verbose</code></td><td>啰嗦模式。启动时显示更多输出。</td><td><code>5</code>、<code>V</code></td></tr></tbody></table><p>一般我们不需要这些选项，直接等待十秒或回车正常启动系统即可。</p><h2 id="欢迎菜单" tabindex="-1"><a class="header-anchor" href="#欢迎菜单"><span>欢迎菜单</span></a></h2><p>在正常启动后，FreeBSD 会显示一个欢迎菜单。</p><figure><img src="'+k+'" alt="欢迎菜单" tabindex="0" loading="lazy"><figcaption>欢迎菜单</figcaption></figure><p>左右键可以选择，回车确认，也可以使用高亮的快捷键。</p><table><thead><tr><th>选项</th><th>解释</th><th>快捷键</th></tr></thead><tbody><tr><td><code>Install</code></td><td>进入正常的安装流程，即 <code>bsdinstall</code>。</td><td><code>I</code></td></tr><tr><td><code>Shell</code></td><td>进入一个命令行，可以在安装之前进行部分配置。</td><td><code>S</code></td></tr><tr><td><code>Live CD</code></td><td>进入 FreeBSD 的 Live 环境，可以简单体验整个 FreeBSD 系统。</td><td><code>L</code></td></tr></tbody></table><p>我们直接回车开始安装。</p><h2 id="开始-bsdinstall" tabindex="-1"><a class="header-anchor" href="#开始-bsdinstall"><span>开始 bsdinstall</span></a></h2><h3 id="选择键盘布局" tabindex="-1"><a class="header-anchor" href="#选择键盘布局"><span>选择键盘布局</span></a></h3><p>在快速加载键盘布局后 <s>（快到我都没法截图）</s> ，会进入键盘布局选择菜单。直接回车选择默认的 “US” 布局。<s>不会有人用其他的布局吧？不会吧不会吧？</s></p><figure><img src="'+i+'" alt="选择键盘布局" tabindex="0" loading="lazy"><figcaption>选择键盘布局</figcaption></figure><h3 id="设置主机名称" tabindex="-1"><a class="header-anchor" href="#设置主机名称"><span>设置主机名称</span></a></h3><p>确认键盘布局后进入主机名称设置界面。在文本框内输入主机名后回车。</p><figure><img src="'+x+'" alt="设置主机名称" tabindex="0" loading="lazy"><figcaption>设置主机名称</figcaption></figure><div class="hint-container caution"><p class="hint-container-title">警告</p><p>必须设置一个主机名称！否则以后的桌面会出现无法启动的问题！</p></div><h3 id="选择组件" tabindex="-1"><a class="header-anchor" href="#选择组件"><span>选择组件</span></a></h3><p>设置主机名称后进入组件选择界面。用上下键移动，空格键选择或取消选择，回车键确认。</p><figure><img src="'+a+'" alt="选择组件" tabindex="0" loading="lazy"><figcaption>选择组件</figcaption></figure><table><thead><tr><th>组件</th><th>内容</th></tr></thead><tbody><tr><td><code>base-dbg</code></td><td>启用调试符号的系统工具</td></tr><tr><td><code>kernel-dbg</code></td><td>启用调试符号的内核和模块</td></tr><tr><td><code>lib32-dbg</code></td><td>启用调试符号的 32 位兼容库</td></tr><tr><td><code>lib32</code></td><td>在 64 位系统运行 32 位程序的兼容库</td></tr><tr><td><code>ports</code></td><td>FreeBSD 的 ports 树。见 <a href="404">FreeBSD ports</a></td></tr><tr><td><code>src</code></td><td>FreeBSD 的源代码</td></tr><tr><td><code>tests</code></td><td>FreeBSD 测试套件</td></tr></tbody></table><p>一般建议是全不选或只选 <code>src</code> 。这些组件都可以后天安装或获取。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p><code>disc1</code> 中并不包含 <code>base-dbg</code> 和 <code>lib32-dbg</code> 两个组件。如果你选择了这两个组件，则会部分进行网络安装。如果你一定要安装这两个组件，请参照<a href="404">从网络安装 FreeBSD</a> 的内容或使用 <code>dvd1</code>。</p></div><h3 id="进行分区" tabindex="-1"><a class="header-anchor" href="#进行分区"><span>进行分区</span></a></h3><p>确认组件后进入分区部分。</p><figure><img src="'+B+'" alt="分区设置" tabindex="0" loading="lazy"><figcaption>分区设置</figcaption></figure><table><thead><tr><th>选项</th><th>解释</th></tr></thead><tbody><tr><td><code>Auto (ZFS)</code></td><td>使用 ZFS 文件系统</td></tr><tr><td><code>Auto (UFS)</code></td><td>使用 UFS 文件系统</td></tr><tr><td><code>Manual</code></td><td>用菜单自定义分区</td></tr><tr><td><code>Shell</code></td><td>打开一个命令行用于手动分区</td></tr></tbody></table><p>4G 以上内存建议使用 ZFS，4G 以下内存可以考虑使用 UFS，或者手动对 ZFS 进行优化。见 <a href="404">ZFS 调优</a>。</p><p>无论 ZFS 或 UFS 都将占用整块硬盘。如果想用手动分区可以参考<a href="404">双系统安装 FreeBSD</a>。</p><h4 id="使用-zfs" tabindex="-1"><a class="header-anchor" href="#使用-zfs"><span>使用 ZFS</span></a></h4><p>选择文件系统后会探测现有硬盘设备 <s>（又快到我没截到图）</s>。随后进入 ZFS 配置界面。</p><figure><img src="'+r+'" alt="ZFS 配置界面" tabindex="0" loading="lazy"><figcaption>ZFS 配置界面</figcaption></figure><table><thead><tr><th>选项</th><th>解释</th></tr></thead><tbody><tr><td><code>Install</code></td><td>确认选项并进行安装</td></tr><tr><td><code>Pool Type/Disks</code></td><td>选择 ZFS 使用的池类型和硬盘</td></tr><tr><td><code>Rescan Devices</code></td><td>重新扫描硬盘设备</td></tr><tr><td><code>Disk Info</code></td><td>查看某个硬盘的信息，用于区分硬盘</td></tr><tr><td><code>Pool Name</code></td><td>ZFS 池的名称</td></tr><tr><td><code>Force 4K Sectors?</code></td><td>强制 4K 对齐</td></tr><tr><td><code>Encrypt Disks?</code></td><td>是否加密硬盘</td></tr><tr><td><code>Partition Scheme</code></td><td>分区表类型，也影响启动。</td></tr><tr><td><code>Swap Size</code></td><td>swap 交换分区大小</td></tr><tr><td><code>Mirror Swap?</code></td><td>是否镜像 swap</td></tr><tr><td><code>Encrypt Swap?</code></td><td>是否加密 swap</td></tr></tbody></table><p>一般安装的时候我们保持默认设置即可，或者如果你的内存不够而硬盘充足则可以稍微扩大交换分区（交换分区类似 Windows 的虚拟内存，可以在物理内存不够时作为补充）。不过我一般会将交换分区大小设为 0，之后<a href="404">用一个 ZFS 卷作为交换分区</a></p><p>选择 <code>Pool Type/Disks</code>，或者如果你没有选择过这个选项而直接选择了 <code>Install</code>，都会进入硬盘选择。</p><figure><img src="'+c+'" alt="ZFS 池与硬盘选择" tabindex="0" loading="lazy"><figcaption>ZFS 池与硬盘选择</figcaption></figure><table><thead><tr><th>选项</th><th>解释</th></tr></thead><tbody><tr><td><code>stripe</code></td><td>选择一块或多块硬盘合并为一个池。只要坏一块硬盘则整个池崩溃，数据丢失。</td></tr><tr><td><code>mirror</code></td><td>选择多块硬盘互为镜像，这样只要有一块硬盘能够读取池就不会崩溃。</td></tr><tr><td><code>raid10</code></td><td>选择偶数多个硬盘，每两个硬盘互为镜像，合并为一个池，每组硬盘可以坏一块。但某组两块硬盘都损坏则池崩溃。</td></tr><tr><td><code>raidz1</code></td><td>选择三块及以上硬盘，通过冗余校验数据可以保证任意一块硬盘损坏池不会崩溃。</td></tr><tr><td><code>raidz2</code></td><td>选择四块及以上硬盘，可以保证任意坏两块盘池不会崩溃。</td></tr><tr><td><code>raidz3</code></td><td>选择五块及以上硬盘，可以保证任意坏三块盘池不会崩溃。</td></tr></tbody></table><p>正常情况下我们只用一块盘，选择 <code>stripe</code>。如果你有需求则按需选择。</p><figure><img src="'+z+'" alt="选择硬盘" tabindex="0" loading="lazy"><figcaption>选择硬盘</figcaption></figure><p>选择后开始勾选硬盘。这里要看好到底是哪块硬盘，建议提前用 <code>Disk Info</code> 看好并记下来。这里我只有一块硬盘，用空格键选中，回车确认。随后选择 <code>Install</code>。会弹出是否使用硬盘的最终确认。</p><figure><img src="'+n+'" alt="最终确认是否使用硬盘" tabindex="0" loading="lazy"><figcaption>最终确认是否使用硬盘</figcaption></figure><p>左方向键键选到 <code>YES</code>，回车确认。随后会开始校验和安装。</p><figure><img src="'+d+'" alt="正在校验组件" tabindex="0" loading="lazy"><figcaption>正在校验组件</figcaption></figure><figure><img src="'+e+'" alt="正在解压组件" tabindex="0" loading="lazy"><figcaption>正在解压组件</figcaption></figure><h4 id="使用-ufs" tabindex="-1"><a class="header-anchor" href="#使用-ufs"><span>使用 UFS</span></a></h4><p>选择 UFS，会开始 UFS 分区。</p><p>如果你有多块硬盘，会在这里显示出来。</p><figure><img src="'+v+'" alt="UFS 有多块硬盘" tabindex="0" loading="lazy"><figcaption>UFS 有多块硬盘</figcaption></figure><p>如果你只有一块硬盘，会直接询问是否使用整个硬盘或进行分区。多块硬盘在选择之后也会出现这个提示。</p><figure><img src="'+I+'" alt="UFS 单硬盘" tabindex="0" loading="lazy"><figcaption>UFS 单硬盘</figcaption></figure><p>选择 <code>Partition</code> 可以手动调整分区，选择 <code>Entire Disk</code> 会直接使用整个硬盘。两个选项都会询问使用什么分区表。</p><figure><img src="'+P+'" alt="UFS 选择分区表" tabindex="0" loading="lazy"><figcaption>UFS 选择分区表</figcaption></figure><table><thead><tr><th>选项</th><th>解释</th></tr></thead><tbody><tr><td><code>APM</code></td><td>Apple 的分区表</td></tr><tr><td><code>BSD</code></td><td>BSD 的分区表</td></tr><tr><td><code>GPT</code></td><td>GUID 分区表</td></tr><tr><td><code>MBR</code></td><td>MBR 分区表</td></tr></tbody></table><p>一般我们直接选择 GPT。就算是 legacy 也可以启动。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>+如果你想让 UFS 文件系统的 FreeBSD 既可以 legacy 启动，也可以 UEFI 启动，则需要特殊的配置。正常安装只支持一种，即如果你以 legacy 启动安装盘，则仅支持 legacy 启动，如果以 UEFI 启动安装盘，则仅支持 UEFI 启动。</p></div><p>之后会来到分区界面，并显示空余空间的默认分区方式。</p><figure><img src="'+U+'" alt="UFS 默认分区" tabindex="0" loading="lazy"><figcaption>UFS 默认分区</figcaption></figure><p><code>Finish</code> 确认当前布局。<code>Auto</code> 重新进行默认分区。其他选项可以调整当前分区。这里直接选择 <code>Finish</code>。会弹出确认窗口。选 <code>Commit</code> 确认。如果你之前选择了 <code>Entire Disk</code>，则会直接弹出这个窗口。</p><figure><img src="'+C+'" alt="UFS 确认分区" tabindex="0" loading="lazy"><figcaption>UFS 确认分区</figcaption></figure><p>之后即开始分区和安装过程。<s>（是的 14 的分区过程慢了点我截到了）</s></p><figure><img src="'+E+'" alt="正在分区" tabindex="0" loading="lazy"><figcaption>正在分区</figcaption></figure><figure><img src="'+d+'" alt="正在校验组件" tabindex="0" loading="lazy"><figcaption>正在校验组件</figcaption></figure><figure><img src="'+e+'" alt="正在解压组件" tabindex="0" loading="lazy"><figcaption>正在解压组件</figcaption></figure><h3 id="设置-root-密码" tabindex="-1"><a class="header-anchor" href="#设置-root-密码"><span>设置 <code>root</code> 密码</span></a></h3><p>安装完成后会更改 <code>root</code> 的密码。要输入两遍密码，且密码不会显示。</p><figure><img src="'+s+'" alt="更改  密码" tabindex="0" loading="lazy"><figcaption>更改 <code>root</code> 密码</figcaption></figure><h3 id="网络设置" tabindex="-1"><a class="header-anchor" href="#网络设置"><span>网络设置</span></a></h3><p>更改 <code>root</code> 密码后，如果 FreeBSD 检测到了网络设备则会列出供选择。</p><figure><img src="'+H+'" alt="选择网络设备" tabindex="0" loading="lazy"><figcaption>选择网络设备</figcaption></figure><p>如果选择的是无线网卡，则会开始扫描无线网络。</p><figure><img src="'+l+'" alt="扫描无限网络（图片来自 FreeBSD Handbook）" tabindex="0" loading="lazy"><figcaption>扫描无线网络（图片来自 FreeBSD Handbook）</figcaption></figure><p>之后会列出扫描到的网络。</p><figure><img src="'+p+'" alt="扫描到的无线网络（图片来自 FreeBSD Handbook）" tabindex="0" loading="lazy"><figcaption>扫描到的无线网络（图片来自 FreeBSD Handbook）</figcaption></figure><p>选择你的 WiFi，会让你输入 WiFi 密码。</p><figure><img src="'+g+'" alt="输入 WiFi 密码（图片来自 FreeBSD Handbook）" tabindex="0" loading="lazy"><figcaption>输入 WiFi 密码（图片来自 FreeBSD Handbook）</figcaption></figure><p>连接到 WiFi 后，或是选择了有线网卡，会询问是否配置 IPv4。一般选择是。</p><figure><img src="'+w+'" alt="设置 IPv4" tabindex="0" loading="lazy"><figcaption>设置 IPv4</figcaption></figure><p>选择是，会询问是否配置 DHCP。一般也选是。如果没有 DHCP 或想用静态 IP，则选否。</p><figure><img src="'+Z+'" alt="配置 DHCP" tabindex="0" loading="lazy"><figcaption>配置 DHCP</figcaption></figure><p>选择是，则会开始请求 DHCP。</p><figure><img src="'+R+'" alt="请求 DHCP" tabindex="0" loading="lazy"><figcaption>请求 DHCP</figcaption></figure><p>选择否，则手动输入 IP。</p><figure><img src="'+f+'" alt="手动设置 IPv4（图片来自 FreeBSD Handbook）" tabindex="0" loading="lazy"><figcaption>手动设置 IPv4（图片来自 FreeBSD Handbook）</figcaption></figure><p>之后会询问是否配置 IPv6，如果你有 IPv6，可以选是，否则选否。如果不知道也可以选否。</p><figure><img src="'+L+'" alt="设置 IPv6" tabindex="0" loading="lazy"><figcaption>设置 IPv6</figcaption></figure><p>如果选择是，同样会询问是否自动获取 IPv6，也可以手动配置。</p><figure><img src="'+A+'" alt="是否自动获取 IPv6 地址" tabindex="0" loading="lazy"><figcaption>是否自动获取 IPv6 地址</figcaption></figure><figure><img src="'+T+'" alt="自动获取 IPv6 地址" tabindex="0" loading="lazy"><figcaption>自动获取 IPv6 地址</figcaption></figure><figure><img src="'+h+'" alt="手动配置 IPv6 地址（图片来自 FreeBSD Handbook）" tabindex="0" loading="lazy"><figcaption>手动配置 IPv6 地址（图片来自 FreeBSD Handbook）</figcaption></figure><p>配置完成后，会进入 DNS 配置。如果使用 DHCP 或 SLAAC，则可以直接回车确认。否则可以手动输入 DNS。</p><figure><img src="'+N+'" alt="配置 DNS" tabindex="0" loading="lazy"><figcaption>配置 DNS</figcaption></figure><h3 id="时区和时间设置" tabindex="-1"><a class="header-anchor" href="#时区和时间设置"><span>时区和时间设置</span></a></h3><p>网络配置后会进入时区和时间设置。根据所在地时区进行选择。例如中国的大部分地区需要选择 <code>Asia</code> <code>China</code> <code>Beijing Time</code>。</p><figure><img src="'+O+'" alt="时区选择" tabindex="0" loading="lazy"><figcaption>时区选择</figcaption></figure><figure><img src="'+M+'" alt="时区选择" tabindex="0" loading="lazy"><figcaption>时区选择</figcaption></figure><figure><img src="'+W+'" alt="时区选择" tabindex="0" loading="lazy"><figcaption>时区选择</figcaption></figure><p><code>CST</code> 即 <code>China Standard Time</code>，中国标准时间。回车确认。</p><figure><img src="'+K+'" alt="时区选择" tabindex="0" loading="lazy"><figcaption>时区选择</figcaption></figure><p>接下来可以设置当前时间。没有问题的话回车跳过两次。</p><figure><img src="'+G+'" alt="日期设置" tabindex="0" loading="lazy"><figcaption>日期设置</figcaption></figure><figure><img src="'+V+'" alt="时间设置" tabindex="0" loading="lazy"><figcaption>时间设置</figcaption></figure><h3 id="服务设置" tabindex="-1"><a class="header-anchor" href="#服务设置"><span>服务设置</span></a></h3><p>下一步是服务设置。</p><figure><img src="'+J+'" alt="服务设置" tabindex="0" loading="lazy"><figcaption>服务设置</figcaption></figure><table><thead><tr><th>服务</th><th>解释</th></tr></thead><tbody><tr><td><code>local_unbound</code></td><td>DNS 本地缓存。一般不开启，配置不对有可能导致无法解析。</td></tr><tr><td><code>sshd</code></td><td>SSH Daemon。想用 ssh 远程连接到 FreeBSD 则要开启。建议打开。</td></tr><tr><td><code>moused</code></td><td>允许在终端状态下使用鼠标。可以开启。</td></tr><tr><td><code>ntpd</code></td><td>可以通过网络同步时间。可以开启。</td></tr><tr><td><code>ntpd_sync_on_start</code></td><td>在系统启动的时候通过网络同步时间。</td></tr><tr><td><code>powerd</code></td><td>自动调整 CPU 频率。虚拟机上一般无法使用，但开启没有影响。物理机可以开启。</td></tr><tr><td><code>dumpdev</code></td><td>崩溃转储。建议开启。</td></tr></tbody></table><h3 id="安全选项设置" tabindex="-1"><a class="header-anchor" href="#安全选项设置"><span>安全选项设置</span></a></h3><p>接下来是安全选项设置。</p><figure><img src="'+j+'" alt="安全选项设置" tabindex="0" loading="lazy"><figcaption>安全选项设置</figcaption></figure><table><thead><tr><th>选项</th><th>解释</th></tr></thead><tbody><tr><td><code>hide_uids</code></td><td>隐藏以其他用户身份运行的进程。</td></tr><tr><td><code>hide_gids</code></td><td>隐藏以其他组身份运行的进程。</td></tr><tr><td><code>hide_jail</code></td><td>隐藏在 jail 中运行的进程。</td></tr><tr><td><code>read_msgbuf</code></td><td>禁用非特权用户读取内核消息缓冲区。</td></tr><tr><td><code>proc_debug</code></td><td>禁用非特权用户的进程调试工具。</td></tr><tr><td><code>random_pid</code></td><td>随机化进程的 PID。</td></tr><tr><td><code>clear_tmp</code></td><td>在系统启动时清理 <code>/tmp</code>。</td></tr><tr><td><code>disable_syslogd</code></td><td>禁用 syslogd 网络套接字的打开。</td></tr><tr><td><code>secure_console</code></td><td>在进入单用户模式时，让命令行请求root密码。</td></tr><tr><td><code>disable_ddtrace</code></td><td>DTrace 可以以能够影响正在运行的内核的模式运行。</td></tr></tbody></table><p>这些选项都可以不选。</p><h3 id="添加用户" tabindex="-1"><a class="header-anchor" href="#添加用户"><span>添加用户</span></a></h3><p>确认安全选项后会询问是否添加一个用户。因为部分程序不允许或限制使用 <code>root</code> 运行，建议添加。</p><figure><img src="'+b+'" alt="是否添加用户" tabindex="0" loading="lazy"><figcaption>是否添加用户</figcaption></figure><p>选择是会进入添加用户的命令行。</p><figure><img src="'+q+'" alt="添加用户" tabindex="0" loading="lazy"><figcaption>添加用户</figcaption></figure><table><thead><tr><th>项目</th><th>解释</th></tr></thead><tbody><tr><td><code>Username</code></td><td>登录时用的用户名，一般由小写字母、数字和下划线组成，且以字母开头。</td></tr><tr><td><code>Full name</code></td><td>全名，会在桌面登录等情况下显示。</td></tr><tr><td><code>Uid</code></td><td>用户的唯一身份标识。直接回车用默认值。</td></tr><tr><td><code>Login group</code></td><td>用户登录所在的组。直接回车用默认值。</td></tr><tr><td><code>Invite user into other groups?</code></td><td>是否把用户添加到别的组。这里为了更好的管理系统，把用户添加到 <code>wheel</code> 组里，这样可以使用 <code>su</code> 命令切换到 <code>root</code>。输入 “wheel” 后回车。</td></tr><tr><td><code>Login class</code></td><td>登录 class。回车用默认 class。</td></tr><tr><td><code>Shell</code></td><td>登录时用的默认 shell。直接回车用 <code>/bin/sh</code>。</td></tr><tr><td><code>Home directory</code></td><td>用户的家目录。直接回车用默认值。</td></tr><tr><td><code>Home directory permissions</code></td><td>家目录的权限设置。直接回车用默认值。</td></tr><tr><td><code>Use password-based authentication?</code></td><td>是否启用密码。一般直接回车启用密码。有些程序可能强制要求用户使用密码。</td></tr><tr><td><code>Use an empty password?</code></td><td>是否使用空密码。一般直接回车不使用空密码。某些程序可能不允许用户用空密码。</td></tr><tr><td><code>Use a random password?</code></td><td>是否生成随机密码。一般直接回车自己输入密码。</td></tr><tr><td><code>Enter password</code> <code>Enter password again</code></td><td>输入两遍密码。密码不会显示出来。</td></tr><tr><td><code>Lock out the account after creation?</code></td><td>是否锁住用户不允许登录。直接回车不锁住用户。</td></tr><tr><td></td><td>接下来是部分信息的确认。</td></tr><tr><td><code>OK?</code></td><td>确认是否创建用户。直接回车。</td></tr><tr><td><code>Add another user?</code></td><td>是否添加另一个用户。直接回车来退出。</td></tr></tbody></table><h3 id="最终配置" tabindex="-1"><a class="header-anchor" href="#最终配置"><span>最终配置</span></a></h3><p>安装过程的配置到此结束，在最终配置界面中可以重新进行部分配置。</p><figure><img src="'+u+'" alt="最终配置" tabindex="0" loading="lazy"><figcaption>最终配置</figcaption></figure><table><thead><tr><th>选项</th><th>解释</th></tr></thead><tbody><tr><td><code>Exit</code></td><td>退出安装程序</td></tr><tr><td><code>Add User</code></td><td>再次进行添加用户</td></tr><tr><td><code>Root Password</code></td><td>更改 <code>root</code> 密码</td></tr><tr><td><code>Hostname</code></td><td>更改主机名</td></tr><tr><td><code>Network</code></td><td>重新进行网络配置</td></tr><tr><td><code>Services</code></td><td>重新进行服务设置</td></tr><tr><td><code>System Hardening</code></td><td>重新进行安全选项配置</td></tr><tr><td><code>Time Zone</code></td><td>重新进行时区时间配置</td></tr><tr><td><code>Handbook</code></td><td>下载 FreeBSD Handbook。需要网络。</td></tr></tbody></table><p>选择 <code>Exit</code> 后，会询问是否要开启一个命令行来进行额外的手动配置，选择 <code>No</code>。</p><figure><img src="'+m+'" alt="是否手动配置" tabindex="0" loading="lazy"><figcaption>是否手动配置</figcaption></figure><p>最后询问是重启系统还是进入 LiveCD。选择 <code>Reboot</code> 即可重启进新安装的 FreeBSD。</p><figure><img src="'+Y+'" alt="询问是否重启" tabindex="0" loading="lazy"><figcaption>询问是否重启</figcaption></figure>',132)]))}const ot=_(Q,[["render",X],["__file","installation-14.html.vue"]]),it=JSON.parse('{"path":"/installation/installation-14.html","title":"第 3 节  安装 FreeBSD 14","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"FreeBSD 启动菜单","slug":"freebsd-启动菜单","link":"#freebsd-启动菜单","children":[{"level":3,"title":"启动选项菜单","slug":"启动选项菜单","link":"#启动选项菜单","children":[]}]},{"level":2,"title":"欢迎菜单","slug":"欢迎菜单","link":"#欢迎菜单","children":[]},{"level":2,"title":"开始 bsdinstall","slug":"开始-bsdinstall","link":"#开始-bsdinstall","children":[{"level":3,"title":"选择键盘布局","slug":"选择键盘布局","link":"#选择键盘布局","children":[]},{"level":3,"title":"设置主机名称","slug":"设置主机名称","link":"#设置主机名称","children":[]},{"level":3,"title":"选择组件","slug":"选择组件","link":"#选择组件","children":[]},{"level":3,"title":"进行分区","slug":"进行分区","link":"#进行分区","children":[{"level":4,"title":"使用 ZFS","slug":"使用-zfs","link":"#使用-zfs","children":[]},{"level":4,"title":"使用 UFS","slug":"使用-ufs","link":"#使用-ufs","children":[]}]},{"level":3,"title":"设置 root 密码","slug":"设置-root-密码","link":"#设置-root-密码","children":[]},{"level":3,"title":"网络设置","slug":"网络设置","link":"#网络设置","children":[]},{"level":3,"title":"时区和时间设置","slug":"时区和时间设置","link":"#时区和时间设置","children":[]},{"level":3,"title":"服务设置","slug":"服务设置","link":"#服务设置","children":[]},{"level":3,"title":"安全选项设置","slug":"安全选项设置","link":"#安全选项设置","children":[]},{"level":3,"title":"添加用户","slug":"添加用户","link":"#添加用户","children":[]},{"level":3,"title":"最终配置","slug":"最终配置","link":"#最终配置","children":[]}]}],"git":{"createdTime":1708690586000,"updatedTime":1712995040000,"contributors":[{"name":"Alex6357","email":"73743056+Alex6357@users.noreply.github.com","commits":4}]},"readingTime":{"minutes":13.37,"words":4011},"filePathRelative":"installation/installation-14.md","localizedDate":"2024年2月23日","excerpt":"\\n<p>本章以 <code>FreeBSD-14.0-RELEASE-amd64-disc1.iso</code> 为例演示 FreeBSD 14 的安装流程。</p>\\n<h2>FreeBSD 启动菜单</h2>\\n<figure><figcaption>FreeBSD 启动菜单</figcaption></figure>\\n<p>默认等待十秒钟之后会执行默认选项 <code>Boot Installer</code>。期间可以按空格键打断倒计时，也可以用数字键、回车、和突出显示的按键快速执行选项。</p>\\n<table>\\n<thead>\\n<tr>\\n<th>选项</th>\\n<th>说明</th>\\n<th>快捷键</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td><code>Boot Installer</code></td>\\n<td>启动进多用户模式。默认的启动选项。</td>\\n<td><code>1</code>、<code>B</code>、<code>Enter</code></td>\\n</tr>\\n<tr>\\n<td><code>Boot Single user</code></td>\\n<td>启动进单用户模式。会以 <code>root</code> 身份直接登录到系统，且不会执行部分启动流程。一般在配置出错导致无法启动或忘记 <code>root</code> 密码而进行恢复时使用。</td>\\n<td><code>2</code>、<code>S</code></td>\\n</tr>\\n<tr>\\n<td><code>Escape to loader prompt</code></td>\\n<td>退回到 loader 的提示符。可以进行部分启动的配置。一般在启动环境配置错误导致单用户模式也无法启动时使用。</td>\\n<td><code>3</code>、<code>Esc</code></td>\\n</tr>\\n<tr>\\n<td><code>Reboot</code></td>\\n<td>重启</td>\\n<td><code>4</code>、<code>R</code></td>\\n</tr>\\n<tr>\\n<td><code>Cons:</code></td>\\n<td>允许通过video、serial、Dual (serial primary)或Dual (Video primary)继续安装。一般用不到。</td>\\n<td><code>5</code>、<code>C</code></td>\\n</tr>\\n<tr>\\n<td><code>Kernel:</code></td>\\n<td>在启动根目录中含有多个内核时进行选择。</td>\\n<td><code>6</code>、<code>K</code></td>\\n</tr>\\n<tr>\\n<td><code>Boot Options</code></td>\\n<td>进入启动选项菜单。</td>\\n<td><code>7</code>、<code>O</code></td>\\n</tr>\\n</tbody>\\n</table>"}');export{ot as comp,it as data};
