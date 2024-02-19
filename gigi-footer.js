{
  let e = 0,
    r = setInterval(() => {
      try {
        let t = Array.from(
          document.querySelectorAll("footer > div > div.md-footer__copyright")
        ).filter((e) => !e.classList.contains("inj"));
        for (let i of ((e += 50) >= 1e4 && clearInterval(r), t)) {
          i.classList.add("inj");
          let n = i.querySelector(".ppt");
          n &&
            (n.innerHTML = `
      <a href="/terms-of-use" style="text-decoration:underline;" rel="noopener noreferrer">Terms of Service</a> | 
      <a href="/privacypolicy" style="text-decoration:underline;" rel="noopener noreferrer">Privacy Policy</a> | 
      <a href="/personal-information-privacy" style="text-decoration:underline;" rel="noopener noreferrer">Do Not Sell or Share My Personal Information</a> | 
      <a href="/privacypolicy#california-privacy-notice" style="text-decoration:underline;" rel="noopener noreferrer">California Privacy Notice</a> | 
      <a href="/property-listings/sitemap" style="text-decoration:underline;" rel="noopener noreferrer">Property Listings</a> | 
      <a href="/sitemap" style="text-decoration:underline;" rel="noopener noreferrer">Sitemap</a> |
      <a href="/accessibility" style="text-decoration:underline;" rel="noopener noreferrer">Accessibility</a>
    `),
            new MutationObserver((e, r) => {
              for (let t of e)
                if ("childList" === t.type) {
                  let n = i.querySelector(".ppt");
                  n &&
                    !n.classList.contains("edited") &&
                    (n.classList.add("edited"),
                    (n.innerHTML = `
      <a href="/terms-of-use" style="text-decoration:underline;" rel="noopener noreferrer">Terms of Service</a> | 
      <a href="/privacypolicy" style="text-decoration:underline;" rel="noopener noreferrer">Privacy Policy</a> | 
      <a href="/personal-information-privacy" style="text-decoration:underline;" rel="noopener noreferrer">Do Not Sell or Share My Personal Information</a> | 
      <a href="/privacypolicy#california-privacy-notice" style="text-decoration:underline;" rel="noopener noreferrer">California Privacy Notice</a> | 
      <a href="/property-listings/sitemap" style="text-decoration:underline;" rel="noopener noreferrer">Property Listings</a> | 
      <a href="/sitemap" style="text-decoration:underline;" rel="noopener noreferrer">Sitemap</a> |
      <a href="/accessibility" style="text-decoration:underline;" rel="noopener noreferrer">Accessibility</a>
    `));
                }
            }).observe(i, { childList: !0, subtree: !0 });
        }
      } catch (a) {
        console.error("PPT ->", a);
      }
    }, 50);
}

{
  let e = 0,
    r = setInterval(() => {
      try {
        let t = Array.from(document.querySelectorAll("li.menu-item")).filter(
          (e) => !e.classList.contains("inj")
        );
        for (let i of ((e += 50) >= 1e4 && clearInterval(r), t)) {
          i.classList.add("inj");
          let n = i.querySelector("a");
          n &&
            n.href.includes("/tel:+14243325556") &&
            (n.href = `tel:+14243325556`),
            new MutationObserver((e, r) => {
              for (let t of e)
                if ("childList" === t.type) {
                  let n = i.querySelector("a");
                  n &&
                    n.href.includes("/tel:+14243325556") &&
                    !n.classList.contains("edited") &&
                    (n.classList.add("edited"), (n.href = `tel:+14243325556`));
                }
            }).observe(i, { childList: !0, subtree: !0 });
        }
      } catch (a) {
        console.error("TEL ->", a);
      }
    }, 50);
}
