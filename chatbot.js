{
  let e = setInterval(() => {
    try {
      let r = document.querySelector(
        "#chat-app > div.chat-window.broker > div.chat-main > div.msg-list-wrap"
      );
      if (!r) return;
      clearInterval(e);
      let t = { childList: !0, subtree: !0 },
        i = (e, t) => {
          for (let i of e)
            if ("childList" === i.type) {
              for (let o of i.addedNodes)
                if (
                  o.classList?.contains("msg-item") &&
                  !o.classList?.contains("cloned")
                ) {
                  if (o.querySelector(".content-container.other")) continue;
                  let n = o.cloneNode(!0);
                  n.classList.add("cloned"), o.remove();
                  let a = document.createElement("div");
                  (a.className = "msg broker msg-item"),
                    (a.style.marginTop = "20px"),
                    (a.innerHTML = `<!--v-if--> <div class="content-container other"><div class="avatar profile-frame" type="background"><!-- avatar --> <img class="square img-box" alt="avatar" style="width: 36px; height: 36px;" src="https://cdn.chime.me/image/fs/user-info/2024111/7/w100_original_5119b7fd-053e-4712-96d7-022100fb4892-png.webp"> <!-- avatar festival --> <!--v-if--></div> <!--v-if--> <div class="content"><span>Thanks! I’ve received your message and shared it with the GigiAI team. They’ll reply to you by email within 24 hours.</span> <!--v-if--> <!--v-if--></div> <!--v-if--></div> <!-- v-if="showListing || showQuickReply" --> <div class="gap-top"><!--v-if--> <!--v-if--></div>`),
                    r.lastChild.appendChild(n),
                    r.lastChild.appendChild(a);
                }
            }
        };
      new MutationObserver(i).observe(r, t);
    } catch (o) {
      console.error("Chatbot ->", o);
    }
  }, 100);
}
{
  let r = setInterval(() => {
    try {
      let e = document.querySelector(
        "#chat-app .msg.msg-item .content-container.other .content span"
      );
      if (!e) return;
      clearInterval(r),
        (e.innerText = `Hi, I’m the GigiAI assistant. I can help with any questions you have about buying a home online or using our platform. 

Feel free to ask me anything! The Gigi AI team will get back to you by email with more information in 24 hours.`);
    } catch (t) {
      console.error("Chatbot ->", t);
    }
  }, 50);
}
