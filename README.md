# Gemini Omni Flash Prompts

Open, source-attributed prompt bundle for **Gemini Omni Flash** (`gemini-omni-flash`),
published by [Image Prompt Gallery](https://imagepromptgallery.com). It contains **390** prompts
for text-to-video and reference-driven video generation, curated from the Atlas Cloud prompt library.

- Website: https://imagepromptgallery.com
- Model page: https://imagepromptgallery.com/models/gemini-omni-flash/prompts
- Open repository: https://github.com/Toolcentral-ai/awesome-gemini-omni-flash-prompts
- Model key: `gemini-omni-flash`
- Domain: video
- Prompt count: 390
- Categories: 18
- Schema version: 2026-08-28
- License: MIT (see [LICENSE](LICENSE)); prompt data keeps source attribution

## Data Files

- `data/gemini-omni-flash-prompts.json`: the prompt bundle — an array of entries.
- `data/categories.json`: aggregated category counts.
- `schema/gemini-omni-flash-prompt.schema.json`: JSON Schema for one entry and the bundle.
- `skills/gemini-omni-flash-prompts/SKILL.md`: agent usage guide.
- `examples/read-prompts.mjs`: minimal Node reader.
- `examples/entries/`: a few exported example entries.
- `docs/source-gallery.md`: generated category overview.

## Entry Format

| Field | Type | Description |
|---|---|---|
| `id` | string | Stable id, `gemini-omni-flash-<source id>`. |
| `slug` | string | URL-friendly slug, suffixed with the model key. |
| `title` | string | Human-readable title. |
| `category` | string | Primary Atlas Cloud category. |
| `tags` | string[] | Secondary categories (empty when the source has one category). |
| `model` | string | Always `gemini-omni-flash`. |
| `domain` | string | `video`. |
| `inputMode` | string | `text_to_video` or `single_image_to_video`. |
| `prompt` | string | The reusable prompt text. |
| `variables` | array | Reserved for templated prompts (empty in this bundle). |
| `referenceImageCount` | number | How many images or videos the prompt expects as input. |
| `source.caseUrl` | string | https://imagepromptgallery.com/models/gemini-omni-flash/prompts |
| `source.attribution` | string | Original source URL, or `Atlas Cloud Prompt Library`. |

## Input Modes

- `text_to_video`: pure text prompt, no reference media.
- `single_image_to_video`: the prompt expects reference image(s) or video (`referenceImageCount > 0`).

`inputMode` is derived from structured reference fields in the source data and,
when those are absent, from explicit media placeholders in the prompt text
(`@image1`, `video 1`, `first frame`, ...).

## Categories

- Twitter Community: 286
- Atlas Generated I2V: 44
- Atlas Generated T2V: 33
- Mirror Transform: 5
- Camera And Scene Edit: 4
- Semantic Swap: 3
- Audio Sync: 2
- Object Morph: 2
- Sequence: 2
- Action & Motion: 1

Full counts: `data/categories.json`.

## Attribution And Reuse

Prompts are normalized from the Atlas Cloud prompt library and keep their
original attribution. Entries whose source is unknown are attributed to
`Atlas Cloud Prompt Library`. Commercial use still requires item-level review
of the original source rights, model provider terms, brands, likenesses, media
rights, and regional availability.

## Image Prompt Gallery

Browse and run these prompts on the Gemini Omni Flash model page:
https://imagepromptgallery.com/models/gemini-omni-flash/prompts

## Contribution

Open an issue or pull request with the public source URL, attribution notes,
and a short explanation of why the prompt is reusable for Gemini Omni Flash.
