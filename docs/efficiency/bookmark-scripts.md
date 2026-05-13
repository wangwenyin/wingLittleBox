---
title: AI 工具
description: 从 bookmarks_2026_5_13.html 的 Ai工具分组中整理出的常用 AI 工具入口。
lastUpdated: false
---

# AI 工具

这页整理的是我会长期留在收藏夹里的 AI 入口。标准很简单：打开快、定位清晰、确实能进入日常工作流。

对我来说，真正值得常驻的通常只有几类：

- 主力对话助手
- 工具导航与发现入口
- 设计开发辅助
- 内容与图片生成

<style>
.ai-tool-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 18px;
  margin: 24px 0 30px;
}

.ai-tool-card {
  position: relative;
  display: block;
  min-height: 168px;
  padding: 18px 18px 16px;
  border: 1px solid rgba(148, 163, 184, 0.22);
  border-radius: 20px;
  background:
    radial-gradient(circle at top right, rgba(59, 130, 246, 0.12), transparent 36%),
    radial-gradient(circle at bottom left, rgba(14, 165, 233, 0.08), transparent 28%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(248, 250, 252, 0.96));
  box-shadow:
    0 10px 24px rgba(15, 23, 42, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.75);
  text-decoration: none !important;
  overflow: hidden;
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    border-color 0.22s ease;
}

.ai-tool-card::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.28);
}

