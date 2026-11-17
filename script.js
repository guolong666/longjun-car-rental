/**
 * 龙俊租车 LONGJUN EXECUTIVE AUTO — 奢华视觉版动效与交互引擎
 */

const GALLERY_SHOTS = [
  { img: "assets/hero-dual-flagship.jpg", title: "奔驰 S级 · 宝马 7系 双旗舰", sub: "五星酒店迎宾夜景实拍" },
  { img: "assets/mercedes-s-class.jpg", title: "梅赛德斯-奔驰 S级", sub: "黑金展厅 · 行政立标" },
  { img: "assets/mercedes-s-interior.jpg", title: "奔驰 S级 · 行政头等舱", sub: "菱格纹Nappa真皮 · 柏林之声" },
  { img: "assets/mercedes-s-detail.jpg", title: "奔驰 S级 · 三叉星徽", sub: "几何多光束数字大灯细节" },
  { img: "assets/bmw-7-series.jpg", title: "宝马 7系 尊享行政版", sub: "璀璨水晶日行灯 · 气势前脸" },
  { img: "assets/bmw-7-interior.jpg", title: "宝马 7系 · 水晶交互座舱", sub: "环抱式光带 · 悬浮曲面屏" },
  { img: "assets/toyota-alphard.jpg", title: "丰田 埃尔法 双擎尊贵版", sub: "明星商务接待头等舱" },
  { img: "assets/alphard-interior.jpg", title: "埃尔法 · 航空奥斯曼座椅", sub: "电动侧滑门 · 独立私享空间" },
  { img: "assets/buick-gl8.jpg", title: "别克 GL8 艾维亚尊礼版", sub: "7座政商接待黄金标杆" },
  { img: "assets/ev-smart-sedan.jpg", title: "智享纯电超跑轿跑", sub: "800V超充 · 无框流线美学" },
  { img: "assets/family-ev-suv.jpg", title: "豪华六座智能增程 SUV", sub: "车载冷暖箱 · 家庭移动豪宅" },
  { img: "assets/daily-comfort-sedan.jpg", title: "丰田 凯美瑞 智驾旗舰版", sub: "双擎低耗 · 都市舒享代步" },
  { img: "assets/urban-compact-suv.jpg", title: "大众 途观L 越享全景 SUV", sub: "德系全景天窗 · 宽适远游" }
];

