<script>
    import Center from "$lib/ui/center.svelte";
    import { gsap } from "gsap";

    import translate from "$lib/lang";
    import 'animate.css';
</script>
<center class="h-full">
    <center style="width: fit-content;" class="h-full px-80 py-5 bluebanner">
    <div class="text-white flex flex-col flex-wrap animate__animated animate__rubberBand">
        <div class="text-left text-4xl font">{translate("title_welcome")}</div>
        <div class="text-8xl font animate__animated animate__pulse animate__infinite animate__slower animate__delay-1s">{translate("title")}</div>
        <div class="text-right text-4xl font">{translate("title_website")}</div>
    </div>
    </center>
</center>

<style>
    .bluebanner {
        background-color: rgba(5, 55, 219, 1);
    }
</style>
