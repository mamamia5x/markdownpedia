<img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/><img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/><img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/><img alt="NodeJS" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/><img alt="Markdown" src="https://img.shields.io/badge/markdown-%23000000.svg?&style=for-the-badge&logo=markdown&logoColor=white"/><img alt="Repl.it" src="https://img.shields.io/badge/Repl.it%20-%230D101E.svg?&style=for-the-badge&logo=Repl.it&logoColor=white"/>![GitHub last commit (branch)](https://img.shields.io/github/last-commit/mamamia5x/markdownpedia/main?style=for-the-badge)![issues](https://img.shields.io/github/issues/mamamia5x/markdownpedia?style=for-the-badge "Issues")

# Markdownpedia
Markdownpedia is a site similar to Wikipedia. All you got to do to edit a page is go to site/markdown and edit/add a page.

This site was made for contributions. You can make an article on anything (Under R). This site is to be shaped by the community, *you guys*. 

Then you create a pull request, and bam. You're done. Once a moderator (need some) approves of it, it'll be added to the site.

You can go to [https://status.markdownpedia.tk/](https://status.markdownpedia.tk/) to check the status of the site.

## Running locally

You can open it with Gitpod.io or Repl.it and it'll run on those sites just fine.

I don't know if it's a good idea, because these might get big. Editing a page can be done on github, and soon with an editor.

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
---
## Adding Pages to the Site

1. Go to [markdownpedia's repository](https://github.com/mamamia5x/markdownpedia) and fork it.  

2. Go to your forked repository.

3. In your forked repository, go to the _site_ folder.

  <img src="https://github.com/mamamia5x/markdownpedia/blob/main/img/tut1.jpg?raw=true" width=500/>

4. Then go to  the _markdown_ folder.

  <img src="https://github.com/mamamia5x/markdownpedia/blob/main/img/tut2.jpg?raw=true" width=500/>

5. Here press _Add file_.  

  <img src="https://github.com/mamamia5x/markdownpedia/blob/main/img/tut3.jpg?raw=true" width=500/>

6. Press _Create new file_

7. At the _Name of your file_, type in the name of the article. Then type /index.md

  <img src="https://github.com/mamamia5x/markdownpedia/blob/main/img/tut4.jpg?raw=true" width=500/>


8. Add a new tab and go to [the editor](https://markdownpedia.tk/pages/editor/) and type in the files content.

9. Copy the text and paste in the other GitHub tab.

10. Press _Propose new file_ and then press _Create Pull Request_.

11. Your file will be reviewed and then added if there is no issue.

---

## Useful resources:

+ [How to fork a repository](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)

+ [How to create a pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork)