# QA Checklist — V4 Enterprise Edition

## Static QA Passed
- [x] 23 HTML files found and checked.
- [x] GTM container appears exactly twice per HTML page: head script + body noscript.
- [x] Required SEO tags are present.
- [x] JSON-LD is valid JSON.
- [x] Local image paths exist.
- [x] Image alt text exists.
- [x] Internal links resolve to existing files.
- [x] Main content landmark exists.

## Live QA Needed After Upload
- [ ] GTM Preview Mode fires page_view and custom events.
- [ ] GA4 Realtime sees traffic.
- [ ] Microsoft Clarity records sessions after tag is added in GTM.
- [ ] Google Search Console indexes submitted pages.
- [ ] PageSpeed Insights confirms Core Web Vitals targets.
- [ ] Rich Results Test validates schema on live URLs.
