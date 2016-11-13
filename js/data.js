

//基本值LV0、LV100 2016/11/12

var basedata = '<bases>'+
               '<sword><hp><lv0>1560</lv0><lv100>2611</lv100></hp><atk><lv0>66</lv0><lv100>222</lv100></atk><def><lv0>65</lv0><lv100>217</lv100></def></sword>'+
               '<spear><hp><lv0>1140</lv0><lv100>1908</lv100></hp><atk><lv0>51</lv0><lv100>172</lv100></atk><def><lv0>48</lv0><lv100>162</lv100></def></spear>'+
               '<hummer><hp><lv0>1680</lv0><lv100>2812</lv100></hp><atk><lv0>81</lv0><lv100>272</lv100></atk><def><lv0>66</lv0><lv100>222</lv100></def></hummer>'+
               '<shield><hp><lv0>1800</lv0><lv100>3000</lv100></hp><atk><lv0>61</lv0><lv100>205</lv100></atk><def><lv0>70</lv0><lv100>235</lv100></def></shield>'+
               '<gun><hp><lv0>840</lv0><lv100>1406</lv100></hp><atk><lv0>90</lv0><lv100>303</lv100></atk><def><lv0>36</lv0><lv100>121</lv100></def></gun>'+
               '<crossbow><hp><lv0>1080</lv0><lv100>1808</lv100></hp><atk><lv0>72</lv0><lv100>242</lv100></atk><def><lv0>45</lv0><lv100>152</lv100></def></crossbow>'+
               '<bow><hp><lv0>960</lv0><lv100>1607</lv100></hp><atk><lv0>50</lv0><lv100>168</lv100></atk><def><lv0>39</lv0><lv100>131</lv100></def></bow>'+
               '<cannon><hp><lv0>870</lv0><lv100>1456</lv100></hp><atk><lv0>69</lv0><lv100>232</lv100></atk><def><lv0>39</lv0><lv100>131</lv100></def></cannon>'+
               '<spell><hp><lv0>960</lv0><lv100>1607</lv100></hp><atk><lv0>48</lv0><lv100>162</lv100></atk><def><lv0>34</lv0><lv100>116</lv100></def></spell>'+
               '<song><hp><lv0>900</lv0><lv100>1507</lv100></hp><atk><lv0>41</lv0><lv100>141</lv100></atk><def><lv0>37</lv0><lv100>126</lv100></def></song>'+
               '</bases>';

//各城娘參數值 2016/11/13

