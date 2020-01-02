import Vue from 'vue'
import Router from 'vue-router'
import SearchMain from '@/components/SearchMain.vue'
import Home from '@/components/Home.vue'
import Join from '@/components/Join.vue'
import Login from '@/components/Login.vue'
import Product from '@/components/Product.vue'
import Mypage from '@/components/MyPage.vue'
import MypageModify from '@/components/MypageModify.vue'
import MypageModifyCheck from '@/components/MypageModifyCheck.vue'
import SeenCar from '@/components/SeenCar.vue'
import StationInfo from '@/components/StationInfo.vue'
import MapList from '@/components/MapList.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes : [
		{path: '/searchmain', name: 'searchmain', component: SearchMain},
		{path:'/', name:'home', component : Home},
		{path:'/join', name:'join', component : Join},
		{path:'/login', name:'login', component : Login},
		{path:'/product', name:'product', component : Product},
		{path:'/mypage', name:'mypage', component : Mypage},
		{path:'/mypageModify', name:'mypageModify', component : MypageModify},
		{path:'/mypageModifyCheck', name:'mypageModifyCheck', component : MypageModifyCheck},
		{path:'/seencar', name:'seencar', component : SeenCar},
		{path:'/stationInfo', name:'stationInfo', component : StationInfo},
		{path:'/mapList', name:'mapList', component : MapList}
	]
})