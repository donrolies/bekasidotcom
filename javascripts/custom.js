/* affix the navbar after scroll below header */
$(".navbar").css({top:"0",width:"100%"}),$(".navbar").affix({offset:{top:function(){return this.top=$(".navbar").offset().top}}}),$(".navbar").on("affix.bs.affix",function(){$(".navbar + *").css("margin-top",$(".navbar").outerHeight(!0))}),$(".navbar").on("affix-top.bs.affix",function(){$(".navbar + *").css({"margin-top":"0"})});

