const updatePlaceholder = (e) => {
  e.forEach(function (e) {
    "City, County, Subdivision, etc" === e.placeholder &&
      (e.placeholder = "City, Address, ZIP");
  });
};
{
  let t = setInterval(() => {
    try {
      let e = document.querySelectorAll("input"),
        i = document.querySelector(".search-content");
      if (!e) return;
      updatePlaceholder(e),
        new MutationObserver((t, i) => {
          for (let r of t)
            "childList" === r.type &&
              e &&
              "City, County, Subdivision, etc" !== e[0].placeholder &&
              updatePlaceholder(e);
        }).observe(i, { childList: !0, subtree: !0 }),
        clearInterval(t);
    } catch (r) {
      console.error("input ->", r);
    }
  }, 50);
}
