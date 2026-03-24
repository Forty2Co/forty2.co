# Loops.so Email Integration

## Summary

The EmailForm on forty2.co integrates with [Loops.so](https://loops.so) to collect email subscriptions. The integration is entirely client-side — no backend, no API keys — using the Loops.so Forms endpoint.

## How It Works

```
Visitor → EmailForm → loopsClient → Loops.so Forms API
```

1. Visitor enters email and clicks submit
2. EmailForm validates the email client-side
3. If valid, `loopsClient` POSTs to `https://app.loops.so/api/newsletter-form/{FORM_ID}`
4. Loops.so responds with `{ success: true/false }`
5. EmailForm shows success or error message

## Key Files

| File | Purpose |
|------|---------|
| `src/lib/loopsClient.js` | HTTP client for Loops.so Forms endpoint |
| `src/components/EmailForm.jsx` | Email subscription form component |
| `.env.example` | Documents the `VITE_LOOPS_FORM_ID` variable |

## Configuration

Set the Loops.so form ID via environment variable:

```bash
VITE_LOOPS_FORM_ID=your_loops_form_id_here
```

Get the form ID from: Loops.so dashboard → Forms → Settings → Form Endpoint.

If `VITE_LOOPS_FORM_ID` is not set, the form works in offline mode — validation only, no API call, immediate success message.

## API Details

- Endpoint: `https://app.loops.so/api/newsletter-form/{FORM_ID}`
- Method: POST
- Content-Type: `application/x-www-form-urlencoded`
- Body: `email=<url_encoded_email>`
- No authentication required (form ID is public, not secret)

## Error Handling

| Scenario | User Sees |
|----------|-----------|
| Valid email, API success | "Thanks! We'll keep you posted." |
| API error (400/500) | "Something went wrong. Please try again." |
| Rate limited (429) | "Too many requests. Please try again later." |
| Timeout (>10s) / network error | "Something went wrong. Please try again." |
| Duplicate email | "Thanks! We'll keep you posted." (treated as success) |
| Form ID not configured | "Thanks! We'll keep you posted." (no API call) |

## Session Deduplication

After a successful submission, subsequent submits in the same browser session skip the API call and show the success message immediately. This is in-memory only (not persisted).

## Loops.so Server-Side Rate Limiting

The Forms endpoint has built-in rate limiting (HTTP 429). The client handles this gracefully with a user-friendly message.
