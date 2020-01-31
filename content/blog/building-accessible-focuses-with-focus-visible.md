---
title: Building Accessible Focuses with :focus-visible
date: 
categories:
- accessibility
- frontend
published: false

---
Having a clear border on a focused element is a very low hanging fruit to improve the accessibility of a website.

Browsers usually add some sort of border when an element is focused, but what it actually looks like is inconsistent between browsers or operating systems. But it’s not really a challenge to override these styles for consistency.

If you're using a framework for styles, it probably already customizes or gets rid of the default border for `button` and `input` elements. However some frameworks (like Bootstrap) don't make the focus consistent for all focusable elements (`a` tags, or elements with `tabindex` for example).

_Image of default browser focus on element and input_

The easiest way to make every focusable element have a consistent border is to just add a global selector near the top of your styles.

    *:focus {
      outline: 0.125rem solid red;
    }

_Image of new styles_

The specificity of this is really low, so you wont be fighting your css to have borders focuses that aren't a red border for inputs.

Which is to say, if you’re using Bootstrap or some other framework, add this before importing Bootstrap stuff and you'll be set.

***

However, we can take this a step further.

At the moment, if I have something like a header logo that links to my homepage, when a user clicks or taps on it, they’ll also see the red outline. Most people that would need this on non-input elements are likely to be using a keyboard to navigate.

So we can use the [`:focus-visible`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible) pseudo-selector instead of just `:focus`. What this will let us do is apply styles apply different styles on an element that's focused from tabbing on a keyboard than an element that's focused by clicking.

_image or video demonstrating_

However, at this time, support for `:focus-visible` is pretty spotty, and is usually behind a setting the user has to explicitly enable.

BUT we can use a polyfill for it. [https://github.com/WICG/focus-visible](https://github.com/WICG/focus-visible "WICG/focus-visible")

It's maybe not a polyfill in the truest sense of the word. It's not a drop-in fix for not having `:focus-visible` available, but it lets you create very similar CSS that should be reusable for actual `:focus-visible`.

***

_Using focus-visible polyfill and a bit of how it works_