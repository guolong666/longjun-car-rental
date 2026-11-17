/**
 * 龙俊租车 LONGJUN EXECUTIVE AUTO — 展厅交互逻辑
 * 包含：首屏双旗舰焦点切换、全系8款车型分类筛选渲染、档期咨询弹窗交互
 */

const FLAGSHIP_SPOTLIGHTS = [
  {
    img: "assets/mercedes-s-class.jpg",
    tag: "镇店之宝 · 行政头等舱",
    title: "梅赛德斯-奔驰 S级 (Mercedes-Benz S-Class)",
    sub: "立标雍容气度 · 后排独立行政座椅 · 贵宾接待与主婚头车首选"
  },
  {
    img: "assets/bmw-7-series.jpg",
    tag: "镇店之宝 · 时代先锋旗舰",
    title: "宝马 7系 尊享行政版 (BMW 7 Series)",
    sub: "璀璨水晶日行灯 · 魔毯空气悬架 · 兼顾巅峰驾控与奢适后排空间"
  }
];

const FLEET_DATA = [
  {
    id: "mercedes-s",
    name: "梅赛德斯-奔驰 S级",
    en: "Mercedes-Benz S-Class",
    category: "luxury",
    badge: "镇店旗舰豪车",
    image: "assets/mercedes-s-class.jpg",
    specs: "5座行政舱 · 3.0T+48V · 柏林之声",
    scene: "贵宾接待 / 总裁出行 / 主婚头车",
    desc: "三叉星徽立标气场，殿堂级后排头等舱座椅与全车双层声学玻璃，支持尊享自驾或正装司机配驾。"
  },
  {
    id: "bmw-7",
    name: "宝马 7系 尊享行政版",
    en: "BMW 7 Series Executive",
    category: "luxury",
    badge: "镇店旗舰豪车",
    image: "assets/bmw-7-series.jpg",
    specs: "5座豪华舱 · 3.0T涡轮 · 魔毯空悬",
    scene: "高管考察 / 名流晚宴 / 尊贵礼宾",
    desc: "璀璨水晶日间行车灯与恢弘前脸设计，兼具操控质感与奢适后排腿部空间，尽显非凡格调。"
  },
  {
    id: "toyota-alphard",
    name: "丰田 埃尔法 双擎尊贵版",
    en: "Toyota Alphard Executive MPV",
    category: "business",
    badge: "头等舱商务MPV",
    image: "assets/toyota-alphard.jpg",
    specs: "7座航空椅 · 2.5L混动 · 电动滑门",
    scene: "明星贵宾接待 / 集团考察 / VIP接机",
    desc: "二排独立 Ottoman 航空通风按摩座椅与隐私遮阳帘，让每一段商务差旅化作移动私人休息室。"
  },
  {
    id: "buick-gl8",
    name: "别克 GL8 艾维亚尊礼版",
    en: "Buick GL8 Avenir MPV",
    category: "business",
    badge: "政商黄金标杆",
    image: "assets/buick-gl8.jpg",
    specs: "7座宽适舱 · 2.0T+9AT · BOSE音响",
    scene: "会务保障 / 团队差旅 / 全家远游",
    desc: "国内政商接待出场率标杆，满载 7 人仍享充裕行李装载空间，底盘滤震厚重稳健。"
  },
  {
    id: "ev-coupe",
    name: "智享纯电超跑轿跑",
    en: "Smart Electric Coupe",
    category: "ev",
    badge: "先锋智能纯电",
    image: "assets/ev-smart-sedan.jpg",
    specs: "5座智驾舱 · 800V超充 · 750km+续航",
    scene: "都市潮流出行 / 科技自驾 / 情侣漫游",
    desc: "无框车门与动感溜背轿跑美学，激光雷达高阶智驾辅助，丝滑静谧电驱彻底告别里程焦虑。"
  },
  {
    id: "ev-suv",
    name: "豪华六座智能增程 SUV",
    en: "Full-Size Smart EREV SUV",
    category: "ev",
    badge: "家庭移动头等舱",
    image: "assets/family-ev-suv.jpg",
    specs: "6座独立椅 · 可油可电 · 车载冷暖箱",
    scene: "全家自驾远行 / 露营度假 / 跨省长途",
    desc: "配备车载冷暖冰箱、后排娱乐大屏与 Nappa 真皮按摩座椅，综合续航超 1300km，三排皆舒适。"
  },
  {
    id: "camry-hybrid",
    name: "丰田 凯美瑞 智驾旗舰版",
    en: "Toyota Camry Hybrid Sedan",
    category: "daily",
    badge: "品质家用轿车",
    image: "assets/daily-comfort-sedan.jpg",
    specs: "5座舒适轿 · 双擎超低油耗 · CarPlay",
    scene: "日常通勤代步 / 个人差旅 / 走亲访友",
    desc: "口碑卓越的中高级舒适家轿，转向轻盈丝滑、百公里油耗极低，车况整洁如新、上手零门槛。"
  },
  {
    id: "tiguan-suv",
    name: "大众 途观L 越享全景 SUV",
    en: "VW Tiguan L Panorama SUV",
    category: "daily",
    badge: "宽适家用SUV",
    image: "assets/urban-compact-suv.jpg",
    specs: "5座大空间 · 2.0T动力 · 全景大天窗",
    scene: "周末周边自驾 / 接送亲友 / 高速巡航",
    desc: "扎实稳健的德系品质 SUV，开阔驾驶视野与超大后备箱装载能力，市区通勤与高速巡航皆安心。"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  // 1. 首屏双旗舰焦点切换
  const spotlightImg = document.getElementById("spotlight-img");
  const spotlightTag = document.getElementById("spotlight-tag");
  const spotlightTitle = document.getElementById("spotlight-title");
  const spotlightSub = document.getElementById("spotlight-sub");
  const miniCards = document.querySelectorAll(".mini-flagship");

  miniCards.forEach((card) => {
    card.addEventListener("click", () => {
      const idx = Number(card.getAttribute("data-idx")) || 0;
      const item = FLAGSHIP_SPOTLIGHTS[idx];
      if (!item) return;

      miniCards.forEach((c) => c.classList.remove("active"));
      card.classList.add("active");

      spotlightImg.src = item.img;
      spotlightImg.alt = item.title;
      spotlightTag.textContent = item.tag;
      spotlightTitle.textContent = item.title;
      spotlightSub.textContent = item.sub;
    });
  });

  // 2. 渲染全系车型卡片
  const fleetContainer = document.getElementById("fleet-cards-container");
  const filterButtons = document.querySelectorAll(".filter-btn");

  function renderFleet(category) {
    const list =
      category === "all"
        ? FLEET_DATA
        : FLEET_DATA.filter((car) => car.category === category);

    fleetContainer.innerHTML = list
      .map(
        (car) => `
      <article class="vehicle-card ${car.category === "luxury" ? "is-luxury" : ""}">
        <div class="vehicle-img-wrap">
          <img src="${car.image}" alt="${car.name}" loading="lazy" />
          <span class="vehicle-badge">${car.badge}</span>
        </div>
        <div class="vehicle-content">
          <div class="vehicle-title-row">
            <h3>${car.name}</h3>
            <p>${car.en}</p>
          </div>
          <div class="vehicle-specs-bar">${car.specs}</div>
          <p class="vehicle-desc">${car.desc}</p>
          <div class="vehicle-bottom">
            <span class="vehicle-scene" title="${car.scene}">${car.scene}</span>
            <button type="button" class="reserve-trigger" data-car="${car.name}">预约档期</button>
          </div>
        </div>
      </article>
    `
      )
      .join("");
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-category") || "all";
      renderFleet(category);
    });
  });

  renderFleet("all");

  // 3. 预约咨询弹窗交互
  const modal = document.getElementById("reserve-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalSelectedCar = document.getElementById("modal-selected-car");
  const reserveForm = document.getElementById("reserve-form");
  const reserveToast = document.getElementById("reserve-toast");

  function openModal(carName) {
    modalSelectedCar.textContent = `意向座驾 / 服务：${carName || "全系座驾档期咨询"}`;
    reserveToast.style.display = "none";
    modal.classList.add("open");
  }

  function closeModal() {
    modal.classList.remove("open");
  }

  document.body.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-car]");
    if (trigger) {
      const carName = trigger.getAttribute("data-car");
      openModal(carName);
    }
  });

  modalCloseBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  reserveForm.addEventListener("submit", (e) => {
    e.preventDefault();
    reserveToast.style.display = "block";
    reserveForm.reset();
  });
});
