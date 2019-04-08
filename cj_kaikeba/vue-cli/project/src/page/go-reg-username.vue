<template>
  <div>
   <chead/>
   	<section>
		<div class="ydc-content-slide ydc-body">
			<div class="ydc-page-content">
				<div class="ydc-reg-title">
					<ul class="clearfix">
						<li class="ydc-reg-step active">
							<em></em>
							<h3>登录邮箱账号</h3>
						</li>
						<li class="ydc-reg-step active">
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
						<div class="ydc-reg-form-class">
							<div class="ydc-reg-text-center">
								<div class="ydc-text-center-item">
									<div class="ydc-text-item-list">
										<div class="ydc-text-item-list-title">
											<div class="ydc-text-ab">
												<input type="radio" name="rdo" class="rdolist" v-model="radioArr" value="0"/>
												<label class="rdobox" @click="checkbox(0)" :class="radioArr==0?'checked':''">
													<span class="check-image"></span>
													<span class="radiobox-content"></span>
												</label>
											</div>
											<div class="ydc-text-item-list-mt1">
												<img src="../assets/images/icon/mt1.png" alt="">
											</div>
										</div>
										<div class="ydc-text-item-list-text">
											<h2>媒体</h2>
											<p>适合报纸、杂志、电视台、网站等以内容生产为主，有国家新闻出版广电总局认可资质的媒体机构申请。</p>
										</div>
									</div>
								</div>
								<div class="ydc-text-center-item">
									<div class="ydc-text-item-list">
										<div class="ydc-text-item-list-title">
											<div class="ydc-text-ab">
												<input type="radio" name="rdo" class="rdolist" value="1" v-model="radioArr"/>
												<label class="rdobox"  @click="checkbox(1)" :class="radioArr==1?'checked':''">
													<span class="check-image"></span>
													<span class="radiobox-content"></span>
												</label>
											</div>
											<div class="ydc-text-item-list-mt1">
												<img src="../assets/images/icon/mt2.png" alt="">
											</div>
										</div>
										<div class="ydc-text-item-list-text">
											<h2>自媒体</h2>
											<p>适合垂直领域专家、意见领袖、评论家等个人创作者或以内容生产为主的自媒体公司/机构申请。</p>
										</div>
									</div>
								</div>
								<div class="ydc-text-center-item">
									<div class="ydc-text-item-list">
										<div class="ydc-text-item-list-title">
											<div class="ydc-text-ab">
												<input type="radio" name="rdo" class="rdolist" v-model="radioArr" value="2"/>
												<label class="rdobox"  @click="checkbox(2)" :class="radioArr==2?'checked':''">
													<span class="check-image"></span>
													<span class="radiobox-content"></span>
												</label>
											</div>
											<div class="ydc-text-item-list-mt1">
												<img src="../assets/images/icon/mt3.png" alt="">
											</div>
										</div>
										<div class="ydc-text-item-list-text">
											<h2>组织机构</h2>
											<p>适合党政机关、事业单位和各类公共场馆、公益机构、学校/培训机构、民间组织等申请。</p>
										</div>
									</div>
								</div>
								<div class="ydc-text-center-item">
									<div class="ydc-text-item-list">
										<div class="ydc-text-item-list-title">
											<div class="ydc-text-ab">
												<input type="radio" name="rdo" class="rdolist" v-model="radioArr" value="3"/>
												<label class="rdobox"  @click="checkbox(3)" :class="radioArr==3?'checked':''">
													<span class="check-image"></span>
													<span class="radiobox-content"></span>
												</label>
											</div>
											<div class="ydc-text-item-list-mt1">
												<img src="../assets/images/icon/mt4.png" alt="">
											</div>
										</div>
										<div class="ydc-text-item-list-text">
											<h2>企业</h2>
											<p>适合企业、公司及其分支机构、旗下品牌等申请，品牌宣传，主要用于商业品牌推广等申请。</p>
										</div>
									</div>
								</div>
							</div>
							<div></div>
							<div></div>
							<div></div>
						</div>
						<div class="ydc-reg-form-group">
							<div class="ydc-reg-form-button clearfix">
								<a class="btn" href="go-reg-reg.html">下一步</a>
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
    data() {
      return {
        radioArr:"",
      }
    },
   components:{
    chead,
    cfoot
  },
   methods:{
     checkbox:function(i){
       this.radioArr=i;
      console.log(this.radioArr)
     }
   },
   mounted(){
     this.checkbox();
   }
  }
</script>

<style scoped>

</style>