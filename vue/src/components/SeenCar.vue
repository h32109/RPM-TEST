<template>
<div id="wrap">
<link rel="shortcut icon" href="https://www.kcar.com/resources/images/common/favicon.ico" type="image/x-icon">
<link rel="icon" href="https://www.kcar.com/resources/images/common/favicon.ico" type="image/x-icon">
<link rel="apple-touch-icon-precomposed" href="https://www.kcar.com/resources/images/mobile/common/apple-touch-icon.png">
<link rel="stylesheet" href="https://www.kcar.com/resources/css/re_import.css?v=20191230094250">
<link rel="stylesheet" href="https://www.kcar.com/resources/css/plugin/selectric.css?v=20191230094250">
<link rel="stylesheet" type="text/css" href="https://www.kcar.com/resources/css/plugin/ion.rangeSlider.css">
<link rel="stylesheet" type="text/css" href="https://www.kcar.com/resources/css/plugin/ion.rangeSlider.skinHTML5.css">
<link rel="stylesheet" href="https://www.kcar.com/resources/css/plugin/uniform.css">
<link rel="stylesheet" href="https://www.kcar.com/resources/css/plugin/jquery.scrollbar.css">
		<div class="top_banner" style="background:#FFF5F3">
			<div class="inner">
				<div id="top_div">
					<a href="https://www.kcar.com/trade/ewguide.do" id="top_link" target=""><img src="https://img.kcar.com/FILE_UPLOAD2/IMAGE_UPLOAD/BANNER/201910/banner2019101416mpvgeM.jpg" alt="중고차라서 수리비가 걱정된다면 K Car Warranty" id="top_img"></a>
					
				<span><label for="topBannerCloseCheckBox"><input type="checkbox" id="topBannerCloseCheckBox" name="" value="" onclick="topBannerCookie()">1일간 열지 않음</label><a href="javascript:;" onclick="topBannerClose()" class="top_close"><img src="/resources/images/main/main_banner_ico.gif" alt="닫기"></a></span></div>
			</div>
		</div>
		<div id="headerNew" class="header_new">
			







<div class="global">
	<div class="inner">
		<div class="global_link">
			<ul>
				
					<li><a href="/user/user_login.do">로그인</a></li>
					<li><a href="/user/user_policyAgree.do">회원가입</a></li>
				
				
					<li><a href="/board/noticeboard/notice_list.do">공지사항</a></li> <!-- li class="new" 추가시 red dot 표시 -->
					<li><a href="/cs/cs.do">고객지원</a></li>
			</ul>
			<a class="lang_btn" href="/HTML/foreigner/index.html" target="_blank"><span class="text">Foreigner Support</span></a>
		</div>
	</div>
</div> 
			








<div class="working_pop" id="working_pop" style="position: fixed; top: 50%; left: 50%; display: none;"><div class="working_pop_bg"></div><span><img src="/resources/images/common/ajax-loader2.gif" alt="로딩중"></span></div>

<form name="loginForm" method="post" action="">
<input type="hidden" name="i_sReturnUrl" value="">
<input type="hidden" name="i_sReturnPars" value="">
<input type="hidden" name="i_sLogInOpen" value="">
<input type="hidden" name="i_sRefferer" value="">
</form>
<iframe id="resize_iframe2" border="0" frameborder="0" scrolling="no" src="" width="0" height="0" style="position:absolute;" title="빈프레임"></iframe>

<form name="searchForm2" method="get" action="">
<input type="hidden" name="i_sMakeCd" value="">
<input type="hidden" name="i_sModelCd" value="">
<input type="hidden" name="i_sMakeModelCd" value="">
<input type="hidden" name="i_sClassHeadCd" value="">
<input type="hidden" name="i_sSearchMakeCd" value="">
<input type="hidden" name="i_sSearchModelCd" value="">
<input type="hidden" name="i_sSearchType" value="">
</form>

<!-- 세션값 -->
<input type="hidden" name="S_MEMBER_CD" id="S_MEMBER_CD" value="">
<input type="hidden" name="S_MEMBER_ID" id="S_MEMBER_ID" value="">
<input type="hidden" name="S_MEMBER_NAME" id="S_MEMBER_NAME" value="">
<input type="hidden" name="S_MEMBER_TYPE" id="S_MEMBER_TYPE" value="">

