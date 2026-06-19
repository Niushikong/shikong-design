import { useState, useEffect, lazy, Suspense } from 'react';
const Antigravity = lazy(() => import('./Antigravity'));

// 作品数据
const workDetails = {
  1: {
    title: '特普丽墙纸布艺门店标准化设计',
    type: '门店美陈 / 连锁品牌',
    bg: '为特普丽墙纸布艺品牌打造全国连锁门店标准化设计体系，涵盖空间规划、展示系统、软装搭配等全流程设计，支持快速复制落地。',
    idea: '设计以"沉浸式体验"为核心，打造"产品即展示"的空间逻辑。采用模块化展示系统，灵活适配不同面积门店。色彩系统以品牌色为主调，营造温馨舒适的家居氛围。',
    summary: '标准化体系已在全国50+门店落地应用，有效提升品牌形象统一性，单店装修周期缩短30%，客户满意度显著提升。'
  },
  2: {
    title: '渠道店',
    type: '门店美陈 / 连锁品牌',
    bg: '为特普丽墙纸渠道店打造标准化空间设计方案，针对不同场地条件设计一字型、L型、U型三种布局模式，满足各类渠道门店的空间需求。',
    idea: '采用模块化设计理念，将产品展示、客户体验、销售洽谈等功能模块灵活组合。根据门店面积与形状特点，提供三种标准化布局方案，确保空间利用率最大化，同时保持品牌形象的统一性。',
    summary: '渠道店标准化方案已在全国200+门店落地，有效降低渠道商装修成本，缩短开业周期，实现品牌视觉统一化管理。'
  },
  3: {
    title: '58到家门店标准化设计',
    type: '室内工装 / 连锁品牌',
    bg: '为58到家线下服务门店设计标准化空间方案，涵盖接待区、服务展示区、洽谈区等功能模块，提升品牌形象与用户体验。',
    idea: '采用开放式布局，强化品牌视觉识别。设置服务流程可视化展示墙，增强用户信任感。运用温暖的木色与品牌橙色搭配，营造亲和专业的服务氛围。',
    summary: '设计方案已在北京、上海、广州等城市落地，服务转化率提升25%，成为生活服务类门店设计的标杆案例。'
  },
  4: {
    title: '牙科医院整体空间设计',
    type: '医疗空间设计',
    bg: '为一家高端牙科诊所进行整体空间规划设计，需要兼顾医疗功能的专业性与就诊环境的舒适感，消除患者对牙科治疗的恐惧心理。',
    idea: '采用"自然疗愈"设计理念，引入大量绿植元素与自然采光。候诊区设置舒适的沙发与阅读角，诊疗室采用暖色调灯光与隔音设计。整体空间以白色与浅木色为主，搭配柔和的曲线元素。',
    summary: '设计有效降低了患者的焦虑情绪，诊所好评率提升40%。项目获得医疗空间设计奖项提名，成为区域医疗空间设计的标杆案例。'
  },
  5: {
    title: '小区电子孪生沙盘',
    type: '3D可视化 / 数字沙盘',
    bg: '为某高端住宅项目开发电子孪生沙盘系统，用于售楼处展示。需要实现小区全景三维可视化，支持日照分析、噪音模拟、户型展示等功能。',
    idea: '基于高精度三维建模技术，1:1还原小区建筑、景观与配套设施。开发交互式控制系统，支持视角切换、信息标注、实时数据展示。集成日照模拟与噪音分析模块，直观展示居住环境优势。',
    summary: '系统投入使用后，客户看房效率提升50%，销售转化率显著提高。项目获得地产营销创新奖，技术方案被推广至多个项目应用。'
  },
  6: {
    title: '3D动态看盘&漫游动画',
    type: '动态视觉 / 三维动画',
    bg: '为某大型园区项目制作三维漫游动画，用于线上宣传与招商展示。需要立体呈现园区整体布局、建筑细节与配套设施。',
    idea: '采用电影级渲染技术，制作5分钟完整漫游动画。设计多条游览路线，涵盖园区入口、办公区、商业区、景观带等核心区域。配合专业配音与背景音乐，打造沉浸式观看体验。',
    summary: '动画在招商推介会上获得高度评价，成功助力项目签约多个重点企业。视频在网络平台播放量突破百万，有效提升了项目知名度。'
  },
  7: {
    title: '线下活动视觉美陈设计',
    type: '视觉设计 / 场景布置',
    bg: '为某品牌年度发布会进行整体视觉美陈设计，需要打造吸睛的视觉场景，同时控制搭建成本，确保方案可落地执行。',
    idea: '以"未来感"为主题，设计主舞台背景、签到区、互动区、拍照打卡点等核心场景。采用可重复利用的模块化结构，配合灯光与投影技术，实现高性价比的视觉呈现。',
    summary: '活动现场视觉效果超出预期，社交媒体曝光量超过500万。设计方案的模块化思路被品牌方采纳，应用于后续多场活动。'
  },
  8: {
    title: 'AI数字人形象&互动设计',
    type: '数字IP / AI视觉设计',
    bg: '为某科技企业展厅开发AI数字人形象，用于智能导览与互动问答。需要设计符合品牌调性的数字人形象，并实现自然流畅的交互体验。',
    idea: '设计具有未来感的虚拟形象，融入企业品牌元素。采用动作捕捉技术制作自然流畅的动作库，结合AI语音合成实现实时对话。开发触摸屏交互界面，支持语音与触控双重交互方式。',
    summary: '数字人成为展厅最受欢迎的互动项目，日均互动量超过1000次。项目获得数字展示创新奖，技术方案被多家企业借鉴引进。'
  },
  9: {
    title: '办公空间整体规划设计',
    type: '工装设计',
    bg: '为某互联网公司新办公区进行整体规划设计，需要满足200人团队的办公需求，兼顾工作效率、采光通风与团队协作氛围。',
    idea: '采用开放式办公布局，设置多功能协作区、专注工作区、休闲交流区。引入"活动办公"理念，配备可升降工位与移动会议舱。整体设计以简约现代风格为主，运用绿植与自然元素提升空间活力。',
    summary: '新办公区投入使用后，员工满意度达到95%，团队协作效率显著提升。项目成为公司企业文化展示的重要窗口，多次接待行业参观交流。'
  },
  10: {
    title: '品牌视觉物料整套设计',
    type: '平面视觉 / 版式设计',
    bg: '为某新消费品牌进行全套视觉物料设计，需要建立统一的品牌视觉规范，完成海报、展板、宣传物料等全套设计输出。',
    idea: '基于品牌定位，制定完整的视觉识别系统（VI），包括标志规范、色彩体系、字体规范、图形元素等。设计系列海报、产品包装、线下物料、线上素材，确保视觉风格统一协调。',
    summary: '视觉系统成功帮助品牌建立市场认知度，品牌形象获得消费者广泛认可。设计方案被品牌方沿用至今，成为品牌资产的重要组成部分。'
  },
  11: {
    title: '单品设计',
    type: '门店美陈 / 单品展示',
    bg: '为特普丽墙纸布艺品牌打造单品展示设计方案，涵盖高端壁纸系列、布艺窗帘、配套软装单品等产品视觉呈现。',
    idea: '采用场景化展示设计，将单品融入真实生活场景，让客户直观感受产品在实际空间中的应用效果。运用专业的灯光设计和陈列方式，凸显产品质感与设计细节。',
    summary: '单品设计方案有效提升了产品展示效果和客户购买体验，帮助品牌实现从单品销售到场景化营销的升级转型。'
  },
  12: {
    title: '橱窗设计',
    type: '空间设计 / 橱窗展示',
    bg: '为各类品牌门店打造橱窗设计方案，涵盖中式、北欧、工业风、轻奢等多种设计风格，以视觉吸引力传递品牌调性与产品亮点。',
    idea: '根据品牌定位与产品特性，定制主题化橱窗设计方案。运用色彩心理学与视觉层次原理，营造强烈的视觉冲击力。注重材质搭配与灯光设计，突出产品质感与设计细节。',
    summary: '橱窗设计方案帮助品牌提升店铺吸引力，有效增加进店客流，成为品牌视觉营销的重要组成部分。'
  },
  13: {
    title: '商务部投资促进事务局',
    type: '空间设计 / 政府办公空间',
    bg: '为商务部投资促进事务局设计现代化办公空间，需要体现政府机构的严谨专业性，同时营造开放、高效、亲民的政务服务氛围。',
    idea: '采用简洁大气的设计语言，以白色与浅灰色为主调，搭配木色元素增添温度。合理规划接待区、会议室、办公区等功能分区，注重光线利用与空间层次感，打造现代化政务办公空间。',
    summary: '设计方案提升了政府窗口形象，优化了政务服务环境，获得相关部门的高度认可，成为政务办公空间设计的参考案例。'
  },
  14: {
    title: '观湖国际',
    type: '空间设计 / 住宅设计',
    bg: '为观湖国际高端住宅项目打造室内设计方案，注重空间利用、采光优化与居住舒适度，营造温馨雅致的居家氛围。',
    idea: '以现代简约风格为基调，融入轻奢元素提升品质感。客厅采用开放式布局，增强空间通透感；卧室注重私密性与舒适度设计；儿童房兼顾安全性与趣味性，打造专属童趣空间。',
    summary: '设计方案充分考虑业主生活需求与审美偏好，实现了功能与美学的完美结合，成为高端住宅室内设计的优秀案例。'
  },
  15: {
    title: '58同城总部会议接待室',
    type: '空间设计 / 办公空间',
    bg: '为58同城总部设计会议接待室空间，需要满足大型会议、商务接待、媒体发布等多种功能需求，体现企业实力与品牌形象。',
    idea: '采用现代简约设计风格，以灰色与木色为主调，搭配品牌橙色点缀。打造多功能会议空间，支持灵活布局与多种场景切换。注重声学设计与智能化配置，提升会议体验与效率。',
    summary: '设计方案有效提升了企业形象展示能力，成为总部重要的对外接待窗口，获得企业高层与来访嘉宾的高度认可。'
  },
  16: {
    title: '济南雷风展览展示有限公司',
    type: '空间设计 / 展览展示',
    bg: '为济南雷风展览展示有限公司设计企业展厅空间，展示公司业务范围、核心产品与技术实力，提升品牌形象与客户体验。',
    idea: '采用开放式布局设计，融入科技感元素展现企业创新实力。合理规划产品展示区、案例展示区、接待洽谈区等功能区域，运用多媒体互动技术增强展示效果，打造沉浸式参观体验。',
    summary: '展厅设计有效提升了企业形象展示能力，成为公司重要的对外宣传窗口，帮助企业在行业展会中脱颖而出，获得众多客户的关注与合作意向。'
  },
  17: {
    title: '雅宝红城水吧',
    type: '空间设计 / 商业空间',
    bg: '为雅宝红城项目设计水吧休闲空间，需要打造温馨舒适的休闲氛围，满足业主日常休闲、社交聚会等需求，提升社区生活品质。',
    idea: '采用现代简约设计风格，以蓝色与木色为主调，营造清新自然的水吧氛围。合理规划吧台操作区、休闲座位区、储物区等功能空间，注重灯光设计与软装搭配，打造舒适惬意的休闲场所。',
    summary: '水吧设计方案成功营造了温馨舒适的休闲空间，成为社区居民喜爱的社交场所，有效提升了项目的居住体验与社区活力。'
  },
  18: {
    title: '道具设计',
    type: '空间设计 / 道具定制',
    bg: '为各类商业空间设计定制道具方案，涵盖收银台、背景墙、屏风、展示柜等多种商业道具，满足品牌形象展示与功能需求。',
    idea: '根据品牌调性与空间需求，定制化设计各类商业道具。注重材质选择与工艺细节，确保道具既美观又实用。运用模块化设计思路，支持快速组装与灵活调整，适配不同场景需求。',
    summary: '道具设计方案有效提升了商业空间的展示效果与品牌形象，帮助客户实现空间功能与视觉效果的双重提升，获得众多品牌客户的认可与合作。'
  }
};

