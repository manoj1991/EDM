# Kant Changelog

## 1.0.1

### Added

* **NEW Template** : Valentine's Day
    *  all versions included: HTML, MailChimp, Campaign Monitor, MyMail, StampReady
* StampReady individual template .zip files.
    * While you always start with a blank canvas in the StampReady Builder, these individual zips will provide you with the draggable module thumbnails in the exact order as you see them in the demo.
    * More, since some demos show customised styling for some modules, this will give you that exact design to work with, in StampReady as well (all other integrations were already providing these).

### Updated

* Fixed the `.mobile-collapsed` responsive helper class, so that it actually works (see the Pine Framework [commit](https://github.com/ThemeMountain/tm-pine/commit/903bad3efa6a5bd0a2316f60c416849efa4f7103) )
* Fixed some preheader spacers that had `line-height: 0;`, thus causing rendering issues in Outlook 2016
* MailChimp, MyMail, and StampReady integration documentation, to reflect the new folder/files structure

### Removed

* `mailchimp/templates/html` - you have the same thing in the .zip file(s), so this was redundant. Simply unzip if you need to view/edit those files.
* `mymail/templates/html` - also redundant
* `stampready/templates/html` - also redundant

### Files Changed

* **.mobile-collapsed** fix : all templates and base layout HTML files, as well as HTML files in their corresponding ready-to-import integration .zip files
* Preheaders **line-height** fix:
    * `campaign-monitor/sections/preheaders/preheader-social.html`
    * `campaign-monitor/templates/all-in-one/marketing/all-in-one.html`
    * `campaign-monitor/templates/marketing/agency-alt/agency-alt.html`
    * `campaign-monitor/templates/marketing/ecommerce/ecommerce.html`
    * `campaign-monitor/templates/marketing/mobile-app/mobile-app.html`
    * `campaign-monitor/templates/marketing/startup-alt/startup-alt.html`
    * `campaign-monitor/templates/marketing/valentines/valentines.html`
    * `html/sections/preheaders/preheader-social.html`
    * `html/templates/marketing/agency-alt.html`
    * `html/templates/marketing/ecommerce.html`
    * `mymail/sections/preheaders/preheader-social.html`
    * `mymail/templates/zip-for-upload/kant.zip`
