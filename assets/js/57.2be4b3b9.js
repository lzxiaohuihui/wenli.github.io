(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{386:function(a,t,e){"use strict";e.r(t);var r=e(3),s=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h3",{attrs:{id:"summarized"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#summarized"}},[a._v("#")]),a._v(" summarized")]),a._v(" "),t("ol",[t("li",[a._v("CLD_MVS管道由 初始重建，自信度预测，自信度驱动，边界插值，像素级优化。")]),a._v(" "),t("li",[a._v("提出了一种normal-aware PatchMatch来提高法线贴图的精度。")]),a._v(" "),t("li",[a._v("提出了一种基于置信度驱动和边界感知的插值方式，获得可靠的先验深度图。将空间置信度和视差图置信度结合来检测可靠的地面控制点。")]),a._v(" "),t("li",[a._v("通过高度匹配误差提高视差图的精度。")])]),a._v(" "),t("h3",{attrs:{id:"related-work"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#related-work"}},[a._v("#")]),a._v(" Related Work")]),a._v(" "),t("p",[a._v("MVS方法可以分为四个类别")]),a._v(" "),t("h4",{attrs:{id:"volumetric-based"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#volumetric-based"}},[a._v("#")]),a._v(" volumetric-based")]),a._v(" "),t("p",[a._v("​\t假设3D场景嵌入在一个预先定义的3D体块中。")]),a._v(" "),t("h4",{attrs:{id:"mesh-based"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mesh-based"}},[a._v("#")]),a._v(" mesh-based")]),a._v(" "),t("p",[a._v("​\t对三角mesh进行最小化能量函数变形对齐到真是表面。")]),a._v(" "),t("h4",{attrs:{id:"feature-based"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#feature-based"}},[a._v("#")]),a._v(" feature-based")]),a._v(" "),t("p",[a._v("​\t重建有特征点的区域。")]),a._v(" "),t("h4",{attrs:{id:"depth-map-based"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#depth-map-based"}},[a._v("#")]),a._v(" depth map-based")]),a._v(" "),t("p",[a._v("​\t一般分为两个阶段深度估计和深度融合。每一张图项选择视图然后建立局部关联，提出外点，然后点云融合。")]),a._v(" "),t("h4",{attrs:{id:"confidence-prediction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#confidence-prediction"}},[a._v("#")]),a._v(" Confidence Prediction")]),a._v(" "),t("p",[a._v("​\t置信度度量方法可以改善立体匹配中的视差图。")]),a._v(" "),t("h3",{attrs:{id:"approach"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#approach"}},[a._v("#")]),a._v(" Approach")]),a._v(" "),t("p",[a._v("​\t该方法的主要思想是基于真实场景中存在许多底纹理表面，且难以通过多视图匹配进行可靠重构的假设，我们提出了充分利用可靠重构部分来帮助不可靠重构部分的方法。我们首先需要一个初始的稠密重建和一个检测重建好部分的置信度的方法。然后使用一个可靠的插值方法来填充缺失的表面来改善视差图的一致性和几何细节。在给定一个参考视图，采用一下四个步骤来估计深度图和法线贴图。")]),a._v(" "),t("ol",[t("li",[a._v("使用PatchMatch算法来初步估计深度和法线贴图。")]),a._v(" "),t("li",[a._v("将视差图一致性和空间一致性的置信度相结合，可靠的预测每个深度的正确性。用DCNNs来算空间一致性的置信度。")]),a._v(" "),t("li",[a._v("通过动态和静态指导的置信度驱动和边界感知插值来获得可靠的深度和法线估计。")]),a._v(" "),t("li",[a._v("进一步优化深度和法线误差。")])]),a._v(" "),t("p",[a._v("​")])])}),[],!1,null,null,null);t.default=s.exports}}]);