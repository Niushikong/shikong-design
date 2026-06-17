// ===== DOM元素获取 =====
const loader = document.getElementById('loader');
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const filterBtns = document.querySelectorAll('.filter-btn');
const workCards = document.querySelectorAll('.work-card');
const modal = document.getElementById('workModal');
const modalClose = document.getElementById('modalClose');
const themeToggle = document.getElementById('themeToggle');
const backToTop = document.getElementById('backToTop');
const thumbnails = document.querySelectorAll('.thumbnail');

// 作品详情数据
const workDetails = {
    1: {
        title: '商业新零售空间设计',
        type: '室内工装 / 门店美陈',
        bg: '该项目为某知名零售品牌的线下门店空间设计，需要打造符合品牌调性的沉浸式消费环境，同时优化顾客动线，提升购物体验与转化率。',
        idea: '设计以"流动的体验"为核心概念，运用弧形线条与渐变灯光营造空间层次感。采用模块化陈列系统，便于后期调整与维护。色彩上延续品牌主色调，融入金属质感元素提升品质感。',
        summary: '项目成功落地并投入使用，顾客停留时间提升30%，销售额同比增长25%。设计获得了客户高度认可，成为品牌门店升级的标准模板。'
    },
    2: {
        title: '牙科医院整体空间设计',
        type: '医疗空间设计',
        bg: '为一家高端牙科诊所进行整体空间规划设计，需要兼顾医疗功能的专业性与就诊环境的舒适感，消除患者对牙科治疗的恐惧心理。',
        idea: '采用"自然疗愈"设计理念，引入大量绿植元素与自然采光。候诊区设置舒适的沙发与阅读角，诊疗室采用暖色调灯光与隔音设计。整体空间以白色与浅木色为主，搭配柔和的曲线元素。',
        summary: '设计有效降低了患者的焦虑情绪，诊所好评率提升40%。项目获得医疗空间设计奖项提名，成为区域医疗空间设计的标杆案例。'
    },
    3: {
        title: '小区电子孪生沙盘',
        type: '3D可视化 / 数字沙盘',
        bg: '为某高端住宅项目开发电子孪生沙盘系统，用于售楼处展示。需要实现小区全景三维可视化，支持日照分析、噪音模拟、户型展示等功能。',
        idea: '基于高精度三维建模技术，1:1还原小区建筑、景观与配套设施。开发交互式控制系统，支持视角切换、信息标注、实时数据展示。集成日照模拟与噪音分析模块，直观展示居住环境优势。',
        summary: '系统投入使用后，客户看房效率提升50%，销售转化率显著提高。项目获得地产营销创新奖，技术方案被推广至多个项目应用。'
    },
    4: {
        title: '3D动态看盘&漫游动画',
        type: '动态视觉 / 三维动画',
        bg: '为某大型园区项目制作三维漫游动画，用于线上宣传与招商展示。需要立体呈现园区整体布局、建筑细节与配套设施。',
        idea: '采用电影级渲染技术，制作5分钟完整漫游动画。设计多条游览路线，涵盖园区入口、办公区、商业区、景观带等核心区域。配合专业配音与背景音乐，打造沉浸式观看体验。',
        summary: '动画在招商推介会上获得高度评价，成功助力项目签约多个重点企业。视频在网络平台播放量突破百万，有效提升了项目知名度。'
    },
    5: {
        title: '线下活动视觉美陈设计',
        type: '视觉设计 / 场景布置',
        bg: '为某品牌年度发布会进行整体视觉美陈设计，需要打造吸睛的视觉场景，同时控制搭建成本，确保方案可落地执行。',
        idea: '以"未来感"为主题，设计主舞台背景、签到区、互动区、拍照打卡点等核心场景。采用可重复利用的模块化结构，配合灯光与投影技术，实现高性价比的视觉呈现。',
        summary: '活动现场视觉效果超出预期，社交媒体曝光量超过500万。设计方案的模块化思路被品牌方采纳，应用于后续多场活动。'
    },
    6: {
        title: 'AI数字人形象&互动设计',
        type: '数字IP / AI视觉设计',
        bg: '为某科技企业展厅开发AI数字人形象，用于智能导览与互动问答。需要设计符合品牌调性的数字人形象，并实现自然流畅的交互体验。',
        idea: '设计具有未来感的虚拟形象，融入企业品牌元素。采用动作捕捉技术制作自然流畅的动作库，结合AI语音合成实现实时对话。开发触摸屏交互界面，支持语音与触控双重交互方式。',
        summary: '数字人成为展厅最受欢迎的互动项目，日均互动量超过1000次。项目获得数字展示创新奖，技术方案被多家企业借鉴引进。'
    },
    7: {
        title: '办公空间整体规划设计',
        type: '工装设计',
        bg: '为某互联网公司新办公区进行整体规划设计，需要满足200人团队的办公需求，兼顾工作效率、采光通风与团队协作氛围。',
        idea: '采用开放式办公布局，设置多功能协作区、专注工作区、休闲交流区。引入"活动办公"理念，配备可升降工位与移动会议舱。整体设计以简约现代风格为主，运用绿植与自然元素提升空间活力。',
        summary: '新办公区投入使用后，员工满意度达到95%，团队协作效率显著提升。项目成为公司企业文化展示的重要窗口，多次接待行业参观交流。'
    },
    8: {
        title: '品牌视觉物料整套设计',
        type: '平面视觉 / 版式设计',
        bg: '为某新消费品牌进行全套视觉物料设计，需要建立统一的品牌视觉规范，完成海报、展板、宣传物料等全套设计输出。',
        idea: '基于品牌定位，制定完整的视觉识别系统（VI），包括标志规范、色彩体系、字体规范、图形元素等。设计系列海报、产品包装、线下物料、线上素材，确保视觉风格统一协调。',
        summary: '视觉系统成功帮助品牌建立市场认知度，品牌形象获得消费者广泛认可。设计方案被品牌方沿用至今，成为品牌资产的重要组成部分。'
    }
};