// 导航栏组件
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = ['home', 'about', 'works', 'skills', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 150;
          if (scrollY >= offsetTop) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
          SHIKONG · 设计
        </a>
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="菜单"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {['首页', '关于我', '作品集', '专业技能', '联系我'].map((item, index) => {
            const sectionId = ['home', 'about', 'works', 'skills', 'contact'][index];
            return (
              <li key={sectionId}>
                <a 
                  href={`#${sectionId}`} 
                  className={`nav-link ${activeSection === sectionId ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(sectionId); }}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

// Hero组件 - 集成Antigravity
const Hero = () => {
  const scrollToWorks = () => {
    const element = document.getElementById('works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-canvas">
        <Suspense fallback={<div className="canvas-placeholder"></div>}>
          <Antigravity
            count={300}
            magnetRadius={12}
            ringRadius={7}
            waveSpeed={0.4}
            waveAmplitude={3.5}
            particleSize={0.045}
            lerpSpeed={0.11}
            color="#00ffd8"
            autoAnimate={true}
            particleVariance={1}
            depthFactor={2.3}
            particleShape="capsule"
            fieldStrength={15}
          />
        </Suspense>
      </div>
      <div className="hero-content">
        <h1>创意 · 构筑视觉与空间之美</h1>
        <h2><span className="h2-main">全案设计师 | </span><span className="h2-sub">专注空间设计 / 3D可视化 / 数字视觉创作</span></h2>
        <p>深耕设计领域多年，以落地思维+创意美学<br/>打造兼具颜值与实用的设计作品</p>
        <button className="btn-primary" onClick={scrollToWorks}>查看我的作品</button>
      </div>
      <div className="scroll-indicator">
        <span></span>
      </div>
    </section>
  );
};

// 关于我组件
const About = () => (
  <section className="section about" id="about">
    <div className="container">
      <h2 className="section-title">关于我</h2>
      <div className="about-content">
        <div className="about-image">
          <img src="profile.png" alt="个人形象照" className="profile-img" />
        </div>
        <div className="about-text">
          <p>拥有<strong>10年专业设计经验</strong>，持有多项设计专利，主攻室内工装、新零售空间、医院空间、3D电子孪生沙盘、AI数字人、动态漫游动画等方向。</p>
          <p>擅长从需求出发，融合美学、功能、落地性三大核心，完成从概念构思、方案设计、三维可视化到落地跟进的全流程设计工作。始终坚持「创意不脱离实用，美学服务于场景」的设计理念。</p>
          <div className="tags">
            <span className="tag">空间设计</span>
            <span className="tag">3D可视化</span>
            <span className="tag">电子孪生</span>
            <span className="tag">视觉美陈</span>
            <span className="tag">AI数字设计</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// 作品集组件
const Works = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedWork, setSelectedWork] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const works = [
    { id: 1, title: '特普丽墙纸布艺门店标准化设计', type: '门店美陈 / 连锁品牌', category: 'space', desc: '为特普丽墙纸打造全国连锁门店标准化设计体系，统一品牌视觉语言与空间体验。', images: ['work1.jpg', 'work1-2.jpg', 'work1-3.jpg', 'work1-4.jpg', 'work1-5.jpg', 'work1-6.jpg', 'work1-7.jpg'] },
    { id: 2, title: '渠道店', type: '门店美陈 / 连锁品牌', category: 'space', desc: '特普丽墙纸渠道店标准化设计，涵盖一字型、L型、U型三种空间布局方案，适配不同门店面积与场地条件。', images: ['work1-channel-s1-1.jpg', 'work1-channel-s1-2.jpg', 'work1-channel-s1-3.jpg', 'work1-channel-s1-4.jpg', 'work1-channel-s1-5.jpg', 'work1-channel-s1-6.jpg', 'work1-channel-l1.jpg', 'work1-channel-l2.jpg', 'work1-channel-l3.jpg', 'work1-channel-l4.jpg', 'work1-channel-l5.jpg', 'work1-channel-l6.jpg', 'work1-channel-l7.jpg', 'work1-channel-l8.jpg', 'work1-channel-u1.jpg', 'work1-channel-u2.jpg', 'work1-channel-u3.jpg', 'work1-channel-u4.jpg'] },
    { id: 3, title: '58到家门店标准化设计', type: '室内工装 / 连锁品牌', category: 'space', desc: '为58到家线下服务门店设计标准化空间方案，提升品牌形象与服务体验。', images: ['home-entry.jpg', 'home-vip.jpg', 'home-meeting.jpg', 'home-kid.jpg'] },
    { id: 4, title: '牙科医院整体空间设计', type: '医疗空间设计', category: 'space', desc: '兼顾医疗功能性、舒适感与视觉氛围，弱化冰冷感，打造温馨专业诊疗环境。' },
    { id: 5, title: '小区电子孪生沙盘', type: '3D可视化 / 数字沙盘', category: '3d', desc: '三维建模+实景还原，支持日照、噪音、户型可视化模拟，用于楼盘展示。' },
    { id: 6, title: '3D动态看盘&漫游动画', type: '动态视觉 / 三维动画', category: '3d', desc: '全场景动态漫游演示，立体呈现园区布局、配套与建筑细节。' },
    { id: 7, title: '线下活动视觉美陈设计', type: '视觉设计 / 场景布置', category: 'visual', desc: '根据活动主题定制视觉方案，适配线下落地搭建，视觉吸睛且成本可控。' },
    { id: 8, title: 'AI数字人形象&互动设计', type: '数字IP / AI视觉设计', category: 'ai', desc: '原创数字人形象设计、动作调试与场景适配，应用于展厅、线上宣传。' },
    { id: 9, title: '办公空间整体规划设计', type: '工装设计', category: 'space', desc: '合理划分功能分区，兼顾办公效率、采光与团队交流氛围。' },
    { id: 10, title: '品牌视觉物料整套设计', type: '平面视觉 / 版式设计', category: 'visual', desc: '统一品牌视觉规范，完成海报、展板、宣传物料全套设计输出。' },
    { id: 11, title: '单品设计', type: '门店美陈 / 单品展示', category: 'space', desc: '特普丽墙纸布艺单品设计展示，涵盖高端壁纸系列、布艺窗帘、配套软装单品等。', images: ['work1-product-1.jpg', 'work1-product-2.jpg', 'work1-product-3.jpg'] },
    { id: 12, title: '橱窗设计', type: '空间设计 / 橱窗展示', category: 'space', desc: '各类风格橱窗设计方案，涵盖中式、北欧、工业风、轻奢等多种设计风格，打造视觉焦点与品牌调性。', images: ['window-1.jpg', 'window-2.jpg', 'window-3.jpg', 'window-4.jpg', 'window-5.jpg', 'window-6.jpg', 'window-7.jpg', 'window-8.jpg', 'window-9.jpg', 'window-10.jpg', 'window-11.jpg', 'window-12.jpg', 'window-13.jpg', 'window-14.jpg', 'window-15.jpg', 'window-16.jpg', 'window-17.jpg', 'window-18.jpg', 'window-19.jpg', 'window-20.jpg', 'window-21.jpg', 'window-22.jpg', 'window-23.jpg', 'window-24.jpg', 'window-25.jpg', 'window-26.jpg', 'window-27.jpg', 'window-28.jpg', 'window-29.jpg', 'window-30.jpg'] },
    { id: 13, title: '商务部投资促进事务局', type: '空间设计 / 政府办公空间', category: 'space', desc: '为商务部投资促进事务局设计现代化政务办公空间，打造开放、高效、亲民的政府窗口形象。', images: ['invest-1.jpg', 'invest-2.jpg', 'invest-3.jpg', 'invest-4.jpg', 'invest-5.jpg', 'invest-6.jpg', 'invest-7.jpg', 'invest-8.jpg', 'invest-9.jpg', 'invest-10.jpg'] },
    { id: 14, title: '观湖国际', type: '空间设计 / 住宅设计', category: 'space', desc: '观湖国际高端住宅室内设计方案，涵盖客厅、卧室、儿童房、卫生间等空间设计，打造温馨雅致的居家氛围。', images: ['lake-1.jpg', 'lake-2.jpg', 'lake-3.jpg', 'lake-4.jpg', 'lake-5.jpg', 'lake-6.jpg'] },
    { id: 15, title: '58同城总部会议接待室', type: '空间设计 / 办公空间', category: 'space', desc: '为58同城总部设计会议接待室空间，满足大型会议、商务接待、媒体发布等多种功能需求。', images: ['58meeting-1.jpg', '58meeting-2.jpg', '58meeting-3.jpg', '58meeting-4.jpg', '58meeting-5.jpg'] },
    { id: 16, title: '济南雷风展览展示有限公司', type: '空间设计 / 展览展示', category: 'space', desc: '为济南雷风展览展示有限公司设计企业展厅空间，展示公司业务范围、核心产品与技术实力。', images: ['leifeng-1.jpg', 'leifeng-2.jpg', 'leifeng-3.jpg', 'leifeng-4.jpg', 'leifeng-5.jpg'] },
    { id: 17, title: '雅宝红城水吧', type: '空间设计 / 商业空间', category: 'space', desc: '为雅宝红城项目设计水吧休闲空间，打造温馨舒适的休闲氛围，提升社区生活品质。', images: ['yabao-1.jpg', 'yabao-2.jpg', 'yabao-3.jpg', 'yabao-4.jpg'] },
    { id: 18, title: '道具设计', type: '空间设计 / 道具定制', category: 'space', desc: '为各类商业空间设计定制道具方案，涵盖收银台、背景墙、屏风、展示柜等多种商业道具。', images: ['prop-1.jpg', 'prop-2.jpg', 'prop-3.jpg', 'prop-4.jpg', 'prop-5.jpg', 'prop-6.jpg', 'prop-7.jpg', 'prop-8.jpg', 'prop-9.jpg', 'prop-10.jpg', 'prop-11.jpg'] },
  ];

  const filteredWorks = activeFilter === 'all' 
    ? works 
    : works.filter(work => work.category === activeFilter);

  const openModal = (workId) => {
    const work = works.find(w => w.id === workId);
    setSelectedImageIndex(0);
    setActiveCategory(null);
    setSelectedWork({ ...workDetails[workId], images: work?.images || [], imageCategories: work?.imageCategories });
  };

  const closeModal = () => {
    setSelectedWork(null);
    setIsFullscreen(false);
  };

  const openFullscreen = (index) => {
    setSelectedImageIndex(index);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <>
      <section className="section works" id="works">
        <div className="container">
          <h2 className="section-title">核心作品集</h2>
          
          <div className="filter-tabs">
            {[{ key: 'all', label: '全部' }, { key: 'space', label: '空间设计' }, { key: '3d', label: '3D沙盘/漫游' }, { key: 'visual', label: '视觉美陈' }, { key: 'ai', label: 'AI数字作品' }].map(filter => (
              <button 
                key={filter.key}
                className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.key)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="works-grid">
            {filteredWorks.map(work => (
              <div 
                key={work.id} 
                className="work-card"
                onClick={() => openModal(work.id)}
              >
                <div className="work-image">
                  {work.images?.[0] ? (
                    <img src={work.images[0]} alt={work.title} />
                  ) : (
                    <div className="image-placeholder"><span>作品图</span></div>
                  )}
                </div>
                <div className="work-info">
                  <h3>{work.title}</h3>
                  <span className="work-type">{work.type}</span>
                  <p>{work.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedWork && (
        <div className="modal active" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <div className="modal-body">
              <div className="modal-header">
                <h2>{selectedWork.title}</h2>
                <span className="work-type">{selectedWork.type}</span>
              </div>
              <div className="modal-intro">
                <div className="modal-section">
                  <h4>项目背景 & 设计需求</h4>
                  <p>{selectedWork.bg}</p>
                </div>
                <div className="modal-section">
                  <h4>设计思路 & 创意亮点</h4>
                  <p>{selectedWork.idea}</p>
                </div>
                <div className="modal-section">
                  <h4>设计总结</h4>
                  <p>{selectedWork.summary}</p>
                </div>
              </div>
              <div className="modal-gallery">
                {selectedWork.images && selectedWork.images.length > 0 ? (
                  <div className="single-column-grid">
                    {selectedWork.images.map((imgSrc, index) => (
                      <div 
                        key={index} 
                        className="single-column-item"
                        onClick={() => openFullscreen(index)}
                      >
                        <img src={imgSrc} alt={`作品图${index + 1}`} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="image-placeholder large"><span>作品大图</span></div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {isFullscreen && selectedWork && selectedWork.images && (
        <div className="fullscreen-modal active" onClick={closeFullscreen}>
          <button className="fullscreen-close" onClick={closeFullscreen}>&times;</button>
          <button className="fullscreen-nav prev" onClick={(e) => { e.stopPropagation(); setSelectedImageIndex(prev => prev === 0 ? selectedWork.images.length - 1 : prev - 1); }}>‹</button>
          <img 
            src={selectedWork.images[selectedImageIndex]} 
            alt={selectedWork.title}
            className="fullscreen-image"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="fullscreen-nav next" onClick={(e) => { e.stopPropagation(); setSelectedImageIndex(prev => prev === selectedWork.images.length - 1 ? 0 : prev + 1); }}>›</button>
          <div className="fullscreen-counter">{selectedImageIndex + 1} / {selectedWork.images.length}</div>
        </div>
      )}
    </>
  );
};

// 技能组件
const Skills = () => (
  <section className="section skills" id="skills">
    <div className="container">
      <h2 className="section-title">专业技能</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3><span className="icon">🎨</span> 设计软件</h3>
          <ul className="skill-list">
            {[
              { name: '3ds Max', level: 95 },
              { name: 'CAD', level: 90 },
              { name: 'SketchUp', level: 85 },
              { name: 'V-Ray', level: 90 },
              { name: 'Photoshop', level: 95 },
              { name: 'C4D', level: 80 },
            ].map(skill => (
              <li key={skill.name}>
                <span className="skill-name">{skill.name}</span>
                <div className="skill-bar"><div className="skill-progress" style={{ width: `${skill.level}%` }}></div></div>
              </li>
            ))}
          </ul>
        </div>

        <div className="skill-category">
          <h3><span className="icon">💼</span> 专业能力</h3>
          <div className="ability-tags">
            {['空间方案设计', '施工图绘制', '3D建模渲染', '电子孪生制作', '动画剪辑', '视觉美陈落地'].map(tag => (
              <span key={tag} className="ability-tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h3><span className="icon">🏆</span> 设计资质</h3>
          <ul className="honor-list">
            <li>多项原创设计专利</li>
            <li>全流程项目落地经验</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3><span className="icon">🤝</span> 综合能力</h3>
          <div className="ability-tags">
            {['需求沟通', '方案汇报', '现场对接', '跨团队协作'].map(tag => (
              <span key={tag} className="ability-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// 联系我组件
const Contact = () => {
  const [showQRModal, setShowQRModal] = useState(false);

  const copyToClipboard = (text, label) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        alert(`${label}已复制：${text}`);
      }).catch(() => {
        fallbackCopy(text, label);
      });
    } else {
      fallbackCopy(text, label);
    }
  };

  const fallbackCopy = (text, label) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      alert(`${label}已复制：${text}`);
    } catch (err) {
      alert(`请手动复制${label}：${text}`);
    }
    document.body.removeChild(textArea);
  };

  return (
    <>
      <section className="section contact" id="contact">
        <div className="container">
          <h2 className="section-title">联系我</h2>
          <p className="contact-intro">期待与您交流设计、项目合作与创意探讨</p>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div className="contact-text">
                <span className="label">电话</span>
                <a href="tel:18053114523" className="value">18053114523</a>
              </div>
            </div>
            <div className="contact-item" onClick={() => {
              const isWeixin = /MicroMessenger/i.test(navigator.userAgent);
              if (isWeixin) {
                setShowQRModal(true);
              } else {
                copyToClipboard('Niu-shikong', '微信号');
                window.location.href = 'weixin://';
              }
            }}>
              <span className="contact-icon">💬</span>
              <div className="contact-text">
                <span className="label">微信</span>
                <span className="value clickable" style={{ cursor: 'pointer' }}>
                  Niu-shikong
                </span>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div className="contact-text">
                <span className="label">邮箱</span>
                <span 
                  className="value clickable"
                  onClick={() => copyToClipboard('2926035017@qq.com', '邮箱')}
                  style={{ cursor: 'pointer' }}
                >
                  2926035017@qq.com
                </span>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div className="contact-text">
                <span className="label">地址</span>
                <span className="value">北京市</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showQRModal && (
        <div className="qr-modal" onClick={() => setShowQRModal(false)}>
          <div className="qr-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="qr-modal-close" onClick={() => setShowQRModal(false)}>×</button>
            <h3>扫码添加微信</h3>
            <img src="wechat-qr.png" alt="微信二维码" className="qr-image" />
            <p className="qr-tip">长按二维码识别添加好友</p>
          </div>
        </div>
      )}
    </>
  );
};

// 页脚组件
const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p>&copy; 2026 SHIKONG 设计 | 原创设计 保留所有权利</p>
    </div>
  </footer>
);

// 主题切换按钮
const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="切换主题">
      <span className="sun-icon">☀️</span>
      <span className="moon-icon">🌙</span>
    </button>
  );
};

// 回到顶部按钮
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button className={`back-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop} aria-label="回到顶部">
      ↑
    </button>
  );
};

// 主应用组件
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === 'complete') {
      setTimeout(handleLoad, 500);
    } else {
      window.addEventListener('load', () => setTimeout(handleLoad, 500));
    }

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <>
      {isLoading && (
        <div className={`preloader ${!isLoading ? 'hidden' : ''}`}>
          <div className="preloader-content">
            <div className="preloader-logo">SHIKONG</div>
            <div className="preloader-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="preloader-text">设计 · 构筑空间之美</div>
          </div>
        </div>
      )}
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Skills />
      <Contact />
      <Footer />
      <ThemeToggle />
      <BackToTop />
    </>
  );
}

export default App;