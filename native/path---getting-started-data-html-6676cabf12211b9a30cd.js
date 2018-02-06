webpackJsonp([0x9333beaa6d38],{461:function(a,n){a.exports={data:{markdownRemark:{html:'<p>The first step in getting started with building a custom project for <strong>ReactiveSearch</strong> is to add your own data. In this guide, we explain how you can import your data with the correct schema.</p>\n<h3 id="creating-an-app"><a href="#creating-an-app" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Creating an App</h3>\n<p>ReactiveSearch uses Elasticsearch as its underlying database system. An app within ReactiveSearch’s context refers to an index in Elasticsearch.</p>\n<p>Here’s a short gif walking through the app creation process in appbase.io, a hosted realtime Elasticsearch service.</p>\n<p><img src="https://i.imgur.com/r6hWKAG.gif"></p>\n<p>If you are using an Elasticsearch cluster, you would be able to create an index with the following command:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code>curl -XPUT elasticsearch:9200/my_app/\n</code></pre>\n      </div>\n<blockquote>\n<p>Note</p>\n<p>ReactiveSearch is compatible with Elasticsearch v2, v5 and v6.</p>\n</blockquote>\n<h3 id="overview-of-the-app-data-model"><a href="#overview-of-the-app-data-model" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Overview of the App Data Model</h3>\n<p>Elasticsearch’s data model is JSON based, and data within an app is organized as JSON objects that belong to a <strong>type</strong> (or not if you are using v6). Types provide a logical namespace to the JSON data which can be used while querying data. You can read more about the data model behind Elasticsearch over  <a href="https://www.elastic.co/blog/found-elasticsearch-mapping-introduction">here</a>.</p>\n<p><img src="https://i.imgur.com/LCvdVuu.png" alt="Data Store"></p>\n<blockquote>\n<p>Note</p>\n<p>Elasticsearch v6 removes the concepts of types, where data is simply stored as JSON objects within an index.</p>\n</blockquote>\n<h3 id="importing-custom-data"><a href="#importing-custom-data" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Importing Custom Data</h3>\n<p>In this section, we will cover how to add data using three different approaches. We will use <a href="https://opensource.appbase.io/dejavu">Dejavu - a GUI for Elasticsearch</a> for showing the process.</p>\n<h4 id="via-importer"><a href="#via-importer" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>via Importer</h4>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*y8TyLrxQwjvMKTrzb5p4oQ.gif"></p>\n<p>Importer is the most recommended way to index data into an Elasticsearch index. It works with JSON and CSV file types, and also supports cloning an existing app.</p>\n<p>Importer also allows you to configure mappings prior to indexing the data.</p>\n<h4 id="via-dejavu-gui"><a href="#via-dejavu-gui" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>via Dejavu GUI</h4>\n<p>Let’s say you have your data organized as a CSV or XLS file.</p>\n<ol>\n<li>Use an online tool like <a href="http://www.csvjson.com/csv2json">http://www.csvjson.com/csv2json</a> to convert your CSV data into a JSON format.</li>\n<li>Go to your dejavu’s <strong>Data Browser</strong> section and click “Add Data”.  </li>\n</ol>\n<p><img src="https://i.imgur.com/idp5Ia2.png"></p>\n<ol start="3">\n<li>Add the JSON formatted data here, a single object should be added as a JSON object while multiple records can be added using the Array semantics.</li>\n</ol>\n<blockquote>\n<p>Tip</p>\n<p>Add up to a hundred records at a time for best results. Ideal when your data set is small.</p>\n</blockquote>\n<h4 id="via-api"><a href="#via-api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>via API</h4>\n<p>Elasticsearch uses a RESTful API for both indexing and retrieving data. Whether you are using Python or Java or Javascript, you make a HTTP API call there.</p>\n<p>This is how a REST call looks to insert a single object into an app inside a type called <strong>books</strong>.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code>curl -XPUT https://API_CREDENTIAL@scalr.api.appbase.io/<span class="token variable">$app</span>/books/1 --data-binary <span class="token string">\'{\n   "department_name": "Books",\n   "department_id": 1,\n   "name": "A Sample Book on Network Routing",\n   "price": 5595\n}\'</span>\n</code></pre>\n      </div>\n<p><code>scalr.api.appbase.io</code> is the domain for the Elasticsearch cluster, you can replace this with the location of your cluster domain.</p>\n<h3 id="data-mapping"><a href="#data-mapping" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Data Mapping</h3>\n<p>Data mapping is the process of specifying a schema for your data, which determines how fields are indexed and stored. While Elasticsearch auto-detects the schema based on the kind of JSON value through a process known as dynamic mapping, it is also possible to set this mapping statically. You can read more about mappings over <a href="https://www.elastic.co/guide/en/elasticsearch/reference/5.6/mapping.html">here</a>.</p>\n<p>Dejavu provides a GUI for setting the mapping of a new field, as well as viewing existing mappings.</p>\n<blockquote>\n<p><strong>Note</strong></p>\n<p>If you are coming from a SQL background, there are two things to keep in mind regarding <a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping.html">Elasticsearch mappings</a>:</p>\n<ol>\n<li>They are immutable. Once specified (or dynamically set), they can’t be changed.</li>\n<li>Being a full-text search engine as well as an aggregations engine, Elasticsearch supports specifying multiple mappings for a field. This allows it to store the same field in different ways, thus allowing for versatile querying.</li>\n</ol>\n</blockquote>\n<h4 id="custom-analyzers"><a href="#custom-analyzers" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Custom Analyzers</h4>\n<p>We recommend adding the following custom analyzers to your Elasticsearch index. We will use them when specifying mappings for a <code>$dataField</code> to be used for searching.</p>\n<p>The <code>autosuggest_analyzer</code> indexes the field by breaking each word into tokens of length [1, 20] always beginning with the first character of the word. This allows for fast suggestions retrieval in a <a href="/search-components/datasearch.html"><code>DataSearch</code></a> or <a href="/search-components/categorysearch.html"><code>CategorySearch</code></a> UI.</p>\n<blockquote>\n<p><strong>Note</strong></p>\n<p>If you are using dejavu/importer for indexing data, it already supports these custom analyzers with the <code>Text</code> and <code>SearchableText</code> datatypes.</p>\n</blockquote>\n<p>Adding custom analyzers requires you to first close the index with the following command:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>POST /:index/_close</code></pre>\n      </div>\n<p>followed by the actual addition of analyzers with:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>PUT <span class="token operator">/</span><span class="token punctuation">:</span>index<span class="token operator">/</span>_settings\n<span class="token punctuation">{</span>\n  <span class="token string">"analysis"</span> <span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">"analyzer"</span><span class="token punctuation">:</span><span class="token punctuation">{</span>\n        <span class="token string">"autosuggest_analyzer"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n            <span class="token string">"filter"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n                <span class="token string">"lowercase"</span><span class="token punctuation">,</span>\n                <span class="token string">"asciifolding"</span><span class="token punctuation">,</span>\n                <span class="token string">"autosuggest_filter"</span>\n            <span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token string">"tokenizer"</span><span class="token punctuation">:</span> <span class="token string">"standard"</span><span class="token punctuation">,</span>\n            <span class="token string">"type"</span><span class="token punctuation">:</span> <span class="token string">"custom"</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token string">"ngram_analyzer"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n            <span class="token string">"filter"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n                <span class="token string">"lowercase"</span><span class="token punctuation">,</span>\n                <span class="token string">"asciifolding"</span><span class="token punctuation">,</span>\n                <span class="token string">"ngram_filter"</span>\n            <span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token string">"tokenizer"</span><span class="token punctuation">:</span> <span class="token string">"standard"</span><span class="token punctuation">,</span>\n            <span class="token string">"type"</span><span class="token punctuation">:</span> <span class="token string">"custom"</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token string">"filter"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        <span class="token string">"autosuggest_filter"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n            <span class="token string">"max_gram"</span><span class="token punctuation">:</span> <span class="token string">"20"</span><span class="token punctuation">,</span>\n            <span class="token string">"min_gram"</span><span class="token punctuation">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span>\n            <span class="token string">"token_chars"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n                <span class="token string">"letter"</span><span class="token punctuation">,</span>\n                <span class="token string">"digit"</span><span class="token punctuation">,</span>\n                <span class="token string">"punctuation"</span><span class="token punctuation">,</span>\n                <span class="token string">"symbol"</span>\n            <span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token string">"type"</span><span class="token punctuation">:</span> <span class="token string">"edge_ngram"</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token string">"ngram_filter"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n            <span class="token string">"max_gram"</span><span class="token punctuation">:</span> <span class="token string">"9"</span><span class="token punctuation">,</span>\n            <span class="token string">"min_gram"</span><span class="token punctuation">:</span> <span class="token string">"2"</span><span class="token punctuation">,</span>\n            <span class="token string">"token_chars"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n                <span class="token string">"letter"</span><span class="token punctuation">,</span>\n                <span class="token string">"digit"</span><span class="token punctuation">,</span>\n                <span class="token string">"punctuation"</span><span class="token punctuation">,</span>\n                <span class="token string">"symbol"</span>\n            <span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token string">"type"</span><span class="token punctuation">:</span> <span class="token string">"ngram"</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>followed by opening of the index. It is important to open the index up for any indexing and search operations to occur.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-none"><code>POST /:index/_open</code></pre>\n      </div>\n<p>You can read more about this <a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-update-settings.html">over here</a>.</p>\n<h4 id="text-datatype-in-search-vs-aggregations"><a href="#text-datatype-in-search-vs-aggregations" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Text Datatype in Search v/s Aggregations</h4>\n<p>There are two different types of use-cases that Elasticsearch supports:</p>\n<ol>\n<li><strong>Search</strong> - We talked about this use-case in the above section. Here, we typically apply a search specific analyzer to get fast and accurate search results back. The field to be applied in the <code>dataField</code> prop for search specific components is of <code>Text</code> type (v5 and above) or of <code>String</code> analyzed type (v2).</li>\n<li><strong>Aggregations</strong> - Aggregations and sorting are operations that require using a non-analyzed string. The field to be applied in the <code>dataField</code> prop for aggregation specific components such as Lists is of <code>Keyword</code> type (v5 and above) or of <code>String</code> not-analyzed type (v2).</li>\n</ol>\n<blockquote>\n<p><strong>Note</strong></p>\n<p>If a <code>$dataField</code> is to be used both for searching and aggregating, it is recommended to create a <code>.raw</code> sub-field for a Text datatype field whose datatype is set as Keyword. And when aggregating (or sorting) is required, use <code>$dataField.raw</code> instead of <code>$dataField</code>.</p>\n<p>Starting with <code>v5</code>, Elasticsearch supports this as a default.</p>\n</blockquote>',frontmatter:{title:"Importing Data",next:"getting-started/reactivebase.html",prev:"getting-started/reactivesearch.html",nextTitle:"Base Component",prevTitle:"ReactiveSearch Quickstart"},fields:{path:"getting-started/Data.md",slug:"getting-started/data.html"}}},pathContext:{slug:"getting-started/data.html"}}}});
//# sourceMappingURL=path---getting-started-data-html-6676cabf12211b9a30cd.js.map