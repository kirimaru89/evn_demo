# UI Spec v1

## Project

- Project name: MSM Operations
- Source context: `ScreenList`
- Product type: Enterprise operations web application
- Core style direction: Data-Dense Dashboard
- Visual discipline: Minimal Swiss
- Entry/portal framing: Enterprise Gateway

## Design Intent

This system should feel like an internal operations platform built for speed, clarity, and trust. The UI must support dense data, long forms, multi-step approval flows, and role-based access without looking heavy or outdated.

The visual tone should be professional, stable, and procedural:

- Light enterprise UI by default
- Strong hierarchy, low ornamentation
- Compact but readable density
- State-driven interaction design
- Tables, forms, filters, and approval actions are first-class UI patterns

## Principles

### 1. Clarity Before Decoration

Every screen should make the current object, status, and next available action obvious within the first few seconds.

Rules:

- Prefer borders over heavy shadows
- Prefer layout hierarchy over decorative effects
- Use color to encode meaning, not style novelty
- Keep page titles, breadcrumbs, and action areas explicit

### 2. Dense, Not Crowded

The product has many list views and workflows. Information density is required, but scanning must stay easy.

Rules:

- Use compact table rows and card padding
- Maintain predictable spacing rhythm
- Group related fields into sections
- Avoid mixing too many visual patterns on one screen

### 3. Status Is Part of the Interface

Approval and processing states are central to the system. Status must be visible at list level and at detail level.

Rules:

- Always display current status near object identity
- Use consistent badge colors across modules
- Group actions by state transition
- Confirm destructive or irreversible actions

### 4. One Design Language Across Modules

Although `ScreenList` covers many business domains, the UI should behave like one product.

Rules:

- Reuse the same shell layout
- Reuse the same filter bar structure
- Reuse the same table pattern
- Reuse the same detail page pattern
- Reuse the same confirmation modal structure

## Style Summary

### Chosen Style

- Primary style: Data-Dense Dashboard
- Supporting style: Minimalism and Swiss Style

### Rejected Styles

Do not use these as the base language:

- Glassmorphism
- Neumorphism
- Dark-first dashboard
- Playful SaaS
- Editorial or luxury style
- Gradient-heavy startup UI

## Color System

### Brand and Core

- `--color-primary-900`: `#1E3A8A`
- `--color-primary-800`: `#1E40AF`
- `--color-primary-700`: `#1D4ED8`
- `--color-primary-600`: `#2563EB`
- `--color-primary-100`: `#DBEAFE`
- `--color-primary-50`: `#EFF6FF`

### Neutral

- `--color-bg-app`: `#F8FAFC`
- `--color-bg-subtle`: `#F1F5F9`
- `--color-surface`: `#FFFFFF`
- `--color-surface-muted`: `#F8FAFC`
- `--color-border`: `#CBD5E1`
- `--color-border-strong`: `#94A3B8`
- `--color-text`: `#0F172A`
- `--color-text-muted`: `#475569`
- `--color-text-soft`: `#64748B`

### Semantic

- `--color-success`: `#16A34A`
- `--color-success-bg`: `#DCFCE7`
- `--color-warning`: `#D97706`
- `--color-warning-bg`: `#FEF3C7`
- `--color-danger`: `#DC2626`
- `--color-danger-bg`: `#FEE2E2`
- `--color-info`: `#2563EB`
- `--color-info-bg`: `#DBEAFE`

### Usage Rules

- Blue is for structure, navigation, primary actions, and informative emphasis.
- Green is for approved, completed, accepted, active-positive states.
- Amber is for waiting, pending review, needs attention, or in-progress caution.
- Red is for rejected, failed, overdue, destructive actions.
- Neutral grey is for drafts, disabled states, archived or inactive-neutral states.

## Status Mapping

Use one status language across modules whenever possible.

### Suggested Badge Mapping

- `Mới`: grey background with dark text
- `Đã tiếp nhận`: blue background with blue text
- `Đã kiểm tra`: indigo or blue-strong background with dark text
- `Đã gửi duyệt`: amber background with amber text
- `Đã duyệt`: green background with green text
- `Từ chối`: red background with red text
- `Đã thẩm tra`: cyan or info background with info text
- `Đang xử lý`: light blue or amber depending on module semantics
- `Hoàn thành`: green background with green text
- `Vô hiệu hóa`: muted grey or red-muted depending on risk

