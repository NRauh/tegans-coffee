---
title: "How to Make a Centered Pagination (with Jekyll)"
date: 2016-10-28
category: Jekyll
---

Here is a quick way how you can make make a pagination that indicates the current page with a few pages around it. This is specific example is done with the Liquid syntax in Jekyll, with pagination done via the Octopress Paginate plugin. But the concept is pretty simple, so you should be apple to apply it to most other templating engines.

![Pagination example](./pagination-example.png)

Here is what it will look like.

Create a div for your pagination, and a ul within that.

{% raw %}

```html
<div class="pagination">
	<ul>
	</ul>
</div>
```

Now within the <ul> tag, we're going to add links to the next and previous page, if those pages exist (note: `/blog/1` is an invalid url, so we have to be sure that the first page link goes to just `/blog/`).

```html
<ul>
	<!-- go back -->
	{% if paginator.previous_page %}
		<li>
			{% paginator.previous_page != 1 %}
				<a href="/blog/{{ paginator.previous_page }}">&lt;</a>
			{% else %}
				<a href="/blog/">&lt;</a>
			{% endif %}
		</li>
	{% endif %}
	
	<!-- go forward -->
	{% if paginator.next_page %}
		<li><a href="/blog/{{ paginator.next_page }}">&gt;</a></li>
	{% endif %}
</ul>
```

Now let's add links to the first and the last page, so people can quickly jump around. These links will only show if the user is not already on the first or last page.

Before the go back link add:

```html
{% if paginator.page != 1 %}
	<li><a href="/blog/">&lt;&lt;</a></li>
{% endif %}
```

After the go forward link:

```html
{% if paginator.page != paginator.total_pages %}
	<li><a href="/blog/{{ paginator.total_pages }}">&gt;&gt;
{% endif %}
```

Now it's time for the meat of pagination. This example is only going to show five pages total, but you can change the number on either side to adjust.

between the go back and forward links add:

```html
{% assign pagination_start = paginator.page | minus: 2 %}
{% if pagination_start == -1 or pagination_start == 0 %}
	{% assign pagination_start = 1 %}
{% endif %}
```

This gets the page number two pages before the current one, and ensures that if we won't have a page range that starts on a nonexistant page.

Below this add

```html
{% assign pagination_end = paginator.page | plus: 2 %}
{% if pagination_end > paginator.total_pages %}
	{% assign pagination_end = paginator.total_pages %}
{% endif %}
```

Much like with pagination_start, this gets to pages after the current page, but won't exceed the actual amount of pages.

We want to have at least five pages showing (assuming 5 or more pages exist), and currently this will only do that if the current page has two pages before and after (i.e. if on page one the range is only 1, 2, 3). So below the last code block add

```html
{% if pagination_end < 5 and paginator.total_pages > 5 %}
	{% assign pagination_end = 5 %}
{% endif %}
```

Now if there aren't two pages before the current page, there will be more pages after.

Ok, so we have a range of pages, now let's actually show them. To do this we're going to create a loop like so (again because `/blog/1` doesn't work, we're going to assign the href via a variable)

```html
{% for i in (pagination_start .. pagination_end) %}
	{% if i != 1 %}
		{% assign page_href = "/blog/" | append: i %}
	{% else %}
		{% assign page_href = "/blog" %}
	{% endif %}
	
	{% if i == paginator.page %}
		<li class="current-page"><a href="{{ page_href }}">{{ i }}</a></li>
	{% else %}
		<li><a href="{{ page_href }}">{{ i }}</a></li>
	{% endif %}
{% endfor %}
```

This shows the surrounding page with proper links, and lets us style the current page differently.

## Complete Code

```html
<div class="pagination">
	<ul>
		{% if paginator.page != 1 %}
			<li><a href="/blog/">&lt;&lt;</a></li>
		{% endif %}
		{% if paginator.previous_page %}
			<li>
				{% if paginator.previous_page != 1 %}
					<a href="/blog/{{ paginator.previous_page }}">&lt;</a></li>
				{% else %}
					<a href="/blog/">&lt;</a>
				{% endif %}
			</li>
		{% endif %}

		{% assign pagination_start = paginator.page | minus: 2 %}
		{% if pagination_start == -1 or pagination_start == 0 %}
			{% assign pagination_start = 1 %}
		{% endif %}

		{% assign pagination_end = paginator.page | plus: 2 %}
		{% if pagination_end > paginator.total_pages %}
			{% assign pagination_end = paginator.total_pages %}
		{% endif %}
		{% if pagination_end < 5 and paginator.total_pages > 5 %}
			{% assign pagination_end = 5 %}
		{% endif %}

		{% for i in (pagination_start .. pagination_end) %}
			{% if i != 1 %}
				{% assign page_href = "/blog/" | append: i %}
			{% else %}
				{% assign page_href = "/blog" %}
			{% endif %}

			{% if i == paginator.page %}
				<li class="current-page"><a href="{{ page_href }}">{{ i }}</a></li>
			{% else %}
				<li><a href="{{ page_href }}">{{ i }}</a></li>
			{% endif %}
		{% endfor %}

		{% if paginator.next_page %}
			<li><a href="/blog/{{ paginator.next_page }}">&gt;</a></li>
		{% endif %}
		{% if paginator.page != paginator.total_pages %}
			<li><a href="/blog/{{ paginator.total_pages }}">&gt;&gt;</a></li>
			{% endif %}
	</ul>
</div>
```

A quick example of how to style it can be done like this with your CSS

```css
.pagination {
  width: 100%;
  padding: 0 20px;
  text-align: center;
}
.pagination ul {
  list-style: none;
}
.pagination ul li {
  display: inline
  margin: 0 5px;
}
.pagination ul li a {
  color: black;
  text-decoration: none;
}
.pagination ul li a:hover {
  color: grey;
  text-decoration: underline;
}
.pagination ul li.current-page a {
  color: red;
}
```
{% endraw %}