<div class="primary">
	<div class="inner">
		<h1 class="logo" id="logo"><a href="/index.do" target=""><img src="https://img.kcar.com/FILE_UPLOAD2/IMAGE_UPLOAD/LOGO/201810/logo201810111UOQzCF.jpg" alt="K Car"></a></h1>
		<!-- 20190221 -->
		<!--
		<div class="banner_box">
			<div class="banner_inner_box">
				
			</div>
			<div class="banner_score ">
				<span class="current">0</span>
				<span class="slash">/</span>
				<span class="total">0</span>
			</div>
		</div>-->
		<div class="banner_rollbox">
			<div class="banner_recom_roll" style="position: relative; overflow: hidden; height: 86px;">
				<ul class="banner_recom_list" style="margin-top: 0px;"><li><a href="https://www.kcar.com/homeservice/service_buy_main.do"><img src="https://img.kcar.com/FILE_UPLOAD2/IMAGE_UPLOAD/BANNER/201911/banner2019112811Wdef6x.jpg" alt="직영중고차 홈서비스로 타보고 결정하자"></a></li><li><a href="https://www.kcar.com/rentcar/rentcar_discount.do"><img src="https://img.kcar.com/FILE_UPLOAD2/IMAGE_UPLOAD/BANNER/20196/banner2019627133ZUQJv.jpg" alt="장기렌트 특가찬스!"></a></li><li><a href="https://www.kcar.com/finance/finance_main.do?finParam=0"><img src="https://img.kcar.com/FILE_UPLOAD2/IMAGE_UPLOAD/BANNER/20195/banner201957125KTR2H.jpg" alt="목돈 쓰기 아까울 땐? 할부로 하세요. 다양한 납입방식! K Car 할부, 지금 확인"></a></li><li><a href="https://www.kcar.com/homeservice/service_sell_main.do"><img src="https://img.kcar.com/FILE_UPLOAD2/IMAGE_UPLOAD/BANNER/201911/banner2019112811y9yXsA.jpg" alt="내차 팔 때도 집에서"></a></li></ul>
				<div></div>
			</div>
		</div>
		<!-- // 20190221 -->
		<!-- 이미지 사이즈 280*86 -->
		<ul class="util_link">
			<li class="recent">
				<a href="/car/search/car_search_today.do">
					<i class="ico"></i>최근본차량
					
														
							<span class="badge">2</span>
						
						
					
				</a>
			</li>
			<li class="favorite">
				<a href="/user/interest_car.do">
					<i class="ico"></i>관심차량
					
						
							<span></span>
						
												
					
				</a>
			</li>
		</ul>
	</div>