### Badge Rules

- Use pill or rounded rectangle badges
- Minimum height: `24px`
- Font size: `12px`
- Font weight: `600`
- Never rely on color alone; text label is required

## Typography

### Font Pairing

- Heading: `Lexend`
- Body: `Source Sans 3`

### Rationale

This pairing keeps the UI readable during long usage sessions, works well for Vietnamese labels, and feels more institutional and stable than a coding-oriented type system.

### Type Scale

- `--text-display`: `32px / 40px / 600`
- `--text-h1`: `28px / 36px / 600`
- `--text-h2`: `20px / 28px / 600`
- `--text-h3`: `16px / 24px / 600`
- `--text-body-lg`: `15px / 22px / 400`
- `--text-body`: `14px / 20px / 400`
- `--text-body-strong`: `14px / 20px / 600`
- `--text-small`: `13px / 18px / 400`
- `--text-caption`: `12px / 16px / 400`
- `--text-caption-strong`: `12px / 16px / 600`

### Typography Rules

- Page title uses `Lexend`
- Section titles use `Lexend`
- All body copy, forms, and tables use `Source Sans 3`
- Avoid ultra-light weights
- Avoid tracking adjustments unless needed for uppercase labels

## Spacing and Radius

### Spacing Scale

- `--space-1`: `4px`
- `--space-2`: `8px`
- `--space-3`: `12px`
- `--space-4`: `16px`
- `--space-5`: `20px`
- `--space-6`: `24px`
- `--space-8`: `32px`

### Radius

- `--radius-sm`: `6px`
- `--radius-md`: `8px`
- `--radius-lg`: `10px`
- `--radius-xl`: `12px`

### Shadow

Use shadows sparingly:

- `--shadow-sm`: `0 1px 2px rgba(15, 23, 42, 0.06)`
- `--shadow-md`: `0 4px 12px rgba(15, 23, 42, 0.08)`

Do not use floating card effects across the whole app.

## Layout Shell

### App Frame

- Left sidebar navigation
- Top app bar
- Main content region with scroll
- Sticky local action zones where needed

### Dimensions

- `--sidebar-width`: `240px`
- `--sidebar-width-collapsed`: `72px`
- `--topbar-height`: `56px`
- `--content-max-width`: `1600px`
- `--page-padding-x`: `24px`
- `--page-padding-y`: `20px`
- `--grid-gap`: `12px`

### Shell Behavior

- Sidebar contains module navigation and section grouping
- Topbar contains current context, search entry, notifications, and account menu
- Main content should not sit inside an overly narrow centered container
- Large data pages should use available horizontal space

## Navigation

### Global Navigation

- Left sidebar for primary modules
- Use clear labels, not marketing language
- Support collapse for intermediate widths
- Show current module and active item clearly

### Local Navigation

- Use breadcrumb on all interior pages
- Use tabs only when the object has closely related subviews
- Do not mix tabs and accordion for primary structure on the same screen

## Page Templates

### 1. List Page Template

Standard structure:

1. Breadcrumb
2. Page header
3. Filter bar
4. Data table
5. Pagination

Header content:

- Page title
- Short summary or item count if needed
- Primary button such as `Tạo mới`

### 2. Create/Edit Form Template

Standard structure:

1. Breadcrumb
2. Page header
3. Form sections
4. Sticky footer or top-right action area

Rules:

- Required fields marked consistently
- Related inputs grouped into cards or sections
- Long forms split into meaningful sections
- `Hủy` is secondary
- `Lưu` is primary

### 3. Detail/Approval Template

Standard structure:

1. Breadcrumb
2. Identity block
3. Status and metadata row
4. Read-only information sections
5. Activity/timeline or attached files
6. State-dependent action cluster

Action cluster may include:

- `Gửi kiểm tra`
- `Gửi duyệt`
- `Phê duyệt`
- `Từ chối`
- `Ký số`
- `Xác nhận`

## Data Table Spec

### Table Behavior

- Sticky header on long tables
- Sortable columns where meaningful
- Hover row highlight
- Row action menu or inline action icons
- Checkbox selection for bulk actions when appropriate
- Empty state with guidance, not just blank space

