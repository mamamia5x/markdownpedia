# Markdownpedia
Markdownpedia is a site similar to Wikipedia. All you got to do to edit a page is go to site/markdown and edit/add a page.

This site was made for contributions. You can make an article on anything (Under R). This site is to be shaped by the community, *you guys*. 

Then you create a pull request, and bam. You're done. Once a moderator (need some) approves of it, it'll be added to the site.

You can go to [https://status.markdownpedia.tk/](https://status.markdownpedia.tk/) to check the status of the site.

## Running locally
[<img src="https://gitpod.io/button/open-in-gitpod.svg" width="95" height="20" 
/>](https://gitpod.io/from-referrer/)

You can open it with Gitpod or Repl.it and it'll run on those sites just fine.

I don't know if it's a good idea, becaue these might get big. Editing a page can be done on github, and soon with an editor.

First clone the repository.
```sh
git clone https://github.com/mamamia5x/markdownpedia
```
Then cd into markdownpedia
```sh
cd markdownpedia
```
Then install everything
```sh
npm install
```
Now everything should be set up.

To start the server and view all the pages, run 
```sh
npm run serve
```
To convert markdown files to html files run
```sh
npm run convert
```

## Contributing
If you wish to contribute to Markdownpedia. There are 2 types of contributions, site and markdown.

### Site
Site contributions are done to the back-end if you will. This stuff is never seen by going to the site, but it is what makes the site work. An example would be updating the template.html file.

### Markdown
Markdown changes are changes down to site/markdown files. These files make up the site, which we all see. 