</div>
<div class="gnb_area">
	<div class="inner">
		<!-- GNB -->
		<div id="nav" class="nav">
			<ul id="gnb" class="gnb">
				<li class="nth-child1 firstMenuGroup" data-child="true" menuid="A_MAIN40"> <!-- on클래스 추가하면 해당메뉴 활성화 -->
					<div class="wrap_box sub_wrapper"> <!-- 서브메뉴가 있을 경우 sub_wrapper 추가 -->
						<a href="/car/search/car_search_list.do"><span class="text">내차사기</span></a>
						<ul class="sub">
							<li class="" menuid="A_S40_10"><a href="/car/search/car_search_list.do">차량검색</a></li>
							<li class="" menuid="A_S40_50"><a href="/homeservice/service_buy_main.do">내차사기 홈서비스</a></li>
							<li class="" menuid="A_S40_70"><a href="/trade/exchange_guide.do">타던차와맞교환</a></li>
							<li class="" menuid="A_S40_40_20"><a href="/group/themecar.do">테마기획전</a></li>
							<li class="" menuid="A_S40_40_30"><a href="/group/lease/lease_list.do">리스차량</a></li>
							<li class="" menuid="A_S40_90"><a href="/car/search/car_prepare.do">판매준비차량</a></li>
							
						</ul>
					</div>
					<ul class="optional">
						<li class="weekly"><a href="/car/search/stockcar_list.do"><span class="text">위클리특가</span></a></li>
						<li class="seek"><a href="/help/helpMain.do"><span class="text">관심차량등록알림</span></a></li>
					</ul>
				</li>
				<li class="nth-child2 firstMenuGroup" data-child="true" menuid="A_MAIN50">
					<div class="wrap_box sub_wrapper"> <!-- 서브메뉴가 있을 경우 sub_wrapper 추가 -->
						<a href="/homeservice/service_sell_main.do"><span class="text">내차팔기</span></a>
						<ul class="sub">
							<li class="" menuid="A_S50_10"><a href="/homeservice/service_sell_main.do">내차팔기 홈서비스</a></li>
							<li class="" menuid="A_S20_50"><a href="/sell/sellCorporate.do">법인차매각</a></li>
							<li class="scrapBtn" menuid="A_S50_20"><a href="/scrap/scrap_req.do">폐차</a></li>
						</ul>
					</div>
				</li>
				<li class="nth-child3  firstMenuGroup" data-child="false" menuid="A_MAIN30">
					<div class="wrap_box">
						<a href="/directcenter/directcenter.do"><span class="text">전국직영점</span></a>
					</div>
				</li>
				<li class="nth-child4 firstMenuGroup" data-child="true" menuid="A_MAIN60">
					<div class="wrap_box sub_wrapper">
						<a href="/finance/finance_main.do?finParam=0"><span class="text">금융</span></a>
						<ul class="sub">
							<li class="" menuid="A_S20_40"><a href="/finance/finance_main.do?finParam=0">할부</a></li>
							<li class="" menuid="A_S20_40_30"><a href="/finance/finance_lease.do">리스</a></li>
						</ul>
					</div>
				</li>
				<li class="nth-child5  firstMenuGroup" data-child="true" menuid="A_MAIN70">									
					<div class="wrap_box sub_wrapper">
						<a href="/rentcar/rentcar_list.do"><span class="text">중고차렌트</span></a>
						<ul class="sub">
							<li class="" menuid="A_S70_10"><a href="/rentcar/rentcar_list.do">장기렌트</a></li>
							<li class="" menuid="A_S70_30"><a href="/rentcar/rentcar_discount.do">장기렌트 특가</a></li>							
						</ul>						
					</div>					
				</li>
			</ul>
		</div>
		<!-- // GNB -->
		<a href="#allMenu" class="all_open_btn">전체메뉴 펼치기</a>
		<a href="/car/search/stockcar_list.do" class="d_icon">위클리특가</a>
		<!-- all menu -->
		<div id="allMenu" class="all_menu_box">
			<ul class="all_list">
				<li class="nth-child1">
					<a href="/car/search/car_search_list.do">내차사기</a>
					<ul class="sub">
						<li><a href="/car/search/car_search_list.do">차량검색</a></li>
						<li><a href="/homeservice/service_buy_main.do">내차사기 홈서비스</a></li>
						<li><a href="/trade/exchange_guide.do">타던차와맞교환</a></li>
						<li><a href="/group/themecar.do">테마기획전</a></li>
						<li><a href="/car/search/vr_list.do">3D 라이브 뷰 <img src="/resources/images/common/ico_new.png" alt="new" class="new"></a></li>
						<li><a href="/group/lease/lease_list.do">리스차량</a></li>
						<li><a href="/car/search/stockcar_list.do">위클리특가</a></li> 
						<li><a href="/help/helpMain.do">관심차량등록알림</a></li>
						<li><a href="/car/search/car_prepare.do">판매준비차량 <img src="/resources/images/common/ico_new.png" alt="new" class="new"></a></li>
					</ul>
				</li>
				<li class="nth-child2">
					<a href="/homeservice/service_sell_main.do">내차팔기</a>
					<ul class="sub">
						<li><a href="/homeservice/service_sell_main.do">내차팔기 홈서비스</a></li>
						<li><a href="/sell/sellCorporate.do">법인차매각</a></li>
						<li class="scrapBtn"><a href="/scrap/scrap_req.do">폐차</a></li>
					</ul>
				</li>
				<li class="nth-child3">
					<a href="/directcenter/directcenter.do">전국직영점</a>
				</li>
				<li class="nth-child4">
					<a href="/finance/finance_main.do?finParam=0">금융</a>
					<ul class="sub">
						<li><a href="/finance/finance_main.do?finParam=0">할부</a></li>
						<li><a href="/finance/finance_lease.do">리스</a></li>
					</ul>
					<a href="/rentcar/rentcar_list.do">중고차렌트</a>
					<ul class="sub">
						<li><a href="/rentcar/rentcar_list.do">장기렌트</a></li>						
						<li><a href="/rentcar/rentcar_discount.do">장기렌트 특가 <img src="/resources/images/common/ico_new.png" alt="new" class="new"></a></li>						
					</ul>
				</li>
				<li class="nth-child5">
					<a href="/user/interest_car.do">마이페이지</a>
					<ul class="sub">
						<li><a href="/user/interest_car.do">관심차량</a></li>
						<li><a href="/user/myHelp_list.do">관심차량등록알림신청내역</a></li>
						<li><a href="/user/my_homeservice_list.do">홈서비스신청내역</a></li>
						<li><a href="/user/mychangeInfo.do">내정보</a></li>
					</ul>
				</li>
				<li class="nth-child6">
					<a href="/trade/ewguide.do">서비스안내</a>
					<ul class="sub">
						<li><a href="/trade/ewguide.do">보증서비스</a></li>
						<li><a href="/homeservice/service_main.do">홈서비스</a></li>
					</ul>
				</li>
				<li class="nth-child7">
					<a href="/cs/cs.do">고객지원</a>
				</li>
				<li class="nth-child8">
					<a href="/board/noticeboard/notice_list.do">공지사항</a>
				</li>
				<li class="nth-child9">
					<a href="http://company.kcar.com/company/index.do">회사소개</a>
				</li>
				<li class="nth-child10">
					<ul class="sub">
						<li><a href="/car/search/car_search_today.do">최근본차량</a></li>
						
							
								<li><a href="/user/user_login.do">로그인</a></li>
								<li><a href="/user/user_policyAgree.do">회원가입</a></li>
							
							
										
						<li><a href="/HTML/user/pc/user_private.html">개인정보처리방침</a></li>
						<li><a href="/HTML/user/pc/user_agreement.html">이용약관</a></li>
						<li><a href="/HTML/user/pc/user_online.html">온라인이용약관</a></li>
						<li><a href="/HTML/user/pc/user_refund.html">환불약관</a></li>
						<li><a href="/HTML/user/pc/user_infolist.html">개인정보이용내역</a></li>
						<li><a href="/HTML/user/pc/user_imagery.html">영상정보처리방침</a></li>
					</ul>
				</li>
			</ul>
			<a href="#nav" class="all_close_btn">메뉴닫기</a>
		</div>
		<!-- // all menu -->
	</div>
