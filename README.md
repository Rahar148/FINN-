# FINN — RahaR Team Clipboard

FINN is a private Chrome/Edge extension and web dashboard for a team of up to 10 people. It captures selected text, pages, links, and quick notes; supports a shared feed, private clips, tags, search, personal pins, copy/open actions, and owner-managed member access.

## Production configuration

- Supabase project: `efwfsiqkuydxbeaepvfx` (Mumbai / `ap-south-1`)
- Team: `RahaR FINN`
- Initial owner email: `tengalirahul@gmail.com`
- Access: explicit email allowlist, maximum 10 members
- Security: Supabase Row Level Security on teams, profiles, memberships, clips, pins, and allowlist
- No service-role key or private secret is included in the extension. The embedded Supabase publishable key is designed for public clients; RLS is the security boundary.

## Install in Chrome

1. Extract `FINN-extension.zip` to a permanent folder.
2. Open `chrome://extensions`.
3. Turn on **Developer mode**.
4. Click **Load unpacked**.
5. Select the extracted folder—the folder containing `manifest.json`.
6. Pin **FINN — Team Clipboard** from Chrome’s Extensions menu.

## Install in Microsoft Edge

1. Extract `FINN-extension.zip`.
2. Open `edge://extensions`.
3. Turn on **Developer mode**.
4. Click **Load unpacked** and select the extracted folder.

## First sign-in

1. Open FINN and enter the approved email. Rahul’s owner email is already approved.
2. Click **Send sign-in code**.
3. Open the Supabase email. Enter its 6-digit code in FINN. If the email contains a sign-in button rather than a code, copy that button’s complete link and paste it into the same field.
4. Click **Verify and enter FINN**.

The browser keeps the user’s Supabase session locally. Signing out removes that local session.

## Add the other team members

1. Sign in as `tengalirahul@gmail.com`.
2. Open **Team settings**.
3. Enter each teammate’s email and click **Add member**.
4. Ask each teammate to install FINN and request a code with exactly that email.

The database rejects an 11th allowed email. Only an owner/admin may view or change the allowlist. The owner entry cannot be removed through the extension.

## Capturing work

- Click FINN to capture the current page, selected text, or a note.
- Right-click selected text, a page, or a link and choose the FINN action. Context-menu captures are safely queued in the extension and synchronized after FINN is opened while signed in.
- Choose **Team** or **Only me** for each capture.
- Use Team feed, Pinned, and search to retrieve saved work.

## GitHub Pages

The contents of `github-pages/` are ready for the repository root. GitHub Pages should deploy from `main` and `/ (root)`. The dashboard URL is:

`https://rahar148.github.io/FINN-/`

## Technical notes

This final package is dependency-free at runtime and uses Manifest V3. It requests only storage, contextMenus, activeTab, and scripting, plus host access to the user-owned FINN Supabase endpoint. Extension CSP allows only local scripts and the Supabase HTTPS/WebSocket endpoint. The UI uses local system fonts and has no remote asset dependency.
