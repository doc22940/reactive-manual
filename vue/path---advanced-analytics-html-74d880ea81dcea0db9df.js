webpackJsonp([94325899749574],{419:function(a,n){a.exports={data:{markdownRemark:{html:'<p>You can take advantage of search and click analytics when using <a href="https://appbase.io">Appbase.io</a> as a backend with ReactiveSearch. Search analytics work out of the box with <code>analytics</code> prop in <code>ReactiveBase</code>. This recipe explains how to implement click analytics for your app.</p>\n<h2 id="click-analytics"><a href="#click-analytics" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Click Analytics</h2>\n<p>Click analytics have to be wired into the result components. Its supported in <code>ReactiveList</code>.When using <code>ReactiveList</code>, the <code>onData</code> or <code>onAllData</code> prop|scoped-slot receives an extra property to make click analytics work which you have to invoke with <code>onClick</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>reactive-list</span>\n    <span class="token attr-name">...</span>\n    <span class="token attr-name">&lt;div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>onData<span class="token punctuation">"</span></span> <span class="token attr-name">scoped-slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>{ item,  triggerClickAnalytics}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">onClick</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>triggerClickAnalytics<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ item.title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n>\n</code></pre>\n      </div>\n<p>With <code>onAllData({ results, streamResults, loadMore, analytics })</code> the <code>analytics</code> property receives an object having the <code>base</code> value and <code>triggerClickAnalytics</code> function. When rendering your component using <code>onAllData</code> you have to read the <code>analytics</code> object and call the <code>triggerClickAnalytics</code> after adding the <code>base</code> value to the <code>index</code> (<code>base</code> is calculated internally from <code>currentPage * size</code>). <code>index</code> is assumed to start from <code>0</code>. Example:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>reactive-list</span>\n    <span class="token attr-name">...</span>\n    <span class="token attr-name">&lt;div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>onAllData<span class="token punctuation">"</span></span> <span class="token attr-name">scoped-slot</span><span class="token attr-value"><span class="token punctuation">=</span>`</span>\n        <span class="token attr-name">{</span> <span class="token attr-name">results,</span> <span class="token attr-name">streamResults,</span> <span class="token attr-name">loadMore,</span> <span class="token attr-name">{</span> <span class="token attr-name">base,</span> <span class="token attr-name">triggerClickAnalytics</span> <span class="token attr-name">}}</span>\n    <span class="token attr-name">`</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> \n            <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>(result, index) in results<span class="token punctuation">"</span></span> \n            <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>() => triggerClickAnalytics(base + index)<span class="token punctuation">"</span></span>\n        <span class="token punctuation">></span></span>\n            {{ result.title }}\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n>\n</code></pre>\n      </div>',frontmatter:{title:"Analytics",next:null,prev:"advanced/guides.html",nextTitle:null,prevTitle:"Guides"},fields:{path:"docs/advanced/Analytics.md",slug:"advanced/analytics.html"}}},pathContext:{slug:"advanced/analytics.html"}}}});
//# sourceMappingURL=path---advanced-analytics-html-74d880ea81dcea0db9df.js.map