Markdown
========
##### From Wikipedia, the free encyclopedia

*For the marketing term, see [Price markdown](https://en.wikipedia.org/wiki/Price_markdown).*

**Markdown** is a [lightweight markup language](https://en.wikipedia.org/wiki/Lightweight_markup_language) for creating [formatted text](https://en.wikipedia.org/wiki/Formatted_text) using a [plain-text editor](https://en.wikipedia.org/wiki/Text_editor). [John Gruber](https://en.wikipedia.org/wiki/John_Gruber) and [Aaron Swartz](https://en.wikipedia.org/wiki/Aaron_Swartz) created Markdown in 2004 as a [markup language](https://en.wikipedia.org/wiki/Markup_language) that is appealing to human readers in its source code form. [[9]] Markdown is widely used in [blogging](https://en.wikipedia.org/wiki/Blog), [instant messaging](https://en.wikipedia.org/wiki/Instant_messaging), [online forums](https://en.wikipedia.org/wiki/Online_forums), [collaborative software](https://en.wikipedia.org/wiki/Collaborative_software), [documentation](https://en.wikipedia.org/wiki/Documentation) pages, and [readme files](https://en.wikipedia.org/wiki/README).

Since the initial description of Markdown [[10]] contained ambiguities and unanswered questions, the implementations that appeared over the years have subtle differences and many come with syntax extensions.

## History
----------
In 2002 [Aaron Swartz](https://en.wikipedia.org/wiki/Aaron_Swartz) created [atx](http://www.aaronsw.com/2002/atx/intro), "the true structured text format". Swartz and [John Gruber](https://en.wikipedia.org/wiki/John_Gruber) then worked together to create the Markdown language in 2004,[[2]][[3]] with the goal of enabling people "to write using an easy-to-read and easy-to-write plain text format, optionally convert it to structurally valid [XHTML](https://en.wikipedia.org/wiki/XHTML) (or [HTML](https://en.wikipedia.org/wiki/HTML))".[[4]] 

Its key design goal is readability – that the language be readable as-is, without looking like it has been marked up with tags or formatting instructions, [[9]] unlike text formatted with a [markup language](https://en.wikipedia.org/wiki/Markup_language), such as [Rich Text Format](https://en.wikipedia.org/wiki/Rich_Text_Format) (RTF) or HTML, which have obvious tags and formatting instructions. To this end, its main inspiration is the existing [conventions](https://en.wikipedia.org/wiki/Convention_(norm)) for marking up [plain text](https://en.wikipedia.org/wiki/Plain_text) in [email](https://en.wikipedia.org/wiki/Email), though it also draws from earlier markup languages, notably [setext](https://en.wikipedia.org/wiki/Setext), [Textile](https://en.wikipedia.org/wiki/Textile_(markup_language)), and [reStructuredText](https://en.wikipedia.org/wiki/ReStructuredText).[[9]]

Gruber wrote a [Perl](https://en.wikipedia.org/wiki/Perl) script, `Markdown.pl`, which converts marked-up text input to valid, [well-formed](https://en.wikipedia.org/wiki/XML#Well-formedness_and_error-handling) XHTML or HTML and replaces angle brackets '`<`' '`>`' and [ampersands](https://en.wikipedia.org/wiki/Ampersand) '`&`' with their corresponding [character entity references](https://en.wikipedia.org/wiki/Character_entity_references). It can take the role of a standalone script, a plugin for [Blosxom](https://en.wikipedia.org/wiki/Blosxom) or a [Movable Type](https://en.wikipedia.org/wiki/Movable_Type), or of a text filter for [BBEdit](https://en.wikipedia.org/wiki/BBEdit).[[4]]

## Standardization
------------------
Markdown has been characterised by an informal specification[[11]] and a reference implementation for conversion to HTML. Over time, many Markdown implementations have appeared. People developed these mostly driven by the need for additional features on top of the base syntax—such as tables, footnotes, definition lists (technically HTML description lists), and Markdown inside HTML blocks. The behavior of some of these diverges from the reference implementation. At the same time, a number of ambiguities in the informal specification have attracted attention.[[12]] These issues spurred the creation of tools such as Babelmark [[13]][[14]] to compare the output of various implementations, [[15]] and an effort by some developers of Markdown parsers for standardisation. However, Gruber has argued that complete standardization would be mistaken: "Different sites (and people) have different needs. No one syntax would make all happy."[[16]] 

In March 2016 two relevant informational Internet [RFCs](https://en.wikipedia.org/wiki/Request_for_Comments) were published: 
- [RFC 7763](https://tools.ietf.org/html/rfc7763) introduced [MIME](https://en.wikipedia.org/wiki/MIME) type `text/markdown` with the original variant. 
- [RFC 7764](https://tools.ietf.org/html/rfc7764) discussed and registered the variants [MultiMarkdown](https://en.wikipedia.org/wiki/MultiMarkdown), GitHub Flavored Markdown (GFM), [Pandoc](https://en.wikipedia.org/wiki/Pandoc), [CommonMark](https://en.wikipedia.org/wiki/Markdown#CommonMark), and Markdown Extra among others.[[17]]

### **CommonMark** 
From 2012, a group of people, including [Jeff Atwood](https://en.wikipedia.org/wiki/Jeff_Atwood) and [John MacFarlane](https://en.wikipedia.org/wiki/John_MacFarlane_(philosopher)), launched what Atwood characterized as a standardization effort.[[20]] A community website now aims to "document various tools and resources available to document authors and developers, as well as implementors of the various Markdown implementations".[[21]] In September 2014, Gruber objected to the usage of "Markdown" in the name of this effort and it was rebranded as a new dialect named CommonMark.[[22]][[23]] CommonMark.org published several versions of a specification, reference implementation, and test suite, and "[plans] to announce a finalized 1.0 spec and test suite in 2019."[[24]] No 1.0 spec has since been released as major issues still remain unsolved.[[25]] Nonetheless, the following sites and projects have adopted CommonMark: Discourse, GitHub, GitLab, Reddit, Qt, Stack Exchange (Stack Overflow), and Swift.

## Variants
-----------
Sites like [GitHub](https://en.wikipedia.org/wiki/GitHub), [Bitbucket](https://en.wikipedia.org/wiki/Bitbucket), [Reddit](https://en.wikipedia.org/wiki/Reddit), [Diaspora](https://en.wikipedia.org/wiki/Diaspora_(social_network)), [Stack Exchange](https://en.wikipedia.org/wiki/Stack_Exchange), [OpenStreetMap](https://en.wikipedia.org/wiki/OpenStreetMap), and [SourceForge](https://en.wikipedia.org/wiki/SourceForge) use variants of Markdown to facilitate discussion between users. [[26]][[27]][[28]][[29]] Depending on implementation, basic inline [HTML tags](https://en.wikipedia.org/wiki/HTML_tag) may be supported.[[30]] Italic text may be implemented by `_underscores_` and/or `*single-asterisks*`.[[31]]

### **GitHub Flavored Markdown**
In 2017, GitHub released a formal specification of their GitHub Flavored Markdown (GFM) that is based on CommonMark.[[26]] It is a [strict superset](https://en.wikipedia.org/wiki/Superset) of CommonMark, following its specification exactly except for tables, strikethrough, autolinks and task lists, which GFM adds as extensions.[[32]] GitHub also changed the parser used on their sites accordingly, which required that some documents be changed. For instance, GFM now requires that the [hash symbol](https://en.wikipedia.org/wiki/Number_sign) that creates a heading be separated from the heading text by a space character.

### **Markdown Extra**
Markdown Extra is a [lightweight markup language](https://en.wikipedia.org/wiki/Lightweight_markup_language) based on Markdown implemented in [PHP](https://en.wikipedia.org/wiki/PHP) (originally), [Python](https://en.wikipedia.org/wiki/Python_(programming_language)) and [Ruby](https://en.wikipedia.org/wiki/Ruby_(programming_language)).[[33]] It adds features not available with plain Markdown syntax. Markdown Extra is supported in some [content management systems](https://en.wikipedia.org/wiki/Content_management_system) such as, for example, [Drupal](https://en.wikipedia.org/wiki/Drupal) [[34]] and [TYPO3](https://en.wikipedia.org/wiki/TYPO3).[[35]]

Markdown Extra adds the following features to Markdown:
- Markdown markup inside [HTML](https://en.wikipedia.org/wiki/HTML) blocks
- Elements with id/class attribute 
- "Fenced code blocks" that span multiple lines of code 
- Tables [[36]] 
- Definition lists 
- Footnotes 
- Abbreviations

## Implementations
------------------
Implementations of Markdown are available for over a dozen programming languages; in addition, many platforms and frameworks support Markdown.[[37]] For example, Markdown plugins exist for every major blogging platform.[[38]] 

While Markdown is a minimal markup language and is read and edited with a normal text editor, there are specially designed editors that preview the files with styles, which are available for all major platforms. Many general purpose text and code editors have syntax highlighting plugins for Markdown built into them or available as optional download. Editors may feature a side-by-side preview window or render the code directly in a [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG) fashion.

- [JotterPad](https://en.wikipedia.org/wiki/JotterPad) – an online WYSIWYG editor that supports Markdown and fountain [39] 
- [Doxygen](https://en.wikipedia.org/wiki/Doxygen) – a source code documentation generator which supports Markdown with extra features [[40]] 
- [RStudio](https://en.wikipedia.org/wiki/RStudio) – an [IDE](https://en.wikipedia.org/wiki/Integrated_development_environment) for [R](https://en.wikipedia.org/wiki/R_(programming_language)). It provides a [C++](https://en.wikipedia.org/wiki/C%2B%2B) [wrapper function](https://en.wikipedia.org/wiki/Wrapper_function) for a markdown variant called sundown [[41]] 
- GitHub Flavored Markdown (GFM) ignores underscores in words, and adds [syntax highlighting](https://en.wikipedia.org/wiki/Syntax_highlighting), [task lists](https://en.wikipedia.org/wiki/Task_list), [[42]] and tables [[26]] 
- Discount – a [C](https://en.wikipedia.org/wiki/C_(programming_language)) implementation [[43]][[44]] 
- MarkAPL – a converter written in Dyalog [APL](https://en.wikipedia.org/wiki/APL_(programming_language)). It supports fenced blocks, smart typography, link references, and special attributes, and can generate a table of contents [[45]] 
- PHP Markdown – a library package that includes the PHP Markdown parser and its sibling PHP Markdown Extra with additional features [[46]] 
- Markdig – a .NET library that follows the CommonMark specifications, and includes a collection of extensions and the ability for the user to create their own [[47]] 
- Showdown [[48]] and Smartdown [[49]] — Markdown renderers in JavaScript 
- hackmd.io – an online Markdown editor that supports Markdown with extra features [[50]] 
- gomarkdown – Markdown parser and HTML renderer in Go [[51]] 
- Markdeep, with support for calendars, equations and diagrams [[52]]

[2]: http://www.aaronsw.com/weblog/001189
[3]: https://web.archive.org/web/20040402182332/http://daringfireball.net/projects/markdown/
[4]: https://web.archive.org/web/20040402182332/http://daringfireball.net/projects/markdown/
[9]: http://daringfireball.net/projects/markdown/syntax#philosophy
[10]: https://daringfireball.net/2004/03/introducing_markdown
[11]: https://daringfireball.net/projects/markdown/syntax
[12]: https://github.github.com/gfm/#why-is-a-specneeded-
[13]: http://johnmacfarlane.net/babelmark2/
[14]: https://babelmark.github.io
[15]: http://johnmacfarlane.net/babelmark2/faq.html
[16]: https://twitter.com/gruber/status/507670720886091776
[17]: https://www.iana.org/assignments/markdown-variants/markdown-variants.xhtml
[20]: http://www.codinghorror.com/blog/2012/10/the-future-of-markdown.html
[21]: https://markdown.github.io/
[22]: http://blog.codinghorror.com/standard-markdown-is-now-common-markdown/
[23]: http://www.infoq.com/news/2014/09/markdown-commonmark
[24]: http://commonmark.org/
[25]: https://talk.commonmark.org/t/issues-we-mustresolve-before-1-0-release-6-remaining/1287
[26]: https://github.github.com/gfm/
[27]: https://www.reddit.com/r/reddit.com/comments/6ewgt/reddit_markdown_primer_or_how_do_you_do_all_that/
[28]: https://stackoverflow.com/editing-help
[29]: http://sourceforge.net/p/forge/documentation/markdown_syntax/
[30]: https://daringfireball.net/projects/markdown/syntax#html
[31]: https://www.markdownguide.org/basic-syntax/#italic
[32]: https://githubengineering.com/a-formal-spec-for-github-markdown/
[33]: https://michelf.ca/projects/php-markdown/extra
[34]: https://drupal.org/project/markdowneditor
[35]: https://extensions.typo3.org/extension/markdown_content/
[36]: https://michelf.ca/projects/php-markdown/extra
[37]: https://www.w3.org/community/markdown/wiki/MarkdownImplementations
[38]: https://arstechnica.com/information-technology/2014/10/markdown-throwdown-what-happens-when-foss-software-gets-corporate-backing/
[39]: https://blog.jotterpad.app/why-need-wysiwyg-markdown-fountain-editor/
[40]: http://doxygen.nl/manual/markdown.html
[41]: https://github.com/rstudio/rstudio/blob/master/src/cpp/core/markdown/Markdown.cpp
[42]: https://help.github.com/articles/writing-on-github
[43]: https://www.pell.portland.or.us/~orc/Code/discount/
[44]: https://github.com/Orc/discount
[45]: https://github.com/aplteam/MarkAPL
[46]: https://michelf.ca/projects/php-markdown/
[47]: https://github.com/lunet-io/markdig
[48]: https://showdownjs.com/
[49]: https://smartdown.io/
[50]: https://hackmd.io/c/tutorials/%2Fs%2Ffeatures
[51]: https://github.com/gomarkdown/markdown
[52]: https://casual-effects.com/markdeep/


