# 第 2 节  安装 FreeBSD 13

本文以 `FreeBSD-13.2-RELEASE-amd64-disc1.iso` 为例演示 FreeBSD 13 的安装流程。

系统启动后会进入启动菜单。

## FreeBSD 启动菜单

![FreeBSD 启动菜单](./assests/13-boot-menu.png "FreeBSD 启动菜单")

默认等待十秒钟之后会执行默认选项 `Boot Multi user`。期间可以按空格键打断倒计时，也可以用数字键、回车、和突出显示的按键快速执行选项。

| 选项 | 说明 | 快捷键 |
| --- | --- | --- |
| `Boot Multi user` | 启动进多用户模式。默认的启动选项。 | `1`、`B`、`Enter` |
| `Boot Single user` | 启动进单用户模式。会以 `root` 身份直接登录到系统，且不会执行部分启动流程。一般在配置出错导致无法启动或忘记 `root` 密码而进行恢复时使用。 | `2`、`S` |
| `Escape to loader prompt` | 退回到 loader 的提示符。可以进行部分启动的配置。一般在启动环境配置错误导致单用户模式也无法启动时使用。 | `3`、`Esc` |
| `Reboot` | 重启 | `4`、`R` |
| `Cons:` | 允许通过video、serial、Dual (serial primary)或Dual (Video primary)继续安装。一般用不到。 | `5`、`C` |
| `Kernel:` | 在启动根目录中含有多个内核时进行选择。 | `6`、`K` |
| `Boot Options` | 进入启动选项菜单。 | `7`、`O` |

### 启动选项菜单

如果在启动菜单时按 `7` 或 `O`，可以进入启动选项菜单。

![启动选项菜单](./assests/13-14-boot-options.png "启动选项菜单")

| 选项 | 说明 | 快捷键 |
| --- | --- | --- |
| `Back to main menu` | 返回到主菜单。 | `1`、`Backspace` |
| `Load System Defaults` | 恢复默认设置。 | `2`、`D` |
| `Save Mode` | 安全模式。如果系统无法启动可以尝试开启此选项。 | `3`、`M` |
| `Single user` | 单用户模式。打开后与主菜单的 `Boot Single user` 效果相同。 | `4`、`S` |
| `Verbose` | 啰嗦模式。启动时显示更多输出。 | `5`、`V` |

一般我们不需要这些选项，直接等待十秒或回车正常启动系统即可。

## 欢迎菜单

在正常启动后，FreeBSD 会显示一个欢迎菜单。

![欢迎菜单](./assests/13-welcone-page.png "欢迎菜单")

左右键可以选择，回车确认，也可以使用高亮的快捷键。

| 选项 | 解释 | 快捷键 |
| --- | --- | --- |
| `Install` | 进入正常的安装流程，即 `bsdinstall`。 | `I` |
| `Shell` | 进入一个命令行，可以在安装之前进行部分配置。 | `S` |
| `Live CD` | 进入 FreeBSD 的 Live 环境，可以简单体验整个 FreeBSD 系统。 | `L` |

我们直接回车开始安装。

## 开始 bsdinstall

### 选择键盘布局

在快速加载键盘布局后 ~~（快到我都没法截图）~~ ，会进入键盘布局选择菜单。直接回车选择默认的 “US” 布局。~~不会有人用其他的布局吧？不会吧不会吧？~~

![选择键盘布局](./assests/13-14-choose-keyboard-layout.png "选择键盘布局")

### 设置主机名称

确认键盘布局后进入主机名称设置界面。在文本框内输入主机名后回车。

![设置主机名称](./assests/13-set-hostname.png "设置主机名称")

::: caution 警告
必须设置一个主机名称！否则以后的桌面会出现无法启动的问题！
:::

### 选择组件

设置主机名称后进入组件选择界面。用上下键移动，空格键选择或取消选择，回车键确认。

