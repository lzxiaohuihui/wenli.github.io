(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{408:function(t,a,s){"use strict";s.r(a);var r=s(3),i=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"一些综述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一些综述"}},[t._v("#")]),t._v(" 一些综述")]),t._v(" "),a("p",[t._v("37 "),a("strong",[t._v("Hsfm: Hybrid structure-from-motion 2017 CVPR")])]),t._v(" "),a("p",[t._v("通过RA获取旋转，然后采用P2P方式逐步配准相机中心")]),t._v(" "),a("p",[t._v("16 "),a("strong",[t._v("Divide and conquer: Efficient large-scale structure from motion using graph partitioning 2014 ACCV")])]),t._v(" "),a("p",[t._v("通过图像的相似性分数构建场景图，然后并行执行特征匹配和局部SfM，合并局部重建")]),t._v(" "),a("p",[t._v("18 "),a("strong",[t._v("Parallel structure from motion from local increment to global averaging 2017")])]),t._v(" "),a("p",[t._v("19 "),a("strong",[t._v("Very large-scale global SfM by distributed motion averaging 2018 CVPR")])]),t._v(" "),a("p",[t._v("17 "),a("strong",[t._v("Graph-based parallel large scale structure from motio 2020 PR")])]),t._v(" "),a("p",[t._v("发现最小啊生成树MST来解决最后的合并操作")]),t._v(" "),a("p",[t._v("38 "),a("strong",[t._v("Progressive structure from motion 2018 ECCV")])]),t._v(" "),a("p",[t._v("再采用分治法之前，通过RA过滤了错误的对极几何")]),t._v(" "),a("p",[t._v("39 "),a("strong",[t._v("Vio-aided structure from motion under challenging environments 2021 ICIT")])]),t._v(" "),a("p",[t._v("采用VINS进行回环检测与矫正")]),t._v(" "),a("h2",{attrs:{id:"adasfm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adasfm"}},[t._v("#")]),t._v(" AdaSfM")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("分区划分")]),t._v(" "),a("p",[t._v("分区之间的重叠区域较少")])]),t._v(" "),a("p",[t._v("现存的方法使用图割和扩展的模式，在分区之间创建重叠区域，有两个缺点")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://lzh-images.oss-cn-hangzhou.aliyuncs.com/images/image-20230412152415526.png",alt:"image-20230412152415526"}})]),t._v(" "),a("ul",[a("li",[t._v("当试图变得太稀疏时，重叠区域不足以进行最终合并")]),t._v(" "),a("li",[t._v("图割的方式倾向于分离那些弱约束的边，但重叠区域也是取决于弱约束的边")])]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("分区合并")]),t._v(" "),a("p",[t._v("分区合并时，对异常值不鲁棒，以及在样本数量不足时，估计的相似变换不准确")])]),t._v(" "),a("p",[t._v("AdaSfM: From Coarse Global to Fine Incremental Adaptive Structure from Motion")]),t._v(" "),a("p",[t._v("解决问题分区划分，通过扩展分隔符，st分区之间的重叠区域增加，达到一个阈值后，则停止扩展。")]),t._v(" "),a("p",[t._v("解决问题分区合并，动态设定内点率的阈值")]),t._v(" "),a("h2",{attrs:{id:"graph-sfm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#graph-sfm"}},[t._v("#")]),t._v(" Graph SfM")]),t._v(" "),a("p",[t._v("一样的，采用图割的方式进行划分，绿色节点的边代表弱边，红色是切割线")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://lzh-images.oss-cn-hangzhou.aliyuncs.com/images/image-20230414094929549.png",alt:"image-20230414094929549"}})]),t._v(" "),a("p",[t._v("切割完之后，把子图当成一个节点，删掉的边作为新的边，再次将他们连接起来")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://lzh-images.oss-cn-hangzhou.aliyuncs.com/images/image-20230414095126162.png",alt:"image-20230414095126162"}})]),t._v(" "),a("p",[t._v("对这个新的图生成最大生成树")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://lzh-images.oss-cn-hangzhou.aliyuncs.com/images/image-20230414095215120.png",alt:"image-20230414095215120"}})]),t._v(" "),a("p",[t._v("再对最大生成树进行扩展一些边")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://lzh-images.oss-cn-hangzhou.aliyuncs.com/images/image-20230414095243709.png",alt:"image-20230414095243709"}})])])}),[],!1,null,null,null);a.default=i.exports}}]);