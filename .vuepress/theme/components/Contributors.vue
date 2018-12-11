<template>
<div>
    <div class="text-blue-dark text-center text-2xl mt-8">Contributors</div>
    <hr class="border-t-2 border-blue-lighter w-24">
    <div class="flex flex-wrap justify-center">
        <span v-for="username in $page.frontmatter.contributors">
        <a class="flex flex-row p-4 items-center no-underline text-blue-dark font-bold hover:text-green"
        :href="'https://github.com/'+username+''" target="_blank" rel="noopener">
            <span class="w-16 h-16 rounded-full border-2 border-green overflow-hidden">
                <img :src="'https://github.com/'+username+'.png?size=100'" :alt="username">
            </span>
            <span class="ml-3">{{username}}</span>
        </a>
        </span>
    </div>
</div>
</template>
<script>
export default {
  name: 'Contributors'
};
</script>