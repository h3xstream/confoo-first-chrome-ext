---
theme: gaia
_class: lead
backgroundColor: #fff
backgroundImage: url('images/hero-background.svg')
marp: true
footer: "Confoo 2023"
---

![bg left:40% 80%](images/confoo_color.png)

# **Developing Your First Chrome Extension**

Presented by Philippe Arteau

---

# About Me

 - Security Engineer at ServiceNow
 - Interested in application security, automation, crypto, ...
 - Open-source developer
    - **Find Security Bugs**: Static Analysis for Java applications
    - **Burp and ZAP Plugins**: (Retire.js, CSP Auditor, Reissue Request Scripter, …)

---

# Agenda

 1. Why developed a Chrome extension?
 2. Anatomy of Chrome extension
    - `manifest.json`
    - Common components: popup, service worker, pages
 3. Tooling
 4. Delivery options


--- 
![bg left:35%](images/question.jpg)
<!-- _class: lead -->
# Why develop a Chrome extension?

---

# Why develop a Chrome extension?

**Non-technical reasons**

 - A great way to extended an web applications
    - Code repository, mail client, timesheet, etc.
 - Browsers are the main software used by most "office jobs"


---
 
# Why develop a Chrome extension?

**Technical reasons**

 - You can use your favorite Frontend framework (Vue, React, Angular, ...)
 - A great addition to an existing CLI
    - It can share code with other JS projects.
 - Lighter than yet another Electron application

---

# Some ideas:

 - Shortcuts for the QA team.
 - Tool to help complete timesheet with few clicks.
 - 

---
<!-- _class: lead -->

## 🎬 Demo

---
![bg left:35%](images/xray1.jpg)
<!-- _class: lead -->
# Anatomy of Chrome extension

---

## Manifest

 - 


---
![bg left:35%](images/wrench.jpg)
<!-- _class: lead -->
# Build

---

## Webpack

 - 

---

## Webpack fallback

 - 

---

## Webpack fallback

```js
module.exports = {
  //...
  resolve: {
    fallback: {
      assert: require.resolve('assert'),
      buffer: require.resolve('buffer'),
      console: require.resolve('console-browserify'),
      constants: require.resolve('constants-browserify'),
      crypto: require.resolve('crypto-browserify'),
      domain: require.resolve('domain-browser'),
      events: require.resolve('events'),
      http: require.resolve('stream-http'),
  //...
```
More info: [Webpack configuration: resolve fallback](https://webpack.js.org/configuration/resolve/#resolvefallback)

---
![bg left:35%](images/glasses.jpg)
<!-- _class: lead -->
## Conclusion


---

## Conclusion

 - 

---

## There is more...

 - This presentation is just a small sample of the possibilities
 - Suggested presentations:


---

![bg right:35%](images/race.jpg)
# The End !

## Social

 - Twitter [@h3xstream](https://twitter.com/h3xstream)
 - Website [https://blog.h3xstream.com](https://blog.h3xstream.com/)
