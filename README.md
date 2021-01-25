# Markdownpedia
Markdownpedia is a site similar to Wikipedia. All you got to do to edit a page is go to site/markdown and edit/add a page.

Then you create a pull request, and bam. You're done. Once a moderator (need some) approves of it, it'll be added to the site.

## Running locally
[<img src="https://gitpod.io/button/open-in-gitpod.svg" width="95" height="20" 
/>](https://gitpod.io/from-referrer/)
[![Run on Repl.it](https://repl.it/badge/github/mamamia5x/markdownpedia)](https://repl.it/github/mamamia5x/Award-Gen)

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
