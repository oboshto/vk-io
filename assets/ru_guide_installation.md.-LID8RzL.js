import{_ as s,o as a,c as i,R as n}from"./chunks/framework.9-DqOxxF.js";const E=JSON.parse('{"title":"Установка","description":"","frontmatter":{},"headers":[],"relativePath":"ru/guide/installation.md","filePath":"ru/guide/installation.md"}'),t={name:"ru/guide/installation.md"},e=n(`<h1 id="установка" tabindex="-1">Установка <a class="header-anchor" href="#установка" aria-label="Permalink to &quot;Установка&quot;">​</a></h1><h2 id="зависимости" tabindex="-1">Зависимости <a class="header-anchor" href="#зависимости" aria-label="Permalink to &quot;Зависимости&quot;">​</a></h2><h3 id="node-js" tabindex="-1">Node.js <a class="header-anchor" href="#node-js" aria-label="Permalink to &quot;Node.js&quot;">​</a></h3><p>Требуется <a href="https://nodejs.org" target="_blank" rel="noreferrer">Node.js</a> версии <strong>12.0.0</strong> и выше</p><h3 id="typescript" tabindex="-1">TypeScript <a class="header-anchor" href="#typescript" aria-label="Permalink to &quot;TypeScript&quot;">​</a></h3><p>Если вы используете <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">TypeScript</a>, требуется версия <strong>3.9.0</strong> и выше</p><h2 id="npm" tabindex="-1">NPM <a class="header-anchor" href="#npm" aria-label="Permalink to &quot;NPM&quot;">​</a></h2><p>Установка модуля из пакетного менеджера <a href="https://www.npmjs.com/" target="_blank" rel="noreferrer">NPM</a></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vk-io</span></span></code></pre></div><p>Или</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vk-io</span></span></code></pre></div><h2 id="импорт" tabindex="-1">Импорт <a class="header-anchor" href="#импорт" aria-label="Permalink to &quot;Импорт&quot;">​</a></h2><h3 id="cjs" tabindex="-1">CJS <a class="header-anchor" href="#cjs" aria-label="Permalink to &quot;CJS&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">VK</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;vk-io&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> vk</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> VK</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    token: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;токен&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ...</span></span></code></pre></div><h3 id="esm" tabindex="-1">ESM <a class="header-anchor" href="#esm" aria-label="Permalink to &quot;ESM&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { VK } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vk-io&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> vk</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> VK</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    token: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;токен&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ...</span></span></code></pre></div>`,16),h=[e];function l(p,k,r,d,o,c){return a(),i("div",null,h)}const y=s(t,[["render",l]]);export{E as __pageData,y as default};
