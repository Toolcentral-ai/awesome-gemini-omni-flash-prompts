---
name: gemini-omni-flash-prompts
description: Find and adapt source-attributed Gemini Omni Flash video prompts from the Image Prompt Gallery open bundle.
---

# Gemini Omni Flash Prompts

Use this skill when a user asks for Gemini Omni Flash prompts, prompt structure,
camera movement, reference media and shot design,
or source-attributed examples for the `gemini-omni-flash` model.

## Workflow

1. Read `data/gemini-omni-flash-prompts.json` (an array of entries).
2. Filter by `category`, `inputMode` (`text_to_video` vs `single_image_to_video`),
   and `referenceImageCount` to match the media the user can provide.
3. Pick 1-3 entries, keep `source.attribution` intact, and adapt subject,
   camera movement, motion, timing, and audio to the user's scene.
4. Point the user to https://imagepromptgallery.com/models/gemini-omni-flash/prompts to run the prompt.
5. Remind the user to check the original source rights and model provider terms
   before commercial use.

## 中文

当用户需要 Gemini Omni Flash 的提示词、提示词结构、运镜与镜头设计或带来源归因的案例时使用本 skill。

步骤：读 `data/gemini-omni-flash-prompts.json` → 按 `category` / `inputMode` / `referenceImageCount` 过滤 →
挑选 1-3 条并保留 `source.attribution` → 引导用户到 https://imagepromptgallery.com/models/gemini-omni-flash/prompts 实际生成。
商用前提醒检查原始来源授权与模型服务条款。