</div>
<!-- 현재 페이지 위치 -->

<!-- New publishing End  -->

		</div>
		<div id="content" class="content_1180"> 
		<div class="emblem"><a href="/board/noticeboard/notice_view.do?i_sBoardCode=BN20191200000006"><img src="/resources/images/index/emblem2020.png" width="110" height="112" alt="2020대한민국 퍼스트브랜드 대상" border="0"></a></div>
			






<!-- [s] view 화면으로 이동용 -->
<form name="movefrm" method="post" action="">
<input type="hidden" name="i_sViewType" value="CAR_VTYPE010">
<input type="hidden" name="i_sCarCd" value="">
<input type="hidden" name="i_sReturnUrl" value="">
<input type="hidden" name="i_sReturnPars" value="">
</form>
<!-- [e] view 화면으로 이동용 -->
<form name="frm" method="post" action="" autocomplete="off">
<input type="hidden" name="i_sCarCd" value="">
<input type="hidden" name="i_iNowPageNo" value="1">
<input type="hidden" name="i_sReturnUrl" value="">
<input type="hidden" name="i_iAlsunNowPageNo" value="">
<input type="hidden" name="i_sReturnPars" value="">
<input type="hidden" name="i_sMakeType" value="">
<input type="hidden" name="i_sSearchType" value="">
<input type="hidden" name="i_sListType" value="">
<input type="hidden" name="i_sViewType" value="">
<input type="hidden" name="i_sSearchType2" value="">
<input type="hidden" name="i_sDetailPagUrl" value="">
<input type="hidden" name="i_sArrCategoryCd" value="">
<input type="hidden" name="i_sAlsunSearchCd" value="">
<input type="hidden" name="i_sOrderBy" value="C.V_ECC_UPDATE_DTM DESC">
<input type="hidden" name="i_s3dViewFlag" id="i_s3dViewFlag" value="">

