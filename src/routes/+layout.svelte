<script>
    import "../app.css";

    import { langs, lang } from "$lib/lang";

    if (($lang === "unset" || $lang === undefined) && langs.includes(navigator.language)) {
        lang.set(navigator.language);
    }
</script>
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&amp;display=swap" rel="stylesheet">
<div class="base w-full h-full">
    <slot></slot>
</div>
<style>
    .base {
        background-image: url("../../../../../../../../images/background.jpg");
        background-repeat: repeat;
        background-position-x: -40px;
        filter: brightness(0.8);
        background-size: 108%;
    }
</style>