var pars = '<pars>'+

            //刀城

           '<sword name="仙台城改壱"  attr="平山" rare="6"><hp>1.23</hp><atk>1.15</atk><def>1.07</def></sword>'+
           '<sword name="首里城"      attr="平山" rare="6"><hp>1.18</hp><atk>1.12</atk><def>1.15</def></sword>'+
           '<sword name="和歌山城" attr="平山" rare="6"><hp>1.19</hp><atk>1.15</atk><def>1.11</def></sword>'+
           '<sword name="ブラン城" attr="山" rare="6"><hp>1.06</hp><atk>1.20</atk><def>1.19</def></sword>'+
           '<sword name="吉野ヶ里" attr="平" rare="6"><hp>1.20</hp><atk>1.18</atk><def>1.07</def></sword>'+
           '<sword name="前田金沢城" attr="平山" rare="6"><hp>1.19</hp><atk>1.17</atk><def>1.09</def></sword>'+
           '<sword name="帰雲城改壱" attr="山" rare="6"><hp>1.15</hp><atk>1.15</atk><def>1.15</def></sword>'+
           '<sword name="福山城改壱" attr="平山" rare="6"><hp>1.22</hp><atk>1.11</atk><def>1.12</def></sword>'+
           '<sword name="仙台城" attr="平山" rare="5"><hp>1.19</hp><atk>1.11</atk><def>1.00</def></sword>'+
           '<sword name="忍城改壱" attr="平" rare="5"><hp>1.11</hp><atk>1.09</atk><def>1.10</def></sword>'+
           '<sword name="伊賀上野城改壱" attr="平山" rare="5"><hp>1.12</hp><atk>1.14</atk><def>1.04</def></sword>'+
           '<sword name="岡山城改壱" attr="平山" rare="5"><hp>1.10</hp><atk>1.10</atk><def>1.00</def></sword>'+
           '<sword name="一乗谷城改壱" attr="山" rare="5"><hp>1.09</hp><atk>1.15</atk><def>1.06</def></sword>'+
           '<sword name="福山城" attr="平山" rare="5"><hp>1.17</hp><atk>1.06</atk><def>1.07</def></sword>'+
           '<sword name="春日山城" attr="山" rare="5"><hp>1.07</hp><atk>1.10</atk><def>1.13</def></sword>'+
           '<sword name="帰雲城" attr="山" rare="5"><hp>1.11</hp><atk>1.08</atk><def>1.11</def></sword>'+
           '<sword name="清洲城" attr="平" rare="5"><hp>1.09</hp><atk>1.13</atk><def>1.08</def></sword>'+
           '<sword name="山形城" attr="山" rare="4"><hp>1.05</hp><atk>1.00</atk><def>1.10</def></sword>'+
           '<sword name="忍城" attr="平" rare="4"><hp>1.06</hp><atk>1.04</atk><def>1.05</def></sword>'+
           '<sword name="伊賀上野城" attr="平山" rare="4"><hp>1.08</hp><atk>1.07</atk><def>1.00</def></sword>'+
           '<sword name="岡山城" attr="平山" rare="4"><hp>1.05</hp><atk>1.05</atk><def>1.05</def></sword>'+
           '<sword name="備中高松城改壱" attr="平" rare="4"><hp>1.07</hp><atk>1.04</atk><def>1.04</def></sword>'+
           '<sword name="一乗谷城" attr="山" rare="4"><hp>1.05</hp><atk>1.08</atk><def>1.02</def></sword>'+
           '<sword name="相馬中村城" attr="平山" rare="4"><hp>1.07</hp><atk>1.09</atk><def>0.99</def></sword>'+
           '<sword name="千代城改壱" attr="山" rare="3"><hp>0.94</hp><atk>1.08</atk><def>0.98</def></sword>'+
           '<sword name="稲葉山城" attr="山" rare="3"><hp>0.99</hp><atk>0.98</atk><def>1.03</def></sword>'+
           '<sword name="苗木城" attr="山" rare="3"><hp>0.93</hp><atk>0.98</atk><def>1.09</def></sword>'+
           '<sword name="坂戸城改壱" attr="山" rare="3"><hp>0.96</hp><atk>1.01</atk><def>1.02</def></sword>'+
           '<sword name="備中高松城" attr="平" rare="3"><hp>1.00</hp><atk>1.00</atk><def>1.00</def></sword>'+
           '<sword name="佐賀城" attr="平" rare="3"><hp>1.02</hp><atk>0.97</atk><def>1.00</def></sword>'+
           '<sword name="与板城" attr="山" rare="3"><hp>1.01</hp><atk>1.07</atk><def>0.92</def></sword>'+
           '<sword name="伊丹城" attr="平" rare="3"><hp>0.99</hp><atk>1.02</atk><def>0.99</def></sword>'+
           '<sword name="丸山城" attr="平水" rare="3"><hp>1.00</hp><atk>1.04</atk><def>0.96</def></sword>'+
           '<sword name="千代城" attr="山" rare="2"><hp>0.91</hp><atk>1.05</atk><def>0.94</def></sword>'+
           '<sword name="黒川城" attr="平山" rare="2"><hp>0.98</hp><atk>0.97</atk><def>0.95</def></sword>'+
           '<sword name="本庄城改壱" attr="平" rare="2"><hp>0.97</hp><atk>0.96</atk><def>0.96</def></sword>'+
           '<sword name="那古野城" attr="平" rare="2"><hp>0.97</hp><atk>0.95</atk><def>0.98</def></sword>'+
           '<sword name="坂戸城" attr="山" rare="2"><hp>0.93</hp><atk>0.98</atk><def>0.99</def></sword>'+
           '<sword name="金ヶ崎城" attr="山水" rare="2"><hp>0.93</hp><atk>1.01</atk><def>0.96</def></sword>'+
           '<sword name="仁木館" attr="平山" rare="2"><hp>1.00</hp><atk>0.99</atk><def>0.91</def></sword>'+
           '<sword name="松倉城" attr="山" rare="2"><hp>0.93</hp><atk>1.02</atk><def>0.95</def></sword>'+
           '<sword name="久慈城" attr="平山" rare="2"><hp>0.99</hp><atk>0.96</atk><def>0.95</def></sword>'+
           '<sword name="東黒川館" attr="平山" rare="1"><hp>0.96</hp><atk>0.9</atk><def>0.94</def></sword>'+
           '<sword name="馬場城" attr="平山" rare="1"><hp>0.95</hp><atk>0.95</atk><def>0.9</def></sword>'+
           '<sword name="本庄城" attr="平" rare="1"><hp>0.94</hp><atk>0.93</atk><def>0.93</def></sword>'+
           '<sword name="柳之丸" attr="平" rare="1"><hp>0.90</hp><atk>0.98</atk><def>0.92</def></sword>'+
           '<sword name="津留賀城" attr="山水" rare="1"><hp>0.85</hp><atk>0.96</atk><def>0.99</def></sword>'+
           '<sword name="水口城" attr="平" rare="1"><hp>0.92</hp><atk>0.94</atk><def>0.94</def></sword>'+
           '<sword name="村中城" attr="平" rare="1"><hp>0.88</hp><atk>0.94</atk><def>0.98</def></sword>'+
           '<sword name="志自岐原城" attr="平山" rare="1"><hp>1.02</hp><atk>0.91</atk><def>0.87</def></sword>'+

           //槍城

           '<spear name="佐和山城改壱" attr="山" rare="7"><hp>1.25</hp><atk>1.24</atk><def>1.11</def></spear>'+
           '<spear name="彦根城" attr="平山" rare="7"><hp>1.25</hp><atk>1.23</atk><def>1.12</def></spear>'+
           '<spear name="佐和山城" attr="山" rare="6"><hp>1.18</hp><atk>1.20</atk><def>1.07</def></spear>'+
           '<spear name="丸亀城改壱" attr="平山" rare="6"><hp>1.18</hp><atk>1.10</atk><def>1.17</def></spear>'+
           '<spear name="伊予松山城" attr="平山" rare="6"><hp>1.09</hp><atk>1.21</atk><def>1.15</def></spear>'+
           '<spear name="丸亀城" attr="平山" rare="5"><hp>1.14</hp><atk>1.03</atk><def>1.13</def></spear>'+
           '<spear name="小谷城" attr="山" rare="5"><hp>1.11</hp><atk>1.10</atk><def>1.09</def></spear>'+
           '<spear name="佐久間金沢城改壱" attr="平山" rare="5"><hp>1.13</hp><atk>1.13</atk><def>1.04</def></spear>'+
           '<spear name="尾山城" attr="平山" rare="5"><hp>1.05</hp><atk>1.18</atk><def>1.07</def></spear>'+
           '<spear name="小諸城" attr="平山" rare="4"><hp>1.04</hp><atk>1.04</atk><def>1.07</def></spear>'+
           '<spear name="七尾城" attr="山" rare="4"><hp>1.00</hp><atk>1.08</atk><def>1.07</def></spear>'+
           '<spear name="福井城" attr="平" rare="4"><hp>1.05</hp><atk>1.02</atk><def>1.08</def></spear>'+
           '<spear name="鹿野城改壱" attr="平山" rare="4"><hp>1.08</hp><atk>1.03</atk><def>1.04</def></spear>'+
           '<spear name="月山富田城改壱" attr="山" rare="4"><hp>1.00</hp><atk>1.05</atk><def>1.10</def></spear>'+
           '<spear name="岩櫃城改壱" attr="山" rare="4"><hp>0.97</hp><atk>1.08</atk><def>1.10</def></spear>'+
           '<spear name="真田丸" attr="平" rare="4"><hp>1.04</hp><atk>1.03</atk><def>1.08</def></spear>'+
           '<spear name="佐久間金沢城" attr="平山" rare="4"><hp>1.06</hp><atk>1.09</atk><def>1.00</def></spear>'+
           '<spear name="大多喜城" attr="平山" rare="3"><hp>0.98</hp><atk>0.98</atk><def>1.04</def></spear>'+
           '<spear name="新府城改壱" attr="平山" rare="3"><hp>0.98</hp><atk>1.00</atk><def>1.02</def></spear>'+
           '<spear name="北ノ庄城" attr="平" rare="3"><hp>1.05</hp><atk>0.97</atk><def>0.98</def></spear>'+
           '<spear name="鹿野城" attr="平山" rare="3"><hp>1.01</hp><atk>0.99</atk><def>1.00</def></spear>'+
           '<spear name="高松城" attr="水" rare="3"><hp>1.00</hp><atk>1.01</atk><def>0.99</def></spear>'+
           '<spear name="月山富田城" attr="山" rare="3"><hp>0.96</hp><atk>1.01</atk><def>1.03</def></spear>'+
           '<spear name="脇本城改壱" attr="山水" rare="3"><hp>0.94</hp><atk>1.07</atk><def>0.97</def></spear>'+
           '<spear name="岩櫃城" attr="山" rare="3"><hp>0.93</hp><atk>1.04</atk><def>1.03</def></spear>'+
           '<spear name="八王子城" attr="山" rare="3"><hp>0.93</hp><atk>1.05</atk><def>1.02</def></spear>'+
           '<spear name="石垣山城" attr="山" rare="3"><hp>0.94</hp><atk>1.06</atk><def>1.00</def></spear>'+
           '<spear name="根城" attr="平山" rare="2"><hp>0.92</hp><atk>0.97</atk><def>1.01</def></spear>'+
           '<spear name="新府城" attr="平山" rare="2"><hp>0.95</hp><atk>0.97</atk><def>0.98</def></spear>'+
           '<spear name="脇本城" attr="山水" rare="2"><hp>0.91</hp><atk>1.05</atk><def>0.94</def></spear>'+
           '<spear name="岩手山城" attr="山" rare="2"><hp>0.93</hp><atk>1.02</atk><def>0.95</def></spear>'+
           '<spear name="中村舘" attr="平山" rare="2"><hp>0.94</hp><atk>1.02</atk><def>0.94</def></spear>'+
           '<spear name="小田喜城" attr="平山" rare="1"><hp>0.91</hp><atk>0.94</atk><def>0.95</def></spear>'+
           '<spear name="防己尾城" attr="平山水" rare="1"><hp>0.92</hp><atk>0.94</atk><def>0.94</def></spear>'+
           '<spear name="大高坂山城" attr="平山" rare="1"><hp>0.91</hp><atk>0.94</atk><def>0.97</def></spear>'+
           '<spear name="日之嶽城" attr="平山水" rare="1"><hp>0.93</hp><atk>0.92</atk><def>0.95</def></spear>'+
           '<spear name="大仏城" attr="平" rare="1"><hp>0.93</hp><atk>0.93</atk><def>0.94</def></spear>'+

           //槌城

           '<hummer name="名古屋城" attr="平" rare="7"><hp>1.22</hp><atk>1.23</atk><def>1.15</def></hummer>'+
           '<hummer name="躑躅ヶ崎館" attr="平" rare="6"><hp>1.12</hp><atk>1.20</atk><def>1.13</def></hummer>'+
           '<hummer name="盛岡城改壱" attr="平山" rare="6"><hp>1.06</hp><atk>1.10</atk><def>1.14</def></hummer>'+
           '<hummer name="ﾌﾗﾝｹﾝｼｭﾀｲﾝ城" attr="山" rare="5"><hp>1.09</hp><atk>1.05</atk><def>1.16</def></hummer>'+
           '<hummer name="有岡城" attr="平" rare="5"><hp>1.06</hp><atk>1.14</atk><def>1.10</def></hummer>'+
           '<hummer name="盛岡城" attr="平山" rare="4"><hp>1.02</hp><atk>1.06</atk><def>1.07</def></hummer>'+
           '<hummer name="鬼ヶ城改壱" attr="山水" rare="3"><hp>0.99</hp><atk>1.03</atk><def>0.97</def></hummer>'+
           '<hummer name="不来方城" attr="平山" rare="2"><hp>0.95</hp><atk>0.96</atk><def>0.99</def></hummer>'+
           '<hummer name="鬼ヶ城" attr="山水" rare="2"><hp>0.96</hp><atk>1.00</atk><def>0.94</def></hummer>'+
           '<hummer name="三木城" attr="平山" rare="2"><hp>1.00</hp><atk>0.99</atk><def>0.91</def></hummer>'+
           '<hummer name="飛山城" attr="平山" rare="1"><hp>0.95</hp><atk>0.90</atk><def>0.95</def></hummer>'+


           //盾城

           '<shield name="ﾉｲｼｭｳﾞｧﾝｼｭﾀｲﾝ城" attr="山" rare="7"><hp>1.20</hp><atk>1.20</atk><def>1.20</def></shield>'+
           '<shield name="ｻﾝﾀﾝｼﾞｪﾛ城" attr="平" rare="5"><hp>1.07</hp><atk>1.11</atk><def>1.12</def></shield>'+

           //鐵炮城

           '<gun name="小田原城改壱" attr="平山水" rare="7"><hp>1.23</hp><atk>1.15</atk><def>1.22</def></gun>'+
           '<gun name="安平城" attr="平水" rare="7"><hp>1.17</hp><atk>1.20</atk><def>1.23</def></gun>'+
           '<gun name="小田原城" attr="平山水" rare="6"><hp>1.18</hp><atk>1.10</atk><def>1.17</def></gun>'+
           '<gun name="福知山城" attr="平山" rare="6"><hp>1.15</hp><atk>1.14</atk><def>1.16</def></gun>'+
           '<gun name="坂本城改壱" attr="平水" rare="6"><hp>1.17</hp><atk>1.18</atk><def>1.10</def></gun>'+
           '<gun name="会津若松城改壱" attr="平山" rare="5"><hp>1.09</hp><atk>1.13</atk><def>1.08</def></gun>'+
           '<gun name="岐阜城" attr="山" rare="5"><hp>1.07</hp><atk>1.11</atk><def>1.12</def></gun>'+
           '<gun name="坂本城" attr="平水" rare="5"><hp>1.13</hp><atk>1.14</atk><def>1.03</def></gun>'+
           '<gun name="二条城" attr="平" rare="5"><hp>1.15</hp><atk>1.08</atk><def>1.07</def></gun>'+
           '<gun name="高知城" attr="平山" rare="5"><hp>1.10</hp><atk>1.17</atk><def>1.03</def></gun>'+
           '<gun name="鳥羽城改壱" attr="平山水" rare="5"><hp>1.10</hp><atk>1.10</atk><def>1.10</def></gun>'+
           '<gun name="今治城改壱" attr="水" rare="5"><hp>1.13</hp><atk>1.12</atk><def>1.20</def></gun>'+
           '<gun name="萩城" attr="平山水" rare="5"><hp>1.05</hp><atk>1.15</atk><def>1.10</def></gun>'+
           '<gun name="ゼーランディア城" attr="平水" rare="5"><hp>1.10</hp><atk>1.06</atk><def>1.14</def></gun>'+
           '<gun name="備中松山城" attr="山" rare="5"><hp>1.14</hp><atk>1.16</atk><def>1.15</def></gun>'+
           '<gun name="中津城" attr="平水" rare="5"><hp>1.12</hp><atk>1.12</atk><def>1.06</def></gun>'+
           '<gun name="松前城" attr="平山水" rare="4"><hp>1.05</hp><atk>1.06</atk><def>1.04</def></gun>'+
           '<gun name="会津若松城" attr="平山" rare="4"><hp>1.05</hp><atk>1.16</atk><def>1.15</def></gun>'+
           '<gun name="宇土城" attr="平山" rare="4"><hp>1.08</hp><atk>1.00</atk><def>1.07</def></gun>'+
           '<gun name="墨俣城改壱" attr="平" rare="4"><hp>1.07</hp><atk>1.02</atk><def>1.06</def></gun>'+
           '<gun name="鳥羽城" attr="平山水" rare="4"><hp>1.05</hp><atk>1.05</atk><def>1.05</def></gun>'+
           '<gun name="長浜城" attr="平水" rare="4"><hp>1.02</hp><atk>1.04</atk><def>1.09</def></gun>'+
           '<gun name="今治城" attr="水" rare="4"><hp>1.08</hp><atk>1.07</atk><def>1.15</def></gun>'+
           '<gun name="久留米城改壱" attr="平山水" rare="4"><hp>1.03</hp><atk>1.06</atk><def>1.06</def></gun>'+
           '<gun name="前橋城" attr="平" rare="3"><hp>1.03</hp><atk>0.99</atk><def>0.98</def></gun>'+
           '<gun name="雑賀城" attr="平山水" rare="3"><hp>1.01</hp><atk>1.01</atk><def>0.98</def></gun>'+
           '<gun name="津和野城" attr="山" rare="3"><hp>0.94</hp><atk>1.03</atk><def>1.03</def></gun>'+
           '<gun name="鹿児島城改壱" attr="平山水" rare="3"><hp>0.97</hp><atk>0.98</atk><def>1.04</def></gun>'+
           '<gun name="能島城" attr="水" rare="3"><hp>1.04</hp><atk>1.02</atk><def>0.94</def></gun>'+
           '<gun name="墨俣城" attr="平" rare="3"><hp>1.02</hp><atk>0.97</atk><def>1.01</def></gun>'+
           '<gun name="根来城" attr="平山" rare="3"><hp>1.01</hp><atk>1.02</atk><def>0.97</def></gun>'+
           '<gun name="四稜郭" attr="平" rare="3"><hp>0.95</hp><atk>0.99</atk><def>1.06</def></gun>'+
           '<gun name="オレンジ城" attr="平水" rare="3"><hp>1.00</hp><atk>0.96</atk><def>1.04</def></gun>'+
           '<gun name="久留米城" attr="平山水" rare="3"><hp>0.96</hp><atk>1.02</atk><def>1.01</def></gun>'+
           '<gun name="厩橋城" attr="平" rare="2"><hp>0.94</hp><atk>0.99</atk><def>0.97</def></gun>'+
           '<gun name="富山城" attr="平" rare="2"><hp>1.00</hp><atk>1.01</atk><def>0.89</def></gun>'+
           '<gun name="上関城" attr="水" rare="2"><hp>0.98</hp><atk>0.96</atk><def>0.96</def></gun>'+
           '<gun name="若松城" attr="水" rare="2"><hp>0.91</hp><atk>1.00</atk><def>0.99</def></gun>'+
           '<gun name="鹿児島城" attr="平山水" rare="2"><hp>0.94</hp><atk>0.95</atk><def>1.01</def></gun>'+
           '<gun name="原城" attr="平山" rare="2"><hp>0.92</hp><atk>0.98</atk><def>1.00</def></gun>'+
           '<gun name="石倉城" attr="平" rare="1"><hp>0.89</hp><atk>0.96</atk><def>0.95</def></gun>'+
           '<gun name="三崎城" attr="平山水" rare="1"><hp>0.89</hp><atk>0.93</atk><def>0.98</def></gun>'+
           '<gun name="勝瑞城" attr="平" rare="1"><hp>0.93</hp><atk>0.94</atk><def>0.93</def></gun>'+
           '<gun name="来島城" attr="水" rare="1"><hp>0.90</hp><atk>0.95</atk><def>0.95</def></gun>'+
           '<gun name="鶴崎城" attr="平" rare="1"><hp>0.92</hp><atk>0.91</atk><def>0.97</def></gun>'+

           //弓城

           '<bow name="聚楽第" attr="平" rare="7"><hp>1.18</hp><atk>1.25</atk><def>1.17</def></bow>'+
           '<bow name="駿府城改壱" attr="平" rare="6"><hp>1.19</hp><atk>1.17</atk><def>1.09</def></bow>'+
           '<bow name="岡豊城改壱" attr="山" rare="6"><hp>1.12</hp><atk>1.20</atk><def>1.13</def></bow>'+
           '<bow name="弘前城" attr="平山" rare="6"><hp>1.13</hp><atk>1.18</atk><def>1.14</def></bow>'+
           '<bow name="駿府城" attr="平" rare="5"><hp>1.15</hp><atk>1.10</atk><def>1.05</def></bow>'+
           '<bow name="小牧山城改壱" attr="平山" rare="5"><hp>1.07</hp><atk>1.15</atk><def>1.08</def></bow>'+
           '<bow name="岡豊城" attr="山" rare="5"><hp>1.05</hp><atk>1.16</atk><def>1.09</def></bow>'+
           '<bow name="高岡城" attr="平山" rare="5"><hp>1.09</hp><atk>1.13</atk><def>1.08</def></bow>'+
           '<bow name="吉田郡山城" attr="山" rare="5"><hp>1.08</hp><atk>1.12</atk><def>1.10</def></bow>'+
           '<bow name="小牧山城" attr="平山" rare="4"><hp>1.03</hp><atk>0.97</atk><def>1.05</def></bow>'+
           '<bow name="多聞山城改壱" attr="平山" rare="4"><hp>1.04</hp><atk>1.03</atk><def>1.08</def></bow>'+
           '<bow name="鳥取城" attr="山" rare="4"><hp>1.03</hp><atk>1.04</atk><def>1.08</def></bow>'+
           '<bow name="島原城改壱" attr="平水" rare="4"><hp>1.07</hp><atk>1.06</atk><def>1.02</def></bow>'+
           '<bow name="多聞山城" attr="平山" rare="3"><hp>0.99</hp><atk>0.90</atk><def>1.05</def></bow>'+
           '<bow name="島原城" attr="平水" rare="3"><hp>1.02</hp><atk>1.01</atk><def>0.97</def></bow>'+
           '<bow name="深志城" attr="平" rare="3"><hp>1.00</hp><atk>1.03</atk><def>0.97</def></bow>'+
           '<bow name="石山城改壱" attr="平山" rare="2"><hp>1.02</hp><atk>0.92</atk><def>0.95</def></bow>'+
           '<bow name="桜尾城" attr="水" rare="2"><hp>1.00</hp><atk>0.95</atk><def>0.95</def></bow>'+
           '<bow name="宇土古城" attr="平山" rare="2"><hp>0.98</hp><atk>1.00</atk><def>0.92</def></bow>'+
           '<bow name="飫肥城" attr="平山" rare="2"><hp>0.95</hp><atk>0.95</atk><def>1.00</def></bow>'+
           '<bow name="浦添城" attr="山" rare="2"><hp>0.88</hp><atk>1.03</atk><def>0.99</def></bow>'+
           '<bow name="丹波横山城" attr="平山" rare="2"><hp>0.98</hp><atk>0.93</atk><def>0.99</def></bow>'+
           '<bow name="笹原城" attr="平山水" rare="2"><hp>0.97</hp><atk>0.86</atk><def>0.99</def></bow>'+
           '<bow name="福山館" attr="平山水" rare="1"><hp>0.94</hp><atk>0.96</atk><def>0.90</def></bow>'+
           '<bow name="鍋蓋城" attr="平山" rare="1"><hp>0.96</hp><atk>0.91</atk><def>0.93</def></bow>'+
           '<bow name="今川館" attr="平" rare="1"><hp>0.93</hp><atk>0.93</atk><def>0.94</def></bow>'+
           '<bow name="石山城" attr="平山" rare="1"><hp>0.99</hp><atk>0.90</atk><def>0.91</def></bow>'+
           '<bow name="天神西舘" attr="平山" rare="1"><hp>0.98</hp><atk>0.93</atk><def>0.89</def></bow>'+

           //弩城

           '<crossbow name="広島城改壱" attr="平" rare="7"><hp>1.15</hp><atk>1.25</atk><def>1.20</def></crossbow>'+
           '<crossbow name="多賀城改壱" attr="平山" rare="6"><hp>1.21</hp><atk>1.12</atk><def>1.12</def></crossbow>'+
           '<crossbow name="観音寺城改壱" attr="山" rare="6"><hp>1.24</hp><atk>1.15</atk><def>1.06</def></crossbow>'+
           '<crossbow name="広島城" attr="平" rare="6"><hp>1.10</hp><atk>1.20</atk><def>1.15</def></crossbow>'+
           '<crossbow name="松本城改壱" attr="平" rare="6"><hp>1.25</hp><atk>1.11</atk><def>1.09</def></crossbow>'+
           '<crossbow name="福岡城改壱" attr="平山水" rare="5"><hp>1.09</hp><atk>1.13</atk><def>1.08</def></crossbow>'+
           '<crossbow name="多賀城" attr="平山" rare="5"><hp>1.16</hp><atk>1.07</atk><def>1.07</def></crossbow>'+
           '<crossbow name="観音寺城" attr="山" rare="5"><hp>1.17</hp><atk>1.11</atk><def>1.02</def></crossbow>'+
           '<crossbow name="松本城" attr="平" rare="5"><hp>1.21</hp><atk>1.04</atk><def>1.05</def></crossbow>'+
           '<crossbow name="岡城" attr="山" rare="5"><hp>1.05</hp><atk>1.08</atk><def>1.17</def></crossbow>'+
           '<crossbow name="水戸城" attr="平山" rare="4"><hp>1.03</hp><atk>1.03</atk><def>1.09</def></crossbow>'+
           '<crossbow name="三原城改壱" attr="平山水" rare="4"><hp>1.04</hp><atk>1.11</atk><def>1.00</def></crossbow>'+
           '<crossbow name="福岡城" attr="平山水" rare="4"><hp>1.05</hp><atk>1.06</atk><def>1.04</def></crossbow>'+
           '<crossbow name="滝山城改壱" attr="平山" rare="3"><hp>1.00</hp><atk>0.98</atk><def>1.01</def></crossbow>'+
           '<crossbow name="三原城" attr="平山水" rare="3"><hp>0.97</hp><atk>1.07</atk><def>0.96</def></crossbow>'+
           '<crossbow name="柳川城" attr="平" rare="3"><hp>0.98</hp><atk>1.01</atk><def>1.01</def></crossbow>'+
           '<crossbow name="滝山城" attr="平山" rare="2"><hp>0.97</hp><atk>0.95</atk><def>0.98</def></crossbow>'+
           '<crossbow name="三本松城" attr="山" rare="2"><hp>0.96</hp><atk>1.01</atk><def>0.94</def></crossbow>'+

           //大砲城

           '<cannon name="五稜郭" attr="平" rare="7"><hp>1.20</hp><atk>1.20</atk><def>1.20</def></cannon>'+
           '<cannon name="犬山城" attr="平山" rare="6"><hp>1.11</hp><atk>1.13</atk><def>1.11</def></cannon>'+
           '<cannon name="信貴山城" attr="山" rare="5"><hp>1.12</hp><atk>1.10</atk><def>1.08</def></cannon>'+
           '<cannon name="安平古堡改壱" attr="平水" rare="4"><hp>1.05</hp><atk>1.01</atk><def>1.09</def></cannon>'+
           '<cannon name="板島丸串城" attr="平山水" rare="4"><hp>1.06</hp><atk>1.02</atk><def>1.07</def></cannon>'+
           '<cannon name="安平古堡" attr="平水" rare="3"><hp>1.00</hp><atk>0.96</atk><def>1.04</def></cannon>'+

           //符城

           '<spell name="竹田城" attr="山" rare="6"><hp>1.13</hp><atk>1.17</atk><def>1.15</def></spell>'+
           '<spell name="宇都宮城改壱" attr="平" rare="5"><hp>1.13</hp><atk>1.17</atk><def>1.15</def></spell>'+
           '<spell name="菩提山城改壱" attr="山" rare="5"><hp>1.05</hp><atk>1.15</atk><def>1.10</def></spell>'+
           '<spell name="宇都宮城" attr="平" rare="4"><hp>1.08</hp><atk>1.04</atk><def>1.03</def></spell>'+
           '<spell name="菩提山城" attr="山" rare="4"><hp>1.00</hp><atk>1.10</atk><def>1.05</def></spell>'+
           '<spell name="福島城" attr="平" rare="4"><hp>1.03</hp><atk>1.06</atk><def>1.06</def></spell>'+
           '<spell name="大宝寺城改壱" attr="平" rare="3"><hp>1.01</hp><atk>0.98</atk><def>1.01</def></spell>'+
           '<spell name="龍王山城改壱" attr="山" rare="3"><hp>0.96</hp><atk>1.06</atk><def>0.97</def></spell>'+
           '<spell name="平戸城" attr="平山水" rare="3"><hp>0.99</hp><atk>1.06</atk><def>0.95</def></spell>'+
           '<spell name="大宝寺城" attr="平" rare="2"><hp>0.98</hp><atk>0.95</atk><def>0.97</def></spell>'+
           '<spell name="大聖寺城" attr="平山" rare="2"><hp>0.95</hp><atk>0.95</atk><def>1.00</def></spell>'+
           '<spell name="龍王山城" attr="山" rare="2"><hp>0.93</hp><atk>1.04</atk><def>0.93</def></spell>'+
           '<spell name="飯盛山城" attr="山" rare="2"><hp>0.90</hp><atk>1.04</atk><def>0.96</def></spell>'+
           '<spell name="引田城" attr="平山水" rare="2"><hp>1.01</hp><atk>0.94</atk><def>0.95</def></spell>'+
           '<spell name="杉目城" attr="平" rare="2"><hp>0.95</hp><atk>0.96</atk><def>0.99</def></spell>'+
           '<spell name="矢留ノ城" attr="平山" rare="1"><hp>0.97</hp><atk>0.95</atk><def>0.88</def></spell>'+
           '<spell name="今浜城" attr="平水" rare="1"><hp>0.99</hp><atk>0.91</atk><def>0.90</def></spell>'+
           '<spell name="乙女城" attr="平山" rare="1"><hp>0.96</hp><atk>0.93</atk><def>0.91</def></spell>'+

           //歌舞城

           '<song name="大坂城" attr="平" rare="7"><hp>1.23</hp><atk>1.16</atk><def>1.21</def></song>'+
           '<song name="石山御坊改壱" attr="平" rare="7"><hp>1.21</hp><atk>1.16</atk><def>1.23</def></song>'+
           '<song name="石山御坊" attr="平" rare="6"><hp>1.17</hp><atk>1.12</atk><def>1.16</def></song>'+
           '<song name="鶴ヶ岡城改壱" attr="平" rare="4"><hp>1.06</hp><atk>1.04</atk><def>1.05</def></song>'+
           '<song name="山科本願寺改壱" attr="平" rare="4"><hp>1.00</hp><atk>1.11</atk><def>1.04</def></song>'+
           '<song name="鶴ヶ岡城" attr="平" rare="3"><hp>1.02</hp><atk>0.96</atk><def>1.02</def></song>'+
           '<song name="尾山御坊改壱" attr="平山" rare="3"><hp>1.03</hp><atk>0.95</atk><def>1.02</def></song>'+
           '<song name="山科本願寺" attr="平" rare="3"><hp>1.00</hp><atk>1.05</atk><def>0.95</def></song>'+
           '<song name="久保田城" attr="平山" rare="2"><hp>0.90</hp><atk>1.05</atk><def>0.95</def></song>'+
           '<song name="尾山御坊" attr="平山" rare="2"><hp>1.00</hp><atk>0.94</atk><def>0.96</def></song>'+
           '<song name="窪田城" attr="平山" rare="1"><hp>0.88</hp><atk>0.99</atk><def>0.93</def></song>'+
           '</pars>';

var sample = '<sword name="" attr="" rare=""><hp></hp><atk></atk><def></def></sword>';