<div class="sub_content">
	<div class="mypage_CarList lastView">
		<!-- 180904 신규 배너 추가 -->
		<div id="interest_top_banner" class="banner_area top_banner" style="background:#FFF5F3"><a href="https://www.kcar.com/finance/finance_main.do?finParam=0" target=""><img src="https://img.kcar.com/FILE_UPLOAD2/IMAGE_UPLOAD/BANNER/20195/banner20195712xIUfTN.jpg" alt="목돈 쓰기 아까울 땐? 할부로 하세요. 다양한 납입방식! K Car 할부, 지금 확인"></a></div>
		<div class="tit_area">
			<h3>최근 본 차량</h3>
			<p>최근 일주일 동안 고객님이 보신 차량입니다. 최근 본 차량을 계속 보관하려면 로그인 후 관심차량에 담아 주세요.</p>
		</div>

		<div class="align_field">
			<div class="all_check">
				<div class="checker" id="uniform-allCheck"><span><input type="checkbox" name="allCheck" id="allCheck" class="uniform" title="전체체크"></span></div>
			</div>
			<div class="align">
<!-- 3D -->
				<span><a href="javascript:orderbyVrFlag();" class="3dview_flag txt " name="wr_eq_v_3dview_flag"><em class="vr_ordermark"></em> 3D 라이브 뷰 차량</a></span>
<!-- 3D -->
				<span class="basic"><a href="javascript:orderbyChange('');" class="txt">기본정렬</a></span>
				<span><a href="javascript:orderbyChange('C.N_PRICE ASC');" class="txt">가격순</a><a href="javascript:orderbyChange('C.N_PRICE ASC');" class="down ">낮은순</a><a href="javascript:orderbyChange('C.N_PRICE DESC');" class="up ">높은순</a></span>
				<span><a href="javascript:orderbyChange('C.N_MILEAGE ASC');" class="txt">주행거리 순</a><a href="javascript:orderbyChange('C.N_MILEAGE ASC');" class="down ">낮은순</a><a href="javascript:orderbyChange('C.N_MILEAGE DESC');" class="up ">높은순</a></span>
				<span><a href="javascript:orderbyChange('C.V_MFR_DATE ASC');" class="txt">연식 순</a><a href="javascript:orderbyChange('C.V_MFR_DATE ASC');" class="down ">낮은순</a><a href="javascript:orderbyChange('C.V_MFR_DATE DESC');" class="up ">높은순</a></span>
			</div>
		</div>

		<div class="result_list">
			<table>
				<caption>관심차량</caption>

				<colgroup>
					<col style="width: 55px;">
					<col style="width: 190px;">
					<col style="width: 485px;">
					<col style="width: 290px;">
					<col>
				</colgroup>

				<tbody>
					
						<tr>
							<td class="check">
								<div class="checker" id="uniform-today_list_check1"><span><input type="checkbox" id="today_list_check1" class="uniform" name="i_arrCarCd" value="EC60316025"></span></div>
							</td>
							<td class="thumb">
								<a href="/car/info/car_info_detail.do?i_sCarCd=EC60316025">								
									
<!-- 20181217 VR차량 -->
									