![选择组件](./assests/13-14-choose-distribuiton.png "选择组件")

| 组件 | 内容 |
| --- | --- |
| `base-dbg` | 启用调试符号的系统工具 |
| `kernel-dbg` | 启用调试符号的内核和模块 |
| `lib32-dbg` | 启用调试符号的 32 位兼容库 |
| `lib32` | 在 64 位系统运行 32 位程序的兼容库 |
| `ports` | FreeBSD 的 ports 树。见 [FreeBSD ports](freebsd-ports.md) |
| `src` | FreeBSD 的源代码 |
| `tests` | FreeBSD 测试套件 |

一般建议是全不选或只选 `src` 。这些组件都可以后天安装或获取。

::: warning 注意
`disc1` 中并不包含 `base-dbg` 和 `lib32-dbg` 两个组件。如果你选择了这两个组件，则会部分进行网络安装。如果你一定要安装这两个组件，请参照[从网络安装 FreeBSD](net-install.md) 的内容或使用 `dvd1`。
:::

### 进行分区

确认组件后进入分区部分。

![分区设置](./assests/13-partitioning.png "分区设置")

| 选项 | 解释 |
| --- | --- |
| `Auto (ZFS)` | 使用 ZFS 文件系统 |
| `Auto (UFS)` | 使用 UFS 文件系统 |
| `Manual` | 用菜单自定义分区 |
| `Shell` | 打开一个命令行用于手动分区 |

4G 以上内存建议使用 ZFS，4G 以下内存可以考虑使用 UFS，或者手动对 ZFS 进行优化。见 [ZFS 调优](zfs-tuning-guide.md)。

无论 ZFS 或 UFS 都将占用整块硬盘。如果想用手动分区可以参考[双系统安装 FreeBSD](freebsd-with-other-systems.md)。

#### 使用 ZFS

选择文件系统后会探测现有硬盘设备 ~~（又快到我没截到图）~~。随后进入 ZFS 配置界面。

![ZFS 配置界面](./assests/13-14-zfs-options.png "ZFS 配置界面")

| 选项 | 解释 |
| --- | --- |
| `Install` | 确认选项并进行安装 |
| `Pool Type/Disks` | 选择 ZFS 使用的池类型和硬盘 |
| `Rescan Devices` | 重新扫描硬盘设备 |
| `Disk Info` | 查看某个硬盘的信息，用于区分硬盘 |
| `Pool Name` | ZFS 池的名称 |
| `Force 4K Sectors?` | 强制 4K 对齐 |
| `Encrypt Disks?` | 是否加密硬盘 |
| `Partition Scheme` | 分区表类型，也影响启动。 |
| `Swap Size` | swap 交换分区大小 |
| `Mirror Swap?` | 是否镜像 swap |
| `Encrypt Swap?` | 是否加密 swap |

一般安装的时候我们保持默认设置即可，或者如果你的内存不够而硬盘充足则可以稍微扩大交换分区。不过我一般会将交换分区大小设为 0，之后[用一个 ZFS 卷作为交换分区](zfs-swap.md)。

选择 `Pool Type/Disks`，或者如果你没有选择硬盘直接选择了 `Install`，就会进入硬盘选择。

![ZFS 池与硬盘选择](./assests/13-14-choose-zfs-pool-and-disk.png "ZFS 池与硬盘选择")

| 选项 | 解释 |
| --- | --- |
| `stripe` | 选择一块或多块硬盘合并为一个池。只要坏一块硬盘则整个池崩溃，数据丢失。 |
| `mirror` | 选择多块硬盘互为镜像，这样只要有一块硬盘能够读取池就不会崩溃。 |
| `raid10` | 选择偶数多个硬盘，每两个硬盘互为镜像，合并为一个池，每组硬盘可以坏一块。但某组两块硬盘都损坏则池崩溃。 |
| `raidz1` | 选择三块及以上硬盘，通过冗余校验数据可以保证任意一块硬盘损坏池不会崩溃。 |
| `raidz2` | 选择四块及以上硬盘，可以保证任意坏两块盘池不会崩溃。 |
| `raidz3` | 选择五块及以上硬盘，可以保证任意坏三块盘池不会崩溃。 |

