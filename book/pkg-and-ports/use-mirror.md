# 第 1 节 换源

由于 FreeBSD 官方的镜像源都设在大陆之外，使用官方源的网速可能会很慢。因此我们可能要手动使用一些非官方源。但这些非官方源可能常常出现一些问题，所以如果不是网速真的很慢，尽量使用官方源。如果使用镜像源出现了什么问题，也可以切换官方源重新尝试一下。

## `pkg` 换源

可以先参考 [`pkg`](pkg.md)。

创建并编辑用户级 `pkg` 配置文件：

```shellsession
root@freebsd:~ # mkdir -p /usr/local/etc/pkg/repos
root@freebsd:~ # ee /usr/local/etc/pkg/repos/mirrors.conf
```

选择一项写入：

### 网易镜像站

```text
163: {
url: "https://mirrors.163.com/freebsd-pkg/${ABI}/quarterly",
}
FreeBSD: { enabled: no }
```

### USTC 镜像站

```text
USTC: {
url: "https://mirrors.ustc.edu.cn/freebsd-pkg/${ABI}/quarterly",
}
FreeBSD: { enabled: no }
```

换源完成后使用 `pkg update` 更新。

::: warning 注意
`pkg` 源分为 `quarterly` 源和 `latest` 源。一般情况下，`RELEASE` 系统使用 `quarterly` 源，`STABLE` 和 `CURRENT` 系统使用 `latest` 源。可以先查看 `/etc/pkg/FreeBSD.conf` 文件确认自己默认使用的是什么源。

`quarterly` 和 `latest` 源的区别是：`quarterly` 源更新较慢，一般较稳定；`latest` 源则是最新的。

需要注意 `CURRENT` 系统只有 `latest` 源，`STABLE` 和 `RELEASE` 则两个源都有。不过一般不建议切换，可能有一定的兼容问题。
:::

## `ports` 换源

可以先参考 [`ports`](ports.md)。

`ports` 换源分为两部分，这部分的获取 `ports` 树的源，和下一部分的 `distfiles` 源。

获取 `ports` 树，使用 [`gitup`](gitup.md) 可能更简单。同时请参考 [`gitup` 换源](#gitup-换源)

### 通过 `git` 获取

首先安装 `git`：

```shellsession
root@freebsd:~ # pkg install git
```

然后选择一个源获取 `ports` 树：

#### 使用 USTC git 源

```shellsession
root@freebsd:~ # git clone --depth 1 https://mirrors.ustc.edu.cn/freebsd-ports/ports.git /usr/ports
```

#### 使用 NJU git 源

```shellsession
root@freebsd:~ # git clone --depth 1 https://mirrors.nju.edu.cn/freebsd-ports/ports.git /usr/ports
```

### 通过压缩包获取

选择一个镜像源，下载压缩包：

#### 使用 USTC 源

```shellsession
root@freebsd:~ # fetch https://mirrors.ustc.edu.cn/freebsd-ports/ports.tar.gz
```

#### 使用 NJU 源

```shellsession
root@freebsd:~ # fetch https://mirrors.nju.edu.cn/freebsd-ports/ports.tar.gz
```

然后解压：

```shellsession
root@freebsd:~ # tar -xvf ports.tar.gz -C /usr/ports
root@freebsd:~ # rm ports.tar.gz  # 可选，删除解压完成的压缩包
```

## `gitup` 换源

以 `14.1-RELEASE` 为例：

首先要安装 `gitup`：

```shellsession
root@freebsd:~ # pkg install gitup
```

复制一份配置文件示例并编辑：

```shellsession
root@freebsd:~ # cp /usr/local/etc/gitup.conf.sample /usr/local/etc/gitup.conf
root@freebsd:~ # ee /usr/local/etc/gitup.conf
```

需要改动以下四处内容：

```text
# $FreeBSD$
#
# Default configuration options for gitup.conf.
{
        "defaults" : {
                "host"           : "git.freebsd.org",
                "port"           : 443,
#               "proxy_host"     : "",
#               "proxy_port"     : 0,
#               "proxy_username" : "",
#               "proxy_password" : "",
#               "source_address" : "",
                "low_memory"     : false,
                "display_depth"  : 0,
                "verbosity"      : 1,
                "work_directory" : "/var/db/gitup",
        },

        "ports" : {
                "host"             : "mirrors.ustc.edu.cn",  # 1 增加此行，也可以用 mirrors.nju.edu.cn
                "repository_path"  : "/freebsd-ports/ports.git",  # 2 更改此行
                "branch"           : "main",
                "target_directory" : "/usr/ports",
                "ignores"          : [],
        },

        "quarterly" : {
                "host"             : "mirrors.ustc.edu.cn",  # 3 增加此行，也可以用 mirrors.nju.edu.cn
                "repository_path"  : "/freebsd-ports/ports.git",  # 4 更改此行
                "branch"           : "quarterly",
                "target_directory" : "/usr/ports",
                "ignores"          : [],
        },

        "release" : {
                "repository_path"  : "/src.git",
                "branch"           : "releng/13.2",
                "target_directory" : "/usr/src",
                "ignores"          : [
                        "sys/[^\/]+/conf",
                ],
        },

        "stable" : {
                "repository_path"  : "/src.git",
                "branch"           : "stable/14",
                "target_directory" : "/usr/src",
                "ignores"          : [
                        "sys/[^\/]+/conf",
                ],
        },

        "current" : {
                "repository_path"  : "/src.git",
                "branch"           : "main",
                "target_directory" : "/usr/src",
                "ignores"          : [
                        "sys/[^\/]+/conf",
                ],
        }
}
```

之后可以以 `root` 身份执行 `gitup ports` 获取最新 `ports`，或 `gitup quarterly` 获取季度 `ports`。

另外，由于 FreeBSD src 暂时没有源，所以 `gitup` 配置中保留了官方源。

::: warning 警告
截止到本文写成时间 2024/07/18，USTC 源存在[问题](https://github.com/ustclug/discussions/issues/464)，请使用 NJU 源。如果问题解决会更新本文。
:::

## `distfiles` 换源

`distfiles` 指的是实际使用 `ports` 时需要下载的内容。相当于 `ports` 是你的购物清单，`distfiles` 是你要买的商品。

需要选择一个镜像源并写入 `/etc/make.conf`：

```shellsession
root@freebsd:~ # ee /etc/make.conf
```

### 使用 USTC `distfiles` 源

另起一行写入：

```text
MASTER_SITE_OVERRIDE?=http://mirrors.ustc.edu.cn/freebsd-ports/distfiles/${DIST_SUBDIR}/
```

### 使用 NJU `distfiles` 源

另起一行写入：

```text
MASTER_SITE_OVERRIDE?=http://mirrors.nju.edu.cn/freebsd-ports/distfiles/${DIST_SUBDIR}/
```
