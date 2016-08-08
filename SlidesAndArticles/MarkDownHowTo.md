<head>
  <title>HTML Article Template</title>
  <meta charset="utf-8">

  <link href="https://rawgit.com/blackscout111/WebDev/master/SlidesAndArticles/style.css" rel="stylesheet" type="text/css"/>
  <!-- <link href="style.css" rel="stylesheet" type="text/css"/> -->

  <!-- Article style -->
  <link href="https://rawgit.com/blackscout111/WebDev/master/SlidesAndArticles/style_article.css" rel="stylesheet" type="text/css"/>
  <!-- <link href="style_article.css" rel="stylesheet" type="text/css"/> -->

  <!-- Script for catching JS errors -->
  <script src="https://rawgit.com/blackscout111/WebDev/master/error_alert.js"></script>
  <!-- <script src="../error_alert.js"></script> -->

  
  <!-- MathJax -->
  <script src="http://cdn.mathjax.org/mathjax/latest/MathJax.js"></script>
  <script src="https://rawgit.com/blackscout111/WebDev/master/mathjax_config.js"></script>
  <!-- <script src="../mathjax_config.js"></script> -->
</head>

## Markdown Basics

**Markdown** is a plain text formatting syntax created by John Gruber, aiming to provide a easy-to-read and feasible markup. The original Markdown syntax specification can be found [here](http://daringfireball.net/projects/markdown/syntax).

### Line Breaks
To force a line break, put two spaces and a newline (return) at the end of the line.

These lines
won't break

These lines  
will break


### Strong and Emphasize

**Strong**: `**Strong**` or `__Strong__` (Command-B)  
*Emphasize*: `*Emphasize*` or `_Emphasize_`[^emphasize] (Command-I)

### Headers (like this one!)

	Header 1
	========

	Header 2
	--------

or

	# Header 1
	## Header 2
	### Header 3
	#### Header 4
	##### Header 5
	###### Header 6



### Links and Email
#### Inline
Just put angle brackets around an email and it becomes clickable: <bclifford111@gmail.com>  
`<bclifford111@gmail.com>`  

Same thing with urls: <http://www.google.com>  
` <http://www.google.com>`  

Perhaps you want to some link text like this: [Google](http://www.google.com "Title")  
`[Google](http://www.google.com "Title")` (The title is optional)  


#### Reference style
Sometimes it looks too messy to include big long urls inline, or you want to keep all your urls together.  

Make [a link][arbitrary_id] `[a link][arbitrary_id]` then on it's own line anywhere else in the file:  
`[arbitrary_id]: http://www.google.com "Title"`
  
If the link text itself would make a good id, you can link [like this][] `[like this][]`, then on it's own line anywhere else in the file:  
`[like this]: http://www.google.com`  

[arbitrary_id]: https://www.google.com/ "Title"
[like this]: http://www.google.com/

**Links can also be used for files**


### Images
#### Inline
It's easy to add images like this one

![This is google's logo](http://www.google.com/images/srpr/logo11w.png)

The syntax for this is:

`![Alt Image Text](path/or/url/to.jpg "Optional Title")`

#### Reference style
You can also use a referenced syntax.
`![Alt Image Text][image-id]`  
on it's own line elsewhere:  
`[image-id]: path/or/url/to.jpg "Optional Title"`


### Lists

* Lists must be preceded by a blank line (or block element)
* Unordered lists start each item with a `*`
- `-` works too
	* Indent a level to make a nested list
		1. Ordered lists are supported.
		2. Start each item (number-period-space) like `1. `
		42. It doesn't matter what number you use, I will render them sequentially
		1. So you might want to start each line with `1.` and let me sort it out

Here is the code:

    * Lists must be preceded by a blank line (or block element)
    * Unordered lists start each item with a `*`
    - `-` works too
    	* Indent a level to make a nested list
    		1. Ordered lists are supported.
    		2. Start each item (number-period-space) like `1. `
    		42. It doesn't matter what number you use, I will render them sequentially
    		1. So you might want to start each line with `1.` and let me sort it out  
              

### Block Quote

> Angle brackets `>` are used for block quotes.  
Technically not every line needs to start with a `>` as long as
there are no empty lines between paragraphs.  
> Looks kinda ugly though.
> > Block quotes can be nested.  
> > > Multiple Levels
>
> Most markdown syntaxes work inside block quotes.
>
> * Lists
> * [Links][arbitrary_id]
> * Etc.

Here is the code:

    > Angle brackets `>` are used for block quotes.  
    Technically not every line needs to start with a `>` as long as
    there are no empty lines between paragraphs.  
    > Looks kinda ugly though.
    > > Block quotes can be nested.  
    > > > Multiple Levels
    >
    > Most markdown syntaxes work inside block quotes.
    >
    > * Lists
    > * [Links][arbitrary_id]
    > * Etc.

  
  
### Inline Code
`Inline code` is indicated by surrounding it with backticks:  
`` `Inline code` ``

If your ``code has `backticks` `` that need to be displayed, you can use double backticks:  
```` ``Code with `backticks` `` ````  (mind the spaces preceding the final set of backticks)


### Block Code
If you indent at least four spaces or one tab, I'll display a code block.

	print('This is a code block')
	print('The block must be preceded by a blank line')
	print('Then indent at least 4 spaces or 1 tab')
		print('Nesting does nothing. Your code is displayed Literally')

### Horizontal Rules
If you type three asterisks `***` or three dashes `---` on a line, I'll display a horizontal rule:

***


### TeX-like Math Syntax
Here's an inline equation: the plank equation $E = \hbar\omega$ describes the relation between frequency and energy.

Here's are some numbered equations: Einstein's favorite
\begin{equation}
  E = \gamma m c^2 \ge 0,
\end{equation}

and our favorite
\begin{equation}
  s(\k,t) = \int_{-\infty}^{\infty} { \rho( \x, t ) e^{-i2\pi \k \cdot \x } d\x }.
\end{equation}

We can also write theorems and definitions. Heres a theorem:
<div class="theorem">
    There are no natural numbers
    $\natural = (1, 2, 3, \ldots)$
    $x$, $y$, and $z$ such that
    $x^n + y^n = z^n$, in which $n$
    is a natural number greater than 2.
</div>
<div class="definition">
    A set $C$ is <i>convex</i> if for all
    $x,y \in C$ and for all
    $\alpha \in [0,1]$ the point
    $\alpha x + (1-\alpha) y \in C$.
</div>


