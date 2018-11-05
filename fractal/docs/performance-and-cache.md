---
title: Performance & Cache optimisation
---

## Monitoring Tools

- [Google lighthouse](https://www.google.fr/search?q=Google+lighthouse&oq=Google+lighthouse&aqs=chrome..69i57j69i60l2j0l3.197j0j7&sourceid=chrome&ie=UTF-8)
- [Catchpoint](https://portal.catchpoint.com/ui/Entry/Login.aspx)

## Preload assets

One of the possibility is to use the `<link rel="preload">` inside the `<head>`. This feature allow modern browser to
discover and preload front-end asset. Here a the official MDN documentation:

> https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content

To preload asset in Sitecore, edit `src/Project/LRP/code/Views/LRP/Layout/Layout.cshtml` and add `<link rel="preload">` inside the `<head>` tag.

```html
@using Loreal.Foundation.Dictionary.Extensions
...

@model RenderingModel

@{
    // FE assets
    var revId = System.Configuration.ConfigurationManager.AppSettings["xxx"];
    var styleUrl = "/themes/LRP/css/bundle.css?v=" + revId;
    var vendorsUrl = "/themes/LRP/vendors.bundle.js?v=" + revId;
    var bundleUrl = "/themes/LRP/bundle.js?v=" + revId;
}

<!DOCTYPE html>
<html class="no-js no-touch" lang="@Model.Item.Language.Name">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Use modern browser feature to preload assets -->
    <link rel="preload" href="@styleLink" as="style">
    <link rel="preload" href="@vendorsUrl" as="script">
    <link rel="preload" href="@bundleUrl" as="script">

    <link rel="stylesheet" href="@styleLink">
</head>
<body class="@(Sitecore.Context.PageMode.IsNormal ? "" : (Sitecore.Context.PageMode.IsExperienceEditor ? "pagemode-edit" : "pagemode-preview")) @Sitecore.Context.Site.Name" @Html.Sxa().Body().Decorate()>

    ...

    <!-- FE Bundles -->
    <script src="@vendorsUrl"></script>
    <script src="@bundleUrl"></script>
</body>
</html>
```

## Use revisionId to avoid cache Browser

Sitecore provide a revisionId which can be used to versionning assets and avoid the cache browser.
The revisionId is accessible in a `*.cshtml` file with this code:

```javascript
System.Configuration.ConfigurationManager.AppSettings["xxx"]
```

## PWA

See [Progressive webapp](/docs/progressive-webapp) section.
