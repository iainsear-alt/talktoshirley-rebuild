<html>
<head>
<title>Talk to Shirley</title>
<style type="text/css">
body {
	background-color:#6B4F79;
	margin:0;
	height:100%;
}
div.content {
	background-color:#FFFFFF;
	text-align:center;
	width:100%;
}
</style>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script type="text/javascript">
$(function() {
	adjustLayout();
});
$(window).resize(adjustLayout);

function adjustLayout(){
    $('.content').css({
        'position' : 'absolute',
        'top' : ($(window).height() - $('.content').height() ) / 2 + "px"
    });
}
</script>
</head>
<body>

<div class="content">
	<img src="shirley_temp.png" alt="Talk to Shirley" />
</div>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-54620933-1', 'auto');
  ga('send', 'pageview');
</script>

</body>
</html>