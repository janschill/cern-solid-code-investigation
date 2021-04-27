# Indico Solid Autocomplete

* The form is old Angular code, form is rendered not with the initial page load
  * https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
* Objects can be things as well, getUrl, then getThing

```js
const myDataset = await getSolidDataset(cardUrl)
const profile = getThing(myDataset, `${cardUrl}#me`)
const address = (getThing(myDataset, getUrl(profile, VCARD.hasAddress)))
const region = getStringNoLocale(address, VCARD.region)
```
