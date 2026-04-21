# melekson.com — Project Instructions

## Book quotes sync rule

The quotes displayed in the Book section of this site live in a **separate private repo**: `/Users/myron/code/myron-book/` ([GitHub](https://github.com/mmelekson/myron-book)). They are *not* authored here.

**Before updating quotes on the site:**

1. Run `git -C ~/code/myron-book pull` to fetch the latest.
2. Read `~/code/myron-book/quotes.md` and extract the body of each quote under the **"Approved quotes (live on melekson.com)"** section only. Ignore every other section — `Strong candidates`, `The bar for flagging a candidate`, `Tone rules`, `The review flow`. None of those are for the site.
3. Target: the `quotes` array at the top of `src/components/Book.jsx` (around line 5). Each approved quote becomes one string element, in the same order they appear in `quotes.md`.
4. Preserve em-dashes (`—`) and single quotes (`'`) exactly as written. No attribution lines, no source metadata, no markdown.
5. If a quote currently on the site is **not** in the Approved section, **stop and ask Myron before removing it** — he may have made a site-specific tweak.
6. Never invent quotes. Never pull from the "Strong candidates" section. Candidates only become approved when Myron explicitly approves them in a book-chat session over in the book repo.

## Site stack

- Vite + React + Tailwind
- Deploys to Vercel (see `vercel.json`)
- Main branch: `dev` is the active branch