<!-- //20181217 VR차량 -->
									<img src="https://img.kcar.com/carpicture/carpicture01/pic6031/kcar_60316025_001.jpg" alt="자동차 썸네일">
								</a>
							</td>
							<td class="car_info">
								<a href="/car/info/car_info_detail.do?i_sCarCd=EC60316025" class="name">기아 스포티지 4세대<br> 디젤 2.0 2WD 노블레스 플러스</a>
								<span class="md_year">18년 06월식 &nbsp; 14,828km</span>								
								
									
										<span class="price">2,200만원 </span>
									
									
									
								
								<span class="mark" data-mark="09;19;26" data-lease="2"><span class="tip_list tip_09"><button type="button" class="tip_btn" onclick="openHotMarkToolTip(this);">특옵션</button> <span class="tip_hot none"><b>특옵션<a href="javascript:closeHotMarkToolTip(this);" class="tip_cl">닫기</a></b><i>추가 선택 옵션 장착 혹은 최상위 등급 차량</i></span></span><span class="tip_list tip_19"><button type="button" class="tip_btn" onclick="openHotMarkToolTip(this);">짧은Km</button> <span class="tip_hot none"><b>짧은Km<a href="javascript:closeHotMarkToolTip(this);" class="tip_cl">닫기</a></b><i>연 10,000km 이내 주행 차량</i></span></span><span class="tip_list tip_26"><button type="button" class="tip_btn" onclick="openHotMarkToolTip(this);">제조사AS</button> <span class="tip_hot none"><b>제조사AS<a href="javascript:closeHotMarkToolTip(this);" class="tip_cl">닫기</a></b><i>제조사 A/S 잔존 차량</i></span></span></span>
							</td>
							<td class="car_opt">
								<ul class="opt_list">
									<li>
										<span class="pt">
											
												
												
												
												무사고
											
										</span>
										<span>디젤</span>
									</li>
									<li>
										<span>흰색</span>
										<span>SUV</span>
									</li>
									<li>
										<span>경남</span>
										<span>5인승</span>
									</li>
								</ul>
								
								<span class="online_buy">♥보험이력無♥정말깨끗한 실내 . 외관 상태♥준신차급♥무사고</span>
							</td>
							
							<td class="btn_area">
								<a href="javascript:fnOnlineBuy('EC60316025','0');" class="online" id="onlineBuy0">온라인 구매 </a>
							</td>
						</tr>
					
						<tr>
							<td class="check">
								<div class="checker" id="uniform-today_list_check2"><span><input type="checkbox" id="today_list_check2" class="uniform" name="i_arrCarCd" value="EC60305865"></span></div>
							</td>
							<td class="thumb">
								<a href="/car/info/car_info_detail.do?i_sCarCd=EC60305865">								
									
<!-- 20181217 VR차량 -->
									
<!-- //20181217 VR차량 -->
									<img src="https://img.kcar.com/carpicture/carpicture10/pic6030/kcar_60305865_001.jpg" alt="자동차 썸네일">
								</a>
							</td>
							<td class="car_info">
								<a href="/car/info/car_info_detail.do?i_sCarCd=EC60305865" class="name">기아 모하비<br> 4WD QV300 고급형</a>
								<span class="md_year">09년 06월식 &nbsp; 94,530km</span>								
								
									
									
									
										<span class="price weekly">1,500만원</span>
										<span class="sale">위클리특가 1,430만원</span>
									
								
								<span class="mark" data-mark="10;30;31" data-lease="3"><span class="tip_list tip_10"><button type="button" class="tip_btn" onclick="openHotMarkToolTip(this);">1인소유</button> <span class="tip_hot none"><b>1인소유<a href="javascript:closeHotMarkToolTip(this);" class="tip_cl">닫기</a></b><i>소유자 변경 이력이 없는 차량(대여 이력 및 법인 명의 차량 제외)</i></span></span><span class="tip_list tip_30"><button type="button" class="tip_btn" onclick="openHotMarkToolTip(this);">보험이력無</button> <span class="tip_hot none"><b>보험이력無<a href="javascript:closeHotMarkToolTip(this);" class="tip_cl">닫기</a></b><i>정보 조회일자 기준 보험이력이 없는 차량</i></span></span><span class="tip_list tip_31"><button type="button" class="tip_btn" onclick="openHotMarkToolTip(this);">7인승</button> <span class="tip_hot none"><b>7인승<a href="javascript:closeHotMarkToolTip(this);" class="tip_cl">닫기</a></b><i>7인승 차량</i></span></span></span>
							</td>
							<td class="car_opt">
								<ul class="opt_list">
									<li>
										<span class="pt">
											
												
												
												
												단순교환
											
										</span>
										<span>디젤</span>
									</li>
									<li>
										<span>은색</span>
										<span>SUV</span>
									</li>
									<li>
										<span>경기/인천</span>
										<span>7인승</span>
									</li>
								</ul>
								
								<span class="online_buy"># 1인신조 # 4륜차량 # 네비 및 썬루프 # 타이어 상태 Good !!</span>
							</td>
							
							<td class="btn_area">
								<a href="javascript:fnOnlineBuy('EC60305865','1');" class="off_btn" id="onlineBuy1">온라인 구매 </a>
							</td>
						</tr>
					
				</tbody>
			</table>
		</div>

		<div class="btn_cont">
			<a href="javascript:;" class="delete" onclick="fnDelete();">선택삭제</a>

			<div class="center_btn">
				<a href="javascript:;" onclick="fnWindowPop('/car/info/car_sms_pop.do','smspop','560','510'); return false;">선택한 차량 모바일에서 보기</a>
				<a href="javascript:;" onclick="fnThisPageSave(1); return false;">선택한 차량 PC에 저장하기</a>
				<a href="javascript:;" onclick="fnWindowPop2('/car/info/car_info_send_mail_pop.do','mailpop', '550','571'); return false;">선택한 차량 메일보내기</a>
			</div>
		</div>
		
		<div id="interest_bottom_banner" class="banner_area btm_banner"><a target="" href="https://www.kcar.com/group/theme/theme.do?i_sThemeCd=19122"><img src="https://img.kcar.com/FILE_UPLOAD2/IMAGE_UPLOAD/BANNER/201912/banner2019121819dq1w0C.jpg" alt="천만원 미만 수입차 기획전"></a></div>
	</div>
