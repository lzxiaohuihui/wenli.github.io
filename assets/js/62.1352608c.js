(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{395:function(t,Q,a){"use strict";a.r(Q);var T=a(3),e=Object(T.a)({},(function(){var t=this,Q=t._self._c;return Q("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[Q("p",[t._v("我们从互联网收集的图片重建几何图形的方法包括几个阶段")]),t._v(" "),Q("ul",[Q("li",[t._v("相机标定")]),t._v(" "),Q("li",[t._v("为每一张图像估计一张深度图")]),t._v(" "),Q("li",[t._v("两级视图选择算法\n"),Q("ul",[Q("li",[t._v("全局视图选择：找到一组邻域图像。")]),t._v(" "),Q("li",[t._v("局部视图选择：再找到最好的匹配图像。")])])])]),t._v(" "),Q("h3",{attrs:{id:"global-view-selection"}},[Q("a",{staticClass:"header-anchor",attrs:{href:"#global-view-selection"}},[t._v("#")]),t._v(" Global View Selection")]),t._v(" "),Q("p",[t._v("​\t对于每一参考视图R，全局视图选择旨在寻找一组邻域图像N，这些图像在场景内容、外观和尺度方面是立体匹配的良好候选图像。候选图像应与参考图像R有足够的视差。设计一个评分函数来衡量候选图像的质量。")]),t._v(" "),Q("p",[t._v("共享特征加权和")]),t._v(" "),Q("mjx-container",{staticClass:"MathJax",staticStyle:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"},attrs:{jax:"SVG",display:"true"}},[Q("svg",{staticStyle:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-2.975ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"27.924ex",height:"5.124ex",role:"img",focusable:"false",viewBox:"0 -950 12342.3 2264.9","aria-hidden":"true"}},[Q("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"}},[Q("g",{attrs:{"data-mml-node":"math"}},[Q("g",{attrs:{"data-mml-node":"msub"}},[Q("g",{attrs:{"data-mml-node":"mi"}},[Q("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D454",d:"M311 43Q296 30 267 15T206 0Q143 0 105 45T66 160Q66 265 143 353T314 442Q361 442 401 394L404 398Q406 401 409 404T418 412T431 419T447 422Q461 422 470 413T480 394Q480 379 423 152T363 -80Q345 -134 286 -169T151 -205Q10 -205 10 -137Q10 -111 28 -91T74 -71Q89 -71 102 -80T116 -111Q116 -121 114 -130T107 -144T99 -154T92 -162L90 -164H91Q101 -167 151 -167Q189 -167 211 -155Q234 -144 254 -122T282 -75Q288 -56 298 -13Q311 35 311 43ZM384 328L380 339Q377 350 375 354T369 368T359 382T346 393T328 402T306 405Q262 405 221 352Q191 313 171 233T151 117Q151 38 213 38Q269 38 323 108L331 118L384 328Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(510,-150) scale(0.707)"}},[Q("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D445",d:"M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z"}})])]),Q("g",{attrs:{"data-mml-node":"mo",transform:"translate(1096.7,0)"}},[Q("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(1485.7,0)"}},[Q("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D449",d:"M52 648Q52 670 65 683H76Q118 680 181 680Q299 680 320 683H330Q336 677 336 674T334 656Q329 641 325 637H304Q282 635 274 635Q245 630 242 620Q242 618 271 369T301 118L374 235Q447 352 520 471T595 594Q599 601 599 609Q599 633 555 637Q537 637 537 648Q537 649 539 661Q542 675 545 679T558 683Q560 683 570 683T604 682T668 681Q737 681 755 683H762Q769 676 769 672Q769 655 760 640Q757 637 743 637Q730 636 719 635T698 630T682 623T670 615T660 608T652 599T645 592L452 282Q272 -9 266 -16Q263 -18 259 -21L241 -22H234Q216 -22 216 -15Q213 -9 177 305Q139 623 138 626Q133 637 76 637H59Q52 642 52 648Z"}})]),Q("g",{attrs:{"data-mml-node":"mo",transform:"translate(2254.7,0)"}},[Q("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"29",d:"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"}})]),Q("g",{attrs:{"data-mml-node":"mo",transform:"translate(2921.5,0)"}},[Q("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"3D",d:"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"}})]),Q("g",{attrs:{"data-mml-node":"munder",transform:"translate(3977.2,0)"}},[Q("g",{attrs:{"data-mml-node":"mo",transform:"translate(409.2,0)"}},[Q("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"2211",d:"M60 948Q63 950 665 950H1267L1325 815Q1384 677 1388 669H1348L1341 683Q1320 724 1285 761Q1235 809 1174 838T1033 881T882 898T699 902H574H543H251L259 891Q722 258 724 252Q725 250 724 246Q721 243 460 -56L196 -356Q196 -357 407 -357Q459 -357 548 -357T676 -358Q812 -358 896 -353T1063 -332T1204 -283T1307 -196Q1328 -170 1348 -124H1388Q1388 -125 1381 -145T1356 -210T1325 -294L1267 -449L666 -450Q64 -450 61 -448Q55 -446 55 -439Q55 -437 57 -433L590 177Q590 178 557 222T452 366T322 544L56 909L55 924Q55 945 60 948Z"}})]),Q("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(0,-1097.8) scale(0.707)","data-mjx-texclass":"ORD"}},[Q("g",{attrs:{"data-mml-node":"msub"}},[Q("g",{attrs:{"data-mml-node":"mi"}},[Q("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D439",d:"M48 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H742Q749 676 749 669Q749 664 736 557T722 447Q720 440 702 440H690Q683 445 683 453Q683 454 686 477T689 530Q689 560 682 579T663 610T626 626T575 633T503 634H480Q398 633 393 631Q388 629 386 623Q385 622 352 492L320 363H375Q378 363 398 363T426 364T448 367T472 374T489 386Q502 398 511 419T524 457T529 475Q532 480 548 480H560Q567 475 567 470Q567 467 536 339T502 207Q500 200 482 200H470Q463 206 463 212Q463 215 468 234T473 274Q473 303 453 310T364 317H309L277 190Q245 66 245 60Q245 46 334 46H359Q365 40 365 39T363 19Q359 6 353 0H336Q295 2 185 2Q120 2 86 2T48 1Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(676,-150) scale(0.707)"}},[Q("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D449",d:"M52 648Q52 670 65 683H76Q118 680 181 680Q299 680 320 683H330Q336 677 336 674T334 656Q329 641 325 637H304Q282 635 274 635Q245 630 242 620Q242 618 271 369T301 118L374 235Q447 352 520 471T595 594Q599 601 599 609Q599 633 555 637Q537 637 537 648Q537 649 539 661Q542 675 545 679T558 683Q560 683 570 683T604 682T668 681Q737 681 755 683H762Q769 676 769 672Q769 655 760 640Q757 637 743 637Q730 636 719 635T698 630T682 623T670 615T660 608T652 599T645 592L452 282Q272 -9 266 -16Q263 -18 259 -21L241 -22H234Q216 -22 216 -15Q213 -9 177 305Q139 623 138 626Q133 637 76 637H59Q52 642 52 648Z"}})])]),Q("g",{attrs:{"data-mml-node":"mo",transform:"translate(1269.8,0)"}},[Q("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"2229",d:"M88 -21T75 -21T55 -7V200Q55 231 55 280Q56 414 60 428Q61 430 61 431Q77 500 152 549T332 598Q443 598 522 544T610 405Q611 399 611 194V-7Q604 -22 591 -22Q582 -22 572 -9L570 405Q563 433 556 449T529 485Q498 519 445 538T334 558Q251 558 179 518T96 401Q95 396 95 193V-7Q88 -21 75 -21Z"}})]),Q("g",{attrs:{"data-mml-node":"msub",transform:"translate(1936.8,0)"}},[Q("g",{attrs:{"data-mml-node":"mi"}},[Q("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D439",d:"M48 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H742Q749 676 749 669Q749 664 736 557T722 447Q720 440 702 440H690Q683 445 683 453Q683 454 686 477T689 530Q689 560 682 579T663 610T626 626T575 633T503 634H480Q398 633 393 631Q388 629 386 623Q385 622 352 492L320 363H375Q378 363 398 363T426 364T448 367T472 374T489 386Q502 398 511 419T524 457T529 475Q532 480 548 480H560Q567 475 567 470Q567 467 536 339T502 207Q500 200 482 200H470Q463 206 463 212Q463 215 468 234T473 274Q473 303 453 310T364 317H309L277 190Q245 66 245 60Q245 46 334 46H359Q365 40 365 39T363 19Q359 6 353 0H336Q295 2 185 2Q120 2 86 2T48 1Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(676,-150) scale(0.707)"}},[Q("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D445",d:"M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z"}})])])])]),Q("g",{attrs:{"data-mml-node":"msub",transform:"translate(6406.3,0)"}},[Q("g",{attrs:{"data-mml-node":"mi"}},[Q("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D464",d:"M580 385Q580 406 599 424T641 443Q659 443 674 425T690 368Q690 339 671 253Q656 197 644 161T609 80T554 12T482 -11Q438 -11 404 5T355 48Q354 47 352 44Q311 -11 252 -11Q226 -11 202 -5T155 14T118 53T104 116Q104 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Q21 293 29 315T52 366T96 418T161 441Q204 441 227 416T250 358Q250 340 217 250T184 111Q184 65 205 46T258 26Q301 26 334 87L339 96V119Q339 122 339 128T340 136T341 143T342 152T345 165T348 182T354 206T362 238T373 281Q402 395 406 404Q419 431 449 431Q468 431 475 421T483 402Q483 389 454 274T422 142Q420 131 420 107V100Q420 85 423 71T442 42T487 26Q558 26 600 148Q609 171 620 213T632 273Q632 306 619 325T593 357T580 385Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(749,-150) scale(0.707)"}},[Q("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D441",d:"M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z"}})])]),Q("g",{attrs:{"data-mml-node":"mo",transform:"translate(7833.2,0)"}},[Q("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(8222.2,0)"}},[Q("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D453",d:"M118 -162Q120 -162 124 -164T135 -167T147 -168Q160 -168 171 -155T187 -126Q197 -99 221 27T267 267T289 382V385H242Q195 385 192 387Q188 390 188 397L195 425Q197 430 203 430T250 431Q298 431 298 432Q298 434 307 482T319 540Q356 705 465 705Q502 703 526 683T550 630Q550 594 529 578T487 561Q443 561 443 603Q443 622 454 636T478 657L487 662Q471 668 457 668Q445 668 434 658T419 630Q412 601 403 552T387 469T380 433Q380 431 435 431Q480 431 487 430T498 424Q499 420 496 407T491 391Q489 386 482 386T428 385H372L349 263Q301 15 282 -47Q255 -132 212 -173Q175 -205 139 -205Q107 -205 81 -186T55 -132Q55 -95 76 -78T118 -61Q162 -61 162 -103Q162 -122 151 -136T127 -157L118 -162Z"}})]),Q("g",{attrs:{"data-mml-node":"mo",transform:"translate(8772.2,0)"}},[Q("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"29",d:"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"}})]),Q("g",{attrs:{"data-mml-node":"mo",transform:"translate(9383.4,0)"}},[Q("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"22C5",d:"M78 250Q78 274 95 292T138 310Q162 310 180 294T199 251Q199 226 182 208T139 190T96 207T78 250Z"}})]),Q("g",{attrs:{"data-mml-node":"msub",transform:"translate(9883.6,0)"}},[Q("g",{attrs:{"data-mml-node":"mi"}},[Q("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D464",d:"M580 385Q580 406 599 424T641 443Q659 443 674 425T690 368Q690 339 671 253Q656 197 644 161T609 80T554 12T482 -11Q438 -11 404 5T355 48Q354 47 352 44Q311 -11 252 -11Q226 -11 202 -5T155 14T118 53T104 116Q104 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Q21 293 29 315T52 366T96 418T161 441Q204 441 227 416T250 358Q250 340 217 250T184 111Q184 65 205 46T258 26Q301 26 334 87L339 96V119Q339 122 339 128T340 136T341 143T342 152T345 165T348 182T354 206T362 238T373 281Q402 395 406 404Q419 431 449 431Q468 431 475 421T483 402Q483 389 454 274T422 142Q420 131 420 107V100Q420 85 423 71T442 42T487 26Q558 26 600 148Q609 171 620 213T632 273Q632 306 619 325T593 357T580 385Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(749,-150) scale(0.707)"}},[Q("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D460",d:"M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z"}})])]),Q("g",{attrs:{"data-mml-node":"mo",transform:"translate(11014.3,0)"}},[Q("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(11403.3,0)"}},[Q("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D453",d:"M118 -162Q120 -162 124 -164T135 -167T147 -168Q160 -168 171 -155T187 -126Q197 -99 221 27T267 267T289 382V385H242Q195 385 192 387Q188 390 188 397L195 425Q197 430 203 430T250 431Q298 431 298 432Q298 434 307 482T319 540Q356 705 465 705Q502 703 526 683T550 630Q550 594 529 578T487 561Q443 561 443 603Q443 622 454 636T478 657L487 662Q471 668 457 668Q445 668 434 658T419 630Q412 601 403 552T387 469T380 433Q380 431 435 431Q480 431 487 430T498 424Q499 420 496 407T491 391Q489 386 482 386T428 385H372L349 263Q301 15 282 -47Q255 -132 212 -173Q175 -205 139 -205Q107 -205 81 -186T55 -132Q55 -95 76 -78T118 -61Q162 -61 162 -103Q162 -122 151 -136T127 -157L118 -162Z"}})]),Q("g",{attrs:{"data-mml-node":"mo",transform:"translate(11953.3,0)"}},[Q("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"29",d:"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"}})])])])]),Q("mjx-assistive-mml",{staticStyle:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"},attrs:{unselectable:"on",display:"block"}},[Q("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[Q("msub",[Q("mi",[t._v("g")]),Q("mi",[t._v("R")])],1),Q("mo",{attrs:{stretchy:"false"}},[t._v("(")]),Q("mi",[t._v("V")]),Q("mo",{attrs:{stretchy:"false"}},[t._v(")")]),Q("mo",[t._v("=")]),Q("munder",[Q("mo",{attrs:{"data-mjx-texclass":"OP"}},[t._v("∑")]),Q("mrow",{attrs:{"data-mjx-texclass":"ORD"}},[Q("msub",[Q("mi",[t._v("F")]),Q("mi",[t._v("V")])],1),Q("mo",[t._v("∩")]),Q("msub",[Q("mi",[t._v("F")]),Q("mi",[t._v("R")])],1)],1)],1),Q("msub",[Q("mi",[t._v("w")]),Q("mi",[t._v("N")])],1),Q("mo",{attrs:{stretchy:"false"}},[t._v("(")]),Q("mi",[t._v("f")]),Q("mo",{attrs:{stretchy:"false"}},[t._v(")")]),Q("mo",[t._v("⋅")]),Q("msub",[Q("mi",[t._v("w")]),Q("mi",[t._v("s")])],1),Q("mo",{attrs:{stretchy:"false"}},[t._v("(")]),Q("mi",[t._v("f")]),Q("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1)],1)],1),Q("p",[Q("mjx-container",{staticClass:"MathJax",staticStyle:{direction:"ltr",position:"relative"},attrs:{jax:"SVG"}},[Q("svg",{staticStyle:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.339ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"3.006ex",height:"1.878ex",role:"img",focusable:"false",viewBox:"0 -680 1328.5 830","aria-hidden":"true"}},[Q("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"}},[Q("g",{attrs:{"data-mml-node":"math"}},[Q("g",{attrs:{"data-mml-node":"msub"}},[Q("g",{attrs:{"data-mml-node":"mi"}},[Q("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D439",d:"M48 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H742Q749 676 749 669Q749 664 736 557T722 447Q720 440 702 440H690Q683 445 683 453Q683 454 686 477T689 530Q689 560 682 579T663 610T626 626T575 633T503 634H480Q398 633 393 631Q388 629 386 623Q385 622 352 492L320 363H375Q378 363 398 363T426 364T448 367T472 374T489 386Q502 398 511 419T524 457T529 475Q532 480 548 480H560Q567 475 567 470Q567 467 536 339T502 207Q500 200 482 200H470Q463 206 463 212Q463 215 468 234T473 274Q473 303 453 310T364 317H309L277 190Q245 66 245 60Q245 46 334 46H359Q365 40 365 39T363 19Q359 6 353 0H336Q295 2 185 2Q120 2 86 2T48 1Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(676,-150) scale(0.707)"}},[Q("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D44B",d:"M42 0H40Q26 0 26 11Q26 15 29 27Q33 41 36 43T55 46Q141 49 190 98Q200 108 306 224T411 342Q302 620 297 625Q288 636 234 637H206Q200 643 200 645T202 664Q206 677 212 683H226Q260 681 347 681Q380 681 408 681T453 682T473 682Q490 682 490 671Q490 670 488 658Q484 643 481 640T465 637Q434 634 411 620L488 426L541 485Q646 598 646 610Q646 628 622 635Q617 635 609 637Q594 637 594 648Q594 650 596 664Q600 677 606 683H618Q619 683 643 683T697 681T738 680Q828 680 837 683H845Q852 676 852 672Q850 647 840 637H824Q790 636 763 628T722 611T698 593L687 584Q687 585 592 480L505 384Q505 383 536 304T601 142T638 56Q648 47 699 46Q734 46 734 37Q734 35 732 23Q728 7 725 4T711 1Q708 1 678 1T589 2Q528 2 496 2T461 1Q444 1 444 10Q444 11 446 25Q448 35 450 39T455 44T464 46T480 47T506 54Q523 62 523 64Q522 64 476 181L429 299Q241 95 236 84Q232 76 232 72Q232 53 261 47Q262 47 267 47T273 46Q276 46 277 46T280 45T283 42T284 35Q284 26 282 19Q279 6 276 4T261 1Q258 1 243 1T201 2T142 2Q64 2 42 0Z"}})])])])])]),Q("mjx-assistive-mml",{staticStyle:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"},attrs:{unselectable:"on",display:"inline"}},[Q("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[Q("msub",[Q("mi",[t._v("F")]),Q("mi",[t._v("X")])],1)],1)],1)],1),t._v("是视图X的观测到的特征点，"),Q("mjx-container",{staticClass:"MathJax",staticStyle:{direction:"ltr",position:"relative"},attrs:{jax:"SVG"}},[Q("svg",{staticStyle:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.339ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"3.228ex",height:"1.342ex",role:"img",focusable:"false",viewBox:"0 -443 1426.9 593","aria-hidden":"true"}},[Q("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"}},[Q("g",{attrs:{"data-mml-node":"math"}},[Q("g",{attrs:{"data-mml-node":"msub"}},[Q("g",{attrs:{"data-mml-node":"mi"}},[Q("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D464",d:"M580 385Q580 406 599 424T641 443Q659 443 674 425T690 368Q690 339 671 253Q656 197 644 161T609 80T554 12T482 -11Q438 -11 404 5T355 48Q354 47 352 44Q311 -11 252 -11Q226 -11 202 -5T155 14T118 53T104 116Q104 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Q21 293 29 315T52 366T96 418T161 441Q204 441 227 416T250 358Q250 340 217 250T184 111Q184 65 205 46T258 26Q301 26 334 87L339 96V119Q339 122 339 128T340 136T341 143T342 152T345 165T348 182T354 206T362 238T373 281Q402 395 406 404Q419 431 449 431Q468 431 475 421T483 402Q483 389 454 274T422 142Q420 131 420 107V100Q420 85 423 71T442 42T487 26Q558 26 600 148Q609 171 620 213T632 273Q632 306 619 325T593 357T580 385Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(749,-150) scale(0.707)"}},[Q("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D441",d:"M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z"}})])])])])]),Q("mjx-assistive-mml",{staticStyle:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"},attrs:{unselectable:"on",display:"inline"}},[Q("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[Q("msub",[Q("mi",[t._v("w")]),Q("mi",[t._v("N")])],1)],1)],1)],1),t._v("是计算两视图之间，共视的角度权重。"),Q("mjx-container",{staticClass:"MathJax",staticStyle:{direction:"ltr",position:"relative"},attrs:{jax:"SVG"}},[Q("svg",{staticStyle:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.355ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"2.558ex",height:"1.358ex",role:"img",focusable:"false",viewBox:"0 -443 1130.6 600.1","aria-hidden":"true"}},[Q("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"}},[Q("g",{attrs:{"data-mml-node":"math"}},[Q("g",{attrs:{"data-mml-node":"msub"}},[Q("g",{attrs:{"data-mml-node":"mi"}},[Q("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D464",d:"M580 385Q580 406 599 424T641 443Q659 443 674 425T690 368Q690 339 671 253Q656 197 644 161T609 80T554 12T482 -11Q438 -11 404 5T355 48Q354 47 352 44Q311 -11 252 -11Q226 -11 202 -5T155 14T118 53T104 116Q104 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Q21 293 29 315T52 366T96 418T161 441Q204 441 227 416T250 358Q250 340 217 250T184 111Q184 65 205 46T258 26Q301 26 334 87L339 96V119Q339 122 339 128T340 136T341 143T342 152T345 165T348 182T354 206T362 238T373 281Q402 395 406 404Q419 431 449 431Q468 431 475 421T483 402Q483 389 454 274T422 142Q420 131 420 107V100Q420 85 423 71T442 42T487 26Q558 26 600 148Q609 171 620 213T632 273Q632 306 619 325T593 357T580 385Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(749,-150) scale(0.707)"}},[Q("path",{staticStyle:{"stroke-width":"3"},attrs:{"data-c":"1D460",d:"M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z"}})])])])])]),Q("mjx-assistive-mml",{staticStyle:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"},attrs:{unselectable:"on",display:"inline"}},[Q("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[Q("msub",[Q("mi",[t._v("w")]),Q("mi",[t._v("s")])],1)],1)],1)],1),t._v("是计算两视图之间在共视特征区域的3D分辨率的差异。")],1),t._v(" "),Q("h3",{attrs:{id:"local-view-selection"}},[Q("a",{staticClass:"header-anchor",attrs:{href:"#local-view-selection"}},[t._v("#")]),t._v(" Local View Selection")]),t._v(" "),Q("p",[t._v("​\t从全局视图中选取一个子集。首先计算local得分，然后计算NCC得分，如果大于阈值，则加入到局部视图中。")]),t._v(" "),Q("h3",{attrs:{id:"multi-view-stereo-reconstruction"}},[Q("a",{staticClass:"header-anchor",attrs:{href:"#multi-view-stereo-reconstruction"}},[t._v("#")]),t._v(" Multi-View Stereo Reconstruction")]),t._v(" "),Q("p",[t._v("...")])],1)}),[],!1,null,null,null);Q.default=e.exports}}]);