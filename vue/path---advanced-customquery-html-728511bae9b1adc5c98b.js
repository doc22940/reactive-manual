webpackJsonp([0xbb7e4bc7d8af],{420:function(a,n){a.exports={data:{markdownRemark:{html:'<h3 id="data-aware-ui-components"><a href="#data-aware-ui-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Data Aware UI components</h3>\n<p>One of the key ideas behind Reactive Search and Reactive Maps is the abstraction of a query interface.</p>\n<p>The UI components are already associated with the data queries. For instance,</p>\n<ul>\n<li><strong>SingleList</strong> and <strong>MultiList</strong> components create a exact term match query based on the selected items.</li>\n</ul>\n<p>Components rely on the <code>dataField</code> prop for selecting the database field on which the query needs to be applied.</p>\n<p>However, there are cases where you would wish to override the associated query with your own. For example,</p>\n<h3 id="defining-a-custom-query"><a href="#defining-a-custom-query" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Defining a Custom Query</h3>\n<p>Each component has a <code>customQuery</code> prop that accepts a function. The function should return a query object compatible with <a href="https://www.elastic.co/guide/en/elasticsearch/reference/2.4/query-dsl.html" target="_blank">Elasticsearch Query DSL</a>. Here is a simple query object that applies a match query.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>data<span class="token operator">-</span>search\n  <span class="token operator">...</span>\n  <span class="token punctuation">:</span>customQuery<span class="token operator">=</span><span class="token template-string"><span class="token string">`\n    function() {\n      return {\n        "match": { "fieldName": "text to match" }\n      }\n    }`</span></span>\n<span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<p>Here is another example that applies a <code>match_phrase_prefix</code> query.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>data<span class="token operator">-</span>search\n  <span class="token operator">...</span>\n  <span class="token punctuation">:</span>customQuery<span class="token operator">=</span><span class="token template-string"><span class="token string">`\n    function() {\n      return {\n        "match_phrase_prefix": {\n          "fieldName": {\n            "query": "hello world",\n            "max_expansions": 10\n          }\n        }\n      }\n    }`</span></span>\n<span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<h3 id="extending-a-custom-query"><a href="#extending-a-custom-query" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Extending a Custom Query</h3>\n<p>When you pass a function to the <code>customQuery</code> prop, it receives two parameters, <code>value</code> (current value of the component) and <code>props</code> (current props of the component). Using these parameters, you can construct a query as per your needs. For example, if you wish to use a <a href="/reactive-manual/vue/search-components/datasearch.html"><strong>DataSearch</strong></a> component to search on any model of a specific car you may write your component as:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="gatsby-highlight-code-line"><span class="token keyword">const</span> <span class="token function-variable function">myQuery</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">,</span> props<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">  match<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">    name<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>props<span class="token punctuation">.</span>car<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span>\n</span><span class="gatsby-highlight-code-line">  <span class="token punctuation">}</span>\n</span><span class="gatsby-highlight-code-line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span>\n<span class="token operator">...</span>\n<span class="token comment">// in your template</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>data-search</span>\n  <span class="token attr-name">...</span>\n<span class="gatsby-highlight-code-line">  <span class="token attr-name">car</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Audi<span class="token punctuation">"</span></span>\n</span><span class="gatsby-highlight-code-line">  <span class="token attr-name">:customQuery</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>myQuery<span class="token punctuation">"</span></span>\n</span><span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<h3 id="not-familiar-to-elasticsearch"><a href="#not-familiar-to-elasticsearch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Not familiar to Elasticsearch?</h3>\n<p>You need to write a custom query but haven’t worked with Elasticsearch. Okay, as a super quick primer, Elasticsearch is a data store search engine with a NoSQL JSON data model.</p>\n<p>The docs link above is a good way to explore ElasticSearch in depth. Another alternative to get started with the query syntax is <a href="https://opensource.appbase.io/mirage">Mirage</a>, a GUI for composing Elasticsearch queries.</p>',frontmatter:{title:"Custom Queries",next:"advanced/react.html",prev:"theming/class.html",nextTitle:"React Prop",prevTitle:"Theming: Class Injection"},fields:{path:"docs/advanced/CustomQuery.md",slug:"advanced/customquery.html"}}},pathContext:{slug:"advanced/customquery.html"}}}});
//# sourceMappingURL=path---advanced-customquery-html-728511bae9b1adc5c98b.js.map