</div>
<!-- // content -->

</form>


			
		</div>
		








<div class="emblem"><p><img src="/resources/images/index/footer_emblem2020.png" width="93" height="26" alt="2020대한민국 퍼스트브랜드 대상" border="0"></p></div>
<div id="footerNew" class="footer_new">
	<div class="utils">
		<div class="inner">
			<ul class="links">
				<li><a href="http://company.kcar.com/company/index.do">회사소개</a></li>
				<li><a href="/trade/ewguide.do">서비스안내</a></li>
				<li><a href="/HTML/user/pc/user_private.html"><strong>개인정보처리방침</strong></a></li>
				<li><a href="/HTML/user/pc/user_agreement.html">이용약관</a></li>
				<li><a href="http://company.kcar.com/company/hr/hr_employinfo.do">인재채용</a></li>
				<li><a href="/cs/cs.do">고객지원</a></li>
				<li><a href="http://company.kcar.com/company/bu/bu_ethics.do">비윤리 제보</a></li>
				<li><a href="http://company.kcar.com/company/bu/bu_ethicscode.do">윤리강령</a></li>
			</ul>
			<div class="familys">
				<div class="selectric-wrapper selectric-selectric"><div class="selectric-hide-select"><select name="" id="selectID1" title="패밀리사이트 바로가기" class="selectric" tabindex="-1">
					<option value="#none">Family Site</option>
					<option value="https://www.kcarauction.com">K Car 옥션</option>
				</select></div><div class="selectric"><span class="label">Family Site</span><b class="button">▾</b></div><div class="selectric-items" tabindex="-1"><div class="selectric-scroll"><ul><li data-index="0" class="selected">Family Site</li><li data-index="1" class="last">K Car 옥션</li></ul></div></div><input class="selectric-input" tabindex="0"></div>
			</div>
		</div>
	</div>
	<div class="primary">
		<div class="inner">
			<div class="footer_logo"><img src="/resources/images/common/logo_footer.gif" alt="K Car"></div>
			<ul class="footer_sns">
				<!-- <li class="youtube"><a href="https://www.youtube.com/c/KCar직영중고차" target="_blank">유투브</a></li> -->
			<li class="facebook"><a href="https://www.facebook.com/kcar.official" target="_blank">페이스북</a></li>
				<li class="ncafe"><a href="http://cafe.naver.com/kcarofficial" target="_blank">네이버카페</a></li>
				<li class="post"><a href="https://post.naver.com/kcar-official" target="_blank">네이버포스트</a></li>
				<li class="nblog"><a href="https://blog.naver.com/kcar-official" target="_blank">네이버블로그</a></li>
			</ul>
			<div class="company">
				<span class="asset">내차사기 홈서비스 1588-5455(1)</span>
				<span class="asset">일반문의 1588-5455(4)</span>
				<span class="asset">대표자 정인국</span>
				<span class="asset">개인정보관리책임자 정태영</span>
				<br>
				<span class="asset">사업자등록번호 787-87-00729</span>
				<span class="asset">통신판매업신고 제 2018-서울영등포-0562호</span>
				<span class="asset">사업장 소재지  서울특별시 영등포구 선유로43길 27, 3층(양평동3가)</span>
			</div>
			<div class="copyright">Copyright © 에이치씨에이에스㈜ All Rights Reserved</div>
		</div>
	</div>
</div>
	</div>
</template>