// ===== 页面加载完成 =====
window.addEventListener('load', () => {
    // 隐藏加载动画
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 500);
    
    // 初始化滚动动画
    initScrollAnimations();
});

// ===== 导航栏功能 =====
// 汉堡菜单切换
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// 点击导航链接关闭菜单
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// 滚动时导航栏样式变化 & 高亮当前板块
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    // 导航栏背景变化
    if (scrollY > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(45, 49, 66, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(45, 49, 66, 0.1)';
    }
    
    // 高亮当前板块对应的导航链接
    const sections = document.querySelectorAll('.section');
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
    
    // 回到顶部按钮显示/隐藏
    if (scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

// ===== 作品筛选功能 =====
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // 更新按钮状态
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.dataset.filter;
        
        workCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.classList.remove('hidden');
                card.style.animation = 'fadeIn 0.5s ease forwards';
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// ===== 作品详情弹窗 =====
let currentWorkIndex = 1;

workCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        currentWorkIndex = index + 1;
        openModal(currentWorkIndex);
    });
});

function openModal(index) {
    const work = workDetails[index];
    if (work) {
        document.getElementById('modalTitle').textContent = work.title;
        document.getElementById('modalType').textContent = work.type;
        document.getElementById('modalBg').textContent = work.bg;
        document.getElementById('modalIdea').textContent = work.idea;
        document.getElementById('modalSummary').textContent = work.summary;
    }
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// ESC键关闭弹窗
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// 缩略图切换
thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        thumbnails.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        // 这里可以添加切换主图的逻辑
    });
});

// ===== 暗黑模式切换 =====
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// ===== 回到顶部 =====
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== 滚动动画 =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // 添加动画类并观察
    const animateElements = document.querySelectorAll('.section-title, .about-content, .work-card, .skill-category, .contact-item');
    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// ===== 平滑滚动 =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== 图片懒加载 =====
const lazyImages = document.querySelectorAll('img[data-src]');
if (lazyImages.length > 0) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy-image');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => {
        img.classList.add('lazy-image');
        imageObserver.observe(img);
    });
}

// ===== 技能进度条动画 =====
const skillBars = document.querySelectorAll('.skill-progress');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.style.width;
            entry.target.style.width = '0';
            setTimeout(() => {
                entry.target.style.width = width;
            }, 100);
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => skillObserver.observe(bar));

// ===== 添加CSS动画 =====
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);