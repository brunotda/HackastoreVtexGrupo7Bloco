# Professional Opinion

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://i.imgur.com/BMGbunF.png)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

Demo Product: https://grupo7--beautytheme.myvtex.com/q-cosmetics-shampoo-dark-hair/p

## Configuration

1. Add the `sandbox` app to your theme's dependencies in the `manifest.json`, for example:

```diff
 "dependencies ": {
+  "beautytheme.sandbox": "0.x"
 }
```

2. In any desired theme template, add the `sandbox` block. For example:

```json
  "store.product": {
    "children": [
      "flex-layout.row#product-breadcrumb",
      "flex-layout.row#product-main",
      "shelf#related",
      "sandbox"
    ]
  }
```

### `sandbox` props

| Prop name | Type     | Description                                                   | Default value |
| --------- | -------- | ------------------------------------------------------------- | ------------- |
| `title`  | `string`  | Title of Professional Opinion | `Opinião profissional`   |
| `img`  | `image` | Professional image   | `null`   |
| `professional`  | `string` | Professional name   | `undefined`   |
| `opinion`  | `string` | Professional opinion   | `undefined`   |
| `fontSize`  | `number` | Title font-size   | `20`   |
| `imageSize`  | `number` | Size of professional image   | `20`   |
| `textDistance`  | `number` | Margin left and right of Professional name   | `20`   |
| `characterLimit`  | `number` | Character limit of the opinion   | `9999`   |


## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows: [Anderson Lopes](https://github.com/alopsantos),  [Bruno T. Arauno](https://github.com/brunotda), [Jeronimo Silva](https://github.com/jeronimo-silva), [Laís Escorcio](https://github.com/laisescorcio), [Marcos Maia](https://github.com/marcoshenriquemaia), [Matheus Cunha](https://github.com/MatCunha). Contributions of any kind welcome!