正常情况下我们只用一块盘，选择 `stripe`。如果你有需求则按需选择。

选择后开始勾选硬盘。这里要看好到底是哪块硬盘，建议提前用 `Disk Info` 看好并记下来。这里我只有一块硬盘，用空格键选中，回车确认。随后选择 `Install`。会弹出是否使用硬盘的最终确认。

![最终确认是否使用硬盘](./assests/13-14-conform-disk.png "最终确认是否使用硬盘")

左方向键键选到 `YES`，回车确认。随后会开始校验和安装。

![正在校验组件](./assests/13-verify-distribution.png "正在校验组件")

![正在解压组件](./assests/13-extract-distribution.png "正在解压组件")

#### 使用 UFS

选择 UFS，会开始 UFS 分区。

如果你有多块硬盘，会在这里显示出来。

![UFS 有多块硬盘](./assests/13-ufs-multi-disks.png "UFS 有多块硬盘")

如果你只有一块硬盘，会直接询问是否使用整个硬盘或进行分区。多块硬盘在选择之后也会出现这个提示。

![UFS 单硬盘](./assests/13-ufs-single-disk.png "UFS 单硬盘")

选择 `Partition` 可以手动调整分区。会询问使用什么分区表。

![UFS 选择分区表](./assests/13-ufs-choose-partition-scheme.png "UFS 选择分区表")

| 选项 | 解释 |
| --- | --- |
| `APM` | Apple 的分区表 |
| `BSD` | BSD 的分区表 |
| `GPT` | GUID 分区表 |
| `MBR` | MBR 分区表 |

一般我们直接选择 GPT。就算是 legacy 也可以启动。

::: warning 注意
如果你想让 UFS 文件系统的 FreeBSD 既可以 legacy 启动，也可以 UEFI 启动，则需要特殊的配置。正常安装只支持一种，即如果你以 legacy 启动安装盘，则支持 legacy 启动，如果以 UEFI 启动安装盘，则支持 UEFI 启动。
:::

之后会来到分区界面，并显示空余空间的默认分区方式。

![UFS 默认分区](./assests/13-ufs-default-partition.png "UFS 默认分区")

`Finish` 确认当前布局。`Auto` 重新进行默认分区。其他选项可以调整当前分区。这里直接选择 `Finish`。会弹出确认窗口。选 `Commit` 确认。】

![UFS 确认分区](./assests/13-ufs-confirm-partition.png "UFS 确认分区")

之后即开始分区和安装过程。~~（是的分区太快我又双叒没截到）~~

![正在校验组件](./assests/13-verify-distribution.png "正在校验组件")

![正在解压组件](./assests/13-extract-distribution.png "正在解压组件")

### 设置 `root` 密码

安装完成后会更改 `root` 的密码。要输入两遍密码，且密码不会显示。

![更改 `root` 密码](./assests/13-14-change-root-password.png "更改 `root` 密码")

### 网络设置

更改 `root` 密码后，如果 FreeBSD 检测到了网络设备则会列出供选择。

![选择网络设备](./assests/13-choose-network-interface.png "选择网络设备")

如果选择的是无线网卡，则会开始扫描无线网络。

![扫描无限网络（图片来自 FreeBSD Handbook）](./assests/13-scan-wlan.png "扫描无线网络（图片来自 FreeBSD Handbook）")

之后会列出扫描到的网络。

![扫描到的无线网络（图片来自 FreeBSD Handbook）](./assests/13-choose-ssid.png "扫描到的无线网络（图片来自 FreeBSD Handbook）")

选择你的 WiFi，会让你输入 WiFi 密码。