### Table Density

- Default row height: `40px`
- Dense row height: `36px`
- Header height: `40px`
- Cell padding: `8px 12px`
- Font size: `13px` or `14px`

### Column Types

- Identifier columns should be visually stronger
- Status columns use badges
- Date columns align to a predictable format
- Numeric or monetary values align right
- Action columns align right

### Mobile Handling

- Wrap table in horizontal scroll
- For selected critical screens, provide card-list fallback
- Never allow viewport-breaking overflow

## Filter Bar Spec

### Standard Pattern

Common filter bar order:

1. Keyword search
2. Status dropdown
3. Module-specific dropdowns
4. Date range
5. Secondary actions: reset, export, advanced filter

### Rules

- Keep controls aligned to a stable baseline
- Use one row on desktop where possible
- Wrap to multiple rows on narrower screens
- Do not hide critical filters behind an icon-only trigger on desktop

## Form Spec

### Input Sizing

- Standard input height: `40px`
- Textarea minimum height: `96px`
- Label spacing above input: `6px`
- Section gap: `16px` to `24px`

### Input Rules

- Use correct input types
- Validate on blur for most fields
- Show inline validation near the field
- Preserve user input on validation failure
- Use helper text only where it reduces ambiguity
- Support autofill for login and contact fields

### Required and Optional

- Mark required fields with `*`
- Do not mark optional fields if most fields are optional
- Choose one convention and apply it system-wide

### File Upload

- Show accepted formats
- Show file size limits
- Show upload progress if operation is not immediate
- Allow file removal before final submit
- Provide preview link for previewable files

## Buttons

### Hierarchy

- Primary: filled blue
- Secondary: white with blue or neutral border
- Tertiary: text button
- Danger: filled or outlined red depending on emphasis

### Standard Sizes

- Height: `40px`
- Horizontal padding: `12px` to `16px`
- Radius: `8px`
- Font: `14px / 600`

### Rules

- Primary action should be singular and obvious
- Avoid more than one filled button in the same action cluster unless the flow demands it
- Destructive actions should not visually compete with primary save/approve actions

## Modal and Dialog Spec

### Use Modal For

- Delete confirmation
- Send approval confirmation
- Reject with reason
- Signature confirmation
- File preview

### Modal Rules

- Clear title
- Short consequence summary
- Explicit button labels
- Safe default focus
- Close affordance available unless the action is forced

### Confirmation Pattern

Structure:

1. Title
2. One or two lines of consequence text
3. Optional reason input
4. Secondary cancel button
5. Primary confirmation button

## Feedback and System States

### Loading

- Show skeleton or spinner for waits longer than `300ms`
- Disable repeat submission during in-flight actions
- Keep layout stable while loading

### Success

- Use inline success or toast for lightweight actions
- For workflow transitions, update status immediately after success

### Error

- Provide human-readable error message
- Explain what failed and what the user can do next
- Keep user-entered data when possible

### Empty States

Empty state should include:

- Plain-language explanation
- Suggestion for next action
- Optional `Tạo mới` CTA when relevant

## Workflow UX

### Status Header

Every important detail page should have a top summary area containing:

- Object code
- Object title or short description
- Status badge
- Key metadata
- Last updated information if available

### Action Mapping

Actions must appear according to business state:

- Draft-like states show edit and submit actions
- Review states show approve and reject actions
- Approved states show downstream actions, not edit-first actions
- Closed states should minimize destructive controls

### Rejection Pattern

If the user rejects a record:

- Require a reason where business logic needs traceability
- Show the reason in history
- Reflect rejected state in list and detail views

## Accessibility

### Required

- WCAG AA minimum
- Visible `focus-visible` rings
- Keyboard support for navigation and dialogs
- Sufficient text contrast
- Reduced motion support
- Labels linked to form controls

### Tailwind-Oriented Notes

- Use `focus-visible:ring-2`
- Use `motion-reduce:transition-none`
- Use `motion-reduce:animate-none`
- Prefer semantic HTML first

## Iconography

- Use SVG icons only
- Prefer one icon set, such as Lucide
- Keep stroke width consistent
- Default icon sizes: `16px`, `18px`, `20px`
- Do not use emojis as UI icons