.dark .ai-tool-card {
  border-color: rgba(148, 163, 184, 0.16);
  background:
    radial-gradient(circle at top right, rgba(59, 130, 246, 0.18), transparent 38%),
    radial-gradient(circle at bottom left, rgba(6, 182, 212, 0.1), transparent 30%),
    linear-gradient(180deg, rgba(24, 28, 36, 0.98), rgba(17, 20, 27, 0.96));
  box-shadow:
    0 14px 30px rgba(0, 0, 0, 0.22),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

.ai-tool-card:hover {
  transform: translateY(-4px);
  border-color: rgba(59, 130, 246, 0.42);
  box-shadow:
    0 20px 40px rgba(15, 23, 42, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.78);
}

.dark .ai-tool-card:hover {
  box-shadow:
    0 22px 42px rgba(0, 0, 0, 0.34),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
}

.vp-doc a.ai-tool-card,
.vp-doc a.ai-tool-card:hover,
.vp-doc a.ai-tool-card:focus,
.vp-doc a.ai-tool-card:active,
.vp-doc a.ai-tool-card * {
  text-decoration: none !important;
}

.ai-tool-head {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}

.ai-tool-logo {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  object-fit: cover;
  flex: none;
  background: rgba(255, 255, 255, 0.8);
  box-shadow:
    0 6px 18px rgba(15, 23, 42, 0.08),
    inset 0 0 0 1px rgba(255, 255, 255, 0.36);
}

.dark .ai-tool-logo {
  background: rgba(255, 255, 255, 0.06);
}

.ai-tool-name {
  color: var(--vp-c-text-1);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: 0.01em;
}

.ai-tool-tagline {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 14px;
  line-height: 1.7;
}

.ai-tool-note {
  margin-top: 8px;
  color: var(--vp-c-text-2);
}
</style>

<div class="ai-tool-grid">
  <a class="ai-tool-card" href="https://chatgpt.com/" target="_blank" rel="noreferrer">
    <div class="ai-tool-head">
      <img class="ai-tool-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACWklEQVR4nIRTTUuiURR+LCMtIioqiora2KqINjFtoomoaBMR0b6aoF3Uok0MIv4Alw7iQjfit3tHFEHBhQi6moUKKiKoqKCv3869Z9TR5qMHDu99z73nOec899wRMHQ6nQNmLmZC52MI3bMHPFbUXXxjJsMA6vU6arUaJiYmMDo6ir/gB7MvnOA7W3zuedk/PB4P7HY7kSwuLuLy8hLLy8uYnp6GWCweJHFxggpbSHueQCAAtVqNh4cHjI+PQ6lUolwuY21tDQsLC7i/v8fKykrvuMAJOr2SLRYLtFotHh8fKZvRaMT29jb29vawtLQEp9OJcDgMhUIBiURCDCM9KofDQdnX19cxOTkJt9uN6+trzM3NEbFKpYJMJqNqotFovwdxL7vX68Xd3R2sViva7TYJ6Pf7kUqlcHJyQkLqdDpEIhG0Wq1hAt4FD+I9c5Hy+Ty1cHt7S3tyuZyy8/5NJhNCoRC2trZ+t8ADucNgMODs7IyyptNpIms2m1hdXcXMzAxcLhdubm4QDAbJ36+AY2dnBy8vL8hmszg/P8fGxgbe3t7o+iqVCmZnZ5HJZFCtVqkdkUg0TMCz7e7uUgaz2QypVIqjoyNMTU3B5/NRQDweh16v72sydAubm5v0TSQSeH5+xsXFBZLJJGw2G46Pj1EqlUj9w8NDnJ6e9kUcGqRYLAaNRkMi8vX8/DxeX19RKBTI//T0RHMxAOGPUW40GigWi1QJv9JcLkdDc3V1hf39fbyD65+PiYMrLQgCEYyNjb3f/vWYunPASb4y+8RMgv+jyszPTM6E9fwEAAD//7OKuIcAAAAGSURBVAMA6M08kL8i7REAAAAASUVORK5CYII=" alt="ChatGPT logo" />
      <div class="ai-tool-name">ChatGPT</div>
    </div>
    <p class="ai-tool-tagline">通用型主力助手，适合写作、分析、编程和日常问答。</p>
  </a>

  <a class="ai-tool-card" href="https://gemini.google.com/app?hl=zh" target="_blank" rel="noreferrer">
    <div class="ai-tool-head">
      <img class="ai-tool-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACh0lEQVR4nIxSS08TURQ+9zGPtrQUFEFajAswoTERU5PSjYHEhZCYuID+AGOa+GLhjkiwwTVsjCb8A6QxcaMkbmAl1HdADaa4QEoqkAJtp512Zu5cZ1ofKAU9m3vul/N995xzPwqHhBIKNdtnXSKxcVANrgXyHzh2yXewp27YzqcBSK1adIAAgrBfLroDyR1XM3B6tKMtPlGyYP7PDngQBEuV5z2d18Hd5Ns81uWb84Wv2eRodFI4tAMeA4piYGQu9XRjT+vzVUe7c6nxHCy7TxdW6JELj4brX/XEOJ2LIeMPgZ9EO89eDXUbDl885Qj43wtn2Qe5E76KJ8kOEteymhlJjIgLFaYlBJbQrw74IIhqd/vNgt40lpICrjcozJZZkHwxTkDGdDIdy0TnoJjcHH1bxg8sslbpQHkKLZQ23AZNvmwyZ8cya+Hv9KC5VDpPVtUunik0Q1GTEAPKACGMRUCmDknOzCcG4HGKiBMxCXl1jygoThdsKAKk8ias51TI6gXQiA4cSdWv4RxZFzsXMMJeUwNEXReLaYBiNJkMSaqxc4N75TFZLLmwvsm4ukWAegETiQEXiGlyBcrmaP4bfrhyH5XtEWhl/mkgqGPGBiaefep70eguxFv1LX+utM40rd56up5gTV9Ti0JkcQRXlzjICcQRq/gARYDZ5+xsD+0PzCyQsjbgduzmJE8KjLo0cGc6j2lmYHEELVS2b4dF3mek3t45IzoZFK6ceZxIq8o95tkmqnuD5OjHu/NDx1/C5GsB9nhgn5F+OwpQODUoFz83JHdVL1sl/lPQd8ta2X9YuRIRwPNtcXXN0KdyQmYK+ofKEEE1a2lNgXh1J9ugj1uvsr3Y3/EdAAD//429n5gAAAAGSURBVAMApnISZcw7dI0AAAAASUVORK5CYII=" alt="Gemini logo" />
      <div class="ai-tool-name">Google Gemini</div>
    </div>
    <p class="ai-tool-tagline">Google 系主力入口，适合检索、总结和多模态辅助。</p>
  </a>

  <a class="ai-tool-card" href="https://www.coze.cn/task/7622585912744837376?from=space_self_intro" target="_blank" rel="noreferrer">
    <div class="ai-tool-head">
      <img class="ai-tool-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADTElEQVR4nExTTWhcVRT+zr3vZ97MOGk0SWe0RAqxYIrB1gSUmGK0MlUpobaEKtiFWShK0eBGpGrULqwigga6sSIFRVtQ66LWKAy6CBYNVhFJtU0TYqOZNp3OtM68mfvePZ7XdtELF+4P3znn+75zHFxbE5hQhbte1U/NkNm5mTe03YAxP4X7G5fRzRYmaMMpa3Fk8SQ+/OoXWgLYASiiBMxgkoOSh3hsC497abyuCNnyAlinAdcFGhdAHTcDThp/XjiP8U9KdFSQmq6CiXn16swrGxf3rmTd56M6oloNPPgAaPAhkC9Bfvse/PXniOTsSWXNyzWMfDRF30piJu4dbV/omfzgfa9r20WLemMF3q5x6OIIE65bf50kfuNZhJk0fGjMrVzEUFI20P3cezNu17YzBmF9nlP990IVRywZQwhD4rBFcaVC9qZO8GNjSC2cgMm0oScXYJfmR34cNt6atydtzhiQG1wiemESyAQEpYHIAAffkTpboE8PAMVR4PRpYPkUKFdARipwnimrgFSaUTkO2rmHubODVWwFJDsIQDMnQMemgL5+UBiB1t8GqpwVThrrHJC920RNzE6T3rEb/OBW8SaSsGKSCIlaFbx7AnS+DLtpk/zFoPk7QFlxxPyHQKGu8lk0ed/HTE+/ZBVpghZzmIWPC/7mCDilwH29gPQB+x6jvQCbysm9hSUlxlQ7ag01cGdDUSyMWpyYKr/gwLdq++NMs3+A5+aE0pWvJEHSANI3GscVCt4sYo9537KBFpRHZBWItJBTCqtuJNq6ndXAPVbp5F1CXKqCTASrPRxwUKcv0ZUapKPlGGHsYkenpQ4PONck9U8IXpdB3Jsj1Upali07DbUyn3bLZ7B/6Lv+aeKBUh75/A/wvB6crYT4Wwfo1oxzYoGRbaVP9q+BeXgVWcTwIx+vvYzDE2/iSf6ZmldnofjTZgSdX8DlNGytKTq4cEklGmNZDF2MLe9dS9SXdZfq0Vu3bAheFC2u0JFZOCR6jMa8ZboIP/8uyLkd3ARiw4glfdqXxJ7CUqOKW1t76HDfJJdKDobvi5MZujaNJYcwHPHQsQLae54Qfx6VCGtFMgWr/pUgU1DVg/TZxl9/P8Te+lGYBJxg/wcAAP//e5UbdAAAAAZJREFUAwB+N25OdrxlagAAAABJRU5ErkJggg==" alt="Coze logo" />
      <div class="ai-tool-name">扣子 Coze</div>
    </div>
    <p class="ai-tool-tagline">偏工作流和智能体协作，适合办公自动化与 AI 应用编排。</p>
  </a>

  <a class="ai-tool-card" href="https://chatlyai.app/" target="_blank" rel="noreferrer">
    <div class="ai-tool-head">
      <img class="ai-tool-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB6ElEQVR4nHyTzSsEcRjHZ3ZmX+0uDkJKKUVej04SLkrJQRQppZCTi1y85EIOlD9CKScvuezJyVGSsrmRA1LsLu3O2Bmfn36j2dldv3p65nme3/f7vP1GU4qPqvx/CuJaiaDtGKFQqDccDi/quh41TfOuFJvPY9uxWKwVXSEMv98/BHhF07RpJ2E0Gm0rSxCJRIZ9Pl8iHo9vSdeHbduG0MKAfAnCBHpWVlvQgkrJIxCMqaraQ3YDcITsA+jbYDDYSGyLWDX6I5vNnoKxigYG+zKgTUA6Zhq5QZqQOsABy7KOUqnUHPa7uwItEAi0UEGDYRhJMjQgnfjvyTRF2e2AOwAfAJ53WnKmLk4NfV8CqifzN/Y3+gSyDQgesGsZXn8mkznh+0txbUt3EbnbycvqnLjlSah4KxAttDI4nX2btLJONRNUcZ3L5UaJ7WCP08KhbCHlEDgzsPP5/CvYZ1Y5wxAXAAt/kO9BdAcSgqQbsmZIE9hZN8FvNWxAPJodvv1kW0OuGOAkZMfIAYPsg6RLDNtZo/shiZS3XHwEuJ9Op7cBfIqHJAR7F/8qd56o9kLO6W9Iv4dLZzyYJCU+SVel2D26Ssb3iJ8ST3pn8NcG7G9oUxiUa0Lwgu9c/ky2jBdtweuzlfKnIP4DAAD//xmxPbsAAAAGSURBVAMAto/eA+Kgn74AAAAASUVORK5CYII=" alt="Chatly logo" />
      <div class="ai-tool-name">Chatly</div>
    </div>
    <p class="ai-tool-tagline">偏工作空间形态的 AI 聊天入口，适合多轮记录和主题整理。</p>
  </a>

  <a class="ai-tool-card" href="https://ai-kit.cn/?from=trae" target="_blank" rel="noreferrer">
    <div class="ai-tool-head">
      <img class="ai-tool-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADJklEQVR4nHxTXWyTZRQ+533ffl+3rvRndN1KsU5KiDCQbJrFRJPCMEQSEzVZExeM4oXceGG8mE5vKibghRczcRfGBCV6tRL1YsmIhrCoMYCJZGPlAhgQtnU/bVl/tu7r9/V9D1/LGDAI5+ZNzjnPc3Le5zkMnhCJBLCNOSJA+8GNebGhCxNfItoEauTyged1T/jDlqYdmkcPjSC+N1pvscnRrt+HrDMmiFgCsV4Y/KPtsCcgvw090+X3O/ZAE24FrrX99GPq7f4TnZihYeAYB/mAwJ4MiDT0O23loV+PLaY/eN/lLoDX5zPc/r3gFR1ixyoJfuvSBS9PH23af3OcbKwNJnuFe+DTt1deXFVwOpdlkWy6UFUtAvSmgtObmQTfRIpoebHii0C3Hmz4W05GB7Dj+lBttv1ZSD+Ml8OzJW1kWkEktRQxV8tcKEmidMebDJ5bOR7IZ9Afdujg4hZ36m7Wtus7c+bjd9cIAK6Z4uCUEsF/psG6YO4SWdVVUhn++cDrub5X+stfyGDogOYRE41bmCBnxAS+XTFH6xvrKkwU6c5crgrTeYtWyMmWGoZO/fbRSyegN8m/94Fj2+HZs6Mvez7ZE+d/huLtArQQouUurhPcmrnx1/VyIAMWbRayDOW8p5t6d2pjySvqMkTZuVhYwML52MI3BlTS18z2rw45yeE8v6YCYc0jrx5P/XJR+t8xC3kJSjJoWeyET/dPrCmFqR7totOqdhZnlQr195Ymjx7p6sFDU4KGk6ymKQXzY2Pz1b7/01niUyZGZxYGdx4b/HcchJsH/2ts2Xtqt5Qgm13AiqOjZ3rmh2/WpBQQj99zVfOmM7FcDmJoOODqDMglK5ZGPeayuwKblmHzsx6qFKCqK5MzwLOQsE3XC5xh3eaE+ObuaUvnP0NrM1geXS2BVDkypAFZueWgpiD6GuodMQdte6HIt4dH6vsnQYqHHV2V5oCoFiPCS92cGYjMouhbFgb2dSCsQoVUaVaZzZ+5+k7O3XfiY9dVi3zfyeeMS3ONVleDEf5aYzDfyipUNOeWMd2+74jxcO8jBPVVbGfCU2LjNd4FAAD//0vKMXYAAAAGSURBVAMAufxZ1xkIQaAAAAAASUVORK5CYII=" alt="AI Kit logo" />
      <div class="ai-tool-name">AI 工具箱官网</div>
    </div>
    <p class="ai-tool-tagline">适合快速扫一遍新工具生态，做 AI 选型和比价式浏览。</p>
  </a>

  <a class="ai-tool-card" href="https://ai-bio.cn/" target="_blank" rel="noreferrer">
    <div class="ai-tool-head">
      <img class="ai-tool-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACxUlEQVR4nKRTbUhTYRR+3/fu3u1OTanM/EAl/GETzGSEIIF9Q1RgtYEEZUihhGjUj6CC/QqREoK+Icj6Ibl+JUZBWGrWaArNoW00dVNRaddtzn3ej/ft3s2pZb/q/HkPnOec95znPAeBDUbgqkfW/D/jqRiSHfQ7ABIT+aBKeBCSjQUgGSYX6VQMjYyMUOsrX73GXS96Wm3tfD7TM+725q7FkvG2W76mwLt7Fo4T7hIypUF6vV5QyiqVL3eMlXgsAVPvHU+FzykdK8hhm5PtguQo8msfEk4OdNGVsUikEYD0QrT+d84iHclT51M+v9P98ZUvNutA5wgZyJbbxan+QVwTmbRHJY8rtAyAhlopAHHHzGdWI2Rdmp9bBMw2ruXn7OLktz42T8C76xREtwEksBSRKIAJhXmWAnyCwCSJE20Zp8ML2p2B2HfbW1t9j0az1D/4xg8cw+oGQrpZoxlKCk4MCYiIPMBxhRZGSYbkMRmml36AVj7IY0J7HsmNEhE4ntlHLRFrH1Vus+49nhpBjPqRFI8CPi6PDSGlrIvY68kJfkFdmbmV5nOLao26qrpDiBbQ1KhTHPuKQPpm7QWZSDOEQMK6MMHKFAINAMMAlYnUqNz7SLMUFDEXHqQor7gfyuMiKG8Xx4grIOLCkj01Lx8M6QGotgI+RGEBg+WAvJMgI6jCje0HRY6uQqIf0vTM/R0a70NeZNksEcbmmdxSx9zoi/mJCjVF7zojd2tNQ7KGGCBpWS3lD2zKUTGuYGs+KFNPs/ZwRkXu7XZzy/Q62Y0bil830IvcUb8Ln8/WGW6Ub8kIBaNxym3zpGWmEwk1nS3tqj2A+jTxYOMTs1FONijKhAbQnXhzmLwrpw5re4tpV6d3vCyiKyDt29O87539n25WGwu+pBSGZOYx+AdDRFFhItmE/g5J3cHKFa5eaxIPwX/aLwAAAP//yaIVVgAAAAZJREFUAwALP0xuuJIClAAAAABJRU5ErkJggg==" alt="AI Bio logo" />
      <div class="ai-tool-name">AI 工具箱导航</div>
    </div>
    <p class="ai-tool-tagline">国内外工具集合更全，适合补齐“我还不知道有哪些”的阶段。</p>
  </a>

  <a class="ai-tool-card" href="https://maomu.com/?from=nuxt.com.cn" target="_blank" rel="noreferrer">
    <div class="ai-tool-head">
      <img class="ai-tool-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADUklEQVR4nExTTWhcVRT+zr3vzU/Spml+jCaStLYVCiWLhEK1ieDCRcCFGDoLV1YEDd2ISUglJsYfWgSpFFFpi1BdadGF2BCRLBIbJLRjqaaUJsY0vzYxP81MZvLmvXfvPd6ZMaWHd7jnvne+7517z/kcFI2scz44cHv6uAmCV4mphRXXcmg/OPFF5elfleKvV144NP4ohrBjV67EDxw5epbTqQ6K745woGByFi1i0FkfiJfDBPaNdr74d+luL04+nyuyDAyI2hebYzHx1PduzZNtC6+0G1Feqav7P5EmG5A/PYnV/lNc+dE3Wj6+X8ItFWFma2jNp3bc+coXlsBEsO+sLKts827d9r0b48j8+J3jJZNEe2rw4PMz0Iv3KJi+67CWCFfu+5akrcyYM3msUzd+5xhp7lCbOe3PzrnsZQlE2Pz4NJy6C+T/PmbrFMwry6BYGenVDdesbWiGe8q9MPWtI5nfAFzXGFcFs/MCXLhL5GYmCTOTxQ0bSl36gFPRalS0vkT8YMMgWpIHvS6I3RbtKYZxhJq/V8gv2bWL3unt5fcG3icpJUUiEX739Nt0Yn0M6YmbEO5ugW2fpRGtgnO6jpWE3tyi4I/rBYJPz53jnu5uqqzYi0Qigb6+Pjr5Zgc/c3gfDq9PIBcSyVCRDFStYJUvOgq1uo5w7q8CQXNTM5LJJHp6elBVVYWmpiaMjozip59/QbWjbXsDSAhII1kYuIsQUZhUmjkstBZdXZ3U0NDAV68OYnh4GF2dnXzw4CE6fuwoxv5ew57SvRYo2WX3H8cEfM0pjT1tfK1Z2T5ZGxkZ4cbGRnJdl9PpdGFenmt5llFRj8ruQchM1kgRd9gPx0Sw7V80AUKz7dmpLLaAhIDneXkwEQn7CI42tuGJriHES2rYnp1EwKEJ+aJYTxy5bmT5l2p5If/3sNBzY3YGnO2G87QVL3+ISFk9UyYTRmKPSSh8ttxff0PYJHF/A/3ZwUtDNo7+X4TaEVdBM5YknLmlhNWHG6+Omu3M4MJUrhcYEHkCgwSl9OxEu43P22xtVzdPXMQXFuFP/eZKKtUqu3V+7ub0CVzeb2/cjvJDaTLn7Ai/ZeMfrL9mvdV6XZEPS/7Sn6M6pMvzfbXXHpXzfwAAAP//M4pHSwAAAAZJREFUAwAn86rffoGqRgAAAABJRU5ErkJggg==" alt="Maomu logo" />
      <div class="ai-tool-name">猫目</div>
    </div>
    <p class="ai-tool-tagline">偏导航和发现，适合想快速浏览热门 AIGC 产品时打开。</p>
  </a>

  <a class="ai-tool-card" href="https://www.pmbaobao.com/hotnews/" target="_blank" rel="noreferrer">
    <div class="ai-tool-head">
      <img class="ai-tool-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACr0lEQVR4nBySy4vURxDHq6q7fz2PnzOzK46zm0Q0gehqckjAgDmEGDDkmPwFOeaSQwJJCOSSQzwk5JRDIJeQY8DLgousIj4OehF8rbgK6qqzro9xZ2bn8Xv0q2y3G4qC+ta3KOojjZsQJ04ECFaCAoyfQ2BkAcIzK8HWgQeRUgBmg2y8JUfGcJISAlEsQgAgAN5O4gtulAzu+No8VXfJArpu5Zdk7EznIzH/pQqFn3Z91hPkSc9IvZfNBJ6dmE5ve5pN3/tLiuGzMgtw4Ft88r+//BUTlmWPyIBDQ1VUbQybuOcbcfD75MoPNluVbDORttgV0L8uy00OSmMVqelkCd6C2YgWfmNRNfZbNVOzRqJqwWS9GPxYLbqmOstUQR/3mBBUWDelEt4USbHq7v/mYM5X3pCi+Y72nA0fPi4OVuvHtPYpPfJbl5BwRAsg342Lm9HSbFipNBpUa0tAU5b9Qf/N9rGfqvV9o97ay/WXu/VcfzDx7fdre47WUjVcP1Cs/K5S6yGQzx8PX9xvLXwxylt/HP/z/JU11AuT+e9s5+uNfu3Xn48vL57ate/IuHF4OlzB8RNCOy55pt45bNyOk4tL//3z92Aw3Nx4mk357PK500vLxjTJK6x3QLVh/ABt/+L07r+b8rP23kOXl88MB8+Pfnrkxo2bO9tNScnT3tYHH3+SD26ltf2N7KptHsJi/EgML2zB29nz1bSeCqkxnVu7t57WK3O703zSK7M8SWdanfm8e02/9TmG4Ir+Ta1yEDtcaZROytI665G4UtGEHDgAJW7URTUrdn6Ilp10ht3Ico52wsECukhU5A84AqU4RqoK3SDdRFZog4+XElEBeVRh8IEtQOQ0XkIiaUARMx+HeFD4WuABo1mEGkN0RNwGNEL+mlaOfdtlEXwk3hO+AgAA//+/Yf/aAAAABklEQVQDAG5ZbvahVu9hAAAAAElFTkSuQmCC" alt="Hotnews logo" />
      <div class="ai-tool-name">今日热榜</div>
    </div>
    <p class="ai-tool-tagline">适合看 AI 产品动态与热门话题，帮你判断最近在流行什么。</p>
  </a>

  <a class="ai-tool-card" href="https://skillsmp.com/" target="_blank" rel="noreferrer">
    <div class="ai-tool-head">
      <img class="ai-tool-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABpUlEQVR4nFRSPUsDQRDd2ZxCvEhC4kdESZAIgqi/QGwsRFLYWAUsBEln0MrKws5GsLbQnxCIoBJEBVtRxBSiFmIKk1PBiDYJ2XFnPy7nHsztzsx783ZmnfToGGPIzAK7D246CxEdCgD5VYr81B+QCcY4pVBMGq7wQgJA03EM1pEwLhRYHUEHARSJDHPFZCFkBVlEkDmovaacY+RyJYWYALiGQDIKsTB//xGfv4KKKC7uc0p4fyJxuL93dX60u7Pd44ZXZtyD1b7sdLhTGZADIEkTJHdhfu6r8Z1dzD0+PUdc1xBp8aRA5mpltgn3lYepyYn1Qv7mtuJ5H7qnAIFeMAjF4nHtkvatXj8tX0R7ewtrec/zhp3a+FD39Uvzrto080DmoG48lcDl3FIqNVIsHc++VpODA6xhpaPmpx03B1WjfHYZibhbmxu1mlcsncgERD8ORlM6k1HX100Aw6eOXSEMAWshawtgpqvC6WQza6U6QdNttVkLbH1rOPUL/wMw0BcWvAYpdEwGoHkz/uPxLTn8hwYOTQHsiECT68HLo7yTMBEL+gMAAP//bI7/+gAAAAZJREFUAwBkNcjt/R7vwgAAAABJRU5ErkJggg==" alt="SkillsMP logo" />
      <div class="ai-tool-name">SkillsMP</div>
    </div>
    <p class="ai-tool-tagline">偏技能市场和 Agent 能力补充，适合给工作流继续加插件。</p>
  </a>

  <a class="ai-tool-card" href="https://codexzh.com/" target="_blank" rel="noreferrer">
    <div class="ai-tool-head">
      <img class="ai-tool-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACn0lEQVR4nExTO2hUQRQ9d95ndyUxJgQ1IYqdsCCCgh9sLARBDCoaMSkEBUHQFBZCRLCS2FpoFcFiQUSwSGGRRlJoIQomhERB3CJRTNR81132vTcf78y81QwM897ce8+5nzMheM3cOntxSxzfSZQqG20iGAMNkDt525OMW+C/LAowV29kDw6NTbyg2dsXBmIhnrO3SDJlWsEmDzT5/g8ChAERE2mp1SXBlyMEiGams1YwWaJNgXaxj9HkTZlUGRGE1mYkZHs5yaRhoNAFs6OSKdk4EoHPQEkuxWEYZiYSIkylsi5lBjBFk7OAIWWWUtjewXTMtL4CERcRtm+DVsoCka1ONRukfUnFMC/SGbTMqOfcVXQdPcloBqvvXqP2ZQZ9A9dhi4vaO7H46hl9H39qqFByLRG8yQiCbNaprXwQ3cfPoProLuYrD9G2dz8aC18xe+8K5MYa0pWfWJocB4KIbE02NrTJEyeg0xSFnbuRLH1D7fM0KIqxMfse6epv7BoaRnFHH+bu32CQXwhKbVyisiNF6DutQUGI5Mc8Sr17HHPU2Y2e/stYfjuBnlNDWHg5hnR5EXHXdsh6zffM9mF6uN/k367bveevoevwCdeDlQ+TzLYFHfuOIKutISiUsPHpI6pPRu2IXPto+uZpbVrj05p0miDc2umM0k6BgyiKWCn5SCWPtNkwmn0tS2jIqcoqx4GIqEDyz7pPLy5AyxQmaXpRIU+WhJO5JbZjTPkvYoW4GNdaEZBz13xn9RMEIK8Vx2znZy1WlLaQaiiIhQEFL3UHYoPRkrLfPm1/Kn4/toSq0JCjfKlj4Ufactz8iIx/lZSLDnEgQuel1ag48Hii0kiSQQ6dYmNmmW0v/r3EvBSH6LPK+HOqnsnBY5U3lb8AAAD//3deekoAAAAGSURBVAMAAj3wi14ObjMAAAAASUVORK5CYII=" alt="CodexZH logo" />
      <div class="ai-tool-name">CodexZH</div>
    </div>
    <p class="ai-tool-tagline">偏 AI 编程助手视角，适合关注智能开发工作流和效率实践。</p>
  </a>

  <a class="ai-tool-card" href="https://f2c.pages.dev/" target="_blank" rel="noreferrer">
    <div class="ai-tool-head">
      <img class="ai-tool-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACSElEQVR4nExTy2pUQRA9dW8n4zwSCc4g+EhiRBFE3AZc6he48gPcGrMWkpDgDyT+gYJuXLgQXPtAIiiIC4UsJiAquHAGnEw0M9Nd1uPecRrupbu66tSp01UBspbu8npGWEkjzBEBxMgYYNmT3jPLXs2EpGfK0U0JD9o7tEkWHLDJR2D11XuNyjIgsQOItdypzcCoApKEG7S0wr/luk5s9xYcJc/hAFQJagFy+YbRGGE6GFRkZUfoB4polOhFBuQZ6P4t8NUF0J8B8L0D1kAB4HuPwQKWyz5xQj0g+09QAtE9AN1cBt++7rb9n8DZE6BzJxm7e0S9v0j1ipenIEG8Mi6yF/T58hmQlvH6C7D9AmjNABXx/PQVrOxKf0mcBVOYTGmTeCoHLTQFVWwvPwPP3gCNWfefq4OkFGZnrH9WSUiDFUSzzlSBi6c84MYVYHFVAI4B79vAo1cOnHjMmILySQXAcCj1Svb5lp+vXfJP148O0D9ysBSLCiQuyHOwgijyQC7mm6DqFPCrBzyUjDE6s6e7wPGq78fLSmB7T2cwEvqnvZk+7gNrT4CqKi5Bjarpo/VbcvKnJ9Uglc+oxsWmqczfOqCa0G2JgKPoHciezPwNSJ9RjsZAqdUk2/IFsJRDIpplG8UxbZpo6jFQ4BwH2spKszYNersn9b4DP/8Amq1pz7pY2oVl5bKJBpKhT+dXeU2ma0uHSX17h94oGjzR4ZPLB06GiSPWzUcGakOm746Oc8g9UKhTQbqcMitbfzK9XdFkp71NW/8AAAD//3fU78UAAAAGSURBVAMAas/757Es4tkAAAAASUVORK5CYII=" alt="YY F2C logo" />
      <div class="ai-tool-name">YY F2C</div>
    </div>
    <p class="ai-tool-tagline">偏 Figma To Code 生态，适合设计稿到代码的转换类需求。</p>
  </a>

  <a class="ai-tool-card" href="https://www.packyapi.com/console" target="_blank" rel="noreferrer">
    <div class="ai-tool-head">
      <img class="ai-tool-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABhklEQVR4nIzTSyhtcRTH8f8+57ju7b7q3iQxIQxIjAiFoowURUZSBgwwl0cxMvAeeAyZydzABBGJIgMpmchjhAFF8vwu+ycnxy6rPu1z9n+tf+v/2CEXGyH3tXjN8wIGfyId8XjWO3uGcYVD3NvLyCfF7ehCoguOXTRh24tq5wlTaMGOfsdrLCKW8x2d2EdhJKq4XsWT6EEr6hCn9j3l3ir/Hx48DfzBHi7Rhmmkaq3XKrS8G2Tgv7o4iGj2PiRjALNKLsXKh7VbzpYsYN4Si7CGObVbg3wlpWgzH5CAQeQiC702Zh2M4QQbGMaQivvR4WKjSp3UIsc6eLRWkIYfyHb+EY1jWUuK016s4xs2MYJum2AJZZr9DMco0LJKUK2Ns8JiVGIVFba0sBJ/Of98QzqRGTRgVOtOQp7zb9+E8y/bnR3A20VqxIXzj9Le2QVqlXIsuoB4u8rnmvmv/v92/vE2q9hz799EWPv2GtEfkx1TpvNvmb0/wumH4pjwop7PAeOBxRYvAAAA//8wxhrLAAAABklEQVQDAEJ8VdySPV0CAAAAAElFTkSuQmCC" alt="PackyAPI logo" />
      <div class="ai-tool-name">PackyAPI</div>
    </div>
    <p class="ai-tool-tagline">更偏 API 控制台和开发辅助，适合联调与接口类 AI 工具接入。</p>
  </a>

  <a class="ai-tool-card" href="https://foxcode.rjj.cc/dashboard" target="_blank" rel="noreferrer">
    <div class="ai-tool-head">
      <div class="ai-tool-logo" style="display:flex;align-items:center;justify-content:center;background:#121826;color:#fff;font-weight:700;">FX</div>
      <div class="ai-tool-name">FoxCode CLI</div>
    </div>
    <p class="ai-tool-tagline">偏命令行和开发流入口，适合放在个人 AI 开发工具箱里。</p>
  </a>

  <a class="ai-tool-card" href="https://magicstudio.com/zh/" target="_blank" rel="noreferrer">
    <div class="ai-tool-head">
      <img class="ai-tool-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADF0lEQVR4nFRTTWhVVxD+5px7Xm7uy/tJgjYNSaTYuuiii9BCuniBQtNdxVK6abGttKS1zU7ooiC0oRuLy0pbNwED/iCiuBJjBA0KiqLGf1GDD4wxwb+Xd2/euz9nnHvzBL2Xc2YOZ2a+mW/mOFj9SBanyvuYrIjYwkiGRQ607qsEfVrkxA1snnndh1oH9OJ/rx/dfzPsqELOWERiYlfjshZrI1oYaajdD/Dkt3n8FLSiMH2ASa8H3Yc18iMxlm3mKZDMLajV/BLZlIOCSuBPLeDJF7PYHDhyzetxfIdLnSMhPw+BdkecnRTXMQpKA2HTpkEcCSLBozCHtSMFtO2YBY3RtzjzsdhkdXFWEivtKH4RN+nzrf3o6DbY+9d9lE0bJ5GlNDsS0NReUqo4nXBHDXk65CAWGHEmbkQxrV+Tx8bfB+AWNK7sWcbjaoOKxuEkFhBmm4PnRAhGVRHtFY8dLsFTJW4nRJr6egv45ch7KPfl4JY0th59F++sK4IjRUV2KbX1pMrUl8ZxPWxRzKoNGPr5bRra1ol8v4VNVklMefDngQs7fZz7d4GbjTBlNqU2UgxfmKkjk1TDudJB1DoepW5pzOxPdVsOcHLdLpwvHBI0K/XXpBJfbhBUNUdsKWDTUDQ9PoehTzbh6o3b0Fpn6869OQx/+hXGt+3EMZ6kx/oWu6yky341zWDGQUTEgY3wlD8zI9y8abDxm+/w7OkLLC/X8eXXo7h86QrKPb284vg83bHPGsRSQjCjK9i0KMr3RCEltAKdxKrHfYun549QLl/AhcuzOLBnP4pr13AYhWTY8KJ5iGLSxoPx4Fg2yn9g4h8P+V99+MKOdQxy6kBpP8913oXL7agHUqtSxNI+MY/lkDMJ7aot3RzT6Sh/iBOnpH8fSWs2ROTL5CdJV1JQF/U1NMMmtLRByEyyqU4nxdqp+tLzH6U3sQT4E2cxFW1A3yEPubJCOAgKTZf1qK4DeuAuSNoyXeKaobP9b2Wx/gOw8Ooxvfmct2N7RUZ1i4EafqZqAxNdxxHoRlVbfdqCJxpLd954zi8BAAD//2AkagkAAAAGSURBVAMA9nxZcHP4JAAAAAAASUVORK5CYII=" alt="Magic Studio logo" />
      <div class="ai-tool-name">Magic Studio</div>
    </div>
    <p class="ai-tool-tagline">适合图片生成、抠图、换背景这类轻量视觉处理任务。</p>
  </a>

  <a class="ai-tool-card" href="https://aigc.baidu.com/home" target="_blank" rel="noreferrer">
    <div class="ai-tool-head">
      <img class="ai-tool-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACSUlEQVR4nKRTS0tVURT+1j7nPrSBJlfTq/a4hQUhklBEE6GCov5Aw6BBv6BpNGzcMGhQQdAgIhpY4CT6A0lGwU17qFBQGuq5nnvu3Xv17X1MLqEjNyzOWmuvx7fX+o4Bj6qOU15QEorrkH+n05dsxU74XKFykt9XlBFfC/kR7Hw675cpl3yBaSqXVZHxusAIMSYPpE98jogE21oVMaJG0KJZ9I0lwEKIlM7GztGSkLwbEi8SBzODbPwUNNvQJFXp6Qd6KgEBC2mIXFlRzM0rhquiR4dDVYmIJhSYm1EsvFddUyfrm8B6W3H2vMHUhSg0Mox//jbD7ScZps5E8vRWd/ATPWKP/uM3xVJDRUuKRqxY4/W9Zxkqh4sYHBC8W7Coryv6hiQ8cma2jUP9gmNDhk+g51fbYampsEaxSj1lkXrkMLto8aauuPO4iRMjBtVewY+G4trDFKePx5i+WUbsYSxadrAOtg0knF7RGc5D4Vi8VBAUmOj2G6QlQVoWxAMWXaP5NGMP6nPL4UvTodplUKLNQWKzKJioRagdMJgci/Dgk8Wj+TbO1YD7k2VU9wUCwjBeb1wsgBvW5cThK0f+pwe4e72E8dEIJY75FL+9Iw4bRxL01VJMViIMspmfpJCbHqks/nb4vkpHUWWsIqh0GzjV7a2v8on1rIWD5VgHTRSYFbFpTiQNAEwnkSz3b4zsxultInkcr7lmoyoZ56c2J456kngmaY4iJFjN76h7Kue5e/2ZSDL5QOUK5SUl/Q8idrCTrdirPvcvAAAA//8G+BE+AAAABklEQVQDAPDVS+AIwf6kAAAAAElFTkSuQmCC" alt="DuJia logo" />
      <div class="ai-tool-name">度加创作工具</div>
    </div>
    <p class="ai-tool-tagline">偏内容创作和分发，适合短内容、营销文案和素材辅助。</p>
  </a>

  <a class="ai-tool-card" href="https://aihirehumans.com/" target="_blank" rel="noreferrer">
    <div class="ai-tool-head">
      <img class="ai-tool-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACkElEQVR4nDxTPWsUURQ9777ZXfcjH5KYgBILsRQrQUwVFKMoCGJjpf/Bxq0EsbA1oI1YWAh2YmNECz+IkMLOEAvRSg0SEjZms7vZnZl3PfftrLs8Zt5799x77rlnEvB37dzPk96V7juEMy5g0vNMlAvqRJ29q8DBazzfSZxfDWm/+XB1bs1dWdg4VUnwuiy16ZB1GQb1WgCdwmWAdwRbUjhlAleROkLe25Q0vyQVj3sFOGX8CKwEqIHrNUHZO3VhCDY2Ie8MmGTGleSuCDCveS+QbuIjZf4ZrxlcY0xw+nwVmqkb3iEmgaIU8m4Q1XnG6jhzSqQcKQZXIuX9dsDZqzXMHUvQaQWUErsnA0R25JeLDzgo3ugOxWEFViI46wOzhz0Wrzew9SuHyxmfaiFsMCbOR3FZUKI4cRm9KFjWVVy+0UC1IWhv55iY8hib8LyzQiOmGnHu5sIGR8RNABJxGBB8/EQZtx9PwZNrb493jFz72MfzOzuolAURPBwvMUUmcaMDkHod6b5iwLtqw8f390/3YhGKCU6kYB2TS2ESGxVwoOzwYmkXzcVNvFxqm1x4+6SN3+sZqlUXwWwzsvZsJJH/rhsuS9L9q+iw99mjCVp/cqw866I+RgGs8qj3ogUZGcfZ08xCNgkD6hRw+ojHqwe7SDscvAwBPmrPKZiQNlYCthKSSVQCY2IyG9nktMePzwOsv+uzOkOtfxrJCjFJ8GqDxLaw6kpFajSSZuY0T54Jd/ws9MubfdA/ETgEx/lTq5BXIwYfuHyT3t444MfKpGXyqFlf0+AyUjeRrOoIbNtaMl5KifFd15RHnw59k6AX8ry3TPotKRxmvXrrSV1Uu+jZTNTKQ2857ecXb32d+f4PAAD//8Qzo00AAAAGSURBVAMARoFUOB4/PfYAAAAASUVORK5CYII=" alt="AIHireHumans logo" />
      <div class="ai-tool-name">AIHireHumans</div>
    </div>
    <p class="ai-tool-tagline">偏 AI 原生产品形态观察，适合找灵感和看交互方向。</p>
  </a>

  <a class="ai-tool-card" href="https://durable.co/" target="_blank" rel="noreferrer">
    <div class="ai-tool-head">
      <div class="ai-tool-logo" style="display:flex;align-items:center;justify-content:center;background:#0f172a;color:#fff;font-weight:700;">DU</div>
      <div class="ai-tool-name">Durable</div>
    </div>
    <p class="ai-tool-tagline">AI 建站老入口，适合快速搭一个小型商业站或验证落地页想法。</p>
  </a>
</div>

| 使用场景 | 优先入口 |
| --- | --- |
| 日常问答、写作、代码辅助 | ChatGPT / Gemini |
| 智能体与流程自动化 | Coze |
| 快速发现更多 AI 产品 | AI 工具箱官网 / 猫目 / AI 工具箱导航 |
| 设计稿转代码、开发辅助 | YY F2C / CodexZH / PackyAPI |
| 图片与内容生成 | Magic Studio / 度加创作工具 |
| 快速搭站 | Durable |

<p class="ai-tool-note">工具不需要太多，稳定保留几类高频入口，效率通常比持续收藏更多链接更重要。</p>
