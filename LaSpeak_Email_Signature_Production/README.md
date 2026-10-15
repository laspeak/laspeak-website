# LaSpeak production email signature

## 1. Host the images
Copy the contents of `public/email-assets/` into the LaSpeak Next.js project under:

    public/email-assets/

After deployment these URLs MUST open publicly without authentication:

- https://laspeak.eu/email-assets/logo.png
- https://laspeak.eu/email-assets/globe.png
- https://laspeak.eu/email-assets/mail.png

Do not rename these files unless you also update the HTML.

## 2. Why PNG instead of SVG in the email
The source artwork can remain vector internally, but production email uses PNG because linked/embedded SVG support is inconsistent across major email clients, especially Outlook/Gmail variants.

The logo PNG is intentionally high resolution and displayed much smaller than its native dimensions, so it remains sharp on Retina screens.

## 3. Font stack
The signature uses:

    Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, Helvetica, sans-serif

Email cannot guarantee a webfont such as Onest or Inter for every recipient. Gmail and many Outlook versions do not reliably support @font-face. This stack guarantees a sans-serif fallback rather than Times New Roman:
- Inter where installed
- San Francisco on Apple devices
- Segoe UI on Windows
- Arial/Helvetica elsewhere

## 4. Install in Apple Mail
For the most reliable result:
1. Mail > Settings > Signatures: create a temporary signature.
2. Disable “Always match my default message font”.
3. Quit Mail completely.
4. Find the new `.mailsignature` file.
5. Keep the MIME/header lines at the top.
6. Replace only the HTML body after the blank line with `signature-fragment.html`.
7. Save and lock the `.mailsignature` file in Finder.
8. Reopen Mail and test by sending to Gmail and Outlook.

## 5. Important limitation
No HTML email can guarantee that remotely hosted images are displayed in 100% of clients, because recipients can block remote content. The text and links still remain visible. Hosting on laspeak.eu gives you full control of the URLs and avoids third-party image hosts.