![输入 WiFi 密码（图片来自 FreeBSD Handbook）](./assests/13-enter-wlan-password.png "输入 WiFi 密码（图片来自 FreeBSD Handbook）")

连接到 WiFi 后，或是选择了有线网卡，会询问是否配置 IPv4。一般选择是。

![设置 IPv4](./assests/13-setup-ipv4.png "设置 IPv4")

选择是，会询问是否配置 DHCP。一般也选是。如果没有 DHCP 或想用静态 IP，则选否。

![配置 DHCP](./assests/13-setup-dhcp.png "配置 DHCP")

选择是，则会开始请求 DHCP。

![请求 DHCP](./assests/13-acquire-dhcp.png "请求 DHCP")

选择否，则手动输入 IP。

![手动设置 IPv4（图片来自 FreeBSD Handbook）](./assests/14-manual-ipv4.png "手动设置 IPv4（图片来自 FreeBSD Handbook）")

之后会询问是否配置 IPv6，如果你有 IPv6，可以选是，否则选否。如果不知道也可以选否。

![设置 IPv6](./assests/13-set-ipv6.png "设置 IPv6")

如果选择是，同样会询问是否自动获取 IPv6，也可以手动配置。

![是否自动获取 IPv6 地址](./assests/13-set-slaac.png "是否自动获取 IPv6 地址")

![自动获取 IPv6 地址](./assests/13-acquire-slaac.png "自动获取 IPv6 地址")

![手动配置 IPv6 地址（图片来自 FreeBSD Handbook）](./assests/14-manual-ipv6.png "手动配置 IPv6 地址（图片来自 FreeBSD Handbook）")

配置完成后，会进入 DNS 配置。如果使用 DHCP 或 SLAAC，则可以直接回车确认。否则可以手动输入 DNS。

![配置 DNS](./assests/13-set-dns.png "配置 DNS")

### 时区和时间设置

网络配置后会进入时区和时间设置。根据所在地时区进行选择。例如中国的大部分地区需要选择 `Asia` `China` `Beijing Time`。

![时区选择](./assests/13-time-zone-1.png "时区选择")

![时区选择](./assests/13-time-zone-2.png "时区选择")

![时区选择](./assests/13-time-zone-3.png "时区选择")

`CST` 即 `China Standard Time`，中国标准时间。回车确认。

![时区选择](./assests/13-time-zone-4.png "时区选择")

接下来可以设置当前时间。没有问题的话回车跳过两次。

![日期设置](./assests/13-set-date.png "日期设置")

![时间设置](./assests/13-set-time.png "时间设置")

### 服务设置

下一步是服务设置。

![服务设置](./assests/13-service-configuration.png "服务设置")

| 服务 | 解释 |
| --- | --- |
| `local_unbound` | DNS 本地缓存。一般不开启，配置不对有可能导致无法解析。 |
| `sshd` | SSH Daemon。想用 ssh 远程连接到 FreeBSD 则要开启。建议打开。 |
| `moused` | 允许在终端状态下使用鼠标。可以开启。 |
| `ntpdate` | 在系统启动的时候通过网络同步时间。如果碰巧没有联上网会卡很长时间。按需开启。 |
| `ntpd` | 可以通过网络同步时间。可以开启，不会导致开机卡住。 |
| `powerd` | 自动调整 CPU 频率。虚拟机上一般无法使用，但开启没有影响。物理机可以开启。 |
| `dumpdev` | 崩溃转储。建议开启。 |

### 安全选项设置

接下来是安全选项设置。

![安全选项设置](./assests/13-security-options.png "安全选项设置")