const FLEET_CARS = [
  {
    id: "mercedes-s",
    name: "梅赛德斯-奔驰 S级",
    category: "luxury",
    badge: "镇店旗舰",
    specs: "5座行政 · 3.0T + 48V · 柏林之声",
    img: "assets/mercedes-s-class.jpg",
    interiorImg: "assets/mercedes-s-interior.jpg",
    photos: [
      { img: "assets/mercedes-s-class.jpg", caption: "外饰全貌 · 沉稳立标气场" },
      { img: "assets/mercedes-s-interior.jpg", caption: "后排行政座舱 · 菱格纹头等舱" },
      { img: "assets/mercedes-s-detail.jpg", caption: "星徽前脸 · 数字大灯特写" }
    ]
  },
  {
    id: "bmw-7",
    name: "宝马 7系 尊享行政版",
    category: "luxury",
    badge: "镇店旗舰",
    specs: "5座豪华 · 3.0T · 魔毯空气悬架",
    img: "assets/bmw-7-series.jpg",
    interiorImg: "assets/bmw-7-interior.jpg",
    photos: [
      { img: "assets/bmw-7-series.jpg", caption: "外饰全貌 · 璀璨水晶前脸" },
      { img: "assets/bmw-7-interior.jpg", caption: "水晶交互座舱 · 环抱式氛围灯" },
      { img: "assets/hero-dual-flagship.jpg", caption: "双旗舰夜景 · 酒店礼宾出车" }
    ]
  },
  {
    id: "alphard",
    name: "丰田 埃尔法 双擎尊贵版",
    category: "business",
    badge: "头等舱 MPV",
    specs: "7座航空椅 · 2.5L混动 · 电动滑门",
    img: "assets/toyota-alphard.jpg",
    interiorImg: "assets/alphard-interior.jpg",
    photos: [
      { img: "assets/toyota-alphard.jpg", caption: "外饰全貌 · 尊贵珍珠白" },
      { img: "assets/alphard-interior.jpg", caption: "二排奥斯曼航空座椅实拍" }
    ]
  },
  {
    id: "gl8",
    name: "别克 GL8 艾维亚尊礼版",
    category: "business",
    badge: "政商优选",
    specs: "7座宽适 · 2.0T + 9AT · BOSE音响",
    img: "assets/buick-gl8.jpg",
    interiorImg: null,
    photos: [
      { img: "assets/buick-gl8.jpg", caption: "外饰全貌 · 艾维亚旗舰版" }
    ]
  },
  {
    id: "ev-coupe",
    name: "智享纯电超跑轿跑",
    category: "ev",
    badge: "智能纯电",
    specs: "5座智驾 · 800V超充 · 750km+续航",
    img: "assets/ev-smart-sedan.jpg",
    interiorImg: null,
    photos: [
      { img: "assets/ev-smart-sedan.jpg", caption: "流线轿跑 · 激光雷达智驾" }
    ]
  },
  {
    id: "ev-suv",
    name: "豪华六座智能增程 SUV",
    category: "ev",
    badge: "移动豪宅",
    specs: "6座独立 · 可油可电 · 车载冰箱",
    img: "assets/family-ev-suv.jpg",
    interiorImg: null,
    photos: [
      { img: "assets/family-ev-suv.jpg", caption: "墨玉绿全尺寸六座 SUV" }
    ]
  },
  {
    id: "camry",
    name: "丰田 凯美瑞 智驾旗舰版",
    category: "daily",
    badge: "品质家轿",
    specs: "5座舒适 · 双擎超低油耗 · CarPlay",
    img: "assets/daily-comfort-sedan.jpg",
    interiorImg: null,
    photos: [
      { img: "assets/daily-comfort-sedan.jpg", caption: "都市轻盈代步 · 整备如新" }
    ]
  },
  {
    id: "tiguan",
    name: "大众 途观L 越享全景 SUV",
    category: "daily",
    badge: "德系 SUV",
    specs: "5座大空间 · 2.0T · 全景大天窗",
    img: "assets/urban-compact-suv.jpg",
    interiorImg: null,
    photos: [
      { img: "assets/urban-compact-suv.jpg", caption: "大视野全景天窗 SUV" }
    ]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  // 1. 奢华开场幕帘快速退场
  const curtain = document.getElementById("intro-curtain");
  setTimeout(() => {
    curtain.classList.add("is-done");
  }, 650);

  // 2. 顶部进度金线 + 导航玻璃滚动感
  const progressBar = document.getElementById("scroll-progress");
  const header = document.getElementById("site-header");

  function onScrollUpdate() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
    progressBar.style.width = `${pct}%`;

    if (scrollTop > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
  window.addEventListener("scroll", onScrollUpdate, { passive: true });
  onScrollUpdate();

  // 3. 首屏电影级轮播
  const slides = document.querySelectorAll(".hero-slide");
  const thumbBtns = document.querySelectorAll(".hero-thumb-btn");
  let currentSlide = 0;
  let heroTimer = null;

  function goToSlide(idx) {
    slides.forEach((s, i) => s.classList.toggle("active", i === idx));
    thumbBtns.forEach((b, i) => b.classList.toggle("active", i === idx));
    currentSlide = idx;
  }

  function startHeroLoop() {
    clearInterval(heroTimer);
    heroTimer = setInterval(() => {
      goToSlide((currentSlide + 1) % slides.length);
    }, 6000);
  }

  thumbBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.getAttribute("data-slide")) || 0;
      goToSlide(idx);
      startHeroLoop();
    });
  });
  startHeroLoop();

  // 4. 滚动渐显观察器 (IntersectionObserver)
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  // 5. 双旗舰多视角切换 (外饰 / 座舱 / 细节)
  function bindStageSwitcher(targetKey, imgId, carTitle) {
    const mainImg = document.getElementById(imgId);
    const stageVisual = mainImg.closest(".stage-visual");
    const pills = document.querySelectorAll(`.stage-angle-pills[data-target="${targetKey}"] .angle-pill`);
    const thumbs = document.querySelectorAll(`.stage-mini-strip[data-target="${targetKey}"] .stage-mini-thumb`);

    function switchAngle(imgSrc, caption) {
      mainImg.style.opacity = "0.25";
      setTimeout(() => {
        mainImg.src = imgSrc;
        mainImg.style.opacity = "1";
      }, 150);

      stageVisual.setAttribute("data-lightbox-img", imgSrc);
      stageVisual.setAttribute("data-lightbox-title", carTitle);
      stageVisual.setAttribute("data-lightbox-sub", caption);

      pills.forEach((p) => p.classList.toggle("active", p.getAttribute("data-img") === imgSrc));
      thumbs.forEach((t) => t.classList.toggle("active", t.getAttribute("data-img") === imgSrc));
    }

    pills.forEach((p) => {
      p.addEventListener("click", (e) => {
        e.stopPropagation();
        switchAngle(p.getAttribute("data-img"), p.getAttribute("data-caption"));
      });
    });

    thumbs.forEach((t) => {
      t.addEventListener("click", () => {
        switchAngle(t.getAttribute("data-img"), t.getAttribute("data-caption"));
      });
    });
  }

  bindStageSwitcher("mercedes", "stage-img-mercedes", "梅赛德斯-奔驰 S级");
  bindStageSwitcher("bmw", "stage-img-bmw", "宝马 7系 尊享行政版");

  // 6. 双轨无限流光摄影长廊
  const row1 = document.getElementById("marquee-row-1");
  const row2 = document.getElementById("marquee-row-2");

  const firstHalf = GALLERY_SHOTS.slice(0, 7);
  const secondHalf = GALLERY_SHOTS.slice(6);

  function buildMarqueeItems(list) {
    // Duplicate twice for seamless CSS infinite marquee
    const doubled = [...list, ...list];
    return doubled
      .map(
        (item) => `
      <div class="gallery-shot" data-gallery-img="${item.img}" data-gallery-title="${item.title}" data-gallery-sub="${item.sub}">
        <img src="${item.img}" alt="${item.title}" loading="lazy" />
        <div class="gallery-shot-caption">
          <strong>${item.title}</strong>
          <span>${item.sub}</span>
        </div>
      </div>
    `
      )
      .join("");
  }

  row1.innerHTML = buildMarqueeItems(firstHalf);
  row2.innerHTML = buildMarqueeItems(secondHalf);

  // 7. 渲染全系车型图库网格 (支持内饰切换 + 3D 悬停微倾动效)
  const fleetGrid = document.getElementById("fleet-visual-grid");
  const filterTabs = document.querySelectorAll(".filter-tab");

  function renderFleet(category) {
    const items =
      category === "all"
        ? FLEET_CARS
        : FLEET_CARS.filter((c) => c.category === category);

    fleetGrid.innerHTML = items
      .map(
        (car, idx) => `
      <article class="car-visual-card reveal is-visible" style="transition-delay: ${idx * 0.04}s" data-car-id="${car.id}">
        <div class="car-photo-stage ${car.interiorImg ? "has-interior" : ""}" data-open-car="${car.id}">
          <img src="${car.img}" alt="${car.name}" class="img-exterior" loading="lazy" />
          ${car.interiorImg ? `<img src="${car.interiorImg}" alt="${car.name} 内饰座舱" class="img-interior" loading="lazy" />` : ""}
          <span class="car-badge-float">${car.badge}</span>
          ${car.interiorImg ? `<button type="button" class="car-angle-switch" data-toggle-interior>外饰 / 内饰</button>` : ""}
        </div>
        <div class="car-meta-bar">
          <div class="car-meta-text">
            <h3>${car.name}</h3>
            <p>${car.specs}</p>
          </div>
          <div class="car-meta-actions">
            <button type="button" class="btn-card-view" data-open-car="${car.id}">大图</button>
            <button type="button" class="btn-card-book" data-car="${car.name}">预约</button>
          </div>
        </div>
      </article>
    `
      )
      .join("");

    // Bind subtle 3D tilt on desktop pointers
    if (window.matchMedia("(pointer: fine)").matches) {
      fleetGrid.querySelectorAll(".car-visual-card").forEach((card) => {
        card.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          card.style.transform = `perspective(1000px) rotateX(${(-y * 3.5).toFixed(2)}deg) rotateY(${(x * 3.5).toFixed(2)}deg) translateY(-4px)`;
        });
        card.addEventListener("mouseleave", () => {
          card.style.transform = "";
        });
      });
    }
  }

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      renderFleet(tab.getAttribute("data-category") || "all");
    });
  });
  renderFleet("all");

  // 8. 高清大图灯箱 Lightbox (支持上一张 / 下一张 / 键盘操作 / 一键转预约)
  const lightbox = document.getElementById("lightbox-modal");
  const lbImg = document.getElementById("lightbox-img");
  const lbTitle = document.getElementById("lightbox-title");
  const lbCaption = document.getElementById("lightbox-caption");
  const lbPrev = document.getElementById("lightbox-prev");
  const lbNext = document.getElementById("lightbox-next");
  const lbClose = document.getElementById("lightbox-close");
  const lbBook = document.getElementById("lightbox-book-btn");

  let lbPlaylist = [];
  let lbIndex = 0;
  let lbCarName = "";

  function showLightboxItem(idx) {
    if (!lbPlaylist.length) return;
    lbIndex = (idx + lbPlaylist.length) % lbPlaylist.length;
    const item = lbPlaylist[lbIndex];
    lbImg.src = item.img;
    lbTitle.textContent = item.title || lbCarName;
    lbCaption.textContent = item.caption || "";
    lbPrev.style.display = lbPlaylist.length > 1 ? "flex" : "none";
    lbNext.style.display = lbPlaylist.length > 1 ? "flex" : "none";
  }

  function openLightbox(playlist, startIndex, carName) {
    lbPlaylist = playlist;
    lbCarName = carName;
    showLightboxItem(startIndex);
    lightbox.classList.add("open");
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
  }

  lbPrev.addEventListener("click", () => showLightboxItem(lbIndex - 1));
  lbNext.addEventListener("click", () => showLightboxItem(lbIndex + 1));
  lbClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showLightboxItem(lbIndex - 1);
    if (e.key === "ArrowRight") showLightboxItem(lbIndex + 1);
  });

  // 9. 预约弹窗逻辑
  const modal = document.getElementById("reserve-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalSelectedCar = document.getElementById("modal-selected-car");
  const reserveForm = document.getElementById("reserve-form");
  const reserveToast = document.getElementById("reserve-toast");

  function openBookingModal(carName) {
    modalSelectedCar.textContent = `意向座驾 / 方案：${carName || "全系座驾咨询"}`;
    reserveToast.style.display = "none";
    modal.classList.add("open");
  }

  function closeBookingModal() {
    modal.classList.remove("open");
  }

  lbBook.addEventListener("click", () => {
    closeLightbox();
    openBookingModal(lbCarName);
  });

  modalCloseBtn.addEventListener("click", closeBookingModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeBookingModal();
  });

  reserveForm.addEventListener("submit", (e) => {
    e.preventDefault();
    reserveToast.style.display = "block";
    reserveForm.reset();
  });

  // 全局点击事件委托 (图片切换 / 大图灯箱 / 预约触发)
  document.body.addEventListener("click", (e) => {
    // A. 手机端/卡片点击切换外饰与内饰
    const toggleBtn = e.target.closest("[data-toggle-interior]");
    if (toggleBtn) {
      e.stopPropagation();
      const stage = toggleBtn.closest(".car-photo-stage");
      stage.classList.toggle("show-interior");
      return;
    }

    // B. 点击车型卡或「大图」按钮打开该车专属多图灯箱
    const carOpenTrigger = e.target.closest("[data-open-car]");
    if (carOpenTrigger) {
      const carId = carOpenTrigger.getAttribute("data-open-car");
      const car = FLEET_CARS.find((c) => c.id === carId);
      if (car) {
        const playlist = car.photos.map((p) => ({
          img: p.img,
          title: car.name,
          caption: `${p.caption} · ${car.specs}`
        }));
        openLightbox(playlist, 0, car.name);
      }
      return;
    }

    // C. 点击双旗舰大图打开灯箱
    const stageVisual = e.target.closest(".stage-visual");
    if (stageVisual) {
      const title = stageVisual.getAttribute("data-lightbox-title");
      const currentImg = stageVisual.getAttribute("data-lightbox-img");
      const allFlagshipPhotos = GALLERY_SHOTS.slice(0, 6).map((g) => ({
        img: g.img,
        title: g.title,
        caption: g.sub
      }));
      const startIdx = Math.max(0, allFlagshipPhotos.findIndex((p) => p.img === currentImg));
      openLightbox(allFlagshipPhotos, startIdx, title);
      return;
    }

    // D. 点击流光画廊任意照片打开全画廊灯箱
    const shotEl = e.target.closest(".gallery-shot");
    if (shotEl) {
      const clickedImg = shotEl.getAttribute("data-gallery-img");
      const allShots = GALLERY_SHOTS.map((g) => ({
        img: g.img,
        title: g.title,
        caption: g.sub
      }));
      const startIdx = Math.max(0, allShots.findIndex((p) => p.img === clickedImg));
      openLightbox(allShots, startIdx, shotEl.getAttribute("data-gallery-title"));
      return;
    }

    // E. 预约触发按钮
    const reserveTrigger = e.target.closest("[data-car]");
    if (reserveTrigger) {
      openBookingModal(reserveTrigger.getAttribute("data-car"));
    }
  });
});
