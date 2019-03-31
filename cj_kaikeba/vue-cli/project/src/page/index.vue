<template>
    <div class="ydc-column ydc-column-8">
					<div class="ydc-entered-box">
						<div class="ydc-content-right">
						<rightHeader/>      
						<rightBanner/>
							<!-- gongGao begin -->
							<div class="ydc-loading-box">
                                <tabPanel/>
                                
							</div>
							<!-- gongGao End -->
						</div>
					</div>
				</div>
</template>
<script>

import tabPanel from '@/components/tabPanel.vue'
import rightHeader from '@/components/rightHeader.vue'
import rightBanner from '@/components/rightBanner.vue'
export default {
   components: {
       tabPanel,
       rightHeader,
       rightBanner
   }
}
</script>

<style>

</style>

