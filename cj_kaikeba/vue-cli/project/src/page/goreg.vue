<template>
<div>
	<!-- <chead/> -->
    <section>
		<div class="ydc-content-slide ydc-body">
			<div class="ydc-page-content" style="overflow:hidden">
				<div class="ydc-reg-title">
					<ul class="clearfix">
						<li class="ydc-reg-step active">
							<em></em>
							<h3>登录邮箱账号</h3>
						</li>
						<li class="ydc-reg-step">
							<em></em>
							<h3>选择帐号类别</h3>
						</li>
						<li class="ydc-reg-step">
							<em></em>
							<h3>填写媒体信息</h3>
						</li>
					</ul>
				</div>
				<div class="ydc-reg-form clearfix">
					<form action="">
						<div class="ydc-reg-form-group clearfix">
							<label>邮箱账号:</label>
							<div class="ydc-reg-form-input">
								<input type="text" id="loginEmail" name="username" class="ydc-form-control" autocomplete="off" placeholder="账号通行证/邮箱">
							</div>
							<div class="ydc-reg-form-text">
								<p>请填写账号邮箱，作为登录帐号。<br>没有账号邮箱？ <a href="javascript:;">立即注册>></a></p>
							</div>
						</div>
						<div class="ydc-reg-form-group clearfix">
							<label>密码:</label>
							<div class="ydc-reg-form-input">
								<input type="password" id="psd" name="username" class="ydc-form-control" autocomplete="off" placeholder="密码">
							</div>
							<div class="ydc-reg-form-text">
								<p><a href="javascript:;">忘记密码？</a></p>
							</div>
						</div>
						<div class="ydc-reg-form-group">
							<div class="ydc-reg-form-button">
								<a class="btn" type="submit" href="go-reg-username.html" >登录</a>
							</div>
						</div>
					</form>
				</div>
				<div class="ydc-right-banner" style="margin-top:80px;">
					<div class="slideshow-container">
						<a href="https://xihazahuopu.taobao.com/" target="_blank" class="mySlides fade">
							<img src="../assets/images/ad/ad1.jpg" style="width:100%">
						</a>
						<a href="https://weibo.com/525135676" target="_blank" class="mySlides fade">
							<img src="../assets/images/ad/ad2.jpg" style="width:100%">
						</a>
						<a href="http://www.a-ui.cn/" target="_blank" class="mySlides fade">
							<img src="../assets/images/ad/ad3.jpg" style="width:100%">
						</a>
					</div>
				</div>
			</div>
		</div>
		<cfoot/>
	</section>
</div>

</template>
<script>
import chead from "@/components/header"
import cfoot from "@/components/footer"
export default {
  data () {
    return {
      slideIndex:0
    }
  },
  components:{
    chead,
    cfoot
	},
	methods: {
		showSlides:function(){
			 var i;
	        var slides = document.getElementsByClassName("mySlides");
	        for (i = 0; i < slides.length; i++) {
	            slides[i].style.display = "none";
	        }
	        this.slideIndex++;
	        if (this.slideIndex> slides.length) {this.slideIndex = 1}
	        slides[this.slideIndex-1].style.display = "block";
	        setTimeout(this.showSlides, 3000); // 滚动时间
		}
	},
	mounted () {
		this.showSlides();
	}
}
</script>
<style>

</style>