## Charts and Metrics

Charts are secondary in this product. Most modules are workflow-first, not analytics-first.

Rules:

- Use charts only on summary or management pages
- Favor bar, line, and donut charts
- Keep charts compact and decision-oriented
- Never let charts replace operational tables

## Motion

Motion should be present but restrained.

Allowed:

- Hover color transitions
- Row highlight
- Drawer slide
- Modal fade and scale with subtle timing
- Skeleton shimmer if gentle

Avoid:

- Large parallax
- Floating cards
- Elastic transitions
- Decorative page-load animation

### Timing

- Hover: `150ms` to `200ms`
- Modal: `180ms` to `220ms`
- Drawer: `200ms` to `240ms`

## Responsive Rules

### Breakpoints

- Mobile: `375px+`
- Tablet: `768px+`
- Desktop: `1024px+`
- Wide desktop: `1440px+`

### Strategy

- Desktop-first optimization
- Tablet usable for most pages
- Mobile supports lookup, review, and basic actions
- Heavy tables may degrade to horizontal scroll

### Sidebar Behavior

- Desktop: expanded by default
- Tablet: collapsible
- Mobile: off-canvas

## ScreenList Mapping

### authentication

- Login page: clean, centered, institutional, minimal distractions
- Home page: module gateway with clear cards or list tiles, not marketing hero blocks

### Admin

- Strong list and form patterns
- Clear permission/status display
- Audit log optimized for search and detail inspection

### Sửa chữa Máy biến áp

- Requires the strongest workflow status treatment
- Detail pages should emphasize current stage, attachments, and next actions

### Thí nghiệm CBM

- Similar to operations and reporting UI
- Keep plan and report flows visually parallel

### Thí nghiệm tạo doanh thu

- Needs careful modular consistency due to high scope and mixed process types
- Reuse the same shell aggressively to reduce cognitive load

### Tư vấn thiết kế

- Should feel slightly more document-oriented, but remain inside the same design system

## CSS Variable Starter

```css
:root {
  --color-primary-900: #1E3A8A;
  --color-primary-800: #1E40AF;
  --color-primary-700: #1D4ED8;
  --color-primary-600: #2563EB;
  --color-primary-100: #DBEAFE;
  --color-primary-50: #EFF6FF;

  --color-bg-app: #F8FAFC;
  --color-bg-subtle: #F1F5F9;
  --color-surface: #FFFFFF;
  --color-border: #CBD5E1;
  --color-border-strong: #94A3B8;
  --color-text: #0F172A;
  --color-text-muted: #475569;
  --color-text-soft: #64748B;

  --color-success: #16A34A;
  --color-success-bg: #DCFCE7;
  --color-warning: #D97706;
  --color-warning-bg: #FEF3C7;
  --color-danger: #DC2626;
  --color-danger-bg: #FEE2E2;
  --color-info: #2563EB;
  --color-info-bg: #DBEAFE;

  --sidebar-width: 240px;
  --topbar-height: 56px;
  --content-max-width: 1600px;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;

  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 10px;
  --radius-xl: 12px;

  --shadow-sm: 0 1px 2px rgba(15, 23, 42, 0.06);
  --shadow-md: 0 4px 12px rgba(15, 23, 42, 0.08);
}
```

## Tailwind Starter Notes

Recommended foundations:

- Inputs: `h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-900`
- Primary button: `h-10 rounded-md bg-blue-700 px-4 text-sm font-semibold text-white hover:bg-blue-800`
- Secondary button: `h-10 rounded-md border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-700 hover:bg-slate-50`
- Card: `rounded-lg border border-slate-200 bg-white p-4 shadow-sm`
- Page shell: `bg-slate-50 text-slate-900`
- Focus: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600`

## Delivery Checklist

- One shell layout across all modules
- One status system across all modules
- One filter bar pattern across all list pages
- One form spacing system across all create/edit pages
- One detail header pattern across all approval screens
- Consistent button hierarchy
- Consistent mobile table handling
- No decorative visual drift between modules

## Recommended Next Files

If this spec is expanded, split into:

1. `design-tokens.md`
2. `component-spec.md`
3. `page-patterns.md`
4. `workflow-status-map.md`
5. `tailwind-foundation.md`
