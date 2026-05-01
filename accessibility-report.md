# Accessibility Audit Report

**Date:** 2026-05-01
**Tool:** Playwright + axe-core
**Site:** visitmy.website

## Summary

- **Total pages audited:** 405
- **Pages with violations:** 405
- **Distinct violation types:** 10

### Violations by Impact

| Impact | Distinct Rules |
|--------|----------------|
| critical | 1 |
| serious | 6 |
| moderate | 2 |
| minor | 1 |

## Violations by Rule

_Sorted by impact (critical → minor), then by number of affected pages._

### `label` — CRITICAL

**Form elements must have labels**

Ensure every form element has a label

- **Affected pages:** 1
- **Total element occurrences:** 1
- **More info:** https://dequeuniversity.com/rules/axe/4.11/label?application=playwright

<details><summary>Affected pages</summary>

- http://localhost:8080/search/

</details>

### `aria-hidden-focus` — SERIOUS

**ARIA hidden element must not be focusable or contain focusable elements**

Ensure aria-hidden elements are not focusable nor contain focusable elements

- **Affected pages:** 403
- **Total element occurrences:** 403
- **More info:** https://dequeuniversity.com/rules/axe/4.11/aria-hidden-focus?application=playwright

<details><summary>Affected pages (403 pages — showing first 10)</summary>

- http://localhost:8080/2018/07/14/the-reshuffle/
- http://localhost:8080/2018/07/23/the-discovery/
- http://localhost:8080/2018/08/04/the-step-up/
- http://localhost:8080/2018/08/11/the-farewell/
- http://localhost:8080/2018/08/18/the-boost/
- http://localhost:8080/2018/08/25/the-unity/
- http://localhost:8080/2018/09/01/the-snorlax/
- http://localhost:8080/2018/09/07/the-cusp/
- http://localhost:8080/2018/09/16/the-successful-experiment/
- http://localhost:8080/2018/09/22/the-finale/
- _(and 393 more)_

</details>

### `document-title` — SERIOUS

**Documents must have <title> element to aid in navigation**

Ensure each HTML document contains a non-empty <title> element

- **Affected pages:** 2
- **Total element occurrences:** 2
- **More info:** https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright

<details><summary>Affected pages</summary>

- http://localhost:8080/2020/09/06/things-to-do-as-a-new-product-manager/
- http://localhost:8080/all/

</details>

### `html-has-lang` — SERIOUS

**<html> element must have a lang attribute**

Ensure every HTML document has a lang attribute

- **Affected pages:** 2
- **Total element occurrences:** 2
- **More info:** https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright

<details><summary>Affected pages</summary>

- http://localhost:8080/2020/09/06/things-to-do-as-a-new-product-manager/
- http://localhost:8080/all/

</details>

### `frame-title` — SERIOUS

**Frames must have an accessible name**

Ensure <iframe> and <frame> elements have an accessible name

- **Affected pages:** 1
- **Total element occurrences:** 1
- **More info:** https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright

<details><summary>Affected pages</summary>

- http://localhost:8080/2020/12/24/2020-year-in-review/

</details>

### `scrollable-region-focusable` — SERIOUS

**Scrollable region must have keyboard access**

Ensure elements that have scrollable content are accessible by keyboard in Safari

- **Affected pages:** 1
- **Total element occurrences:** 1
- **More info:** https://dequeuniversity.com/rules/axe/4.11/scrollable-region-focusable?application=playwright

<details><summary>Affected pages</summary>

- http://localhost:8080/2021/12/18/how-to-setup-jekyll-with-tailwind-css/

</details>

### `color-contrast` — SERIOUS

**Elements must meet minimum color contrast ratio thresholds**

Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds

- **Affected pages:** 1
- **Total element occurrences:** 2
- **More info:** https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright

<details><summary>Affected pages</summary>

- http://localhost:8080/2025/01/25/for-fans-of-margaret-calvert/

</details>

### `page-has-heading-one` — MODERATE

**Page should contain a level-one heading**

Ensure that the page, or at least one of its frames contains a level-one heading

- **Affected pages:** 403
- **Total element occurrences:** 405
- **More info:** https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright

<details><summary>Affected pages (403 pages — showing first 10)</summary>

- http://localhost:8080/2018/07/14/the-reshuffle/
- http://localhost:8080/2018/07/23/the-discovery/
- http://localhost:8080/2018/08/04/the-step-up/
- http://localhost:8080/2018/08/11/the-farewell/
- http://localhost:8080/2018/08/18/the-boost/
- http://localhost:8080/2018/08/25/the-unity/
- http://localhost:8080/2018/09/01/the-snorlax/
- http://localhost:8080/2018/09/07/the-cusp/
- http://localhost:8080/2018/09/16/the-successful-experiment/
- http://localhost:8080/2018/09/22/the-finale/
- _(and 393 more)_

</details>

### `landmark-one-main` — MODERATE

**Document should have one main landmark**

Ensure the document has a main landmark

- **Affected pages:** 2
- **Total element occurrences:** 2
- **More info:** https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright

<details><summary>Affected pages</summary>

- http://localhost:8080/2020/09/06/things-to-do-as-a-new-product-manager/
- http://localhost:8080/all/

</details>

### `image-redundant-alt` — MINOR

**Alternative text of images should not be repeated as text**

Ensure image alternative is not repeated as text

- **Affected pages:** 1
- **Total element occurrences:** 1
- **More info:** https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright

<details><summary>Affected pages</summary>

- http://localhost:8080/2018/11/10/the-staying-of-the-course/

</details>

