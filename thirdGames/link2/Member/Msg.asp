<%@LANGUAGE="VBSCRIPT" CODEPAGE="936"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>建议和支持</title>
<link rel="stylesheet" type="text/css" href="../Skin/QQ/Option.css"/>
<link rel="stylesheet" type="text/css" href="../Skin/QQ/DOTA_All.css"/>
<style type="text/css">
html, body{
	overflow:auto;
}
h1{
	text-align:center; margin:5px 0px; padding:0px; font-size:12px; line-height:25px; height:25px;
	border-bottom:1px solid #fff;
}
form{
	padding:0px; margin:0px; margin-top:5px;
}
#container{
	width:500px; margin:0px auto; margin-bottom:10px;
}
.title{
	 padding-left:10px; margin-top:5px; background:#4562A1; border:1px dotted #F7FCFF; color:#f8e070;
}
.title span{
	display:inline-block; width:110px; margin-right:5px;
}
.msg{
	margin-left:20px; margin-top:5px; line-height:20px;
}
.text{
	border:1px solid #2B4A84; background:#E4F4FD; color:#2B4A84; line-height:16px; 
}
.reply{
	margin:10px; margin-left:20px; margin-right:20px; border:1px dotted #f8e070; background:#405D99;
	padding:3px; padding-left:5px; margin-top:3px;
}
.reply .t{
	color:#f8e070;
}
.reply .c{
	line-height:19px;
}
#btn div{
	float:left; margin-right:20px;
}
</style>
<script type="text/javascript" src="../Scripts/Base.js" charset="utf-8"></script>
<script type="text/javascript" src="../Scripts/Button.js" charset="utf-8"></script>
<script type="text/javascript">
function validData(){
	if(DOTA.$("content").value == ""){
		alert("请输入内容!");
		return false;
	}
	return true;
}
window.onload = function(){
	new DOTA.Button({text:"提 交", onClick : function(){
			if(DOTA.$("content").value == ""){
				alert("请输入留言内容!");
				return;
			}
			document.forms[0].submit();
		}}).renderTo(DOTA.$("btn"));
	new DOTA.Button({text:"取 消", onClick : function(){
			if(parent && parent.closeDialog){
				parent.closeDialog();
			}
		}}).renderTo(DOTA.$("btn"));
};
</script>
</head>

<body>
<div id="container">
    <h1 >用户留言</h1>
    <div class="title">
    	<span>username</span>
    	<span>127.0.0.1</span>
        留言于: 2011-07-19</div>
    <div class="msg">
    	test
    </div>

	<div class="reply">
    	<div class="t">回复 username 于 2011-07-19</div>
        <div class="c">
        	回复
        </div>
    </div>
	<h1 >发表留言</h1>
   <form id="form1" name="form1" method="post" action="">
    <table width="500" border="0" cellspacing="0" cellpadding="1">
      <tr>
        <td width="59" align="right">姓名：</td>
        <td width="127">
            <input name="username" type="text" class="text" id="username" size="15" maxlength="20" />
        </td>
        <td width="59" align="right">QQ:</td>
        <td width="223"><input name="qq" type="text" class="text" id="qq" size="15" maxlength="10" /></td>
      </tr>
      <tr>
        <td align="right">邮箱:</td>
        <td colspan="3"><input name="email" type="text" class="text" id="email" size="50" maxlength="50" /></td>
      </tr>
      <tr>
        <td align="right">内容：</td>
        <td colspan="3">
          <textarea name="content" cols="50" rows="4" class="text" id="content"></textarea>
        <font >*</font></td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td colspan="3" id="btn"></td>
      </tr>
    </table>
    </form>
</div>
</body>
</html>
