(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{371:function(a,t,v){"use strict";v.r(t);var _=v(3),r=Object(_.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"rabbitmq-如何保证消息不丢失"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq-如何保证消息不丢失"}},[a._v("#")]),a._v(" RabbitMQ-如何保证消息不丢失")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("消息队列的作用，可以做到异步发送（验证码、短信、邮件）")])]),a._v(" "),t("li",[t("p",[a._v("MySQL和Redis，ES之间的数据同步")])]),a._v(" "),t("li",[t("p",[a._v("分布式事务")])]),a._v(" "),t("li",[t("p",[a._v("削峰填谷")]),a._v(" "),t("p",[a._v("rabbitMQ工作模式，exchange和Queue进行绑定，根据话题匹配，exchange发送消息到指定的Queue。")]),a._v(" "),t("p",[a._v("消息丢失的位置")])])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://lzh-images.oss-cn-hangzhou.aliyuncs.com/images/image-20230606145914705.png",alt:"image-20230606145914705"}})]),a._v(" "),t("p",[a._v("框架中实现了发送者发送消息的回调函数，并说明是否发送成功，如果发送失败了，则再回调方法中进行重发。")]),a._v(" "),t("p",[a._v("另外方法可以发送失败时，保存日志，之后定时重发，成功发送后删除日志中的记录。")]),a._v(" "),t("p",[a._v("若消息发送到了Queue中，宕机了，消息丢失。")]),a._v(" "),t("p",[a._v("可以进行消息持久化，交换机持久化，队列持久化。")]),a._v(" "),t("p",[t("strong",[a._v("消费者确认")]),a._v("，消费者处理消息后向MQ发送ack回执，收到ack自动删除消息。还有一个，消费者出现异常时，会进行重试，到了一定次数后还是不行，将消息送到异常交换机中记录。")]),a._v(" "),t("h2",{attrs:{id:"rabbitmq死信交换机、延迟队列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq死信交换机、延迟队列"}},[a._v("#")]),a._v(" RabbitMQ死信交换机、延迟队列")]),a._v(" "),t("ul",[t("li",[a._v("延迟队列：进入队列的消息会被延迟消费")]),a._v(" "),t("li",[a._v("超时订单、限时优惠、定时发布")])]),a._v(" "),t("p",[a._v("延迟队列=死信交换机+TTL")]),a._v(" "),t("p",[t("strong",[a._v("死信")])]),a._v(" "),t("ul",[t("li",[a._v("消息被消费者拒绝了")]),a._v(" "),t("li",[a._v("消息是过期消息")]),a._v(" "),t("li",[a._v("消息队列满了，较早的消息")])]),a._v(" "),t("p",[a._v("成为死信的消息，可以转发到死信交换机")]),a._v(" "),t("p",[t("strong",[a._v("TTL")])]),a._v(" "),t("ul",[t("li",[a._v("消息队列的TTL")]),a._v(" "),t("li",[a._v("消息的TTL")])]),a._v(" "),t("h2",{attrs:{id:"rabbitmq消息堆积"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq消息堆积"}},[a._v("#")]),a._v(" RabbitMQ消息堆积")]),a._v(" "),t("p",[a._v("生产者的生产消息的速度，远超过消费者消费消息的速度。")]),a._v(" "),t("ul",[t("li",[a._v("增加消费者")]),a._v(" "),t("li",[a._v("在消费者中开启线程池")]),a._v(" "),t("li",[a._v("惰性队列，把存放在磁盘中")])]),a._v(" "),t("h2",{attrs:{id:"rabbitmq集群"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq集群"}},[a._v("#")]),a._v(" RabbitMQ集群")]),a._v(" "),t("h2",{attrs:{id:"kafka如何保证消息不丢失"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kafka如何保证消息不丢失"}},[a._v("#")]),a._v(" Kafka如何保证消息不丢失")]),a._v(" "),t("p",[a._v("Kafka的工作模式为，生产者向指定的topic发送消息，如果指定了消息的key，则将key hash并取模，存放到指定的分区中，如果没有key，则轮次存放。一个topic有多个分区，每个分区可以放在不同的broker中。一个消费者组中的消费者消费不同的分区。")]),a._v(" "),t("h3",{attrs:{id:"producer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#producer"}},[a._v("#")]),a._v(" Producer")]),a._v(" "),t("p",[a._v("生产者发送到主分区后，可以收到broker的ack确认，这个是可以设置的，设置ack=1，或者ack=all。表示主分区收到消息后，和备份分区都收到消息后的回复确认。")]),a._v(" "),t("p",[a._v("如果没有收到确认，生产者尝试进行重发。")]),a._v(" "),t("h3",{attrs:{id:"broker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#broker"}},[a._v("#")]),a._v(" Broker")]),a._v(" "),t("p",[a._v("Broker中主分区收到消息后，将数据持久化，操作系统定时将page cache中的数据持久化存盘。如果此时broker宕机，选取了一个落后的备份分区当主分区，那么就会数据丢失。")]),a._v(" "),t("h3",{attrs:{id:"consumer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#consumer"}},[a._v("#")]),a._v(" Consumer")]),a._v(" "),t("p",[a._v("消费者到指定的topic，指定的分区去消费消息。消费完成后会提交offset消费位移进度记录。")]),a._v(" "),t("ul",[t("li",[a._v("先提交offset，后处理消息，那么可能会造成消息丢失。")]),a._v(" "),t("li",[a._v("先处理消息，后提交offset，那么可能会造成消息重复消费，这个可以在业务中保证幂等。")])]),a._v(" "),t("h2",{attrs:{id:"kafka保证消费顺序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kafka保证消费顺序"}},[a._v("#")]),a._v(" Kafka保证消费顺序")]),a._v(" "),t("p",[a._v("对于需要顺序消费的消息，放入到同一个分区即可。")]),a._v(" "),t("h2",{attrs:{id:"kafka高可用机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kafka高可用机制"}},[a._v("#")]),a._v(" Kafka高可用机制")]),a._v(" "),t("h2",{attrs:{id:"kafka高性能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kafka高性能"}},[a._v("#")]),a._v(" Kafka高性能")]),a._v(" "),t("ul",[t("li",[a._v("消息分区：不同的服务器，并发")]),a._v(" "),t("li",[a._v("顺序读写：")]),a._v(" "),t("li",[a._v("页缓存：")]),a._v(" "),t("li",[a._v("零拷贝：")])])])}),[],!1,null,null,null);t.default=r.exports}}]);