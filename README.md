# melekson.com

## Photo slots

Galleries stay hidden until a photo is both on disk and listed in `src/data/content.js` (`photos.teaching` or `photos.community`). Do not add stock photos of people.

1. Put the file in `public/photos/` using one of these names.
2. Add `{ file, caption, alt }` to the matching array.

| Filename | Array | Suggested caption |
| --- | --- | --- |
| `teaching-class.jpg` | `photos.teaching` | Class photo |
| `teaching-session.jpg` | `photos.teaching` | Cohort session |
| `community-gnmcc.jpg` | `photos.community` | Greater North Miami Chamber of Commerce |
| `community-hack-aventura.jpg` | `photos.community` | Hack Aventura |

`npm run dev` and `npm run build` refresh which files exist. jpg, png, webp, and avif are accepted. An array entry with no file stays hidden.
