(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{394:function(n,o,v){"use strict";v.r(o);var _=v(3),t=Object(_.a)({},(function(){var n=this,o=n._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[o("p",[n._v("使用ORB特征")]),n._v(" "),o("p",[n._v("三大主线程，Tracking、Local Mapping、Loop Closing。")]),n._v(" "),o("p",[o("strong",[n._v("Tracking")]),n._v(" 首先对当前帧，和上一帧进行特征匹配计算位姿，然后使用motion-only BA进行优化。如果跟踪失败，则执行全局重定位（词袋模型）。一旦初始化成功，则通过共视图来优化当前局部地图。通过重投影在局部地图中搜索匹配点，进一步优化相机的位姿。最后决定当前帧是否是关键帧。")]),n._v(" "),o("p",[o("strong",[n._v("Local Mapping")]),n._v(" 处理处理一个新的关键帧，并进行局部BA来优化当前场景下附近的帧的位姿。在共视图中与相连的关键帧进行三角化，创建地图点。剔除地图点。")]),n._v(" "),o("p",[o("strong",[n._v("Loop Closing")]),n._v(" 检测每一个关键帧。匹配回环后进行位姿图优化。")]),n._v(" "),o("p",[n._v("一些数据表示：")]),n._v(" "),o("p",[o("strong",[n._v("地图点")]),n._v(" 世界坐标系下的3D坐标；观测方向（与关键帧光心相连，所有关键帧的平均值）；ORB描述符；观测到该点的最大深度和最小深度；")]),n._v(" "),o("p",[o("strong",[n._v("关键帧")]),n._v(" 相机位姿；相机内参；ORB特征点；")]),n._v(" "),o("p",[o("strong",[n._v("共视图")]),n._v(" 如果两个关键帧之间有15个共同观测的地图点，则他们之间存在一条边，边的权值为共同观测的点数。")]),n._v(" "),o("p",[o("strong",[n._v("本质图")]),n._v(" 包含所有关键帧的最小生成树、共视图中权值大于100的边以及回环边。")]),n._v(" "),o("p",[o("strong",[n._v("地图初始化")]),n._v(" 自动选择一个模型进行地图初始化，首先通过两帧并行计算H矩阵和F矩阵，并且计算他们的得分，根据得分来选择使用H矩阵，还是F矩阵来进行初始化。一般来说，场景是平面或低视差就用H矩阵，非平面足够视差就用F矩阵。")])])}),[],!1,null,null,null);o.default=t.exports}}]);