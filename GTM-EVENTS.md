# GTM Events — Kavomaz Books

Container ID: `GTM-KS4JF3BW`

The website pushes these events into `dataLayer`:

| Event | Purpose | Recommended GA4 Event |
|---|---|---|
| `page_ready` | Page loaded and script initialized | `page_ready` |
| `menu_toggle` | Mobile menu interaction | `menu_toggle` |
| `cta_click` | General CTA click | `cta_click` |
| `amazon_click` | Amazon button/link click | `amazon_click` |
| `affiliate_partner_click` | Non-Amazon affiliate partner click | `affiliate_partner_click` |
| `sample_download` | Free sample PDF download | `sample_download` |
| `contact_click` | Email, phone, WhatsApp or contact CTA | `contact_click` |
| `external_link_click` | Any outbound link click | `external_link_click` |
| `product_click` | Book/product card click | `product_click` |

Recommended GA4 conversions:
- `amazon_click`
- `sample_download`
- `contact_click`
- `affiliate_partner_click`

Recommended GTM setup:
1. Create one GA4 Configuration tag.
2. Create Custom Event triggers for the event names above.
3. Create GA4 Event tags mapped to each trigger.
4. Add Microsoft Clarity, Pinterest, TikTok, Meta, LinkedIn and Google Ads tags inside GTM only.
