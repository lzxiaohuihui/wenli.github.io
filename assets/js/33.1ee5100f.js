(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{362:function(t,s,e){"use strict";e.r(s);var a=e(3),v=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"首页"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#首页"}},[t._v("#")]),t._v(" 首页")]),t._v(" "),s("p",[t._v("Caffeine 缓存库来实现帖子列表的缓存。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 帖子列表缓存")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoadingCache")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DiscussPost")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" postListCache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 帖子总数缓存")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoadingCache")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" postRowsCache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("用法，在构造中的build指定加载器来加载缓存项。如果缓存不命中则调用加载器返回值")]),t._v(" "),s("p",[t._v("对比Redis")]),t._v(" "),s("p",[t._v("caffeine是基于本地应用中的内存的，相比没有网络IO延迟")]),t._v(" "),s("p",[t._v("caffeine 可以作为一级缓存，Redis作为二级缓存")]),t._v(" "),s("h2",{attrs:{id:"帖子详情页"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#帖子详情页"}},[t._v("#")]),t._v(" 帖子详情页")]),t._v(" "),s("p",[t._v("传入帖子id")]),t._v(" "),s("p",[t._v("帖子当前帖子信息，作者信息，点赞数量， 点赞状态，评论列表，评论中的回复列表。")]),t._v(" "),s("p",[t._v("查询一个帖子，查询MySQL。")]),t._v(" "),s("p",[t._v("查询帖子的作者，查询Redis --\x3e  MySQL。")]),t._v(" "),s("p",[t._v("查询该帖子的点赞数量，查询Redis。")]),t._v(" "),s("p",[t._v("查询当前用户是否对该帖子点赞，查询Redis。")]),t._v(" "),s("p",[t._v("查询这个帖子的评论，查询MySQL。")]),t._v(" "),s("p",[t._v("​\t查询这个评论的用户，查询Redis --\x3e  MySQL。")]),t._v(" "),s("p",[t._v("​\t查询这个评论的点赞，查询Redis。")]),t._v(" "),s("p",[t._v("​\t查询当前用户是否对该评论点赞，查询Redis。")]),t._v(" "),s("p",[t._v("​\t查询这个评论的回复，查询MySQL。")]),t._v(" "),s("p",[t._v("​\t\t查询这个评论的回复的用户，查询Redis --\x3e  MySQL。")]),t._v(" "),s("p",[t._v("​\t\t查询这个评论的回复的目标用户，查询Redis --\x3e  MySQL。")]),t._v(" "),s("p",[t._v("​\t\t查询这个回复的点赞数量，查询Redis。")]),t._v(" "),s("p",[t._v("​\t\t查询当前用户是否对该回复点赞，查询Redis。")]),t._v(" "),s("p",[t._v("​\t查询这个帖子的回复数量，查询MySQL。")]),t._v(" "),s("h2",{attrs:{id:"点赞、关注"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#点赞、关注"}},[t._v("#")]),t._v(" 点赞、关注")]),t._v(" "),s("p",[t._v("操作Redis，没有将数据持久化存储到MySQL中。")]),t._v(" "),s("p",[t._v("判断是否已经对该实体点赞（1.帖子，2.评论），开启Redis事务")]),t._v(" "),s("ol",[s("li")]),t._v(" "),s("p",[t._v("从该帖子的点赞集合中移除当前用户id；")]),t._v(" "),s("p",[t._v("获赞用户的值减一。")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li")]),t._v(" "),s("p",[t._v("添加点赞信息；")]),t._v(" "),s("p",[t._v("获赞用户的值加一。")]),t._v(" "),s("p",[t._v("查询某个实体被点赞的数量，Redis")]),t._v(" "),s("p",[t._v("判断当前用户是否对该实体点赞，用于显示（已赞，赞）。")]),t._v(" "),s("p",[t._v("如果刚刚进行了点赞，那么触发点赞事件。")]),t._v(" "),s("p",[t._v("消费点赞事件，对于评论，点赞，关注统一消费")]),t._v(" "),s("p",[t._v("​\t从事件中取出实体，写入message表，发送站内通知。")]),t._v(" "),s("p",[t._v("获取用户关注了谁")]),t._v(" "),s("p",[t._v("查询关注数，Redis；")]),t._v(" "),s("p",[t._v("查询关注人，Redis set。")]),t._v(" "),s("h2",{attrs:{id:"定时任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定时任务"}},[t._v("#")]),t._v(" 定时任务")]),t._v(" "),s("p",[t._v("对于发布帖子，点赞帖子，评论帖子，都将该帖子id存入到Redis "),s("code",[t._v("post:score")]),t._v("集合中。")]),t._v(" "),s("p",[t._v("创建一个简单的quartz定时器，每五分钟执行一次。")]),t._v(" "),s("p",[t._v("每次执行，将Redis "),s("code",[t._v("post:score")]),t._v("集合中取出来，重新计算帖子的分数，同时存入到数据库中，和elasticsearch中。（这里没有事务）")]),t._v(" "),s("p",[t._v("与xxl-job相同，采用竞争数据库锁的方式，来保证一个任务只能有一个节点来执行。性能较差，后续也有改为分布式锁。")]),t._v(" "),s("p",[t._v("xxl-job支持任务分片。")]),t._v(" "),s("h2",{attrs:{id:"拦截器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拦截器"}},[t._v("#")]),t._v(" 拦截器")]),t._v(" "),s("h3",{attrs:{id:"webmvcconfigurer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webmvcconfigurer"}},[t._v("#")]),t._v(" WebMvcConfigurer")]),t._v(" "),s("p",[t._v("从cookie中取出登录凭证，查询凭证对应的用户id，Redis")]),t._v(" "),s("p",[t._v("查询用户，Redis  ---\x3e  MySQL")]),t._v(" "),s("p",[t._v("将用户存入SecurityContextHolder。")]),t._v(" "),s("h3",{attrs:{id:"websecurityconfigureradapter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#websecurityconfigureradapter"}},[t._v("#")]),t._v(" WebSecurityConfigurerAdapter")]),t._v(" "),s("p",[t._v("这里配置哪些路径，需要哪些权限。")]),t._v(" "),s("p",[t._v("如果身份认证失败，则执行commence()方法")]),t._v(" "),s("p",[t._v("如果权限不够，则执行handle()方法。")]),t._v(" "),s("p",[t._v("对于SecurityContextHolder，Spring Security中第二个过滤器会将其存入到HTTPSession中。")]),t._v(" "),s("p",[t._v("第二个过滤器 "),s("strong",[t._v("SecurityContextPersistenceFilter")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("当请求到来时，从HttpSession中获取SecurityContext并存入SecurityContextHolder中，这样在同一个请求的后续处理过程中，通过SecurityContextHolder获取数据")])]),t._v(" "),s("li",[s("p",[t._v("当一个请求处理完毕时，从SecurityContextHolder中获取SecurityContext并存入HttpSession中，方便下一个请求到来时，再从HTTPSession中拿来使用，同时擦除SecurityContextHolder中的登录信息。")])])]),t._v(" "),s("h2",{attrs:{id:"扩展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#扩展"}},[t._v("#")]),t._v(" 扩展")]),t._v(" "),s("p",[t._v("将点赞，关注行为持久化存储到MySQL。扩展业务，我觉得可以有两种方式，一种可以用AOP，面向切面来扩展，另一种直接写新的业务逻辑，在需要的地方直接调用。考虑到点赞、关注的消息需要存储到Redis，需要保持Redis、MySQL的数据一致性，采用最终一致性的策略，将增删改事件发布RabbitMQ消息，消费者去将数据存储到MySQL。所以客户看到的点赞消息，都是从Redis中存取的。如果异步策略失败，那就是RabbitMQ如何保证消息的可靠了。")]),t._v(" "),s("p",[t._v("要扩展MySQL，新建点赞表（uid, entity_type, entity_id），好友表(uid, friend_id)，同时计算分数的话，也要需要查询帖子的点赞数，同时将帖子，也要存到Redis中，用")])])}),[],!1,null,null,null);s.default=v.exports}}]);