webpackJsonp([94325899749574],{451:function(n,a){n.exports={data:{markdownRemark:{html:'<p>You can take advantage of search and click analytics when using <a href="https://appbase.io">Appbase.io</a> as a backend with ReactiveSearch. Search analytics work out of the box with <code>analytics</code> prop in <code>ReactiveBase</code>. This recipe explains how to implement click analytics for your app.</p>\n<h2 id="click-analytics"><a href="#click-analytics" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Click Analytics</h2>\n<p>Click analytics have to be wired into the result components. Its supported in <code>ReactiveList</code>, however when using <code>ReactiveList</code>, the <code>renderItem</code> or <code>render</code> prop receives a method called <code>triggerAnalytics</code> to make click analytics work which you have to invoke with <code>onClick</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ReactiveList</span>\n    <span class="token attr-name">...</span>\n    <span class="token attr-name">renderItem</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> triggerAnalytics<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n        <span class="token operator">&lt;</span>div onClick<span class="token punctuation">=</span><span class="token punctuation">{</span>triggerAnalytics<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token operator">...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">}</span>\n<span class="token operator">></span>\n</code></pre>\n      </div>\n<p>When rendering your component using <code>render</code> you have to call the <code>triggerAnalytics</code> function by using the <code>_click_id</code> property of the result items as an argument.\nExample:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>ReactiveList\n    <span class="token operator">...</span>\n    render<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        data<span class="token punctuation">,</span>\n        triggerAnalytics\n    <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n        results\n            <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>\n                    <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>_id<span class="token punctuation">}</span></span>\n                    <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">triggerAnalytics</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>_click_id<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n                <span class="token punctuation">></span></span>\n                    <span class="token operator">...</span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n            <span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token operator">></span>\n</code></pre>\n      </div>',frontmatter:{title:"Search and Click Analytics",next:"writingdata.html",prev:"advancedguides.html",nextTitle:"Writing and Editing Data",prevTitle:"Advanced Guides"},fields:{path:"docs/advanced/Analytics",slug:"advanced/analytics.html"}}},pathContext:{slug:"advanced/analytics.html"}}}});
//# sourceMappingURL=path---advanced-analytics-html-012b0b255c98ce2b7e70.js.map