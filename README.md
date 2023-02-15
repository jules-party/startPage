# startPage
A simple startpage using HTML, CSS, and TS

# Setting up

```bash
git clone https://github.com/jules-party/startPage
cd startPage

# You can either do:
npm install typescript --save-dev
# or
npm install -g typescript

# Then run this to compile typescript files
tsc
```

# Changing this to your newtab page (Firefox, Chrome)
**Warning!** I have no experience with setting up new tab with chrome, please make a issue giving correct instructions for chrome.

## Firefox
[Source](https://konfou.xyz/posts/local-firefox-new-tab-page/)
### Windows 10/11
- Go to `C:\Program Files\Mozilla Firefox\defaults\pref`
- Create new file called `autoconfig.js`
- Paste this inside the file:
```js
pref("general.config.filename", "autoconfig.cfg");
pref("general.config.obscure_value", 0);
pref("general.config.sandbox_enabled", false);
```
- Now, go to `C:\Program Files\Mozilla Firefox`
- Create a new file called `autoconfig.cfg`
- Paste this inside it:
```js
// skip line -- required comment
var { classes:Cc, interfaces:Ci, utils:Cu } = Components;
try {
  Cu.import("resource:///modules/AboutNewTab.jsm");
  AboutNewTab.newTabURL = "file:///C:\Users\User\path\to\index.html";
} catch (e) {
  Cu.reportError(e);
}
```

### Linux
- Go to `/usr/lib/firefox/defaults/pref`
- Create new file called `autoconfig.js`
- Paste this inside the file:
```js
pref("general.config.filename", "autoconfig.cfg");
pref("general.config.obscure_value", 0);
pref("general.config.sandbox_enabled", false);
```
- Now, go to `/usr/lib/firefox`
- Create a new file called `autoconfig.cfg`
- Paste this inside it:
```js
// skip line -- required comment
var { classes:Cc, interfaces:Ci, utils:Cu } = Components;
try {
  Cu.import("resource:///modules/AboutNewTab.jsm");
  AboutNewTab.newTabURL = "file:///home/user/path/to/index.html";
} catch (e) {
  Cu.reportError(e);
}
```

### MacOS
Please open a issue giving info on how to do this on MacOS!

## Chrome
[Source](https://superuser.com/questions/907234/change-chrome-new-tab-page-to-local-file)

- [Clone](https://github.com/jules-party/startPage#setting-up) this repo
- Create new file called `manifest.json`
- Paste this in `manifest.json`
```json
{
  "name": "My custom new tab page",
  "description": "Overrides the new tab page",
  "version": "0.1",
  "incognito": "split",
  "chrome_url_overrides": {
    "newtab": "index.html"
  },
  "manifest_version": 2
}
```
- Go to `chrome://extensions` and click the `Developer mode` checkbock found on the top right.
- Click `Load unpacked extension...`
- Navigate to your folder and click select

# Credits
[local Firefox New Tab page](https://konfou.xyz/posts/local-firefox-new-tab-page/)

[Change Chrome New Tab Page to local file](https://superuser.com/questions/907234/change-chrome-new-tab-page-to-local-file)