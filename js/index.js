
$(function(){


	$(".button-collapse").bind("tap",function(e){
		e.stopPropagation();
		$(".side-nav").css({left:"0%"});
	})
	$(".side-nav").bind("tap",function(e){
		e.stopPropagation();
	})
	$(document).bind("tap swipeLeft",function(e){
		e.stopPropagation();
		$(".side-nav").css({left:"-105%"});
	})
	$(document).bind("swipeRight",function(e){
		e.stopPropagation();
		$(".side-nav").css({left:"0%"});
	})
	// ---------------------shanpingye
	var $slides=$(".slides li");
	if(localStorage.state){
		$(".slides").remove();
		$("#container").css({visibility:"visible"});
	}
	else{
		$slides.swipeLeft(function(e){
			e.stopPropagation();
			var cur,next;
			cur=$(this);
			if(cur.next().length){
				next=$(this).next();
			}
			else{
				return;
			}
			cur.removeClass("active").addClass("zuoce");
			next.addClass("active");
			// setTimeout(function(){
			// 	cur.css({transition:"none"}).removeClass("zuoce");
			// },325)
			setTimeout(function(){
				cur.css({transition:"left 0.325s ease"})
			},325)
		})
		var $slides=$(".slides li");
		$slides.swipeRight(function(e){
			e.stopPropagation();
			var cur,next;
			cur=$(this);
			if($(this).prev().length){
				next=$(this).prev();
			}
			else{
				return;
			}
			cur.removeClass("active");
			setTimeout(function(){
				// next.css({transition:"none"}).addClass("zuoce");
			},325)
			setTimeout(function(){
				next.css({transition:"left 0.325s ease"}).addClass("active").removeClass("zuoce");
			},15)
		})
	}


	// ----------------------------------------lunbo
	var $lunbo=$(".lunbo");
	$lunbo.swipeLeft(function(e){
		e.stopPropagation();
		// clearInterval(t);
		var cur,next;
		console.dir($lunbo.first())
		cur=$(this);
		if(cur.next().length){
			next=$(this).next();
		}
		else{
			next=$lunbo.first();
		}
		cur.removeClass("active1").addClass("zuoce1");
		next.addClass("active1");
		setTimeout(function(){
			cur.css({transition:"none"}).removeClass("zuoce1");
		},270)
		setTimeout(function(){
			cur.css({transition:"left 0.325s ease"})
		},325)
	})
	$lunbo.swipeRight(function(e){
		// clearInterval(t);
		e.stopPropagation();
		var cur,next;
		cur=$(this);
		if($(this).prev().length){
			next=$(this).prev();
		}
		else{
			next=$lunbo.last();
		}
		cur.removeClass("active1");
		setTimeout(function(){
			next.css({transition:"none"}).addClass("zuoce1");
		},0)
		setTimeout(function(){
			next.css({transition:"left 0.325s ease"}).addClass("active1").removeClass("zuoce1");
		},35)
	})
		// -------------------------------------时间控制
		var move=function(el,dr){
			var map={next:"first",prev:"last"};
			$(el).removeClass("active1").addClass("zuoce1");

			if($(el)[dr]().length){
				$(el)[dr]().addClass("active1");
				setTimeout(function(){
					$(el).css({transition:"none"}).removeClass("zuoce1");
				},270)
				setTimeout(function(){
					$(el).css({transition:"left 0.325s ease"})
				},325)
				cur=$(el)[dr]().get(0);
			}
			else{
				$lunbo[map[dr]]().addClass("active1");
				setTimeout(function(){
					$(el).css({transition:"none"}).removeClass("zuoce1");
				},270)
				setTimeout(function(){
					$(el).css({transition:"left 0.325s ease"})
				},325)
				cur=$lunbo[map[dr]]().get(0);
			}
		}
		var cur=$slides.get(0);
		var t=setInterval(function(){
			move(cur,"next");
		},2000)
	// -----------------------------
	$("#enter").tap(function(){
		$(".slides").remove();
		$("#container").css({visibility:"visible"});
		localStorage.state=true;
	})
	$("#enter1").tap(function(){
		$(".slides").remove();
		$("#container").css({visibility:"visible"});
		localStorage.state=true;
	})
	// -------------------------------nav
	var lanmus=[
	{id:1,img:"./img/toutiao.jpg",
	title:"习近平参加黑龙江代表团审议：下放的权力能接得住吗？",content:{
		a:"中国政库",
		toutiaotitle_2shijian:"5小时前",
		toutiaotitle_2ren:"31"
	},zhuanti:"./img/ydw_zt.png"},
	{id:2,img:"./img/623.gif",
	title:"南京一4岁男童遭面包车碾压后自己爬起，司机称以为压到井盖",content:{
		a:"中国政库",
		toutiaotitle_2shijian:"5小时前",
		toutiaotitle_2ren:"31"
	},zhuanti:"./img/ydw_zt.png"},
	{id:3,img:"./img/32.jpeg",
	title:"“根据证监会意见”，十三五规划删除战略新兴板意味着什么",content:{
		a:"中国政库",
		toutiaotitle_2shijian:"5小时前",
		toutiaotitle_2ren:"31"
	},zhuanti:"./img/ydw_zt.png"},
	{id:4,img:"./img/175.jpg",
	title:"围棋人机大战落幕，人工智能奇点即将来临？",content:{
		a:"中国政库",
		toutiaotitle_2shijian:"5小时前",
		toutiaotitle_2ren:"31"
	},zhuanti:"./img/ydw_zt.png"},
	{id:5,img:"./img/423.jpg",
	title:"人类1比4输掉人机大战！起身抽烟后李世石下出致命败着",content:{
		a:"中国政库",
		toutiaotitle_2shijian:"5小时前",
		toutiaotitle_2ren:"31"
	},zhuanti:"./img/ydw_zt.png"},
	{id:6,img:"./img/204.jpg",
	title:" ",content:{
		a:" ",
		toutiaotitle_2shijian:" ",
		toutiaotitle_2ren:" "
	},zhuanti:""}
	];
	var liebiaos=[
	{	id:1,imgs:"./img/new1.jpg",
	news_t1:"韩正：改革贵在行动重在落实，要紧盯目标、克难攻坚",content:{
		a:"浦江头条",
		news_t2shijian:"8小时前",
		news_t2ren:"49"
	},tuijian:"./img/ydw_tj.png",cateid:1},
	{	id:2,imgs:"./img/17.jpg",
	news_t1:"喻国明将赴北师大新闻传播学院任执行院长，此前申请调离人大",content:{
		a:"人事风向",
		news_t2shijian:"2小时前",
		news_t2ren:"23"
	},tuijian:"./img/ydw_tj.png",cateid:1},
	{	id:3,imgs:"./img/658.jpg",
	news_t1:"北大新闻系才女回乡创业送快递？当事人：是专升本成教文凭",content:{
		a:"直击现场",
		news_t2shijian:"4小时前",
		news_t2ren:"350"
	},tuijian:"./img/ydw_tj.png",cateid:1},
	{id:4,imgs:"./img/706.jpg",
	news_t1:"河南一大学生身陷“校园贷”负债自杀：私用同学名义贷几十万",content:{
		a:"教育家",
		news_t2shijian:"3小时前",
		news_t2ren:"233"
	},tuijian:"./img/ydw_tj.png",cateid:1},
	{id:5,imgs:"./img/71.jpg",
	news_t1:"河南一大学生身陷“校园贷”负债自杀：私用同学名义贷几十万",content:{
		a:"教育家",
		news_t2shijian:"3小时前",
		news_t2ren:"233"
	},tuijian:"./img/ydw_tj.png",cateid:2},
	{id:6,imgs:"./img/501.jpg",
	news_t1:"男子在微信群发淫秽视频获点赞，越发越起劲被判拘役4个月",content:{
		a:"浦江头条",
		news_t2shijian:"3小时前",
		news_t2ren:"27"
	},tuijian:"./img/ydw_tj.png",cateid:2},
	{id:7,imgs:"./img/484.jpg",
	news_t1:"警惕地铁站假志愿者倒卖单程票，3元票卖10元到站还得补票",content:{
		a:"浦江头条",
		news_t2shijian:"40分钟前",
		news_t2ren:""
	},tuijian:"./img/ydw_tj.png",cateid:2},
	{id:8,imgs:"./img/706.jpg",
	news_t1:"黄润秋请辞全国人大常委确认草案表决稿将提请审议",content:{
		a:"人事风向",
		news_t2shijian:"1小时前",
		news_t2ren:""
	},tuijian:"./img/ydw_tj.png",cateid:2},
	{id:9,imgs:"./img/505.jpg",
	news_t1:"连线认知神经科学之父：人工智能固然强大，但仍无法预判未来",content:{
		a:"能见度",
		news_t2shijian:"47分钟前",
		news_t2ren:""
	},tuijian:"./img/ydw_tj.png",cateid:3},
	{id:10,imgs:"./img/493.jpg",
	news_t1:"华为前副总裁李一男涉内幕交易案受审，被指非法获利700万",content:{
		a:"10%公司",
		news_t2shijian:"10分钟前",
		news_t2ren:""
	},tuijian:"./img/ydw_tj.png",cateid:3},
	{id:11,imgs:"./img/95.jpg",
	news_t1:"跨境电商监管新政4月起试行，京东苏宁扎堆加码上海业务",content:{
		a:"自贸区连线",
		news_t2shijian:"3小时前",
		news_t2ren:""
	},tuijian:"./img/ydw_tj.png",cateid:3},
	{id:12,imgs:"./img/101.jpg",
	news_t1:"碧桂园：销售目标上调两成，三四线城市住宅售价只会涨不会降",content:{
		a:"地产界",
		news_t2shijian:"1小时前",
		news_t2ren:""
	},tuijian:"./img/ydw_tj.png",cateid:3},
	{id:13,imgs:"./img/878.jpg",
	news_t1:"缅甸新总统吴廷觉，他父亲翻译过侯宝林的相声和陈毅的诗",content:{
		a:"文化课",
		news_t2shijian:"3小时前",
		news_t2ren:""
	},tuijian:"./img/ydw_tj.png",cateid:4},
	{id:14,imgs:"./img/699.jpg",
	news_t1:"四十再当妈之医生如是说",content:{
		a:"请讲",
		news_t2shijian:"5小时前",
		news_t2ren:""
	},tuijian:"./img/ydw_tj.png",cateid:4},
	{id:15,imgs:"./img/987.jpg",
	news_t1:"远观〡剔除计划经济的基因，注册制可以很美",content:{
		a:"澎湃研究所",
		news_t2shijian:"5小时前",
		news_t2ren:""
	},tuijian:"./img/ydw_tj.png",cateid:4},
	{id:16,imgs:"./img/126.jpg",
	news_t1:"像看足球赛一样看《哈姆雷特》，是一种怎样的体验",content:{
		a:"有戏",
		news_t2shijian:"11小时前",
		news_t2ren:"11"
	},tuijian:"./img/ydw_tj.png",cateid:5},
	{id:17,imgs:"./img/213.jpg",
	news_t1:"3月15日体彩开奖公告",content:{
		a:"赢家",
		news_t2shijian:"40分钟前",
		news_t2ren:""
	},tuijian:"./img/ydw_tj.png",cateid:5},
	{id:18,imgs:"./img/540.jpg",
	news_t1:"澎湃联播|如果3.15不维权，消费者澎澎如何度过",content:{
		a:"澎湃联播",
		news_t2shijian:"43分钟前",
		news_t2ren:""
	},tuijian:"./img/ydw_tj.png",cateid:5},
	{id:19,listname:"孙远",
	listneirong:"我是上海外国语大学围棋队主教练孙远，关于谷歌人工智能VS李世石围棋大战，问我吧！",wenbalist2:{
		a:"百科",
		news_t2shijian:"16",
		news_t2ren:"进行中"
	},tuijian:"",cateid:6},
	{id:20,listname:"孙远",
	listneirong:"澎湃联播|如果3.15不维权，消费者澎澎如何度过",wenbalist2:{
		a:"澎湃联播",
		wenbalist2_zan:"43分钟前",
		wenbalist2_:""
	},tuijian:"",cateid:6}
	];
	$(".tabs li").each(function(i,v){
		$(this).data("index",lanmus[i].id);
	})
	$(".tabs li").tap(function(e){
		e.stopPropagation();
		var lanmuid=$(this).data("index");
		if(lanmuid<6){
			// $("#wenba").css({display:"none"});
			$("#list").css({display:"block"});
			$("#lunbo").css({display:"none"});
			var shuju=liebiaos.filter(function(v,i){
				return v.cateid==lanmuid;
			})

			$("#list").empty();
			shuju.forEach(function(v,i){
				var els=$("#yangben2").clone();
				els.attr("id","  ");
				els.find(".news>img").attr("src",v.imgs);
				els.find(".news_t1>a").text(v.news_t1);
				els.find(".news_t2 a").text(v.content.a);
				els.find(".news_t2 .news_t2shijian").text(v.content.news_t2shijian);
				els.find(".news_t2 .news_t2ren").text(v.content.news_t2ren);
				els.find(".news_t2 .zhuanti img").attr(v.zhuanti);
				els.data("index",v.id);
				$("#list").append(els);
			})
		}
		else if(lanmuid>=6){
			$("#list").css({display:"none"});
			$("#lunbo").css({display:"block"});
			var shujuwenba=liebiaos.filter(function(v,i){
				return v.cateid==6;
			})

			$("#wenba").empty();
			shujuwenba.forEach(function(v,i){
				var els=$("#yangben3").clone();
				els.attr("id","  ");
				els.find(".listname").text(v.listname);
				els.find(".listneirong>a").text(v.listneirong);
				els.find(".wenbalist2 a").text(v.wenbalist2.a);
				els.find(".wenbalist2 .wenbalist2_zan").text(v.wenbalist2.wenbalist2_zan);
				els.find(".wenbalist2 .wenbalist2_").text(v.wenbalist2.wenbalist2_);
				els.data("index",v.id);
				$("#wenba").append(els);
			})
		}
	})

	// -------------------------------------title
	$(".tabs li").each(function(i){
		$(this).click(function(){
			$(this).eq(0).css({color:"#000"});
			$(this).find("a").css({color:"#00a5eb"});
			$(this).bind("mouseout",function(){
				$(this).find("a").css({color:"#000000"});
			})
			if(i<5){
					$("#toutiao").css({display:"block"});
				$("#lunbo").css({display:"none"});
				$("#wenba").css({display:"none"});
				var lanmushuju=lanmus.filter(function(v){
					return v.id==i+1;
				})
				lanmushuju.forEach(function(v,i){
					$("#toutiao").empty();
					var els="gshfghsdfyud";
					var els=$("#yangben1").clone();
					els.attr("id","  ");
					els.find(".toutiao img").attr("src",v.img);
					els.find(".toutiaotitle_1 a").text(v.title);
					els.find(".toutiaotitle_2 a").text(v.content.a);
					els.find(".toutiaotitle_2 .toutiaotitle_2shijian").text(v.content.toutiaotitle_2shijian);
					els.find(".toutiaotitle_2 .toutiaotitle_2ren").text(v.content.toutiaotitle_2ren);
					els.find(".toutiaotitle_2 .zhuanti img").attr("src",v.zhuanti);
					els.data("index",v.id);
					$("#toutiao").append(els);
				})
			}
			else{
				var lanmuwenba=lanmus.filter(function(v){
					$("#lunbo").css({display:"block"});
					$("#toutiao").css({display:"none"});
					$("#wenba").css({display:"block"});
					return v.id==5;
				})
			}
			
		})
	})
	// ----------------------------默认
	var moren=liebiaos.filter(function(v,i){
		return v.cateid==1;
	})
	moren.forEach(function(v,i){
		$("#lunbo").css({display:"none"});
		$(".tabs li").eq(0).find("a").css({color:"#00a5eb"});
		var els=$("#yangben2").clone();
		els.attr("id","  ");
		els.find(".news>img").attr("src",v.imgs);
		els.find(".news_t1>a").text(v.news_t1);
		els.find(".news_t2 a").text(v.content.a);
		els.find(".news_t2 .news_t2shijian").text(v.content.news_t2shijian);
		els.find(".news_t2 .news_t2ren").text(v.content.news_t2ren);
		els.find(".news_t2 .zhuanti img").attr("src",v.zhuanti);
		els.data("index",v.id);
		$("#list").append(els);
	})

	$(".tabs li").each(function(i){
		var lanmushuju=lanmus.filter(function(v){
			return v.id==1;
		})
		$("#toutiao").empty();
		lanmushuju.forEach(function(v,i){
			$("#toutiao").empty();
			var els="gshfghsdfyud";
			var els=$("#yangben1").clone();
			els.attr("id","  ");
			els.find(".toutiao img").attr("src",v.img);
			els.find(".toutiaotitle_1 a").text(v.title);
			els.find(".toutiaotitle_2 a").text(v.content.a);
			els.find(".toutiaotitle_2 .toutiaotitle_2shijian").text(v.content.toutiaotitle_2shijian);
			els.find(".toutiaotitle_2 .toutiaotitle_2ren").text(v.content.toutiaotitle_2ren);
			els.find(".toutiaotitle_2 .zhuanti img").attr("src",v.zhuanti);
			els.data("index",v.id);
			$("#toutiao").append(els);
		})

	})
})

document.addEventListener("plusready",function(){
	$("#toutiao").delegate(".col","tap",function(){
		var index=$(this).data("index");
		var w=plus.webview.create("show.html","show",{},{xx:index});
		w.show();
	})
})