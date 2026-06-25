# Deployment Guide — GitHub Pages

1. Unzip `kavomaz-books-v4-enterprise-edition.zip`.
2. Open your existing GitHub Pages repository folder on your computer.
3. Delete the old website files from the repository folder.
4. Copy all files from this V4 ZIP into the repository folder.
5. Confirm these files are at the root level:
   - `index.html`
   - `style.css`
   - `script.js`
   - `sitemap.xml`
   - `robots.txt`
   - `CNAME`
6. Commit the changes in GitHub Desktop.
7. Push to GitHub.
8. Wait 2–10 minutes for GitHub Pages deployment.
9. Open `https://books.kavomaz.com` in an incognito browser.
10. Run post-deployment checks:
    - GTM Preview
    - GA4 Realtime
    - Search Console URL Inspection
    - Submit `https://books.kavomaz.com/sitemap.xml`

Do not add GA4, Clarity, Pinterest, TikTok, Meta or LinkedIn scripts directly to HTML. Add them inside GTM only.
