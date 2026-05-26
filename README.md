# AI Security Landscape

An open, community-maintained map of AI use cases in cybersecurity — organised
by ML / AI approach and security department.

Each topic lives in a single Markdown file. Add one and the site picks it up
automatically. No JavaScript or build knowledge required to contribute.

## Status

Early-stage. The interactive coordinate map and the per-topic detail UI are
being built out in phases.

| Phase | Scope | State |
|---|---|---|
| 1 | Project scaffold, schema, contributor template, base pages | done |
| 2 | D3 coordinate map on the overview page | next |
| 3 | Detail page with key-factor bars and Mermaid connection tree | upcoming |
| 4 | Import the remaining topics from the source spreadsheet | upcoming |
| 5 | PR validation workflow + GitHub Pages deploy | upcoming |

## How it works

- **Content**: every topic is a Markdown file in `src/content/topics/`.
- **Schema**: `src/content/config.ts` defines the required frontmatter fields
  (title, position, maturity, factors, connections). The build fails if a
  topic violates the schema.
- **Rendering**: Astro builds a fully static site. No backend, no database.
- **Hosting**: designed for GitHub Pages once the repo is public.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

Node 18+ recommended.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). The short version: copy
`src/content/topics/_template.md`, fill in the frontmatter, write a short
description, open a pull request.

## License

MIT — see [LICENSE](./LICENSE).
