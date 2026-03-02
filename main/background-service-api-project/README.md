
# Currency Converter – Simple JS (Split HTML/JS)

Pure HTML + vanilla JavaScript in **separate files**. Calls the **Frankfurter** open-source API for currency conversion.

## Run locally

### Option A — Double-click
- Open `index.html` in your browser.
- If your browser blocks cross-origin `fetch` for `file://`, use Option B.

### Option B — Serve statically (no Node required)
- Python 3 (often preinstalled):
  ```bash
  python -m http.server 8000
  ```
  Then open: http://localhost:8000/index.html

- Or VS Code **Live Server** extension.

## Use
- Enter `from` (e.g., USD), `to` (e.g., INR), and `amount`.
- Click **Convert**.
- Response JSON appears in the box.

## API
- Provider: Frankfurter (ECB) — https://www.frankfurter.app
- Endpoint used: `https://api.frankfurter.app/latest?from=USD&to=INR&amount=100`

## Notes
- No API key required.
- Some currency pairs may not be available if not covered by ECB.