| 选项 | 解释 |
| --- | --- |
| `hide_uids` | 隐藏以其他用户身份运行的进程。 |
| `hide_gids` | 隐藏以其他组身份运行的进程。 |
| `hide_jail` | 隐藏在 jail 中运行的进程。 |
| `read_msgbuf` | 禁用非特权用户读取内核消息缓冲区。 |
| `proc_debug` | 禁用非特权用户的进程调试工具。 |
| `random_pid` | 随机化进程的 PID。 |
| `clear_tmp` | 在系统启动时清理 `/tmp`。 |
| `disable_syslogd` | 禁用 syslogd 网络套接字的打开。 |
| `disable_sendmail` | 禁用 sendmail 邮件传输代理。 |
| `secure_console` | 在进入单用户模式时，让命令行请求root密码。 |
| `disable_ddtrace` | DTrace 可以以能够影响正在运行的内核的模式运行。 |

这其中 `disable_sendmail` 可以选中，因为 sendmail 服务会让系统在开机的时候卡很长时间。而且本身没有必要。其他的选项都可以不选。

### 添加用户

确认安全选项后会询问是否添加一个用户。因为部分程序不允许或限制使用 `root` 运行，建议添加。

![是否添加用户](./assests/13-14-ask-add-user.png "是否添加用户")

选择是会进入添加用户的命令行。

![添加用户](./assests/13-add-user.png "添加用户")

| 项目 | 解释 |
| --- | --- |
| `Username` | 登录时用的用户名，一般由小写字母、数字和下划线组成，且以字母开头。 |
| `Full name` | 全名，会在桌面登录等情况下显示。 |
| `Uid` | 用户的唯一身份标识。直接回车用默认值。 |
| `Login group` | 用户登录所在的组。直接回车用默认值。 |
| `Invite user into other groups?` | 是否把用户添加到别的组。这里为了更好的管理系统，把用户添加到 `wheel` 组里，这样可以使用 `su` 命令切换到 `root`。输入 “wheel” 后回车。 |
| `Login class` | 登录 class。回车用默认 class。 |
| `Shell` | 登录时用的默认 shell。直接回车用 `/bin/sh`。 |
| `Home directory` | 用户的家目录。直接回车用默认值。 |
| `Home directory permissions` | 家目录的权限设置。直接回车用默认值。 |
| `Use password-based authentication?` | 是否启用密码。一般直接回车启用密码。有些程序可能强制要求用户使用密码。 |
| `Use an empty password?` | 是否使用空密码。一般直接回车不使用空密码。某些程序可能不允许用户用空密码。 |
| `Use a random password?` | 是否生成随机密码。一般直接回车自己输入密码。 |
| `Enter password` `Enter password again` | 输入两遍密码。密码不会显示出来。 |
| `Lock out the account after creation?` | 是否锁住用户不允许登录。直接回车不锁住用户。 |
|  | 接下来是部分信息的确认。 |
| `OK?` | 确认是否创建用户。输入 “yes” 回车。 |
| `Add another user?` | 是否添加另一个用户。可以输入 “no” 回车来退出。 |

### 最终配置

安装过程的配置到此结束，在最终配置界面中可以重新进行部分配置。

![最终配置](./assests/13-14-final-configuration.png "最终配置")

| 选项 | 解释 |
| --- | --- |
| `Exit` | 退出安装程序 |
| `Add User` | 再次进行添加用户 |
| `Root Password` | 更改 `root` 密码 |
| `Hostname` | 更改主机名 |
| `Network` | 重新进行网络配置 |
| `Services` | 重新进行服务设置 |
| `System Hardening` | 重新进行安全选项配置 |
| `Time Zone` | 重新进行时区时间配置 |
| `Handbook` | 下载 FreeBSD Handbook。需要网络。 |

选择 `Exit` 后，会询问是否要开启一个命令行来进行额外的手动配置，选择 `No`。

![是否手动配置](./assests/13-manual-configuration.png "是否手动配置")

最后询问是重启系统还是进入 LiveCD。选择 `Reboot` 即可重启进新安装的 FreeBSD。

![询问是否重启](./assests/13-reboot.png "询问是否重启")
